import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default function GuidePage() {
  // 国家分类
  const countries = [
    { id: 'all', name: '全部国家' },
    { id: 'usa', name: '美国' },
    { id: 'uk', name: '英国' },
    { id: 'australia', name: '澳大利亚' },
    { id: 'canada', name: '加拿大' },
    { id: 'singapore', name: '新加坡' },
    { id: 'hongkong', name: '香港' },
    { id: 'japan', name: '日本' }
  ];
  
  // 认证指南数据
  const guides = [
    {
      id: 1,
      country: 'usa',
      countryName: '美国',
      title: '美国学历认证指南',
      description: '美国的学历认证体系主要通过WES(World Education Services)等机构进行评估。本指南详细介绍美国学历认证的流程、所需材料和注意事项。',
      authOrgs: ['WES (World Education Services)', 'ECE (Educational Credential Evaluators)', 'NACES成员机构'],
      timeframe: '标准认证周期：4-6周，加急服务：1-2周',
      materials: ['原始成绩单', '学位证书原件或公证件', '身份证明文件', '申请表格'],
      process: [
        '选择认证机构并创建账户',
        '提交在线申请并支付费用',
        '按要求邮寄原始文件',
        '等待评估完成',
        '获取认证报告'
      ],
      image: '/images/guides/usa.jpg',
      featured: true
    },
    {
      id: 2,
      country: 'uk',
      countryName: '英国',
      title: '英国学历认证指南',
      description: '英国的学历认证主要通过UK NARIC(现更名为ENIC)进行。本指南详细介绍英国学历认证的流程、所需材料和特殊要求。',
      authOrgs: ['UK ENIC (原NARIC)', 'British Council', '英国高等教育机构'],
      timeframe: '标准认证周期：3-4周，加急服务：7-10个工作日',
      materials: ['学历证书原件', '成绩单', '个人身份证明', '申请表'],
      process: [
        '在UK ENIC官网创建账户',
        '选择适合的认证服务',
        '上传所需文件和证明',
        '支付认证费用',
        '等待评估结果'
      ],
      image: '/images/guides/uk.jpg',
      featured: true
    },
    {
      id: 3,
      country: 'australia',
      countryName: '澳大利亚',
      title: '澳大利亚学历认证指南',
      description: '澳大利亚的学历认证主要通过DET(Department of Education and Training)进行。本指南详细介绍澳大利亚学历认证的流程和要求。',
      authOrgs: ['澳大利亚教育部(DET)', 'AEI-NOOSR', '澳大利亚资格框架(AQF)'],
      timeframe: '标准认证周期：2-4周，加急服务：5-10个工作日',
      materials: ['学历证书', '成绩单', '护照或身份证明', '申请表'],
      process: [
        '准备认证所需文件',
        '在线提交申请',
        '支付认证费用',
        '等待评估完成',
        '获取认证结果'
      ],
      image: '/images/guides/australia.jpg',
      featured: false
    },
    {
      id: 4,
      country: 'canada',
      countryName: '加拿大',
      title: '加拿大学历认证指南',
      description: '加拿大的学历认证主要通过ICAS(International Credential Assessment Service)等机构进行。本指南详细介绍加拿大学历认证的流程和注意事项。',
      authOrgs: ['ICAS', 'WES加拿大分支', 'CES (Comparative Education Service)'],
      timeframe: '标准认证周期：4-8周，加急服务：10-15个工作日',
      materials: ['官方成绩单', '学位证书', '身份证明', '申请表和费用'],
      process: [
        '选择适合的评估机构',
        '填写申请表格',
        '准备并提交所需文件',
        '支付评估费用',
        '等待评估结果'
      ],
      image: '/images/guides/canada.jpg',
      featured: false
    },
    {
      id: 5,
      country: 'singapore',
      countryName: '新加坡',
      title: '新加坡学历认证指南',
      description: '新加坡的学历认证主要通过SSG(SkillsFuture Singapore)进行。本指南详细介绍新加坡学历认证的特点和流程。',
      authOrgs: ['新加坡技能发展局(SSG)', '新加坡教育部(MOE)', '新加坡专业认证委员会'],
      timeframe: '标准认证周期：2-3周，加急服务：5-7个工作日',
      materials: ['学历证书原件', '成绩单', '身份证明', '工作经历证明(如适用)'],
      process: [
        '确认认证需求和用途',
        '准备所需文件和翻译件',
        '提交认证申请',
        '支付认证费用',
        '领取认证结果'
      ],
      image: '/images/guides/singapore.jpg',
      featured: false
    }
  ];

  // 筛选状态
  const [activeCountry, setActiveCountry] = useState('all');
  
  // 根据国家筛选指南
  const filteredGuides = activeCountry === 'all' 
    ? guides 
    : guides.filter(guide => guide.country === activeCountry);
  
  // 获取特色指南
  const featuredGuides = guides.filter(guide => guide.featured);

  return (
    <Layout>
      <SEO
        title="国际学历认证指南 - 各国认证流程与要求详解"
        description="全面解读美国、英国、澳大利亚等国家的学历认证流程、所需材料、认证机构及注意事项，助您顺利完成国际学历认证。"
        keywords={['学历认证指南', '国际学历认证', 'WES认证', '英国NARIC认证', '澳洲学历认证', '留学生学历认证', '学历公证']}
      />
      
      {/* 顶部横幅 */}
      <div className="bg-blue-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/guide-banner.jpg"
            alt="国际学历认证指南"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">国际学历认证指南</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              全面解读各国学历认证流程、要求与注意事项，助您顺利完成认证
            </p>
          </div>
        </div>
      </div>
      
      {/* 特色指南 */}
      {featuredGuides.length > 0 && (
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">热门认证指南</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredGuides.map(guide => (
                <div key={guide.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-2/5 relative h-60 md:h-auto">
                      <Image
                        src={guide.image || "/images/guide-placeholder.jpg"}
                        alt={guide.title}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium">
                        {guide.countryName}
                      </div>
                    </div>
                    <div className="md:w-3/5 p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                      <p className="text-gray-600 mb-4">{guide.description}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                        </svg>
                        <span>{guide.timeframe}</span>
                      </div>
                      <Link href={`/guide/${guide.country}`}>
                        <a className="inline-flex items-center text-blue-600 hover:text-blue-800">
                          查看完整指南
                          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* 国家分类筛选 */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* 分类筛选 */}
          <div className="mb-8 flex flex-wrap justify-center border-b border-gray-200">
            {countries.map(country => (
              <button
                key={country.id}
                className={`px-4 py-2 text-sm font-medium mx-1 mb-2 ${
                  activeCountry === country.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
                onClick={() => setActiveCountry(country.id)}
              >
                {country.name}
              </button>
            ))}
          </div>
          
          {/* 指南列表 */}
          <div className="space-y-8">
            {filteredGuides.map(guide => (
              <div key={guide.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                      {guide.countryName}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{guide.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{guide.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">认证机构</h4>
                      <ul className="space-y-1 mb-4">
                        {guide.authOrgs.map((org, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 mr-1.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-gray-700">{org}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="font-medium text-gray-900 mb-2">所需材料</h4>
                      <ul className="space-y-1">
                        {guide.materials.map((material, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 mr-1.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-gray-700">{material}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">认证周期</h4>
                      <p className="flex items-center text-gray-700 mb-4">
                        <svg className="w-5 h-5 mr-1.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                        </svg>
                        {guide.timeframe}
                      </p>
                      
                      <h4 className="font-medium text-gray-900 mb-2">认证流程</h4>
                      <ol className="space-y-1 list-decimal list-inside">
                        {guide.process.map((step, index) => (
                          <li key={index} className="text-gray-700">{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <Link href={`/guide/${guide.country}`}>
                      <a className="inline-flex items-center text-blue-600 hover:text-blue-800">
                        查看详细指南
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 无结果提示 */}
          {filteredGuides.length === 0 && (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">暂无相关指南</h3>
              <p className="mt-1 text-gray-500">我们正在努力添加更多国家的认证指南</p>
            </div>
          )}
        </div>
      </div>
      
      {/* FAQ区域 */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">常见问题解答</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              关于学历认证的常见问题及解答
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">什么是学历认证？为什么需要它？</h3>
              <p className="text-gray-600">
                学历认证是指将一个国家的学历证书转换为另一个国家认可的等效学历的过程。当您需要在国外工作、学习或移民时，通常需要进行学历认证，以证明您的教育背景符合目标国家的标准。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">学历认证需要多长时间？</h3>
              <p className="text-gray-600">
                认证时间因国家和认证机构而异，通常标准认证需要4-8周，而加急服务可能需要1-3周。准备充分的材料和正确的申请流程可以帮助加快认证进程。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">认证文件的有效期是多久？</h3>
              <p className="text-gray-600">
                大多数认证文件没有明确的有效期限，但某些国家或机构可能要求认证文件在特定时间内（如6个月或1年内）有效。建议在使用前确认目标机构的具体要求。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">如果我的原始文件不是英文，需要翻译吗？</h3>
              <p className="text-gray-600">
                是的，大多数国家的认证机构要求非英文文件提供官方认证的英文翻译。翻译必须由认可的翻译机构完成，并且通常需要附有翻译机构的盖章或公证。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">我可以同时向多个国家申请学历认证吗？</h3>
              <p className="text-gray-600">
                是的，您可以同时向不同国家的认证机构提交申请。但请注意，每个国家的认证要求和流程可能不同，需要准备不同的材料和表格。建议针对每个国家的具体要求单独准备申请材料。
              </p>
            </div>
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
              需要专业的学历认证服务？
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              我们提供一站式学历认证解决方案，7天内完成，100%真实可查
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <a className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                  立即咨询
                </a>
              </Link>
              <Link href="/schools">
                <a className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                  浏览学校资源
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 