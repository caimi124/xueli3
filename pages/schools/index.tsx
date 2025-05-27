import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { schools, School } from '@/data/schools';

const SchoolsPage: NextPage = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCountries, setSelectedCountries] = React.useState<string[]>([]);
  const [selectedMajors, setSelectedMajors] = React.useState<string[]>([]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const values = Array.from(e.target.selectedOptions, (option: HTMLOptionElement) => option.value);
    setSelectedCountries(values);
  };

  const handleMajorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const values = Array.from(e.target.selectedOptions, (option: HTMLOptionElement) => option.value);
    setSelectedMajors(values);
  };

  const filteredSchools = schools.filter((school: School) => {
    const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(school.country);
    const matchesMajor = selectedMajors.length === 0 || school.majors.some(major => selectedMajors.includes(major));
    return matchesSearch && matchesCountry && matchesMajor;
  });

  return (
    <Layout>
      <SEO 
        title="全球顶尖院校认证服务 | Acaboost"
        description="提供全球顶尖院校的学历认证服务，包括MIT、哈佛、牛津等世界一流大学。快速、专业、可靠的认证解决方案。"
        keywords={["学历认证", "学校认证", "MIT认证", "哈佛认证", "牛津认证", "剑桥认证", "斯坦福认证"]}
      />
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">全球顶尖院校认证服务</h1>
          <p className="text-xl md:text-2xl mb-8">为您的学历提供专业、可靠的认证解决方案</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">搜索学校</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="输入学校名称..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">选择国家</label>
              <select
                multiple
                value={selectedCountries}
                onChange={handleCountryChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="美国">美国</option>
                <option value="英国">英国</option>
                <option value="加拿大">加拿大</option>
                <option value="澳大利亚">澳大利亚</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">选择专业</label>
              <select
                multiple
                value={selectedMajors}
                onChange={handleMajorChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="计算机科学">计算机科学</option>
                <option value="商业管理">商业管理</option>
                <option value="工程学">工程学</option>
                <option value="医学">医学</option>
              </select>
            </div>
          </div>
        </div>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSchools.map((school: School) => (
            <Link href={`/schools/${school.slug}`} key={school.name}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={school.logo}
                    alt={school.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{school.name}</h3>
                  <p className="text-gray-600 mb-4">{school.country}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">QS排名: {school.qsRanking}</span>
                    <span className="text-blue-600 font-medium">查看详情 →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="bg-green-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">需要帮助？</h2>
          <p className="text-xl mb-6">我们的顾问随时为您提供专业支持</p>
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
          >
            立即咨询
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">认证需要多长时间？</h3>
            <p className="text-gray-600">一般情况下，认证过程需要5-7个工作日。加急服务可在3个工作日内完成。</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">认证费用是多少？</h3>
            <p className="text-gray-600">认证费用根据学校类型和认证级别有所不同。请联系我们的顾问获取详细报价。</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SchoolsPage; 