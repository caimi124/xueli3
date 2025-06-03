'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { schoolsData } from '../../../../data/schools';

// 翻译内容
const translations = {
  zh: {
    backToSchools: "← 返回院校库",
    basicInfo: "基本信息",
    qsRanking: "QS世界排名",
    location: "位置",
    specialty: "专业特色",
    keyAdvantage: "核心优势",
    availableMajors: "可认证专业",
    certificationProcess: "认证流程",
    serviceAdvantages: "服务优势",
    realCertification: "真实认证",
    realCertificationDesc: "100%真实可查，官方渠道获取",
    fastDelivery: "快速交付",
    fastDeliveryDesc: "7-15个工作日完成，急件3-5日",
    professionalService: "专业服务",
    professionalServiceDesc: "一对一顾问，全程跟踪服务",
    secureProcess: "安全保障",
    secureProcessDesc: "严格保密，安全可靠",
    contactConsultant: "💬 联系顾问",
    whatsappConsult: "📱 WhatsApp咨询",
    consultNow: "立即咨询",
    contactDesc: "想了解该校认证方案？",
    contactSubDesc: "专业顾问为您定制最适合的认证方案",
    sampleDocuments: "样本展示",
    moreSamples: "查看更多样本",
    step1: "1. 咨询需求",
    step1Desc: "联系顾问，确认认证需求",
    step2: "2. 定制方案",
    step2Desc: "制定个性化认证方案",
    step3: "3. 资料准备",
    step3Desc: "准备必要的认证材料",
    step4: "4. 开始认证",
    step4Desc: "启动官方认证流程",
    step5: "5. 完成交付",
    step5Desc: "获得认证文件，完成服务",
    // Navigation
    home: "首页",
    schools: "院校数据库",
    guide: "快速领证服务",
    blog: "博客",
    contact: "联系我们"
  },
  en: {
    backToSchools: "← Back to Schools",
    basicInfo: "Basic Information",
    qsRanking: "QS World Ranking",
    location: "Location",
    specialty: "Specialty",
    keyAdvantage: "Key Advantage",
    availableMajors: "Available Majors",
    certificationProcess: "Certification Process",
    serviceAdvantages: "Service Advantages",
    realCertification: "Authentic Certification",
    realCertificationDesc: "100% authentic and verifiable, obtained through official channels",
    fastDelivery: "Fast Delivery",
    fastDeliveryDesc: "7-15 business days completion, express 3-5 days",
    professionalService: "Professional Service",
    professionalServiceDesc: "One-on-one consultant, full-process tracking",
    secureProcess: "Secure Process",
    secureProcessDesc: "Strict confidentiality, safe and reliable",
    contactConsultant: "💬 Contact Consultant",
    whatsappConsult: "📱 WhatsApp Consult",
    consultNow: "Consult Now",
    contactDesc: "Want to learn about certification for this school?",
    contactSubDesc: "Professional consultants will customize the most suitable certification plan for you",
    sampleDocuments: "Sample Documents",
    moreSamples: "View More Samples",
    step1: "1. Consultation",
    step1Desc: "Contact consultant, confirm certification needs",
    step2: "2. Customize Plan",
    step2Desc: "Develop personalized certification plan",
    step3: "3. Prepare Materials",
    step3Desc: "Prepare necessary certification materials",
    step4: "4. Start Certification",
    step4Desc: "Initiate official certification process",
    step5: "5. Complete Delivery",
    step5Desc: "Receive certified documents, complete service",
    // Navigation
    home: "Home",
    schools: "Schools Database",
    guide: "Fast Credential Service",
    blog: "Blog",
    contact: "Contact Us"
  }
};

