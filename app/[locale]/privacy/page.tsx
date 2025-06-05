'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const translations = {
  zh: {
    title: "隐私政策",
    lastUpdated: "最后更新：2025年1月",
    
    section1Title: "1. 信息收集",
    section1Content: "我们收集您主动提供的信息，包括联系信息和服务需求。我们不会收集敏感的个人身份信息。",
    
    section2Title: "2. 信息使用",
    section2Content: "我们使用收集的信息来：提供客户服务、改进我们的服务、发送服务更新。",
    
    section3Title: "3. 信息保护",
    section3Content: "我们采用行业标准的安全措施来保护您的个人信息，包括加密传输和安全存储。",
    
    section4Title: "4. 第三方服务",
    section4Content: "我们可能使用第三方服务（如分析工具），这些服务有自己的隐私政策。",
    
    section5Title: "5. 联系我们",
    section5Content: "如果您对我们的隐私政策有任何疑问，请通过 contact@acaboost.com 联系我们。",
    
    home: "首页",
    contact: "联系我们"
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: January 2025",
    
    section1Title: "1. Information Collection",
    section1Content: "We collect information you voluntarily provide, including contact information and service requirements. We do not collect sensitive personal identification information.",
    
    section2Title: "2. Information Use", 
    section2Content: "We use the collected information to: provide customer service, improve our services, send service updates.",
    
    section3Title: "3. Information Protection",
    section3Content: "We employ industry-standard security measures to protect your personal information, including encrypted transmission and secure storage.",
    
    section4Title: "4. Third-Party Services",
    section4Content: "We may use third-party services (such as analytics tools) that have their own privacy policies.",
    
    section5Title: "5. Contact Us",
    section5Content: "If you have any questions about our privacy policy, please contact us at contact@acaboost.com.",
    
    home: "Home",
    contact: "Contact Us"
  }
};

export default function PrivacyPolicy() {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh';
  const t = translations[locale as keyof typeof translations] || translations.zh;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link className="flex items-center" href={`/${locale}`}>
              <span className="text-xl font-bold text-blue-600">Acaboost</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href={`/${locale}`} className="text-gray-600 hover:text-blue-600">
                {t.home}
              </Link>
              <Link href={`/${locale}/contact`} className="text-gray-600 hover:text-blue-600">
                {t.contact}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
            <p className="text-gray-600 mb-8">{t.lastUpdated}</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">{t.section1Title}</h2>
                <p className="text-gray-700 leading-relaxed">{t.section1Content}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">{t.section2Title}</h2>
                <p className="text-gray-700 leading-relaxed">{t.section2Content}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">{t.section3Title}</h2>
                <p className="text-gray-700 leading-relaxed">{t.section3Content}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">{t.section4Title}</h2>
                <p className="text-gray-700 leading-relaxed">{t.section4Content}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">{t.section5Title}</h2>
                <p className="text-gray-700 leading-relaxed">{t.section5Content}</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 