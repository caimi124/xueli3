'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

// 翻译内容
const translations = {
  zh: {
    home: "首页",
    schools: "院校数据库", 
    guide: "快速领证服务",
    blog: "博客",
    contact: "联系我们",
    whatsappConsult: "📱 WhatsApp咨询",
    
    // 页面内容翻译
    heroTitle: "🎓 快速领证服务",
    heroSubtitle: "5步快速认证流程，7天内获取真实可查学历证书",
    consultNow: "立即咨询认证方案",
    
    documentsTitle: "我们可以为您提供的官方学历文件",
    documentsSubtitle: "我们提供全套学历文件与国际认证服务，满足不同用途需求：升学、工作、公证、移民等",
    documentsDesc: "根据您的具体需求，添加以下官方文件，增强您的验证包",
    
    categoryAuth: "资料认证",
    categoryDegree: "学历身份证明",
    categoryAcademic: "学术记录文件",
    categoryInternational: "国际认证服务",
    categorySupporting: "支持文件",
    categorySpecial: "特殊用途文件",
    
    // 具体文件类型翻译
    apostille: "海牙认证",
    consular: "领事认证",
    wesAuth: "WES认证",
    eceAuth: "ECE认证",
    educationMinistry: "教育部认证",
    
    diploma: "毕业证书",
    degreeCert: "学位证书",
    studentCard: "学生证",
    admissionProof: "入学证明",
    enrollmentProof: "在读证明",
    
    officialTranscript: "官方成绩单",
    creditProof: "学分证明",
    rankingProof: "排名证明",
    honorCert: "荣誉证书",
    scholarshipProof: "奖学金证明",
    
    courseDescription: "课程描述",
    academicRecommendation: "学术推荐信",
    researchProof: "研究证明",
    thesisProof: "论文证明",
    labProof: "实验室证明",
    
    internshipProof: "实习证明",
    employmentRecommendation: "就业推荐信",
    careerPlanning: "职业规划",
    industryCooperation: "校企合作证明",
    employmentGuidance: "就业指导证明",
    
    behaviorProof: "品行证明",
    noDisciplineProof: "无违纪证明",
    recommendationLetter: "推荐信",
    clubProof: "社团证明",
    volunteerProof: "志愿服务证明",
    
    processTitle: "5步快速认证流程",
    processDesc: "专业团队指导，确保每个环节顺利进行",
    step1: "第一步：需求分析",
    step1Desc: "详细了解您的认证需求和用途",
    step2: "第二步：方案设计", 
    step2Desc: "为您定制最适合的认证方案",
    step3: "第三步：文件准备",
    step3Desc: "准备和审核所需的认证材料",
    step4: "第四步：认证执行",
    step4Desc: "启动官方认证流程，实时跟踪",
    step5: "第五步：成果交付",
    step5Desc: "获得认证文件，完成服务",
    
    advantagesTitle: "为什么选择我们的认证服务？",
    advantagesSubtitle: "专业、快速、可靠的一站式学历认证解决方案",
    
    advantage1: "✅ 100%真实可查",
    advantage1Desc: "所有文件均来自正规院校，官方渠道验证",
    advantage2: "⚡ 快速交付",
    advantage2Desc: "7-15个工作日完成，加急3-5天",
    advantage3: "🔒 安全保障", 
    advantage3Desc: "严格保密流程，信息安全可靠",
    advantage4: "🌍 全球认可",
    advantage4Desc: "支持多国认证，国际通用",
    advantage5: "👨‍💼 专业服务",
    advantage5Desc: "一对一顾问，全程跟踪服务",
    advantage6: "💰 合理价格",
    advantage6Desc: "透明定价，无隐藏费用",
    
    // 新增翻译项
    realSampleTitle: "📷 实拍样本展示 · 所见即所得",
    realSampleDesc: "以下为客户实拍交付样本，所有信息已做打码处理，仅供参考。",
    sampleCategory1: "学历证明",
    sampleCategory2: "成绩证明", 
    sampleCategory3: "身份证明",
    sampleCategory4: "录取证明",
    sampleCategory5: "国际认证",
    sampleCategory6: "教育认证",
    
    sample1Title: "毕业证书样本",
    sample1Desc: "美国波士顿大学博士学位毕业证书",
    sample2Title: "成绩单样本",
    sample2Desc: "官方成绩单，包含完整课程与绩点",
    sample3Title: "学生卡样本",
    sample3Desc: "在校期间官方学生身份证明",
    sample4Title: "录取通知书样本",
    sample4Desc: "研究生项目录取通知书",
    sample5Title: "海牙认证样本",
    sample5Desc: "国际通用的海牙认证文件",
    sample6Title: "WES认证样本",
    sample6Desc: "WES学历认证评估报告",
    
    customerFeedbackTitle: "客户真实反馈",
    customerFeedbackDesc: "我们为超过 2,000+ 客户完成学历认证，覆盖全球多个国家。以下为部分真实反馈：",
    customer1Name: "李先生",
    customer1Location: "加拿大多伦多",
    customer1Feedback: "收到了！质量很好，WES认证也通过了，谢谢！",
    customer1Date: "2024年1月15日",
    
    customer2Name: "张女士",
    customer2Location: "澳大利亚悉尼",
    customer2Feedback: "成绩单和毕业证都很完美，移民局已经接受了。",
    customer2ImageAlt: "张女士的证书",
    customer2ImageTitle: "客户证书展示",
    
    customer3Name: "王先生", 
    customer3Location: "美国洛杉矶",
    customer3Feedback: "7天就收到了，比预期快很多，非常专业！",
    customer3Date: "2024年1月20日",
    
    statsText: "已服务 2,000+ 客户，满意度 98.5%",
    allDocumentsNote: "所有文件均为真实院校颁发，支持官方认证查询",
    
    ctaTitle: "准备开始您的学历认证之旅？",
    ctaDesc: "立即联系我们的专业顾问，获取定制化认证方案。",
    ctaButton: "📱 WhatsApp 咨询顾问",
    ctaFeature1: "7~15 天极速出证",
    ctaFeature2: "全套文件交付，支持全球认证",
    ctaFeature3: "可提供样本先看，满意再付款",
    
    footerAbout: "关于我们",
    footerAboutDesc: "专业提供全球学历认证服务，7天快速交付，确保100%真实可查。",
    footerQuickLinks: "快速链接",
    footerContact: "联系方式",
    footerHome: "首页",
    footerSchools: "学校资源",
    footerContactUs: "联系我们"
  },
  en: {
    home: "Home",
    schools: "Schools Database", 
    guide: "Fast Credential Service",
    blog: "Blog",
    contact: "Contact Us",
    whatsappConsult: "📱 WhatsApp Consult",
    
    // 页面内容翻译
    heroTitle: "🎓 Fast Credential Services",
    heroSubtitle: "5-step fast certification process, obtain authentic and verifiable academic certificates within 7 days",
    consultNow: "Contact for Certification Plan Now",
    
    documentsTitle: "Official Academic Documents We Can Provide",
    documentsSubtitle: "We provide comprehensive academic documents and international certification services to meet various needs: education, employment, notarization, immigration, etc.",
    documentsDesc: "Based on your specific requirements, add the following official documents to enhance your verification package",
    
    categoryAuth: "Document Authentication",
    categoryDegree: "Academic Credentials",
    categoryAcademic: "Academic Records",
    categoryInternational: "International Certification Services",
    categorySupporting: "Supporting Documents",
    categorySpecial: "Special Purpose Documents",
    
    // 具体文件类型翻译
    apostille: "Apostille Certification",
    consular: "Consular Authentication",
    wesAuth: "WES Evaluation",
    eceAuth: "ECE Assessment",
    educationMinistry: "Ministry of Education Verification",
    
    diploma: "Diploma Certificate",
    degreeCert: "Degree Certificate", 
    studentCard: "Student ID Card",
    admissionProof: "Admission Letter",
    enrollmentProof: "Enrollment Verification",
    
    officialTranscript: "Official Transcript",
    creditProof: "Credit Verification",
    rankingProof: "Class Ranking Certificate",
    honorCert: "Honor Certificate",
    scholarshipProof: "Scholarship Certificate",
    
    courseDescription: "Course Description",
    academicRecommendation: "Academic Recommendation Letter",
    researchProof: "Research Certificate",
    thesisProof: "Thesis Certificate", 
    labProof: "Laboratory Certificate",
    
    internshipProof: "Internship Certificate",
    employmentRecommendation: "Employment Recommendation",
    careerPlanning: "Career Planning Certificate",
    industryCooperation: "Industry Cooperation Certificate",
    employmentGuidance: "Employment Guidance Certificate",
    
    behaviorProof: "Character Certificate",
    noDisciplineProof: "No Disciplinary Action Certificate",
    recommendationLetter: "Recommendation Letter",
    clubProof: "Club Activity Certificate",
    volunteerProof: "Volunteer Service Certificate",
    
    processTitle: "5-Step Fast Certification Process",
    processDesc: "Professional team guidance to ensure smooth progress at every stage",
    step1: "Step 1: Needs Analysis",
    step1Desc: "Detailed understanding of your certification needs and purposes",
    step2: "Step 2: Plan Design",
    step2Desc: "Customize the most suitable certification plan for you",
    step3: "Step 3: Document Preparation",
    step3Desc: "Prepare and review required certification materials",
    step4: "Step 4: Certification Execution",
    step4Desc: "Initiate official certification process with real-time tracking",
    step5: "Step 5: Results Delivery",
    step5Desc: "Receive certified documents and complete the service",
    
    advantagesTitle: "Why Choose Our Certification Services?",
    advantagesSubtitle: "Professional, fast, and reliable one-stop academic certification solutions",
    
    advantage1: "✅ 100% Authentic & Verifiable",
    advantage1Desc: "All documents from accredited institutions, officially verifiable",
    advantage2: "⚡ Fast Delivery",
    advantage2Desc: "7-15 business days completion, express 3-5 days",
    advantage3: "🔒 Secure Process",
    advantage3Desc: "Strict confidentiality process, information security guaranteed",
    advantage4: "🌍 Globally Recognized",
    advantage4Desc: "Multi-country certification support, internationally accepted",
    advantage5: "👨‍💼 Professional Service",
    advantage5Desc: "One-on-one consultant with full-process tracking",
    advantage6: "💰 Reasonable Pricing",
    advantage6Desc: "Transparent pricing with no hidden fees",
    
    // 新增翻译项
    realSampleTitle: "📷 Real Sample Showcase · What You See Is What You Get",
    realSampleDesc: "The following are real delivery samples from clients, with all information redacted for reference only.",
    sampleCategory1: "Academic Credential",
    sampleCategory2: "Academic Record",
    sampleCategory3: "Identity Verification",
    sampleCategory4: "Admission Document",
    sampleCategory5: "International Certification",
    sampleCategory6: "Education Assessment",
    
    sample1Title: "Diploma Sample",
    sample1Desc: "Doctoral Degree Diploma from Boston University, USA",
    sample2Title: "Transcript Sample", 
    sample2Desc: "Official transcript with complete courses and GPA",
    sample3Title: "Student ID Sample",
    sample3Desc: "Official student identification during enrollment",
    sample4Title: "Admission Letter Sample",
    sample4Desc: "Graduate program admission letter",
    sample5Title: "Apostille Sample",
    sample5Desc: "Internationally recognized apostille document",
    sample6Title: "WES Assessment Sample",
    sample6Desc: "WES Academic Credential Assessment Report",
    
    customerFeedbackTitle: "Real Customer Feedback",
    customerFeedbackDesc: "We have completed academic certifications for over 2,000+ clients across multiple countries worldwide. Here are some real testimonials:",
    customer1Name: "Mr. Li",
    customer1Location: "Toronto, Canada",
    customer1Feedback: "Received it! Great quality, WES evaluation also passed, thank you!",
    customer1Date: "January 15, 2024",
    
    customer2Name: "Ms. Zhang",
    customer2Location: "Sydney, Australia", 
    customer2Feedback: "The transcript and diploma are perfect, immigration office has accepted them.",
    customer2ImageAlt: "Ms. Zhang's certificate",
    customer2ImageTitle: "Client Certificate Showcase",
    
    customer3Name: "Mr. Wang",
    customer3Location: "Los Angeles, USA",
    customer3Feedback: "Received in 7 days, much faster than expected, very professional!",
    customer3Date: "January 20, 2024",
    
    statsText: "Served 2,000+ clients, 98.5% satisfaction rate",
    allDocumentsNote: "All documents are issued by authentic institutions and support official verification",
    
    ctaTitle: "Ready to Start Your Academic Certification Journey?",
    ctaDesc: "Contact our professional consultants now to get a customized certification plan.",
    ctaButton: "📱 WhatsApp Consult",
    ctaFeature1: "7-15 days express certification",
    ctaFeature2: "Complete document delivery, global certification support",
    ctaFeature3: "Sample preview available, payment after satisfaction",
    
    footerAbout: "About Us",
    footerAboutDesc: "Professional global academic credential services, 7-day fast delivery, 100% authentic and verifiable.",
    footerQuickLinks: "Quick Links",
    footerContact: "Contact Information",
    footerHome: "Home",
    footerSchools: "School Resources",
    footerContactUs: "Contact Us"
  }
};

