/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
  images: {
    domains: ['api.notion.com', 's3.us-west-2.amazonaws.com', 'www.notion.so'],
    unoptimized: process.env.NODE_ENV === 'production',
  },
};
module.exports = nextConfig; 