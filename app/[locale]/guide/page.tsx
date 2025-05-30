'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// 翻译内容
const translations = {
  zh: {
    title: "快速领证服务",
    subtitle: "专业学历认证，7天极速出证，全球通用",
    description: "无需等待漫长学制，我们提供真实可查的学历认证服务，支持全球70+知名院校",
    
    // 服务套餐
    packagesTitle: "服务套餐",
    packagesSubtitle: "选择适合您的认证方案",
    
    basicPackage: "基础套餐",
    basicPrice: "¥8,999",
    basicFeatures: [
      "✅ 学历证书（毕业证）",
      "✅ 真实可查认证",
      "✅ 7-15天交付", 
      "✅ 专属顾问服务",
      "✅ 官方认证报告"
    ],
    
    standardPackage: "标准套餐",
    standardPrice: "¥12,999", 
    standardFeatures: [
      "✅ 学历证书 + 成绩单",
      "✅ 真实可查认证",
      "✅ 5-10天交付",
      "✅ 专属顾问服务", 
      "✅ 官方认证报告",
      "✅ 海牙认证（可选）"
    ],
    
    premiumPackage: "高级套餐", 
    premiumPrice: "¥18,999",
    premiumFeatures: [
      "✅ 全套学历文件",
      "✅ 真实可查认证", 
      "✅ 3-7天极速交付",
      "✅ 24/7专属顾问",
      "✅ 官方认证报告",
      "✅ WES/USCIS认证",
      "✅ 全球邮寄服务"
    ],
    
    // 服务流程
    processTitle: "服务流程",
    processSubtitle: "简单4步，轻松拿证",
    
    step1: "咨询需求",
    step1Desc: "添加WhatsApp，告知学历需求，获取专业建议",
    step2: "确认方案", 
    step2Desc: "顾问推荐最佳院校方案，确认后付款启动",
    step3: "办理认证",
    step3Desc: "专业团队启动认证流程，全程跟踪进度",
    step4: "交付文件",
    step4Desc: "文件完成后安全交付，支持全球邮寄",
    
    // 常见问题
    faqTitle: "常见问题",
    faq1Q: "认证的学历是否真实可查？",
    faq1A: "是的，我们提供的所有学历都是真实有效的，可以通过官方渠道查询验证。",
    faq2Q: "认证周期需要多长时间？",
    faq2A: "标准服务7-15个工作日，加急服务3-7个工作日，具体时间根据所选院校而定。",
    faq3Q: "支持哪些国家的学历认证？",
    faq3A: "我们支持美国、英国、澳大利亚、加拿大、新加坡等多个国家的知名院校。",
    faq4Q: "费用包含哪些服务？",
    faq4A: "费用包含学历文件、官方认证、专属顾问服务，部分套餐还包含国际认证和邮寄服务。",
    
    // CTA
    ctaTitle: "准备开始您的学历认证之旅？",
    ctaDescription: "添加我们的专业顾问，获取个性化学历认证方案",
    ctaButton: "立即咨询",
    whatsappButton: "WhatsApp咨询",
    
    // 导航
    home: "首页",
    schools: "院校数据库", 
    guide: "快速领证服务",
    blog: "博客",
    contact: "联系我们"
  },
  en: {
    title: "Fast Credential Services",
    subtitle: "Professional Academic Certification, 7-Day Express Delivery, Globally Recognized",
    description: "No need to wait for lengthy education programs, we provide authentic and verifiable academic credential services supporting 70+ renowned universities worldwide",
    
    // 服务套餐
    packagesTitle: "Service Packages",
    packagesSubtitle: "Choose the certification plan that suits you",
    
    basicPackage: "Basic Package",
    basicPrice: "$1,299",
    basicFeatures: [
      "✅ Diploma Certificate",
      "✅ Authentic & Verifiable",
      "✅ 7-15 Days Delivery", 
      "✅ Dedicated Advisor",
      "✅ Official Certification Report"
    ],
    
    standardPackage: "Standard Package",
    standardPrice: "$1,899", 
    standardFeatures: [
      "✅ Diploma + Transcript",
      "✅ Authentic & Verifiable",
      "✅ 5-10 Days Delivery",
      "✅ Dedicated Advisor", 
      "✅ Official Certification Report",
      "✅ Apostille Certification (Optional)"
    ],
    
    premiumPackage: "Premium Package", 
    premiumPrice: "$2,799",
    premiumFeatures: [
      "✅ Complete Academic Documents",
      "✅ Authentic & Verifiable", 
      "✅ 3-7 Days Express Delivery",
      "✅ 24/7 Dedicated Advisor",
      "✅ Official Certification Report",
      "✅ WES/USCIS Certification",
      "✅ Global Shipping Service"
    ],
    
    // 服务流程
    processTitle: "Service Process",
    processSubtitle: "Simple 4 steps to get your credentials",
    
    step1: "Consultation",
    step1Desc: "Add WhatsApp, tell us your needs, get professional advice",
    step2: "Confirm Plan", 
    step2Desc: "Advisor recommends best university plan, confirm and pay to start",
    step3: "Processing",
    step3Desc: "Professional team starts certification process, track progress throughout",
    step4: "Document Delivery",
    step4Desc: "Secure delivery upon completion, global shipping supported",
    
    // 常见问题
    faqTitle: "Frequently Asked Questions",
    faq1Q: "Are the certified credentials authentic and verifiable?",
    faq1A: "Yes, all credentials we provide are authentic and valid, verifiable through official channels.",
    faq2Q: "How long does the certification process take?",
    faq2A: "Standard service takes 7-15 business days, express service takes 3-7 business days, specific timing depends on the selected institution.",
    faq3Q: "Which countries' credentials do you support?",
    faq3A: "We support renowned universities from US, UK, Australia, Canada, Singapore and other countries.",
    faq4Q: "What services are included in the fee?",
    faq4A: "The fee includes academic documents, official certification, dedicated advisor service, and some packages include international certification and shipping.",
    
    // CTA
    ctaTitle: "Ready to Start Your Academic Credential Journey?",
    ctaDescription: "Add our professional advisor to get a personalized academic credential plan",
    ctaButton: "Contact Now",
    whatsappButton: "WhatsApp Consult",
    
    // 导航
    home: "Home",
    schools: "Schools Database", 
    guide: "Fast Credential Service",
    blog: "Blog",
    contact: "Contact Us"
  }
};

