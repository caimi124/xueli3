'use client';

import React from 'react';
import Link from 'next/link';

export default function Contact() {
  const partnerInstitutions = [
    { name: '哈佛大学', logo: '🏛️' },
    { name: '斯坦福大学', logo: '🌲' },
    { name: '麻省理工学院', logo: '🔬' },
    { name: '牛津大学', logo: '📚' },
    { name: '剑桥大学', logo: '⚖️' },
    { name: '帝国理工学院', logo: '🔧' },
    { name: '新加坡国立大学', logo: '🦁' },
    { name: '墨尔本大学', logo: '🦘' },
    { name: '多伦多大学', logo: '🍁' },
    { name: '东京大学', logo: '🗾' },
    { name: '香港大学', logo: '🏙️' },
    { name: '波士顿大学', logo: '🎓' }
  ];

  const serviceData = [
    {
      number: '3,000+',
      label: '累计服务客户',
      icon: '👥'
    },
    {
      number: '20+',
      label: '覆盖国家',
      icon: '🌎'
    },
    {
      number: '100+',
      label: '可提供真实院校学历',
      icon: '🎓'
    }
  ];

  const customerTypes = [
    {
      title: '职场人士',
      icon: '🧑‍💼',
      description: '用于升职加薪、职位入职、移民背景资料',
      scenarios: ['升职加薪', '职位入职', '移民背景资料']
    },
    {
      title: '留学补件/认证需求者',
      icon: '🧑‍🎓',
      description: '提交 WES、ICAS、NACES 等学历认证机构',
      scenarios: ['WES认证', 'ICAS认证', 'NACES认证']
    },
    {
      title: '海外生活/身份申请人群',
      icon: '🌍',
      description: '用于申请签证、落户、工签、公证',
      scenarios: ['申请签证', '落户申请', '工签申请', '公证服务']
    }
  ];

  const competitiveAdvantages = [
    {
      title: '7–15 天快速出证，部分项目最快 5 天',
      icon: '📦'
    },
    {
      title: '100+ 所真实院校资源',
      icon: '🔍'
    },
    {
      title: '完整认证服务支持：海牙认证、教育局认证、WES认证、ICAS/NACES 等',
      icon: '🧾'
    },
    {
      title: '全流程加密交付，资料保密',
      icon: '🔐'
    },
    {
      title: '签署协议，服务受法律保障',
      icon: '💼'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left: Logo */}
            <Link className="flex items-center" href="/">
              <span className="text-xl font-bold text-blue-600">Acaboost</span>
            </Link>
            
            {/* Center: Menu */}
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
            </div>
            
            {/* Right: CTA Button */}
            <Link 
              href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务，希望了解适合我的学历方案" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:flex bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
            >
              WhatsApp咨询
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

          {/* Partner Institutions */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">🏛 合作院校/教育机构</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">已合作或提供文件的真实院校展示</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {partnerInstitutions.map((institution, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-6 text-center">
                    <div className="text-4xl mb-3">{institution.logo}</div>
                    <p className="text-sm text-gray-600 font-medium">{institution.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service Data */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">📊 服务数据</h2>
                <p className="text-gray-600 mb-6">真实院校合作，服务全球客户</p>
                <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  我们已为超过 3,000 位客户成功提供学历文件及认证服务，合作院校涵盖欧美、东南亚、港澳地区等真实院校资源。
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {serviceData.map((data, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 text-center border border-gray-100">
                    <div className="text-4xl mb-4">{data.icon}</div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{data.number}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{data.label}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Customer Types & Use Cases */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">🔹 服务客户类型 & 典型使用场景</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">我们为不同需求的客户提供专业的学历认证服务</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {customerTypes.map((type, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 p-8 text-center">
                    <div className="text-5xl mb-4">{type.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    <div className="space-y-2">
                      {type.scenarios.map((scenario, scenarioIndex) => (
                        <div key={scenarioIndex} className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                          {scenario}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Competitive Advantages */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">我们的优势</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">差异化信任强化，专业服务保障</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {competitiveAdvantages.map((advantage, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl flex-shrink-0">{advantage.icon}</div>
                      <p className="text-gray-700 font-medium leading-relaxed">{advantage.title}</p>
                    </div>
                  </div>
                ))}
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