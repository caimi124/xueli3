'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// 翻译内容
const translations = {
  zh: {
    title: "联系我们",
    subtitle: "专业顾问24/7在线，随时为您解答学历认证问题",
    description: "选择最适合您的联系方式，我们会在最短时间内回复您的咨询",
    
    // 联系方式
    contactTitle: "联系方式",
    whatsappTitle: "WhatsApp 即时咨询",
    whatsappDesc: "添加我们的专业顾问，获得1对1服务",
    whatsappTime: "24/7 在线服务",
    
    emailTitle: "邮箱咨询",
    emailDesc: "发送详细咨询内容到我们的邮箱",
    emailTime: "12小时内回复",
    
    onlineTitle: "在线客服",
    onlineDesc: "通过网站在线客服系统与我们沟通", 
    onlineTime: "工作日 9:00-18:00",
    
    // 快速咨询表单
    formTitle: "快速咨询",
    formSubtitle: "填写表单，我们会主动联系您",
    nameLabel: "姓名",
    namePlaceholder: "请输入您的姓名",
    emailLabel: "邮箱",
    emailPlaceholder: "请输入您的邮箱地址",
    phoneLabel: "电话",
    phonePlaceholder: "请输入您的联系电话",
    serviceLabel: "咨询服务",
    serviceOptions: [
      "选择咨询服务类型",
      "学历认证咨询",
      "院校选择建议", 
      "价格方案了解",
      "认证流程咨询",
      "其他问题"
    ],
    messageLabel: "详细需求",
    messagePlaceholder: "请详细描述您的学历认证需求...",
    submitButton: "提交咨询",
    
    // 服务信息
    serviceTitle: "服务信息",
    serviceTime: "服务时间",
    serviceTimeDesc: "24/7 WhatsApp在线服务\n工作日 9:00-18:00 全方位支持",
    responseTime: "响应时间", 
    responseTimeDesc: "WhatsApp: 5分钟内响应\n邮箱: 12小时内回复",
    languages: "服务语言",
    languagesDesc: "中文、English 双语服务",
    
    // FAQ
    faqTitle: "常见问题",
    faq1Q: "如何选择适合的认证方案？",
    faq1A: "我们的专业顾问会根据您的具体需求（用途、时间、预算）为您推荐最适合的方案。",
    faq2Q: "认证费用如何计算？",
    faq2A: "费用根据选择的院校、服务套餐和加急程度而定，详细报价请咨询顾问。",
    faq3Q: "可以加急办理吗？",
    faq3A: "可以，我们提供3-7天的加急服务，具体时间和费用请咨询顾问。",
    
    // 导航
    home: "首页",
    schools: "院校数据库",
    guide: "快速领证服务", 
    blog: "博客",
    contact: "联系我们",
    whatsappButton: "WhatsApp咨询"
  },
  en: {
    title: "Contact Us",
    subtitle: "Professional advisors available 24/7 to answer your academic credential questions",
    description: "Choose the most convenient contact method for you, we'll respond to your inquiry as soon as possible",
    
    // 联系方式
    contactTitle: "Contact Methods",
    whatsappTitle: "WhatsApp Instant Consultation",
    whatsappDesc: "Add our professional advisor for 1-on-1 service",
    whatsappTime: "24/7 Online Service",
    
    emailTitle: "Email Consultation",
    emailDesc: "Send detailed inquiry to our email",
    emailTime: "Reply within 12 hours",
    
    onlineTitle: "Online Customer Service",
    onlineDesc: "Communicate with us through website live chat",
    onlineTime: "Weekdays 9:00-18:00",
    
    // 快速咨询表单
    formTitle: "Quick Consultation",
    formSubtitle: "Fill out the form and we'll contact you proactively",
    nameLabel: "Name",
    namePlaceholder: "Please enter your name",
    emailLabel: "Email",
    emailPlaceholder: "Please enter your email address",
    phoneLabel: "Phone",
    phonePlaceholder: "Please enter your contact number",
    serviceLabel: "Service Type",
    serviceOptions: [
      "Select consultation service type",
      "Academic Credential Consultation",
      "University Selection Advice",
      "Pricing Information",
      "Certification Process Inquiry",
      "Other Questions"
    ],
    messageLabel: "Detailed Requirements",
    messagePlaceholder: "Please describe your academic credential needs in detail...",
    submitButton: "Submit Inquiry",
    
    // 服务信息
    serviceTitle: "Service Information",
    serviceTime: "Service Hours",
    serviceTimeDesc: "24/7 WhatsApp online service\nWeekdays 9:00-18:00 comprehensive support",
    responseTime: "Response Time",
    responseTimeDesc: "WhatsApp: Within 5 minutes\nEmail: Reply within 12 hours",
    languages: "Service Languages",
    languagesDesc: "Chinese, English bilingual service",
    
    // FAQ
    faqTitle: "Frequently Asked Questions",
    faq1Q: "How to choose the right certification plan?",
    faq1A: "Our professional advisors will recommend the most suitable plan based on your specific needs (purpose, timeline, budget).",
    faq2Q: "How is the certification fee calculated?",
    faq2A: "Fees depend on the selected university, service package, and urgency level. Please consult our advisor for detailed quotes.",
    faq3Q: "Can I get express processing?",
    faq3A: "Yes, we offer 3-7 day express service. Please consult our advisor for specific timeline and fees.",
    
    // 导航
    home: "Home",
    schools: "Schools Database",
    guide: "Fast Credential Service",
    blog: "Blog", 
    contact: "Contact Us",
    whatsappButton: "WhatsApp Consult"
  }
};

