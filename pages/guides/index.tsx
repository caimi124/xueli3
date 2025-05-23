import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllCountryGuides } from '../../lib/guides';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

interface GuidesPageProps {
  guides: any[]; // 使用CountryGuide类型，但目前先用any[]避免导入问题
}

export default function GuidesPage({ guides }: GuidesPageProps) {
  return (
    <Layout>
      <SEO
        title="国家认证指南 - 学历认证服务平台"
        description="查看全球各国的学历认证详细指南，了解认证流程、材料、费用和注意事项。"
        keywords={['学历认证指南', '留学认证', '各国认证流程', '认证要求', '学士学位认证服务', '硕士学位办理流程', 'MBA学历认证费用', '博士学位国际认证', '紧急加急学历认证']}
      />
      
      <div className="bg-blue-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/world-map.jpg"
            alt="世界地图背景"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">全球学历认证指南</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              详细了解各国学历认证的流程、要求和注意事项，助您顺利完成认证
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-700 mb-6">
            学历认证是国际教育和就业的重要环节，不同国家的认证要求和流程各不相同。我们的专家团队整理了全面的国家认证指南，帮助您了解各目标国家的学历认证系统，确保您的学历得到国际认可。
          </p>
          <p className="text-gray-700">
            选择下方任一国家指南，了解该国的认证机构、所需文件、处理时间、费用和专家建议。如有任何疑问，欢迎<Link href="/contact"><a className="text-blue-600 hover:underline">联系我们</a></Link>获取个性化咨询。
          </p>
        </div>
        
        {guides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <div key={guide.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/guides/${guide.id}`}>
                  <a className="block">
                    <div className="relative h-48">
                      {guide.coverImage ? (
                        <Image
                          src={guide.coverImage}
                          alt={guide.country}
                          layout="fill"
                          objectFit="cover"
                        />
                      ) : (
                        <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                          <span className="text-5xl">{guide.flag}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center">
                          <span className="text-3xl mr-2">{guide.flag}</span>
                          <h2 className="text-xl font-bold text-white">{guide.country}学历认证指南</h2>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-700 mb-4 line-clamp-3">
                        {guide.content.overview.substring(0, 150)}...
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                          </svg>
                          <span>{guide.content.timeframe.split('，')[0]}</span>
                        </div>
                        
                        <span className="inline-flex items-center text-blue-600">
                          查看详情
                          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">暂无认证指南</h3>
            <p className="mt-1 text-gray-500">我们正在努力添加更多国家的认证指南，请稍后再来查看。</p>
          </div>
        )}
        
        {/* 询问部分 */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">没有找到您需要的国家指南？</h2>
              <p className="text-gray-700">
                如果您需要的国家指南尚未列出，或您有特定的认证需求，请不要犹豫，立即联系我们的专家团队。我们将根据您的具体情况提供个性化的解决方案和专业建议。
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Link href="/contact">
                <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  联系我们获取帮助
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const guides = getAllCountryGuides();
  
  return {
    props: {
      guides,
    },
    // 每天重新生成页面
    revalidate: 86400,
  };
}; 