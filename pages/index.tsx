import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function HomePage() {
  // 可认证国家和学历类型
  const certificationOptions = [
    {
      id: 1,
      title: '美国学历认证',
      description: '提供Harvard, MIT, Stanford等多所顶尖大学的学士、硕士、博士学历认证',
      icon: 'usa'
    },
    {
      id: 2,
      title: '英国学历认证',
      description: '包括Oxford, Cambridge, LSE等众多世界名校的本科、研究生学历认证',
      icon: 'uk'
    },
    {
      id: 3,
      title: '澳洲学历认证',
      description: '覆盖悉尼大学、墨尔本大学等澳洲八校联盟的全类型学历证明',
      icon: 'australia'
    },
    {
      id: 4,
      title: '加拿大学历认证',
      description: '多伦多大学、麦吉尔大学等加拿大名校的学历认证服务',
      icon: 'canada'
    },
    {
      id: 5,
      title: '欧洲学历认证',
      description: '提供德国、法国、意大利等欧洲多国的学历认证方案',
      icon: 'europe'
    },
    {
      id: 6,
      title: '亚洲学历认证',
      description: '包括日本、新加坡、香港等亚洲地区的优质院校学历认证',
      icon: 'asia'
    }
  ];

  // 认证流程
  const certificationProcess = [
    {
      step: 1,
      title: '免费咨询评估',
      description: '通过WhatsApp联系我们，专业顾问将为您提供个性化的学历认证方案评估'
    },
    {
      step: 2,
      title: '定制认证方案',
      description: '根据您的具体需求，我们为您量身定制认证材料和服务方案'
    },
    {
      step: 3,
      title: '快速安全交付',
      description: '7-15个工作日内，安全交付您的认证材料，全程保密，安全无忧'
    }
  ];

  // 成功案例
  const successCases = [
    {
      id: 1,
      name: '李先生 - 英国硕士学历认证',
      description: '帮助客户顺利通过雇主背景调查，获得跨国公司高管职位',
      image: '/images/placeholder.jpg'
    },
    {
      id: 2,
      name: '王女士 - 美国MBA认证',
      description: '协助客户完成海外移民学历要求，顺利获批移民申请',
      image: '/images/placeholder.jpg'
    },
    {
      id: 3,
      name: '张先生 - 澳洲本科学历认证',
      description: '为客户提供学历认证，成功申请世界名校研究生项目',
      image: '/images/placeholder.jpg'
    }
  ];

  return (
    <Layout>
      <SEO
        title="学历认证服务 - 100%真实可查的国际学历认证服务平台"
        description="专业提供全球学历认证服务，7-15天快速交付，确保100%真实可查，满足就业、留学、移民等多种需求。"
        keywords={['学历认证', '国际学位认证', '真实可查', '学历证书', '快速认证', '硕士学位认证', '本科学历认证']}
      />
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              全球学历认证专家，100%真实可查
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              专业提供世界各国高等教育学历认证服务，满足就业、留学、移民等多种需求
            </p>
            <a 
              href="https://wa.me/YOUR_WHATSAPP_NUMBER" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg inline-flex items-center text-lg transition-colors shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M20.636 3.364C18.399 1.127 15.322 0 12.001 0 5.478 0 .153 5.325.153 11.848c0 2.086.547 4.127 1.588 5.93L0 24l6.376-1.672c1.738.949 3.692 1.447 5.672 1.447h.006c6.520 0 11.845-5.325 11.845-11.848 0-3.164-1.231-6.139-3.469-8.376z" fillRule="evenodd" clipRule="evenodd"/>
              </svg>
              WhatsApp咨询认证方案
            </a>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20"></div>
      </section>
      
      {/* 2. 我们的优势 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的优势</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              选择我们的学历认证服务，获得安心可靠的解决方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md transition-all hover:shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">100%真实可查</h3>
              <p className="text-gray-600 text-center">
                所有认证文件均可通过官方渠道验证，确保真实有效，让您安心使用
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md transition-all hover:shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">快速交付服务</h3>
              <p className="text-gray-600 text-center">
                7-15个工作日内完成全部认证流程，紧急情况下可提供加急服务
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md transition-all hover:shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">全球院校资源</h3>
              <p className="text-gray-600 text-center">
                覆盖美国、英国、澳洲等多国家地区的顶尖院校，满足多样化需求
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. 可认证国家和学历类型 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">多国学历认证服务</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们提供全球多个国家的学历认证服务，涵盖本科、硕士、博士等多种类型
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationOptions.map(option => (
              <div key={option.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-lg">{option.icon.charAt(0).toUpperCase()}</span>
                  </div>
                  <h3 className="text-xl font-bold">{option.title}</h3>
                </div>
                <p className="text-gray-600">{option.description}</p>
                <Link href="/guide">
                  <a className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium">
                    了解更多 &rarr;
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 4. 认证流程模块 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">简单高效的认证流程</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              只需三步，轻松获取您需要的学历认证
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certificationProcess.map((process) => (
                <div key={process.step} className="relative">
                  <div className="bg-white p-8 rounded-xl shadow-md text-center h-full flex flex-col">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                    <p className="text-gray-600 flex-grow">{process.description}</p>
                  </div>
                  {process.step < certificationProcess.length && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="https://wa.me/YOUR_WHATSAPP_NUMBER" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center transition-colors shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M20.636 3.364C18.399 1.127 15.322 0 12.001 0 5.478 0 .153 5.325.153 11.848c0 2.086.547 4.127 1.588 5.93L0 24l6.376-1.672c1.738.949 3.692 1.447 5.672 1.447h.006c6.520 0 11.845-5.325 11.845-11.848 0-3.164-1.231-6.139-3.469-8.376z" fillRule="evenodd" clipRule="evenodd"/>
                </svg>
                立即咨询您的认证方案
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. 成功案例展示 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">成功案例展示</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们已帮助数千名客户成功获得学历认证，以下是部分案例分享
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successCases.map(caseItem => (
              <div key={caseItem.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                <div className="h-48 relative">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{caseItem.name}</h3>
                  <p className="text-gray-600">{caseItem.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/blog">
              <a className="inline-block text-blue-600 hover:text-blue-800 font-semibold">
                查看更多成功案例 &rarr;
              </a>
            </Link>
          </div>
        </div>
      </section>
      
      {/* 6. 内容推荐区块 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">浏览全球学校资源库</h3>
              <p className="text-gray-600 mb-6">
                我们提供来自全球各地区的知名院校资源，包括美国、英国、澳洲、加拿大等地区的顶尖大学。
              </p>
              <Link href="/schools">
                <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  查看学校资源库
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </Link>
            </div>
            
            <div className="bg-blue-50 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">了解各国认证指南</h3>
              <p className="text-gray-600 mb-6">
                我们提供详细的国家认证指南，帮助您了解不同国家的学历认证要求、流程和注意事项。
              </p>
              <Link href="/guide">
                <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  阅读认证指南
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 7. WhatsApp固定悬浮按钮 */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/YOUR_WHATSAPP_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M20.636 3.364C18.399 1.127 15.322 0 12.001 0 5.478 0 .153 5.325.153 11.848c0 2.086.547 4.127 1.588 5.93L0 24l6.376-1.672c1.738.949 3.692 1.447 5.672 1.447h.006c6.520 0 11.845-5.325 11.845-11.848 0-3.164-1.231-6.139-3.469-8.376z" fillRule="evenodd" clipRule="evenodd"/>
          </svg>
        </a>
      </div>
    </Layout>
  );
} 