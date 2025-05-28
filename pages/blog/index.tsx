import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

// 博客分类
const categories = [
  { id: 'all', name: '全部文章', icon: '📚' },
  { id: 'process', name: '认证流程', icon: '🎓' },
  { id: 'cases', name: '成功案例', icon: '✅' },
  { id: 'faq', name: '常见问题', icon: '❓' },
  { id: 'guides', name: '各国指南', icon: '🌐' },
  { id: 'hot', name: '热门推荐', icon: '🔥' }
];

// 博客文章数据
const posts = [
  {
    id: 1,
    title: '快速获得学历认证的正规方法【2025权威指南】',
    slug: 'quick-degree-verification-guide-2025',
    category: 'process',
    tags: ['学历认证', '正规学历', '快速学历办理'],
    excerpt: '本文详细讲解如何通过官方渠道获取学历认证，涵盖流程、风险、防坑指南，并提供快速获得正规学历的实用方法。',
    coverImage: '/images/blog/verification-guide.jpg',
    date: '2024-03-15',
    readTime: '8分钟',
    isHot: true
  },
  {
    id: 2,
    title: '【2025版】各国工作签证所需学历要求大全',
    slug: 'work-visa-degree-requirements-2025',
    category: 'guides',
    tags: ['新加坡', '马来西亚', '工作签证', '学历要求'],
    excerpt: '全面解析新加坡、马来西亚等热门国家的工作签证学历要求，助你顺利通过签证审核。',
    coverImage: '/images/blog/visa-requirements.jpg',
    date: '2024-03-10',
    readTime: '10分钟',
    isHot: true
  },
  {
    id: 3,
    title: '真实可查！10所支持认证的热门院校推荐',
    slug: 'top-10-verified-universities',
    category: 'cases',
    tags: ['可查大学', '学历认证', '院校推荐'],
    excerpt: '精选10所支持学历认证的热门院校，包括美国、英国、澳大利亚等国家的知名大学。',
    coverImage: '/images/blog/universities.jpg',
    date: '2024-03-05',
    readTime: '12分钟',
    isHot: false
  }
];

// 推荐文章
const recommendedPosts = posts.filter(post => post.isHot);

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // 过滤文章
  const filteredPosts = useMemo(() => {
    let result = posts;
    
    // 分类过滤
    if (selectedCategory !== 'all') {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    // 搜索过滤
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    return result;
  }, [selectedCategory, searchTerm]);

  // 分页逻辑
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const pageContent = (
    <>
      <SEO 
        title="学历认证指南 | Acaboost"
        description="掌握权威、真实、官方可查的学历认证知识，提供专业的学历认证服务指南。"
        keywords={["学历认证", "学历办理", "学历认证流程", "学历认证服务"]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">学历认证指南</h1>
          <p className="text-xl md:text-2xl mb-8">掌握权威、真实、官方可查的学历认证知识</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1">
            <input
              type="text"
              placeholder="搜索文章..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex-1">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-blue-600">{categories.find(c => c.id === post.category)?.name}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-2">
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

      {/* WhatsApp CTA */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">需要专业学历认证服务？</h2>
          <p className="text-xl mb-6">我们的顾问随时为您提供专业支持</p>
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
          >
            立即咨询
          </a>
        </div>
      </div>
    </>
  );

  return <Layout>{pageContent}</Layout>;
};

export default BlogPage; 