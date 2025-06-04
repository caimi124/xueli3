'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// 翻译内容
const translations = {
  zh: {
    nav: {
    home: "首页",
    schools: "院校数据库",
    guide: "快速领证服务", 
    blog: "博客",
    contact: "联系我们",
      whatsappConsult: "WhatsApp咨询"
    },
    hero: {
      title: "全球学历认证，一对一顾问服务",
      subtitle: "24小时在线，支持全球客户，经验丰富、交付可靠。",
      whatsappBtn: "📱 WhatsApp 立即咨询",
      phoneBtn: "📞 电话咨询"
    },
    schoolResources: {
      title: "我们合作的真实院校资源",
      desc: "我们提供的学历及认证文件均来自真实可查院校，部分如下展示。",
      europeanTitle: "🌍 欧美名校",
      asianTitle: "🏯 亚洲名校"
    },
    stats: {
      title: "我们交付过的真实数据",
    clientsServed: "已服务客户",
    countriesCovered: "覆盖国家", 
    schoolsAvailable: "可提供学历院校",
    satisfactionRate: "客户满意率",
      deliveryTime: "平均交付时效"
    },
    customers: {
      title: "我们服务的客户是谁？",
    customerType: "客户类型",
      mainRequirements: "主要需求"
    },
    team: {
      title: "我们是谁｜专业的学历认证服务团队",
      desc: "我们的团队由认证顾问、档案审核师、国际认证专家组成，具备多年经验，服务遍及北美、东南亚、港澳等国家和地区，深谙各国认证体系，保障您快速、安全、高质量获取真实可查学历文件。"
    },
    advantages: {
      title: "为什么选择 Acaboost？",
      advantageItem: "优势项",
      customerValue: "对客户的价值"
    },
    faq: {
      title: "常见问题",
      subtitle: "以下是客户最常询问的问题"
    },
    cta: {
      title: "🎓 想快速获取可查学历证书？",
      subtitle: "👨‍💼 让专业团队为你定制认证方案，立即联系顾问",
      whatsappBtn: "WhatsApp 在线咨询",
      planBtn: "获取认证方案"
    },
    footer: {
      about: "关于我们",
      aboutDesc: "专业提供全球学历认证服务，7天快速交付，确保100%真实可查。",
      quickLinks: "快速链接",
      contact: "联系方式"
    }
  },
  en: {
    nav: {
    home: "Home",
    schools: "Schools Database",
    guide: "Fast Credential Service",
    blog: "Blog", 
    contact: "Contact Us",
      whatsappConsult: "WhatsApp Consult"
    },
    hero: {
      title: "Global Academic Credentials, One-on-One Consultant Service",
      subtitle: "24/7 online support for global clients, experienced and reliable delivery.",
      whatsappBtn: "📱 WhatsApp Contact Now",
      phoneBtn: "📞 Phone Consultation"
    },
    schoolResources: {
      title: "Our Partnered Authentic University Resources",
      desc: "All academic credentials and certification documents we provide come from authentic, verifiable universities, some examples shown below.",
      europeanTitle: "🌍 European & American Universities",
      asianTitle: "🏯 Asian Universities"
    },
    stats: {
      title: "Our Delivered Real Data",
      clientsServed: "Clients Served",
      countriesCovered: "Countries Covered",
      schoolsAvailable: "Available Schools",
      satisfactionRate: "Satisfaction Rate", 
      deliveryTime: "Average Delivery Time"
    },
    customers: {
      title: "Who Are Our Clients?",
      customerType: "Customer Type",
      mainRequirements: "Main Requirements"
    },
    team: {
      title: "Who We Are | Professional Academic Credential Service Team",
      desc: "Our team consists of certification consultants, document reviewers, and international certification experts with years of experience, serving clients across North America, Southeast Asia, Hong Kong, Macao and other regions. We are well-versed in various national certification systems to ensure you receive authentic, verifiable academic documents quickly, safely, and with high quality."
    },
    advantages: {
      title: "Why Choose Acaboost?",
      advantageItem: "Advantage",
      customerValue: "Customer Value"
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Below are the most commonly asked questions by clients"
    },
    cta: {
      title: "🎓 Want to Get Verifiable Academic Credentials Fast?",
      subtitle: "👨‍💼 Let our professional team customize a certification plan for you, contact consultant now",
      whatsappBtn: "WhatsApp Online Consultation",
      planBtn: "Get Certification Plan"
    },
    footer: {
      about: "About Us",
      aboutDesc: "Professional global academic credential services, 7-day fast delivery, 100% authentic and verifiable.",
      quickLinks: "Quick Links", 
      contact: "Contact Information"
    }
  }
};

