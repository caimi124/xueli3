/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 移除内置的i18n配置，使用自定义路由结构
  // i18n: {
  //   locales: ['zh', 'en'],
  //   defaultLocale: 'zh',
  // },
  async redirects() {
    return [
      // 重定向根路径到中文版本
      {
        source: '/',
        destination: '/zh',
        permanent: true,
      },
      // 重定向旧的页面路径到新的多语言结构
      {
        source: '/guide',
        destination: '/zh/guide',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/zh/blog',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/zh/contact',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // 压缩配置
  compress: true,
  poweredByHeader: false,
  // 预加载关键资源
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Content-Language',
            value: 'zh-CN, en-US'
          }
        ],
      },
      {
        source: '/zh/:path*',
        headers: [
          {
            key: 'Content-Language',
            value: 'zh-CN'
          }
        ],
      },
      {
        source: '/en/:path*',
        headers: [
          {
            key: 'Content-Language',
            value: 'en-US'
          }
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
};

module.exports = nextConfig; 