export default function LocalizedContact() {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh';
  const t = translations[locale as keyof typeof translations] || translations.zh;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 构建WhatsApp消息
    const message = `${locale === 'en' ? 'New consultation request:' : '新的咨询请求：'}\n${locale === 'en' ? 'Name' : '姓名'}: ${formData.name}\n${locale === 'en' ? 'Email' : '邮箱'}: ${formData.email}\n${locale === 'en' ? 'Phone' : '电话'}: ${formData.phone}\n${locale === 'en' ? 'Service' : '服务类型'}: ${formData.service}\n${locale === 'en' ? 'Message' : '详细需求'}: ${formData.message}`;
    
    // 打开WhatsApp
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/guide`}>
                {t.guide}
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/blog`}>
                {t.blog}
              </Link>
              <Link className="text-sm font-medium transition-colors text-blue-600" href={`/${locale}/contact`}>
                {t.contact}
              </Link>
            </div>
            
            {/* Language Switcher */}
            <div className="hidden md:flex items-center space-x-2 mr-4">
              <Link 
                href="/zh/contact" 
                className={`px-3 py-1 rounded text-sm ${locale === 'zh' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
              >
                中文
              </Link>
              <Link 
                href="/en/contact" 
                className={`px-3 py-1 rounded text-sm ${locale === 'en' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
              >
                EN
              </Link>
            </div>
            
            <Link 
              href={`https://wa.me/1234567890?text=${locale === 'en' ? 'Hello, I would like to inquire about academic credential services.' : '您好，我想咨询学历认证服务。'}`}
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
              📞 {t.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4">{t.subtitle}</p>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">{t.description}</p>
          </div>
        </section>

        {/* 联系方式 */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.contactTitle}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* WhatsApp */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{t.whatsappTitle}</h3>
                <p className="text-gray-600 mb-4">{t.whatsappDesc}</p>
                <p className="text-sm text-green-600 font-semibold mb-6">{t.whatsappTime}</p>
                <Link 
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-block"
                >
                  +1 (234) 567-890
                </Link>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{t.emailTitle}</h3>
                <p className="text-gray-600 mb-4">{t.emailDesc}</p>
                <p className="text-sm text-blue-600 font-semibold mb-6">{t.emailTime}</p>
                <Link 
                  href="mailto:contact@acaboost.com"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  contact@acaboost.com
                </Link>
              </div>

              {/* 在线客服 */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{t.onlineTitle}</h3>
                <p className="text-gray-600 mb-4">{t.onlineDesc}</p>
                <p className="text-sm text-purple-600 font-semibold mb-6">{t.onlineTime}</p>
                <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  {locale === 'en' ? 'Start Chat' : '开始聊天'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 快速咨询表单 */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.formTitle}</h2>
              <p className="text-gray-600">{t.formSubtitle}</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.nameLabel}</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.namePlaceholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.emailLabel}</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.emailPlaceholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.phoneLabel}</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t.phonePlaceholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.serviceLabel}</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                      required
                    >
                      {t.serviceOptions.map((option, index) => (
                        <option key={index} value={index === 0 ? '' : option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.messageLabel}</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.messagePlaceholder}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all resize-none"
                    required
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                  >
                    📤 {t.submitButton}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* 服务信息 */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.serviceTitle}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🕒</div>
                <h3 className="font-bold text-lg mb-3">{t.serviceTime}</h3>
                <p className="text-gray-600 whitespace-pre-line">{t.serviceTimeDesc}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-bold text-lg mb-3">{t.responseTime}</h3>
                <p className="text-gray-600 whitespace-pre-line">{t.responseTimeDesc}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-bold text-lg mb-3">{t.languages}</h3>
                <p className="text-gray-600">{t.languagesDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{t.faqTitle}</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">{t.faq1Q}</h3>
                <p className="text-gray-600">{t.faq1A}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">{t.faq2Q}</h3>
                <p className="text-gray-600">{t.faq2A}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">{t.faq3Q}</h3>
                <p className="text-gray-600">{t.faq3A}</p>
              </div>
            </div>
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