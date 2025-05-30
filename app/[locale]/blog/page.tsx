'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// 翻译内容
const translations = {
  zh: {
    title: "学历认证知识库",
    subtitle: "专业学历认证指南，助您了解认证流程与最新政策",
    description: "涵盖海外学历认证、WES认证、海牙认证等全方位知识分享",
    
    // 分类
    categories: {
      all: "全部文章",
      guide: "认证指南",
      process: "办理流程",
      policy: "最新政策",
      faq: "常见问题",
      case: "成功案例"
    },
    
    searchPlaceholder: "搜索文章标题、关键词...",
    readMore: "阅读全文",
    publishedOn: "发布于",
    readTime: "阅读时间",
    minutes: "分钟",
    
    // 导航
    home: "首页",
    schools: "院校数据库", 
    guide: "快速领证服务",
    blog: "博客",
    contact: "联系我们",
    whatsappButton: "WhatsApp咨询"
  },
  en: {
    title: "Academic Credential Knowledge Base",
    subtitle: "Professional academic credential guides to help you understand certification processes and latest policies",
    description: "Comprehensive knowledge sharing covering overseas credential certification, WES certification, Apostille certification and more",
    
    // 分类
    categories: {
      all: "All Articles",
      guide: "Certification Guide",
      process: "Application Process",
      policy: "Latest Policies",
      faq: "FAQ",
      case: "Success Cases"
    },
    
    searchPlaceholder: "Search articles, keywords...",
    readMore: "Read More",
    publishedOn: "Published on",
    readTime: "Read time",
    minutes: "minutes",
    
    // 导航
    home: "Home",
    schools: "Schools Database",
    guide: "Fast Credential Service",
    blog: "Blog",
    contact: "Contact Us",
    whatsappButton: "WhatsApp Consult"
  }
};

// 模拟博客文章数据
const blogPosts = {
  zh: [
    {
      id: 1,
      title: "2025年最新WES学历认证完整指南",
      excerpt: "详细介绍WES认证流程、所需材料、办理时间及注意事项，帮您快速完成美国学历认证。",
      category: "guide",
      publishDate: "2025-01-15",
      readTime: 8,
      image: "/images/blog/wes-guide.jpg",
      featured: true
    },
    {
      id: 2,
      title: "海牙认证vs领事认证：如何选择适合的国际认证方式",
      excerpt: "对比分析海牙认证和领事认证的区别、适用国家、办理流程，助您选择最合适的认证方案。",
      category: "guide",
      publishDate: "2025-01-12",
      readTime: 6,
      image: "/images/blog/apostille-vs-consular.jpg"
    },
    {
      id: 3,
      title: "英国学历认证最新政策解读",
      excerpt: "英国脱欧后学历认证政策变化，ENIC-NARIC认证要求更新，申请条件和流程全面解析。",
      category: "policy",
      publishDate: "2025-01-10",
      readTime: 7,
      image: "/images/blog/uk-policy-update.jpg"
    },
    {
      id: 4,
      title: "加拿大ECA学历认证机构对比：WES vs CES vs IQAS",
      excerpt: "详细对比加拿大三大ECA认证机构的特点、适用专业、办理周期和费用差异。",
      category: "guide",
      publishDate: "2025-01-08",
      readTime: 9,
      image: "/images/blog/canada-eca-comparison.jpg"
    },
    {
      id: 5,
      title: "澳洲学历认证成功案例：从申请到获得PR",
      excerpt: "真实案例分享：通过VETASSESS技能评估，成功获得澳洲技术移民加分的完整经历。",
      category: "case",
      publishDate: "2025-01-05",
      readTime: 12,
      image: "/images/blog/australia-success-case.jpg"
    },
    {
      id: 6,
      title: "学历认证常见问题解答TOP10",
      excerpt: "汇总学历认证过程中最常遇到的问题及专业解答，涵盖材料准备、时间安排、费用预算等。",
      category: "faq",
      publishDate: "2025-01-03",
      readTime: 5,
      image: "/images/blog/faq-top10.jpg"
    }
  ],
  en: [
    {
      id: 1,
      title: "Complete 2025 WES Credential Evaluation Guide",
      excerpt: "Detailed introduction to WES evaluation process, required documents, processing time and important considerations for US credential recognition.",
      category: "guide",
      publishDate: "2025-01-15",
      readTime: 8,
      image: "/images/blog/wes-guide.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Apostille vs Consular Certification: Choosing the Right International Authentication",
      excerpt: "Comparative analysis of Apostille and Consular certification differences, applicable countries, and processes to help you choose the best option.",
      category: "guide",
      publishDate: "2025-01-12",
      readTime: 6,
      image: "/images/blog/apostille-vs-consular.jpg"
    },
    {
      id: 3,
      title: "Latest UK Credential Recognition Policy Updates",
      excerpt: "Post-Brexit changes in UK credential recognition policies, ENIC-NARIC updates, comprehensive analysis of new requirements and processes.",
      category: "policy",
      publishDate: "2025-01-10",
      readTime: 7,
      image: "/images/blog/uk-policy-update.jpg"
    },
    {
      id: 4,
      title: "Canadian ECA Organization Comparison: WES vs CES vs IQAS",
      excerpt: "Detailed comparison of Canada's three major ECA organizations, their specialties, processing times, and fee differences.",
      category: "guide",
      publishDate: "2025-01-08",
      readTime: 9,
      image: "/images/blog/canada-eca-comparison.jpg"
    },
    {
      id: 5,
      title: "Australian Credential Assessment Success Story: From Application to PR",
      excerpt: "Real case study: Successfully obtaining Australian skilled migration points through VETASSESS skills assessment - complete journey shared.",
      category: "case",
      publishDate: "2025-01-05",
      readTime: 12,
      image: "/images/blog/australia-success-case.jpg"
    },
    {
      id: 6,
      title: "TOP 10 Credential Assessment FAQ",
      excerpt: "Collection of most frequently asked questions during credential assessment process, covering document preparation, timing, and budget planning.",
      category: "faq",
      publishDate: "2025-01-03",
      readTime: 5,
      image: "/images/blog/faq-top10.jpg"
    }
  ]
};

