'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { schoolsData } from '../../../data/schools';

// 翻译内容
const translations = {
  zh: {
    title: "全球认证高校资源库",
    subtitle: "支持真实学历验证的全球院校，一键对接认证顾问，快速拿证",
    statsText: "已收录",
    schoolsText: "所全球知名院校",
    searchPlaceholder: "🔍 搜索学校名称、地区、专业或特色优势...",
    searchTips: "💡 搜索技巧：输入\"MIT\"查找麻省理工、\"商业管理\"查找相关专业、\"硅谷\"查找地区院校",
    filterCountry: "🌍 选择国家/地区",
    filterDegree: "🎓 选择学历类型", 
    filterMajor: "📚 选择专业方向",
    filterRank: "📊 QS排名范围",
    sortBy: "🔢 QS排名排序",
    found: "找到",
    schoolsMatch: "所符合条件的学校",
    pageInfo: "(第 {start} - {end} 所，共 {total} 页)",
    viewDetails: "📋 查看详情",
    contactNow: "💬 立即咨询",
    verified: "✅ 真实可查",
    fastDelivery: "⚡ 7天出证",
    hot: "🔥 热门",
    majorsMore: "+{count}个专业",
    prevPage: "上一页",
    nextPage: "下一页",
    faqTitle: "常见问题",
    faq1Q: "认证周期多久？",
    faq1A: "一般认证周期为7-15个工作日，加急服务可缩短至3-5个工作日。",
    faq2Q: "是否100%真实？",
    faq2A: "所有认证材料均真实可查，支持官方验证，确保100%真实有效。",
    consultText: "不知道怎么选学校？添加顾问获取1对1推荐方案",
    whatsappConsult: "📱 WhatsApp咨询",
    instantConsult: "📱 立即咨询",
    // 排序选项
    sortRankAsc: "排名升序 (1→200)",
    sortRankDesc: "排名降序 (200→1)",
    sortNameAsc: "学校名称 A→Z",
    sortNameDesc: "学校名称 Z→A",
    // QS排名范围选项
    rankAll: "全部排名",
    rankTop10New: "前10名 (1-10)",
    rankTop50New: "前50名 (11-50)",
    rankTop100New: "前100名 (51-100)",
    rankTop200New: "前200名 (101-200)",
    rankOtherNew: "200名以后",
    // Navigation
    home: "首页",
    schools: "院校数据库",
    guide: "快速领证服务",
    blog: "博客",
    contact: "联系我们"
  },
  en: {
    title: "Global Certified Universities Database",
    subtitle: "Worldwide institutions supporting authentic credential verification, one-click connection to certification advisors for fast processing",
    statsText: "Collected",
    schoolsText: "globally renowned universities",
    searchPlaceholder: "🔍 Search university names, regions, majors or key advantages...",
    searchTips: "💡 Search tips: Enter \"MIT\" to find MIT, \"Business Management\" for related majors, \"Silicon Valley\" for regional universities",
    filterCountry: "🌍 Select Country/Region",
    filterDegree: "🎓 Select Degree Type",
    filterMajor: "📚 Select Major Field",
    filterRank: "📊 QS Ranking Range", 
    sortBy: "🔢 Sort by QS Ranking",
    found: "Found",
    schoolsMatch: "matching universities",
    pageInfo: "(Showing {start} - {end} of {total} pages)",
    viewDetails: "📋 View Details",
    contactNow: "💬 Contact Now",
    verified: "✅ Verified",
    fastDelivery: "⚡ 7-day delivery",
    hot: "🔥 Popular",
    majorsMore: "+{count} majors",
    prevPage: "Previous",
    nextPage: "Next",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "How long does certification take?",
    faq1A: "Standard certification takes 7-15 business days, express service can reduce to 3-5 business days.",
    faq2Q: "Is it 100% authentic?",
    faq2A: "All certification materials are authentic and verifiable, supporting official verification, ensuring 100% authenticity.",
    consultText: "Not sure how to choose a university? Add advisor for 1-on-1 recommendation plan",
    whatsappConsult: "📱 WhatsApp Consult",
    instantConsult: "📱 Instant Consult",
    // 排序选项
    sortRankAsc: "Ranking Asc (1→200)",
    sortRankDesc: "Ranking Desc (200→1)",
    sortNameAsc: "School Name A→Z",
    sortNameDesc: "School Name Z→A",
    // QS排名范围选项
    rankAll: "All Rankings",
    rankTop10New: "Top 10 (1-10)",
    rankTop50New: "Top 50 (11-50)",
    rankTop100New: "Top 100 (51-100)",
    rankTop200New: "Top 200 (101-200)",
    rankOtherNew: "Beyond 200",
    // Navigation
    home: "Home",
    schools: "Schools Database",
    guide: "Fast Credential Service",
    blog: "Blog",
    contact: "Contact Us"
  }
};

