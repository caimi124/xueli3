# 学历认证服务平台

## SEO 优化概述

本网站已实施以下SEO优化：

1. **元数据优化**
   - 为所有页面设置了适当的标题、描述和关键词
   - 创建了自定义SEO组件，支持中英文语言环境
   - 添加了Open Graph和Twitter卡片元标签，优化社交媒体分享

2. **结构化数据 (Schema.org)**
   - 添加了Organization结构化数据，提升企业信息在搜索结果中的展示
   - 为博客文章添加了BlogPosting结构化数据
   - 为服务列表添加了Service结构化数据
   - 为联系页面添加了ContactPoint结构化数据

3. **技术SEO**
   - 实现了动态站点地图 (sitemap.xml)
   - 添加了自定义robots.txt
   - 创建了自定义404页面
   - 添加了规范链接和替代语言链接
   - 为图片添加了懒加载功能

4. **页面性能优化**
   - 优化了加载状态展示
   - 添加了估计阅读时间
   - 改进了图片和用户体验

5. **国际化SEO**
   - 支持中英文内容
   - 添加了适当的多语言链接标记
   - 根据用户语言环境动态生成关键词

## 原始README内容

一个基于 Next.js + TailwindCSS + Notion API 的学历认证服务平台，包含首页、博客和联系方式页面，支持多语言切换和WhatsApp浮动咨询按钮。

A multilingual academic certification platform built with Next.js, TailwindCSS, and Notion API. It includes a homepage, blog, and contact page with language switching and a WhatsApp floating button.

## 功能特点 / Features

- 响应式设计 / Responsive design
- 中英文双语支持 / Bilingual support (Chinese and English)
- 使用Notion API作为CMS管理博客内容 / Uses Notion API as CMS for blog content
- WhatsApp浮动咨询按钮 / WhatsApp floating consultation button
- 联系表单 / Contact form

## 技术栈 / Tech Stack

- Next.js 13.4.4
- React 18.2.0
- TypeScript
- TailwindCSS
- Notion API

## 安装与运行 / Installation and Running

1. 克隆仓库 / Clone the repository:
```bash
git clone <repository-url>
cd my-certification-site
```

2. 安装依赖 / Install dependencies:
```bash
npm install
```

3. 创建环境变量文件 / Create environment variables file:
创建 `.env.local` 文件并添加以下内容 / Create `.env.local` file and add:
```
NOTION_API_KEY=your_notion_api_key_here
NOTION_DATABASE_ID=your_notion_database_id_here
```

4. 启动开发服务器 / Start the development server:
```bash
npm run dev
```

5. 打开浏览器访问 / Open your browser at: http://localhost:3000

## Notion数据库设置 / Notion Database Setup

您需要在Notion中创建一个数据库，包含以下属性：
You need to create a database in Notion with the following properties:

- `Title` (标题): 文章标题 / Article title
- `Slug` (文本): 文章URL路径 / Article URL path
- `Date` (日期): 发布日期 / Publication date
- `Excerpt` (文本): 文章摘要 / Article excerpt
- `Cover` (文件): 封面图片 / Cover image
- `Published` (多选框): 是否发布 / Whether to publish

## 部署 / Deployment

该项目可使用Vercel进行部署：
This project can be deployed using Vercel:

```bash
npm run build
vercel --prod
```

## 贡献 / Contributing

欢迎贡献和提出建议！
Contributions and suggestions are welcome!

## 许可 / License

MIT 