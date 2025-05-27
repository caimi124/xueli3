import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const blogPosts = [
  {
    title: '学历认证常见问题解答',
    date: '2024-05-01',
    excerpt: '解答用户在学历认证过程中最常见的疑问，帮助您顺利完成认证。',
    url: '#',
  },
  {
    title: '如何选择合适的认证类型',
    date: '2024-04-15',
    excerpt: '针对不同需求，介绍各类学历认证的适用场景和办理要点。',
    url: '#',
  },
  {
    title: '学历认证材料准备指南',
    date: '2024-03-28',
    excerpt: '详细讲解学历认证所需材料的准备方法和注意事项。',
    url: '#',
  },
];

export default function BlogPage() {
  return (
    <Layout>
      <SEO
        title="博客 - 学历认证服务平台"
        description="分享学历认证相关的最新资讯、经验与指南。"
        keywords={["学历认证", "博客", "认证经验", "最新资讯"]}
      />
      <div className="bg-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">博客</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            分享学历认证相关的最新资讯、经验与指南。
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <div className="text-gray-400 text-sm mb-2">{post.date}</div>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <a href={post.url} className="text-blue-600 hover:underline font-medium">阅读全文</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 