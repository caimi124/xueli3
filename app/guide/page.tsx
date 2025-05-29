'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Guide() {
  const processSteps = [
    {
      step: '01',
      title: '需求咨询',
      description: '了解您的具体需求和时间要求',
      icon: '💬'
    },
    {
      step: '02',
      title: '学校选择',
      description: '从我们的资源库中选择适合的学校',
      icon: '🎓'
    },
    {
      step: '03',
      title: '文件准备',
      description: '准备和定制您需要的认证文件',
      icon: '📄'
    },
    {
      step: '04',
      title: '质量检查',
      description: '多重验证确保文件真实可查',
      icon: '✅'
    },
    {
      step: '05',
      title: '完成交付',
      description: '7天内安全交付您的学历认证',
      icon: '🚀'
    }
  ];

  const certificateTypes = [
    {
      title: '毕业证书（中/英文）',
      description: '作为学历核心文件，用于证明您的学历背景',
      icon: '🎓',
      features: ['官方认证', '中英双语', '真实可查']
    },
    {
      title: '成绩单（中/英文）',
      description: '申请移民/升学材料，展示您的学习成果',
      icon: '📊',
      features: ['完整成绩', '中英双语', '官方盖章']
    },
    {
      title: '学位证书',
      description: '研究生及博士学历证明，提升您的专业背景',
      icon: '🏆',
      features: ['学位认证', '权威证明', '全球通用']
    },
    {
      title: '教育认证报告',
      description: '确保真实可查，用于机构审核和验证',
      icon: '📋',
      features: ['官方报告', '权威认证', '可验证性']
    }
  ];

  const trustIndicators = [
    {
      title: '100%真实可查',
      description: '所有学历均由真实学校颁发，具备认证报告',
      icon: '🔒'
    },
    {
      title: '7天快速交付',
      description: '最快7个工作日完成，满足您的紧急需求',
      icon: '⚡'
    },
    {
      title: '全球认证通用',
      description: '支持移民、留学、工作等多种用途',
      icon: '🌍'
    },
    {
      title: '专业团队服务',
      description: '资深顾问一对一指导，确保服务质量',
      icon: '👥'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link className="flex items-center" href="/">
              <span className="text-xl font-bold text-blue-600">Acaboost</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/">
                首页
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/schools">
                院校数据库
              </Link>
              <Link className="text-sm font-medium transition-colors text-blue-600" href="/guide">
                领证指南
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/blog">
                博客
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/contact">
                联系我们
              </Link>
              <Link 
                href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
              >
                WhatsApp咨询
              </Link>
            </div>
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
        <main className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">学历认证领证指南</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">5步快速认证流程，7天内获取真实可查学历证书</p>
              <Link 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">📱</span>
                立即咨询认证方案
              </Link>
            </div>
          </section>

          {/* Process Steps */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">认证流程展示</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">简单高效的认证流程，让您轻松获得所需文件</p>
              </div>
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
                <div className="space-y-12">
                  {processSteps.map((step, index) => (
                    <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center`}>
                      <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                            <span>{step.icon}</span>
                            {step.step} {step.title}
                          </h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                      <div className="my-4 md:my-0 md:w-2/12 flex justify-center">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10">
                          {step.step}
                        </div>
                      </div>
                      <div className="md:w-5/12"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Certificate Types */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">学历文件类型说明</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">我们提供多种类型的学历认证文件，满足您不同场景的需求</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {certificateTypes.map((type, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="p-6">
                      <div className="text-4xl mb-4">{type.icon}</div>
                      <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      <div className="space-y-2">
                        {type.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Trust Indicators */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">为什么选择我们</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">专业、可靠、高效的学历认证服务，值得您的信赖</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 text-center border border-gray-100">
                    <div className="text-4xl mb-4">{indicator.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{indicator.title}</h3>
                    <p className="text-gray-600">{indicator.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">常见问题 FAQ</h2>
                <p className="text-gray-600">解答您最关心的问题</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">学历可靠吗？</h3>
                  <p className="text-gray-600">所有学历均由真实学校颁发，具备认证报告，确保真实可查。</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">我能查到吗？</h3>
                  <p className="text-gray-600">可通过认证平台或原校查询学历真实性，我们提供完整的验证支持。</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">是否违法？</h3>
                  <p className="text-gray-600">不涉及伪造，我们提供正规流程认证支持，确保合法合规。</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">多久能拿到？</h3>
                  <p className="text-gray-600">最快7个工作日，具体取决于学历类型和认证要求。</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-6 bg-blue-700 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">准备好开始您的学历认证之旅了吗？</h2>
              <p className="text-xl text-blue-100 mb-8">专业顾问为您提供1对1认证方案，立即咨询获取详细流程</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">📱</span>
                  WhatsApp 一键咨询
                </Link>
                <Link href="/contact">
                  <span className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-full transition-colors">
                    查看联系方式
                  </span>
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
                <li><Link className="text-gray-400 hover:text-white transition-colors" href="/">首页</Link></li>
                <li><Link className="text-gray-400 hover:text-white transition-colors" href="/schools">学校资源</Link></li>
                <li><Link className="text-gray-400 hover:text-white transition-colors" href="/contact">联系我们</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系方式</h3>
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

      {/* Floating WhatsApp Button */}
      <Link 
        href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务" 
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