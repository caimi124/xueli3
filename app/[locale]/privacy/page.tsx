'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const translations = {
  zh: {
    title: "隐私政策",
    subtitle: "保护您的隐私是我们的承诺",
    lastUpdated: "最后更新：2025年1月15日",
    effectiveDate: "生效日期：2025年1月15日",
    
    intro: "Acaboost（以下简称\"我们\"）非常重视用户隐私保护。本隐私政策详细说明了我们如何收集、使用、存储和保护您的个人信息。使用我们的服务即表示您同意本隐私政策的条款。",
    
    section1Title: "1. 我们收集的信息",
    section1Items: [
      "个人身份信息：姓名、电子邮件地址、电话号码、地址",
      "教育背景信息：学校名称、专业、学历层次、毕业时间",
      "服务相关信息：认证类型、申请目的、时间要求",
      "技术信息：IP地址、浏览器类型、设备信息、访问日志",
      "通信记录：与我们的客服交流记录、咨询内容"
    ],
    
    section2Title: "2. 信息收集方式",
    section2Items: [
      "直接收集：您主动提供的信息（表单填写、咨询等）",
      "自动收集：通过Cookies和类似技术收集的使用数据",
      "第三方收集：通过合法的第三方服务提供商获得",
      "推荐收集：通过推荐人或合作伙伴获得的信息"
    ],
    
    section3Title: "3. 信息使用目的",
    section3Items: [
      "提供学历认证咨询和相关服务",
      "处理您的服务申请和订单",
      "与您沟通服务进度和相关事宜",
      "改进我们的服务质量和用户体验",
      "发送服务更新、优惠信息（经您同意）",
      "防范欺诈和确保服务安全",
      "履行法律义务和监管要求"
    ],
    
    section4Title: "4. 信息共享与披露",
    section4Content: "我们不会出售、租赁或以其他方式向第三方披露您的个人信息，除非：",
    section4Items: [
      "经您明确同意",
      "法律法规要求或政府部门要求",
      "为提供服务需要与可信的合作伙伴共享",
      "保护我们的合法权益或用户安全",
      "业务转让或合并情况下的信息转移"
    ],
    
    section5Title: "5. 数据安全保护",
    section5Items: [
      "采用SSL加密技术保护数据传输",
      "使用行业标准的防火墙和入侵检测系统",
      "定期进行安全评估和漏洞修复",
      "严格限制员工访问权限，实施最小权限原则",
      "建立数据备份和灾难恢复机制",
      "对敏感信息进行加密存储"
    ],
    
    section6Title: "6. 数据保留期限",
    section6Content: "我们会根据不同类型的信息设定合理的保留期限：",
    section6Items: [
      "服务数据：服务完成后保留3年",
      "通信记录：保留2年用于客服质量改进",
      "技术日志：保留1年用于系统维护",
      "营销信息：直到您取消订阅或要求删除",
      "法律要求：按照相关法律法规的最低要求"
    ],
    
    section7Title: "7. 您的权利",
    section7Items: [
      "访问权：查看我们持有的您的个人信息",
      "更正权：要求更正不准确或不完整的信息",
      "删除权：在特定情况下要求删除您的个人信息",
      "限制处理权：要求限制对您个人信息的处理",
      "数据可携权：要求以结构化格式获得您的数据",
      "反对权：反对我们处理您的个人信息",
      "撤回同意权：随时撤回您之前给予的同意"
    ],
    
    section8Title: "8. Cookie政策",
    section8Content: "我们使用Cookie和类似技术来改善您的浏览体验：",
    section8Items: [
      "必要Cookie：确保网站正常运行",
      "功能Cookie：记住您的偏好设置",
      "分析Cookie：了解网站使用情况",
      "营销Cookie：提供个性化内容和广告"
    ],
    
    section9Title: "9. 国际数据传输",
    section9Content: "如果您位于中国境外，您的个人信息可能会被传输到中国境内进行处理。我们会确保此类传输符合适用的数据保护法律，并采取适当的保护措施。",
    
    section10Title: "10. 未成年人保护",
    section10Content: "我们的服务主要面向成年人。如果您未满18岁，请在父母或监护人的指导下使用我们的服务，我们将采取额外措施保护未成年人的隐私。",
    
    section11Title: "11. 政策更新",
    section11Content: "我们可能会不时更新本隐私政策。重大变更将通过网站公告或邮件通知您。继续使用我们的服务即表示您接受更新后的政策。",
    
    section12Title: "12. 联系我们",
    section12Content: "如果您对本隐私政策有任何疑问或需要行使您的权利，请通过以下方式联系我们：",
    section12Items: [
      "邮箱：privacy@acaboost.com",
      "电话：+86-400-XXX-XXXX",
      "地址：中国上海市XXX区XXX路XXX号",
      "在线客服：工作日 9:00-18:00"
    ],
    
    home: "首页",
    contact: "联系我们",
    terms: "服务条款",
    
    // 新增导航标题
    quickNav: "快速导航",
    keyPoints: "关键要点"
  },
  en: {
    title: "Privacy Policy", 
    subtitle: "Your privacy protection is our commitment",
    lastUpdated: "Last Updated: January 15, 2025",
    effectiveDate: "Effective Date: January 15, 2025",
    
    intro: "Acaboost (hereinafter referred to as 'we') highly values user privacy protection. This privacy policy details how we collect, use, store and protect your personal information. By using our services, you agree to the terms of this privacy policy.",
    
    section1Title: "1. Information We Collect",
    section1Items: [
      "Personal identification information: name, email address, phone number, address",
      "Educational background information: school name, major, degree level, graduation time",
      "Service-related information: certification type, application purpose, time requirements",
      "Technical information: IP address, browser type, device information, access logs",
      "Communication records: customer service interaction records, consultation content"
    ],
    
    section2Title: "2. Information Collection Methods",
    section2Items: [
      "Direct collection: Information you voluntarily provide (form submissions, consultations, etc.)",
      "Automatic collection: Usage data collected through cookies and similar technologies",
      "Third-party collection: Information obtained through legitimate third-party service providers",
      "Referral collection: Information obtained through referrers or partners"
    ],
    
    section3Title: "3. Purpose of Information Use",
    section3Items: [
      "Provide academic credential consultation and related services",
      "Process your service applications and orders",
      "Communicate service progress and related matters with you",
      "Improve our service quality and user experience",
      "Send service updates and promotional information (with your consent)",
      "Prevent fraud and ensure service security",
      "Fulfill legal obligations and regulatory requirements"
    ],
    
    section4Title: "4. Information Sharing and Disclosure",
    section4Content: "We do not sell, rent, or otherwise disclose your personal information to third parties unless:",
    section4Items: [
      "With your explicit consent",
      "Required by laws and regulations or government departments",
      "Necessary to share with trusted partners to provide services",
      "To protect our legitimate interests or user safety",
      "Information transfer in case of business transfer or merger"
    ],
    
    section5Title: "5. Data Security Protection",
    section5Items: [
      "Use SSL encryption technology to protect data transmission",
      "Employ industry-standard firewalls and intrusion detection systems",
      "Regularly conduct security assessments and vulnerability fixes",
      "Strictly limit employee access permissions, implement principle of least privilege",
      "Establish data backup and disaster recovery mechanisms",
      "Encrypt sensitive information for storage"
    ],
    
    section6Title: "6. Data Retention Period",
    section6Content: "We set reasonable retention periods for different types of information:",
    section6Items: [
      "Service data: Retained for 3 years after service completion",
      "Communication records: Retained for 2 years for customer service quality improvement",
      "Technical logs: Retained for 1 year for system maintenance",
      "Marketing information: Until you unsubscribe or request deletion",
      "Legal requirements: According to minimum requirements of relevant laws and regulations"
    ],
    
    section7Title: "7. Your Rights",
    section7Items: [
      "Right of access: View your personal information we hold",
      "Right of rectification: Request correction of inaccurate or incomplete information",
      "Right of erasure: Request deletion of your personal information in specific circumstances",
      "Right to restrict processing: Request restriction of processing your personal information",
      "Right to data portability: Request your data in a structured format",
      "Right to object: Object to our processing of your personal information",
      "Right to withdraw consent: Withdraw consent you previously gave at any time"
    ],
    
    section8Title: "8. Cookie Policy",
    section8Content: "We use cookies and similar technologies to improve your browsing experience:",
    section8Items: [
      "Necessary cookies: Ensure website proper functioning",
      "Functional cookies: Remember your preference settings",
      "Analytics cookies: Understand website usage",
      "Marketing cookies: Provide personalized content and advertisements"
    ],
    
    section9Title: "9. International Data Transfer",
    section9Content: "If you are located outside China, your personal information may be transferred to China for processing. We ensure such transfers comply with applicable data protection laws and take appropriate safeguards.",
    
    section10Title: "10. Protection of Minors",
    section10Content: "Our services are primarily intended for adults. If you are under 18, please use our services under the guidance of parents or guardians. We will take additional measures to protect minors' privacy.",
    
    section11Title: "11. Policy Updates",
    section11Content: "We may update this privacy policy from time to time. Significant changes will be notified through website announcements or email. Continued use of our services indicates your acceptance of the updated policy.",
    
    section12Title: "12. Contact Us",
    section12Content: "If you have any questions about this privacy policy or need to exercise your rights, please contact us through:",
    section12Items: [
      "Email: privacy@acaboost.com",
      "Phone: +86-400-XXX-XXXX",
      "Address: XXX Road, XXX District, Shanghai, China",
      "Online customer service: Weekdays 9:00-18:00"
    ],
    
    home: "Home",
    contact: "Contact Us",
    terms: "Terms of Service",
    
    // New navigation titles
    quickNav: "Quick Navigation", 
    keyPoints: "Key Points"
  }
};

