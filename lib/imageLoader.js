/**
 * 自定义图片加载器
 * 支持多CDN切换、智能优化和失败重试
 */

const isDev = process.env.NODE_ENV === 'development';
const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL || 'https://cdn.acaboost.com';
const fallbackUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://acaboost.com';

// CDN提供商配置
const cdnProviders = [
  {
    name: 'primary',
    baseUrl: cdnUrl,
    transform: (src, width, quality) => `${cdnUrl}${src}?w=${width}&q=${quality}&fm=webp&fit=crop&auto=format`,
  },
  {
    name: 'cloudinary',
    baseUrl: 'https://res.cloudinary.com/acaboost',
    transform: (src, width, quality) => {
      const filename = src.split('/').pop();
      return `https://res.cloudinary.com/acaboost/image/fetch/w_${width},q_${quality},f_auto,c_fill/${encodeURIComponent(fallbackUrl + src)}`;
    },
  },
  {
    name: 'fallback',
    baseUrl: fallbackUrl,
    transform: (src, width, quality) => `${fallbackUrl}${src}`,
  },
];

/**
 * 主要的图片加载器函数
 * @param {Object} params - 加载参数
 * @param {string} params.src - 图片源路径
 * @param {number} params.width - 目标宽度
 * @param {number} params.quality - 图片质量 (1-100)
 * @returns {string} 优化后的图片URL
 */
export default function imageLoader({ src, width, quality = 75 }) {
  // 开发环境直接返回本地路径
  if (isDev) {
    return src;
  }

  // 如果是外部URL，直接返回
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // 确保src以/开头
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  
  // 获取首选CDN提供商
  const preferredProvider = getPreferredProvider();
  
  try {
    return preferredProvider.transform(normalizedSrc, width, quality);
  } catch (error) {
    console.warn('Failed to transform image URL:', error);
    return fallbackUrl + normalizedSrc;
  }
}

/**
 * 获取首选的CDN提供商
 * 基于网络状况和可用性选择
 */
function getPreferredProvider() {
  // 从localStorage获取之前的性能数据
  if (typeof window !== 'undefined') {
    const performanceData = getPerformanceData();
    const bestProvider = getBestPerformingProvider(performanceData);
    if (bestProvider) {
      return bestProvider;
    }
  }
  
  // 默认返回主CDN
  return cdnProviders[0];
}

/**
 * 获取CDN性能数据
 */
function getPerformanceData() {
  try {
    const data = localStorage.getItem('cdn-performance');
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

/**
 * 获取性能最佳的CDN提供商
 */
function getBestPerformingProvider(performanceData) {
  let bestProvider = null;
  let bestScore = Infinity;
  
  for (const provider of cdnProviders) {
    const providerData = performanceData[provider.name];
    if (providerData && providerData.averageLoadTime < bestScore) {
      bestScore = providerData.averageLoadTime;
      bestProvider = provider;
    }
  }
  
  return bestProvider;
}

/**
 * 记录图片加载性能
 * @param {string} providerName - CDN提供商名称
 * @param {number} loadTime - 加载时间（毫秒）
 */
export function recordLoadTime(providerName, loadTime) {
  if (typeof window === 'undefined') return;
  
  try {
    const performanceData = getPerformanceData();
    
    if (!performanceData[providerName]) {
      performanceData[providerName] = {
        totalLoadTime: 0,
        loadCount: 0,
        averageLoadTime: 0,
        lastUpdated: Date.now(),
      };
    }
    
    const providerData = performanceData[providerName];
    providerData.totalLoadTime += loadTime;
    providerData.loadCount += 1;
    providerData.averageLoadTime = providerData.totalLoadTime / providerData.loadCount;
    providerData.lastUpdated = Date.now();
    
    // 保留最近1000次记录
    if (providerData.loadCount > 1000) {
      providerData.totalLoadTime = providerData.averageLoadTime * 100;
      providerData.loadCount = 100;
    }
    
    localStorage.setItem('cdn-performance', JSON.stringify(performanceData));
  } catch (error) {
    console.warn('Failed to record load time:', error);
  }
}

/**
 * 预加载关键图片
 * @param {Array<string>} imagePaths - 图片路径数组
 */
export function preloadImages(imagePaths) {
  if (typeof window === 'undefined') return;
  
  imagePaths.forEach((path) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imageLoader({ src: path, width: 400, quality: 80 });
    document.head.appendChild(link);
  });
}

/**
 * 检查图片是否可以加载
 * @param {string} url - 图片URL
 * @returns {Promise<boolean>}
 */
export function testImageLoad(url) {
  return new Promise((resolve) => {
    const img = new Image();
    const startTime = performance.now();
    
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      recordLoadTime('primary', loadTime);
      resolve(true);
    };
    
    img.onerror = () => {
      resolve(false);
    };
    
    img.src = url;
    
    // 5秒超时
    setTimeout(() => resolve(false), 5000);
  });
}

/**
 * 生成响应式图片的srcSet
 * @param {string} src - 图片源路径
 * @param {Array<number>} sizes - 尺寸数组
 * @param {number} quality - 图片质量
 * @returns {string} srcSet字符串
 */
export function generateSrcSet(src, sizes = [320, 640, 1024, 1920], quality = 75) {
  return sizes
    .map((size) => {
      const url = imageLoader({ src, width: size, quality });
      return `${url} ${size}w`;
    })
    .join(', ');
}

/**
 * 获取图片的优化配置
 * @param {string} src - 图片源路径
 * @returns {Object} 优化配置
 */
export function getImageConfig(src) {
  const extension = src.split('.').pop()?.toLowerCase();
  
  const configs = {
    jpg: { quality: 80, format: 'webp' },
    jpeg: { quality: 80, format: 'webp' },
    png: { quality: 90, format: 'webp' },
    webp: { quality: 85, format: 'webp' },
    avif: { quality: 70, format: 'avif' },
    svg: { quality: 100, format: 'svg' },
  };
  
  return configs[extension] || { quality: 75, format: 'webp' };
}

/**
 * 清理过期的性能数据
 */
export function cleanupPerformanceData() {
  if (typeof window === 'undefined') return;
  
  try {
    const performanceData = getPerformanceData();
    const now = Date.now();
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    
    Object.keys(performanceData).forEach((providerName) => {
      const providerData = performanceData[providerName];
      if (now - providerData.lastUpdated > oneWeek) {
        delete performanceData[providerName];
      }
    });
    
    localStorage.setItem('cdn-performance', JSON.stringify(performanceData));
  } catch (error) {
    console.warn('Failed to cleanup performance data:', error);
  }
}

// 初始化时清理过期数据
if (typeof window !== 'undefined') {
  cleanupPerformanceData();
} 