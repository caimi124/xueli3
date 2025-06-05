'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const translations = {
  zh: {
    title: "服务条款",
    subtitle: "明确权责，保障双方合法权益",
    lastUpdated: "最后更新：2025年1月15日",
    effectiveDate: "生效日期：2025年1月15日",
    
    intro: "欢迎使用Acaboost学历认证服务。在使用我们的服务前，请仔细阅读并理解以下服务条款。使用我们的服务即表示您完全接受并同意遵守本条款的所有规定。",
    
    section1Title: "1. 服务定义与范围",
    section1Content: "Acaboost是一家专业的教育咨询服务机构，致力于为客户提供合法、真实的学历认证咨询服务。",
    section1Items: [
      "学历认证咨询：提供关于各国学历认证程序的专业指导",
      "文档整理服务：协助客户整理和准备认证所需的各类文档",
      "认证流程指导：全程指导客户完成认证申请流程",
      "后续跟进服务：跟踪认证进度，及时反馈最新状态",
      "问题解答服务：回答客户在认证过程中遇到的各种问题"
    ],
    
    section2Title: "2. 服务原则与承诺",
    section2Items: [
      "合法合规：所有服务严格遵守相关法律法规",
      "真实可靠：仅基于客户真实教育背景提供服务",
      "专业高效：凭借专业团队提供高质量服务",
      "保密安全：严格保护客户个人信息和隐私",
      "诚信透明：公开透明的服务流程和收费标准"
    ],
    
    section3Title: "3. 客户权利与义务",
    section3Subtitle: "客户权利：",
    section3Rights: [
      "获得专业、及时的咨询服务",
      "了解认证流程的详细信息",
      "获得服务进度的实时更新",
      "在合理范围内提出服务要求",
      "享受数据隐私保护权利"
    ],
    section3Subtitle2: "客户义务：",
    section3Obligations: [
      "提供真实、准确的个人信息和教育背景",
      "配合完成认证所需的各项程序",
      "按约定支付服务费用",
      "遵守相关法律法规和认证机构要求",
      "对使用我们服务的结果承担相应责任"
    ],
    
    section4Title: "4. 服务流程与期限",
    section4Items: [
      "初步咨询：1-2个工作日内响应客户咨询",
      "方案制定：3-5个工作日制定详细服务方案",
      "文档准备：协助客户在7-14天内完成文档准备",
      "申请提交：按照认证机构要求及时提交申请",
      "跟进服务：全程跟踪，及时反馈认证进度"
    ],
    
    section5Title: "5. 费用与支付",
    section5Items: [
      "透明定价：所有费用事先明确告知，无隐性收费",
      "分阶段支付：支持根据服务进度分阶段支付",
      "退款政策：在特定条件下提供合理的退款服务",
      "发票服务：提供正规的服务费用发票",
      "价格调整：价格调整将提前30天通知客户"
    ],
    
    section6Title: "6. 免责条款",
    section6Items: [
      "认证结果：最终认证结果由官方认证机构决定，我们不对结果承担保证责任",
      "时间延误：因认证机构政策变化或不可抗力导致的延误，我们不承担责任",
      "第三方行为：对于第三方认证机构的决定和行为，我们不承担责任",
      "信息变更：客户提供信息发生变化导致的问题，我们不承担责任",
      "系统故障：因技术故障导致的服务中断，我们将尽力修复但不承担损失责任"
    ],
    
    section7Title: "7. 知识产权保护",
    section7Items: [
      "网站内容：本网站所有内容均受知识产权法保护",
      "商标权利：Acaboost商标和标识为我们的注册商标",
      "版权声明：未经授权不得复制、传播或使用网站内容",
      "合理使用：客户可在服务范围内合理使用我们提供的资料",
      "侵权处理：如发现侵权行为，我们将依法追究责任"
    ],
    
    section8Title: "8. 隐私与数据保护",
    section8Items: [
      "隐私政策：严格遵守我们的隐私政策保护客户信息",
      "数据安全：采用先进技术保护客户数据安全",
      "信息使用：仅在服务必要范围内使用客户信息",
      "第三方共享：不会向第三方泄露客户个人信息",
      "数据保留：按照法律要求和业务需要保留客户数据"
    ],
    
    section9Title: "9. 服务变更与终止",
    section9Items: [
      "服务升级：我们有权升级和改进服务内容",
      "政策调整：因法律法规变化可能调整服务政策",
      "服务终止：在特定情况下可能暂停或终止服务",
      "通知义务：重大变更将提前通知客户",
      "数据处理：服务终止后按约定处理客户数据"
    ],
    
    section10Title: "10. 争议解决",
    section10Items: [
      "友好协商：优先通过友好协商解决争议",
      "调解机制：可通过第三方调解机构进行调解",
      "法律途径：协商不成可通过法律途径解决",
      "管辖法院：争议由我公司所在地法院管辖",
      "适用法律：本条款适用中华人民共和国法律"
    ],
    
    section11Title: "11. 不可抗力",
    section11Content: "因自然灾害、政府政策变化、网络故障、系统维护等不可抗力因素导致的服务中断或延误，我们不承担责任。我们将尽力减少影响并及时恢复服务。",
    
    section12Title: "12. 条款修改与解释",
    section12Items: [
      "修改权利：我们保留修改本条款的权利",
      "通知方式：修改将通过网站公告或邮件通知",
      "生效时间：修改后的条款自公布之日起生效",
      "继续使用：继续使用服务视为接受修改后的条款",
      "解释权力：本条款的最终解释权归Acaboost所有"
    ],
    
    section13Title: "13. 联系方式",
    section13Content: "如果您对本服务条款有任何疑问或需要协助，请通过以下方式联系我们：",
    section13Items: [
      "客服邮箱：service@acaboost.com",
      "法务邮箱：legal@acaboost.com",
      "客服电话：+86-400-XXX-XXXX",
      "公司地址：中国上海市XXX区XXX路XXX号",
      "服务时间：工作日 9:00-18:00，节假日 10:00-16:00"
    ],
    
    home: "首页",
    contact: "联系我们",
    privacy: "隐私政策",
    quickNav: "快速导航",
    keyPoints: "重要提示",
    acceptTerms: "我已阅读并同意服务条款"
  },
  en: {
    title: "Terms of Service",
    subtitle: "Clear rights and responsibilities, protecting mutual legal interests",
    lastUpdated: "Last Updated: January 15, 2025",
    effectiveDate: "Effective Date: January 15, 2025",
    
    intro: "Welcome to Acaboost academic credential services. Before using our services, please carefully read and understand the following terms of service. Using our services indicates your complete acceptance and agreement to comply with all provisions of these terms.",
    
    section1Title: "1. Service Definition and Scope",
    section1Content: "Acaboost is a professional educational consulting service organization dedicated to providing legal and authentic academic credential consultation services for clients.",
    section1Items: [
      "Academic credential consultation: Professional guidance on academic credential procedures in various countries",
      "Document organization services: Assist clients in organizing and preparing various documents required for certification",
      "Certification process guidance: Guide clients through the entire certification application process",
      "Follow-up services: Track certification progress and provide timely feedback on the latest status",
      "Q&A services: Answer various questions clients encounter during the certification process"
    ],
    
    section2Title: "2. Service Principles and Commitments",
    section2Items: [
      "Legal compliance: All services strictly comply with relevant laws and regulations",
      "Authentic and reliable: Services provided only based on clients' authentic educational backgrounds",
      "Professional and efficient: High-quality services provided by professional teams",
      "Confidential and secure: Strict protection of client personal information and privacy",
      "Honest and transparent: Open and transparent service processes and fee standards"
    ],
    
    section3Title: "3. Client Rights and Obligations",
    section3Subtitle: "Client Rights:",
    section3Rights: [
      "Receive professional and timely consultation services",
      "Understand detailed information about certification processes",
      "Receive real-time updates on service progress",
      "Make reasonable service requests within scope",
      "Enjoy data privacy protection rights"
    ],
    section3Subtitle2: "Client Obligations:",
    section3Obligations: [
      "Provide authentic and accurate personal information and educational background",
      "Cooperate in completing all procedures required for certification",
      "Pay service fees as agreed",
      "Comply with relevant laws, regulations, and certification agency requirements",
      "Bear corresponding responsibility for the results of using our services"
    ],
    
    section4Title: "4. Service Process and Timeline",
    section4Items: [
      "Initial consultation: Respond to client inquiries within 1-2 business days",
      "Plan development: Develop detailed service plans within 3-5 business days",
      "Document preparation: Assist clients in completing document preparation within 7-14 days",
      "Application submission: Submit applications according to certification agency requirements",
      "Follow-up services: Track throughout the process and provide timely feedback on certification progress"
    ],
    
    section5Title: "5. Fees and Payment",
    section5Items: [
      "Transparent pricing: All fees clearly disclosed in advance with no hidden charges",
      "Staged payment: Support staged payment according to service progress",
      "Refund policy: Provide reasonable refund services under specific conditions",
      "Invoice service: Provide formal invoices for service fees",
      "Price adjustments: Price adjustments will be notified to clients 30 days in advance"
    ],
    
    section6Title: "6. Disclaimer",
    section6Items: [
      "Certification results: Final certification results are determined by official certification agencies; we do not guarantee results",
      "Time delays: We are not responsible for delays caused by certification agency policy changes or force majeure",
      "Third-party actions: We are not responsible for decisions and actions of third-party certification agencies",
      "Information changes: We are not responsible for issues caused by changes in client-provided information",
      "System failures: We will make efforts to repair technical failures causing service interruptions but are not liable for losses"
    ],
    
    section7Title: "7. Intellectual Property Protection",
    section7Items: [
      "Website content: All website content is protected by intellectual property laws",
      "Trademark rights: Acaboost trademarks and logos are our registered trademarks",
      "Copyright notice: Website content may not be copied, distributed, or used without authorization",
      "Fair use: Clients may reasonably use materials we provide within the service scope",
      "Infringement handling: If infringement is discovered, we will pursue legal responsibility"
    ],
    
    section8Title: "8. Privacy and Data Protection",
    section8Items: [
      "Privacy policy: Strictly follow our privacy policy to protect client information",
      "Data security: Use advanced technology to protect client data security",
      "Information use: Use client information only within the necessary scope of services",
      "Third-party sharing: Will not disclose client personal information to third parties",
      "Data retention: Retain client data according to legal requirements and business needs"
    ],
    
    section9Title: "9. Service Changes and Termination",
    section9Items: [
      "Service upgrades: We have the right to upgrade and improve service content",
      "Policy adjustments: May adjust service policies due to changes in laws and regulations",
      "Service termination: May suspend or terminate services under specific circumstances",
      "Notification obligation: Major changes will be notified to clients in advance",
      "Data processing: Client data will be processed as agreed after service termination"
    ],
    
    section10Title: "10. Dispute Resolution",
    section10Items: [
      "Amicable negotiation: Priority given to resolving disputes through amicable negotiation",
      "Mediation mechanism: Mediation through third-party mediation agencies is available",
      "Legal channels: Legal channels may be used if negotiation fails",
      "Jurisdiction: Disputes are subject to the jurisdiction of courts in our company's location",
      "Applicable law: These terms are governed by the laws of the People's Republic of China"
    ],
    
    section11Title: "11. Force Majeure",
    section11Content: "We are not responsible for service interruptions or delays caused by force majeure factors such as natural disasters, government policy changes, network failures, system maintenance, etc. We will make efforts to minimize impact and restore services promptly.",
    
    section12Title: "12. Terms Modification and Interpretation",
    section12Items: [
      "Modification rights: We reserve the right to modify these terms",
      "Notification method: Modifications will be notified through website announcements or email",
      "Effective time: Modified terms take effect from the date of publication",
      "Continued use: Continued use of services is deemed acceptance of modified terms",
      "Interpretation rights: Acaboost has the final interpretation rights of these terms"
    ],
    
    section13Title: "13. Contact Information",
    section13Content: "If you have any questions about these terms of service or need assistance, please contact us through:",
    section13Items: [
      "Customer service email: service@acaboost.com",
      "Legal email: legal@acaboost.com",
      "Customer service phone: +86-400-XXX-XXXX",
      "Company address: XXX Road, XXX District, Shanghai, China",
      "Service hours: Weekdays 9:00-18:00, Holidays 10:00-16:00"
    ],
    
    home: "Home",
    contact: "Contact Us",
    privacy: "Privacy Policy",
    quickNav: "Quick Navigation",
    keyPoints: "Important Notes",
    acceptTerms: "I have read and agree to the Terms of Service"
  }
};

