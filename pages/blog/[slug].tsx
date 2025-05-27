import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { blogPosts } from '@/data/blog-posts';

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // 获取当前文章
  const post = blogPosts.find(post => post.slug === slug);

  // 如果文章不存在，显示404
  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">文章未找到</h1>
          <p className="text-gray-600 mb-8">抱歉，您访问的文章不存在。</p>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            返回博客首页
          </Link>
        </div>
      </Layout>
    );
  }

  // 获取相关文章（同类别的前2篇）
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <Layout>
      <SEO 
        title={`${post.title} | Acaboost`}
        description={post.summary}
        keywords={post.tags}
      />

      <article className="container mx-auto px-4 py-12">
        {/* 文章头部 */}
        <header className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800">
              ← 返回博客
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-blue-600">{post.category}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-500">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* 封面图 */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 文章内容 */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* 中部 CTA */}
          <div className="my-12 p-8 bg-blue-50 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">想知道你适合哪种学历认证？</h3>
            <p className="text-gray-600 mb-6">我们的顾问将为您提供专业的评估和建议</p>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors"
            >
              立即咨询
            </a>
          </div>

          {/* 相关文章推荐 */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">你可能感兴趣</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map(relatedPost => (
                  <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{relatedPost.title}</h3>
                        <p className="text-gray-600">{relatedPost.summary}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* 底部 CTA */}
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

export default BlogPostPage; 