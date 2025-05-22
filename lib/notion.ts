import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { NotionPage, Post, PostWithContent } from "../types";

// 初始化Notion客户端
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

// 缓存数据以减少API调用
let cachedPosts: Post[] | null = null;
let lastFetched: number = 0;
const CACHE_DURATION = 1000 * 60 * 5; // 5分钟缓存

/**
 * 从Notion数据库获取博客文章列表
 */
export async function getDatabaseItems(): Promise<Post[]> {
  // 如果有缓存且未过期，返回缓存数据
  if (cachedPosts && Date.now() - lastFetched < CACHE_DURATION) {
    return cachedPosts;
  }

  const databaseId = process.env.NOTION_DATABASE_ID;
  
  if (!databaseId) {
    throw new Error("缺少NOTION_DATABASE_ID环境变量");
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
    });

    const posts = response.results.map((page) => {
      const typedPage = page as unknown as NotionPage;
      return {
        id: typedPage.id,
        title: typedPage.properties.Title.title[0]?.plain_text || "无标题",
        date: typedPage.properties.Date.date?.start || "",
        slug: typedPage.properties.Slug.rich_text[0]?.plain_text || "",
        excerpt: typedPage.properties.Excerpt.rich_text[0]?.plain_text || "",
        coverImage: typedPage.properties.Cover?.files[0]?.file?.url || 
                   typedPage.properties.Cover?.files[0]?.external?.url || "",
      };
    });

    // 更新缓存
    cachedPosts = posts;
    lastFetched = Date.now();
    return posts;
  } catch (error) {
    console.error("获取博客列表失败:", error);
    return [];
  }
}

/**
 * 获取单个页面的Markdown内容
 */
export async function getPageContent(pageId: string): Promise<string> {
  try {
    const mdblocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdblocks);
    return mdString.parent;
  } catch (error) {
    console.error(`获取页面内容失败 (ID: ${pageId}):`, error);
    return "内容加载失败";
  }
}

/**
 * 通过slug获取单个博客文章
 */
export async function getPageBySlug(slug: string): Promise<PostWithContent> {
  const databaseId = process.env.NOTION_DATABASE_ID;
  
  if (!databaseId) {
    throw new Error("缺少NOTION_DATABASE_ID环境变量");
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    });

    if (!response.results[0]) {
      throw new Error(`未找到slug为 ${slug} 的文章`);
    }

    const page = response.results[0] as unknown as NotionPage;
    const mdString = await getPageContent(page.id);

    return {
      id: page.id,
      title: page.properties.Title.title[0]?.plain_text || "无标题",
      date: page.properties.Date.date?.start || "",
      slug: page.properties.Slug.rich_text[0]?.plain_text || "",
      excerpt: page.properties.Excerpt.rich_text[0]?.plain_text || "",
      coverImage: page.properties.Cover?.files[0]?.file?.url || 
                 page.properties.Cover?.files[0]?.external?.url || "",
      content: mdString,
    };
  } catch (error) {
    console.error(`通过slug获取文章失败 (${slug}):`, error);
    throw error;
  }
} 