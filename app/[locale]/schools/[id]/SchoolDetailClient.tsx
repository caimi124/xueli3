'use client';

import React from 'react';
import Link from 'next/link';

const translations = {
  zh: {
    home: "首页",
    schools: "院校数据库",
    guide: "认证指南",
    blog: "博客",
    contact: "联系我们",
    whatsappConsult: "💬 WhatsApp咨询",
    consultNow: "立即咨询",
    urgentCase: "急件48小时",
    freeConsult: "免费方案咨询",
    trustGuarantee: "服务保障",
    authenticity: "真实性保证",
    privacy: "隐私保护",
    professionalService: "专业服务",
    userStories: "成功案例",
    faqSection: "常见问题",
    recommendedSchools: "相关推荐",
    degreeTypes: "学历类型",
    applicationScenarios: "应用场景"
  },
  en: {
    home: "Home",
    schools: "Schools",
    guide: "Guide", 
    blog: "Blog",
    contact: "Contact",
    whatsappConsult: "💬 WhatsApp",
    consultNow: "Consult Now",
    urgentCase: "Express 48hrs",
    freeConsult: "Free Consultation",
    trustGuarantee: "Service Guarantee",
    authenticity: "Authenticity",
    privacy: "Privacy",
    professionalService: "Professional",
    userStories: "Success Stories",
    faqSection: "FAQ",
    recommendedSchools: "Recommended",
    degreeTypes: "Degree Types",
    applicationScenarios: "Applications"
  }
};

interface SchoolDetailClientProps {
  locale: string;
  school: any;
  uniqueInfo: any;
  schools: any[];
}

