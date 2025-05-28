import React, { useState, useMemo } from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Image from 'next/image';
import Link from 'next/link';

// 博客分类
const categories = [
  { id: 'all', name: '全部文章' },
  { id: 'process', name: '认证流程' },
  { id: 'cases', name: '真实案例' },
  { id: 'countries', name: '热门国家' },
  { id: 'tips', name: '注意事项' },
  { id: 'faq', name: '常见问题' }
];

// 博客文章数据
const posts = [
  {
    id: 1,
    title: '快速获得学历认证的正规方法【2025权威指南】',
    slug: 'how-to-get-certified-degree',
    category: 'process',
    tags: ['认证流程', '正规学历', '快速学历办理'],
    excerpt: '本文详细讲解如何通过官方渠道获取学历认证，涵盖流程、风险、防坑指南，并提供快速获得正规学历的实用方法。',
    coverImage: '/images/blog/degree-certification.jpg',
    date: '2024-03-15',
    readTime: '8分钟'
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
  const postsPerPage = 6;

  // 过滤和搜索逻辑
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // 分页逻辑
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const pageContent = (
    <>
      <SEO
        title="学历认证指南 - 认证流程、真实案例、国家政策"
        description="掌握权威、真实、官方可查的学历认证知识，包括认证流程详解、真实客户案例、国家政策变动等。"
        keywords={['学历认证', '认证流程', '真实案例', '国家政策', '学历办理']}
      />

      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Banner */}
        <section 
          className="relative py-20 px-6 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/blog-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              获取学历认证最新资讯
            </h1>
            <p className="text-xl md:text-2xl">
              认证流程详解、真实客户案例、国家政策变动一手掌握
            </p>
          </div>
        </section>

        {/* 搜索和分类筛选 */}
        <section className="py-8 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {/* 搜索框 */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="请输入关键词（如：学历认证、英国硕士）"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-2xl mx-auto px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* 分类标签 */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 博客文章列表 */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            {currentPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentPosts.map(post => (
                    <article 
                      key={post.id}
                      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                    >
                      <div className="relative h-48">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
                            {categories.find(c => c.id === post.category)?.name}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {post.readTime}
                          </span>
                        </div>
                        <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map(tag => (
                            <span 
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {post.date}
                          </span>
                          <Link href={`/blog/${post.slug}`}>
                            <a className="text-blue-600 hover:text-blue-700 font-medium">
                              阅读全文 →
                            </a>
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
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                    >
                      上一页
                    </button>
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
                    <button
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                    >
                      下一页
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
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
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">有认证问题？快速联系顾问</h2>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors"
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
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg z-50 flex items-center"
        >
          <span className="mr-2">📱</span>
          立即咨询
        </a>
      </main>
    </>
  );

  return <Layout>{pageContent}</Layout>;
} 