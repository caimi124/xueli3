import React, { useState, useMemo } from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Image from 'next/image';
import Link from 'next/link';

// 学校数据
const schools = [
  {
    id: 1,
    name: 'University of Melbourne',
    chineseName: '墨尔本大学',
    country: '澳大利亚',
    logo: '/images/placeholder.png',
    qsRank: 13,
    degrees: ['本科', '硕士', '博士'],
    specialties: ['商科', '工程', '医学'],
    verified: true
  },
  {
    id: 2,
    name: 'University of Birmingham',
    chineseName: '伯明翰大学',
    country: '英国',
    logo: '/images/placeholder.png',
    qsRank: 91,
    degrees: ['本科', '硕士'],
    specialties: ['商科', '计算机'],
    verified: true
  },
  {
    id: 3,
    name: 'University of Toronto',
    chineseName: '多伦多大学',
    country: '加拿大',
    logo: '/images/placeholder.png',
    qsRank: 21,
    degrees: ['本科', '硕士', '博士'],
    specialties: ['商科', '医学', '工程'],
    verified: true
  },
  {
    id: 4,
    name: 'National University of Singapore',
    chineseName: '新加坡国立大学',
    country: '新加坡',
    logo: '/images/placeholder.png',
    qsRank: 8,
    degrees: ['本科', '硕士', '博士'],
    specialties: ['商科', '工程', '计算机'],
    verified: true
  },
  {
    id: 5,
    name: 'University of Sydney',
    chineseName: '悉尼大学',
    country: '澳大利亚',
    logo: '/images/placeholder.png',
    qsRank: 19,
    degrees: ['本科', '硕士', '博士'],
    specialties: ['商科', '医学', '法律'],
    verified: true
  },
  {
    id: 6,
    name: 'University of Manchester',
    chineseName: '曼彻斯特大学',
    country: '英国',
    logo: '/images/placeholder.png',
    qsRank: 32,
    degrees: ['本科', '硕士', '博士'],
    specialties: ['商科', '工程', '计算机'],
    verified: true
  },
  {
    id: 7,
    name: 'University of British Columbia',
    chineseName: '英属哥伦比亚大学',
    country: '加拿大',
    logo: '/images/placeholder.png',
    qsRank: 34,
    degrees: ['本科', '硕士', '博士'],
    specialties: ['商科', '工程', '医学'],
    verified: true
  },
  {
    id: 8,
    name: 'University of Malaya',
    chineseName: '马来亚大学',
    country: '马来西亚',
    logo: '/images/placeholder.png',
    qsRank: 65,
    degrees: ['本科', '硕士'],
    specialties: ['商科', '工程', '医学'],
    verified: true
  },
  {
    id: 9,
    name: 'Monash University',
    chineseName: '莫纳什大学',
    country: '澳大利亚',
    logo: '/images/placeholder.png',
    qsRank: 42,
    degrees: ['本科', '硕士', '博士'],
    specialties: ['商科', '工程', '医学'],
    verified: true
  },
  {
    id: 10,
    name: 'University of Edinburgh',
    chineseName: '爱丁堡大学',
    country: '英国',
    logo: '/images/placeholder.png',
    qsRank: 22,
    degrees: ['本科', '硕士', '博士'],
    specialties: ['商科', '计算机', '医学'],
    verified: true
  },
  {
    id: 11,
    name: 'McGill University',
    chineseName: '麦吉尔大学',
    country: '加拿大',
    logo: '/images/placeholder.png',
    qsRank: 31,
    degrees: ['本科', '硕士', '博士'],
    specialties: ['商科', '医学', '工程'],
    verified: true
  },
  {
    id: 12,
    name: 'Nanyang Technological University',
    chineseName: '南洋理工大学',
    country: '新加坡',
    logo: '/images/placeholder.png',
    qsRank: 26,
    degrees: ['本科', '硕士', '博士'],
    specialties: ['工程', '计算机', '商科'],
    verified: true
  }
];

// 筛选选项
const countries = ['全部', '英国', '澳大利亚', '加拿大', '美国', '新加坡', '马来西亚'];
const degreeTypes = ['全部', '大专', '本科', '硕士', '博士'];
const specialties = ['全部', '商科', '工程', '计算机', '医学', '艺术', '教育'];

// 认证类型
const certificationTypes = ['毕业证', '学位证', '成绩单'];

// 分类标签
const categories = [
  { id: 'all', name: '全部学校' },
  { id: 'hot', name: '热门推荐' },
  { id: 'fast', name: '快速拿证' },
  { id: 'medical', name: '医学类' },
  { id: 'business', name: '商科类' },
  { id: 'engineering', name: '工程类' }
];