export default function PrivacyPolicy() {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh';
  const t = translations[locale as keyof typeof translations] || translations.zh;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
            <span className="text-xl font-bold text-gray-900">Acaboost</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{t.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm text-gray-500">
            <span className="flex items-center">📅 {t.lastUpdated}</span>
            <span className="hidden sm:block">•</span>
            <span className="flex items-center">⚠️ {t.effectiveDate}</span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-blue-600">
                  {t.quickNav}
                </span>
              </h3>
              <nav className="space-y-2">
                {[1,2,3,4,5,6,7,8,9,10,11,12].map((num) => (
                  <button
                    key={num}
                    onClick={() => scrollToSection(`section-${num}`)}
                    className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    {t[`section${num}Title` as keyof typeof t]}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm p-8">
              {/* Introduction */}
              <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-700 leading-relaxed">{t.intro}</p>
              </div>

              {/* Key Points */}
              <div className="mb-8 p-6 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-green-600">
                    {t.keyPoints}
                  </span>
                </h3>
                <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    SSL加密保护
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {locale === 'zh' ? '符合GDPR要求' : 'GDPR Compliant'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {locale === 'zh' ? '数据可携权' : 'Data Portability'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {locale === 'zh' ? '24小时客服' : '24h Customer Service'}
                  </li>
                </ul>
              </div>

              <div className="space-y-10">
                {/* Section 1 */}
                <section id="section-1">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                    {t.section1Title}
                  </h2>
                  <ul className="space-y-3">
                    {t.section1Items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Section 2 */}
                <section id="section-2">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                    {t.section2Title}
                  </h2>
                  <ul className="space-y-3">
                    {t.section2Items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Section 3 */}
                <section id="section-3">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                    {t.section3Title}
                  </h2>
                  <ul className="space-y-3">
                    {t.section3Items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Section 4 */}
                <section id="section-4">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                    {t.section4Title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">{t.section4Content}</p>
                  <ul className="space-y-3">
                    {t.section4Items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Section 5 */}
                <section id="section-5">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                    {t.section5Title}
                  </h2>
                  <ul className="space-y-3">
                    {t.section5Items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Section 6 */}
                <section id="section-6">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                    {t.section6Title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">{t.section6Content}</p>
                  <ul className="space-y-3">
                    {t.section6Items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Section 7 */}
                <section id="section-7">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                    {t.section7Title}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {t.section7Items.map((item, index) => (
                      <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 8 */}
                <section id="section-8">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                    {t.section8Title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">{t.section8Content}</p>
                  <ul className="space-y-3">
                    {t.section8Items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Section 9 */}
                <section id="section-9">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                    {t.section9Title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{t.section9Content}</p>
                </section>

                {/* Section 10 */}
                <section id="section-10">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                    {t.section10Title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{t.section10Content}</p>
                </section>

                {/* Section 11 */}
                <section id="section-11">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                    {t.section11Title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{t.section11Content}</p>
                </section>

                {/* Section 12 */}
                <section id="section-12">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                    {t.section12Title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">{t.section12Content}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {t.section12Items.map((item, index) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-sm text-gray-500">
                    © 2025 Acaboost. {locale === 'zh' ? '保留所有权利。' : 'All rights reserved.'}
                  </div>
                  <div className="flex gap-4">
                    <Link 
                      href={`/${locale}/terms`}
                      className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {t.terms}
                    </Link>
                    <Link 
                      href={`/${locale}/contact`}
                      className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {t.contact}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 