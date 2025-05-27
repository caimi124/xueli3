import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Image from 'next/image';

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
        description="浏览我们的博客，了解学历认证成功案例、认证指南以及行业最新资讯，助您顺利完成学历认证。"
        keywords={["学历认证博客", "认证成功案例", "国际学历指南", "学历认证技巧", "认证行业资讯"]}
      />
      <div className="bg-blue-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            alt="博客资讯"
            src="/images/blog-banner.jpg"
            fill
            style={{ objectFit: 'cover' }}
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

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">特色文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <a href="/blog/how-to-ensure-credential-authentication" className="block">
                <div className="relative h-64">
                  <Image
                    alt="如何确保您的学历认证通过率？5个专家建议"
                    src="/images/blog/credential-tips.jpg"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>2023-11-15</span>
                    <span className="mx-2">•</span>
                    <span>6 分钟</span>
                    <span className="mx-2">•</span>
                    <span className="text-blue-600">实用技巧</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">如何确保您的学历认证通过率？5个专家建议</h3>
                  <p className="text-gray-600 mb-4">学历认证流程可能复杂且耗时，本文分享专家提供的5个关键建议，帮助您顺利通过学历认证，提高成功率。</p>
                  <span className="inline-flex items-center text-blue-600">
                    阅读更多
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <a href="/blog/case-study-harvard-mba" className="block">
                <div className="relative h-64">
                  <Image
                    alt="案例分析：7天内获得哈佛大学MBA学位认证"
                    src="/images/blog/harvard-case.jpg"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>2023-11-02</span>
                    <span className="mx-2">•</span>
                    <span>8 分钟</span>
                    <span className="mx-2">•</span>
                    <span className="text-blue-600">成功案例</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">案例分析：7天内获得哈佛大学MBA学位认证</h3>
                  <p className="text-gray-600 mb-4">本文详细分析一位金融行业客户如何在紧急情况下，仅用7天时间成功获得哈佛大学MBA学位认证，并成功获得高管职位。</p>
                  <span className="inline-flex items-center text-blue-600">
                    阅读更多
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap justify-center border-b border-gray-200">
            <button className="px-4 py-2 text-sm font-medium mx-1 mb-2 text-blue-600 border-b-2 border-blue-600">全部文章</button>
            <button className="px-4 py-2 text-sm font-medium mx-1 mb-2 text-gray-500 hover:text-blue-600">成功案例</button>
            <button className="px-4 py-2 text-sm font-medium mx-1 mb-2 text-gray-500 hover:text-blue-600">认证指南</button>
            <button className="px-4 py-2 text-sm font-medium mx-1 mb-2 text-gray-500 hover:text-blue-600">行业资讯</button>
            <button className="px-4 py-2 text-sm font-medium mx-1 mb-2 text-gray-500 hover:text-blue-600">实用技巧</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article cards */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <a href="/blog/how-to-ensure-credential-authentication" className="block">
                <div className="relative h-48">
                  <Image
                    alt="如何确保您的学历认证通过率？5个专家建议"
                    src="/images/blog/credential-tips.jpg"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>2023-11-15</span>
                    <span className="mx-2">•</span>
                    <span>6 分钟</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">如何确保您的学历认证通过率？5个专家建议</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">学历认证流程可能复杂且耗时，本文分享专家提供的5个关键建议，帮助您顺利通过学历认证，提高成功率。</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">实用技巧</span>
                    <span className="text-sm text-blue-600">阅读更多</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Add more article cards here */}
          </div>
        </div>
      </div>

      <div className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">订阅我们的通讯</h2>
            <p className="text-gray-600 mb-6">获取最新的学历认证资讯、案例分析和专业建议，直接发送到您的邮箱</p>
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
            <p className="text-xs text-gray-500 mt-3">我们尊重您的隐私，不会发送垃圾邮件</p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-3/5 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-white mb-4">需要专业学历认证服务？</h2>
                <p className="text-blue-100 mb-6">我们的专家团队随时准备为您提供个性化的学历认证解决方案，满足您的特定需求</p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  立即咨询
                </a>
              </div>
              <div className="md:w-2/5 bg-blue-900 relative hidden md:block">
                <div className="absolute inset-0 opacity-20">
                  <Image
                    alt="联系我们"
                    src="/images/contact-cta.jpg"
                    fill
                    style={{ objectFit: 'cover' }}
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