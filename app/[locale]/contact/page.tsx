'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// 翻译内容
const translations = {
  zh: {
    home: "首页",
    schools: "院校数据库",
    guide: "快速领证服务", 
    blog: "博客",
    contact: "联系我们",
    whatsappConsult: "📱 WhatsApp咨询",
    
    // 页面内容翻译
    heroTitle: "全球学历认证，一对一顾问服务",
    heroSubtitle: "24小时在线，支持全球客户，经验丰富、交付可靠。",
    whatsappContact: "WhatsApp 立即咨询",
    phoneContact: "电话咨询",
    
    schoolResourcesTitle: "我们合作的真实院校资源",
    schoolResourcesDesc: "我们提供的学历及认证文件均来自真实可查院校，部分如下展示。",
    europeanSchools: "🌍 欧美名校",
    asianSchools: "🏯 亚洲名校",
    
    contactInfoTitle: "联系方式与服务时间",
    contactInfoDesc: "我们提供7x24小时在线咨询服务，全球客户都能获得及时响应。",
    
    serviceAdvantagesTitle: "为什么选择我们？",
    serviceAdvantagesDesc: "专业、快速、可靠的学历认证服务，让您省心省力。",
    
    advantage1: "真实可查",
    advantage1Desc: "所有学历证书均来自正规院校，官方可查验",
    advantage2: "快速交付", 
    advantage2Desc: "一般7-15个工作日完成，急件可加急处理",
    advantage3: "专业服务",
    advantage3Desc: "一对一顾问服务，全程跟踪认证进度",
    advantage4: "安全保障",
    advantage4Desc: "严格保密客户信息，安全可靠",
    
    howItWorksTitle: "认证流程说明",
    step1Title: "1. 初步咨询",
    step1Desc: "通过WhatsApp联系我们，说明您的认证需求",
    step2Title: "2. 方案制定",
    step2Desc: "顾问为您制定个性化的认证方案和报价",
    step3Title: "3. 确认下单",
    step3Desc: "确认方案后付款，我们开始启动认证流程",
    step4Title: "4. 进度跟踪",
    step4Desc: "认证过程中实时为您更新进度情况",
    step5Title: "5. 完成交付",
    step5Desc: "认证完成后，安全地将文件交付给您",
    
    faqTitle: "常见问题解答",
    faq1Q: "认证需要多长时间？",
    faq1A: "一般情况下7-15个工作日完成，具体时间取决于院校和认证类型。加急服务可在3-5个工作日内完成。",
    faq2Q: "文件是否真实可查？",
    faq2A: "是的，我们提供的所有学历文件都来自正规院校，可通过官方渠道验证真实性。",
    faq3Q: "支持哪些付款方式？",
    faq3A: "我们支持多种付款方式，包括银行转账、PayPal等，具体可咨询顾问。",
    faq4Q: "是否提供售后服务？",
    faq4A: "我们提供完善的售后服务，如果在使用过程中遇到任何问题，随时可以联系我们。",
    
    ctaTitle: "准备开始学历认证之旅？",
    ctaDesc: "立即联系我们的专业顾问，获取定制化认证方案",
    ctaButton: "📱 WhatsApp 咨询顾问",
    
    // 统计数据翻译
    clientsServed: "已服务客户",
    countriesCovered: "覆盖国家", 
    schoolsAvailable: "可提供学历院校",
    satisfactionRate: "客户满意率",
    deliveryTime: "平均交付时效",
    
    // 客户类型部分翻译
    customerTypesTitle: "我们服务的客户是谁？",
    customerType: "客户类型",
    mainRequirements: "主要需求",
    professionalWorkers: "职场人士",
    promotion: "升职",
    jobEntry: "入职", 
    immigration: "移民",
    notarization: "公证",
    
    // 学校名称翻译
    harvard: "哈佛大学",
    stanford: "斯坦福大学",
    mit: "麻省理工学院",
    oxford: "牛津大学", 
    cambridge: "剑桥大学",
    imperial: "帝国理工学院",
    toronto: "多伦多大学",
    melbourne: "墨尔本大学",
    boston: "波士顿大学",
    nus: "新加坡国立大学",
    ntu: "南洋理工大学",
    tokyo: "东京大学",
    hku: "香港大学",
    cuhk: "香港中文大学",
    hkust: "香港科技大学",
    
    footerAbout: "关于我们",
    footerAboutDesc: "专业提供全球学历认证服务，7天快速交付，确保100%真实可查。",
    footerQuickLinks: "快速链接",
    footerContact: "联系方式"
  },
  en: {
    home: "Home",
    schools: "Schools Database",
    guide: "Fast Credential Service",
    blog: "Blog", 
    contact: "Contact Us",
    whatsappConsult: "📱 WhatsApp Consult",
    
    // 页面内容翻译
    heroTitle: "Global Academic Credential Services, One-on-One Consultant Support",
    heroSubtitle: "24/7 online support for global clients, experienced and reliable delivery.",
    whatsappContact: "WhatsApp Contact Now",
    phoneContact: "Phone Consultation",
    
    schoolResourcesTitle: "Our Partnered Authentic University Resources",
    schoolResourcesDesc: "All academic credentials and certification documents we provide come from authentic, verifiable universities, some examples shown below.",
    europeanSchools: "🌍 European & American Universities",
    asianSchools: "🏯 Asian Universities",
    
    contactInfoTitle: "Contact Information & Service Hours",
    contactInfoDesc: "We provide 24/7 online consultation services, ensuring timely response for clients worldwide.",
    
    serviceAdvantagesTitle: "Why Choose Us?",
    serviceAdvantagesDesc: "Professional, fast, and reliable academic credential services that save you time and effort.",
    
    advantage1: "Authentic & Verifiable",
    advantage1Desc: "All academic certificates come from accredited institutions, officially verifiable",
    advantage2: "Fast Delivery", 
    advantage2Desc: "Generally completed within 7-15 business days, express service available",
    advantage3: "Professional Service",
    advantage3Desc: "One-on-one consultant service with full-process tracking",
    advantage4: "Secure Process",
    advantage4Desc: "Strict confidentiality of client information, safe and reliable",
    
    howItWorksTitle: "Certification Process Explanation",
    step1Title: "1. Initial Consultation",
    step1Desc: "Contact us via WhatsApp to explain your certification needs",
    step2Title: "2. Plan Development",
    step2Desc: "Consultant creates a personalized certification plan and quote for you",
    step3Title: "3. Confirm Order",
    step3Desc: "After confirming the plan and payment, we begin the certification process",
    step4Title: "4. Progress Tracking",
    step4Desc: "Real-time updates on your certification progress throughout the process",
    step5Title: "5. Completion & Delivery",
    step5Desc: "Upon completion, we securely deliver the documents to you",
    
    faqTitle: "Frequently Asked Questions",
    faq1Q: "How long does certification take?",
    faq1A: "Generally 7-15 business days, depending on the institution and certification type. Express service can be completed within 3-5 business days.",
    faq2Q: "Are the documents authentic and verifiable?",
    faq2A: "Yes, all academic documents we provide come from accredited institutions and can be verified through official channels.",
    faq3Q: "What payment methods do you accept?",
    faq3A: "We accept various payment methods including bank transfer, PayPal, etc. Please consult with our advisor for details.",
    faq4Q: "Do you provide after-sales service?",
    faq4A: "We provide comprehensive after-sales service. If you encounter any issues during use, you can contact us anytime.",
    
    ctaTitle: "Ready to Start Your Academic Certification Journey?",
    ctaDesc: "Contact our professional consultants now to get a customized certification plan",
    ctaButton: "📱 WhatsApp Consult",
    
    footerAbout: "About Us",
    footerAboutDesc: "Professional global academic credential services, 7-day fast delivery, 100% authentic and verifiable.",
    footerQuickLinks: "Quick Links",
    footerContact: "Contact Information"
  }
};

