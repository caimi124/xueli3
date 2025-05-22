import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SEOProps } from '../types';

/**
 * SEO组件用于优化页面元数据
 */
export default function SEO({ 
  title, 
  description, 
  image, 
  url, 
  type = 'website',
  structuredData,
  keywords,
  author = '学历认证平台' 
}: SEOProps) {
  const router = useRouter();
  const { locale } = router;
  
  // 网站基本信息
  const siteName = locale === 'zh' ? '学历认证服务平台' : 'Academic Certification Platform';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://academic-cert.com';
  const canonicalUrl = url || `${baseUrl}${router.asPath}`;
  const ogImage = image || `${baseUrl}/images/og-image.jpg`;
  
  // 语言选择器链接
  const alternateLinks = router.locales?.map(loc => ({
    hrefLang: loc,
    href: `${baseUrl}${router.asPath.split('?')[0]}${loc !== router.defaultLocale ? `?locale=${loc}` : ''}`,
  }));

  // 默认关键词
  const defaultKeywords = locale === 'zh' 
    ? '学历认证,留学认证,学位认证,海外学历,教育部认证,国际文凭认证'
    : 'academic certification,study abroad,degree verification,overseas education,international diploma,education verification';
  
  // 合并关键词
  const pageKeywords = keywords ? `${defaultKeywords},${keywords}` : defaultKeywords;
  
  // 网站结构化数据
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    sameAs: [
      'https://www.facebook.com/academiccert',
      'https://twitter.com/academiccert',
      'https://www.linkedin.com/company/academiccert'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-10-12345678',
      contactType: 'customer service',
      availableLanguage: ['Chinese', 'English']
    }
  };
  
  // 合并自定义结构化数据
  const schema = structuredData || websiteSchema;

  return (
    <Head>
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content={author} />
      
      {/* 移动端优化 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      
      {/* 规范链接 */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* 替代语言链接 */}
      {alternateLinks?.map(({ hrefLang, href }) => (
        <link 
          key={hrefLang} 
          rel="alternate" 
          hrefLang={hrefLang} 
          href={href} 
        />
      ))}
      
      {/* OpenGraph标签 */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      {locale === 'zh' ? <meta property="og:locale:alternate" content="en" /> :
                          <meta property="og:locale:alternate" content="zh" />}
      
      {/* Twitter卡片 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* 网站图标 */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
} 