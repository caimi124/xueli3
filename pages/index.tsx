import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <meta charSet="utf-8" />
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <title>学历认证服务 - 100%真实可查的国际学历认证 - 学历认证服务平台</title>
        <meta name="description" content="提供7天快速学历认证服务，所有文件100%真实可查，多所知名学校可供选择。" />
        <meta name="keywords" content="学历认证, 国际学位认证, 真实可查, 学历证书, 7天加急, 硕士学位认证, 本科学历认证" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="学历认证服务 - 100%真实可查的国际学历认证 - 学历认证服务平台" />
        <meta property="og:description" content="提供7天快速学历认证服务，所有文件100%真实可查，多所知名学校可供选择。" />
        <meta property="og:site_name" content="学历认证服务平台" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="学历认证服务 - 100%真实可查的国际学历认证 - 学历认证服务平台" />
        <meta name="twitter:description" content="提供7天快速学历认证服务，所有文件100%真实可查，多所知名学校可供选择。" />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="zh-CN" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Layout>
        <SEO
          title="学历认证服务 - 100%真实可查的国际学历认证 - 学历认证服务平台"
          description="提供7天快速学历认证服务，所有文件100%真实可查，多所知名学校可供选择。"
          keywords={['学历认证', '国际学位认证', '真实可查', '学历证书', '7天加急', '硕士学位认证', '本科学历认证']}
        />

        <main className="flex-grow">
          <div className="bg-blue-700 py-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <Image
                alt="学历认证背景"
                src="/images/hero-background.jpg"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">100%真实可查的国际学历认证</h1>
                <p className="text-xl text-blue-100 mb-8">7天内获取您的学历证书，全球顶尖院校资源，满足您的各种学历需求</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact">
                    <a className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors">立即咨询</a>
                  </Link>
                  <Link href="/schools">
                    <a className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg text-lg transition-colors">浏览学校资源</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">我们的核心优势</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">为什么选择我们的学历认证服务</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">100%真实可查</h3>
                  <p className="text-gray-600">所有学历认证材料均可通过官方渠道验证，确保真实有效，无忧使用</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">7天加急服务</h3>
                  <p className="text-gray-600">从咨询到交付，最快7天内完成全部流程，满足您的紧急需求</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
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

          <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">7天获取学历证书流程</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">简单高效的认证流程，让您轻松获得所需文件</p>
              </div>
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-5/12 md:text-right md:pr-8">
                      <h3 className="text-xl font-bold mb-2">需求咨询</h3>
                      <p className="text-gray-600">了解您的具体需求和时间要求</p>
                    </div>
                    <div className="my-4 md:my-0 md:w-2/12 flex justify-center">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10">1</div>
                    </div>
                    <div className="md:w-5/12"></div>
                  </div>
                  <div className="flex flex-col md:flex-row md:flex-row-reverse items-center">
                    <div className="md:w-5/12 md:text-left md:pl-8">
                      <h3 className="text-xl font-bold mb-2">学校选择</h3>
                      <p className="text-gray-600">从我们的资源库中选择适合的学校</p>
                    </div>
                    <div className="my-4 md:my-0 md:w-2/12 flex justify-center">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10">2</div>
                    </div>
                    <div className="md:w-5/12"></div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-5/12 md:text-right md:pr-8">
                      <h3 className="text-xl font-bold mb-2">文件准备</h3>
                      <p className="text-gray-600">准备和定制您需要的认证文件</p>
                    </div>
                    <div className="my-4 md:my-0 md:w-2/12 flex justify-center">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10">3</div>
                    </div>
                    <div className="md:w-5/12"></div>
                  </div>
                  <div className="flex flex-col md:flex-row md:flex-row-reverse items-center">
                    <div className="md:w-5/12 md:text-left md:pl-8">
                      <h3 className="text-xl font-bold mb-2">质量检查</h3>
                      <p className="text-gray-600">多重验证确保文件真实可查</p>
                    </div>
                    <div className="my-4 md:my-0 md:w-2/12 flex justify-center">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10">4</div>
                    </div>
                    <div className="md:w-5/12"></div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-5/12 md:text-right md:pr-8">
                      <h3 className="text-xl font-bold mb-2">完成交付</h3>
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

          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">可供选择的文件类型</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">我们提供多种类型的学历认证文件，满足您不同场景的需求</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 relative">
                    <Image
                      alt="学士学位认证"
                      src="/images/products/bachelor.jpg"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
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
                    <Image
                      alt="硕士学位认证"
                      src="/images/products/master.jpg"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
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
                    <Image
                      alt="MBA/EMBA认证"
                      src="/images/products/mba.jpg"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
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
                    <Image
                      alt="博士学位认证"
                      src="/images/products/phd.jpg"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
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
                  <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">了解更多服务详情</a>
                </Link>
              </div>
            </div>
          </div>

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
                  <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">浏览完整学校资源库</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">成功案例分析</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">看看我们如何帮助其他客户成功获得学历认证</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">张先生</h3>
                      <p className="text-sm text-gray-500">伦敦大学学院</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">硕士学位</span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">6天完成</span>
                  </div>
                  <p className="text-gray-700">紧急需要英国硕士学历认证用于工作升职，我们加急处理并确保了所有文件的有效性。</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">李女士</h3>
                      <p className="text-sm text-gray-500">南加州大学</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">本科学位</span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">7天完成</span>
                  </div>
                  <p className="text-gray-700">客户需要美国本科学历用于海外求职，我们提供了完整的学历认证解决方案。</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">王先生</h3>
                      <p className="text-sm text-gray-500">新加坡国立大学</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">MBA学位</span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">5天完成</span>
                  </div>
                  <p className="text-gray-700">因工作调动需要亚洲顶尖商学院背景，我们协助完成了完整的学历文件认证。</p>
                </div>
              </div>
              <div className="mt-12 text-center">
                <Link href="/blog">
                  <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">查看更多成功案例</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="py-16 bg-blue-700 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <Image
                alt="联系我们背景"
                src="/images/cta-background.jpg"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">准备好开始您的学历认证之旅了吗？</h2>
                <p className="text-xl text-blue-100 mb-8">填写您的需求信息，我们的专家团队将在24小时内与您联系</p>
                <Link href="/contact">
                  <a className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors">立即咨询</a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </Layout>

      <a
        href="https://wa.me/+86123456789?text=%E6%82%A8%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E5%92%A8%E8%AF%A2%E5%AD%A6%E5%8E%86%E8%AE%A4%E8%AF%81%E6%9C%8D%E5%8A%A1%E3%80%82"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
        aria-label="通过WhatsApp联系我们"
      >
        <span className="sr-only">WhatsApp</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
} 