import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import FloatingCTA from '../../components/FloatingCTA';
import StructuredData from '../../components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  if (locale === 'en') {
    return {
      title: {
        default: 'Acaboost - Fast Academic Credential Services | Global Education Certification Expert',
        template: '%s | Acaboost - Fast Academic Credential Services'
      },
      description: 'Professional international academic credential services supporting US, UK, Australia, Canada and worldwide universities. Diplomas, transcripts, Apostille, WES certification, 7-day fast delivery, authentic and verifiable.',
      keywords: [
        'academic credentials', 'international education certification', 'diploma certification', 'transcript certification', 
        'apostille certification', 'WES certification', 'fast credentials', 'education documents',
        'overseas education certification', 'study abroad certification', 'diploma authentication', 'degree verification'
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
        canonical: '/en',
        languages: {
          'zh-CN': '/zh',
          'en-US': '/en',
        },
      },
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://acaboost.com/en',
        title: 'Acaboost - Fast Academic Credential Services | Global Education Certification Expert',
        description: 'Professional international academic credential services supporting US, UK, Australia, Canada and worldwide universities. Diplomas, transcripts, Apostille, WES certification, 7-day fast delivery, authentic and verifiable.',
        siteName: 'Acaboost',
        images: [
          {
            url: '/images/og-image-en.jpg',
            width: 1200,
            height: 630,
            alt: 'Acaboost - Professional Academic Credential Services',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Acaboost - Fast Academic Credential Services',
        description: 'Professional international academic credential services, 7-day fast delivery, authentic and verifiable worldwide.',
        images: ['/images/og-image-en.jpg'],
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
        google: 'your-google-site-verification',
      },
    };
  }
  
  // Default Chinese metadata
  return {
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
      canonical: '/zh',
      languages: {
        'zh-CN': '/zh',
        'en-US': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'zh_CN',
      url: 'https://acaboost.com/zh',
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
      google: 'your-google-site-verification',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <html lang={locale === 'en' ? 'en' : 'zh-CN'}>
      <head>
        {/* 性能和SEO优化 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//api.whatsapp.com" />
        
        {/* 语言切换hreflang标签 */}
        <link rel="alternate" hrefLang="zh-CN" href="https://acaboost.com/zh" />
        <link rel="alternate" hrefLang="en-US" href="https://acaboost.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://acaboost.com/zh" />
        
        {/* 分析代码占位符 */}
        {/* 在生产环境中添加Google Analytics, 百度统计等 */}
      </head>
      <body className={inter.className}>
        <StructuredData locale={locale} />
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
} 