export default function LocalizedBlog() {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh';
  const t = translations[locale as keyof typeof translations] || translations.zh;
  const posts = blogPosts[locale as keyof typeof blogPosts] || blogPosts.zh;
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // 筛选文章
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/schools`}>
                {t.schools}
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/guide`}>
                {t.guide}
              </Link>
              <Link className="text-sm font-medium transition-colors text-blue-600" href={`/${locale}/blog`}>
                {t.blog}
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href={`/${locale}/contact`}>
                {t.contact}
              </Link>
            </div>
            
            {/* Language Switcher */}
            <div className="hidden md:flex items-center space-x-2 mr-4">
              <Link 
                href="/zh/blog" 
                className={`px-3 py-1 rounded text-sm ${locale === 'zh' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
              >
                中文
              </Link>
              <Link 
                href="/en/blog" 
                className={`px-3 py-1 rounded text-sm ${locale === 'en' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
              >
                EN
              </Link>
            </div>
            
            <Link 
              href={`https://wa.me/1234567890?text=${locale === 'en' ? 'Hello, I would like to inquire about academic credential services.' : '您好，我想咨询学历认证服务。'}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:flex bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
            >
              {t.whatsappButton}
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              📚 {t.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4">{t.subtitle}</p>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">{t.description}</p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">📄</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {locale === 'en' ? 'FEATURED' : '精选文章'}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {t.categories[featuredPost.category as keyof typeof t.categories]}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <span>{t.publishedOn} {featuredPost.publishDate}</span>
                        <span className="mx-2">•</span>
                        <span>{featuredPost.readTime} {t.minutes} {t.readTime}</span>
                      </div>
                      <Link 
                        href={`/${locale}/blog/${featuredPost.id}`}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        {t.readMore}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Search and Filter */}
        <section className="py-8 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* 搜索框 */}
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input 
                  type="text"
                  placeholder={t.searchPlaceholder}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* 分类筛选 */}
              <div className="flex flex-wrap gap-2">
                {Object.entries(t.categories).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === key
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-8 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 text-4xl">📄</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                        {t.categories[post.category as keyof typeof t.categories]}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        <div>{post.publishDate}</div>
                        <div>{post.readTime} {t.minutes} {t.readTime}</div>
                      </div>
                      <Link 
                        href={`/${locale}/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                      >
                        {t.readMore} →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📭</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  {locale === 'en' ? 'No articles found' : '暂无文章'}
                </h3>
                <p className="text-gray-500">
                  {locale === 'en' ? 'Try adjusting your search terms or filters' : '请尝试调整搜索关键词或筛选条件'}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-blue-700">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              {locale === 'en' 
                ? 'Still have questions about credential assessment?' 
                : '关于学历认证还有疑问？'
              }
            </h2>
            <p className="text-xl mb-8">
              {locale === 'en'
                ? 'Our professional advisors are ready to provide personalized consultation and solutions.'
                : '我们的专业顾问随时为您提供个性化咨询和解决方案。'
              }
            </p>
            <Link 
              href={`https://wa.me/1234567890?text=${locale === 'en' ? 'Hello, I have questions about credential assessment after reading your blog.' : '您好，我看了您的博客文章，对学历认证有一些问题想咨询。'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
            >
              <span className="mr-2">📱</span>
              {t.whatsappButton}
            </Link>
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