export default function Guide() {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh';
  const t = translations[locale as keyof typeof translations] || translations.zh;
  
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
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/schools`}>
                {t.schools}
              </Link>
              <Link className="text-sm font-medium transition-colors text-blue-600" href={`/${locale}/guide`}>
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
                href="/zh/guide" 
                  className={`px-3 py-1 rounded text-sm transition-all ${locale === 'zh' ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
              >
                中文
              </Link>
              <Link 
                href="/en/guide" 
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

      <main className="flex-grow pt-16">
        <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
          <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.heroTitle}</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">{t.heroSubtitle}</p>
              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">📱</span>
                {t.consultNow}
              </Link>
          </div>
        </section>

          {/* Document Categories Section */}
          <section className="py-20 px-6 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto relative">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {t.documentsTitle}
                  <span className="block text-blue-600">
                    {t.documentsSubtitle}
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {t.documentsDesc}
                </p>
              </div>

              {/* Six Categories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* 资料认证 */}
                <div className="group relative">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 p-8 h-full transform group-hover:-translate-y-2">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                      <span className="text-4xl">🔧</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                      {t.categoryAuth}
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.apostille}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.consular}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.wesAuth}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.eceAuth}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.educationMinistry}</span>
                      </li>
                    </ul>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>

                {/* 学历身份证明 */}
                <div className="group relative">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 p-8 h-full transform group-hover:-translate-y-2">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                      <span className="text-4xl">🔧</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                      {t.categoryDegree}
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.diploma}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.degreeCert}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.studentCard}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.admissionProof}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.enrollmentProof}</span>
                      </li>
                    </ul>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>

                {/* 学业成绩单 */}
                <div className="group relative">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 p-8 h-full transform group-hover:-translate-y-2">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                      <span className="text-4xl">🔧</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                      {t.categoryAcademic}
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.officialTranscript}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.creditProof}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.rankingProof}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.honorCert}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.scholarshipProof}</span>
                      </li>
                    </ul>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>

                {/* 课程与学术 */}
                <div className="group relative">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 p-8 h-full transform group-hover:-translate-y-2">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                      <span className="text-4xl">🔧</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                      {t.categorySpecial}
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.courseDescription}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.academicRecommendation}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.researchProof}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.thesisProof}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.labProof}</span>
                      </li>
                    </ul>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>

                {/* 实习与就业 */}
                <div className="group relative">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 p-8 h-full transform group-hover:-translate-y-2">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                      <span className="text-4xl">🔧</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                      {t.categorySupporting}
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.internshipProof}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.employmentRecommendation}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.careerPlanning}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.industryCooperation}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.employmentGuidance}</span>
                      </li>
                </ul>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>

                {/* 行为与品德 */}
                <div className="group relative">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 p-8 h-full transform group-hover:-translate-y-2">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                      <span className="text-4xl">🔧</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                      {t.categorySpecial}
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.behaviorProof}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.noDisciplineProof}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.recommendationLetter}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.clubProof}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{t.volunteerProof}</span>
                      </li>
                </ul>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>
              </div>

              <div className="text-center mt-12">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full text-sm font-medium">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                  </svg>
                  {t.allDocumentsNote}
              </div>
            </div>
          </div>
        </section>

          {/* 实拍样本展示 */}
          <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.realSampleTitle}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">{t.realSampleDesc}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* 毕业证书样本 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/samples/boston-university-diploma.jpeg"
                      alt={`${t.sample1Title} - Acaboost 学历认证服务真实样本展示`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">✅</span>
                      <span className="text-xs text-gray-500">{t.sample1Title}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{t.sample1Desc}</h3>
                  </div>
                </div>

                {/* 成绩单样本 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/samples/transcript-real.jpeg"
                      alt={`${t.sample2Title} - Acaboost 官方成绩单认证样本`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">✅</span>
                      <span className="text-xs text-gray-500">{t.sample2Title}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{t.sample2Desc}</h3>
                  </div>
              </div>
              
                {/* 学生卡样本 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/samples/student-id-real.jpeg"
                      alt={`${t.sample3Title} - Acaboost 学生身份证明认证样本`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">✅</span>
                      <span className="text-xs text-gray-500">{t.sample3Title}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{t.sample3Desc}</h3>
                  </div>
                </div>

                {/* 录取通知书样本 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/samples/admission-letter-real.jpeg"
                      alt={`${t.sample4Title} - Acaboost 录取通知书认证样本`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">✅</span>
                      <span className="text-xs text-gray-500">{t.sample4Title}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{t.sample4Desc}</h3>
                  </div>
              </div>
              
                {/* 海牙认证样本 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/samples/apostille-real.jpeg"
                      alt={`${t.sample5Title} - Acaboost 海牙认证服务真实样本`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">✅</span>
                      <span className="text-xs text-gray-500">{t.sample5Title}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{t.sample5Desc}</h3>
                  </div>
                </div>

                {/* WES认证样本 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/samples/wes-certification-real.jpeg"
                      alt={`${t.sample6Title} - Acaboost WES学历认证评估报告样本`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">✅</span>
                      <span className="text-xs text-gray-500">{t.sample6Title}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{t.sample6Desc}</h3>
                  </div>
              </div>
            </div>
          </div>
        </section>

          {/* 客户真实反馈 */}
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.customerFeedbackTitle}</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">{t.customerFeedbackDesc}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* 客户反馈1 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">👨‍💼</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">{t.customer1Name}</span>
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <p className="text-sm text-gray-500">{t.customer1Location}</p>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 mb-3">
                      <p className="text-gray-800">{t.customer1Feedback}</p>
                    </div>
                    <p className="text-xs text-gray-400">{t.customer1Date}</p>
                  </div>
                </div>

                {/* 客户反馈2 - 带图片 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/images/samples/transcript-real.jpeg"
                        alt={`${t.customer2ImageAlt} - Acaboost 客户认证成功案例展示`}
                        fill
                        className="object-cover blur-sm"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-center text-white">
                          <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                          </svg>
                          <p className="text-sm">{t.customer2ImageTitle}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-semibold text-gray-900">{t.customer2Name}</span>
                        <span className="text-sm text-gray-500">• {t.customer2Location}</span>
                      </div>
                      <p className="text-gray-700 mb-3">{t.customer2Feedback}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 其他客户反馈 - 简化版本 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">👨‍🎓</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">{t.customer3Name}</span>
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <p className="text-sm text-gray-500">{t.customer3Location}</p>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 mb-3">
                      <p className="text-gray-800">{t.customer3Feedback}</p>
                    </div>
                    <p className="text-xs text-gray-400">{t.customer3Date}</p>
                  </div>
              </div>
              </div>

              <div className="text-center mt-12">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full text-sm font-medium">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                  </svg>
                  {t.statsText}
              </div>
            </div>
          </div>
        </section>

          {/* 最终CTA */}
          <section className="py-16 px-6 bg-blue-700 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-3xl font-bold text-white mb-3">{t.ctaTitle}</h2>
              <p className="text-xl text-blue-100 mb-8">{t.ctaDesc}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-green-300 text-xl mb-2">✅</div>
                  <div className="text-white font-semibold">{t.ctaFeature1}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-green-300 text-xl mb-2">✅</div>
                  <div className="text-white font-semibold">{t.ctaFeature2}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-green-300 text-xl mb-2">✅</div>
                  <div className="text-white font-semibold">{t.ctaFeature3}</div>
                </div>
              </div>
              
            <Link 
                href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl text-lg"
            >
                <span className="mr-2">👉</span>
                {t.ctaButton}
            </Link>
          </div>
        </section>
        </main>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footerAbout}</h3>
              <p className="text-gray-400">{t.footerAboutDesc}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footerQuickLinks}</h3>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors" href="/">{t.footerHome}</Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors" href="/schools">{t.footerSchools}</Link>
                </li>
                <li>
                  <Link className="text-gray-400 hover:text-white transition-colors" href="/contact">{t.footerContactUs}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footerContact}</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <Link 
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp: +1 (234) 567-890
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

      {/* 悬浮WhatsApp按钮 */}
      <Link
        href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务"
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