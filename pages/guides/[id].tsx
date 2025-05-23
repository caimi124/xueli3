import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllCountryGuides, getCountryGuideById } from '../../lib/guides';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

interface GuidePageProps {
  guide: any; // 使用CountryGuide类型，但目前先用any避免导入问题
}

export default function GuidePage({ guide }: GuidePageProps) {
  if (!guide) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">指南未找到</h1>
          <p className="text-gray-600 mb-6">
            抱歉，我们无法找到您请求的认证指南。它可能已被移除或链接错误。
          </p>
          <Link href="/blog">
            <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              返回博客
            </a>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${guide.country}${guide.flag}学历认证指南 - 学历认证服务平台`}
        description={`了解如何在${guide.country}进行学历认证，包括所需材料、流程、时间框架和费用等详细信息。`}
        keywords={[guide.country, '学历认证', '留学指南', '认证流程', '认证要求']}
      />
      
      <div className="bg-blue-700 py-16 relative overflow-hidden">
        {guide.coverImage && (
          <div className="absolute inset-0 opacity-20">
            <Image
              src={guide.coverImage}
              alt={guide.country}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-2">
            <span className="text-5xl mr-3">{guide.flag}</span>
            <h1 className="text-4xl font-bold text-white">{guide.country}学历认证指南</h1>
          </div>
          <p className="text-blue-100 max-w-2xl mx-auto text-center">
            全面了解{guide.country}的学历认证流程、要求和注意事项
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/blog">
            <a className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
              </svg>
              返回博客
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">概述</h2>
                  <p className="text-gray-700">{guide.content.overview}</p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">所需材料</h2>
                  <ul className="space-y-3">
                    {guide.content.requirements.map((req: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">认证流程</h2>
                  <ol className="space-y-4">
                    {guide.content.process.map((step: string, index: number) => (
                      <li key={index} className="flex">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 font-bold">
                          {index + 1}
                        </div>
                        <div className="pt-1">
                          <span className="text-gray-700">{step}</span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">时间与费用</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="text-lg font-medium text-gray-900">处理时间</h3>
                      </div>
                      <p className="text-gray-700">{guide.content.timeframe}</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="text-lg font-medium text-gray-900">费用</h3>
                      </div>
                      <p className="text-gray-700">{guide.content.costs}</p>
                    </div>
                  </div>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">贴士与建议</h2>
                  <ul className="space-y-3">
                    {guide.content.tips.map((tip: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">有用资源</h3>
                <ul className="space-y-3">
                  {guide.content.resources.map((resource: any, index: number) => (
                    <li key={index}>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                        </svg>
                        {resource.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
                <h3 className="text-lg font-medium text-gray-900 mb-2">需要帮助？</h3>
                <p className="text-gray-700 mb-4">
                  我们的专家可以为您提供{guide.country}学历认证的全程指导和服务。
                </p>
                <Link href="/contact">
                  <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    联系我们获取帮助
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">我们的服务</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <span className="font-medium text-gray-800 block">文件评估</span>
                      <span className="text-sm text-gray-600">预先评估您的学历文件是否满足要求</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <span className="font-medium text-gray-800 block">专业翻译</span>
                      <span className="text-sm text-gray-600">提供符合认证要求的专业文件翻译</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <span className="font-medium text-gray-800 block">全程代办</span>
                      <span className="text-sm text-gray-600">一站式服务，从申请到获得认证结果</span>
                    </div>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link href="/services">
                    <a className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                      查看详细服务
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const guides = getAllCountryGuides();
  
  const paths = guides.map((guide) => ({
    params: { id: guide.id },
  }));
  
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const guide = getCountryGuideById(params?.id as string);
  
  if (!guide) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      guide,
    },
    revalidate: 86400, // 每天重新生成页面
  };
}; 