export default function LocalizedSchools() {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh';
  const t = translations[locale as keyof typeof translations] || translations.zh;
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(locale === 'en' ? 'All' : '全部');
  const [selectedMajor, setSelectedMajor] = useState(locale === 'en' ? 'All' : '全部');
  const [qsRankRange, setQsRankRange] = useState(locale === 'en' ? 'All' : '全部');
  const [sortBy, setSortBy] = useState('rankAsc');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const itemsPerPage = 16;

  // 获取学校数据
  const schools = schoolsData[locale as keyof typeof schoolsData] || schoolsData.zh;

  // 国家列表
  const countries = locale === 'en' 
    ? ['All', 'United States', 'United Kingdom', 'Singapore', 'Japan', 'Canada', 'Australia', 'New Zealand', 'Hong Kong', 'Macau', 'Netherlands', 'Spain']
    : ['全部', '美国', '英国', '新加坡', '日本', '加拿大', '澳大利亚', '新西兰', '香港', '澳门', '荷兰', '西班牙'];

  // 专业类别
  const majorCategories = locale === 'en'
    ? ['All', 'Computer Science', 'Engineering', 'Business Management', 'Medicine', 'Law', 'Arts', 'Economics', 'Architecture', 'Journalism', 'Psychology', 'Education', 'Social Sciences', 'Humanities', 'Natural Sciences', 'Life Sciences']
    : ['全部', '计算机科学', '工程学', '商业管理', '医学', '法学', '艺术学', '经济学', '建筑学', '新闻学', '心理学', '教育学', '社会科学', '人文学科', '自然科学', '生物科学'];

  // QS排名范围选项
  const qsRankRanges = locale === 'en'
    ? ['All', 'Top 10 (1-10)', 'Top 50 (11-50)', 'Top 100 (51-100)', 'Top 200 (101-200)', 'Beyond 200']
    : ['全部', '前10名 (1-10)', '前50名 (11-50)', '前100名 (51-100)', '前200名 (101-200)', '200名以后'];

  // 排序选项
  const sortOptions = locale === 'en'
    ? [
        { value: 'rankAsc', label: 'Ranking Asc (1→200)' },
        { value: 'rankDesc', label: 'Ranking Desc (200→1)' },
        { value: 'nameAsc', label: 'School Name A→Z' },
        { value: 'nameDesc', label: 'School Name Z→A' }
      ]
    : [
        { value: 'rankAsc', label: '排名升序 (1→200)' },
        { value: 'rankDesc', label: '排名降序 (200→1)' },
        { value: 'nameAsc', label: '学校名称 A→Z' },
        { value: 'nameDesc', label: '学校名称 Z→A' }
      ];

  // 筛选学校逻辑
  const filteredSchools = schools.filter(school => {
    const matchesSearch = !searchTerm || 
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.majors.some(major => major.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const neutralCountry = selectedCountry === (locale === 'en' ? 'All' : '全部');
    const matchesCountry = neutralCountry || school.country === selectedCountry;
    
    const neutralMajor = selectedMajor === (locale === 'en' ? 'All' : '全部');
    const matchesMajor = neutralMajor || school.majors.includes(selectedMajor);
    
    // QS排名范围筛选
    const neutralRank = qsRankRange === (locale === 'en' ? 'All' : '全部');
    let matchesRank = true;
    if (!neutralRank) {
      if (qsRankRange.includes('1-10') || qsRankRange.includes('前10名')) {
        matchesRank = school.qsRank >= 1 && school.qsRank <= 10;
      } else if (qsRankRange.includes('11-50') || qsRankRange.includes('前50名')) {
        matchesRank = school.qsRank >= 11 && school.qsRank <= 50;
      } else if (qsRankRange.includes('51-100') || qsRankRange.includes('前100名')) {
        matchesRank = school.qsRank >= 51 && school.qsRank <= 100;
      } else if (qsRankRange.includes('101-200') || qsRankRange.includes('前200名')) {
        matchesRank = school.qsRank >= 101 && school.qsRank <= 200;
      } else if (qsRankRange.includes('Beyond 200') || qsRankRange.includes('200名以后')) {
        matchesRank = school.qsRank > 200;
      }
    }
    
    return matchesSearch && matchesCountry && matchesMajor && matchesRank;
  });

  // 排序逻辑
  const sortedSchools = [...filteredSchools].sort((a, b) => {
    switch (sortBy) {
      case 'rankAsc':
        return a.qsRank - b.qsRank;
      case 'rankDesc':
        return b.qsRank - a.qsRank;
      case 'nameAsc':
        return a.name.localeCompare(b.name);
      case 'nameDesc':
        return b.name.localeCompare(a.name);
      default:
        return a.qsRank - b.qsRank;
    }
  });

  // 获取当前页的学校
  const totalPages = Math.ceil(sortedSchools.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSchools = sortedSchools.slice(startIndex, endIndex);

  // 重置分页当筛选条件改变时
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCountry, selectedMajor, qsRankRange, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo - 左侧 */}
            <Link className="flex items-center" href={`/${locale}`}>
              <span className="text-xl font-bold text-blue-600">Acaboost</span>
            </Link>
            
            {/* 主要导航链接 - 居中 */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}`}>
                  {t.home}
                </Link>
                <Link className="text-sm font-medium transition-colors text-blue-600" href={`/${locale}/schools`}>
                  {t.schools}
                </Link>
                <Link className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href={`/${locale}/guide`}>
                  {t.guide}
                </Link>
                <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/blog`}>
                  {t.blog}
                </Link>
                <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/contact`}>
                  {t.contact}
                </Link>
              </div>
            </div>
            
            {/* 右侧操作区 */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="flex items-center space-x-1 border border-gray-200 rounded-lg p-1">
                <Link 
                  href="/zh/schools" 
                  className={`px-3 py-1 rounded text-sm transition-all ${locale === 'zh' ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                >
                  中文
                </Link>
                <Link 
                  href="/en/schools" 
                  className={`px-3 py-1 rounded text-sm transition-all ${locale === 'en' ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                >
                  EN
                </Link>
              </div>
              
              {/* WhatsApp Button */}
              <Link
                href={`https://wa.me/1234567890?text=${locale === 'en' ? 'Hello, I would like to inquire about academic credential services.' : '您好，我想咨询学历认证服务，希望了解适合我的学历方案'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
                {t.whatsappConsult}
              </Link>
            </div>
            
            {/* 移动端菜单按钮 */}
            <button className="md:hidden text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl md:text-2xl mb-8">{t.subtitle}</p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
              <p className="text-lg">{t.statsText} <span className="font-bold text-yellow-300">{schools.length}</span> {t.schoolsText}</p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {/* 搜索框 */}
            <div className="mb-8 relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input 
                  type="text" 
                  placeholder={t.searchPlaceholder}
                  className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-sm" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">{t.searchTips}</p>
              </div>
            </div>
            
            {/* 筛选和排序选项 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* 国家筛选 */}
              <select 
                className="border-2 border-gray-200 rounded-lg p-3 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value={locale === 'en' ? 'All' : '全部'}>{t.filterCountry}</option>
                {countries.slice(1).map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>

              {/* 专业方向筛选 */}
              <select 
                className="border-2 border-gray-200 rounded-lg p-3 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                value={selectedMajor}
                onChange={(e) => setSelectedMajor(e.target.value)}
              >
                <option value={locale === 'en' ? 'All' : '全部'}>{t.filterMajor}</option>
                {majorCategories.slice(1).map(major => (
                  <option key={major} value={major}>{major}</option>
                ))}
              </select>

              {/* QS排名范围筛选 */}
              <select 
                className="border-2 border-gray-200 rounded-lg p-3 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                value={qsRankRange}
                onChange={(e) => setQsRankRange(e.target.value)}
              >
                <option value={locale === 'en' ? 'All' : '全部'}>{t.filterRank}</option>
                {qsRankRanges.slice(1).map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>

              {/* QS排名排序 */}
              <select 
                className="border-2 border-gray-200 rounded-lg p-3 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 text-lg">
                {t.found} <span className="font-semibold text-blue-600 text-xl">{sortedSchools.length}</span> {t.schoolsMatch}
              </p>
              {totalPages > 1 && (
                <p className="text-sm text-gray-500 mt-2">
                  {t.pageInfo.replace('{start}', String(startIndex + 1)).replace('{end}', String(Math.min(endIndex, sortedSchools.length))).replace('{total}', String(totalPages))}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Schools Grid */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentSchools.map((school) => (
                <div 
                  key={school.id} 
                  className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`px-2 py-1 rounded text-xs font-bold ${
                          school.qsRank <= 10 ? 'bg-yellow-100 text-yellow-800' :
                          school.qsRank <= 50 ? 'bg-green-100 text-green-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          QS #{school.qsRank}
                        </div>
                        {school.qsRank <= 20 && (
                          <div className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-bold animate-pulse">
                            {t.hot}
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">{school.country}</div>
                    </div>

                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {school.name}
                    </h3>

                    <div className="mb-3">
                      <p className="text-sm text-blue-600 font-medium mb-1">🎯 {school.specialty}</p>
                      <p className="text-xs text-gray-600 line-clamp-2">{school.keyAdvantage}</p>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {school.majors.slice(0, 3).map((major, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            {major}
                          </span>
                        ))}
                        {school.majors.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            {t.majorsMore.replace('{count}', String(school.majors.length - 3))}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Link 
                        href={`/${locale}/schools/${school.id}`}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      >
                        {t.viewDetails}
                      </Link>
                      <Link 
                        href={`https://wa.me/1234567890?text=${locale === 'en' ? `Hello, I am interested in ${school.name} credential services.` : `您好，我对${school.name}的学历认证服务感兴趣，希望了解详细方案。`}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                      >
                        {t.contactNow}
                      </Link>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{t.verified}</span>
                        <span>{t.fastDelivery}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 分页控件 */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {t.prevPage}
                </button>
                
                <div className="flex space-x-2">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-2 rounded-lg transition-colors ${
                          currentPage === pageNum
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {t.nextPage}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">{t.faqTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold mb-2">{t.faq1Q}</h3>
                <p className="text-gray-600">{t.faq1A}</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold mb-2">{t.faq2Q}</h3>
                <p className="text-gray-600">{t.faq2A}</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl mb-6">{t.consultText}</p>
              <Link 
                href={`https://wa.me/1234567890?text=${locale === 'en' ? 'Hello, I need help choosing the right university for credential services.' : '您好，我需要帮助选择适合的学校进行学历认证服务。'}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                {t.whatsappConsult}
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {locale === 'en' ? 'About Us' : '关于我们'}
              </h3>
              <p className="text-gray-400">
                {locale === 'en' 
                  ? 'Professional global academic credential services, 7-day fast delivery, 100% authentic and verifiable.'
                  : '专业提供全球学历认证服务，7天快速交付，确保100%真实可查。'
                }
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {locale === 'en' ? 'Quick Links' : '快速链接'}
              </h3>
              <ul className="space-y-2">
                <li><Link className="text-gray-400 hover:text-white transition-colors" href={`/${locale}`}>{t.home}</Link></li>
                <li><Link className="text-gray-400 hover:text-white transition-colors" href={`/${locale}/schools`}>{t.schools}</Link></li>
                <li><Link className="text-gray-400 hover:text-white transition-colors" href={`/${locale}/contact`}>{t.contact}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {locale === 'en' ? 'Contact Info' : '联系方式'}
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <Link 
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp: +1 234 567 890
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link className="hover:text-white transition-colors" href="mailto:contact@acaboost.com">
                    Email: contact@acaboost.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Acaboost. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Link
        href={`https://wa.me/1234567890?text=${locale === 'en' ? 'Hello, I would like to inquire about academic credential services.' : '您好，我想咨询学历认证服务'}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
        </svg>
      </Link>
    </div>
  );
} 