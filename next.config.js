/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用实验性功能
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@headlessui/react', 'lucide-react'],
    turbo: {
      resolveAlias: {
        canvas: './empty-module.js',
      },
    },
  },

  // 图片优化配置
  images: {
    // 启用图片优化
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // CDN配置
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'acaboost.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.acaboost.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
    
    // 图片加载策略
    loader: 'default',
    
    // 禁用静态导入优化（使用动态导入）
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // 图片缓存配置
    minimumCacheTTL: 86400, // 24小时
    
    // 不优化的图片格式
    unoptimized: false,
  },

  // 压缩配置
  compress: true,
  
  // 输出配置
  output: 'standalone',
  
  // 静态资源优化
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://cdn.acaboost.com' 
    : '',

  // 编译优化
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    'lodash': {
      transform: 'lodash/{{member}}',
    },
  },

  // 头部优化
  async headers() {
    return [
      {
        // 应用于所有路由
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // 静态资源缓存
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // 字体缓存
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Service Worker缓存
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'Service-Worker-Allowed',
            value: '/',
          },
        ],
      },
      {
        // Manifest文件
        source: '/manifest.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
          {
            key: 'Content-Type',
            value: 'application/manifest+json',
          },
        ],
      },
      {
        // API路由缓存
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=300, stale-while-revalidate=60',
          },
        ],
      },
    ];
  },

  // 重写规则
  async rewrites() {
    return [
      // 图片代理到CDN
      {
        source: '/images/:path*',
        destination: process.env.NODE_ENV === 'production'
          ? 'https://cdn.acaboost.com/images/:path*'
          : '/images/:path*',
      },
    ];
  },

  // 重定向规则
  async redirects() {
    return [
      // WWW重定向
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.acaboost.com',
          },
        ],
        destination: 'https://acaboost.com/:path*',
        permanent: true,
      },
      // 旧路径重定向
      {
        source: '/credentials',
        destination: '/zh/guide',
        permanent: true,
      },
      {
        source: '/universities',
        destination: '/zh/schools',
        permanent: true,
      },
    ];
  },

  // Webpack配置优化
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 分析包大小
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      );
    }

    // 优化包分割
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      };
    }

    // 添加别名
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname),
      '@/components': require('path').resolve(__dirname, 'components'),
      '@/lib': require('path').resolve(__dirname, 'lib'),
      '@/types': require('path').resolve(__dirname, 'types'),
    };

    // 性能优化
    config.performance = {
      maxAssetSize: 1000000, // 1MB
      maxEntrypointSize: 1000000, // 1MB
    };

    return config;
  },

  // TypeScript配置
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint配置
  eslint: {
    ignoreDuringBuilds: false,
  },

  // 环境变量
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://acaboost.com',
    NEXT_PUBLIC_CDN_URL: process.env.NEXT_PUBLIC_CDN_URL || 'https://cdn.acaboost.com',
  },

  // 生产模式优化
  ...(process.env.NODE_ENV === 'production' && {
    distDir: '.next',
    generateEtags: true,
    poweredByHeader: false,
    trailingSlash: false,
    
    // 严格模式
    reactStrictMode: true,
  }),
};

module.exports = nextConfig; 