const CACHE_NAME = 'acaboost-v1';
const STATIC_CACHE = 'acaboost-static-v1';
const DYNAMIC_CACHE = 'acaboost-dynamic-v1';

// 需要预缓存的静态资源
const STATIC_ASSETS = [
  '/',
  '/zh',
  '/en',
  '/manifest.json',
  '/images/logo.png',
  '/images/og-image.jpg',
  '/images/og-image-en.jpg',
  // 关键的CSS和JS文件会由Next.js自动处理
];

// 需要缓存的API路径
const API_CACHE_PATTERNS = [
  /^https:\/\/acaboost\.com\/api\//,
  /^https:\/\/fonts\.googleapis\.com/,
  /^https:\/\/fonts\.gstatic\.com/,
];

// 图片缓存模式
const IMAGE_CACHE_PATTERNS = [
  /^https:\/\/acaboost\.com\/images\//,
  /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
];

// Service Worker安装事件
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker');
  
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[SW] Precaching static assets');
      return cache.addAll(STATIC_ASSETS);
    }).catch((error) => {
      console.error('[SW] Failed to cache static assets:', error);
    })
  );
  
  // 强制激活新的Service Worker
  self.skipWaiting();
});

// Service Worker激活事件
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // 删除旧版本的缓存
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // 立即控制所有页面
      return self.clients.claim();
    })
  );
});

// 网络请求拦截
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 跳过非GET请求和Chrome扩展请求
  if (request.method !== 'GET' || url.protocol === 'chrome-extension:') {
    return;
  }
  
  // 处理同源请求
  if (url.origin === location.origin) {
    event.respondWith(handleSameOriginRequest(request));
  }
  // 处理跨域请求（字体、API等）
  else if (shouldCacheRequest(request)) {
    event.respondWith(handleCrossOriginRequest(request));
  }
});

// 处理同源请求的策略
async function handleSameOriginRequest(request) {
  const url = new URL(request.url);
  
  // HTML页面：网络优先，失败时使用缓存
  if (request.headers.get('accept')?.includes('text/html')) {
    return networkFirstStrategy(request, DYNAMIC_CACHE);
  }
  
  // 图片：缓存优先
  if (IMAGE_CACHE_PATTERNS.some(pattern => pattern.test(url.pathname))) {
    return cacheFirstStrategy(request, DYNAMIC_CACHE);
  }
  
  // 静态资源：缓存优先
  if (url.pathname.match(/\.(js|css|woff2?|ico)$/)) {
    return cacheFirstStrategy(request, STATIC_CACHE);
  }
  
  // API请求：网络优先
  if (url.pathname.startsWith('/api/')) {
    return networkFirstStrategy(request, DYNAMIC_CACHE);
  }
  
  // 默认：网络优先
  return networkFirstStrategy(request, DYNAMIC_CACHE);
}

// 处理跨域请求
async function handleCrossOriginRequest(request) {
  // 字体文件：缓存优先
  if (request.url.includes('fonts.gstatic.com') || request.url.includes('fonts.googleapis.com')) {
    return cacheFirstStrategy(request, STATIC_CACHE);
  }
  
  // 其他跨域资源：网络优先
  return networkFirstStrategy(request, DYNAMIC_CACHE);
}

// 网络优先策略
async function networkFirstStrategy(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    // 缓存成功的响应
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // 如果是HTML请求且缓存中没有，返回离线页面
    if (request.headers.get('accept')?.includes('text/html')) {
      return caches.match('/offline') || new Response('网站暂时离线，请检查网络连接。', {
        status: 503,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }
    
    throw error;
  }
}

// 缓存优先策略
async function cacheFirstStrategy(request, cacheName) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    // 后台更新缓存
    updateCache(request, cacheName);
    return cachedResponse;
  }
  
  // 缓存中没有，从网络获取
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('[SW] Failed to fetch:', request.url, error);
    throw error;
  }
}

// 后台更新缓存
async function updateCache(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse);
    }
  } catch (error) {
    // 静默失败，不影响用户体验
    console.log('[SW] Background cache update failed:', request.url);
  }
}

// 判断是否应该缓存请求
function shouldCacheRequest(request) {
  const url = request.url;
  return API_CACHE_PATTERNS.some(pattern => pattern.test(url)) ||
         IMAGE_CACHE_PATTERNS.some(pattern => pattern.test(url));
}

// 处理推送通知
self.addEventListener('push', (event) => {
  console.log('[SW] Push notification received');
  
  const options = {
    body: event.data?.text() || 'Acaboost有新消息',
    icon: '/images/icon-192.png',
    badge: '/images/badge-72.png',
    data: {
      url: '/'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('Acaboost', options)
  );
});

// 处理通知点击
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked');
  
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || '/')
  );
});

// 后台同步
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // 实现后台数据同步逻辑
  console.log('[SW] Performing background sync');
}

// 定期清理过期缓存
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAN_CACHE') {
    event.waitUntil(cleanOldCache());
  }
});

async function cleanOldCache() {
  const cacheNames = await caches.keys();
  const oldCaches = cacheNames.filter(name => 
    name.startsWith('acaboost-') && 
    name !== STATIC_CACHE && 
    name !== DYNAMIC_CACHE
  );
  
  await Promise.all(oldCaches.map(name => caches.delete(name)));
  console.log('[SW] Cleaned old caches:', oldCaches);
} 