export default function SchoolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('全部');
  const [selectedDegree, setSelectedDegree] = useState('全部');
  const [selectedSpecialty, setSelectedSpecialty] = useState('全部');
  const [showSuccessCases, setShowSuccessCases] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const schoolsPerPage = 9;

  // 过滤和搜索逻辑
  const filteredSchools = useMemo(() => {
    return schools.filter(school => {
      const matchesSearch = searchQuery === '' || 
        school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.chineseName.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCountry = selectedCountry === '全部' || school.country === selectedCountry;
      const matchesDegree = selectedDegree === '全部' || school.degrees.includes(selectedDegree);
      const matchesSpecialty = selectedSpecialty === '全部' || school.specialties.includes(selectedSpecialty);
      
      // 分类过滤
      let matchesCategory = true;
      if (selectedCategory === 'hot') {
        matchesCategory = school.qsRank <= 50;
      } else if (selectedCategory === 'fast') {
        matchesCategory = school.verified;
      } else if (selectedCategory === 'medical') {
        matchesCategory = school.specialties.includes('医学');
      } else if (selectedCategory === 'business') {
        matchesCategory = school.specialties.includes('商科');
      } else if (selectedCategory === 'engineering') {
        matchesCategory = school.specialties.includes('工程');
      }

      return matchesSearch && matchesCountry && matchesDegree && matchesSpecialty && matchesCategory;
    });
  }, [searchQuery, selectedCountry, selectedDegree, selectedSpecialty, selectedCategory]);

  // 分页逻辑
  const totalPages = Math.ceil(filteredSchools.length / schoolsPerPage);
  const currentSchools = filteredSchools.slice(
    (currentPage - 1) * schoolsPerPage,
    currentPage * schoolsPerPage
  );

  const pageContent = (
    <>
      <SEO
        title="全球认证院校资源库 - 300+国际高校认证服务"
        description="提供全球300+所知名院校的学历认证服务，包括英国、澳大利亚、加拿大等国家的顶尖大学。"
        keywords={['学历认证', '国际院校', '大学认证', '留学认证', '学历办理']}
      />

      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">全球认证高校资源库</h1>
            <p className="text-xl md:text-2xl mb-8">支持真实学历验证的全球院校，一键对接认证顾问，快速拿证</p>
          </div>
        </section>

        {/* 搜索和筛选区域 */}
        <section className="py-8 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {/* 搜索框 */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="搜索学校名称..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* 分类标签 */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* 筛选条件 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <select 
                className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                {countries.map(country => (
                  <option key={country} value={country}>
                    {country === '全部' ? '选择国家/地区' : country}
                  </option>
                ))}
              </select>
              <select 
                className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedDegree}
                onChange={(e) => setSelectedDegree(e.target.value)}
              >
                {degreeTypes.map(degree => (
                  <option key={degree} value={degree}>
                    {degree === '全部' ? '选择学历类型' : degree}
                  </option>
                ))}
              </select>
              <select 
                className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>
                    {specialty === '全部' ? '选择专业方向' : specialty}
                  </option>
                ))}
              </select>
            </div>

            {/* 成功案例筛选 */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="successCases"
                checked={showSuccessCases}
                onChange={(e) => setShowSuccessCases(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="successCases" className="text-gray-600">
                仅显示有成功案例的学校
              </label>
            </div>
          </div>
        </section>

        {/* 学校列表 */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentSchools.map(school => (
                <div key={school.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                  <div className="relative h-16 mb-4">
                    <Image
                      src={school.logo}
                      alt={school.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{school.name}</h3>
                  <p className="text-gray-600 mb-2">{school.chineseName}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="mr-4">🌍 {school.country}</span>
                    <span>🏆 QS排名: {school.qsRank}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {certificationTypes.map(type => (
                      <span key={type} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
                        {type}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-green-600 mb-4">
                    <span className="mr-1">✔</span>
                    已办理20+例
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/schools/${school.id}`}>
                      <a className="flex-1 bg-blue-600 text-white text-center rounded-lg py-2 hover:bg-blue-700 transition">
                        查看详情
                      </a>
                    </Link>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-blue-600 text-blue-600 text-center rounded-lg py-2 hover:bg-blue-50 transition"
                    >
                      立即咨询
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* 分页控件 */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* FAQ + 引导CTA */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">常见问题</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold mb-2">认证周期多久？</h3>
                <p className="text-gray-600">一般认证周期为7-15个工作日，加急服务可缩短至3-5个工作日。</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold mb-2">是否100%真实？</h3>
                <p className="text-gray-600">所有认证材料均真实可查，支持官方验证，确保100%真实有效。</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl mb-6">不知道怎么选学校？添加顾问获取1对1推荐方案</p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                <span className="mr-2">📱</span>
                WhatsApp咨询
              </a>
            </div>
          </div>
        </section>

        {/* 浮动 WhatsApp 按钮 */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg z-50 flex items-center"
        >
          <span className="mr-2">📱</span>
          立即咨询
        </a>
      </main>
    </>
  );

  return <Layout>{pageContent}</Layout>;
} 