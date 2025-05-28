import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaTag } from 'react-icons/fa';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: '如何选择适合自己的留学国家',
      excerpt: '选择留学国家是留学规划中的重要一步，本文将为您详细介绍各个国家的教育特点、生活成本、就业前景等信息，帮助您做出明智的选择。',
      date: '2024-03-15',
      category: '留学规划',
      readTime: '5分钟'
    },
    {
      id: 2,
      title: '美国留学申请全攻略',
      excerpt: '从选校、准备材料到签证申请，本文为您提供美国留学的完整申请指南，助您顺利实现留学梦想。',
      date: '2024-03-10',
      category: '申请指南',
      readTime: '8分钟'
    },
    {
      id: 3,
      title: '英国大学排名解析',
      excerpt: '深入分析英国大学排名体系，帮助您了解不同排名指标的含义，选择最适合自己的院校。',
      date: '2024-03-05',
      category: '院校信息',
      readTime: '6分钟'
    },
    {
      id: 4,
      title: '留学文书写作技巧',
      excerpt: '分享留学申请文书的写作技巧，包括个人陈述、推荐信等材料的准备方法，提升申请竞争力。',
      date: '2024-03-01',
      category: '申请指南',
      readTime: '7分钟'
    },
    {
      id: 5,
      title: '留学生活指南',
      excerpt: '为即将出国的留学生提供实用的生活建议，包括住宿、饮食、交通、医疗等各个方面。',
      date: '2024-02-25',
      category: '留学生活',
      readTime: '10分钟'
    },
    {
      id: 6,
      title: '留学费用预算指南',
      excerpt: '详细分析留学各项费用，帮助您做好留学预算规划，避免经济压力。',
      date: '2024-02-20',
      category: '留学规划',
      readTime: '6分钟'
    }
  ];

  const categories = ['全部', '留学规划', '申请指南', '院校信息', '留学生活'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-white mb-4 hover:text-gray-200">
            <FaArrowLeft className="mr-2" />
            返回首页
          </Link>
          <h1 className="text-4xl font-bold mb-4">留学博客</h1>
          <p className="text-xl">获取最新的留学资讯和实用指南</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white shadow hover:bg-blue-50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-gray-500 flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {post.date}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-sm text-blue-600">
                    <FaTag className="mr-2" />
                    {post.category}
                  </span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    阅读更多
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="px-4 py-2 rounded bg-white shadow hover:bg-blue-50">
              上一页
            </button>
            <button className="px-4 py-2 rounded bg-blue-600 text-white">
              1
            </button>
            <button className="px-4 py-2 rounded bg-white shadow hover:bg-blue-50">
              2
            </button>
            <button className="px-4 py-2 rounded bg-white shadow hover:bg-blue-50">
              3
            </button>
            <button className="px-4 py-2 rounded bg-white shadow hover:bg-blue-50">
              下一页
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
} 