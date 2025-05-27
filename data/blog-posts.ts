export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  summary: string;
  coverImage: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "快速获得学历认证的正规方法【2025权威指南】",
    slug: "kuaisu-xueli-zhengming-liucheng-2025",
    summary: "本文详细讲解如何通过官方渠道获取学历认证，涵盖流程、风险、防坑指南，并提供快速获得正规学历的实用方法。",
    coverImage: "/images/blog/education-certification.jpg",
    date: "2024-03-15",
    readTime: "8分钟",
    category: "流程科普",
    tags: ["学历认证", "正规学历", "快速学历办理"],
    content: `
      <h2>为什么你需要学历认证？</h2>
      <p>无论你是海外就业者、移民申请者，还是想提升背景的职场人士，学历认证已成为必须材料之一：</p>
      <ul>
        <li>海外工签申请 / 签证续签</li>
        <li>移民资料提交 / 背调报告</li>
        <li>求职晋升 / 跨国面试背景审核</li>
        <li>注册专业资格 / CPA/护士/工程师认证</li>
      </ul>

      <h2>学历认证的完整正规流程</h2>
      <p>了解需求 → 选择学校 → 提交资料 → 下单付款 → 文件制作 → 官方验证 → 快递交付</p>

      <h2>我们提供的学历材料有哪些？</h2>
      <table>
        <tr>
          <th>材料</th>
          <th>用途</th>
        </tr>
        <tr>
          <td>英文毕业证书</td>
          <td>正式纸质文件，学校抬头与签章</td>
        </tr>
        <tr>
          <td>成绩单</td>
          <td>含学科/学分/绩点</td>
        </tr>
        <tr>
          <td>毕业证明信</td>
          <td>第三方或校方出具，验证材料</td>
        </tr>
      </table>

      <h2>常见问题解答</h2>
      <div class="faq">
        <h3>Q1：你们的学历是真的吗？</h3>
        <p>A：100%来自真实学校系统，配套编号可查，支持官网/第三方验证。</p>

        <h3>Q2：流程多久？</h3>
        <p>A：最快5~7个工作日，资料齐全当天可安排制作。</p>

        <h3>Q3：我需要哪些资料？</h3>
        <p>A：姓名（拼音）、出生年月、学历用途、联系方式。</p>
      </div>
    `
  },
  {
    id: 2,
    title: "【2025版】各国工作签证所需学历要求大全",
    slug: "gongzuo-qianzheng-xueli-yaoqiu-2025",
    summary: "全面解析新加坡、马来西亚等热门国家的工作签证学历要求，助你顺利通过签证审核。",
    coverImage: "/images/blog/visa-requirements.jpg",
    date: "2024-03-10",
    readTime: "10分钟",
    category: "国家攻略",
    tags: ["新加坡学历要求", "马来西亚SP学历", "移民学历认证"],
    content: `
      <h2>新加坡工作签证学历要求</h2>
      <p>新加坡是亚洲最受欢迎的就业目的地之一，其工作签证对学历要求如下：</p>
      <ul>
        <li>EP（就业准证）：本科及以上学历</li>
        <li>SP（S准证）：大专及以上学历</li>
        <li>WP（工作准证）：高中及以上学历</li>
      </ul>

      <h2>马来西亚工作签证学历要求</h2>
      <p>马来西亚的工作签证主要分为以下几类：</p>
      <ul>
        <li>EP（就业准证）：本科及以上学历</li>
        <li>SP（专业准证）：大专及以上学历</li>
        <li>WP（工作准证）：高中及以上学历</li>
      </ul>

      <h2>常见问题解答</h2>
      <div class="faq">
        <h3>Q1：学历需要公证吗？</h3>
        <p>A：是的，所有学历文件都需要公证和认证。</p>

        <h3>Q2：可以用中文毕业证吗？</h3>
        <p>A：需要提供英文翻译件，并经过公证。</p>

        <h3>Q3：学历认证需要多久？</h3>
        <p>A：一般需要5-7个工作日，加急3个工作日。</p>
      </div>
    `
  },
  {
    id: 3,
    title: "真实可查！10所支持认证的热门院校推荐",
    slug: "zhenshi-kecha-xuexiao-tuijian",
    summary: "精选10所支持学历认证的热门院校，包括美国、英国、澳大利亚等国家的知名大学。",
    coverImage: "/images/blog/schools.jpg",
    date: "2024-03-05",
    readTime: "12分钟",
    category: "学校推荐",
    tags: ["可查大学", "学历认证院校", "热门学校"],
    content: `
      <h2>美国院校推荐</h2>
      <ul>
        <li>哈佛大学（Harvard University）</li>
        <li>麻省理工学院（MIT）</li>
        <li>斯坦福大学（Stanford University）</li>
      </ul>

      <h2>英国院校推荐</h2>
      <ul>
        <li>牛津大学（University of Oxford）</li>
        <li>剑桥大学（University of Cambridge）</li>
        <li>伦敦大学学院（UCL）</li>
      </ul>

      <h2>澳大利亚院校推荐</h2>
      <ul>
        <li>墨尔本大学（University of Melbourne）</li>
        <li>悉尼大学（University of Sydney）</li>
        <li>昆士兰大学（University of Queensland）</li>
      </ul>

      <h2>常见问题解答</h2>
      <div class="faq">
        <h3>Q1：这些学校都支持认证吗？</h3>
        <p>A：是的，所有推荐的学校都支持学历认证。</p>

        <h3>Q2：认证需要多久？</h3>
        <p>A：一般需要5-7个工作日，加急3个工作日。</p>

        <h3>Q3：费用是多少？</h3>
        <p>A：不同学校费用不同，请联系顾问获取详细报价。</p>
      </div>
    `
  }
]; 