import React, { useState, useMemo } from 'react';
import type { ChangeEvent } from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiClock, FiCalendar, FiTag } from 'react-icons/fi';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  views?: number;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

// 博客分类
const categories: Category[] = [
  { id: 'all', name: '全部文章', icon: '📚' },
  { id: 'process', name: '认证流程', icon: '📋' },
  { id: 'cases', name: '真实案例', icon: '📝' },
  { id: 'countries', name: '热门国家', icon: '🌍' },
  { id: 'tips', name: '注意事项', icon: '💡' },
  { id: 'faq', name: '常见问题', icon: '❓' }
];

// 博客文章数据
const posts: BlogPost[] = [
  {
    id: 1,
    title: '快速获得学历认证的正规方法【2025权威指南】',
    slug: 'how-to-get-certified-degree',
    category: 'process',
    tags: ['认证流程', '正规学历', '快速学历办理'],
    excerpt: '本文详细讲解如何通过官方渠道获取学历认证，涵盖流程、风险、防坑指南，并提供快速获得正规学历的实用方法。',
    coverImage: '/images/blog/degree-certification.jpg',
    date: '2024-03-15',
    readTime: '8分钟',
    views: 1234
  },
  {
    id: 2,
    title: '【2025版】各国工作签证所需学历要求大全',
    slug: 'work-visa-degree-requirements',
    category: 'countries',
    tags: ['新加坡', '马来西亚', '工作签证', '学历要求'],
    excerpt: '全面解析新加坡、马来西亚等热门国家的工作签证学历要求，助你顺利通过签证审核。',
    coverImage: '/images/blog/work-visa.jpg',
    date: '2024-03-10',
    readTime: '10分钟'
  },
  {
    id: 3,
    title: '真实可查！10所支持认证的热门院校推荐',
    slug: 'top-certified-universities',
    category: 'cases',
    tags: ['可查大学', '学历认证', '院校推荐'],
    excerpt: '精选10所支持学历认证的热门院校，包括美国、英国、澳大利亚等国家的知名大学。',
    coverImage: '/images/blog/universities.jpg',
    date: '2024-03-05',
    readTime: '12分钟'
  }
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const postsPerPage = 9;

  // 处理搜索输入
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // 重置到第一页
  };

  // 处理分类选择
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); // 重置到第一页
  };

  // 过滤和搜索逻辑
  const filteredPosts = useMemo(() => {
    try {
      const searchLower = searchQuery.toLowerCase();
      return posts.filter(post => {
        const matchesSearch = searchQuery === '' || 
          post.title.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchLower));
        
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
      });
    } catch (err) {
      setError('搜索过程中发生错误');
      return [];
    }
  }, [searchQuery, selectedCategory, posts]);

  // 分页逻辑
  const { currentPosts, totalPages } = useMemo(() => {
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const currentPosts = filteredPosts.slice(
      (currentPage - 1) * postsPerPage,
      currentPage * postsPerPage
    );
    return { currentPosts, totalPages };
  }, [filteredPosts, currentPage, postsPerPage]);

  // 处理分页
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 处理上一页
  const handlePrevPage = () => {
    setCurrentPage(p => Math.max(1, p - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 处理下一页
  const handleNextPage = () => {
    setCurrentPage(p => Math.min(totalPages, p + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 如果发生错误，显示错误信息
  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-6 bg-white rounded-lg shadow-md max-w-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">出错了</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => setError(null)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              重试
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title="学历认证指南 - 认证流程、真实案例、国家政策"
        description="掌握权威、真实、官方可查的学历认证知识，包括认证流程详解、真实客户案例、国家政策变动等。"
        keywords={['学历认证', '认证流程', '真实案例', '国家政策', '学历办理'].join(', ')}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Banner */}
        <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              获取学历认证最新资讯
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              认证流程详解、真实客户案例、国家政策变动一手掌握
            </p>
          </div>
        </section>

        {/* 搜索和分类筛选 */}
        <section className="py-8 px-6 bg-white shadow-sm">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* 搜索框 */}
              <div className="relative flex-1 max-w-2xl">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FiSearch size={20} />
                </div>
                <input
                  type="text"
                  placeholder="搜索你关心的问题..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                />
              </div>

              {/* 分类标签 */}
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span>{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 博客文章列表 */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : currentPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentPosts.map(post => (
                    <article 
                      key={post.id}
                      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: 'cover' }}
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                            {categories.find(c => c.id === post.category)?.name}
                          </span>
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <FiClock size={16} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <h2 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map(tag => (
                            <span 
                              key={tag}
                              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                            >
                              <FiTag size={12} />
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <FiCalendar size={16} />
                            <span>{post.date}</span>
                          </div>
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                          >
                            阅读全文
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* 分页控件 */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12 gap-2">
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-lg bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 border border-gray-200"
                    >
                      上一页
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-lg ${
                          currentPage === page
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded-lg bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 border border-gray-200"
                    >
                      下一页
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="mb-6">
                  <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">未找到相关文章</h3>
                <p className="text-gray-600 mb-6">
                  您可以尝试其他关键词，或直接联系我们的顾问获取帮助
                </p>
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
            )}
          </div>
        </section>

        {/* CTA 区域 */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">有认证问题？快速联系顾问</h2>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">📱</span>
              WhatsApp 一键咨询
            </a>
          </div>
        </section>

        {/* 浮动 WhatsApp 按钮 */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg z-50 flex items-center transition-colors"
        >
          <span className="mr-2">📱</span>
          立即咨询
        </a>
      </main>
    </Layout>
  );
} 