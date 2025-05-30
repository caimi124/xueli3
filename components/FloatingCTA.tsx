'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5秒后显示

    return () => clearTimeout(timer);
  }, []);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isMinimized ? 'transform scale-75' : ''}`}>
      {!isMinimized ? (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-w-sm">
          {/* 关闭/最小化按钮 */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-800">专业顾问在线</span>
            </div>
            <button 
              onClick={handleMinimize}
              className="text-gray-400 hover:text-gray-600 text-lg"
            >
              ✕
            </button>
          </div>

          {/* 内容 */}
          <div className="mb-4">
            <h3 className="font-bold text-gray-800 mb-2">🎓 需要学历认证帮助？</h3>
            <p className="text-sm text-gray-600 mb-3">
              免费咨询，5分钟获取专属方案
            </p>
            <div className="text-xs text-gray-500 mb-3">
              ✅ 已服务15000+客户 | ✅ 99.8%通过率
            </div>
          </div>

          {/* CTA按钮 */}
          <Link
            href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务，希望了解适合我的学历方案"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 text-white text-center py-3 rounded-xl font-medium hover:bg-green-600 transition-colors animate-pulse"
          >
            📲 WhatsApp免费咨询
          </Link>

          {/* 紧急感元素 */}
          <div className="mt-2 text-center">
            <span className="text-xs text-red-600 font-medium">
              🔥 本月限时优惠，咨询立减500元
            </span>
          </div>
        </div>
      ) : (
        <button 
          onClick={handleMinimize}
          className="bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl hover:bg-green-600 transition-colors flex items-center justify-center animate-bounce"
        >
          <span className="text-2xl">💬</span>
        </button>
      )}
    </div>
  );
} 