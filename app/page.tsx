'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="fixed w-full z-50 transition-all duration-300 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link className="flex items-center" href="/">
                <span className="text-xl font-bold text-blue-600">Acaboost</span>
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link className="text-sm font-medium transition-colors text-blue-600" href="/">
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
          <main className="flex-grow">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
              <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    7天内获取真实可查学历，全球认证可用
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-100 mb-8">
                    官方文件齐全，移民/工作/升学皆适用
                  </p>
                  <div className="flex justify-center">
                    <Link 
                      href="https://wa.me/1234567890" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                    >
                      <span className="mr-2">✅</span>
                      立即咨询
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Service Advantages */}
            <div className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">核心服务优势</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">为什么选择我们的学历认证服务</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">🔒 官方学历真实可查</h3>
                    <p className="text-gray-600">所有学历均由真实学校颁发，具备认证报告</p>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">📄 文件齐全</h3>
                    <p className="text-gray-600">毕业证、成绩单、认证报告一应俱全</p>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">⚡ 代办高效</h3>
                    <p className="text-gray-600">最快7天交付，满足您的紧急需求</p>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">🌎 全球认证</h3>
                    <p className="text-gray-600">支持移民、留学、工作等多种用途</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification Process */}
            <div className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">认证流程展示</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">简单高效的认证流程，让您轻松获得所需文件</p>
                </div>
                <div className="relative">
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
                  <div className="space-y-12">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-5/12 md:text-right md:pr-8">
                        <h3 className="text-xl font-bold mb-2">1️⃣ 需求咨询</h3>
                        <p className="text-gray-600">了解您的具体需求和时间要求</p>
                      </div>
                      <div className="my-4 md:my-0 md:w-2/12 flex justify-center">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10">1</div>
                      </div>
                      <div className="md:w-5/12"></div>
                    </div>
                    <div className="flex flex-col md:flex-row md:flex-row-reverse items-center">
                      <div className="md:w-5/12 md:text-left md:pl-8">
                        <h3 className="text-xl font-bold mb-2">2️⃣ 学校选择</h3>
                        <p className="text-gray-600">从我们的资源库中选择适合的学校</p>
                      </div>
                      <div className="my-4 md:my-0 md:w-2/12 flex justify-center">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10">2</div>
                      </div>
                      <div className="md:w-5/12"></div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-5/12 md:text-right md:pr-8">
                        <h3 className="text-xl font-bold mb-2">3️⃣ 文件准备</h3>
                        <p className="text-gray-600">准备和定制您需要的认证文件</p>
                      </div>
                      <div className="my-4 md:my-0 md:w-2/12 flex justify-center">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10">3</div>
                      </div>
                      <div className="md:w-5/12"></div>
                    </div>
                    <div className="flex flex-col md:flex-row md:flex-row-reverse items-center">
                      <div className="md:w-5/12 md:text-left md:pl-8">
                        <h3 className="text-xl font-bold mb-2">4️⃣ 质量检查</h3>
                        <p className="text-gray-600">多重验证确保文件真实可查</p>
                      </div>
                      <div className="my-4 md:my-0 md:w-2/12 flex justify-center">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10">4</div>
                      </div>
                      <div className="md:w-5/12"></div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-5/12 md:text-right md:pr-8">
                        <h3 className="text-xl font-bold mb-2">5️⃣ 完成交付</h3>
                        <p className="text-gray-600">7天内安全交付您的学历认证</p>
                      </div>
                      <div className="my-4 md:my-0 md:w-2/12 flex justify-center">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10">5</div>
                      </div>
                      <div className="md:w-5/12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Types */}
            <div className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">学历文件类型说明</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">我们提供多种类型的学历认证文件，满足您不同场景的需求</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 relative">
                      <Image alt="毕业证书" fill style={{objectFit: 'cover'}} src="/images/products/diploma.svg" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">毕业证书（中/英文）</h3>
                      <p className="text-gray-600">作为学历核心文件，用于证明您的学历背景</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 relative">
                      <Image alt="成绩单" fill style={{objectFit: 'cover'}} src="/images/products/transcript.svg" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">成绩单（中/英文）</h3>
                      <p className="text-gray-600">申请移民/升学材料，展示您的学习成果</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 relative">
                      <Image alt="学位证书" fill style={{objectFit: 'cover'}} src="/images/products/degree.svg" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">学位证书</h3>
                      <p className="text-gray-600">研究生及博士学历证明，提升您的专业背景</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 relative">
                      <Image alt="认证报告" fill style={{objectFit: 'cover'}} src="/images/products/certification.svg" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">教育认证报告</h3>
                      <p className="text-gray-600">确保真实可查，用于机构审核和验证</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Schools */}
            <div className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">全球顶尖学校资源</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">我们与全球多个国家和地区的知名院校合作，提供丰富的学历认证选择</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🇺🇸</span>
                    </div>
                    <h3 className="font-bold mb-2">美国</h3>
                    <p className="text-sm text-gray-600">多所知名院校</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🇬🇧</span>
                    </div>
                    <h3 className="font-bold mb-2">英国</h3>
                    <p className="text-sm text-gray-600">多所知名院校</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🇦🇺</span>
                    </div>
                    <h3 className="font-bold mb-2">澳大利亚</h3>
                    <p className="text-sm text-gray-600">多所知名院校</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🇨🇦</span>
                    </div>
                    <h3 className="font-bold mb-2">加拿大</h3>
                    <p className="text-sm text-gray-600">多所知名院校</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🇸🇬</span>
                    </div>
                    <h3 className="font-bold mb-2">新加坡</h3>
                    <p className="text-sm text-gray-600">多所知名院校</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🇯🇵</span>
                    </div>
                    <h3 className="font-bold mb-2">日本</h3>
                    <p className="text-sm text-gray-600">多所知名院校</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🇭🇰</span>
                    </div>
                    <h3 className="font-bold mb-2">香港</h3>
                    <p className="text-sm text-gray-600">多所知名院校</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🇳🇿</span>
                    </div>
                    <h3 className="font-bold mb-2">新西兰</h3>
                    <p className="text-sm text-gray-600">多所知名院校</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🇳🇱</span>
                    </div>
                    <h3 className="font-bold mb-2">荷兰</h3>
                    <p className="text-sm text-gray-600">多所知名院校</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🇪🇸</span>
                    </div>
                    <h3 className="font-bold mb-2">西班牙</h3>
                    <p className="text-sm text-gray-600">多所知名院校</p>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <Link href="/schools">
                    <span className="inline-block bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                      浏览完整学校资源库
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Success Cases */}
            <div className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">成功案例展示</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">看看我们如何帮助其他客户成功获得学历认证</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">👩‍🎓</span>
                      </div>
                      <div>
                        <h3 className="font-bold">Lily（新加坡）</h3>
                        <p className="text-sm text-gray-500">英国硕士学历</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">申请PR</span>
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">7天完成</span>
                    </div>
                    <p className="text-gray-700">成功获得英国硕士学历认证，用于申请新加坡PR，7天内完成交付。</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">👨‍💼</span>
                      </div>
                      <div>
                        <h3 className="font-bold">Mark（马来西亚）</h3>
                        <p className="text-sm text-gray-500">加拿大本科文凭</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">跳槽大厂</span>
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">6天完成</span>
                    </div>
                    <p className="text-gray-700">定制加拿大本科文凭，成功跳槽到知名科技公司。</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">🧑‍💻</span>
                      </div>
                      <div>
                        <h3 className="font-bold">成功案例展示</h3>
                        <p className="text-sm text-gray-500">真实反馈</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">&quot;服务非常专业，文件真实可靠，成功帮助我获得心仪的工作机会。&quot;</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">&quot;7天内就收到了所有文件，效率很高，质量也很好。&quot;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 bg-blue-700 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <Image alt="联系我们背景" fill style={{objectFit: 'cover'}} src="/images/cta-background.svg" />
              </div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold text-white mb-6">准备好开始您的学历认证之旅了吗？</h2>
                  <p className="text-xl text-blue-100 mb-8">填写您的需求信息，我们的专家团队将在24小时内与您联系</p>
                  <Link href="/contact">
                    <span className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                      立即咨询
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">常见问题 FAQ</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">解答您最关心的问题</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4">学历可靠吗？</h3>
                    <p className="text-gray-600">所有学历均由真实学校颁发，具备认证报告，确保真实可查。</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4">我能查到吗？</h3>
                    <p className="text-gray-600">可通过认证平台或原校查询学历真实性，我们提供完整的验证支持。</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4">是否违法？</h3>
                    <p className="text-gray-600">不涉及伪造，我们提供正规流程认证支持，确保合法合规。</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4">多久能拿到？</h3>
                    <p className="text-gray-600">最快7个工作日，具体取决于学历类型和认证要求。</p>
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  );
} 