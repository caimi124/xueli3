import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default function BlogPage() {
  // 文章分类
  const categories = [
    { id: 'all', name: '全部文章' },
    { id: 'case-study', name: '成功案例' },
    { id: 'guide', name: '认证指南' },
    { id: 'industry', name: '行业资讯' },
    { id: 'tips', name: '实用技巧' }
  ];
  
  // 博客文章
  const blogPosts = [
    {
      id: 1,
      title: '如何确保您的学历认证通过率？5个专家建议',
      slug: 'how-to-ensure-credential-authentication',
      excerpt: '学历认证流程可能复杂且耗时，本文分享专家提供的5个关键建议，帮助您顺利通过学历认证，提高成功率。',
      category: 'tips',
      date: '2023-11-15',
      readTime: '6 分钟',
      image: '/images/blog/credential-tips.jpg',
      featured: true
    },
    {
      id: 2,
      title: '案例分析：7天内获得哈佛大学MBA学位认证',
      slug: 'case-study-harvard-mba',
      excerpt: '本文详细分析一位金融行业客户如何在紧急情况下，仅用7天时间成功获得哈佛大学MBA学位认证，并成功获得高管职位。',
      category: 'case-study',
      date: '2023-11-02',
      readTime: '8 分钟',
      image: '/images/blog/harvard-case.jpg',
      featured: true
    },
    {
      id: 3,
      title: '2023年全球学历认证新政策解析',
      slug: 'global-credential-policies-2023',
      excerpt: '随着国际教育交流的深入发展，各国学历认证政策也在不断调整。本文解析2023年主要国家学历认证政策的最新变化。',
      category: 'industry',
      date: '2023-10-25',
      readTime: '10 分钟',
      image: '/images/blog/policy-update.jpg',
      featured: false
    },
    {
      id: 4,
      title: '英国学历认证完全指南：从申请到获得证书',
      slug: 'uk-credential-authentication-guide',
      excerpt: '英国的学历认证体系有其独特之处，本指南详细介绍英国学历认证的流程、所需材料、时间安排及注意事项。',
      category: 'guide',
      date: '2023-10-18',
      readTime: '12 分钟',
      image: '/images/blog/uk-guide.jpg',
      featured: false
    },
    {
      id: 5,
      title: '成功案例：紧急学历认证助力海外求职',
      slug: 'emergency-credential-for-overseas-job',
      excerpt: '一位IT行业客户如何在面临签证截止日期的紧急情况下，通过我们的加急服务，成功获得澳大利亚工作签证。',
      category: 'case-study',
      date: '2023-10-10',
      readTime: '7 分钟',
      image: '/images/blog/australia-case.jpg',
      featured: false
    },
    {
      id: 6,
      title: '学历认证VS学位认证：了解关键区别',
      slug: 'credential-vs-degree-authentication',
      excerpt: '很多人混淆学历认证和学位认证，本文详细解析两者的区别、适用场景及如何选择适合自己的认证类型。',
      category: 'guide',
      date: '2023-09-28',
      readTime: '9 分钟',
      image: '/images/blog/credential-types.jpg',
      featured: false
    }
  ];
  
  // 分类筛选
  const [activeCategory, setActiveCategory] = useState('all');
  
  // 根据分类筛选文章
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  // 获取特色文章
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <Layout>
      <SEO
        title="博客 - 学历认证服务平台"
        description="浏览我们的博客，了解学历认证成功案例、认证指南以及行业最新资讯，助您顺利完成学历认证。"
        keywords={['学历认证博客', '认证成功案例', '国际学历指南', '学历认证技巧', '认证行业资讯']}
      />
      
      {/* 顶部横幅 */}
      <div className="bg-blue-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/blog-banner.jpg"
            alt="博客资讯"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">博客与资讯</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              学历认证知识、成功案例分享与行业资讯
            </p>
          </div>
        </div>
      </div>
      
      {/* 特色文章 */}
      {featuredPosts.length > 0 && (
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">特色文章</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/blog/${post.slug}`}>
                    <a className="block">
                      <div className="relative h-64">
                        <Image
                          src={post.image || "/images/blog-placeholder.jpg"}
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                          <span className="mx-2">•</span>
                          <span className="text-blue-600">{categories.find(c => c.id === post.category)?.name}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <span className="inline-flex items-center text-blue-600">
                          阅读更多
                          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* 文章列表 */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* 分类筛选 */}
          <div className="mb-8 flex flex-wrap justify-center border-b border-gray-200">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 text-sm font-medium mx-1 mb-2 ${
                  activeCategory === category.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* 文章网格 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`}>
                  <a className="block">
                    <div className="relative h-48">
                      <Image
                        src={post.image || "/images/blog-placeholder.jpg"}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                        <span className="text-sm text-blue-600">阅读更多</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
          
          {/* 无结果提示 */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">没有找到相关文章</h3>
              <p className="mt-1 text-gray-500">请尝试选择其他分类</p>
            </div>
          )}
        </div>
      </div>
      
      {/* 订阅通讯 */}
      <div className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">订阅我们的通讯</h2>
            <p className="text-gray-600 mb-6">
              获取最新的学历认证资讯、案例分析和专业建议，直接发送到您的邮箱
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="输入您的电子邮箱"
                className="flex-grow px-4 py-3 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                订阅
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              我们尊重您的隐私，不会发送垃圾邮件
            </p>
          </div>
        </div>
      </div>
      
      {/* 联系建议 */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-3/5 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-white mb-4">需要专业学历认证服务？</h2>
                <p className="text-blue-100 mb-6">
                  我们的专家团队随时准备为您提供个性化的学历认证解决方案，满足您的特定需求
                </p>
                <Link href="/contact">
                  <a className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-medium py-2 px-6 rounded-lg transition-colors">
                    立即咨询
                  </a>
                </Link>
              </div>
              <div className="md:w-2/5 bg-blue-900 relative hidden md:block">
                <div className="absolute inset-0 opacity-20">
                  <Image
                    src="/images/contact-cta.jpg"
                    alt="联系我们"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 