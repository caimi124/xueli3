'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// 翻译内容
const translations = {
  zh: {
    heroTitle: "快速领证服务",
    heroSubtitle: "真实学历认证，全球高校覆盖",
    heroDescription: "毕业证、成绩单、认证文件一站搞定，支持海牙/WES，最快7天出证",
    heroSubDescription: "担心学历查不到、流程复杂？我们提供安全、真实、快速的解决方案。",
    ctaButton: "WhatsApp联系顾问",
    onlineService: "在线客服 24/7",
    averageReply: "平均5分钟内回复",
    urgentService: "紧急加急服务：3天出证",
    statsServed: "已服务15000+客户",
    statsSuccess: "99.8%通过率",
    statsFast: "7天快速出证",
    
    // Core advantages
    advantagesTitle: "核心服务优势",
    advantagesSubtitle: "为什么选择我们的学历认证服务",
    advantage1Title: "✅ 真实学历，官方可查",
    advantage1Desc: "合作正规院校，学历可官网验证。",
    advantage2Title: "🧾 全套文件，一站搞定",
    advantage2Desc: "毕业证、成绩单及多种认证齐全。",
    advantage3Title: "🔒 信息保密，安全交付",
    advantage3Desc: "严格加密，全球支持，放心使用。",
    advantage4Title: "⚡ 无考申请，最快7天出证",
    advantage4Desc: "无需考试，快速代办，真实可靠。",
    
    // Process flow
    processTitle: "🎓 学历获取流程",
    processSubtitle: "一站式解决方案，快速拿证",
    step1Title: "📲 添加 WhatsApp",
    step1Desc: "直接联系顾问，说明学历需求",
    step2Title: "🎯 匹配院校 & 下单",
    step2Desc: "推荐方案，确认后付款",
    step3Title: "🛠 启动办理流程",
    step3Desc: "启动真实学历申请流程",
    step4Title: "🌍 文件交付 & 可选认证",
    step4Desc: "提供完整文件，支持多国认证",
    
    // Navigation
    home: "首页",
    schools: "院校数据库",
    guide: "快速领证服务",
    blog: "博客",
    contact: "联系我们",
    whatsappConsult: "WhatsApp咨询"
  },
  en: {
    heroTitle: "Fast Credential Services",
    heroSubtitle: "Authentic Academic Credentials, Global Universities Coverage",
    heroDescription: "Diplomas, transcripts, certification documents all-in-one, supporting Apostille/WES, fastest 7-day delivery",
    heroSubDescription: "Worried about credential verification or complex procedures? We provide secure, authentic, and fast solutions.",
    ctaButton: "Contact WhatsApp Advisor",
    onlineService: "24/7 Online Service",
    averageReply: "Average 5-minute response",
    urgentService: "Express Service: 3-day delivery",
    statsServed: "Served 15,000+ clients",
    statsSuccess: "99.8% success rate",
    statsFast: "7-day fast delivery",
    
    // Core advantages
    advantagesTitle: "Core Service Advantages",
    advantagesSubtitle: "Why choose our academic credential services",
    advantage1Title: "✅ Authentic Credentials, Officially Verifiable",
    advantage1Desc: "Partner with accredited institutions, credentials verifiable online.",
    advantage2Title: "🧾 Complete Documents, One-Stop Solution",
    advantage2Desc: "Diplomas, transcripts, and various certifications included.",
    advantage3Title: "🔒 Information Security, Safe Delivery",
    advantage3Desc: "Strict encryption, global support, worry-free usage.",
    advantage4Title: "⚡ No Exams Required, Fastest 7-Day Delivery",
    advantage4Desc: "No tests needed, fast processing, authentic and reliable.",
    
    // Process flow
    processTitle: "🎓 Credential Acquisition Process",
    processSubtitle: "One-stop solution for fast credential processing",
    step1Title: "📲 Add WhatsApp",
    step1Desc: "Contact advisor directly, explain your credential needs",
    step2Title: "🎯 Match Institution & Place Order",
    step2Desc: "Recommend solutions, confirm and pay",
    step3Title: "🛠 Start Processing",
    step3Desc: "Initiate authentic credential application process",
    step4Title: "🌍 Document Delivery & Optional Certification",
    step4Desc: "Provide complete documents, support multi-country certification",
    
    // Navigation
    home: "Home",
    schools: "Schools Database",
    guide: "Fast Credential Service",
    blog: "Blog",
    contact: "Contact Us",
    whatsappConsult: "WhatsApp Consult"
  }
};