export default function Contact() {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh';
  const t = translations[locale as keyof typeof translations] || translations.zh;

  return (
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
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}`}>
                {t.home}
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/schools`}>
                {t.schools}
              </Link>
                <Link className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href={`/${locale}/guide`}>
                {t.guide}
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/blog`}>
                {t.blog}
              </Link>
              <Link className="text-sm font-medium transition-colors text-blue-600" href={`/${locale}/contact`}>
                {t.contact}
              </Link>
              </div>
            </div>
            
            {/* 右侧操作区 */}
            <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
              <div className="flex items-center space-x-1 border border-gray-200 rounded-lg p-1">
              <Link 
                href="/zh/contact" 
                  className={`px-3 py-1 rounded text-sm transition-all ${locale === 'zh' ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
              >
                中文
              </Link>
              <Link 
                href="/en/contact" 
                  className={`px-3 py-1 rounded text-sm transition-all ${locale === 'en' ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
              >
                EN
              </Link>
            </div>
            
              {/* WhatsApp Button */}
            <Link 
                href={`https://wa.me/8612345678901?text=${locale === 'en' ? 'Hello, I would like to inquire about academic credential services.' : '您好，我想咨询学历认证服务，希望了解适合我的学历方案'}`}
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

      <main className="flex-grow pt-16">
        <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
          <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.heroTitle}</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">{t.heroSubtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://wa.me/8612345678901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">📱</span>
                  {t.whatsappContact}
                </Link>
                <Link 
                  href="tel:+8612345678901"
                  className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">📞</span>
                  {t.phoneContact}
                </Link>
              </div>
            </div>
          </section>

          {/* School Resources Section */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.schoolResourcesTitle}</h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {t.schoolResourcesDesc}
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.europeanSchools}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🏛️</div>
                    <p className="text-sm text-gray-600 font-medium">{locale === 'zh' ? '哈佛大学' : 'Harvard University'}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🌲</div>
                    <p className="text-sm text-gray-600 font-medium">{locale === 'zh' ? '斯坦福大学' : 'Stanford University'}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🔬</div>
                    <p className="text-sm text-gray-600 font-medium">{locale === 'zh' ? '麻省理工学院' : 'MIT'}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">📚</div>
                    <p className="text-sm text-gray-600 font-medium">{locale === 'zh' ? '牛津大学' : 'Oxford University'}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">⚖️</div>
                    <p className="text-sm text-gray-600 font-medium">{locale === 'zh' ? '剑桥大学' : 'Cambridge University'}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🔧</div>
                    <p className="text-sm text-gray-600 font-medium">{locale === 'zh' ? '帝国理工学院' : 'Imperial College London'}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🍁</div>
                    <p className="text-sm text-gray-600 font-medium">{locale === 'zh' ? '多伦多大学' : 'University of Toronto'}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🦘</div>
                    <p className="text-sm text-gray-600 font-medium">{locale === 'zh' ? '墨尔本大学' : 'University of Melbourne'}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🎓</div>
                    <p className="text-sm text-gray-600 font-medium">{locale === 'zh' ? '波士顿大学' : 'Boston University'}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.asianSchools}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🦁</div>
                    <p className="text-sm text-gray-600 font-medium">{locale === 'zh' ? '新加坡国立大学' : 'National University of Singapore'}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🔬</div>
                    <p className="text-sm text-gray-600 font-medium">{locale === 'zh' ? '南洋理工大学' : 'Nanyang Technological University'}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🗾</div>
                    <p className="text-sm text-gray-600 font-medium">{locale === 'zh' ? '东京大学' : 'University of Tokyo'}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🏙️</div>
                    <p className="text-sm text-gray-600 font-medium">{locale === 'zh' ? '香港大学' : 'University of Hong Kong'}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">📚</div>
                    <p className="text-sm text-gray-600 font-medium">{locale === 'zh' ? '香港中文大学' : 'Chinese University of Hong Kong'}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">⚗️</div>
                    <p className="text-sm text-gray-600 font-medium">{locale === 'zh' ? '香港科技大学' : 'Hong Kong University of Science and Technology'}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.contactInfoTitle}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center border border-gray-100">
                  <div className="text-4xl mb-4">👥</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">3,200+</div>
                  <h3 className="text-sm font-semibold text-gray-700">{locale === 'zh' ? '已服务客户' : 'Clients Served'}</h3>
                </div>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center border border-gray-100">
                  <div className="text-4xl mb-4">🌎</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <h3 className="text-sm font-semibold text-gray-700">{locale === 'zh' ? '覆盖国家' : 'Countries Covered'}</h3>
                </div>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center border border-gray-100">
                  <div className="text-4xl mb-4">🎓</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">120+</div>
                  <h3 className="text-sm font-semibold text-gray-700">{locale === 'zh' ? '可提供学历院校' : 'Available Schools'}</h3>
                </div>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center border border-gray-100">
                  <div className="text-4xl mb-4">⭐</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">98.7%</div>
                  <h3 className="text-sm font-semibold text-gray-700">{locale === 'zh' ? '客户满意率' : 'Satisfaction Rate'}</h3>
                </div>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center border border-gray-100">
                  <div className="text-4xl mb-4">⏰</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{locale === 'zh' ? '7~15天' : '7-15 days'}</div>
                  <h3 className="text-sm font-semibold text-gray-700">{locale === 'zh' ? '平均交付时效' : 'Delivery Time'}</h3>
              </div>
            </div>
          </div>
        </section>

          {/* Customer Types Section */}
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{locale === 'zh' ? '我们服务的客户是谁？' : 'Who Are Our Clients?'}</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{locale === 'zh' ? '客户类型' : 'Client Type'}</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{locale === 'zh' ? '主要需求' : 'Main Requirements'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🧑‍💼</span>
                          <span className="font-medium text-gray-900">{locale === 'zh' ? '职场人士' : 'Professional Workers'}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">{locale === 'zh' ? '升职' : 'Promotion'}</span>
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">{locale === 'zh' ? '入职' : 'Job Entry'}</span>
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">{locale === 'zh' ? '移民' : 'Immigration'}</span>
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">{locale === 'zh' ? '公证' : 'Notarization'}</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🧑‍🎓</span>
                          <span className="font-medium text-gray-900">{locale === 'zh' ? '留学认证人群' : 'Study Abroad Credential Seekers'}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">{locale === 'zh' ? '补件' : 'Document Completion'}</span>
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">WES</span>
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">ICAS</span>
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">NACES</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🌍</span>
                          <span className="font-medium text-gray-900">{locale === 'zh' ? '海外身份申请人' : 'Overseas Status Applicants'}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">{locale === 'zh' ? '签证' : 'Visa'}</span>
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">{locale === 'zh' ? '工签' : 'Work Permit'}</span>
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">{locale === 'zh' ? '落户' : 'Residency'}</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🏫</span>
                          <span className="font-medium text-gray-900">{locale === 'zh' ? '教育机构/中介合作方' : 'Educational Institutions/Agency Partners'}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">{locale === 'zh' ? '提供学历背书或认证支持' : 'Academic Credential Support & Authentication'}</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{locale === 'zh' ? '我们是谁｜专业的学历认证服务团队' : 'Who We Are | Professional Academic Credential Service Team'}</h2>
                <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {locale === 'zh' ? '我们的团队由认证顾问、档案审核师、国际认证专家组成，具备多年经验，服务遍及北美、东南亚、港澳等国家和地区，深谙各国认证体系，保障您快速、安全、高质量获取真实可查学历文件。' : 'Our team consists of certification consultants, document reviewers, and international certification experts with years of experience serving North America, Southeast Asia, Hong Kong, Macau and other countries and regions. We are well-versed in various national certification systems to ensure you receive authentic, verifiable academic documents quickly, safely, and with high quality.'}
                </p>
            </div>
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">👨‍💼</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{locale === 'zh' ? '李顾问' : 'Consultant Li'}</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">{locale === 'zh' ? '高级学历顾问' : 'Senior Academic Advisor'}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{locale === 'zh' ? '专注美加市场，擅长WES、ECE等国际认证，全流程跟进，客户满意度98%。' : 'Specializes in the North American market, expert in WES, ECE and other international certifications, full-process tracking, 98% customer satisfaction.'}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">👩‍💼</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">Sarah</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">{locale === 'zh' ? '客户服务经理' : 'Customer Service Manager'}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{locale === 'zh' ? '负责东南亚客户支持，精通多国语言，保障7x24小时响应与售后。' : 'Responsible for Southeast Asian customer support, fluent in multiple languages, ensuring 7x24 hour response and after-sales service.'}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">👨‍🔬</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">Mark</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">{locale === 'zh' ? '档案审核专员' : 'Document Review Specialist'}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{locale === 'zh' ? '严格审核每一份文件内容与格式，确保交付资料真实完整。' : 'Strictly reviews the content and format of every document to ensure delivered materials are authentic and complete.'}</p>
                  </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">👩‍🎓</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">Amanda</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">{locale === 'zh' ? '认证流程专家' : 'Certification Process Expert'}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{locale === 'zh' ? '熟悉各类认证路径（教育部、海牙、WES等），擅长定制高效认证方案。' : 'Familiar with various certification pathways (Ministry of Education, Hague, WES, etc.), specializes in customizing efficient certification solutions.'}</p>
                    </div>
                  </div>
                </div>
                </div>
                
                <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full text-sm font-medium">
                  <span>📌</span>
                  {locale === 'zh' ? '我们承诺：每位顾问均通过严格认证培训，保障服务质量与信息保密。' : 'Our Commitment: Every consultant has undergone strict certification training to ensure service quality and information confidentiality.'}
                </div>
            </div>
          </div>
        </section>

          {/* Advantages Section */}
          <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.serviceAdvantagesTitle}</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{locale === 'zh' ? '优势项' : 'Advantages'}</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{locale === 'zh' ? '对客户的价值' : 'Value to Clients'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">{t.advantage1}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">{t.advantage1Desc}</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">{t.advantage2}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">{t.advantage2Desc}</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">{t.advantage3}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">{t.advantage3Desc}</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">{t.advantage4}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">{t.advantage4Desc}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </section>

          {/* FAQ Section */}
          <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.faqTitle}</h2>
                <p className="text-gray-600">{locale === 'zh' ? '以下是客户最常询问的问题' : 'Here are the most frequently asked questions from our clients'}</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900">{t.step1Title}</h3>
                    <svg className="w-5 h-5 text-gray-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900">{t.step2Title}</h3>
                    <svg className="w-5 h-5 text-gray-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900">{t.step3Title}</h3>
                    <svg className="w-5 h-5 text-gray-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900">{t.step4Title}</h3>
                    <svg className="w-5 h-5 text-gray-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900">{t.step5Title}</h3>
                    <svg className="w-5 h-5 text-gray-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
              </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16 px-6 bg-blue-700 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-3xl font-bold text-white mb-3">{t.ctaTitle}</h2>
              <p className="text-xl text-blue-100 mb-8">{t.ctaDesc}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://wa.me/8612345678901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">📱</span>
                  {t.ctaButton}
                </Link>
                <Link
                  href="/guide"
                  className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  {locale === 'zh' ? '获取认证方案' : 'Get Certification Plan'}
                </Link>
            </div>
          </div>
        </section>
        </main>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footerAbout}</h3>
              <p className="text-gray-400">{t.footerAboutDesc}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footerQuickLinks}</h3>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors" href="/">{locale === 'zh' ? '首页' : 'Home'}</Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors" href="/schools">{locale === 'zh' ? '学校资源' : 'School Resources'}</Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors" href="/contact">{locale === 'zh' ? '联系我们' : 'Contact Us'}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footerContact}</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <Link 
                    href="https://wa.me/8612345678901"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp: +86 123 4567 8901
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link className="hover:text-white transition-colors" href="mailto:contact@acaboost.com">
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

      {/* Floating WhatsApp Button */}
      <Link
        href={`https://wa.me/8612345678901?text=${locale === 'zh' ? '您好，我想咨询学历认证服务' : 'Hello, I would like to inquire about academic credential services.'}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
        </svg>
      </Link>
    </div>
  );
} 