export default function SchoolDetail() {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh';
  const schoolId = parseInt(params?.id as string);
  const t = translations[locale as keyof typeof translations] || translations.zh;

  // 获取学校数据
  const schools = schoolsData[locale as keyof typeof schoolsData] || schoolsData.zh;
  const school = schools.find(s => s.id === schoolId);

  if (!school) {
    notFound();
  }

  const getSchoolLogo = (country: string, schoolName: string) => {
    if (country === '美国' || country === 'United States') {
      if (schoolName.includes('MIT') || schoolName.includes('麻省理工')) return '🔬';
      if (schoolName.includes('Harvard') || schoolName.includes('哈佛')) return '🏛️';
      if (schoolName.includes('Stanford') || schoolName.includes('斯坦福')) return '🌲';
      return '🗽';
    }
    if (country === '英国' || country === 'United Kingdom') {
      if (schoolName.includes('Oxford') || schoolName.includes('牛津')) return '📚';
      if (schoolName.includes('Cambridge') || schoolName.includes('剑桥')) return '⚖️';
      if (schoolName.includes('Imperial') || schoolName.includes('帝国理工')) return '🔧';
      return '👑';
    }
    if (country === '新加坡' || country === 'Singapore') {
      if (schoolName.includes('NUS') || schoolName.includes('国立大学')) return '🦁';
      if (schoolName.includes('NTU') || schoolName.includes('南洋理工')) return '🔬';
      return '🦁';
    }
    if (country === '澳大利亚' || country === 'Australia') {
      if (schoolName.includes('Melbourne') || schoolName.includes('墨尔本')) return '🦘';
      if (schoolName.includes('Sydney') || schoolName.includes('悉尼')) return '🏖️';
      return '🦘';
    }
    if (country === '加拿大' || country === 'Canada') {
      if (schoolName.includes('Toronto') || schoolName.includes('多伦多')) return '🍁';
      return '🍁';
    }
    if (country === '日本' || country === 'Japan') {
      if (schoolName.includes('Tokyo') || schoolName.includes('东京')) return '🌸';
      return '🌸';
    }
    if (country === '香港' || country === 'Hong Kong') {
      return '🏙️';
    }
    return '🎓';
  };

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
                href={`/zh/schools/${schoolId}`}
                className={`px-3 py-1 rounded text-sm ${locale === 'zh' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
              >
                中文
              </Link>
              <Link 
                href={`/en/schools/${schoolId}`}
                className={`px-3 py-1 rounded text-sm ${locale === 'en' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
              >
                EN
              </Link>
            </div>
            
            <Link 
              href={`https://wa.me/1234567890?text=${locale === 'en' ? `Hello, I am interested in ${school.name} credential services.` : `您好，我对${school.name}的学历认证服务感兴趣，希望了解详细方案。`}`}
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
        {/* Back Button */}
        <div className="bg-gray-50 py-4 px-6">
          <div className="max-w-6xl mx-auto">
            <Link 
              href={`/${locale}/schools`}
              className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
            >
              {t.backToSchools}
            </Link>
          </div>
        </div>

        {/* School Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-6 mb-6">
              <div className="text-6xl">
                {getSchoolLogo(school.country, school.name)}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{school.name}</h1>
                <p className="text-xl text-blue-100">{school.location}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-300">QS #{school.qsRank}</div>
                <div className="text-blue-100">{t.qsRanking}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-300">{school.country}</div>
                <div className="text-blue-100">{t.location}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-300">🎯</div>
                <div className="text-blue-100">{school.specialty}</div>
              </div>
            </div>
          </div>
        </section>

        {/* School Information */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Basic Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">{t.basicInfo}</h2>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4">{t.specialty}</h3>
                  <p className="text-blue-600 font-medium mb-2">🎯 {school.specialty}</p>
                  <p className="text-gray-600">{school.keyAdvantage}</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold mb-4">{t.availableMajors}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {school.majors.map((major, idx) => (
                      <div key={idx} className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm">
                        {major}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">{t.serviceAdvantages}</h2>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">✅</div>
                      <h3 className="text-lg font-semibold">{t.realCertification}</h3>
                    </div>
                    <p className="text-gray-600">{t.realCertificationDesc}</p>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">⚡</div>
                      <h3 className="text-lg font-semibold">{t.fastDelivery}</h3>
                    </div>
                    <p className="text-gray-600">{t.fastDeliveryDesc}</p>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">👨‍💼</div>
                      <h3 className="text-lg font-semibold">{t.professionalService}</h3>
                    </div>
                    <p className="text-gray-600">{t.professionalServiceDesc}</p>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">🔒</div>
                      <h3 className="text-lg font-semibold">{t.secureProcess}</h3>
                    </div>
                    <p className="text-gray-600">{t.secureProcessDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Process */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">{t.certificationProcess}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2">{t.step1}</h3>
                <p className="text-sm text-gray-600">{t.step1Desc}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2">{t.step2}</h3>
                <p className="text-sm text-gray-600">{t.step2Desc}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2">{t.step3}</h3>
                <p className="text-sm text-gray-600">{t.step3Desc}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2">{t.step4}</h3>
                <p className="text-sm text-gray-600">{t.step4Desc}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
                <h3 className="font-semibold mb-2">{t.step5}</h3>
                <p className="text-sm text-gray-600">{t.step5Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 px-6 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{t.contactDesc}</h2>
            <p className="text-xl text-blue-100 mb-8">{t.contactSubDesc}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`https://wa.me/1234567890?text=${locale === 'en' ? `Hello, I am interested in ${school.name} credential services. Please provide more information.` : `您好，我对${school.name}的学历认证服务感兴趣，请提供更多信息。`}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                {t.whatsappConsult}
              </Link>
              
              <Link 
                href={`/${locale}/contact`}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                {t.contactConsultant}
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
        href={`https://wa.me/1234567890?text=${locale === 'en' ? `Hello, I am interested in ${school.name} credential services.` : `您好，我对${school.name}的学历认证服务感兴趣。`}`}
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