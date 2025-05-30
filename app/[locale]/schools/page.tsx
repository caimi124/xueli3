'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

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
    rankTop10: "🏆 Top 10 (1-10名)",
    rankTop50: "🥇 Top 50 (11-50名)",
    rankTop100: "🥈 Top 100 (51-100名)",
    rankTop200: "🥉 Top 200 (101-200名)",
    rankOther: "📚 其他 (200名以后)",
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
    rankTop10: "🏆 Top 10 (1-10)",
    rankTop50: "🥇 Top 50 (11-50)",
    rankTop100: "🥈 Top 100 (51-100)",
    rankTop200: "🥉 Top 200 (101-200)",
    rankOther: "📚 Others (200+)",
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
  const [selectedDegree, setSelectedDegree] = useState(locale === 'en' ? 'All' : '全部');
  const [selectedMajor, setSelectedMajor] = useState(locale === 'en' ? 'All' : '全部');
  const [qsRankRange, setQsRankRange] = useState(locale === 'en' ? 'All' : '全部');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const itemsPerPage = 16;

  // 学校数据（这里只展示部分，实际应该包含完整的70所学校数据）
  const schools = [
    { 
      id: 1, 
      name: 'Massachusetts Institute of Technology (MIT)', 
      nameZh: '麻省理工学院 (MIT)',
      country: locale === 'en' ? 'United States' : '美国',
      location: locale === 'en' ? 'Massachusetts, Boston' : '马萨诸塞-波士顿',
      qsRank: 1, 
      majors: locale === 'en' 
        ? ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Physics', 'Mathematics', 'Bioengineering']
        : ['计算机科学', '电子工程', '机械工程', '物理学', '数学', '生物工程'],
      specialty: locale === 'en' ? 'Technology Innovation & Entrepreneurship' : '科技创新与创业',
      keyAdvantage: locale === 'en' ? 'Silicon Valley Express, Tech Giants\' Top Choice' : '硅谷直通车，科技巨头首选'
    },
    { 
      id: 2, 
      name: 'Harvard University', 
      nameZh: '哈佛大学',
      country: locale === 'en' ? 'United States' : '美国',
      location: locale === 'en' ? 'Massachusetts, Boston' : '马萨诸塞-波士顿',
      qsRank: 4, 
      majors: locale === 'en'
        ? ['Business Management', 'Economics', 'Medicine', 'Law', 'Psychology', 'Biology']
        : ['商业管理', '经济学', '医学', '法学', '心理学', '生物学'],
      specialty: locale === 'en' ? 'Business & Medicine' : '商科与医学',
      keyAdvantage: locale === 'en' ? 'Global Alumni Network, Political & Business Elite Choice' : '全球校友网络，政商界首选'
    },
    // 可以继续添加更多学校数据...
  ];

  // 国家列表
  const countries = locale === 'en' 
    ? ['All', 'United States', 'United Kingdom', 'Singapore', 'Australia', 'Canada', 'Japan', 'Hong Kong', 'New Zealand', 'Macau', 'Netherlands', 'Spain']
    : ['全部', '美国', '英国', '新加坡', '澳大利亚', '加拿大', '日本', '香港', '新西兰', '澳门', '荷兰', '西班牙'];

  // 专业类别
  const majorCategories = locale === 'en'
    ? ['All', 'Computer Science', 'Engineering', 'Business Management', 'Medicine', 'Law', 'Arts', 'Economics', 'Architecture', 'Journalism', 'Psychology', 'Education', 'Social Sciences', 'Humanities', 'Natural Sciences', 'Life Sciences']
    : ['全部', '计算机科学', '工程学', '商业管理', '医学', '法学', '艺术学', '经济学', '建筑学', '新闻学', '心理学', '教育学', '社会科学', '人文学科', '自然科学', '生物科学'];

  // 学历类型
  const degreeTypes = locale === 'en'
    ? ['All', 'Bachelor', 'Master', 'PhD', 'MBA', 'Associate']
    : ['全部', '本科', '硕士', '博士', 'MBA', '专科'];

  // 筛选学校逻辑（基于当前搜索条件）
  const filteredSchools = schools.filter(school => {
    const matchesSearch = !searchTerm || 
      (locale === 'en' ? school.name : school.nameZh).toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.majors.some(major => major.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const neutralCountry = selectedCountry === (locale === 'en' ? 'All' : '全部');
    const matchesCountry = neutralCountry || school.country === selectedCountry;
    
    const neutralMajor = selectedMajor === (locale === 'en' ? 'All' : '全部');
    const matchesMajor = neutralMajor || school.majors.includes(selectedMajor);
    
    return matchesSearch && matchesCountry && matchesMajor;
  });

  // 获取当前页的学校
  const totalPages = Math.ceil(filteredSchools.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSchools = filteredSchools.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link className="flex items-center" href={`/${locale}`}>
              <span className="text-xl font-bold text-blue-600">Acaboost</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
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
            
            {/* Language Switcher */}
            <div className="hidden md:flex items-center space-x-2 mr-4">
              <Link 
                href="/zh/schools" 
                className={`px-3 py-1 rounded text-sm ${locale === 'zh' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
              >
                中文
              </Link>
              <Link 
                href="/en/schools" 
                className={`px-3 py-1 rounded text-sm ${locale === 'en' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
              >
                EN
              </Link>
            </div>
            
            <Link 
              href={`https://wa.me/1234567890?text=${locale === 'en' ? 'Hello, I would like to inquire about academic credential services.' : '您好，我想咨询学历认证服务，希望了解适合我的学历方案'}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:flex bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
            >
              {t.whatsappConsult}
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <main className="min-h-screen bg-white text-gray-800">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
              <p className="text-xl md:text-2xl mb-8">{t.subtitle}</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
                <p className="text-lg">{t.statsText} <span className="font-bold text-yellow-300">70</span> {t.schoolsText}</p>
              </div>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="py-12 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
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
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
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
                {/* Add other filter dropdowns similarly */}
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 text-lg">
                  {t.found} <span className="font-semibold text-blue-600 text-xl">{filteredSchools.length}</span> {t.schoolsMatch}
                </p>
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
                        {locale === 'en' ? school.name : school.nameZh}
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
                          href={`https://wa.me/1234567890?text=${locale === 'en' ? `Hello, I am interested in ${school.name} credential services.` : `您好，我对${school.nameZh}的学历认证服务感兴趣，希望了解详细方案。`}`}
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
                {locale === 'en' ? 'Contact Information' : '联系方式'}
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    WhatsApp: +1 (234) 567-890
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link href="mailto:contact@acaboost.com" className="hover:text-white transition-colors">
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
    </div>
  );
} 