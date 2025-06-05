import React from 'react';

/**
 * 图片预加载工具
 * 支持关键图片的智能预加载和缓存
 */

interface PreloadImageOptions {
  priority?: boolean;
  sizes?: string;
  media?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
  referrerPolicy?: string;
}

interface ImageCache {
  url: string;
  loaded: boolean;
  error: boolean;
  timestamp: number;
}

class ImagePreloader {
  private cache = new Map<string, ImageCache>();
  private loadingPromises = new Map<string, Promise<boolean>>();

  /**
   * 预加载单个图片
   */
  async preloadImage(url: string, options: PreloadImageOptions = {}): Promise<boolean> {
    // 检查缓存
    const cached = this.cache.get(url);
    if (cached) {
      return cached.loaded && !cached.error;
    }

    // 检查是否正在加载
    if (this.loadingPromises.has(url)) {
      return this.loadingPromises.get(url)!;
    }

    // 创建加载Promise
    const loadPromise = this.loadSingleImage(url, options);
    this.loadingPromises.set(url, loadPromise);

    try {
      const result = await loadPromise;
      this.cache.set(url, {
        url,
        loaded: result,
        error: !result,
        timestamp: Date.now(),
      });
      return result;
    } finally {
      this.loadingPromises.delete(url);
    }
  }

  /**
   * 批量预加载图片
   */
  async preloadImages(urls: string[], options: PreloadImageOptions = {}): Promise<boolean[]> {
    return Promise.all(urls.map(url => this.preloadImage(url, options)));
  }

  /**
   * 预加载关键图片（使用link标签）
   */
  preloadCriticalImages(images: Array<{ url: string; options?: PreloadImageOptions }>) {
    if (typeof document === 'undefined') return;

    images.forEach(({ url, options = {} }) => {
      // 检查是否已经有预加载链接
      const existingLink = document.querySelector(`link[href="${url}"]`);
      if (existingLink) return;

      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;

      if (options.crossOrigin) {
        link.crossOrigin = options.crossOrigin;
      }

      if (options.media) {
        link.media = options.media;
      }

      if (options.referrerPolicy) {
        link.referrerPolicy = options.referrerPolicy;
      }

      document.head.appendChild(link);
    });
  }

  /**
   * 实际加载图片的方法
   */
  private loadSingleImage(url: string, options: PreloadImageOptions): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      
      if (options.crossOrigin) {
        img.crossOrigin = options.crossOrigin;
      }

      if (options.referrerPolicy) {
        img.referrerPolicy = options.referrerPolicy;
      }

      const cleanup = () => {
        img.onload = null;
        img.onerror = null;
      };

      img.onload = () => {
        cleanup();
        resolve(true);
      };

      img.onerror = () => {
        cleanup();
        resolve(false);
      };

      img.src = url;

      // 设置超时
      setTimeout(() => {
        cleanup();
        resolve(false);
      }, 10000); // 10秒超时
    });
  }

  /**
   * 检查图片是否已缓存
   */
  isImageCached(url: string): boolean {
    const cached = this.cache.get(url);
    return cached ? cached.loaded && !cached.error : false;
  }

  /**
   * 清理过期缓存
   */
  cleanupCache(maxAge = 30 * 60 * 1000) { // 默认30分钟
    const now = Date.now();
    this.cache.forEach((cache, url) => {
      if (now - cache.timestamp > maxAge) {
        this.cache.delete(url);
      }
    });
  }

  /**
   * 获取缓存统计
   */
  getCacheStats() {
    const total = this.cache.size;
    const loaded = Array.from(this.cache.values()).filter(c => c.loaded).length;
    const errors = Array.from(this.cache.values()).filter(c => c.error).length;

    return {
      total,
      loaded,
      errors,
      hitRate: total > 0 ? loaded / total : 0,
    };
  }
}

// 创建全局实例
export const imagePreloader = new ImagePreloader();

/**
 * React Hook for image preloading
 */
export function useImagePreload(urls: string | string[], options: PreloadImageOptions = {}) {
  const [loadedImages, setLoadedImages] = React.useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const urlArray = Array.isArray(urls) ? urls : [urls];
    
    const preload = async () => {
      setIsLoading(true);
      const results = await imagePreloader.preloadImages(urlArray, options);
      
      const loaded = new Set<string>();
      urlArray.forEach((url, index) => {
        if (results[index]) {
          loaded.add(url);
        }
      });
      
      setLoadedImages(loaded);
      setIsLoading(false);
    };

    preload();
  }, [urls, options]);

  return {
    loadedImages,
    isLoading,
    isImageLoaded: (url: string) => loadedImages.has(url),
  };
}

/**
 * 智能图片预加载策略
 */
export class SmartImagePreloader {
  private observer?: IntersectionObserver;
  private preloadQueue: string[] = [];
  private readonly maxConcurrent = 3;
  private currentLoading = 0;

  constructor() {
    this.setupIntersectionObserver();
  }

  /**
   * 设置Intersection Observer用于懒加载
   */
  private setupIntersectionObserver() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.dataset.src;
            if (src) {
              this.addToQueue(src);
              this.observer?.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '100px', // 提前100px开始加载
        threshold: 0.1,
      }
    );
  }

  /**
   * 观察图片元素
   */
  observe(element: HTMLImageElement) {
    if (this.observer) {
      this.observer.observe(element);
    }
  }

  /**
   * 添加到预加载队列
   */
  private addToQueue(url: string) {
    if (!this.preloadQueue.includes(url)) {
      this.preloadQueue.push(url);
      this.processQueue();
    }
  }

  /**
   * 处理预加载队列
   */
  private async processQueue() {
    while (this.preloadQueue.length > 0 && this.currentLoading < this.maxConcurrent) {
      const url = this.preloadQueue.shift();
      if (url) {
        this.currentLoading++;
        try {
          await imagePreloader.preloadImage(url);
        } finally {
          this.currentLoading--;
        }
      }
    }
  }

  /**
   * 清理资源
   */
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.preloadQueue = [];
  }
}

// 导出便捷函数
export const preloadImage = (url: string, options?: PreloadImageOptions) => 
  imagePreloader.preloadImage(url, options);

export const preloadImages = (urls: string[], options?: PreloadImageOptions) => 
  imagePreloader.preloadImages(urls, options);

export const preloadCriticalImages = (images: Array<{ url: string; options?: PreloadImageOptions }>) => 
  imagePreloader.preloadCriticalImages(images);

// 在应用启动时清理过期缓存
if (typeof window !== 'undefined') {
  // 定期清理缓存
  setInterval(() => {
    imagePreloader.cleanupCache();
  }, 5 * 60 * 1000); // 每5分钟清理一次
} 