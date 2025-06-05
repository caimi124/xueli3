# 🚀 页面加载速度优化指南

本文档介绍了项目中实施的各种性能优化措施和使用方法。

## 📊 优化效果预期

通过实施以下优化措施，预期可以实现：
- **图片加载速度提升 50-70%**
- **首屏加载时间减少 30-50%**
- **LCP（最大内容绘制）改善 40-60%**
- **整体用户体验评分提升**

## 🖼️ 图片优化

### 1. 自动图片优化脚本

我们提供了强大的图片优化脚本，支持多种格式转换和尺寸生成：

```bash
# 优化所有图片
npm run optimize-images

# 分析图片使用情况
npm run analyze-images

# 分析打包大小
npm run analyze-bundle
```

**优化特性：**
- 自动生成 WebP 和 AVIF 格式
- 创建多种响应式尺寸 (400px, 800px, 1200px, 1920px)
- 智能压缩，保持高质量
- 原格式优化作为后备

### 2. 优化图片组件使用

使用 `OptimizedImage` 组件自动选择最佳格式：

```tsx
import OptimizedImage from '@/components/OptimizedImage';

// 基础使用
<OptimizedImage
  src="/images/hero-banner.jpg"
  alt="Hero Banner"
  width={1200}
  height={600}
  priority // 关键图片设置优先级
/>

// 响应式图片
<OptimizedImage
  src="/images/product.jpg"
  alt="Product Image"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="rounded-lg"
/>

// 填充容器
<div className="relative w-full h-64">
  <OptimizedImage
    src="/images/background.jpg"
    alt="Background"
    fill
    className="object-cover"
  />
</div>
```

### 3. 图片预加载策略

#### 关键图片预加载

```tsx
import { preloadCriticalImages } from '@/utils/imagePreloader';

// 在应用启动时预加载关键图片
useEffect(() => {
  preloadCriticalImages([
    { url: '/images/logo.png' },
    { url: '/images/hero-banner.webp' },
    { url: '/images/cta-background.svg' }
  ]);
}, []);
```

#### React Hook 预加载

```tsx
import { useImagePreload } from '@/utils/imagePreloader';

function ProductGallery({ imageUrls }) {
  const { loadedImages, isLoading } = useImagePreload(imageUrls);
  
  return (
    <div>
      {isLoading && <div>Loading images...</div>}
      {imageUrls.map(url => (
        <img 
          key={url}
          src={url}
          className={loadedImages.has(url) ? 'opacity-100' : 'opacity-50'}
        />
      ))}
    </div>
  );
}
```

## ⚡ 性能监控

### 1. 添加性能监控组件

在主布局中添加性能监控：

```tsx
// app/layout.tsx
import PerformanceMonitor from '@/components/PerformanceMonitor';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <PerformanceMonitor />
      </body>
    </html>
  );
}
```

### 2. 查看性能数据

开发环境下，性能数据会存储在 localStorage 中：

```javascript
// 在浏览器控制台查看性能数据
console.table(JSON.parse(localStorage.getItem('performance-data')));
```

生产环境下，数据会发送到 `/api/performance` 端点。

## 🛠️ Next.js 配置优化

我们的 `next.config.js` 包含了以下优化：

### 1. 图片配置
```javascript
images: {
  formats: ['image/avif', 'image/webp'],
  quality: 85,
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

### 2. 压缩和缓存
```javascript
compress: true,
headers: [
  {
    source: '/images/(.*)',
    headers: [
      {
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable',
      },
    ],
  },
]
```

### 3. 代码分割优化
```javascript
webpack: (config) => {
  config.optimization.splitChunks = {
    chunks: 'all',
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        priority: 10,
      },
    },
  };
}
```

## 📱 使用最佳实践

### 1. 图片使用原则

**✅ 推荐做法：**
- 为关键图片设置 `priority={true}`
- 使用适当的 `sizes` 属性
- 为装饰性图片使用 `loading="lazy"`
- 提供有意义的 `alt` 文本

**❌ 避免的做法：**
- 直接使用 `<img>` 标签
- 不设置图片尺寸
- 忽略响应式设计
- 使用过大的原始图片

### 2. 性能优化检查清单

- [ ] 所有图片都经过优化压缩
- [ ] 关键图片设置了预加载
- [ ] 使用了现代图片格式（WebP/AVIF）
- [ ] 实施了懒加载策略
- [ ] 添加了性能监控
- [ ] 配置了适当的缓存策略
- [ ] 启用了代码分割
- [ ] 优化了字体加载

### 3. 监控和维护

**定期检查：**
1. 使用 Lighthouse 检测性能评分
2. 监控 Core Web Vitals 指标
3. 检查图片优化效果
4. 分析打包大小变化

**性能指标目标：**
- FCP (首次内容绘制) < 1.8s
- LCP (最大内容绘制) < 2.5s
- FID (首次输入延迟) < 100ms
- CLS (累积布局偏移) < 0.1

## 🔧 故障排除

### 常见问题

**1. 图片优化脚本失败**
```bash
# 检查 Sharp 是否正确安装
npm list sharp

# 重新安装依赖
npm install sharp --save-dev
```

**2. WebP/AVIF 格式不显示**
- 检查浏览器兼容性
- 确认 CDN 配置正确
- 验证图片路径

**3. 性能监控数据缺失**
- 确认在生产环境运行
- 检查 `/api/performance` 端点
- 查看浏览器控制台错误

### 调试工具

**1. 图片加载分析**
```javascript
// 查看图片预加载统计
import { imagePreloader } from '@/utils/imagePreloader';
console.log(imagePreloader.getCacheStats());
```

**2. 性能分析**
```bash
# 生成打包分析报告
ANALYZE=true npm run build
```

## 📈 进一步优化建议

1. **CDN 配置**：考虑使用专业的图片 CDN 服务
2. **Service Worker**：实施离线缓存策略
3. **HTTP/3**：升级到支持 HTTP/3 的托管服务
4. **边缘计算**：使用 Edge Functions 进行服务端优化
5. **预取策略**：实施智能的资源预取

## 📞 技术支持

如果在使用过程中遇到问题，请：
1. 查看浏览器控制台错误信息
2. 检查网络面板的资源加载情况
3. 运行性能分析工具
4. 参考本文档的故障排除部分

---

*最后更新：2024年12月* 