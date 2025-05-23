import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { School, SchoolFilter } from '../../types';
import { getAllSchools, getAvailableCountries, getAvailableSpecialties, filterSchools } from '../../lib/schools';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import SchoolCard from '../../components/schools/SchoolCard';
import SchoolFilterComponent from '../../components/schools/SchoolFilter';

interface SchoolsPageProps {
  schools: School[];
  countries: string[];
  specialties: string[];
}

export default function SchoolsPage({ schools, countries, specialties }: SchoolsPageProps) {
  const [filteredSchools, setFilteredSchools] = useState<School[]>(schools);
  const [filter, setFilter] = useState<SchoolFilter>({ countries: [], specialties: [], search: '' });

  useEffect(() => {
    const results = filterSchools(filter.countries, filter.specialties, filter.search);
    setFilteredSchools(results);
  }, [filter]);

  const handleFilterChange = (newFilter: SchoolFilter) => {
    setFilter(newFilter);
  };

  return (
    <Layout>
      <SEO
        title="院校数据库 - 学历认证服务平台"
        description="浏览我们精选的全球知名院校数据库，按国家、专业和排名查找适合您的学校。"
        keywords={['学校', '大学', '院校数据库', '留学申请', '学历认证']}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">全球优质院校数据库</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            浏览我们精选的全球知名院校，获取详细信息和认证指南。无论您是计划留学还是需要学历认证，我们都能为您提供专业支持。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <SchoolFilterComponent 
                countries={countries} 
                specialties={specialties} 
                onFilterChange={handleFilterChange} 
              />
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">需要帮助？</h3>
                    <div className="mt-2 text-xs text-blue-700">
                      <p>我们提供专业的学校选择咨询和认证服务，帮助您选择最适合的学校和专业。</p>
                      <a href="/contact" className="block mt-2 font-medium hover:text-blue-900">联系我们获取建议 →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            {filteredSchools.length > 0 ? (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-700">
                    找到 <span className="font-medium">{filteredSchools.length}</span> 所符合条件的学校
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredSchools.map((school) => (
                    <SchoolCard key={school.id} school={school} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">未找到符合条件的学校</h3>
                <p className="mt-1 text-gray-500">请尝试调整筛选条件或清除全部筛选。</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const schools = getAllSchools();
  const countries = getAvailableCountries();
  const specialties = getAvailableSpecialties();

  return {
    props: {
      schools,
      countries,
      specialties,
    },
    // 每小时重新生成页面
    revalidate: 3600,
  };
}; 