export default function TermsOfService() {
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
              <svg className="w-8 h-8 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              <span className="text-xl font-bold text-blue-600">Acaboost</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href={`/${locale}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                {t.home}
              </Link>
              <Link href={`/${locale}/privacy`} className="text-gray-600 hover:text-blue-600 transition-colors">
                {t.privacy}
              </Link>
              <Link href={`/${locale}/contact`} className="text-gray-600 hover:text-blue-600 transition-colors">
                {t.contact}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-6">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{t.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm text-gray-500">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              {t.lastUpdated}
            </span>
            <span className="hidden sm:block">•</span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              {t.effectiveDate}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
                {t.quickNav}
              </h3>
              <nav className="space-y-2">
                {[1,2,3,4,5,6,7,8,9,10,11,12,13].map((num) => (
                  <button
                    key={num}
                    onClick={() => scrollToSection(`section-${num}`)}
                    className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
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
              <div className="mb-8 p-6 bg-green-50 rounded-lg border-l-4 border-green-600">
                <p className="text-gray-700 leading-relaxed">{t.intro}</p>
              </div>

              {/* Key Points */}
              <div className="mb-8 p-6 bg-amber-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                  </svg>
                  {t.keyPoints}
                </h3>
                <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    {locale === 'zh' ? '仅提供咨询服务' : 'Consultation Only'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    {locale === 'zh' ? '基于真实背景' : 'Based on Authentic Background'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    {locale === 'zh' ? '合法合规操作' : 'Legal Compliance'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    {locale === 'zh' ? '客户责任自负' : 'Client Responsibility'}
                  </li>
                </ul>
              </div>

              <div className="space-y-10">
                {/* Section 1 */}
                <section id="section-1">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                    {t.section1Title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">{t.section1Content}</p>
                  <ul className="space-y-3">
                    {t.section1Items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
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
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
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
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">{t.section3Subtitle}</h4>
                      <ul className="space-y-2">
                        {t.section3Rights.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-3">{t.section3Subtitle2}</h4>
                      <ul className="space-y-2">
                        {t.section3Obligations.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Sections 4-10 */}
                {[4,5,6,7,8,9,10].map((sectionNum) => (
                  <section key={sectionNum} id={`section-${sectionNum}`}>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                      {t[`section${sectionNum}Title` as keyof typeof t]}
                    </h2>
                    <ul className="space-y-3">
                      {(t[`section${sectionNum}Items` as keyof typeof t] as string[]).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}

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
                  <ul className="space-y-3">
                    {t.section12Items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Section 13 */}
                <section id="section-13">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-3">
                    {t.section13Title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">{t.section13Content}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {t.section13Items.map((item, index) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Acceptance Checkbox */}
              <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border">
                <div className="flex items-start space-x-3">
                  <input 
                    type="checkbox" 
                    id="acceptTerms" 
                    className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label htmlFor="acceptTerms" className="text-gray-700 leading-relaxed cursor-pointer">
                    {t.acceptTerms}
                  </label>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-sm text-gray-500">
                    © 2025 Acaboost. {locale === 'zh' ? '保留所有权利。' : 'All rights reserved.'}
                  </div>
                  <div className="flex gap-4">
                    <Link 
                      href={`/${locale}/privacy`}
                      className="text-sm text-green-600 hover:text-green-800 transition-colors"
                    >
                      {t.privacy}
                    </Link>
                    <Link 
                      href={`/${locale}/contact`}
                      className="text-sm text-green-600 hover:text-green-800 transition-colors"
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