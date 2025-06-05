'use client';

import { useEffect } from 'react';

interface PerformanceData {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

/**
 * 性能监控组件
 * 收集核心性能指标并发送到分析服务
 */
export default function PerformanceMonitor() {
  useEffect(() => {
    // 只在生产环境中运行
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    const performanceData: PerformanceData = {};

    // 监控First Contentful Paint
    const observeFCP = () => {
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            performanceData.fcp = entry.startTime;
            console.log('FCP:', entry.startTime);
          }
        }
      }).observe({ entryTypes: ['paint'] });
    };

    // 监控Largest Contentful Paint
    const observeLCP = () => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        performanceData.lcp = lastEntry.startTime;
        console.log('LCP:', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    };

    // 监控First Input Delay
    const observeFID = () => {
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const fidEntry = entry as any; // First Input Delay 的类型定义可能不完整
          if (fidEntry.processingStart) {
            performanceData.fid = fidEntry.processingStart - entry.startTime;
            console.log('FID:', performanceData.fid);
          }
        }
      }).observe({ entryTypes: ['first-input'] });
    };

    // 监控Cumulative Layout Shift
    const observeCLS = () => {
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const clsEntry = entry as any; // Layout Shift 的类型定义可能不完整
          if (!clsEntry.hadRecentInput && clsEntry.value) {
            clsValue += clsEntry.value;
          }
        }
        performanceData.cls = clsValue;
        console.log('CLS:', clsValue);
      }).observe({ entryTypes: ['layout-shift'] });
    };

    // 获取Time to First Byte
    const getTTFB = () => {
      const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navTiming) {
        performanceData.ttfb = navTiming.responseStart - navTiming.requestStart;
        console.log('TTFB:', performanceData.ttfb);
      }
    };

    // 检查浏览器支持
    if ('PerformanceObserver' in window) {
      observeFCP();
      observeLCP();
      observeFID();
      observeCLS();
    }

    getTTFB();

    // 页面卸载时发送数据
    const sendPerformanceData = () => {
      if (Object.keys(performanceData).length > 0) {
        // 发送到分析服务（例如Google Analytics或自定义端点）
        sendToAnalytics(performanceData);
      }
    };

    // 监听页面卸载事件
    window.addEventListener('beforeunload', sendPerformanceData);
    
    // 5秒后也发送一次数据
    const timer = setTimeout(sendPerformanceData, 5000);

    // 清理
    return () => {
      window.removeEventListener('beforeunload', sendPerformanceData);
      clearTimeout(timer);
    };
  }, []);

  return null; // 这是一个监控组件，不渲染任何内容
}

/**
 * 发送性能数据到分析服务
 */
function sendToAnalytics(data: PerformanceData) {
  try {
    // 方式1: 发送到Google Analytics 4
    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'performance_metric', {
        custom_parameter_fcp: data.fcp,
        custom_parameter_lcp: data.lcp,
        custom_parameter_fid: data.fid,
        custom_parameter_cls: data.cls,
        custom_parameter_ttfb: data.ttfb,
      });
    }

    // 方式2: 发送到自定义端点
    if (navigator.sendBeacon) {
      const payload = JSON.stringify({
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        ...data,
      });
      
      navigator.sendBeacon('/api/performance', payload);
    } else {
      // 备用方案：使用fetch
      fetch('/api/performance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: window.location.href,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          ...data,
        }),
      }).catch(console.error);
    }

    // 方式3: 存储到localStorage用于调试
    if (process.env.NODE_ENV === 'development') {
      const existingData = JSON.parse(localStorage.getItem('performance-data') || '[]');
      existingData.push({
        url: window.location.href,
        timestamp: Date.now(),
        ...data,
      });
      localStorage.setItem('performance-data', JSON.stringify(existingData.slice(-50))); // 保留最近50条
    }

  } catch (error) {
    console.error('发送性能数据失败:', error);
  }
}

/**
 * 获取性能建议
 */
export function getPerformanceRecommendations(data: PerformanceData): string[] {
  const recommendations: string[] = [];

  if (data.fcp && data.fcp > 2500) {
    recommendations.push('FCP较慢，考虑优化关键渲染路径');
  }

  if (data.lcp && data.lcp > 4000) {
    recommendations.push('LCP较慢，优化最大内容元素的加载');
  }

  if (data.fid && data.fid > 300) {
    recommendations.push('FID较高，减少主线程阻塞');
  }

  if (data.cls && data.cls > 0.25) {
    recommendations.push('CLS较高，减少布局偏移');
  }

  if (data.ttfb && data.ttfb > 1800) {
    recommendations.push('TTFB较慢，优化服务器响应时间');
  }

  return recommendations;
} 