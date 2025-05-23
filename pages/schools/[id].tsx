import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { School } from '../../types';
import { getAllSchools, getSchoolById } from '../../lib/schools';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

interface SchoolPageProps {
  school: School;
}

export default function SchoolPage({ school }: SchoolPageProps) {
  if (!school) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">学校未找到</h1>
          <p className="text-gray-600 mb-6">
            抱歉，我们无法找到您请求的学校信息。它可能已被移除或链接错误。
          </p>
          <Link href="/schools">
            <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              返回学校列表
            </a>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${school.name} - 学历认证服务平台`}
        description={`了解${school.name}的详细信息、认证要求和申请流程。我们提供专业的学历认证服务。`}
        keywords={[school.name, '学历认证', '留学申请', school.country, ...(school.specialties || [])]}
      />

      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-4">
            <Link href="/schools">
              <a className="inline-flex items-center text-blue-600 hover:text-blue-800">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                </svg>
                返回学校列表
              </a>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 w-full">
              {school.imageUrl ? (
                <Image
                  src={school.imageUrl}
                  alt={school.name}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              ) : (
                <div className="bg-gray-300 h-full w-full flex items-center justify-center">
                  <span className="text-gray-500 text-xl font-medium">{school.name}</span>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{school.name}</h1>
                {school.ranking && (
                  <span className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full text-sm">
                    全球排名: #{school.ranking}
                  </span>
                )}
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <span>{school.country} {school.city}</span>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">学校介绍</h2>
                <p className="text-gray-600">{school.description}</p>
              </div>

              {school.specialties && school.specialties.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">优势专业</h2>
                  <div className="flex flex-wrap gap-2">
                    {school.specialties.map((specialty, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {school.accreditation && school.accreditation.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">认证与资格</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {school.accreditation.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {school.website && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">官方网站</h2>
                  <a href={school.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                    {school.website}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* 认证服务卡片 */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">学历认证服务</h3>
              <p className="text-gray-600 mb-4">
                我们提供专业的{school.name}学历认证服务，确保您的学历在全球范围内得到认可和承认。
              </p>
              <Link href="/contact">
                <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  了解详情
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">申请指导服务</h3>
              <p className="text-gray-600 mb-4">
                让我们的专业顾问指导您完成{school.name}的申请流程，提高录取成功率。
              </p>
              <Link href="/contact">
                <a className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
                  获取咨询
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-600">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600 mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">一对一咨询</h3>
              <p className="text-gray-600 mb-4">
                与我们的专家进行一对一咨询，解答关于{school.name}的所有疑问，制定个性化的规划。
              </p>
              <Link href="/contact">
                <a className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
                  预约咨询
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>

          {/* CTA区域 */}
          <div className="mt-12 bg-blue-700 rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="px-6 py-8 md:p-12 md:w-2/3">
                <h2 className="text-2xl font-bold text-white mb-2">需要关于{school.name}的专业指导？</h2>
                <p className="text-blue-100 mb-6">
                  我们的专家团队随时为您提供帮助，无论是学历认证、申请流程还是就业规划，让我们一起实现您的目标。
                </p>
                <Link href="/contact">
                  <a className="inline-block bg-white text-blue-700 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors">
                    联系我们
                  </a>
                </Link>
              </div>
              <div className="hidden md:block md:w-1/3 bg-blue-800 p-12">
                <div className="h-full flex items-center justify-center">
                  <svg className="w-24 h-24 text-white opacity-20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
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
  const schools = getAllSchools();
  
  const paths = schools.map((school) => ({
    params: { id: school.id },
  }));
  
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const school = getSchoolById(params?.id as string);
  
  if (!school) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      school,
    },
    // 每小时重新生成页面
    revalidate: 3600, 
  };
}; 