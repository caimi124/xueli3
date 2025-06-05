'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const translations = {
  zh: {
    title: "服务条款",
    lastUpdated: "最后更新：2025年1月",
    
    section1Title: "1. 服务说明",
    section1Content: "Acaboost提供教育咨询和文档辅助服务。我们不提供虚假学历或证书，所有服务均基于客户真实教育背景。",
    
    section2Title: "2. 服务范围",
    section2Content: "我们的服务包括：教育背景分析、文档整理、认证咨询指导。我们不制作虚假文件或进行任何形式的学历造假。",
    
    section3Title: "3. 客户责任",
    section3Content: "客户需确保提供信息的真实性。客户需对使用我们服务产生的后果承担全部责任。",
    
    section4Title: "4. 免责声明",
    section4Content: "我们不保证服务结果的成功率。所有认证最终结果以官方机构决定为准。我们不对第三方决定承担责任。",
    
    section5Title: "5. 知识产权",
    section5Content: "网站内容受知识产权法保护。未经许可不得复制或分发我们的材料。",
    
    section6Title: "6. 法律适用",
    section6Content: "本条款受相关法律管辖。如有争议，应通过友好协商解决。",
    
    home: "首页",
    contact: "联系我们"
  },
  en: {
    title: "Terms of Service",
    lastUpdated: "Last Updated: January 2025",
    
    section1Title: "1. Service Description",
    section1Content: "Acaboost provides educational consulting and document assistance services. We do not provide false credentials or certificates. All services are based on clients' authentic educational backgrounds.",
    
    section2Title: "2. Service Scope",
    section2Content: "Our services include: educational background analysis, document organization, certification consulting guidance. We do not create false documents or engage in any form of credential fraud.",
    
    section3Title: "3. Client Responsibilities",
    section3Content: "Clients must ensure the authenticity of provided information. Clients bear full responsibility for consequences arising from using our services.",
    
    section4Title: "4. Disclaimer",
    section4Content: "We do not guarantee success rates of service outcomes. All certification final results are determined by official institutions. We are not responsible for third-party decisions.",
    
    section5Title: "5. Intellectual Property",
    section5Content: "Website content is protected by intellectual property laws. Our materials may not be copied or distributed without permission.",
    
    section6Title: "6. Governing Law",
    section6Content: "These terms are governed by applicable laws. Disputes should be resolved through amicable negotiation.",
    
    home: "Home",
    contact: "Contact Us"
  }
};

export default function TermsOfService() {
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

              <section>
                <h2 className="text-xl font-semibold mb-4">{t.section6Title}</h2>
                <p className="text-gray-700 leading-relaxed">{t.section6Content}</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 