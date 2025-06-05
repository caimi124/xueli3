'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const translations = {
  zh: {
    title: "隐私政策",
    lastUpdated: "最后更新：2024年12月",
    
    intro: "Acaboost（以下简称\"我们\"）重视您的隐私权。本隐私政策说明我们如何收集、使用、存储和保护您在使用我们服务时提供的信息。",
    
    section1Title: "1. 信息收集",
    section1Content: "我们可能收集以下类型的信息：",
    section1Items: [
      "个人身份信息：姓名、电子邮件地址、电话号码、通讯地址",
      "使用数据：IP地址、浏览器类型、访问时间、页面浏览记录",
      "设备信息：设备类型、操作系统、唯一设备标识符",
      "服务相关信息：您主动提供的教育背景、服务需求等信息"
    ],
    
    section2Title: "2. 信息使用目的",
    section2Content: "我们使用收集的信息用于以下目的：",
    section2Items: [
      "提供、维护和改进我们的服务",
      "处理您的服务请求和查询",
      "发送服务相关通知和更新",
      "进行客户支持和沟通",
      "分析和改进网站性能",
      "遵守法律义务和保护合法权益"
    ],
    
    section3Title: "3. 信息共享",
    section3Content: "我们可能在以下情况下共享您的信息：",
    section3Items: [
      "征得您的明确同意",
      "与我们的服务提供商合作提供服务",
      "遵守法律要求或响应法律程序",
      "保护我们的权利、财产或安全",
      "在业务转让、合并或收购过程中"
    ],
    
    section4Title: "4. Cookies和跟踪技术",
    section4Content: "我们使用Cookies和类似技术来：",
    section4Items: [
      "记住您的偏好设置",
      "分析网站使用情况",
      "提供个性化内容",
      "改善用户体验"
    ],
    section4Note: "您可以通过浏览器设置控制Cookies的使用。",
    
    section5Title: "5. 数据安全",
    section5Content: "我们采取适当的技术和组织措施来保护您的个人信息：",
    section5Items: [
      "数据传输加密（SSL/TLS）",
      "安全的数据存储系统",
      "访问权限控制",
      "定期安全审核",
      "员工隐私培训"
    ],
    
    section6Title: "6. 数据保留",
    section6Content: "我们仅在必要期间保留您的个人信息，具体保留期限取决于：",
    section6Items: [
      "提供服务的需要",
      "法律义务要求",
      "解决争议的需要",
      "保护合法权益的需要"
    ],
    
    section7Title: "7. 您的权利",
    section7Content: "您对个人信息享有以下权利：",
    section7Items: [
      "访问权：要求获取我们持有的您的个人信息",
      "更正权：要求更正不准确的个人信息",
      "删除权：在特定情况下要求删除个人信息",
      "限制处理权：要求限制对您个人信息的处理",
      "数据可携权：要求以结构化格式获取您的数据",
      "反对权：反对我们处理您的个人信息"
    ],
    
    section8Title: "8. 国际数据传输",
    section8Content: "您的信息可能会被传输到您所在国家/地区以外的地方进行处理。我们将确保此类传输符合适用的数据保护法律，并采取适当的保障措施。",
    
    section9Title: "9. 第三方服务",
    section9Content: "我们的服务可能包含指向第三方网站的链接。我们不对这些第三方的隐私做法负责。我们建议您查看这些网站的隐私政策。",
    
    section10Title: "10. 未成年人隐私",
    section10Content: "我们的服务不面向13岁以下的儿童。我们不会故意收集13岁以下儿童的个人信息。如果我们发现收集了此类信息，将立即删除。",
    
    section11Title: "11. 政策更新",
    section11Content: "我们可能会不时更新本隐私政策。重大变更将通过邮件或网站通知的方式告知您。继续使用我们的服务即表示您接受更新后的政策。",
    
    section12Title: "12. 联系我们",
    section12Content: "如果您对本隐私政策有任何疑问或希望行使您的权利，请通过以下方式联系我们：",
    contactInfo: [
      "邮箱：privacy@acaboost.com",
      "地址：[公司地址]",
      "电话：[联系电话]"
    ],
    
    home: "首页",
    contact: "联系我们",
    terms: "服务条款"
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: December 2024",
    
    intro: "Acaboost (\"we\", \"us\", or \"our\") values your privacy. This Privacy Policy explains how we collect, use, store, and protect information when you use our services.",
    
    section1Title: "1. Information Collection",
    section1Content: "We may collect the following types of information:",
    section1Items: [
      "Personal Information: Name, email address, phone number, mailing address",
      "Usage Data: IP address, browser type, access times, page views",
      "Device Information: Device type, operating system, unique device identifiers",
      "Service-related Information: Educational background, service requirements voluntarily provided"
    ],
    
    section2Title: "2. Use of Information",
    section2Content: "We use the collected information for the following purposes:",
    section2Items: [
      "Provide, maintain, and improve our services",
      "Process your service requests and inquiries",
      "Send service-related notifications and updates",
      "Provide customer support and communication",
      "Analyze and improve website performance",
      "Comply with legal obligations and protect legitimate interests"
    ],
    
    section3Title: "3. Information Sharing",
    section3Content: "We may share your information in the following circumstances:",
    section3Items: [
      "With your explicit consent",
      "With service providers to deliver our services",
      "To comply with legal requirements or legal process",
      "To protect our rights, property, or safety",
      "During business transfers, mergers, or acquisitions"
    ],
    
    section4Title: "4. Cookies and Tracking Technologies",
    section4Content: "We use cookies and similar technologies to:",
    section4Items: [
      "Remember your preferences",
      "Analyze website usage",
      "Provide personalized content",
      "Improve user experience"
    ],
    section4Note: "You can control cookie usage through your browser settings.",
    
    section5Title: "5. Data Security",
    section5Content: "We implement appropriate technical and organizational measures to protect your personal information:",
    section5Items: [
      "Data transmission encryption (SSL/TLS)",
      "Secure data storage systems",
      "Access control measures",
      "Regular security audits",
      "Staff privacy training"
    ],
    
    section6Title: "6. Data Retention",
    section6Content: "We retain your personal information only as long as necessary, depending on:",
    section6Items: [
      "Service provision needs",
      "Legal obligation requirements",
      "Dispute resolution needs",
      "Protection of legitimate interests"
    ],
    
    section7Title: "7. Your Rights",
    section7Content: "You have the following rights regarding your personal information:",
    section7Items: [
      "Access: Request access to your personal information we hold",
      "Rectification: Request correction of inaccurate personal information",
      "Erasure: Request deletion of personal information in specific circumstances",
      "Restriction: Request restriction of processing your personal information",
      "Portability: Request your data in a structured format",
      "Objection: Object to our processing of your personal information"
    ],
    
    section8Title: "8. International Data Transfers",
    section8Content: "Your information may be transferred to and processed in countries outside your residence. We ensure such transfers comply with applicable data protection laws and implement appropriate safeguards.",
    
    section9Title: "9. Third-Party Services",
    section9Content: "Our service may contain links to third-party websites. We are not responsible for the privacy practices of these third parties. We recommend reviewing their privacy policies.",
    
    section10Title: "10. Children's Privacy",
    section10Content: "Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we discover such collection, we will immediately delete it.",
    
    section11Title: "11. Policy Updates",
    section11Content: "We may update this Privacy Policy from time to time. Significant changes will be communicated via email or website notification. Continued use of our services indicates acceptance of the updated policy.",
    
    section12Title: "12. Contact Us",
    section12Content: "If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:",
    contactInfo: [
      "Email: privacy@acaboost.com",
      "Address: [Company Address]",
      "Phone: [Contact Phone]"
    ],
    
    home: "Home",
    contact: "Contact Us",
    terms: "Terms of Service"
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
              <Link href={`/${locale}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                {t.home}
              </Link>
              <Link href={`/${locale}/terms`} className="text-gray-600 hover:text-blue-600 transition-colors">
                {t.terms}
              </Link>
              <Link href={`/${locale}/contact`} className="text-gray-600 hover:text-blue-600 transition-colors">
                {t.contact}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-gray-900">{t.title}</h1>
            <p className="text-gray-600 mb-8 text-sm">{t.lastUpdated}</p>

            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">{t.intro}</p>
            </div>

            <div className="space-y-10">
              {/* Section 1: Information Collection */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t.section1Title}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{t.section1Content}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  {t.section1Items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Section 2: Use of Information */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t.section2Title}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{t.section2Content}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  {t.section2Items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Section 3: Information Sharing */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t.section3Title}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{t.section3Content}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  {t.section3Items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Section 4: Cookies */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t.section4Title}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{t.section4Content}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                  {t.section4Items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-gray-600 italic">{t.section4Note}</p>
              </section>

              {/* Section 5: Data Security */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t.section5Title}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{t.section5Content}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  {t.section5Items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Section 6: Data Retention */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t.section6Title}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{t.section6Content}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  {t.section6Items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Section 7: Your Rights */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t.section7Title}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{t.section7Content}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  {t.section7Items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Section 8: International Data Transfers */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t.section8Title}</h2>
                <p className="text-gray-700 leading-relaxed">{t.section8Content}</p>
              </section>

              {/* Section 9: Third-Party Services */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t.section9Title}</h2>
                <p className="text-gray-700 leading-relaxed">{t.section9Content}</p>
              </section>

              {/* Section 10: Children's Privacy */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t.section10Title}</h2>
                <p className="text-gray-700 leading-relaxed">{t.section10Content}</p>
              </section>

              {/* Section 11: Policy Updates */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t.section11Title}</h2>
                <p className="text-gray-700 leading-relaxed">{t.section11Content}</p>
              </section>

              {/* Section 12: Contact Us */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t.section12Title}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{t.section12Content}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  {t.contactInfo.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                © 2024 Acaboost. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 