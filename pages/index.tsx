import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function HomePage() {
  // 案例数据
  const caseStudies = [
    {
      id: 1,
      name: '张先生',
      degree: '硕士学位',
      school: '伦敦大学学院',
      timeline: '6天完成',
      description: '紧急需要英国硕士学历认证用于工作升职，我们加急处理并确保了所有文件的有效性。'
    },
    {
      id: 2,
      name: '李女士',
      degree: '本科学位',
      school: '南加州大学',
      timeline: '7天完成',
      description: '客户需要美国本科学历用于海外求职，我们提供了完整的学历认证解决方案。'
    },
    {
      id: 3,
      name: '王先生',
      degree: 'MBA学位',
      school: '新加坡国立大学',
      timeline: '5天完成',
      description: '因工作调动需要亚洲顶尖商学院背景，我们协助完成了完整的学历文件认证。'
    },
  ];

  // 服务流程
  const processSteps = [
    {
      step: 1,
      title: '需求咨询',
      description: '了解您的具体需求和时间要求'
    },
    {
      step: 2,
      title: '学校选择',
      description: '从我们的资源库中选择适合的学校'
    },
    {
      step: 3,
      title: '文件准备',
      description: '准备和定制您需要的认证文件'
    },
    {
      step: 4,
      title: '质量检查',
      description: '多重验证确保文件真实可查'
    },
    {
      step: 5,
      title: '完成交付',
      description: '7天内安全交付您的学历认证'
    },
  ];

  // 产品选项
  const products = [
    {
      id: 1,
      title: '学士学位认证',
      image: '/images/products/bachelor.jpg',
      features: ['毕业证书', '学位证书', '成绩单', '在读证明']
    },
    {
      id: 2,
      title: '硕士学位认证',
      image: '/images/products/master.jpg',
      features: ['硕士毕业证', '学位证明', '成绩记录', '导师推荐信']
    },
    {
      id: 3,
      title: 'MBA/EMBA认证',
      image: '/images/products/mba.jpg',
      features: ['商学院证书', '管理学位', '课程成绩单', '项目证明']
    },
    {
      id: 4,
      title: '博士学位认证',
      image: '/images/products/phd.jpg',
      features: ['博士学位', '研究证明', '论文摘要', '学术推荐']
    },
  ];

  return (
    <Layout>
      <SEO
        title="学历认证服务 - 100%真实可查的国际学历认证"
        description="提供7天快速学历认证服务，所有文件100%真实可查，多所知名学校可供选择。"
        keywords={['学历认证', '国际学位认证', '真实可查', '学历证书', '7天加急', '硕士学位认证', '本科学历认证']}
      />
      
      {/* 英雄区域 */}
      <div className="bg-blue-700 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero-background.jpg"
            alt="学历认证背景"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              100%真实可查的国际学历认证
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              7天内获取您的学历证书，全球顶尖院校资源，满足您的各种学历需求
            </p>
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
      
      {/* 核心优势 */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">我们的核心优势</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">为什么选择我们的学历认证服务</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">100%真实可查</h3>
              <p className="text-gray-600">
                所有学历认证材料均可通过官方渠道验证，确保真实有效，无忧使用
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">7天加急服务</h3>
              <p className="text-gray-600">
                从咨询到交付，最快7天内完成全部流程，满足您的紧急需求
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">全球顶尖院校</h3>
              <p className="text-gray-600">
                提供来自全球各地区的知名院校资源，满足不同需求和偏好
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 服务流程 */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">7天获取学历证书流程</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              简单高效的认证流程，让您轻松获得所需文件
            </p>
          </div>
          
          <div className="relative">
            {/* 流程连接线 */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={step.step} className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center`}>
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
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
      </div>
      
      {/* 产品展示 */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">可供选择的文件类型</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们提供多种类型的学历认证文件，满足您不同场景的需求
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={product.image || "/images/product-placeholder.jpg"}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{product.title}</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
      
      {/* 学校资源预览 */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">全球顶尖学校资源</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们与全球多个国家和地区的知名院校合作，提供丰富的学历认证选择
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['美国', '英国', '澳大利亚', '加拿大', '新加坡', '日本', '香港', '新西兰', '荷兰', '西班牙'].map((country, index) => (
              <Link href="/schools" key={index}>
                <a className="bg-gray-50 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors">
                  <h3 className="font-bold text-gray-800">{country}</h3>
                  <p className="text-sm text-gray-500 mt-2">多所知名院校</p>
                </a>
              </Link>
            ))}
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
      
      {/* 客户案例 */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">成功案例分析</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              看看我们如何帮助其他客户成功获得学历认证
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map(study => (
              <div key={study.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">{study.name}</h3>
                    <p className="text-sm text-gray-500">{study.school}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                    {study.degree}
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {study.timeline}
                  </span>
                </div>
                
                <p className="text-gray-700">{study.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/blog">
              <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                查看更多成功案例
              </a>
            </Link>
          </div>
        </div>
      </div>
      
      {/* CTA区域 */}
      <div className="py-16 bg-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/cta-background.jpg"
            alt="联系我们背景"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              准备好开始您的学历认证之旅了吗？
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              填写您的需求信息，我们的专家团队将在24小时内与您联系
            </p>
            <Link href="/contact">
              <a className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                立即咨询
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 