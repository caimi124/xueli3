'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  locale: string;
}

export default function StructuredData({ locale }: StructuredDataProps) {
  useEffect(() => {
    // 在客户端挂载后添加结构化数据
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Acaboost",
      "description": locale === 'en' 
        ? "Professional international academic credential services platform"
        : "专业海外学历认证服务平台",
      "url": `https://acaboost.com/${locale}`,
      "logo": "https://acaboost.com/images/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-234-567-890",
        "contactType": "customer service",
        "availableLanguage": locale === 'en' ? ["English", "Chinese"] : ["Chinese", "English"]
      },
      "sameAs": [
        "https://wa.me/1234567890"
      ],
      "serviceType": locale === 'en' ? "Academic Credential Services" : "学历认证服务",
      "areaServed": "Global",
      "inLanguage": locale === 'en' ? "en-US" : "zh-CN"
    };

    // 检查是否已存在结构化数据脚本
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [locale]);

  return null; // 这个组件不渲染任何可见内容
} 