export default function LocalizedGuide() {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh';
  const t = translations[locale as keyof typeof translations] || translations.zh;
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link className="flex items-center" href={`/${locale}`}>
              <span className="text-xl font-bold text-blue-600">Acaboost</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}`}>
                {t.home}
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/schools`}>
                {t.schools}
              </Link>
              <Link className="text-sm font-medium transition-colors text-blue-600" href={`/${locale}/guide`}>
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
                href="/zh/guide" 
                className={`px-3 py-1 rounded text-sm ${locale === 'zh' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
              >
                中文
              </Link>
              <Link 
                href="/en/guide" 
                className={`px-3 py-1 rounded text-sm ${locale === 'en' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
              >
                EN
              </Link>
            </div>
            
            <Link 
              href={`https://wa.me/1234567890?text=${locale === 'en' ? 'Hello, I would like to inquire about fast credential services.' : '您好，我想咨询快速领证服务。'}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:flex bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
            >
              {t.whatsappButton}
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🎓 {t.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4">{t.subtitle}</p>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">{t.description}</p>
            
            {/* 紧急提醒 */}
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-100 px-6 py-3 rounded-full text-sm">
              <span className="animate-ping inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
              <span>🔥 {locale === 'en' ? 'Limited Time Offer: Express 3-Day Service Available' : '限时优惠：3天加急服务现已开放'}</span>
            </div>
          </div>
        </section>

        {/* 服务套餐 */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.packagesTitle}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t.packagesSubtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 基础套餐 */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-xl font-bold mb-4">{t.basicPackage}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">{t.basicPrice}</div>
                <ul className="text-left space-y-3 mb-8">
                  {t.basicFeatures.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
                <Link 
                  href={`https://wa.me/1234567890?text=${locale === 'en' ? `Hello, I'm interested in the Basic Package (${t.basicPrice}).` : `您好，我对基础套餐（${t.basicPrice}）感兴趣。`}`}
                  target="_blank"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  {t.ctaButton}
                </Link>
              </div>

              {/* 标准套餐 - 推荐 */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center relative border-2 border-blue-500">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  {locale === 'en' ? 'RECOMMENDED' : '推荐'}
                </div>
                <h3 className="text-xl font-bold mb-4">{t.standardPackage}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">{t.standardPrice}</div>
                <ul className="text-left space-y-3 mb-8">
                  {t.standardFeatures.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
                <Link 
                  href={`https://wa.me/1234567890?text=${locale === 'en' ? `Hello, I'm interested in the Standard Package (${t.standardPrice}).` : `您好，我对标准套餐（${t.standardPrice}）感兴趣。`}`}
                  target="_blank"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  {t.ctaButton}
                </Link>
              </div>

              {/* 高级套餐 */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-xl font-bold mb-4">{t.premiumPackage}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">{t.premiumPrice}</div>
                <ul className="text-left space-y-3 mb-8">
                  {t.premiumFeatures.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
                <Link 
                  href={`https://wa.me/1234567890?text=${locale === 'en' ? `Hello, I'm interested in the Premium Package (${t.premiumPrice}).` : `您好，我对高级套餐（${t.premiumPrice}）感兴趣。`}`}
                  target="_blank"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  {t.ctaButton}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 服务流程 */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.processTitle}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t.processSubtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📲</span>
                </div>
                <h3 className="font-bold text-lg mb-3">{t.step1}</h3>
                <p className="text-gray-600">{t.step1Desc}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-lg mb-3">{t.step2}</h3>
                <p className="text-gray-600">{t.step2Desc}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛠</span>
                </div>
                <h3 className="font-bold text-lg mb-3">{t.step3}</h3>
                <p className="text-gray-600">{t.step3Desc}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-bold text-lg mb-3">{t.step4}</h3>
                <p className="text-gray-600">{t.step4Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{t.faqTitle}</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">{t.faq1Q}</h3>
                <p className="text-gray-600">{t.faq1A}</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">{t.faq2Q}</h3>
                <p className="text-gray-600">{t.faq2A}</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">{t.faq3Q}</h3>
                <p className="text-gray-600">{t.faq3A}</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">{t.faq4Q}</h3>
                <p className="text-gray-600">{t.faq4A}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-blue-700">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">{t.ctaTitle}</h2>
            <p className="text-xl mb-8">{t.ctaDescription}</p>
            <Link 
              href={`https://wa.me/1234567890?text=${locale === 'en' ? 'Hello, I would like to get a personalized academic credential plan.' : '您好，我想获取个性化的学历认证方案。'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
            >
              <span className="mr-2">📱</span>
              {t.whatsappButton}
            </Link>
          </div>
        </section>
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
  );
} 