export default function SchoolDetailClient({ locale, school, uniqueInfo, schools }: SchoolDetailClientProps) {
  const t = translations[locale as keyof typeof translations] || translations.zh;

  const whatsappMessage = `Hello! I'm interested in ${school.name} degree authentication and would like to know about the specific authentication process, timeline, and fees. My background is [please describe your situation], and I'm looking to apply for [specific major]. Thank you!`;

  // Recommended schools (excluding current school)
  const recommendedSchools = schools.filter(s => s.id !== school.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation Bar - Mobile Optimized */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <Link href={`/${locale}`} className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Acaboost
            </Link>
            
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link href={`/${locale}`} className="text-sm font-medium text-gray-600 hover:text-blue-600">{t.home}</Link>
              <Link href={`/${locale}/schools`} className="text-sm font-medium text-blue-600">{t.schools}</Link>
              <Link href={`/${locale}/guide`} className="text-sm font-medium text-gray-600 hover:text-blue-600">{t.guide}</Link>
              <Link href={`/${locale}/blog`} className="text-sm font-medium text-gray-600 hover:text-blue-600">{t.blog}</Link>
              <Link href={`/${locale}/contact`} className="text-sm font-medium text-gray-600 hover:text-blue-600">{t.contact}</Link>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex bg-gray-100 rounded-md sm:rounded-lg p-0.5 sm:p-1">
                <Link href={`/zh/schools/${school.id}`} className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm ${locale === 'zh' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}>中文</Link>
                <Link href={`/en/schools/${school.id}`} className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm ${locale === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}>EN</Link>
              </div>
              
              <Link 
                href={`https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all transform hover:scale-105"
              >
                {t.whatsappConsult}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb - Mobile Optimized */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
          <nav className="text-xs sm:text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
            <Link href={`/${locale}`} className="hover:text-blue-600">{t.home}</Link>
            <span className="mx-1 sm:mx-2">/</span>
            <Link href={`/${locale}/schools`} className="hover:text-blue-600">{t.schools}</Link>
            <span className="mx-1 sm:mx-2">/</span>
            <span className="text-gray-900 font-medium">{school.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {uniqueInfo.h1Title}
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 font-medium leading-relaxed">
              {uniqueInfo.subtitle}
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
                🏛️ {locale === 'zh' ? `为什么选择${school.name}学历认证？` : `Why Choose ${school.name} Degree Authentication?`}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-blue-100 leading-relaxed">
                {uniqueInfo.differentiator}
              </p>
            </div>

            {/* Trust Data */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="bg-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-2">
                  {uniqueInfo.trustData.employmentRate?.split('（')[0] || uniqueInfo.trustData.employmentRate}
                </div>
                <div className="text-xs sm:text-sm text-blue-200">
                  {uniqueInfo.trustData.employmentSource || (locale === 'zh' ? '就业率统计' : 'Employment Rate')}
                </div>
                <div className="text-xs text-blue-300 mt-1">
                  {uniqueInfo.trustData.employmentProof || '📊 Official Data'}
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-300 mb-2">
                  {uniqueInfo.trustData.averageSalary?.split('（')[0] || uniqueInfo.trustData.averageSalary}
                </div>
                <div className="text-xs sm:text-sm text-blue-200">
                  {uniqueInfo.trustData.salarySource || (locale === 'zh' ? '薪资水平' : 'Salary Level')}
                </div>
                <div className="text-xs text-blue-300 mt-1">
                  {uniqueInfo.trustData.salaryProof || '💰 Authoritative Statistics'}
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
                <div className="text-base sm:text-lg font-bold text-purple-300 mb-2">
                  {locale === 'zh' ? '战略合作' : 'Strategic Partners'}
                </div>
                <div className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                  {uniqueInfo.trustData.companyPartners}
                </div>
                <div className="text-xs text-blue-300 mt-1">
                  {uniqueInfo.trustData.partnersProof || '🤝 Authoritative Certification'}
                </div>
              </div>
            </div>

            {/* Main CTA */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
              <Link 
                href={`https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 sm:px-10 py-4 rounded-xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-xl text-center"
              >
                🚀 {locale === 'zh' ? `立即获得${school.name}学历认证` : `Get ${school.name} Degree Authentication Now`}
              </Link>
              
              <div className="w-full sm:w-auto bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-center">
                <div className="font-bold text-base sm:text-lg">{t.urgentCase}</div>
                <div className="text-xs sm:text-sm text-blue-200">{t.freeConsult}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Degree Types */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">{t.degreeTypes}</h2>
                <div className="space-y-6">
                  {uniqueInfo.specificDegrees.map((degree: any, index: number) => (
                    <div key={index} className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-xl">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{degree.name}</h3>
                      <p className="text-gray-600 mb-3">{degree.advantage}</p>
                      <div className="flex items-center justify-between">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {locale === 'zh' ? `认证周期：${degree.time}` : `Authentication Period: ${degree.time}`}
                        </span>
                        <Link 
                          href={`https://wa.me/1234567890?text=${encodeURIComponent(locale === 'zh' ? `我想了解${degree.name}的认证服务` : `I want to learn about ${degree.name} authentication services`)}`}
                          target="_blank"
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          {locale === 'zh' ? '立即咨询 →' : 'Consult Now →'}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Popular Majors */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">
                  🔥 {locale === 'zh' ? `${school.name}热门认证专业` : `Popular ${school.name} Authentication Majors`}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {uniqueInfo.specificMajors?.map((major: any, index: number) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-blue-800 text-lg">{major.name}</h3>
                        <span className="text-sm">{major.demand}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">{locale === 'zh' ? '目标职位：' : 'Target Position: '}</span>{major.career}
                        </div>
                        <div className="text-sm text-green-600 font-medium">
                          <span className="font-medium">{locale === 'zh' ? '薪资范围：' : 'Salary Range: '}</span>{major.salary}
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-blue-200">
                        <Link 
                          href={`https://wa.me/1234567890?text=${encodeURIComponent(locale === 'zh' ? `我想了解${major.name}专业的认证详情` : `I want to learn about ${major.name} major authentication details`)}`}
                          target="_blank"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                        >
                          {locale === 'zh' ? '咨询该专业' : 'Consult This Major'} <span className="ml-1">→</span>
                        </Link>
                      </div>
                    </div>
                  )) || school.majors.map((major: string, index: number) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4 hover:shadow-md transition-all">
                      <div className="font-semibold text-blue-800">{major}</div>
                      <div className="text-sm text-blue-600 mt-1">
                        {index < 3 ? (locale === 'zh' ? '🔥 热门推荐' : '🔥 Hot Recommendation') : (locale === 'zh' ? '✅ 专业认证' : '✅ Professional Certification')}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Success Stories */}
              <section className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center">
                  🌟 {locale === 'zh' ? `${school.name}认证成功案例` : `${school.name} Authentication Success Stories`}
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  {uniqueInfo.realScenarios.map((story: any, index: number) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-green-500 p-4 sm:p-6 rounded-r-xl hover:shadow-md transition-all">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="bg-green-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                          <span className="text-green-600 font-bold text-base sm:text-lg">✓</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium w-fit">
                              {story.industry}
                            </span>
                            <h3 className="font-bold text-gray-800 text-base sm:text-lg">{story.persona}</h3>
                          </div>
                          <p className="text-gray-700 mb-3 leading-relaxed text-sm sm:text-base">{story.story}</p>
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                            <div className="text-xs text-yellow-800 font-medium mb-1">
                              ⏱️ {locale === 'zh' ? `${school.name}认证详情` : `${school.name} Authentication Details`}
                            </div>
                            <div className="text-xs text-yellow-700">{story.timeline}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              <section className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center">
                  <span className="mr-3">❓</span>
                  {locale === 'zh' ? `${school.name}认证常见问题` : `${school.name} Authentication FAQ`}
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {uniqueInfo.faqItems.map((item: any, index: number) => (
                    <details key={index} className="border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden hover:shadow-md transition-all group">
                      <summary className="p-4 sm:p-6 cursor-pointer hover:bg-gray-50 font-medium text-gray-800 flex items-center justify-between text-sm sm:text-base">
                        <span className="flex items-center flex-1 min-w-0">
                          <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-3 flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="break-words">
                            {locale === 'zh' ? `${school.name}认证：${item.q}` : `${school.name} Authentication: ${item.q}`}
                          </span>
                        </span>
                        <span className="text-gray-400 ml-4 text-xs sm:text-sm group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100 bg-gray-50">
                        <div className="pt-3 sm:pt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                          {item.a}
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Recommended Schools */}
              <section className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center">
                  <span className="mr-3">🎓</span>
                  {t.recommendedSchools}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {recommendedSchools.map((recSchool) => (
                    <div 
                      key={recSchool.id}
                      className="group bg-gray-50 hover:bg-white border border-gray-200 hover:border-blue-300 rounded-lg sm:rounded-xl p-4 sm:p-6 transition-all hover:shadow-lg"
                    >
                      <h3 className="font-bold text-gray-800 mb-3 text-base sm:text-lg group-hover:text-blue-600 transition-colors">
                        {locale === 'zh' ? `${recSchool.name}学历认证` : `${recSchool.name} Degree Authentication`}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {recSchool.specialty} - {recSchool.keyAdvantage}
                      </p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="bg-blue-100 text-blue-600 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                          QS#{recSchool.qsRank}
                        </span>
                        <span className="text-gray-500 text-xs">{recSchool.country}</span>
                      </div>
                      <Link 
                        href={`/${locale}/schools/${recSchool.id}`}
                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 sm:py-3 rounded-lg text-sm font-medium transition-colors"
                      >
                        {locale === 'zh' ? `了解${recSchool.name}认证详情 →` : `Learn ${recSchool.name} Details →`}
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-4 sm:space-y-6">
              
              {/* Mobile CTA */}
              <div className="lg:hidden bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-4 shadow-lg">
                <h3 className="text-lg font-bold mb-3">
                  ⚡ {locale === 'zh' ? '您是否正面临这些困扰？' : 'Are You Facing These Challenges?'}
                </h3>
                <ul className="text-sm space-y-1 mb-4 text-red-100">
                  <li>• {locale === 'zh' ? `升职加薪需要${school.name}学历背景？` : `Need ${school.name} degree for promotion?`}</li>
                  <li>• {locale === 'zh' ? `移民申请需要${school.name}学历认证？` : `Need ${school.name} authentication for immigration?`}</li>
                  <li>• {locale === 'zh' ? '商务合作需要提升个人权威性？' : 'Need to enhance personal authority for business?'}</li>
                  <li>• {locale === 'zh' ? `担心${school.name}认证真实性问题？` : `Worried about ${school.name} authentication authenticity?`}</li>
                </ul>
                
                <Link 
                  href={`https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  className="block w-full bg-white text-red-600 px-4 py-3 rounded-lg font-bold text-center hover:bg-gray-50 transition-colors mb-3"
                >
                  💬 {locale === 'zh' ? '1对1解决方案咨询' : '1-on-1 Solution Consultation'}
                </Link>
                
                <div className="text-center text-red-100 text-xs space-y-1">
                  <div>🎯 {locale === 'zh' ? `5分钟制定${school.name}认证方案` : `5-min ${school.name} Authentication Plan`}</div>
                  <div>⚡ {locale === 'zh' ? '24小时内专业回复' : '24hr Professional Response'}</div>
                  <div>✅ {locale === 'zh' ? `100%保证${school.name}认证真实有效` : `100% Guarantee ${school.name} Authentication Authenticity`}</div>
                </div>
              </div>

              {/* Desktop Sticky Sidebar */}
              <div className="hidden lg:block bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">
                  ⚡ {locale === 'zh' ? '这些困扰是否让您夜不能寝？' : 'Do These Issues Keep You Up at Night?'}
                </h3>
                <ul className="text-sm space-y-2 mb-6 text-red-100">
                  <li>• {locale === 'zh' ? `升职加薪急需${school.name}学历背景支撑？` : `Urgently need ${school.name} degree for promotion?`}</li>
                  <li>• {locale === 'zh' ? `移民申请时间紧迫，${school.name}认证流程复杂？` : `Immigration deadline approaching, complex ${school.name} authentication?`}</li>
                  <li>• {locale === 'zh' ? '商务合作中缺乏权威学历认可？' : 'Lack authoritative degree recognition in business?'}</li>
                  <li>• {locale === 'zh' ? `担心${school.name}认证服务真实性和安全性？` : `Worried about ${school.name} authentication authenticity and security?`}</li>
                  <li>• {locale === 'zh' ? `不知道选择哪个${school.name}专业方向？` : `Unsure which ${school.name} major to choose?`}</li>
                </ul>
                
                <Link 
                  href={`https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  className="block w-full bg-white text-red-600 px-6 py-3 rounded-lg font-bold text-center hover:bg-gray-50 transition-colors mb-4"
                >
                  🎯 {locale === 'zh' ? '终结焦虑，立即行动！' : 'End Anxiety, Take Action Now!'}
                </Link>
                
                <div className="text-center text-red-100 text-sm space-y-1">
                  <div>⚡ {locale === 'zh' ? `启动加急通道，48小时完成${school.name}认证` : `Express Lane: 48hr ${school.name} Authentication`}</div>
                  <div>🛡️ {locale === 'zh' ? `7重安全保障，${school.name}认证100%可信` : `7-Layer Security, 100% Trusted ${school.name} Authentication`}</div>
                  <div>💎 {locale === 'zh' ? `专属VIP服务，一对一定制${school.name}方案` : `Exclusive VIP Service, 1-on-1 ${school.name} Plan`}</div>
                </div>
              </div>

              {/* Security Guarantee */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold mb-4 flex items-center">
                  🛡️ {locale === 'zh' ? `${school.name}认证七重安全保障` : `${school.name} Authentication 7-Layer Security`}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <span className="text-xl sm:text-2xl mr-3">🏛️</span>
                    <div>
                      <h4 className="font-semibold text-sm">{locale === 'zh' ? '官方认证渠道' : 'Official Channels'}</h4>
                      <p className="text-gray-600 text-xs">{locale === 'zh' ? `100%${school.name}官方合作，可查验` : `100% ${school.name} Official Partnership, Verifiable`}</p>
                      <p className="text-blue-600 text-xs mt-1">{locale === 'zh' ? `📊 查看${school.name}合作证明` : `📊 View ${school.name} Partnership Proof`}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-xl sm:text-2xl mr-3">🔒</span>
                    <div>
                      <h4 className="font-semibold text-sm">{locale === 'zh' ? '隐私安全保护' : 'Privacy Protection'}</h4>
                      <p className="text-gray-600 text-xs">{locale === 'zh' ? `严格保密协议，${school.name}认证信息安全无忧` : `Strict Confidentiality, ${school.name} Authentication Info Security`}</p>
                      <p className="text-blue-600 text-xs mt-1">{locale === 'zh' ? '🔐 查看隐私保护协议' : '🔐 View Privacy Protection Agreement'}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-xl sm:text-2xl mr-3">⚡</span>
                    <div>
                      <h4 className="font-semibold text-sm">{locale === 'zh' ? '极速认证服务' : 'Express Service'}</h4>
                      <p className="text-gray-600 text-xs">{locale === 'zh' ? `7天内完成${school.name}认证，急件48小时` : `Complete ${school.name} Authentication in 7 days, Express 48hrs`}</p>
                      <p className="text-blue-600 text-xs mt-1">{locale === 'zh' ? `⏰ 查看${school.name}认证时效承诺` : `⏰ View ${school.name} Authentication Timeline Commitment`}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-xl sm:text-2xl mr-3">🤝</span>
                    <div>
                      <h4 className="font-semibold text-sm">{locale === 'zh' ? '合作机构认证' : 'Partner Institution Certification'}</h4>
                      <p className="text-gray-600 text-xs">{locale === 'zh' ? `与知名机构战略合作，${school.name}认证权威性保证` : `Strategic partnerships with renowned institutions, ${school.name} authentication authority guaranteed`}</p>
                      <p className="text-blue-600 text-xs mt-1">{locale === 'zh' ? '🏆 查看合作伙伴认证' : '🏆 View Partner Certifications'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            {locale === 'zh' ? `现在就开始您的${school.name}学历认证之旅` : `Start Your ${school.name} Degree Authentication Journey Now`}
          </h2>
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {locale === 'zh' ? `专业${school.name}认证团队，官方合作渠道，让您快速获得${school.name}学历认证，开启人生新篇章` : `Professional ${school.name} authentication team, official partnership channels, get your ${school.name} degree authentication quickly and start a new chapter in life`}
          </p>
          <Link
            href={`https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 sm:px-12 py-4 rounded-xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-xl inline-flex items-center"
          >
            <span className="mr-3">🚀</span>
            {locale === 'zh' ? `立即开始${school.name}认证` : `Start ${school.name} Authentication Now`}
          </Link>
        </div>
      </section>
    </div>
  );
}