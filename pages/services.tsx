import React from 'react';
import { GetStaticProps } from 'next';
import { getAllServiceCategories } from '../lib/services';
import { ServiceCategory } from '../types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ServiceCategorySection from '../components/services/ServiceCategorySection';
import ProcessFlow from '../components/services/ProcessFlow';

interface ServicesPageProps {
  serviceCategories: ServiceCategory[];
}

const certificationSteps = [
  {
    title: "提交申请",
    description: "通过我们的在线表单提交您的学历认证申请和必要材料。",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
      </svg>
    )
  },
  {
    title: "材料审核",
    description: "我们的专业团队将对您提交的学历材料进行全面审核。",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
      </svg>
    )
  },
  {
    title: "认证处理",
    description: "我们将根据您的学历情况，办理相应的认证手续。",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
      </svg>
    )
  },
  {
    title: "获得证明",
    description: "您将获得官方认可的学历认证证明文件。",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
      </svg>
    )
  }
];

export default function ServicesPage({ serviceCategories }: ServicesPageProps) {
  return (
    <Layout>
      <SEO
        title="服务项目 - 学历认证服务平台"
        description="我们提供专业的学历认证服务、留学申请指导和企业背景调查服务，满足您的各种学历认证需求。"
        keywords={['学历认证', '留学申请', '企业服务', '背景调查']}
      />
      
      <div className="bg-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">我们的服务</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            专业的学历认证服务，助您实现全球学习和职业发展目标。
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <ProcessFlow 
          title="认证流程" 
          description="简单四步，完成您的学历认证需求" 
          steps={certificationSteps} 
        />
        
        {serviceCategories.map(category => (
          <ServiceCategorySection key={category.id} category={category} />
        ))}
      </div>
      
      {/* 定制服务CTA */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">需要定制服务？</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            我们了解每位客户的需求各不相同，如果您需要量身定制的学历认证服务，请与我们联系。
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            联系我们
          </a>
        </div>
      </div>
      
      {/* 常见问题部分 */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">常见问题</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            了解关于我们服务的常见问题解答
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">学历认证需要多长时间？</h3>
            <p className="text-gray-600">
              根据您选择的服务包和认证目标国家/地区不同，认证时间通常在3-15个工作日。加急服务可缩短处理时间。
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">我需要提供哪些材料进行学历认证？</h3>
            <p className="text-gray-600">
              通常需要提供学历证书原件、成绩单、身份证明等材料。详细清单将在您联系我们后提供，并根据您的具体情况进行定制。
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">学历认证的有效期是多久？</h3>
            <p className="text-gray-600">
              学历认证本身通常没有明确的有效期限制，但某些用途（如签证申请）可能要求认证报告在特定时间范围内。我们会根据您的需求提供相应建议。
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">如果我的学校已经关闭或合并，还能进行学历认证吗？</h3>
            <p className="text-gray-600">
              可以，我们有处理这类特殊情况的经验。我们会协助您找到相关替代文件和证明方式，确保您的学历得到认可。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const serviceCategories = getAllServiceCategories();
  
  return {
    props: {
      serviceCategories,
    },
    // 每天重新生成页面
    revalidate: 86400,
  };
}; 