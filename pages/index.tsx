import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>学历认证服务 - 100%真实可查的国际学历认证 - 学历认证服务平台</title>
        <meta name="description" content="提供7天快速学历认证服务，所有文件100%真实可查，多所知名学校可供选择。" />
        <meta name="keywords" content="学历认证, 国际学位认证, 真实可查, 学历证书, 7天加急, 硕士学位认证, 本科学历认证" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <SEO
          title="学历认证服务 - 100%真实可查的国际学历认证 - 学历认证服务平台"
          description="提供7天快速学历认证服务，所有文件100%真实可查，多所知名学校可供选择。"
          keywords={['学历认证', '国际学位认证', '真实可查', '学历证书', '7天加急', '硕士学位认证', '本科学历认证']}
        />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">100%真实可查的国际学历认证</h1>
              <p className="text-xl text-blue-100 mb-8">7天内获取您的学历证书，全球顶尖院校资源，满足您的各种学历需求</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <a className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                    立即咨询
                  </a>
                </Link>
                <Link href="/schools">
                  <a className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                    浏览学校资源
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Core Advantages Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">我们的核心优势</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">为什么选择我们的学历认证服务</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">100%真实可查</h3>
                <p className="text-gray-600">所有学历认证材料均可通过官方渠道验证，确保真实有效，无忧使用</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">7天加急服务</h3>
                <p className="text-gray-600">从咨询到交付，最快7天内完成全部流程，满足您的紧急需求</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">全球顶尖院校</h3>
                <p className="text-gray-600">提供来自全球各地区的知名院校资源，满足不同需求和偏好</p>
              </div>
            </div>
          </div>
        </div>

        {/* Document Types Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">可供选择的文件类型</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">我们提供多种类型的学历认证文件，满足您不同场景的需求</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img alt="学士学位认证" src="/images/products/bachelor.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">学士学位认证</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>毕业证书</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>学位证书</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>成绩单</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>在读证明</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img alt="硕士学位认证" src="/images/products/master.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">硕士学位认证</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>硕士毕业证</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>学位证明</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>成绩记录</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>导师推荐信</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img alt="MBA/EMBA认证" src="/images/products/mba.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">MBA/EMBA认证</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>商学院证书</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>管理学位</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>课程成绩单</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>项目证明</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img alt="博士学位认证" src="/images/products/phd.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">博士学位认证</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>博士学位</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>研究证明</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>论文摘要</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>学术推荐</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="/services">
                <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  了解更多服务详情
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Global Schools Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">全球顶尖学校资源</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">我们与全球多个国家和地区的知名院校合作，提供丰富的学历认证选择</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Link href="/schools">
                <a className="bg-gray-50 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors">
                  <h3 className="font-bold text-gray-800">美国</h3>
                  <p className="text-sm text-gray-500 mt-2">多所知名院校</p>
                </a>
              </Link>
              <Link href="/schools">
                <a className="bg-gray-50 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors">
                  <h3 className="font-bold text-gray-800">英国</h3>
                  <p className="text-sm text-gray-500 mt-2">多所知名院校</p>
                </a>
              </Link>
              <Link href="/schools">
                <a className="bg-gray-50 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors">
                  <h3 className="font-bold text-gray-800">澳大利亚</h3>
                  <p className="text-sm text-gray-500 mt-2">多所知名院校</p>
                </a>
              </Link>
              <Link href="/schools">
                <a className="bg-gray-50 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors">
                  <h3 className="font-bold text-gray-800">加拿大</h3>
                  <p className="text-sm text-gray-500 mt-2">多所知名院校</p>
                </a>
              </Link>
              <Link href="/schools">
                <a className="bg-gray-50 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors">
                  <h3 className="font-bold text-gray-800">新加坡</h3>
                  <p className="text-sm text-gray-500 mt-2">多所知名院校</p>
                </a>
              </Link>
              <Link href="/schools">
                <a className="bg-gray-50 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors">
                  <h3 className="font-bold text-gray-800">日本</h3>
                  <p className="text-sm text-gray-500 mt-2">多所知名院校</p>
                </a>
              </Link>
              <Link href="/schools">
                <a className="bg-gray-50 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors">
                  <h3 className="font-bold text-gray-800">香港</h3>
                  <p className="text-sm text-gray-500 mt-2">多所知名院校</p>
                </a>
              </Link>
              <Link href="/schools">
                <a className="bg-gray-50 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors">
                  <h3 className="font-bold text-gray-800">新西兰</h3>
                  <p className="text-sm text-gray-500 mt-2">多所知名院校</p>
                </a>
              </Link>
              <Link href="/schools">
                <a className="bg-gray-50 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors">
                  <h3 className="font-bold text-gray-800">荷兰</h3>
                  <p className="text-sm text-gray-500 mt-2">多所知名院校</p>
                </a>
              </Link>
              <Link href="/schools">
                <a className="bg-gray-50 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors">
                  <h3 className="font-bold text-gray-800">西班牙</h3>
                  <p className="text-sm text-gray-500 mt-2">多所知名院校</p>
                </a>
              </Link>
            </div>
            <div className="mt-12 text-center">
              <Link href="/schools">
                <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  浏览完整学校资源库
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">准备好开始您的学历认证之旅了吗？</h2>
              <p className="text-xl text-blue-100 mb-8">填写您的需求信息，我们的专家团队将在24小时内与您联系</p>
              <Link href="/contact">
                <a className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                  立即咨询
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
} 