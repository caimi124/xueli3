import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { blogPosts, BlogPost } from '@/data/blog-posts';

// 分类列表
const categories = [
  "全部",
  "流程科普",
  "国家攻略",
  "学校推荐",
  "假学历风险",
  "行业案例",
  "材料详解",
  "用途拓展",
  "时间成本",
  "用户故事",
  "问答整理"
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("全部");
  const [searchTerm, setSearchTerm] = React.useState("");

  // 过滤文章
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "全部" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
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
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-blue-600">{post.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.summary}</p>
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
      </div>

      {/* WhatsApp CTA */}
      <div className="bg-green-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">需要专业学历认证服务？</h2>
          <p className="text-xl mb-6">我们的顾问随时为您提供专业支持</p>
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
          >
            立即咨询
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage; 