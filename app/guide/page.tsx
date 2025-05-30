'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Guide() {
  const [selectedSample, setSelectedSample] = useState<{
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
  } | null>(null);
  
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
    if (zoomLevel <= 1) {
      setImagePosition({ x: 0, y: 0 });
    }
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setSelectedSample(null);
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoomLevel(prev => Math.max(0.5, Math.min(3, prev + delta)));
    
    if (zoomLevel <= 1) {
      setImagePosition({ x: 0, y: 0 });
    }
  };

  const documentCategories = [
    {
      title: '资料认证',
      icon: '⭐',
      items: ['海牙认证', '领事认证', 'WES认证', 'ECE认证', '教育部认证']
    },
    {
      title: '学历身份证明',
      icon: '🎓',
      items: ['毕业证书', '学位证书', '学生证', '入学证明', '在读证明']
    },
    {
      title: '学业成绩单',
      icon: '📊',
      items: ['官方成绩单', '学分证明', '排名证明', '荣誉证书', '奖学金证明']
    },
    {
      title: '课程与学术',
      icon: '📚',
      items: ['课程描述', '学术推荐信', '研究证明', '论文证明', '实验室证明']
    },
    {
      title: '实习与就业',
      icon: '💼',
      items: ['实习证明', '就业推荐信', '职业规划', '校企合作证明', '就业指导证明']
    },
    {
      title: '行为与品德',
      icon: '⚖️',
      items: ['品行证明', '无违纪证明', '推荐信', '社团证明', '志愿服务证明']
    }
  ];

  const documentSamples = [
    {
      id: 1,
      title: '毕业证书样本',
      description: '美国波士顿大学博士学位毕业证书',
      image: '/images/samples/boston-university-diploma.jpeg',
      category: '学历证明'
    },
    {
      id: 2,
      title: '成绩单样本',
      description: '官方成绩单，包含完整课程与绩点',
      image: '/images/samples/transcript-real.jpeg',
      category: '成绩证明'
    },
    {
      id: 3,
      title: '学生卡样本',
      description: '在校期间官方学生身份证明',
      image: '/images/samples/student-id-real.jpeg',
      category: '身份证明'
    },
    {
      id: 4,
      title: '录取通知书样本',
      description: '研究生项目录取通知书',
      image: '/images/samples/admission-letter-real.jpeg',
      category: '录取证明'
    },
    {
      id: 5,
      title: '海牙认证样本',
      description: '国际通用的海牙认证文件',
      image: '/images/samples/apostille-real.jpeg',
      category: '国际认证'
    },
    {
      id: 6,
      title: 'WES认证样本',
      description: 'WES学历认证评估报告',
      image: '/images/samples/wes-certification-real.jpeg',
      category: '教育认证'
    }
  ];

  const customerFeedbacks = [
    {
      id: 1,
      type: 'whatsapp',
      name: '李先生',
      location: '加拿大多伦多',
      message: '收到了！质量很好，WES认证也通过了，谢谢！',
      timestamp: '2024年1月15日',
      avatar: '👨‍💼'
    },
    {
      id: 2,
      type: 'certificate',
      name: '张女士',
      location: '澳大利亚悉尼',
      message: '成绩单和毕业证都很完美，移民局已经接受了。',
      image: '/images/samples/transcript-real.jpeg',
      rating: 5
    },
    {
      id: 3,
      type: 'whatsapp',
      name: '王先生',
      location: '美国洛杉矶',
      message: '7天就收到了，比预期快很多，非常专业！',
      timestamp: '2024年1月20日',
      avatar: '👨‍🎓'
    },
    {
      id: 4,
      type: 'certificate',
      name: '陈女士',
      location: '新加坡',
      message: '海牙认证很顺利，文件质量超出预期。',
      image: '/images/samples/apostille-real.jpeg',
      rating: 5
    },
    {
      id: 5,
      type: 'whatsapp',
      name: '刘先生',
      location: '英国伦敦',
      message: '第二次合作了，还是这么靠谱，推荐给朋友们！',
      timestamp: '2024年1月18日',
      avatar: '👨‍💻'
    },
    {
      id: 6,
      type: 'certificate',
      name: '黄女士',
      location: '德国柏林',
      message: '毕业证书做得很精致，通过了使馆认证。',
      image: '/images/samples/boston-university-diploma.jpeg',
      rating: 5
    }
  ] as Array<{
    id: number;
    type: 'whatsapp' | 'certificate';
    name: string;
    location: string;
    message: string;
    timestamp?: string;
    avatar?: string;
    image?: string;
    rating?: number;
  }>;

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
              <Link className="text-sm font-medium transition-colors text-blue-600" href="/guide">
                快速领证服务
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/blog">
                博客
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/contact">
                联系我们
              </Link>
            </div>
            
            {/* Right: CTA Button */}
            <Link 
              href="https://wa.me/1234567890" 
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
              {/* 紧急感提示 */}
              <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-100 px-4 py-2 rounded-full text-sm mb-6 animate-bounce">
                <span className="animate-ping inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                <span>🔥 限时优惠：本月咨询立减500元</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">🎓 快速领证服务</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6">无需考试，无需上课，7天快速获得真实学历证书</p>
              
              {/* 社会证明 */}
              <div className="flex justify-center items-center gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>本月已帮助 1,245+ 客户获得学历</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>通过率 99.8%</span>
                </div>
              </div>
              
              {/* 主要CTA */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
                <Link 
                  href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务，希望了解适合我的学历方案" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  <span className="mr-2 text-xl">📲</span>
                  免费咨询获取方案
                </Link>
                <p className="text-xs text-blue-100 mt-2">⚡ 24小时在线 | 5分钟快速回复</p>
              </div>
            </div>
          </section>

          {/* Document Types Overview */}
          <section className="py-20 px-6 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto relative">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  我们可以为您提供的
                  <span className="block text-blue-600">官方学历文件</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  我们提供全套学历文件与国际认证服务，满足不同用途需求：
                  <span className="font-semibold text-blue-600">升学、工作、公证、移民</span>等
                </p>
                <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
                  根据您的具体需求，添加以下官方文件，增强您的验证包
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {documentCategories.map((category, index) => (
                  <div key={index} className="group relative">
                    {/* Card */}
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 p-8 h-full transform group-hover:-translate-y-2">
                      {/* Icon Container */}
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                        <span className="text-4xl">🔧</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                        {category.title}
                      </h3>
                      
                      {/* Items List */}
                      <ul className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                            <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                            <span className="text-sm font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Decorative Element */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>
                ))}
              </div>
              
              {/* Bottom CTA */}
              <div className="text-center mt-12">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full text-sm font-medium">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  所有文件均为真实院校颁发，支持官方认证查询
                </div>
              </div>
            </div>
          </section>

          {/* Real Sample Display */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">📷 实拍样本展示 · 所见即所得</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  以下为客户实拍交付样本，所有信息已做打码处理，仅供参考。
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {documentSamples.map((sample) => (
                  <div key={sample.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group" onClick={() => setSelectedSample(sample)}>
                    <div className="relative h-64 overflow-hidden">
                      <Image 
                        alt={sample.title} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300" 
                        src={sample.image}
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-3">
                          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">✅</span>
                        <span className="text-xs text-gray-500">{sample.category}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{sample.title}</h3>
                      <p className="text-gray-600 text-sm">{sample.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Customer Feedback */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">客户真实反馈</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  我们为超过 2,000+ 客户完成学历认证，覆盖全球多个国家。以下为部分真实反馈：
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {customerFeedbacks.map((feedback) => (
                  <div key={feedback.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                    {feedback.type === 'whatsapp' ? (
                      /* WhatsApp Chat Style */
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-lg">{feedback.avatar}</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-900">{feedback.name}</span>
                              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                              </svg>
                            </div>
                            <p className="text-sm text-gray-500">{feedback.location}</p>
                          </div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 mb-3">
                          <p className="text-gray-800">{feedback.message}</p>
                        </div>
                        <p className="text-xs text-gray-400">{feedback.timestamp}</p>
                      </div>
                    ) : (
                      /* Certificate Display Style */
                      <div>
                        <div className="relative h-48 overflow-hidden">
                          <Image 
                            alt={`${feedback.name}的证书`} 
                            fill
                            className="object-cover blur-sm" 
                            src={feedback.image || '/images/samples/diploma-sample.svg'}
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="text-center text-white">
                              <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                              </svg>
                              <p className="text-sm">客户证书展示</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="font-semibold text-gray-900">{feedback.name}</span>
                            <span className="text-sm text-gray-500">• {feedback.location}</span>
                          </div>
                          <p className="text-gray-700 mb-3">{feedback.message}</p>
                          <div className="flex items-center gap-1">
                            {[...Array(feedback.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Bottom Stats */}
              <div className="text-center mt-12">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full text-sm font-medium">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  已服务 2,000+ 客户，满意度 98.5%
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="py-16 px-6 bg-blue-700 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-3xl font-bold text-white mb-3">📨 获取适合你的学历认证方案</h2>
              <p className="text-xl text-blue-100 mb-8">告诉我们你的需求，我们将为你定制最适合的院校与学历认证路径。</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-green-300 text-xl mb-2">✅</div>
                  <div className="text-white font-semibold">7~15 天极速出证</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-green-300 text-xl mb-2">✅</div>
                  <div className="text-white font-semibold">全套文件交付，支持全球认证</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-green-300 text-xl mb-2">✅</div>
                  <div className="text-white font-semibold">可提供样本先看，满意再付款</div>
                </div>
              </div>

              <Link 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl text-lg"
              >
                <span className="mr-2">👉</span>
                联系顾问
              </Link>
            </div>
          </section>
        </main>
      </main>

      {/* Modal for Sample Viewing */}
      {selectedSample && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white rounded-xl p-6 max-w-5xl max-h-[95vh] w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{selectedSample.title}</h3>
              <div className="flex items-center gap-2">
                {/* 缩放控制按钮 */}
                <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                  <button 
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 0.5}
                    className="p-2 hover:bg-gray-200 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    title="缩小"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/>
                    </svg>
                  </button>
                  <span className="px-2 text-sm font-medium min-w-[60px] text-center">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button 
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                    className="p-2 hover:bg-gray-200 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    title="放大"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                    </svg>
                  </button>
                  <button 
                    onClick={handleResetZoom}
                    className="p-2 hover:bg-gray-200 rounded transition-colors text-xs"
                    title="重置缩放"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                    </svg>
                  </button>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl ml-2"
                >
                  ×
                </button>
              </div>
            </div>
            
            {/* 图片容器 */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden" style={{ height: '70vh' }} onWheel={handleWheel}>
              <div className="w-full h-full overflow-auto flex items-center justify-center">
                <div 
                  className="transition-transform duration-200 ease-in-out cursor-move"
                  style={{ 
                    transform: `scale(${zoomLevel}) translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                    transformOrigin: 'center center'
                  }}
                >
                  <Image 
                    alt={selectedSample.title} 
                    width={800}
                    height={600}
                    className="object-contain max-w-none" 
                    src={selectedSample.image}
                    style={{
                      maxWidth: zoomLevel > 1 ? 'none' : '100%',
                      maxHeight: zoomLevel > 1 ? 'none' : '100%'
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <p className="text-gray-600">{selectedSample.description}</p>
              <div className="text-xs text-gray-400">
                提示：使用上方按钮进行缩放，或滚动鼠标滚轮
              </div>
            </div>
          </div>
        </div>
      )}

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