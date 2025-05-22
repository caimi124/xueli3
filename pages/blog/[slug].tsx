import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getDatabaseItems, getPageBySlug } from '../../lib/notion';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import LoadingSpinner from '../../components/LoadingSpinner';

interface PostProps {
  post: {
    id: string;
    title: string;
    date: string;
    slug: string;
    excerpt: string;
    coverImage: string;
    content: string;
  };
}

export default function Post({ post }: PostProps) {
  const router = useRouter();
  const { locale } = router;
  
  // If the page is still being generated, show a loading state
  if (router.isFallback) {
    return (
      <Layout>
        <SEO 
          title={locale === 'zh' ? '内容加载中...' : 'Loading content...'}
          description={locale === 'zh' ? '请稍候，内容正在准备中' : 'Please wait, content is being prepared'}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <LoadingSpinner fullPage size="large" />
        </div>
      </Layout>
    );
  }
  
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

  // 估计阅读时间
  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return locale === 'zh' 
      ? `${readingTime} 分钟阅读` 
      : `${readingTime} min read`;
  };

  // 生成结构化数据
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date, // 如果有修改日期应该使用修改日期
    author: {
      '@type': 'Organization',
      name: locale === 'zh' ? '学历认证服务平台' : 'Academic Certification Platform'
    },
    publisher: {
      '@type': 'Organization',
      name: locale === 'zh' ? '学历认证服务平台' : 'Academic Certification Platform',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://academic-cert.com'}/images/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://academic-cert.com'}/blog/${post.slug}`
    },
    ...(post.coverImage && {
      image: {
        '@type': 'ImageObject',
        url: post.coverImage
      }
    })
  };

  // 动态生成相关关键词
  let keywords = locale === 'zh' 
    ? '学历认证,留学认证,教育部认证' 
    : 'academic certification,study abroad,education verification';
  
  // 基于文章标题添加额外关键词
  const titleWords = post.title.toLowerCase().split(/\s+/).filter(word => word.length > 3);
  if (titleWords.length > 0) {
    keywords += ',' + titleWords.join(',');
  }

  return (
    <Layout>
      <SEO 
        title={post.title}
        description={post.excerpt}
        image={post.coverImage}
        url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://academic-cert.com'}/blog/${post.slug}`}
        type="article"
        keywords={keywords}
        structuredData={articleSchema}
      />
      <div className="bg-blue-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <Link href="/blog" className="inline-flex items-center text-primary hover:underline">
              <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {locale === 'zh' ? '返回博客列表' : 'Back to blog'}
            </Link>
          </div>
          
          <h1 className="text-3xl font-extrabold text-gray-900 text-center">
            {post.title}
          </h1>
          <div className="mt-3 text-center text-gray-500 flex justify-center items-center space-x-4">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{estimateReadingTime(post.content)}</span>
          </div>
        </div>
      </div>
      
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {post.coverImage && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        )}
        
        <div className="prose prose-blue max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link href="/blog" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            {locale === 'zh' ? '返回博客列表' : 'Back to blog'}
          </Link>
          <Link href="/contact" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-700">
            {locale === 'zh' ? '联系我们' : 'Contact us'}
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales = ['zh', 'en'] }) => {
  const posts = await getDatabaseItems();
  
  // Create paths for each post and each locale
  const paths = posts.flatMap(post => 
    locales.map(locale => ({
      params: { slug: post.slug },
      locale
    }))
  );
  
  return {
    paths,
    // Fallback: 'blocking' means pages that have not been generated at build time will
    // not result in a 404, but instead will wait for the HTML to be generated
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  try {
    // @ts-ignore - We know slug exists
    const slug = params?.slug as string;
    const post = await getPageBySlug(slug);
    
    return {
      props: {
        post,
      },
      // Revalidate every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return {
      notFound: true,
    };
  }
}; 