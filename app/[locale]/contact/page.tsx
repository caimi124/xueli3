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
    whatsappConsult: "📱 WhatsApp咨询"
  },
  en: {
    home: "Home",
    schools: "Schools Database",
    guide: "Fast Credential Service", 
    blog: "Blog",
    contact: "Contact Us",
    whatsappConsult: "📱 WhatsApp Consult"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">全球学历认证，一对一顾问服务</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">24小时在线，支持全球客户，经验丰富、交付可靠。</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://wa.me/8612345678901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">📱</span>
                  WhatsApp 立即咨询
                </Link>
                <Link
                  href="tel:+8612345678901"
                  className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">📞</span>
                  电话咨询
                </Link>
              </div>
            </div>
          </section>

          {/* School Resources Section */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">我们合作的真实院校资源</h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  我们提供的学历及认证文件均来自真实可查院校，部分如下展示。
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">🌍 欧美名校</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🏛️</div>
                    <p className="text-sm text-gray-600 font-medium">哈佛大学</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🌲</div>
                    <p className="text-sm text-gray-600 font-medium">斯坦福大学</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🔬</div>
                    <p className="text-sm text-gray-600 font-medium">麻省理工学院</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">📚</div>
                    <p className="text-sm text-gray-600 font-medium">牛津大学</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">⚖️</div>
                    <p className="text-sm text-gray-600 font-medium">剑桥大学</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🔧</div>
                    <p className="text-sm text-gray-600 font-medium">帝国理工学院</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🍁</div>
                    <p className="text-sm text-gray-600 font-medium">多伦多大学</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🦘</div>
                    <p className="text-sm text-gray-600 font-medium">墨尔本大学</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🎓</div>
                    <p className="text-sm text-gray-600 font-medium">波士顿大学</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">🏯 亚洲名校</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🦁</div>
                    <p className="text-sm text-gray-600 font-medium">新加坡国立大学</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🔬</div>
                    <p className="text-sm text-gray-600 font-medium">南洋理工大学</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🗾</div>
                    <p className="text-sm text-gray-600 font-medium">东京大学</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">🏙️</div>
                    <p className="text-sm text-gray-600 font-medium">香港大学</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">📚</div>
                    <p className="text-sm text-gray-600 font-medium">香港中文大学</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">⚗️</div>
                    <p className="text-sm text-gray-600 font-medium">香港科技大学</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">我们交付过的真实数据</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center border border-gray-100">
                  <div className="text-4xl mb-4">👥</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">3,200+</div>
                  <h3 className="text-sm font-semibold text-gray-700">已服务客户</h3>
                </div>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center border border-gray-100">
                  <div className="text-4xl mb-4">🌎</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <h3 className="text-sm font-semibold text-gray-700">覆盖国家</h3>
                </div>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center border border-gray-100">
                  <div className="text-4xl mb-4">🎓</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">120+</div>
                  <h3 className="text-sm font-semibold text-gray-700">可提供学历院校</h3>
                </div>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center border border-gray-100">
                  <div className="text-4xl mb-4">⭐</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">98.7%</div>
                  <h3 className="text-sm font-semibold text-gray-700">客户满意率</h3>
                </div>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center border border-gray-100">
                  <div className="text-4xl mb-4">⏰</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">7~15天</div>
                  <h3 className="text-sm font-semibold text-gray-700">平均交付时效</h3>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Types Section */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">我们服务的客户是谁？</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">客户类型</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">主要需求</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🧑‍💼</span>
                          <span className="font-medium text-gray-900">职场人士</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">升职</span>
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">入职</span>
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">移民</span>
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">公证</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🧑‍🎓</span>
                          <span className="font-medium text-gray-900">留学认证人群</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">补件</span>
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
                          <span className="font-medium text-gray-900">海外身份申请人</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">签证</span>
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">工签</span>
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">落户</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🏫</span>
                          <span className="font-medium text-gray-900">教育机构/中介合作方</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">提供学历背书或认证支持</span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">我们是谁｜专业的学历认证服务团队</h2>
                <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  我们的团队由认证顾问、档案审核师、国际认证专家组成，具备多年经验，服务遍及北美、东南亚、港澳等国家和地区，
                  深谙各国认证体系，保障您快速、安全、高质量获取真实可查学历文件。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">👨‍💼</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">李顾问</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">高级学历顾问</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">专注美加市场，擅长WES、ECE等国际认证，全流程跟进，客户满意度98%。</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">👩‍💼</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">Sarah</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">客户服务经理</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">负责东南亚客户支持，精通多国语言，保障7x24小时响应与售后。</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">👨‍🔬</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">Mark</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">档案审核专员</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">严格审核每一份文件内容与格式，确保交付资料真实完整。</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">👩‍🎓</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">Amanda</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">认证流程专家</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">熟悉各类认证路径（教育部、海牙、WES等），擅长定制高效认证方案。</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full text-sm font-medium">
                  <span>📌</span>
                  我们承诺：每位顾问均通过严格认证培训，保障服务质量与信息保密。
                </div>
              </div>
            </div>
          </section>

          {/* Advantages Section */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">为什么选择 Acaboost？</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">优势项</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">对客户的价值</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">🔒 真实学历</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">全程真实院校出具，支持认证查询</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">🕐 快速出证</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">最快5天，常规7~15天内完成</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">📦 全套服务</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">提供学历+成绩单+认证文件全流程</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">🔍 多国认证</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">支持海牙、WES、ECE、ICAS等国际认证</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">👨‍💼 顾问1对1</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">定制方案，快速匹配最合适的院校与流程</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-900">📈 高满意度</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">已服务3000+客户，满意度高达98.5%</span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-3">常见问题</h2>
                <p className="text-gray-600">以下是客户最常询问的问题</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900">如何开始咨询？</h3>
                    <svg className="w-5 h-5 text-gray-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900">咨询收费吗？</h3>
                    <svg className="w-5 h-5 text-gray-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900">多久能收到回复？</h3>
                    <svg className="w-5 h-5 text-gray-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900">信息会保密吗？</h3>
                    <svg className="w-5 h-5 text-gray-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900">认证材料是否真实？</h3>
                    <svg className="w-5 h-5 text-gray-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900">支持哪些认证类型？</h3>
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
              <h2 className="text-3xl font-bold text-white mb-3">🎓 想快速获取可查学历证书？</h2>
              <p className="text-xl text-blue-100 mb-8">👨‍💼 让专业团队为你定制认证方案，立即联系顾问</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://wa.me/8612345678901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  WhatsApp 在线咨询
                </Link>
                <Link
                  href="/guide"
                  className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  获取认证方案
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
              <h3 className="text-lg font-semibold mb-4">关于我们</h3>
              <p className="text-gray-400">专业提供全球学历认证服务，7天快速交付，确保100%真实可查。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors" href="/">首页</Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors" href="/schools">学校资源</Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors" href="/contact">联系我们</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系方式</h3>
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
        href="https://wa.me/8612345678901?text=您好，我想咨询学历认证服务"
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