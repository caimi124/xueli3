# 学历认证服务网站

## 网站简介

这是一个学历认证服务网站，提供全球学历认证服务，帮助客户获取100%真实可查的国际学历认证。网站采用Next.js和TailwindCSS构建，提供了丰富的功能和现代化的设计。

## 主要功能

- **首页**: 展示核心服务、流程、产品及成功案例
- **学校资源库**: 提供可筛选和搜索的全球院校数据库
- **服务介绍**: 详细说明各类认证服务、流程和案例分析
- **博客文章**: 提供学历认证相关的指南、成功案例和行业资讯
- **联系页面**: 客户提交需求和获取咨询的互动表单

## 页面结构

- `/pages/index.tsx` - 首页
- `/pages/schools.tsx` - 学校资源库页面
- `/pages/services.tsx` - 服务介绍页面
- `/pages/blog/index.tsx` - 博客列表页面
- `/pages/contact.tsx` - 联系页面

## 组件结构

- `Layout.tsx` - 页面布局组件
- `Header.tsx` - 网站导航栏
- `Footer.tsx` - 网站页脚
- `SEO.tsx` - SEO元数据组件
- `WhatsAppButton.tsx` - 悬浮WhatsApp联系按钮

## 技术栈

- **框架**: Next.js (React)
- **样式**: TailwindCSS
- **路由**: Next.js内置路由
- **部署**: Vercel

## 安装与运行

```bash
# 安装依赖
npm install

# 开发环境运行
npm run dev

# 构建生产环境版本
npm run build

# 运行生产环境版本
npm start
```

## 自定义与扩展

网站设计遵循模块化结构，可以轻松扩展和定制：

1. 在`pages`目录添加新页面
2. 在`components`目录添加新组件
3. 在`public/images`目录添加图片资源

## 学校数据库

学校资源库包含来自全球多个国家和地区的知名院校信息，包括QS排名、世界排名和专业特点等数据。

## 联系表单

联系页面包含表单，允许用户提交学历认证需求，包括：
- 个人信息
- 认证用途
- 需要的学历类型
- 时间要求
- 具体需求描述

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
NOTION_TOKEN=your_notion_token_here
NOTION_DATABASE_ID=your_notion_database_id_here
```

> **注意**: 如果您没有配置环境变量，项目将使用模拟数据运行。在生产环境中，强烈建议配置真实的 Notion API 凭据。
> 
> **Note**: If you don't configure environment variables, the project will run with mock data. For production environments, it is strongly recommended to configure real Notion API credentials.

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

## 常见问题排查 / Troubleshooting

### 类型错误 / TypeScript Errors

如果您遇到类型错误，有几种解决方案：

1. 在 `tsconfig.json` 中启用严格模式（将 `"strict": false` 改为 `"strict": true`）并修复所有类型错误
2. 使用 `// @ts-ignore` 注释忽略特定的错误
3. 保持当前设置，使用 `next.config.js` 中的 `ignoreBuildErrors: true` 选项

### 图片路径错误 / Image Path Errors

确保 `public/images/placeholder.jpg` 文件存在，否则模拟数据中的图片可能无法正确显示。

### 国际化问题 / Internationalization Issues

如果翻译不正确或缺失，请检查 `utils/i18n.ts` 文件中是否包含所有必要的翻译键。 