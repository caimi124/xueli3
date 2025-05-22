import { GetServerSideProps } from 'next';
import { getDatabaseItems } from '../lib/notion';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://academic-cert.com';

function generateSiteMap(posts: { slug: string, date: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
           xmlns:xhtml="http://www.w3.org/1999/xhtml">
     <url>
       <loc>${SITE_URL}</loc>
       <xhtml:link rel="alternate" hreflang="zh" href="${SITE_URL}?locale=zh"/>
       <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}?locale=en"/>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${SITE_URL}/contact</loc>
       <xhtml:link rel="alternate" hreflang="zh" href="${SITE_URL}/contact?locale=zh"/>
       <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/contact?locale=en"/>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${SITE_URL}/blog</loc>
       <xhtml:link rel="alternate" hreflang="zh" href="${SITE_URL}/blog?locale=zh"/>
       <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/blog?locale=en"/>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     ${posts
       .map(({ slug, date }) => {
         return `
       <url>
         <loc>${`${SITE_URL}/blog/${slug}`}</loc>
         <xhtml:link rel="alternate" hreflang="zh" href="${SITE_URL}/blog/${slug}?locale=zh"/>
         <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/blog/${slug}?locale=en"/>
         <lastmod>${date}</lastmod>
         <changefreq>monthly</changefreq>
         <priority>0.7</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will handle the XML generation
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    // 获取所有博客文章
    const posts = await getDatabaseItems();
    
    // 设置正确的内容类型
    res.setHeader('Content-Type', 'text/xml');
    // 禁用缓存以确保最新数据
    res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
    // 生成XML
    res.write(generateSiteMap(posts));
    res.end();
  } catch (error) {
    console.error('生成站点地图失败:', error);
    res.statusCode = 500;
    res.end('Error generating sitemap');
  }
  
  return {
    props: {},
  };
};

export default SiteMap; 