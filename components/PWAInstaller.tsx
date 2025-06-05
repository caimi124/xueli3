'use client';

import React, { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

// 扩展Navigator接口以支持standalone属性
declare global {
  interface Navigator {
    standalone?: boolean;
  }
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

const PWAInstaller: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // 检测iOS设备
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // 检查是否已安装PWA
    const isInstalledPWA = (navigator as any).standalone === true ||
                          window.matchMedia('(display-mode: standalone)').matches;
    setIsInstalled(isInstalledPWA);

    // 注册Service Worker
    registerServiceWorker();

    // 监听安装提示事件
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // 监听应用安装事件
    window.addEventListener('appinstalled', () => {
      console.log('PWA installed successfully');
      setShowInstallBanner(false);
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
          updateViaCache: 'none'
        });

        console.log('SW registered successfully:', registration.scope);

        // 检查更新
        registration.addEventListener('updatefound', () => {
          console.log('SW update found');
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // 有新版本可用
                showUpdateAvailable();
              }
            });
          }
        });

        // 监听控制权变化
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          window.location.reload();
        });

        // 定期清理缓存
        setInterval(() => {
          if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({ type: 'CLEAN_CACHE' });
          }
        }, 24 * 60 * 60 * 1000); // 24小时

      } catch (error) {
        console.error('SW registration failed:', error);
      }
    }
  };

  const showUpdateAvailable = () => {
    if (confirm('发现新版本，是否立即更新？')) {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
      }
    }
  };

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted PWA installation');
      } else {
        console.log('User dismissed PWA installation');
      }
      
      setDeferredPrompt(null);
      setShowInstallBanner(false);
    } catch (error) {
      console.error('Error during PWA installation:', error);
    }
  };

  const handleDismiss = () => {
    setShowInstallBanner(false);
    // 7天后再次显示
    localStorage.setItem('pwaBannerDismissed', String(Date.now() + 7 * 24 * 60 * 60 * 1000));
  };

  // 检查是否应该显示横幅
  useEffect(() => {
    const dismissedUntil = localStorage.getItem('pwaBannerDismissed');
    if (dismissedUntil && Date.now() < parseInt(dismissedUntil)) {
      setShowInstallBanner(false);
    }
  }, []);

  // iOS设备的安装提示
  const IOSInstallBanner = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-4 z-50 shadow-lg">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-600 font-bold text-lg">A</span>
          </div>
          <div>
            <div className="font-semibold text-sm">安装 Acaboost</div>
            <div className="text-xs text-blue-100">
              点击 <span className="inline-block w-4 h-4 bg-blue-400 rounded text-xs text-center leading-4">⬆</span> 
              然后选择"添加到主屏幕"
            </div>
          </div>
        </div>
        <button 
          onClick={handleDismiss}
          className="text-blue-200 hover:text-white"
          aria-label="关闭"
        >
          ✕
        </button>
      </div>
    </div>
  );

  // Android/Desktop的安装提示
  const InstallBanner = () => (
    <div className="fixed bottom-4 left-4 right-4 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50 max-w-md mx-auto">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">A</span>
        </div>
        <div className="flex-1">
          <div className="font-semibold text-gray-900">安装 Acaboost 应用</div>
          <div className="text-sm text-gray-600">快速访问，离线可用</div>
        </div>
      </div>
      <div className="flex space-x-2 mt-4">
        <button
          onClick={handleInstallClick}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          安装
        </button>
        <button
          onClick={handleDismiss}
          className="px-4 py-2 text-gray-600 text-sm font-medium hover:text-gray-800 transition-colors"
        >
          暂不
        </button>
      </div>
    </div>
  );

  // 如果已安装或不应该显示横幅，不渲染任何内容
  if (isInstalled || !showInstallBanner) {
    return null;
  }

  return isIOS ? <IOSInstallBanner /> : <InstallBanner />;
};

export default PWAInstaller; 