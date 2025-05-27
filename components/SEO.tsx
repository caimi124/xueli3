import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[] | string;
}

const SEO = ({ title, description, keywords = [] }: SEOProps) => {
  // 确保 keywords 是数组
  const keywordsArray = Array.isArray(keywords) ? keywords : 
    typeof keywords === 'string' ? keywords.split(',').map(k => k.trim()) : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywordsArray.length > 0 && (
        <meta name="keywords" content={keywordsArray.join(', ')} />
      )}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default SEO; 