export default function Contact() {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh';
  const t = translations[locale as keyof typeof translations] || translations.zh;
  
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqData = locale === 'zh' ? [
    {
      question: "如何开始咨询？",
      answer: "您可以通过WhatsApp直接联系我们，我们的顾问会在1小时内回复，为您提供免费的初步咨询和认证方案建议。"
    },
    {
      question: "咨询收费吗？",
      answer: "我们提供免费的初步咨询服务。只有在您决定进行学历认证并确认方案后，才需要支付相应费用。"
    },
    {
      question: "多久能收到回复？",
      answer: "我们承诺在1小时内回复WhatsApp咨询，工作时间内通常在15分钟内就能收到专业顾问的回复。"
    },
    {
      question: "信息会保密吗？",
      answer: "我们严格遵守隐私保护政策，您的个人信息和认证需求绝对保密，不会向任何第三方透露。"
    },
    {
      question: "认证材料是否真实？",
      answer: "是的，我们提供的所有学历证书和认证文件均来自真实可查的正规院校，支持官方验证。"
    },
    {
      question: "支持哪些认证类型？",
      answer: "我们支持WES、ECE、ICAS、NACES、海牙认证、教育部认证等多种国际认证服务。"
    }
  ] : [
    {
      question: "How to start consultation?",
      answer: "You can contact us directly via WhatsApp, and our consultant will reply within 1 hour to provide free initial consultation and certification plan recommendations."
    },
    {
      question: "Is consultation free?",
      answer: "We provide free initial consultation services. Payment is only required after you decide to proceed with academic credential certification and confirm the plan."
    },
    {
      question: "How long to receive a reply?",
      answer: "We promise to reply to WhatsApp inquiries within 1 hour, and usually within 15 minutes during business hours from our professional consultants."
    },
    {
      question: "Will information be kept confidential?",
      answer: "We strictly follow privacy protection policies. Your personal information and certification needs are absolutely confidential and will not be disclosed to any third parties."
    },
    {
      question: "Are certification materials authentic?",
      answer: "Yes, all academic certificates and certification documents we provide come from authentic, verifiable accredited institutions and support official verification."
    },
    {
      question: "What certification types are supported?",
      answer: "We support various international certification services including WES, ECE, ICAS, NACES, Hague Apostille, Ministry of Education certification, and more."
    }
  ];

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
                {t.nav.home}
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/schools`}>
                {t.nav.schools}
              </Link>
                <Link className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href={`/${locale}/guide`}>
                {t.nav.guide}
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/blog`}>
                {t.nav.blog}
              </Link>
              <Link className="text-sm font-medium transition-colors text-blue-600" href={`/${locale}/contact`}>
                {t.nav.contact}
              </Link>
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
              <a 
                href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务，希望了解适合我的学历方案"
              target="_blank" 
              rel="noopener noreferrer" 
                className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
            >
                {t.nav.whatsappConsult}
              </a>
            </div>
            
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.hero.title}</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">{t.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/8612345678901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">📱</span>{t.hero.whatsappBtn}
                </a>
                <a 
                  href="tel:+8612345678901"
                  className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">📞</span>{t.hero.phoneBtn}
                </a>
              </div>
            </div>
          </section>

          {/* School Resources Section */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.schoolResources.title}</h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.schoolResources.desc}</p>
              </div>

              {/* European & American Schools */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.schoolResources.europeanTitle}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {[
                    { emoji: "🏛️", name: locale === 'zh' ? "哈佛大学" : "Harvard University" },
                    { emoji: "🌲", name: locale === 'zh' ? "斯坦福大学" : "Stanford University" },
                    { emoji: "🔬", name: locale === 'zh' ? "麻省理工学院" : "MIT" },
                    { emoji: "📚", name: locale === 'zh' ? "牛津大学" : "Oxford University" },
                    { emoji: "⚖️", name: locale === 'zh' ? "剑桥大学" : "Cambridge University" },
                    { emoji: "🔧", name: locale === 'zh' ? "帝国理工学院" : "Imperial College" },
                    { emoji: "🍁", name: locale === 'zh' ? "多伦多大学" : "University of Toronto" },
                    { emoji: "🦘", name: locale === 'zh' ? "墨尔本大学" : "University of Melbourne" },
                    { emoji: "🎓", name: locale === 'zh' ? "波士顿大学" : "Boston University" }
                  ].map((school, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                      <div className="text-4xl mb-3">{school.emoji}</div>
                      <p className="text-sm text-gray-600 font-medium">{school.name}</p>
                  </div>
                  ))}
                </div>
              </div>

              {/* Asian Schools */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.schoolResources.asianTitle}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {[
                    { emoji: "🦁", name: locale === 'zh' ? "新加坡国立大学" : "National University of Singapore" },
                    { emoji: "🔬", name: locale === 'zh' ? "南洋理工大学" : "Nanyang Technological University" },
                    { emoji: "🗾", name: locale === 'zh' ? "东京大学" : "University of Tokyo" },
                    { emoji: "🏙️", name: locale === 'zh' ? "香港大学" : "University of Hong Kong" },
                    { emoji: "📚", name: locale === 'zh' ? "香港中文大学" : "Chinese University of Hong Kong" },
                    { emoji: "⚗️", name: locale === 'zh' ? "香港科技大学" : "Hong Kong University of Science and Technology" }
                  ].map((school, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                      <div className="text-4xl mb-3">{school.emoji}</div>
                      <p className="text-sm text-gray-600 font-medium">{school.name}</p>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.stats.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { emoji: "👥", number: "3,200+", label: t.stats.clientsServed },
                  { emoji: "🌎", number: "25+", label: t.stats.countriesCovered },
                  { emoji: "🎓", number: "120+", label: t.stats.schoolsAvailable },
                  { emoji: "⭐", number: "98.7%", label: t.stats.satisfactionRate },
                  { emoji: "⏰", number: "7~15天", label: t.stats.deliveryTime }
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center border border-gray-100">
                    <div className="text-4xl mb-4">{stat.emoji}</div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <h3 className="text-sm font-semibold text-gray-700">{stat.label}</h3>
                </div>
                ))}
            </div>
          </div>
        </section>

          {/* Customer Types Section */}
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.customers.title}</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t.customers.customerType}</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t.customers.mainRequirements}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🧑‍💼</span>
                          <span className="font-medium text-gray-900">{locale === 'zh' ? '职场人士' : 'Working Professionals'}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {(locale === 'zh' ? ['升职', '入职', '移民', '公证'] : ['Promotion', 'Job Entry', 'Immigration', 'Notarization']).map((tag, i) => (
                            <span key={i} className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">{tag}</span>
                          ))}
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🧑‍🎓</span>
                          <span className="font-medium text-gray-900">{locale === 'zh' ? '留学认证人群' : 'Study Abroad Community'}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {(locale === 'zh' ? ['补件', 'WES', 'ICAS', 'NACES'] : ['Document Completion', 'WES', 'ICAS', 'NACES']).map((tag, i) => (
                            <span key={i} className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">{tag}</span>
                          ))}
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
                          {(locale === 'zh' ? ['签证', '工签', '落户'] : ['Visa', 'Work Permit', 'Residency']).map((tag, i) => (
                            <span key={i} className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">{tag}</span>
                          ))}
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
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                            {locale === 'zh' ? '提供学历背书或认证支持' : 'Academic Endorsement & Certification Support'}
                          </span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.team.title}</h2>
                <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">{t.team.desc}</p>
            </div>
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {[
                  {
                    emoji: "👨‍💼",
                    name: locale === 'zh' ? "李顾问" : "Consultant Li",
                    title: locale === 'zh' ? "高级学历顾问" : "Senior Academic Consultant",
                    desc: locale === 'zh' ? "专注美加市场，擅长WES、ECE等国际认证，全流程跟进，客户满意度98%。" : "Focused on North American markets, specialized in WES, ECE and other international certifications, full process tracking, 98% customer satisfaction."
                  },
                  {
                    emoji: "👩‍💼",
                    name: "Sarah",
                    title: locale === 'zh' ? "客户服务经理" : "Customer Service Manager",
                    desc: locale === 'zh' ? "负责东南亚客户支持，精通多国语言，保障7x24小时响应与售后。" : "Responsible for Southeast Asian customer support, multilingual, ensuring 7x24 response and after-sales service."
                  },
                  {
                    emoji: "👨‍🔬",
                    name: "Mark",
                    title: locale === 'zh' ? "档案审核专员" : "Document Review Specialist",
                    desc: locale === 'zh' ? "严格审核每一份文件内容与格式，确保交付资料真实完整。" : "Strictly reviews every document content and format, ensuring delivered materials are authentic and complete."
                  },
                  {
                    emoji: "👩‍🎓",
                    name: "Amanda",
                    title: locale === 'zh' ? "认证流程专家" : "Certification Process Expert",
                    desc: locale === 'zh' ? "熟悉各类认证路径（教育部、海牙、WES等），擅长定制高效认证方案。" : "Familiar with various certification pathways (Ministry of Education, Hague, WES, etc.), specialized in customizing efficient certification plans."
                  }
                ].map((member, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0">{member.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">{member.title}</span>
                      </div>
                        <p className="text-gray-600 leading-relaxed">{member.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
                
                <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full text-sm font-medium">
                  <span>📌</span>
                  {locale === 'zh' ? '我们承诺：每位顾问均通过严格认证培训，保障服务质量与信息保密。' : 'We promise: Every consultant has passed strict certification training to ensure service quality and information confidentiality.'}
                </div>
            </div>
          </div>
        </section>

          {/* Advantages Section */}
          <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.advantages.title}</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t.advantages.advantageItem}</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t.advantages.customerValue}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      {
                        advantage: locale === 'zh' ? "🔒 真实学历" : "🔒 Authentic Credentials",
                        value: locale === 'zh' ? "全程真实院校出具，支持认证查询" : "Issued by authentic institutions, verifiable through official channels"
                      },
                      {
                        advantage: locale === 'zh' ? "🕐 快速出证" : "🕐 Fast Certification",
                        value: locale === 'zh' ? "最快5天，常规7~15天内完成" : "As fast as 5 days, typically completed within 7-15 days"
                      },
                      {
                        advantage: locale === 'zh' ? "📦 全套服务" : "📦 Complete Service",
                        value: locale === 'zh' ? "提供学历+成绩单+认证文件全流程" : "Full process including credentials + transcripts + certification documents"
                      },
                      {
                        advantage: locale === 'zh' ? "🔍 多国认证" : "🔍 Multi-country Certification",
                        value: locale === 'zh' ? "支持海牙、WES、ECE、ICAS等国际认证" : "Support for Hague, WES, ECE, ICAS and other international certifications"
                      },
                      {
                        advantage: locale === 'zh' ? "👨‍💼 顾问1对1" : "👨‍💼 1-on-1 Consultant",
                        value: locale === 'zh' ? "定制方案，快速匹配最合适的院校与流程" : "Customized plans, quickly matching the most suitable institutions and processes"
                      },
                      {
                        advantage: locale === 'zh' ? "📈 高满意度" : "📈 High Satisfaction",
                        value: locale === 'zh' ? "已服务3000+客户，满意度高达98.5%" : "Served 3000+ clients with satisfaction rate up to 98.5%"
                      }
                    ].map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                          <span className="font-medium text-gray-900">{item.advantage}</span>
                      </td>
                      <td className="px-6 py-4">
                          <span className="text-gray-600">{item.value}</span>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          </div>
        </section>

          {/* FAQ Section */}
          <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.faq.title}</h2>
                <p className="text-gray-600">{t.faq.subtitle}</p>
              </div>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <button 
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      <svg 
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
                    )}
                </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-6 bg-blue-700 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-3xl font-bold text-white mb-3">{t.cta.title}</h2>
              <p className="text-xl text-blue-100 mb-8">{t.cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/8612345678901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  {t.cta.whatsappBtn}
                </a>
                <a 
                  href={`/${locale}/guide`}
                  className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  {t.cta.planBtn}
                </a>
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
              <h3 className="text-lg font-semibold mb-4">{t.footer.about}</h3>
              <p className="text-gray-400">{t.footer.aboutDesc}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                <li><Link className="text-gray-400 hover:text-white transition-colors" href={`/${locale}`}>{t.nav.home}</Link></li>
                <li><Link className="text-gray-400 hover:text-white transition-colors" href={`/${locale}/schools`}>{t.nav.schools}</Link></li>
                <li><Link className="text-gray-400 hover:text-white transition-colors" href={`/${locale}/contact`}>{t.nav.contact}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.contact}</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <a 
                    href="https://wa.me/8612345678901"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp: +86 123 4567 8901
                  </a>
                </li>
                <li className="text-gray-400">
                  <a className="hover:text-white transition-colors" href="mailto:contact@acaboost.com">
                    Email: contact@acaboost.com
                  </a>
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
      <a 
        href="https://wa.me/8612345678901?text=您好，我想咨询学历认证服务"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
        </svg>
      </a>
    </div>
  );
} 