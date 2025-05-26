import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default function SchoolsPage() {
  // 学校数据
  const schoolsData = [
    // 美国
    { id: 1, country: '美国', name: '麻省理工学院 (MIT)', qsRanking: 1, worldRanking: 2, countryRanking: 2, fields: '电子工程、计算机科学、顶尖科研' },
    { id: 2, country: '美国', name: '哈佛大学', qsRanking: 4, worldRanking: 1, countryRanking: 3, fields: '法学、医学、商学、人文社科' },
    { id: 3, country: '美国', name: '斯坦福大学', qsRanking: 6, worldRanking: 3, countryRanking: 4, fields: '硅谷合作、计算机科学、工程学' },
    { id: 4, country: '美国', name: '宾夕法尼亚大学', qsRanking: 11, worldRanking: 14, countryRanking: 10, fields: '商学（沃顿商学院）、医学' },
    { id: 5, country: '美国', name: '加州大学伯克利分校', qsRanking: 12, worldRanking: 5, countryRanking: 17, fields: '工程学、环境科学、公立顶尖' },
    { id: 6, country: '美国', name: '康奈尔大学', qsRanking: 16, worldRanking: 19, countryRanking: 11, fields: '农业、酒店管理、藤校资源' },
    { id: 7, country: '美国', name: '芝加哥大学', qsRanking: 21, worldRanking: 25, countryRanking: 11, fields: '经济学、社会学、诺贝尔奖得主多' },
    // 新加坡
    { id: 30, country: '新加坡', name: '新加坡国立大学 (NUS)', qsRanking: 8, worldRanking: 22, countryRanking: 1, fields: '工程、计算机科学、亚洲顶尖' },
    { id: 31, country: '新加坡', name: '南洋理工大学 (NTU)', qsRanking: 15, worldRanking: 27, countryRanking: 2, fields: '人工智能、材料科学' },
    // 日本
    { id: 32, country: '日本', name: '东京大学', qsRanking: 32, worldRanking: 84, countryRanking: 2, fields: '自然科学、工程学' },
    { id: 33, country: '日本', name: '东京工业大学', qsRanking: 84, worldRanking: 445, countryRanking: 4, fields: '工程、计算机科学' },
    { id: 34, country: '日本', name: '大阪大学', qsRanking: 86, worldRanking: 315, countryRanking: 3, fields: '医学、基础科学' },
    // 加拿大
    { id: 35, country: '加拿大', name: '多伦多大学', qsRanking: 25, worldRanking: 17, countryRanking: 1, fields: '医学、计算机科学、多元文化' },
    { id: 36, country: '加拿大', name: '麦吉尔大学', qsRanking: 29, worldRanking: 56, countryRanking: 3, fields: '医学、法学、加拿大哈佛' },
    { id: 37, country: '加拿大', name: '英属哥伦比亚大学 (UBC)', qsRanking: 38, worldRanking: 39, countryRanking: 2, fields: '环境科学、海洋学、温哥华地理位置' },
    // 英国
    { id: 45, country: '英国', name: '牛津大学', qsRanking: 3, worldRanking: 4, countryRanking: 2, fields: '人文社科、医学、导师制' },
    { id: 46, country: '英国', name: '剑桥大学', qsRanking: 5, worldRanking: 6, countryRanking: 1, fields: '自然科学、经济学' },
    { id: 47, country: '英国', name: '帝国理工学院', qsRanking: 2, worldRanking: 12, countryRanking: 5, fields: '工程、医学、商学' },
    { id: 48, country: '英国', name: '伦敦大学学院 (UCL)', qsRanking: 9, worldRanking: 7, countryRanking: 9, fields: '教育学、建筑学、医学' },
    { id: 49, country: '英国', name: '爱丁堡大学', qsRanking: 27, worldRanking: 38, countryRanking: 15, fields: '人工智能、文学' },
    // 澳大利亚
    { id: 60, country: '澳大利亚', name: '墨尔本大学', qsRanking: 13, worldRanking: 27, countryRanking: 1, fields: '法学、医学、商学' },
    { id: 61, country: '澳大利亚', name: '悉尼大学', qsRanking: 18, worldRanking: 29, countryRanking: 3, fields: '医学、人文社科、悉尼市中心' },
    { id: 62, country: '澳大利亚', name: '新南威尔士大学', qsRanking: 19, worldRanking: 36, countryRanking: 2, fields: '工程学、太阳能研究' },
    { id: 63, country: '澳大利亚', name: '澳大利亚国立大学', qsRanking: 30, worldRanking: 85, countryRanking: 4, fields: '政治学、自然科学' },
    // 香港
    { id: 70, country: '香港', name: '香港大学 (HKU)', qsRanking: 17, worldRanking: 44, countryRanking: 1, fields: '医学、法学、商学' },
    { id: 71, country: '香港', name: '香港中文大学 (CUHK)', qsRanking: 36, worldRanking: 42, countryRanking: 2, fields: '人文社科、计算机科学' },
    { id: 72, country: '香港', name: '香港科技大学 (HKUST)', qsRanking: 47, worldRanking: 105, countryRanking: 3, fields: '工程学、商学' },
    // 中间省略更多学校数据，可以根据需要继续增加
  ];

  // 筛选和排序状态
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [sortBy, setSortBy] = useState('qsRanking');
  const [sortDirection, setSortDirection] = useState('asc');

  // 提取所有国家/地区列表
  const countries = useMemo(() => {
    const countrySet = new Set(schoolsData.map(school => school.country));
    return ['全部', ...Array.from(countrySet)];
  }, [schoolsData]);

  // 筛选和排序数据
  const filteredAndSortedSchools = useMemo(() => {
    // 首先筛选
    let result = schoolsData.filter(school => {
      // 搜索词筛选
      const matchesSearch = searchTerm === '' || 
        school.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        school.fields.toLowerCase().includes(searchTerm.toLowerCase());
      
      // 国家/地区筛选
      const matchesCountry = selectedCountry === '' || selectedCountry === '全部' || school.country === selectedCountry;
      
      return matchesSearch && matchesCountry;
    });
    
    // 然后排序
    result.sort((a, b) => {
      if (sortDirection === 'asc') {
        return a[sortBy] - b[sortBy];
      } else {
        return b[sortBy] - a[sortBy];
      }
    });
    
    return result;
  }, [schoolsData, searchTerm, selectedCountry, sortBy, sortDirection]);

  // 处理排序点击
  const handleSortClick = (column) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }
  };

  return (
    <Layout>
      <SEO
        title="全球学校资源库 - 学历认证服务平台"
        description="浏览我们全球顶尖学校资源库，包含各国知名大学QS排名、世界排名及优势学科信息。"
        keywords={['学校资源', '大学排名', 'QS排名', '世界大学', '顶尖学府', '学历认证选择']}
      />
      
      {/* 顶部横幅 */}
      <div className="bg-blue-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/schools-banner.jpg"
            alt="全球学校资源"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">全球学校资源库</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              浏览我们的学校数据库，选择最适合您的学历认证资源
            </p>
          </div>
        </div>
      </div>
      
      {/* 筛选和搜索区域 */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* 搜索框 */}
            <div className="md:w-1/3">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                搜索学校或专业
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                  placeholder="输入学校名称或专业关键词"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {/* 国家/地区筛选 */}
            <div className="md:w-1/3">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                国家/地区
              </label>
              <select
                id="country"
                className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            
            {/* 排序方式 */}
            <div className="md:w-1/3">
              <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1">
                排序方式
              </label>
              <select
                id="sortBy"
                className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setSortDirection('asc');
                }}
              >
                <option value="qsRanking">QS排名</option>
                <option value="worldRanking">世界排名</option>
                <option value="countryRanking">国家排名</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* 学校列表 */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    国家/地区
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    学校名称
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSortClick('qsRanking')}
                  >
                    <div className="flex items-center">
                      QS排名
                      {sortBy === 'qsRanking' && (
                        <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          {sortDirection === 'asc' ? (
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                          ) : (
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          )}
                        </svg>
                      )}
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSortClick('worldRanking')}
                  >
                    <div className="flex items-center">
                      世界排名
                      {sortBy === 'worldRanking' && (
                        <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          {sortDirection === 'asc' ? (
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                          ) : (
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          )}
                        </svg>
                      )}
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSortClick('countryRanking')}
                  >
                    <div className="flex items-center">
                      国家排名
                      {sortBy === 'countryRanking' && (
                        <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          {sortDirection === 'asc' ? (
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                          ) : (
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          )}
                        </svg>
                      )}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    优势领域/特点
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAndSortedSchools.map((school) => (
                  <tr key={school.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{school.country}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-blue-600 hover:text-blue-800">
                        {school.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{school.qsRanking}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{school.worldRanking}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{school.countryRanking}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">{school.fields}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* 没有找到结果时的提示 */}
          {filteredAndSortedSchools.length === 0 && (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">未找到符合条件的学校</h3>
              <p className="mt-1 text-gray-500">请尝试调整筛选条件或搜索关键词</p>
            </div>
          )}
        </div>
      </div>
      
      {/* 说明区域 */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">关于我们的学校资源</h2>
            <div className="prose prose-blue max-w-none">
              <p>
                我们提供来自全球各地的顶尖大学资源，这些院校经过严格筛选，确保学历认证的权威性和国际认可度。上述资源仅为部分展示，我们的完整资源库包含更多优质学校选择。
              </p>
              <p>
                学校排名数据来源于最新的QS世界大学排名、泰晤士高等教育世界大学排名等权威评估体系，数据定期更新以确保准确性。
              </p>
              <p>
                选择合适的学校对于您的学历认证至关重要，我们的专业顾问团队可以根据您的具体需求提供个性化建议，帮助您选择最适合的学历认证方案。
              </p>
            </div>
            
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    如需了解更详细的学校信息或有特殊需求，请联系我们的客服团队获得一对一咨询服务。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 