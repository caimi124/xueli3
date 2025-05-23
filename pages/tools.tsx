import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import EligibilityChecker from '../components/interactive/EligibilityChecker';
import ConsultationGuide from '../components/interactive/ConsultationGuide';
import Link from 'next/link';

export default function ToolsPage() {
  return (
    <Layout>
      <SEO
        title="互动工具 - 学历认证服务平台"
        description="使用我们的互动工具评估您的学历认证资格和获取定制化服务咨询，帮助您更好地规划学历认证流程。"
        keywords={['学历认证工具', '服务咨询', '资格评估', '在线工具']}
      />
      
      <div className="bg-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">互动工具</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            使用我们的在线工具，评估学历认证资格，获取定制服务方案和专业建议。
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <EligibilityChecker />
          </div>
          <div>
            <ConsultationGuide />
          </div>
        </div>
        
        {/* 进度查询提示 */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-medium text-gray-900 mb-1">已是我们的客户？</h3>
              <p className="text-gray-600 mb-4">
                如果您已经提交了认证申请，可以使用我们的进度查询系统随时了解您的申请状态。
              </p>
              <Link href="/contact">
                <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  查询申请进度
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
        
        {/* 常见问题 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">常见问题</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">这些工具的结果有多准确？</h3>
              <p className="text-gray-600">
                我们的工具基于常见情况提供初步评估和咨询，但每个认证案例都有其独特性。为获得最准确的评估和定制方案，建议您与我们的专业顾问直接联系。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">如何使用资格评估工具？</h3>
              <p className="text-gray-600">
                只需回答几个简单问题，系统将基于您的学历情况、文件完整性和认证目的等因素，评估您的认证可行性并提供相应建议。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">定制服务咨询是如何工作的？</h3>
              <p className="text-gray-600">
                服务咨询工具会根据您选择的服务类型、文件类型、目标国家和认证数量等因素，为您提供个性化的服务方案。我们的顾问会在您提交需求后与您联系，提供详细的解决方案。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">我的个人信息安全吗？</h3>
              <p className="text-gray-600">
                是的，我们非常重视您的隐私。您在互动工具中提供的所有信息都受到严格保护，不会与任何第三方分享。详情请参阅我们的隐私政策。
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA区域 */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">需要更多帮助？</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            如果您有任何疑问或需要个性化的建议，我们的专业顾问团队随时为您提供帮助。
          </p>
          <Link href="/contact">
            <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              联系我们
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
} 