export default function LocalizedHome() {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh';
  const t = translations[locale as keyof typeof translations] || translations.zh;
  
  return (
    <div className="min-h-screen bg-white">
      {/* 首页结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": locale === 'en' ? "Fast Academic Credential Services" : "快速学历认证服务",
            "description": locale === 'en' ? "Professional international academic credential services, 7-day fast delivery, authentic and verifiable" : "专业海外学历认证，7天快速出证，真实可查",
            "provider": {
              "@type": "Organization",
              "name": "Acaboost"
            },
            "serviceType": locale === 'en' ? "Academic Credential Certification" : "学历认证",
            "areaServed": "Global",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://wa.me/1234567890"
            },
            "inLanguage": locale === 'en' ? "en-US" : "zh-CN"
          })
        }}
      />
      
      <div className="flex flex-col min-h-screen">
        <div className="min-h-screen flex flex-col">
          {/* Navigation */}
          <nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                {/* Logo - 左侧 */}
                <Link className="flex items-center" href={`/${locale}`}>
                  <span className="text-xl font-bold text-blue-600">Acaboost</span>
                </Link>
                
                {/* 主要导航链接 - 居中 */}
                <div className="hidden md:flex items-center justify-center flex-1">
                  <div className="flex items-center space-x-8">
                    <Link className="text-sm font-medium transition-colors text-blue-600" href={`/${locale}`}>
                      {t.home}
                    </Link>
                    <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/schools`}>
                      {t.schools}
                    </Link>
                    <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/guide`}>
                      {t.guide}
                    </Link>
                    <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/blog`}>
                      {t.blog}
                    </Link>
                    <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/contact`}>
                      {t.contact}
                    </Link>
                  </div>
                </div>
                
                {/* 右侧操作区 */}
                <div className="hidden md:flex items-center space-x-4">
                  {/* Language Switcher */}
                  <div className="flex items-center space-x-1 border border-gray-200 rounded-lg p-1">
                    <Link 
                      href="/zh" 
                      className={`px-3 py-1 rounded text-sm transition-all ${locale === 'zh' ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                    >
                      中文
                    </Link>
                    <Link 
                      href="/en" 
                      className={`px-3 py-1 rounded text-sm transition-all ${locale === 'en' ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                    >
                      EN
                    </Link>
                  </div>
                  
                  {/* WhatsApp Button */}
                  <Link
                    href={`https://wa.me/1234567890?text=${locale === 'en' ? 'Hello, I would like to inquire about academic credential services and learn about suitable solutions for me.' : '您好，我想咨询学历认证服务，希望了解适合我的学历方案'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                    </svg>
                    {t.whatsappConsult}
                  </Link>
                </div>
                
                {/* 移动端菜单按钮 */}
                <button className="md:hidden text-gray-600 hover:text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-grow pt-16">
            <main className="flex-grow">
              {/* Hero Section */}
              <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6 overflow-hidden">
                {/* 轻微的对比度增强overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700/30 to-blue-800/30"></div>
                {/* 轻微的阴影overlay用于文字可读性 */}
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto text-center relative z-10">
                  {/* 社会证明数据 */}
                  <div className="flex justify-center items-center gap-8 mb-6 text-sm flex-wrap">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                      <span className="text-green-300">✓</span>
                      <span className="font-medium text-white">{t.statsServed}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                      <span className="text-green-300">✓</span>
                      <span className="font-medium text-white">{t.statsSuccess}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                      <span className="text-green-300">✓</span>
                      <span className="font-medium text-white">{t.statsFast}</span>
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-black mb-6 text-white drop-shadow-lg">
                    <span className="text-yellow-300 drop-shadow-lg">🎓</span> {t.heroTitle}
                    <br />
                    <span className="text-3xl md:text-4xl text-white font-bold drop-shadow-lg">{t.heroSubtitle}</span>
                  </h1>
                  <p className="text-xl md:text-2xl mb-4 font-semibold text-white drop-shadow-md">{t.heroDescription}</p>
                  <p className="text-lg md:text-xl text-white mb-8 font-medium drop-shadow-md">{t.heroSubDescription}</p>
                  
                  {/* 优化的CTA区域 */}
                  <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 inline-block mb-8 border border-white/20 shadow-xl">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                      <Link 
                        href={`https://wa.me/1234567890?text=${locale === 'en' ? 'Hello, I would like to inquire about academic credential services and learn about suitable solutions for me.' : '您好，我想咨询学历认证服务，希望了解适合我的学历方案'}`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform animate-pulse"
                      >
                        <span className="mr-2 text-xl">📲</span>
                        {t.ctaButton}
                      </Link>
                      <div className="text-center text-white">
                        <p className="text-sm mb-1 font-semibold">🕒 {t.onlineService}</p>
                        <p className="text-xs font-medium">{t.averageReply}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 紧急需求标识 */}
                  <div className="inline-flex items-center gap-2 bg-red-500/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-red-400/50 font-semibold">
                    <span className="animate-ping inline-flex h-2 w-2 rounded-full bg-red-300 opacity-75"></span>
                    <span>🔥 {t.urgentService}</span>
                  </div>
                </div>
              </section>

              {/* Core Service Advantages */}
              <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.advantagesTitle}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">{t.advantagesSubtitle}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{t.advantage1Title}</h3>
                      <p className="text-gray-600">{t.advantage1Desc}</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{t.advantage2Title}</h3>
                      <p className="text-gray-600">{t.advantage2Desc}</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{t.advantage3Title}</h3>
                      <p className="text-gray-600">{t.advantage3Desc}</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{t.advantage4Title}</h3>
                      <p className="text-gray-600">{t.advantage4Desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Process Flow */}
              <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.processTitle}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">{t.processSubtitle}</p>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto relative">
                    {/* Process Steps */}
                    <div className="flex flex-col items-center text-center mb-8 md:mb-0 relative">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 relative z-10">1</div>
                      <h3 className="text-lg font-bold mb-2">{t.step1Title}</h3>
                      <p className="text-gray-600 max-w-xs">{t.step1Desc}</p>
                    </div>
                    
                    <div className="hidden md:block flex-1 h-px bg-gray-300 mx-4"></div>
                    
                    <div className="flex flex-col items-center text-center mb-8 md:mb-0 relative">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 relative z-10">2</div>
                      <h3 className="text-lg font-bold mb-2">{t.step2Title}</h3>
                      <p className="text-gray-600 max-w-xs">{t.step2Desc}</p>
                    </div>
                    
                    <div className="hidden md:block flex-1 h-px bg-gray-300 mx-4"></div>
                    
                    <div className="flex flex-col items-center text-center mb-8 md:mb-0 relative">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 relative z-10">3</div>
                      <h3 className="text-lg font-bold mb-2">{t.step3Title}</h3>
                      <p className="text-gray-600 max-w-xs">{t.step3Desc}</p>
                    </div>
                    
                    <div className="hidden md:block flex-1 h-px bg-gray-300 mx-4"></div>
                    
                    <div className="flex flex-col items-center text-center relative">
                      <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 relative z-10">✓</div>
                      <h3 className="text-lg font-bold mb-2">{t.step4Title}</h3>
                      <p className="text-gray-600 max-w-xs">{t.step4Desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 学历文件类型说明 */}
              <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{locale === 'en' ? 'Academic Document Types' : '学历文件类型说明'}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">{locale === 'en' ? 'We provide various types of academic certification documents to meet your different needs' : '我们提供多种类型的学历认证文件，满足您不同场景的需求'}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 relative bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <div className="text-6xl">🎓</div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-4">{locale === 'en' ? 'Diploma Certificate' : '毕业证书'}</h3>
                        <p className="text-gray-600">{locale === 'en' ? 'Core academic document to prove your educational background' : '作为学历核心文件，用于证明您的学历背景'}</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 relative bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                        <div className="text-6xl">📊</div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-4">{locale === 'en' ? 'Academic Transcript' : '成绩单'}</h3>
                        <p className="text-gray-600">{locale === 'en' ? 'Essential for immigration/further education applications, showcasing your academic achievements' : '申请移民/升学材料，展示您的学习成果'}</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 relative bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                        <div className="text-6xl">🏆</div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-4">{locale === 'en' ? 'Degree Certificate' : '学位证书'}</h3>
                        <p className="text-gray-600">{locale === 'en' ? 'Graduate and doctoral degree certification, enhancing your professional background' : '研究生及博士学历证明，提升您的专业背景'}</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 relative bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                        <div className="text-6xl">✅</div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-4">{locale === 'en' ? 'Education Verification Report' : '教育认证报告'}</h3>
                        <p className="text-gray-600">{locale === 'en' ? 'Ensures authenticity and verifiability, used for institutional review and verification' : '确保真实可查，用于机构审核和验证'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 全球顶尖学校资源 */}
              <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{locale === 'en' ? 'Global Top University Resources' : '全球顶尖学校资源'}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">{locale === 'en' ? 'We partner with renowned universities from multiple countries and regions worldwide, providing rich academic certification options' : '我们与全球多个国家和地区的知名院校合作，提供丰富的学历认证选择'}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🇺🇸</span>
                      </div>
                      <h3 className="font-bold mb-2">{locale === 'en' ? 'United States' : '美国'}</h3>
                      <p className="text-sm text-gray-600">{locale === 'en' ? 'Multiple renowned universities' : '多所知名院校'}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🇬🇧</span>
                      </div>
                      <h3 className="font-bold mb-2">{locale === 'en' ? 'United Kingdom' : '英国'}</h3>
                      <p className="text-sm text-gray-600">{locale === 'en' ? 'Multiple renowned universities' : '多所知名院校'}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🇦🇺</span>
                      </div>
                      <h3 className="font-bold mb-2">{locale === 'en' ? 'Australia' : '澳大利亚'}</h3>
                      <p className="text-sm text-gray-600">{locale === 'en' ? 'Multiple renowned universities' : '多所知名院校'}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🇨🇦</span>
                      </div>
                      <h3 className="font-bold mb-2">{locale === 'en' ? 'Canada' : '加拿大'}</h3>
                      <p className="text-sm text-gray-600">{locale === 'en' ? 'Multiple renowned universities' : '多所知名院校'}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🇸🇬</span>
                      </div>
                      <h3 className="font-bold mb-2">{locale === 'en' ? 'Singapore' : '新加坡'}</h3>
                      <p className="text-sm text-gray-600">{locale === 'en' ? 'Multiple renowned universities' : '多所知名院校'}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🇯🇵</span>
                      </div>
                      <h3 className="font-bold mb-2">{locale === 'en' ? 'Japan' : '日本'}</h3>
                      <p className="text-sm text-gray-600">{locale === 'en' ? 'Multiple renowned universities' : '多所知名院校'}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🇭🇰</span>
                      </div>
                      <h3 className="font-bold mb-2">{locale === 'en' ? 'Hong Kong' : '香港'}</h3>
                      <p className="text-sm text-gray-600">{locale === 'en' ? 'Multiple renowned universities' : '多所知名院校'}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🇳🇿</span>
                      </div>
                      <h3 className="font-bold mb-2">{locale === 'en' ? 'New Zealand' : '新西兰'}</h3>
                      <p className="text-sm text-gray-600">{locale === 'en' ? 'Multiple renowned universities' : '多所知名院校'}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🇳🇱</span>
                        </div>
                      <h3 className="font-bold mb-2">{locale === 'en' ? 'Netherlands' : '荷兰'}</h3>
                      <p className="text-sm text-gray-600">{locale === 'en' ? 'Multiple renowned universities' : '多所知名院校'}</p>
                        </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🇪🇸</span>
                      </div>
                      <h3 className="font-bold mb-2">{locale === 'en' ? 'Spain' : '西班牙'}</h3>
                      <p className="text-sm text-gray-600">{locale === 'en' ? 'Multiple renowned universities' : '多所知名院校'}</p>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <Link href={`/${locale}/schools`}>
                      <span className="inline-block bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                        {locale === 'en' ? 'Browse Complete University Database' : '浏览完整学校资源库'}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* 成功案例展示 */}
              <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{locale === 'en' ? 'Success Stories' : '成功案例展示'}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">{locale === 'en' ? 'See how we helped other clients successfully obtain academic certifications' : '看看我们如何帮助其他客户成功获得学历认证'}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">👩‍🎓</span>
                        </div>
                        <div>
                          <h3 className="font-bold">Lily{locale === 'en' ? ' (Singapore)' : '（新加坡）'}</h3>
                          <p className="text-sm text-gray-500">{locale === 'en' ? 'UK Master\'s Degree | PR Application | 7 days completion' : '英国硕士学历 | 申请PR | 7天完成'}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">
                        {locale === 'en' 
                          ? 'Successfully obtained UK Master\'s degree certification for Singapore PR application, delivered within 7 days.' 
                          : '成功获得英国硕士学历认证，用于申请新加坡PR，7天内快速交付。'}
                      </p>
                      <p className="text-blue-600 italic">
                        &quot;{locale === 'en' 
                          ? 'Smooth process, amazing efficiency, thanks to the team support!' 
                          : '过程顺利，效率惊人，感谢团队支持！'}&quot;
                      </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">👨‍💼</span>
                        </div>
                        <div>
                          <h3 className="font-bold">Jason{locale === 'en' ? ' (Hong Kong)' : '（中国香港）'}</h3>
                          <p className="text-sm text-gray-500">{locale === 'en' ? 'Australian Bachelor\'s Degree | Career Advancement | 7 days delivery' : '澳大利亚本科文凭 | 升职加薪 | 7天出证'}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">
                        {locale === 'en' 
                          ? 'Customized Australian bachelor\'s degree documents, successfully passed foreign company background check, promoted to project manager with 40% salary increase.' 
                          : '定制澳洲本科学历文件，顺利通过外企背景审核，成功晋升项目主管，月薪提升40%。'}
                      </p>
                      <p className="text-blue-600 italic">
                        &quot;{locale === 'en' 
                          ? 'Academic certification made my career development smoother!' 
                          : '学历认证让我职业发展更顺利！'}&quot;
                      </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-2xl">👨‍🎓</span>
                        </div>
                        <div>
                          <h3 className="font-bold">David{locale === 'en' ? ' (Canada)' : '（加拿大）'}</h3>
                          <p className="text-sm text-gray-500">{locale === 'en' ? 'US Master\'s Degree | Immigration Application | 10 days completion' : '美国硕士学历 | 移民申请 | 10天完成'}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">
                        {locale === 'en' 
                          ? 'Customized US Master\'s degree certification documents, successfully passed Canadian EE immigration application, CRS score increased by 50 points, successfully received PR invitation.' 
                          : '定制美国硕士学历认证文件，成功通过加拿大EE移民申请，CRS分数提升50分，顺利获得PR邀请。'}
                      </p>
                      <p className="text-blue-600 italic">
                        &quot;{locale === 'en' 
                          ? 'Academic credentials helped achieve immigration dreams, thanks for the professional service!' 
                          : '学历助力移民梦圆，感谢专业服务！'}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Banner */}
              <div className="py-16 bg-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gradient-to-r from-blue-600 to-blue-800"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      {locale === 'en' 
                        ? 'No need to wait for lengthy academic programs, get certified quickly and advance your career.' 
                        : '无需等待漫长学制，轻松快速拿证，职场晋升更顺利。'}
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                      📲 {locale === 'en' 
                        ? 'Add WhatsApp, dedicated advisor to help you get certified worry-free within 7-15 days.' 
                        : '添加WhatsApp，专属顾问助您7-15天内拿证无忧。'}
                    </p>
                    <Link href={`/${locale}/contact`}>
                      <span className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                        {locale === 'en' ? 'Contact Now' : '立即咨询'}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* 常见问题 FAQ */}
              <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{locale === 'en' ? 'Frequently Asked Questions (FAQ)' : '常见问题 FAQ'}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">{locale === 'en' ? 'Answers to your most pressing questions' : '解答您最关心的问题'}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-bold mb-4">{locale === 'en' ? 'Are the credentials reliable?' : '学历可靠吗？'}</h3>
                      <p className="text-gray-600">
                        {locale === 'en' 
                          ? 'All credentials are issued by authentic institutions with verification reports, ensuring authenticity and verifiability.' 
                          : '所有学历均由真实学校颁发，具备认证报告，确保真实可查。'}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-bold mb-4">{locale === 'en' ? 'Can I verify them?' : '我能查到吗？'}</h3>
                      <p className="text-gray-600">
                        {locale === 'en' 
                          ? 'Yes, authenticity can be verified through certification platforms or original institutions. We provide complete verification support.' 
                          : '可通过认证平台或原校查询学历真实性，我们提供完整的验证支持。'}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-bold mb-4">{locale === 'en' ? 'Is it legal?' : '是否违法？'}</h3>
                      <p className="text-gray-600">
                        {locale === 'en' 
                          ? 'No forgery involved. We provide legitimate certification support through proper procedures, ensuring legal compliance.' 
                          : '不涉及伪造，我们提供正规流程认证支持，确保合法合规。'}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-bold mb-4">{locale === 'en' ? 'How long does it take?' : '多久能拿到？'}</h3>
                      <p className="text-gray-600">
                        {locale === 'en' 
                          ? 'Fastest 7 business days, specific timing depends on credential type and certification requirements.' 
                          : '最快7个工作日，具体取决于学历类型和认证要求。'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    {locale === 'en' ? 'About Us' : '关于我们'}
                  </h3>
                  <p className="text-gray-400">
                    {locale === 'en' 
                      ? 'Professional global academic credential services, 7-day fast delivery, 100% authentic and verifiable.'
                      : '专业提供全球学历认证服务，7天快速交付，确保100%真实可查。'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    {locale === 'en' ? 'Quick Links' : '快速链接'}
                  </h3>
                  <ul className="space-y-2">
                    <li><Link className="text-gray-400 hover:text-white transition-colors" href={`/${locale}`}>{t.home}</Link></li>
                    <li><Link className="text-gray-400 hover:text-white transition-colors" href={`/${locale}/schools`}>{t.schools}</Link></li>
                    <li><Link className="text-gray-400 hover:text-white transition-colors" href={`/${locale}/contact`}>{t.contact}</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    {locale === 'en' ? 'Contact Information' : '联系方式'}
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-gray-400">
                      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        WhatsApp: +1 (234) 567-890
                      </Link>
                    </li>
                    <li className="text-gray-400">
                      <Link href="mailto:contact@acaboost.com" className="hover:text-white transition-colors">
                        Email: contact@acaboost.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>© 2025 Acaboost. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
} 