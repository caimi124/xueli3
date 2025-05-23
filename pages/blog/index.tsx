import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getDatabaseItems } from '../../lib/notion';
import { GetStaticProps } from 'next';

interface Post {
  id: string;
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  coverImage: string;
}

interface BlogIndexProps {
  posts: Post[];
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  const router = useRouter();
  const { locale } = router;
  
  // Format date based on locale
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return locale === 'zh'
      ? `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
      : new Intl.DateTimeFormat('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }).format(date);
  };

  // SEO数据
  const seoTitle = locale === 'zh' ? '博客 - 学历认证相关资讯和知识' : 'Blog - Certification News and Knowledge';
  const seoDescription = locale === 'zh' 
    ? '浏览我们的博客了解最新的学历认证信息、申请流程指南、国际教育趋势和相关政策更新。'
    : 'Browse our blog for the latest information on academic certification, application process guides, international education trends, and policy updates.';
  
  // 结构化数据 - 博客列表
  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    headline: locale === 'zh' ? '学历认证服务平台博客' : 'Academic Certification Platform Blog',
    description: seoDescription,
    publisher: {
      '@type': 'Organization',
      name: locale === 'zh' ? '学历认证服务平台' : 'Academic Certification Platform',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://academic-cert.com'}/images/logo.png`
      }
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://academic-cert.com'}/blog/${post.slug}`,
      ...(post.coverImage && {
        image: {
          '@type': 'ImageObject',
          url: post.coverImage
        }
      })
    }))
  };

  return (
    <Layout>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={locale === 'zh' 
          ? ['学历认证', '国际教育', '留学认证', '学位认证', '教育资讯'] 
          : ['academic certification', 'international education', 'study abroad', 'degree verification', 'education news']}
        structuredData={blogListSchema}
        type="blog"
      />
      <div className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900">
              {locale === 'zh' ? '博客' : 'Blog'}
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'zh' 
                ? '学历认证相关的最新资讯、指南和文章' 
                : 'Latest news, guides and articles about academic certification'}
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">
              {locale === 'zh' ? '暂无博客文章' : 'No blog posts yet'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-48 bg-blue-100">
                  {post.coverImage ? (
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-500 opacity-80">
                      <span className="text-white font-bold text-xl">{post.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-2">{formatDate(post.date)}</p>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-700"
                    aria-label={locale === 'zh' ? `阅读${post.title}` : `Read more about ${post.title}`}
                  >
                    {locale === 'zh' ? '阅读更多' : 'Read more'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    const posts = await getDatabaseItems();
    
    return {
      props: {
        posts,
      },
      // Revalidate every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return {
      props: {
        posts: [],
      },
      revalidate: 60,
    };
  }
}; 