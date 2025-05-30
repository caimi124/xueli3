'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
                {/* Left: Logo */}
                <Link className="flex items-center" href={`/${locale}`}>
                  <span className="text-xl font-bold text-blue-600">Acaboost</span>
                </Link>
                
                {/* Center: Menu */}
                <div className="hidden md:flex items-center space-x-8">
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
                
                {/* Language Switcher */}
                <div className="hidden md:flex items-center space-x-2 mr-4">
                  <Link 
                    href="/zh" 
                    className={`px-3 py-1 rounded text-sm ${locale === 'zh' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    中文
                  </Link>
                  <Link 
                    href="/en" 
                    className={`px-3 py-1 rounded text-sm ${locale === 'en' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    EN
                  </Link>
                </div>
                
                {/* Right: CTA Button */}
                <Link 
                  href={`https://wa.me/1234567890?text=${locale === 'en' ? 'Hello, I would like to inquire about academic credential services and learn about suitable solutions for me.' : '您好，我想咨询学历认证服务，希望了解适合我的学历方案'}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hidden md:flex bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                >
                  {t.whatsappConsult}
                </Link>
                
                {/* Mobile Menu Button */}
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
              <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
                <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
                  <div className="max-w-6xl mx-auto text-center">
                    {/* 社会证明数据 */}
                    <div className="flex justify-center items-center gap-8 mb-6 text-sm flex-wrap">
                      <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                        <span className="text-green-400">✓</span>
                        <span>{t.statsServed}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                        <span className="text-green-400">✓</span>
                        <span>{t.statsSuccess}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                        <span className="text-green-400">✓</span>
                        <span>{t.statsFast}</span>
                      </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                      <span className="text-yellow-300">🎓</span> {t.heroTitle}
                      <br />
                      <span className="text-3xl md:text-4xl text-blue-100">{t.heroSubtitle}</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-4">{t.heroDescription}</p>
                    <p className="text-lg md:text-xl text-blue-100 mb-8">{t.heroSubDescription}</p>
                    
                    {/* 优化的CTA区域 */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block mb-8">
                      <div className="flex flex-col md:flex-row gap-4 items-center">
                        <Link 
                          href={`https://wa.me/1234567890?text=${locale === 'en' ? 'Hello, I would like to inquire about academic credential services and learn about suitable solutions for me.' : '您好，我想咨询学历认证服务，希望了解适合我的学历方案'}`}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform animate-pulse"
                        >
                          <span className="mr-2 text-xl">📲</span>
                          {t.ctaButton}
                        </Link>
                        <div className="text-center text-white/80">
                          <p className="text-sm mb-1">🕒 {t.onlineService}</p>
                          <p className="text-xs">{t.averageReply}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* 紧急需求标识 */}
                    <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-100 px-4 py-2 rounded-full text-sm">
                      <span className="animate-ping inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                      <span>🔥 {t.urgentService}</span>
                    </div>
                  </div>
                </section>
              </div>

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
                  <div className="relative">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
                    <div className="space-y-16">
                      <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-5/12 md:text-right md:pr-8">
                          <h3 className="text-xl font-bold mb-3 text-blue-600">{t.step1Title}</h3>
                          <p className="text-gray-600">{t.step1Desc}</p>
                        </div>
                        <div className="my-4 md:my-0 md:w-2/12 flex justify-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10 shadow-lg">1</div>
                        </div>
                        <div className="md:w-5/12"></div>
                      </div>
                      <div className="flex flex-col md:flex-row md:flex-row-reverse items-center">
                        <div className="md:w-5/12 md:text-left md:pl-8">
                          <h3 className="text-xl font-bold mb-3 text-green-600">{t.step2Title}</h3>
                          <p className="text-gray-600">{t.step2Desc}</p>
                        </div>
                        <div className="my-4 md:my-0 md:w-2/12 flex justify-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10 shadow-lg">2</div>
                        </div>
                        <div className="md:w-5/12"></div>
                      </div>
                      <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-5/12 md:text-right md:pr-8">
                          <h3 className="text-xl font-bold mb-3 text-orange-600">{t.step3Title}</h3>
                          <p className="text-gray-600">{t.step3Desc}</p>
                        </div>
                        <div className="my-4 md:my-0 md:w-2/12 flex justify-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10 shadow-lg">3</div>
                        </div>
                        <div className="md:w-5/12"></div>
                      </div>
                      <div className="flex flex-col md:flex-row md:flex-row-reverse items-center">
                        <div className="md:w-5/12 md:text-left md:pl-8">
                          <h3 className="text-xl font-bold mb-3 text-purple-600">{t.step4Title}</h3>
                          <p className="text-gray-600">{t.step4Desc}</p>
                        </div>
                        <div className="my-4 md:my-0 md:w-2/12 flex justify-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10 shadow-lg">4</div>
                        </div>
                        <div className="md:w-5/12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rest of the sections would be similarly translated... */}
              {/* For brevity, I'll include a few more key sections */}

              {/* CTA Section */}
              <div className="py-16 bg-blue-700 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      {locale === 'en' 
                        ? "No need to wait for lengthy education programs. Get your credentials easily and quickly for smoother career advancement." 
                        : "无需等待漫长学制，轻松快速拿证，职场晋升更顺利。"
                      }
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                      {locale === 'en'
                        ? "📲 Add WhatsApp, our dedicated advisor will help you get your credentials worry-free within 7-15 days."
                        : "📲 添加WhatsApp，专属顾问助您7-15天内拿证无忧。"
                      }
                    </p>
                    <Link href={`/${locale}/contact`}>
                      <span className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                        {locale === 'en' ? "Contact Now" : "立即咨询"}
                      </span>
                    </Link>
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