import { GetServerSideProps } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://academic-cert.com';

function generateRobotsTxt() {
  return `# robots.txt generated for academic-cert.com
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml
`;
}

function RobotsTxt() {
  // getServerSideProps will handle the content generation
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // 设置正确的内容类型
  res.setHeader('Content-Type', 'text/plain');
  // 生成内容
  res.write(generateRobotsTxt());
  res.end();
  
  return {
    props: {},
  };
};

export default RobotsTxt; 