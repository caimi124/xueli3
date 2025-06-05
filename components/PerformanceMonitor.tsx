'use client';

import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  rating: 'good' | 'needs-improvement' | 'poor';
}

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event',
      targetId: string,
      config?: any
    ) => void;
  }
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // 动态导入web-vitals
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      // 监控Core Web Vitals
      onCLS(sendToAnalytics);
      onFCP(sendToAnalytics);
      onLCP(sendToAnalytics);
      onTTFB(sendToAnalytics);
      onINP(sendToAnalytics);
    }).catch(error => {
      console.warn('Failed to load web-vitals:', error);
    });

    // 监控资源加载性能
    monitorResourcePerformance();
    
    // 监控页面可见性变化
    monitorVisibilityChange();
    
    // 监控网络状态
    monitorNetworkStatus();
    
    // 清理函数
    return () => {
      // 清理监听器
    };
  }, []);

  return null; // 这是一个监控组件，不渲染任何UI
};

/**
 * 发送性能指标到分析服务
 */
function sendToAnalytics(metric: WebVitalsMetric) {
  // 发送到Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      custom_map: {
        metric_rating: metric.rating,
        metric_delta: metric.delta,
      },
    });
  }

  // 发送到自定义分析端点
  sendToCustomAnalytics(metric);
  
  // 记录到本地存储（用于调试）
  recordMetricLocally(metric);
  
  // 控制台输出（仅在开发环境）
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
    });
  }
}

/**
 * 发送到自定义分析端点
 */
async function sendToCustomAnalytics(metric: WebVitalsMetric) {
  try {
    await fetch('/api/analytics/web-vitals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: Date.now(),
      }),
    });
  } catch (error) {
    console.warn('Failed to send metrics to custom analytics:', error);
  }
}

/**
 * 记录指标到本地存储
 */
function recordMetricLocally(metric: WebVitalsMetric) {
  try {
    const key = 'web-vitals-metrics';
    const stored = localStorage.getItem(key);
    const metrics = stored ? JSON.parse(stored) : [];
    
    metrics.push({
      ...metric,
      timestamp: Date.now(),
      url: window.location.href,
    });
    
    // 只保留最近100条记录
    if (metrics.length > 100) {
      metrics.splice(0, metrics.length - 100);
    }
    
    localStorage.setItem(key, JSON.stringify(metrics));
  } catch (error) {
    console.warn('Failed to record metric locally:', error);
  }
}

/**
 * 监控资源加载性能
 */
function monitorResourcePerformance() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    // 监控长任务
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) { // 长于50ms的任务
          console.warn('[Performance] Long task detected:', {
            duration: entry.duration,
            startTime: entry.startTime,
          });
          
          // 发送长任务数据
          sendToAnalytics({
            name: 'LongTask',
            value: entry.duration,
            delta: 0,
            id: `long-task-${Date.now()}`,
            rating: entry.duration > 100 ? 'poor' : 'needs-improvement',
          });
        }
      }
    });
    
    longTaskObserver.observe({ entryTypes: ['longtask'] });

    // 监控资源加载
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const resource = entry as PerformanceResourceTiming;
        
        // 检查慢资源
        if (resource.duration > 1000) { // 大于1秒
          console.warn('[Performance] Slow resource:', {
            name: resource.name,
            duration: resource.duration,
            type: resource.initiatorType,
          });
        }
        
        // 检查失败的资源
        if (resource.transferSize === 0 && resource.duration > 0) {
          console.warn('[Performance] Failed resource:', resource.name);
        }
      }
    });
    
    resourceObserver.observe({ entryTypes: ['resource'] });

    // 监控导航性能
    const navigationObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const navigation = entry as PerformanceNavigationTiming;
        
        const metrics = {
          DNS: navigation.domainLookupEnd - navigation.domainLookupStart,
          TCP: navigation.connectEnd - navigation.connectStart,
          SSL: navigation.secureConnectionStart > 0 
            ? navigation.connectEnd - navigation.secureConnectionStart 
            : 0,
          TTFB: navigation.responseStart - navigation.requestStart,
          DOMLoad: navigation.domContentLoadedEventEnd - navigation.fetchStart,
          WindowLoad: navigation.loadEventEnd - navigation.fetchStart,
        };
        
        console.log('[Performance] Navigation metrics:', metrics);
        
        // 发送导航指标
        Object.entries(metrics).forEach(([name, value]) => {
          if (value > 0) {
            sendToAnalytics({
              name: `Navigation${name}`,
              value,
              delta: 0,
              id: `navigation-${name.toLowerCase()}-${Date.now()}`,
              rating: getNavigationRating(name, value),
            });
          }
        });
      }
    });
    
    navigationObserver.observe({ entryTypes: ['navigation'] });
  } catch (error) {
    console.warn('Failed to setup performance observers:', error);
  }
}

/**
 * 获取导航指标评级
 */
function getNavigationRating(metric: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds: Record<string, [number, number]> = {
    DNS: [100, 300],
    TCP: [100, 300], 
    SSL: [100, 300],
    TTFB: [200, 600],
    DOMLoad: [1000, 3000],
    WindowLoad: [2000, 5000],
  };
  
  const [good, poor] = thresholds[metric] || [1000, 3000];
  
  if (value <= good) return 'good';
  if (value <= poor) return 'needs-improvement';
  return 'poor';
}

/**
 * 监控页面可见性变化
 */
function monitorVisibilityChange() {
  if (typeof document === 'undefined') return;

  let visibilityStart = Date.now();
  
  const handleVisibilityChange = () => {
    if (document.hidden) {
      const visibleTime = Date.now() - visibilityStart;
      
      // 记录页面可见时间
      sendToAnalytics({
        name: 'PageVisibleTime',
        value: visibleTime,
        delta: 0,
        id: `visibility-${Date.now()}`,
        rating: visibleTime > 30000 ? 'good' : 'needs-improvement',
      });
    } else {
      visibilityStart = Date.now();
    }
  };
  
  document.addEventListener('visibilitychange', handleVisibilityChange);
}

/**
 * 监控网络状态
 */
function monitorNetworkStatus() {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) return;

  const connection = (navigator as any).connection;
  
  if (connection) {
    const networkInfo = {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData,
    };
    
    console.log('[Performance] Network info:', networkInfo);
    
    // 监控网络变化
    connection.addEventListener('change', () => {
      const newNetworkInfo = {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData,
      };
      
      console.log('[Performance] Network changed:', newNetworkInfo);
      
      // 发送网络变化事件
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'network_change', {
          event_category: 'Performance',
          effective_type: newNetworkInfo.effectiveType,
          downlink: newNetworkInfo.downlink,
          rtt: newNetworkInfo.rtt,
        });
      }
    });
  }
}

/**
 * 获取本地存储的性能指标
 */
export function getStoredMetrics() {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem('web-vitals-metrics');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

/**
 * 清除本地存储的性能指标
 */
export function clearStoredMetrics() {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem('web-vitals-metrics');
  } catch (error) {
    console.warn('Failed to clear stored metrics:', error);
  }
}

export default PerformanceMonitor; 