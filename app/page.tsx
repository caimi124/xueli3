'use client';

import React from 'react';
import Link from 'next/link';

export default function RootPage() {
  // 使用中文作为默认语言
  // const locale = 'zh';
  
  // 翻译内容
  const t = {
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
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* 首页结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "快速学历认证服务",
            "description": "专业海外学历认证，7天快速出证，真实可查",
            "provider": {
              "@type": "Organization",
              "name": "Acaboost"
            },
            "serviceType": "学历认证",
            "areaServed": "Global",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://wa.me/1234567890"
            },
            "inLanguage": "zh-CN"
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
                <Link className="flex items-center" href="/">
                  <span className="text-xl font-bold text-blue-600">Acaboost</span>
                </Link>
                
                {/* 主要导航链接 - 居中 */}
                <div className="hidden md:flex items-center justify-center flex-1">
                  <div className="flex items-center space-x-8">
                    <Link className="text-sm font-medium transition-colors text-blue-600" href="/">
                      {t.home}
                    </Link>
                    <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/zh/schools">
                      {t.schools}
                    </Link>
                    <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/zh/guide">
                      {t.guide}
                    </Link>
                    <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/zh/blog">
                      {t.blog}
                    </Link>
                    <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/zh/contact">
                      {t.contact}
                    </Link>
                  </div>
                </div>
                
                {/* 右侧操作区 */}
                <div className="hidden md:flex items-center space-x-4">
                  {/* Language Switcher */}
                  <div className="flex items-center space-x-1 border border-gray-200 rounded-lg p-1">
                    <Link 
                      href="/" 
                      className="px-3 py-1 rounded text-sm transition-all bg-blue-100 text-blue-700 font-medium"
                    >
                      中文
                    </Link>
                    <Link 
                      href="/en" 
                      className="px-3 py-1 rounded text-sm transition-all text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    >
                      EN
                    </Link>
                  </div>
                  
                  {/* WhatsApp Button */}
                  <Link
                    href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务，希望了解适合我的学历方案"
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
                        href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务，希望了解适合我的学历方案"
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
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{t.advantage4Title}</h3>
                      <p className="text-gray-600">{t.advantage4Desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Section */}
              <div className="py-16">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.processTitle}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">{t.processSubtitle}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                      <h3 className="text-xl font-bold mb-3">{t.step1Title}</h3>
                      <p className="text-gray-600">{t.step1Desc}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                      <h3 className="text-xl font-bold mb-3">{t.step2Title}</h3>
                      <p className="text-gray-600">{t.step2Desc}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                      <h3 className="text-xl font-bold mb-3">{t.step3Title}</h3>
                      <p className="text-gray-600">{t.step3Desc}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                      <h3 className="text-xl font-bold mb-3">{t.step4Title}</h3>
                      <p className="text-gray-600">{t.step4Desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Acaboost</h3>
                  <p className="text-gray-400 text-sm">专业学历认证服务，真实可靠，快速出证。</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">服务</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link href="/zh/guide" className="hover:text-white">学历认证</Link></li>
                    <li><Link href="/zh/schools" className="hover:text-white">院校数据库</Link></li>
                    <li><Link href="/zh/blog" className="hover:text-white">博客资讯</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">支持</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link href="/zh/contact" className="hover:text-white">联系我们</Link></li>
                    <li><Link href="/zh/privacy" className="hover:text-white">隐私政策</Link></li>
                    <li><Link href="/zh/terms" className="hover:text-white">服务条款</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">联系方式</h4>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>WhatsApp: 24/7在线</p>
                    <p>平均回复: 5分钟内</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                <p>&copy; 2024 Acaboost. 保留所有权利。</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}