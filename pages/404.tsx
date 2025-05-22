import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Custom404() {
  const router = useRouter();
  const { locale } = router;
  
  // SEO数据
  const seoTitle = locale === 'zh' ? '404 - 页面未找到' : '404 - Page Not Found';
  const seoDescription = locale === 'zh' 
    ? '抱歉，您访问的页面不存在或已被移除。请尝试访问其他页面或返回首页。' 
    : 'Sorry, the page you are looking for does not exist or has been removed. Please try visiting other pages or return to the homepage.';

  return (
    <Layout>
      <SEO 
        title={seoTitle}
        description={seoDescription}
      />
      <div className="min-h-[70vh] flex items-center justify-center bg-blue-50 py-16">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-lg mx-auto">
          <div className="mb-6 text-primary">
            <svg 
              className="h-24 w-24 mx-auto" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              aria-hidden="true"
            >
              <path 
                fillRule="evenodd" 
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            {locale === 'zh' ? '页面未找到' : 'Page Not Found'}
          </h2>
          <p className="text-gray-600 mb-8">
            {locale === 'zh' 
              ? '抱歉，您访问的页面不存在或已被移除。' 
              : 'Sorry, the page you are looking for does not exist or has been removed.'}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link 
              href="/"
              className="px-5 py-3 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              {locale === 'zh' ? '返回首页' : 'Back to Home'}
            </Link>
            <Link 
              href="/contact"
              className="px-5 py-3 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              {locale === 'zh' ? '联系我们' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 