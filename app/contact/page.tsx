'use client';

import React from 'react';
import Link from 'next/link';

export default function Contact() {
  const contactMethods = [
    {
      icon: '📱',
      title: 'WhatsApp',
      subtitle: '快速响应，24小时在线',
      content: '+86 123 4567 8901',
      link: 'https://wa.me/8612345678901',
      buttonText: '立即咨询',
      color: 'green'
    },
    {
      icon: '📞',
      title: '电话咨询',
      subtitle: '专业顾问一对一服务',
      content: '+86 123 4567 8901',
      link: 'tel:+8612345678901',
      buttonText: '拨打电话',
      color: 'blue'
    },
    {
      icon: '✉️',
      title: '邮件联系',
      subtitle: '详细需求可发送邮件',
      content: 'contact@acaboost.com',
      link: 'mailto:contact@acaboost.com',
      buttonText: '发送邮件',
      color: 'purple'
    }
  ];

  const serviceStats = [
    {
      number: '1000+',
      label: '服务客户',
      description: '成功为超过1000名客户提供学历认证服务',
      icon: '👥'
    },
    {
      number: '50+',
      label: '合作院校',
      description: '与全球50多所知名院校建立合作关系',
      icon: '🎓'
    },
    {
      number: '7天',
      label: '快速交付',
      description: '平均7个工作日完成认证文件制作',
      icon: '⚡'
    },
    {
      number: '100%',
      label: '真实可查',
      description: '所有学历均支持官方渠道验证查询',
      icon: '🔒'
    }
  ];

  const serviceFeatures = [
    {
      title: '24/7 客服支持',
      description: '全天候在线客服，随时解答您的疑问',
      icon: '🌟'
    },
    {
      title: '专业顾问团队',
      description: '资深教育顾问，为您量身定制认证方案',
      icon: '👨‍💼'
    },
    {
      title: '安全保密',
      description: '严格保护客户隐私，信息安全有保障',
      icon: '🛡️'
    },
    {
      title: '售后无忧',
      description: '提供完善的售后服务和技术支持',
      icon: '✅'
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
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/guide">
                领证指南
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/blog">
                博客
              </Link>
              <Link className="text-sm font-medium transition-colors text-blue-600" href="/contact">
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">专业学历认证服务，24小时为您提供咨询支持</p>
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

          {/* Contact Methods */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">多种联系方式</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">选择最适合您的联系方式，我们的专业团队随时为您服务</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactMethods.map((method, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 p-8 text-center">
                    <div className="text-4xl mb-4">{method.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.subtitle}</p>
                    <p className="text-lg font-semibold text-gray-900 mb-6">{method.content}</p>
                    <Link 
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`inline-block px-6 py-3 rounded-full font-medium transition-colors ${
                        method.color === 'green' 
                          ? 'bg-green-500 text-white hover:bg-green-600' 
                          : method.color === 'blue'
                          ? 'bg-blue-500 text-white hover:bg-blue-600'
                          : 'bg-purple-500 text-white hover:bg-purple-600'
                      }`}
                    >
                      {method.buttonText}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service Statistics */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">服务数据</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">用数据说话，展现我们的专业实力和服务质量</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {serviceStats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 text-center border border-gray-100">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                    <p className="text-gray-600 text-sm">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service Features */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">服务特色</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">专业、贴心、可靠的服务，让您的认证之路更加顺畅</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 text-center border border-gray-100">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Office Information */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">办公信息</h2>
                <p className="text-gray-600">了解更多关于我们的信息</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span>🏢</span>
                      公司信息
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <p><strong>公司名称：</strong>Acaboost 学历认证服务</p>
                      <p><strong>服务领域：</strong>全球学历认证、文件制作</p>
                      <p><strong>成立时间：</strong>2018年</p>
                      <p><strong>服务国家：</strong>新加坡、马来西亚、英国、澳洲等</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span>⏰</span>
                      服务时间
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <p><strong>WhatsApp：</strong>24小时在线</p>
                      <p><strong>电话咨询：</strong>周一至周日 9:00-21:00</p>
                      <p><strong>邮件回复：</strong>24小时内回复</p>
                      <p><strong>紧急联系：</strong>WhatsApp优先响应</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">常见问题</h2>
                <p className="text-gray-600">以下是客户最常询问的问题</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3">如何开始咨询？</h3>
                  <p className="text-gray-600">直接点击WhatsApp按钮或拨打电话，我们的顾问会立即为您服务。</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3">咨询收费吗？</h3>
                  <p className="text-gray-600">初次咨询完全免费，我们会根据您的需求提供详细的方案和报价。</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3">多久能收到回复？</h3>
                  <p className="text-gray-600">WhatsApp通常5分钟内回复，电话即时接听，邮件24小时内回复。</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3">信息会保密吗？</h3>
                  <p className="text-gray-600">我们严格保护客户隐私，所有信息都会得到妥善保管和处理。</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-6 bg-blue-700 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">准备开始您的学历认证咨询了吗？</h2>
              <p className="text-xl text-blue-100 mb-8">专业团队已准备就绪，立即联系获取个性化认证方案</p>
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
                  电话直接咨询
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
                  <Link href="https://wa.me/8612345678901" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    WhatsApp: +86 123 4567 8901
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