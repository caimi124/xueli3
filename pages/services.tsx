import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function ServicesPage() {
  // 服务数据
  const services = [
    {
      id: 1,
      title: '本科学历认证',
      icon: '/images/services/bachelor.svg',
      description: '提供全球知名大学本科学位认证服务，包括毕业证书、学位证书、成绩单及相关辅助材料。所有认证文件真实可查，满足就业、升学及移民需求。',
      features: [
        '全球认可的本科学历证明',
        '完整的成绩记录单',
        '毕业证与学位证双重认证',
        '院校官方数据库可查',
        '支持紧急加急处理'
      ]
    },
    {
      id: 2,
      title: '硕士学位认证',
      icon: '/images/services/master.svg',
      description: '为客户提供世界知名大学硕士学位认证服务，包括硕士毕业证书、学位证明、成绩单及研究证明。提升您的专业背景，助力职场发展与学术进阶。',
      features: [
        '国际认可的硕士学历证明',
        '专业领域学术背景证明',
        '完整的学术成绩记录',
        '导师评价与推荐信',
        '7天加急处理选项'
      ]
    },
    {
      id: 3,
      title: 'MBA/EMBA认证',
      icon: '/images/services/mba.svg',
      description: '专为商业专业人士提供全球顶尖商学院MBA/EMBA学位认证服务，提升您的管理背景和商业资质，为高管晋升和企业创办提供有力支持。',
      features: [
        '全球顶尖商学院学位认证',
        '商业管理与领导力背景证明',
        '案例研究与项目实践证明',
        '商学院校友网络资质',
        '高管定制化认证方案'
      ]
    },
    {
      id: 4,
      title: '博士学位认证',
      icon: '/images/services/phd.svg',
      description: '提供全球著名大学博士学位认证服务，包括博士学位证书、研究证明、论文摘要等材料。建立您的学术权威，满足高端学术职位和研究机构需求。',
      features: [
        '顶尖院校博士学历认证',
        '学术研究成果证明',
        '专业领域权威背景',
        '导师团队推荐与评价',
        '国际学术数据库可查询'
      ]
    }
  ];

  // 案例研究
  const caseStudies = [
    {
      id: 1,
      client: '王先生',
      background: '国内985高校计算机专业毕业，创业多年后需要提升学历背景',
      need: '需要美国知名大学计算机科学硕士学位，用于公司融资和商务合作',
      solution: '为客户提供斯坦福大学计算机科学硕士学位认证，包括完整的成绩单和研究项目证明',
      result: '成功获得风投融资，并与多家科技企业建立了战略合作关系',
      timeline: '7天完成全部认证流程',
      image: '/images/case-studies/case1.jpg'
    },
    {
      id: 2,
      client: '张女士',
      background: '金融行业从业8年，希望晋升至跨国公司管理岗位',
      need: '需要顶尖商学院MBA学历，以满足职位晋升要求',
      solution: '提供沃顿商学院MBA学位认证，包括完整的课程成绩和商业案例研究证明',
      result: '成功晋升为跨国金融机构亚太区副总裁职位',
      timeline: '急件5天内完成',
      image: '/images/case-studies/case2.jpg'
    },
    {
      id: 3,
      client: '李先生',
      background: '医疗行业专业人士，希望获得海外工作机会',
      need: '需要英国医学院校的相关学历背景，以符合国际医疗机构招聘要求',
      solution: '提供伦敦大学学院医学专业硕士学位认证，包括专业课程证明和实习经历',
      result: '成功获得英国医疗机构的工作机会和工作签证',
      timeline: '标准7天服务',
      image: '/images/case-studies/case3.jpg'
    }
  ];

  return (
    <Layout>
      <SEO
        title="学历认证服务 - 快速、真实、可靠的国际学历认证"
        description="提供100%真实可查的国际学历认证服务，包括本科、硕士、MBA和博士学位证书。7天内获得权威认证，助力您的职业发展。"
        keywords={['学历认证服务', '国际学位认证', '真实学历证明', '7天加急认证', '本科学位认证', '硕士学位办理', 'MBA学历证书']}
      />
      
      {/* 顶部横幅 */}
      <div className="bg-blue-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/services-banner.jpg"
            alt="学历认证服务"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">我们的学历认证服务</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              100%真实可查的国际学历认证，为您的未来提供强有力的支持
            </p>
          </div>
        </div>
      </div>
      
      {/* 服务介绍 */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">提供全方位学历认证解决方案</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              无论您需要哪种类型的学历认证，我们都能为您提供专业、高效、可靠的服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6 md:p-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-6">
                      <div className="bg-blue-100 rounded-full p-3">
                        <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <h4 className="font-medium text-gray-900 mb-3">服务内容包括：</h4>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 流程介绍 */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">7天极速认证流程</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们标准化的认证流程，确保您在最短时间内获得所需的学历认证文件
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 流程连接线 */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-blue-200 ml-8"></div>
              
              <div className="space-y-12">
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl relative z-10">
                        1
                      </div>
                    </div>
                    <div className="ml-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">需求咨询评估</h3>
                      <p className="text-gray-600 mb-4">
                        我们的顾问将与您详细沟通，了解您的具体需求、时间要求和用途，为您提供最合适的认证方案。
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-500">
                          <strong>时间：</strong>当天完成 | <strong>方式：</strong>在线咨询或电话沟通
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl relative z-10">
                        2
                      </div>
                    </div>
                    <div className="ml-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">选择院校和专业</h3>
                      <p className="text-gray-600 mb-4">
                        从我们的全球院校资源库中，根据您的需求选择最适合的学校和专业方向，确定认证方案。
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-500">
                          <strong>时间：</strong>1-2天 | <strong>方式：</strong>顾问指导下进行选择
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl relative z-10">
                        3
                      </div>
                    </div>
                    <div className="ml-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">材料准备与定制</h3>
                      <p className="text-gray-600 mb-4">
                        根据选定方案，我们的专业团队开始准备您的学历认证材料，包括证书、成绩单和其他必要文件。
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-500">
                          <strong>时间：</strong>2-3天 | <strong>方式：</strong>专业团队制作，保持沟通更新进度
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl relative z-10">
                        4
                      </div>
                    </div>
                    <div className="ml-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">质量检查与验证</h3>
                      <p className="text-gray-600 mb-4">
                        材料完成后，我们的质检团队将进行多重验证，确保所有文件的真实性和可查询性，杜绝任何错误。
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-500">
                          <strong>时间：</strong>1天 | <strong>方式：</strong>多重验证系统，确保无误
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl relative z-10">
                        5
                      </div>
                    </div>
                    <div className="ml-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">交付与使用指导</h3>
                      <p className="text-gray-600 mb-4">
                        将完成的认证材料安全交付给您，并提供详细的使用指导，确保您能够正确有效地使用这些文件。
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-500">
                          <strong>时间：</strong>1天 | <strong>方式：</strong>安全交付与后续支持
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-blue-800">加急服务</h3>
                  <p className="mt-2 text-blue-700">
                    如您有紧急需求，我们还提供3-5天的加急服务，请在咨询时告知顾问您的时间要求。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 成功案例分析 */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">成功案例分析</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              了解我们如何帮助客户通过学历认证解决实际问题，实现职业与人生目标
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map(study => (
              <div key={study.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={study.image || "/images/case-placeholder.jpg"}
                    alt={`${study.client}案例`}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded">
                        {study.timeline}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2">{study.client}的故事</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">背景</h4>
                    <p className="text-gray-900">{study.background}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">需求</h4>
                    <p className="text-gray-900">{study.need}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">我们的解决方案</h4>
                    <p className="text-gray-900">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">最终结果</h4>
                    <p className="text-gray-900 font-medium text-green-700">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* FAQ区域 */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">常见问题解答</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              查看关于学历认证服务的常见问题及解答
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">认证的学历真的可以查询验证吗？</h3>
              <p className="text-gray-600">
                是的，我们提供的所有学历认证材料均可通过官方渠道进行验证。我们会确保您的学历信息被正确录入相关数据库系统，使其可以通过标准的验证程序查询到。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">认证过程需要我提供哪些个人信息？</h3>
              <p className="text-gray-600">
                基本的个人信息如姓名、出生日期等是必须的，以确保认证材料的准确性。具体需要提供的信息会在咨询阶段详细告知您，我们严格保护客户隐私，确保信息安全。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">学历认证材料可以用于哪些场景？</h3>
              <p className="text-gray-600">
                我们的认证材料可用于就业、职业晋升、继续教育申请、移民、创业等多种场景。在咨询阶段，我们会根据您的具体用途提供最适合的认证方案。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">如何确保认证过程的安全和保密？</h3>
              <p className="text-gray-600">
                我们采用严格的信息安全协议，所有客户资料均经过加密存储和处理。您的个人信息和认证需求将被严格保密，我们与客户签署保密协议，确保您的隐私安全。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">如果认证后遇到问题，有哪些售后支持？</h3>
              <p className="text-gray-600">
                我们提供完善的售后服务，包括认证材料的使用指导、验证过程中的技术支持等。如果您在使用过程中遇到任何问题，我们的客服团队将全程为您提供支持和解决方案。
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
              准备好开始您的学历认证了吗？
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              立即联系我们，获取专属于您的学历认证解决方案
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