import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import FloatingCTA from '../components/FloatingCTA';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Acaboost - 快速学历认证服务 | 海外学历认证专家',
    template: '%s | Acaboost - 快速学历认证服务'
  },
  description: '专业海外学历认证服务，支持美国、英国、澳洲、加拿大等全球高校学历认证。毕业证、成绩单、海牙认证、WES认证，7天快速出证，真实可查，全球通用。',
  keywords: [
    '学历认证', '海外学历认证', '毕业证认证', '成绩单认证', 
    '海牙认证', 'WES认证', '快速学历', '学历证书',
    '国外学历认证', '留学认证', '文凭认证', '学位认证'
  ],
  authors: [{ name: 'Acaboost' }],
  creator: 'Acaboost',
  publisher: 'Acaboost',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://acaboost.com'),
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/zh',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://acaboost.com',
    title: 'Acaboost - 快速学历认证服务 | 海外学历认证专家',
    description: '专业海外学历认证服务，支持美国、英国、澳洲、加拿大等全球高校学历认证。毕业证、成绩单、海牙认证、WES认证，7天快速出证，真实可查，全球通用。',
    siteName: 'Acaboost',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Acaboost - 专业学历认证服务',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acaboost - 快速学历认证服务',
    description: '专业海外学历认证服务，7天快速出证，真实可查，全球通用。',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ABC123XYZ456',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TMLSTBN2GR"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TMLSTBN2GR');
            `,
          }}
        />
        
        {/* 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Acaboost",
              "description": "专业海外学历认证服务平台",
              "url": "https://acaboost.com",
              "logo": "https://acaboost.com/images/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-234-567-890",
                "contactType": "customer service",
                "availableLanguage": ["Chinese", "English"]
              },
              "sameAs": [
                "https://wa.me/1234567890"
              ],
              "serviceType": "学历认证服务",
              "areaServed": "Global"
            })
          }}
        />
        
        {/* 性能和SEO优化 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//api.whatsapp.com" />
        
        {/* 分析代码占位符 */}
        {/* 在生产环境中添加Google Analytics, 百度统计等 */}
      </head>
      <body className={inter.className}>
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
} 