import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Image from 'next/image';

export default function GuidePage() {
  return (
    <Layout>
      <SEO
        title="国际学历认证指南 - 各国认证流程与要求详解 - 学历认证服务平台"
        description="全面解读美国、英国、澳大利亚等国家的学历认证流程、所需材料、认证机构及注意事项，助您顺利完成国际学历认证。"
        keywords={["学历认证指南", "国际学历认证", "WES认证", "英国NARIC认证", "澳洲学历认证", "留学生学历认证", "学历公证"]}
      />
      <div className="bg-blue-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            alt="国际学历认证指南"
            src="/images/guide-banner.jpg"
            fill
            style={{ objectFit: 'cover' }}
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

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">热门认证指南</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 美国认证指南卡片 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-2/5 relative h-60 md:h-auto">
                  <Image
                    alt="美国学历认证指南"
                    src="/images/guides/usa.jpg"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium">美国</div>
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">美国学历认证指南</h3>
                  <p className="text-gray-600 mb-4">美国的学历认证体系主要通过WES(World Education Services)等机构进行评估。本指南详细介绍美国学历认证的流程、所需材料和注意事项。</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>标准认证周期：4-6周，加急服务：1-2周</span>
                  </div>
                  <a href="/guide/usa" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                    查看完整指南
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 英国认证指南卡片 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-2/5 relative h-60 md:h-auto">
                  <Image
                    alt="英国学历认证指南"
                    src="/images/guides/uk.jpg"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium">英国</div>
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">英国学历认证指南</h3>
                  <p className="text-gray-600 mb-4">英国的学历认证主要通过UK NARIC(现更名为ENIC)进行。本指南详细介绍英国学历认证的流程、所需材料和特殊要求。</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>标准认证周期：3-4周，加急服务：7-10个工作日</span>
                  </div>
                  <a href="/guide/uk" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                    查看完整指南
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap justify-center border-b border-gray-200">
            <button className="px-4 py-2 text-sm font-medium mx-1 mb-2 text-blue-600 border-b-2 border-blue-600">全部国家</button>
            <button className="px-4 py-2 text-sm font-medium mx-1 mb-2 text-gray-500 hover:text-blue-600">美国</button>
            <button className="px-4 py-2 text-sm font-medium mx-1 mb-2 text-gray-500 hover:text-blue-600">英国</button>
            <button className="px-4 py-2 text-sm font-medium mx-1 mb-2 text-gray-500 hover:text-blue-600">澳大利亚</button>
            <button className="px-4 py-2 text-sm font-medium mx-1 mb-2 text-gray-500 hover:text-blue-600">加拿大</button>
            <button className="px-4 py-2 text-sm font-medium mx-1 mb-2 text-gray-500 hover:text-blue-600">新加坡</button>
            <button className="px-4 py-2 text-sm font-medium mx-1 mb-2 text-gray-500 hover:text-blue-600">香港</button>
            <button className="px-4 py-2 text-sm font-medium mx-1 mb-2 text-gray-500 hover:text-blue-600">日本</button>
          </div>

          {/* 美国认证详细内容 */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">美国</span>
                  <h3 className="text-xl font-bold text-gray-900">美国学历认证指南</h3>
                </div>
                <p className="text-gray-600 mb-6">美国的学历认证体系主要通过WES(World Education Services)等机构进行评估。本指南详细介绍美国学历认证的流程、所需材料和注意事项。</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">认证机构</h4>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-1.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">WES (World Education Services)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-1.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">ECE (Educational Credential Evaluators)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-1.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">NACES成员机构</span>
                      </li>
                    </ul>
                    <h4 className="font-medium text-gray-900 mb-2">所需材料</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-1.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">原始成绩单</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-1.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">学位证书原件或公证件</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-1.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">身份证明文件</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-1.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">申请表格</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">认证周期</h4>
                    <p className="flex items-center text-gray-700 mb-4">
                      <svg className="w-5 h-5 mr-1.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      标准认证周期：4-6周，加急服务：1-2周
                    </p>
                    <h4 className="font-medium text-gray-900 mb-2">认证流程</h4>
                    <ol className="space-y-1 list-decimal list-inside">
                      <li className="text-gray-700">选择认证机构并创建账户</li>
                      <li className="text-gray-700">提交在线申请并支付费用</li>
                      <li className="text-gray-700">按要求邮寄原始文件</li>
                      <li className="text-gray-700">等待评估完成</li>
                      <li className="text-gray-700">获取认证报告</li>
                    </ol>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <a href="/guide/usa" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                    查看详细指南
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">常见问题解答</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">关于学历认证的常见问题及解答</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">什么是学历认证？为什么需要它？</h3>
              <p className="text-gray-600">学历认证是指将一个国家的学历证书转换为另一个国家认可的等效学历的过程。当您需要在国外工作、学习或移民时，通常需要进行学历认证，以证明您的教育背景符合目标国家的标准。</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">学历认证需要多长时间？</h3>
              <p className="text-gray-600">认证时间因国家和认证机构而异，通常标准认证需要4-8周，而加急服务可能需要1-3周。准备充分的材料和正确的申请流程可以帮助加快认证进程。</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">认证文件的有效期是多久？</h3>
              <p className="text-gray-600">大多数认证文件没有明确的有效期限，但某些国家或机构可能要求认证文件在特定时间内（如6个月或1年内）有效。建议在使用前确认目标机构的具体要求。</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">如果我的原始文件不是英文，需要翻译吗？</h3>
              <p className="text-gray-600">是的，大多数国家的认证机构要求非英文文件提供官方认证的英文翻译。翻译必须由认可的翻译机构完成，并且通常需要附有翻译机构的盖章或公证。</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">我可以同时向多个国家申请学历认证吗？</h3>
              <p className="text-gray-600">是的，您可以同时向不同国家的认证机构提交申请。但请注意，每个国家的认证要求和流程可能不同，需要准备不同的材料和表格。建议针对每个国家的具体要求单独准备申请材料。</p>
            </div>
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
            <h2 className="text-3xl font-bold text-white mb-6">需要专业的学历认证服务？</h2>
            <p className="text-xl text-blue-100 mb-8">我们提供一站式学历认证解决方案，7天内完成，100%真实可查</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                立即咨询
              </a>
              <a href="/schools" className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                浏览学校资源
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}                         < p   c l a s s N a m e = \  
 t e x t - b l u e - 1 0 0  
 m a x - w - 2 x l  
 m x - a u t o  
 t e x t - l g  
 m t - 4 \ > KmՋu�b��f�e  -   2 0 2 5 t^5 g2 8 �e< / p >  
 