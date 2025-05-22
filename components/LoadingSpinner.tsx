import React from 'react';
import { useRouter } from 'next/router';
import { useTranslations } from '../utils/i18n';

interface LoadingSpinnerProps {
  fullPage?: boolean;
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

/**
 * 加载动画组件
 */
export default function LoadingSpinner({ 
  fullPage = false, 
  size = 'medium', 
  text 
}: LoadingSpinnerProps) {
  const router = useRouter();
  const { locale = 'zh' } = router || {};
  const { t } = useTranslations(locale);
  
  // 根据尺寸确定大小
  const sizeClass = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16'
  }[size];
  
  // 加载文字
  const loadingText = text || t('common', 'loading');
  
  // 全页加载
  if (fullPage) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full border-t-2 border-b-2 border-primary border-opacity-80 mb-4 mx-auto" 
               style={{ width: "3rem", height: "3rem" }}>
            <span className="sr-only">{loadingText}</span>
          </div>
          <p className="text-gray-600">{loadingText}</p>
        </div>
      </div>
    );
  }
  
  // 内联加载
  return (
    <div className="flex items-center justify-center py-4">
      <div className={`animate-spin rounded-full border-t-2 border-b-2 border-primary mr-3 ${sizeClass}`}>
        <span className="sr-only">{loadingText}</span>
      </div>
      <p className="text-gray-600">{loadingText}</p>
    </div>
  );
} 