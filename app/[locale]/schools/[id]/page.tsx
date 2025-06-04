import React from 'react';
import { notFound } from 'next/navigation';
import { schoolsData } from '../../../../data/schools';
import { Metadata } from 'next';
import SchoolDetailClient from './SchoolDetailClient';

// 详细的学校差异化信息数据库
const schoolUniqueInfo = {
  zh: {
    1: { // MIT
      h1Title: "MIT麻省理工学院学历认证 - 7天快速获得全球顶级理工科学位",
      subtitle: "硅谷科技巨头首选背景 | 48小时极速认证 | 100%官方验证 | 已服务2000+精英人士",
      differentiator: "全球科技创新圣地，Google、Apple创始人母校",
      trustData: {
        employmentRate: "98%",
        employmentSource: "MIT Career Services 2023年官方报告",
        employmentProof: "📊 查看官方报告截图",
        averageSalary: "起薪$95,000+",
        salarySource: "PayScale 2024年薪资调研数据",
        salaryProof: "💰 查看薪资统计图表",
        companyPartners: "与Google、Microsoft、Tesla等500强企业直接合作",
        partnersProof: "🤝 查看合作协议"
      },
      specificDegrees: [
        { 
          name: "计算机科学学士", 
          advantage: "硅谷科技公司直通车", 
          time: "5-7天",
          value: "平均起薪$120,000，Google、Facebook优先录取",
          applications: "适用于：软件工程师、技术总监、CTO职位申请"
        },
        { 
          name: "工程管理硕士", 
          advantage: "技术领导岗位敲门砖", 
          time: "7-10天",
          value: "技术+管理双重背景，晋升速度提升300%",
          applications: "适用于：技术团队管理、产品总监、创业项目负责人"
        },
        { 
          name: "人工智能博士", 
          advantage: "AI领域顶级认可", 
          time: "10-14天",
          value: "AI独角兽公司核心人才，年薪可达$200,000+",
          applications: "适用于：AI研究员、机器学习专家、首席科学家"
        }
      ],
      specificMajors: [
        { name: "计算机科学", career: "软件架构师", salary: "$120K+", demand: "🔥极高" },
        { name: "电子工程", career: "硬件工程总监", salary: "$110K+", demand: "🔥极高" },
        { name: "机械工程", career: "制造业CTO", salary: "$100K+", demand: "🔥高" },
        { name: "人工智能", career: "AI产品经理", salary: "$130K+", demand: "🔥极高" },
        { name: "数据科学", career: "首席数据官", salary: "$115K+", demand: "🔥极高" },
        { name: "生物工程", career: "生物科技公司VP", salary: "$105K+", demand: "🔥高" }
      ],
      realScenarios: [
        { 
          industry: "互联网科技", 
          persona: "张工程师", 
          story: "某独角兽公司CTO职位面试，MIT计算机学历让他在众多候选人中脱颖而出，年薪从80万提升到200万",
          timeline: "认证用时6天，面试成功率100%"
        },
        { 
          industry: "技术移民", 
          persona: "李研发总监", 
          story: "加拿大技术移民申请，MIT学历为其EE评分增加25分，全家成功获批永居身份",
          timeline: "认证用时5天，移民申请通过率95%"
        },
        { 
          industry: "创业融资", 
          persona: "王创业者", 
          story: "持MIT MBA学历获得红杉资本领投的500万美元A轮融资，投资人认可度极高",
          timeline: "认证用时8天，融资成功率提升400%"
        }
      ],
      faqItems: [
        { q: "MIT学历认证真的只需要7天吗？", a: "是的，我们与MIT官方建立直接通道，常规专业7天内完成认证，急件可48小时交付。已为2000+客户成功认证，准时率99.8%。" },
        { q: "MIT学历在中国大陆认可度如何？", a: "MIT在教育部涉外监管网备案，学历全球通用，可做学历学位认证，享受海归人才政策。国内500强企业HR高度认可。" },
        { q: "费用大概多少？能保证通过吗？", a: "根据学位层次和专业不同，提供透明报价。我们承诺100%真实有效，假一赔十，不成功全额退款。" }
      ]
    },
    2: { // Harvard
      h1Title: "哈佛大学学历认证 - 全球精英身份象征，7天快速获得",
      subtitle: "8位美国总统母校 | 贵族精英网络 | 投行律所首选背景 | 375年声誉保证",
      differentiator: "375年历史沉淀，全球政商精英摇篮",
      trustData: {
        employmentRate: "99%",
        employmentSource: "Harvard Career Services 2023年度就业报告",
        employmentProof: "📈 查看哈佛就业数据官方截图",
        averageSalary: "MBA毕业生平均$170,000+",
        salarySource: "哈佛商学院2023年薪资调研报告",
        salaryProof: "💎 查看薪资排行榜单",
        companyPartners: "摩根大通、高盛、麦肯锡等顶级投行咨询公司战略合作",
        partnersProof: "🏛️ 查看合作机构认证"
      },
      specificDegrees: [
        { 
          name: "哈佛MBA", 
          advantage: "全球商界通行证", 
          time: "7-10天",
          value: "平均年薪$180,000，华尔街投行优先录取",
          applications: "适用于：CEO/CFO职位、投行VP、咨询合伙人、创业融资"
        },
        { 
          name: "法学博士JD", 
          advantage: "顶级律所合伙人敲门砖", 
          time: "10-14天",
          value: "国际律所起薪$200,000+，合伙人轨道快速通道",
          applications: "适用于：律所合伙人、法务总监、公司总法律顾问"
        },
        { 
          name: "医学博士MD", 
          advantage: "医疗行业最高认可", 
          time: "14-21天",
          value: "三甲医院科主任优先考虑，私人诊所估值翻倍",
          applications: "适用于：医院科主任、医疗集团CEO、私人诊所创始人"
        }
      ],
      specificMajors: [
        { name: "商业管理MBA", career: "跨国公司CEO", salary: "$180K+", demand: "🔥极高" },
        { name: "经济学", career: "投资银行VP", salary: "$150K+", demand: "🔥极高" },
        { name: "医学MD", career: "医疗集团CMO", salary: "$200K+", demand: "🔥高" },
        { name: "法学JD", career: "律所合伙人", salary: "$220K+", demand: "🔥极高" },
        { name: "心理学", career: "心理健康机构CEO", salary: "$120K+", demand: "🔥中高" },
        { name: "生物学", career: "制药公司研发总监", salary: "$140K+", demand: "🔥高" }
      ],
      realScenarios: [
        { 
          industry: "金融投行", 
          persona: "陈副总裁", 
          story: "某顶级投行亚太区副总裁竞聘，哈佛MBA学历成为决胜关键因素，年薪从150万跃升至300万",
          timeline: "认证用时9天，晋升成功率98%"
        },
        { 
          industry: "法律服务", 
          persona: "刘合伙人", 
          story: "国际顶级律所合伙人申请，哈佛JD学历让其年薪突破500万，客户信任度大幅提升",
          timeline: "认证用时12天，合伙人通过率95%"
        },
        { 
          industry: "医疗健康", 
          persona: "赵院长", 
          story: "三甲医院副院长评选，哈佛医学背景助其成功当选，学术地位显著提升",
          timeline: "认证用时18天，医疗高管成功率92%"
        }
      ],
      faqItems: [
        { q: "哈佛学历认证需要什么条件？", a: "我们提供完整的认证方案，包括学术背景包装和官方渠道认证，无需复杂前置条件。已为1500+精英人士成功认证。" },
        { q: "哈佛学历在国内职场认可度？", a: "哈佛大学是国内政商精英圈最认可的海外学历，特别在金融、法律、医疗领域享有至高声誉。500强企业CEO中30%拥有哈佛背景。" },
        { q: "认证费用包含哪些服务？", a: "包含学历认证、WES认证、使馆认证等全套服务，还提供LinkedIn档案优化、简历包装、面试指导等增值服务。" }
      ]
    },
    3: { // Stanford
      h1Title: "斯坦福大学学历认证 - 硅谷创新精神的摇篮",
      subtitle: "Google、Yahoo创始人母校 | 硅谷创业首选 | 科技创新领航者",
      differentiator: "硅谷心脏地带，科技创新与创业精神的完美结合",
      trustData: {
        employmentRate: "97%（Stanford Career Education官方数据）",
        averageSalary: "工程类毕业生平均$110,000+（PayScale 2024数据）",
        companyPartners: "与Facebook、Netflix、Tesla等创新企业深度合作"
      },
      specificDegrees: [
        { name: "计算机科学硕士", advantage: "硅谷技术公司金字招牌", time: "7-10天" },
        { name: "斯坦福MBA", advantage: "创业投资界通行证", time: "10-14天" },
        { name: "工程博士", advantage: "技术创新领域最高认可", time: "14-21天" }
      ],
      specificMajors: [
        { name: "计算机科学", career: "产品技术VP", salary: "$140K+", demand: "🔥极高" },
        { name: "工程学", career: "首席技术官", salary: "$160K+", demand: "🔥极高" },
        { name: "商业管理", career: "创业公司CEO", salary: "$200K+", demand: "🔥高" },
        { name: "人工智能", career: "AI研究科学家", salary: "$180K+", demand: "🔥极高" },
        { name: "数据科学", career: "首席数据科学家", salary: "$150K+", demand: "🔥极高" },
        { name: "创业学", career: "风险投资合伙人", salary: "$300K+", demand: "🔥中高" }
      ],
      realScenarios: [
        { scenario: "孙创业者", story: "持斯坦福计算机学历成功获得红杉资本500万美元种子轮投资" },
        { scenario: "周技术总监", story: "某互联网巨头架构师职位，斯坦福学历让其薪资翻倍" },
        { scenario: "吴产品经理", story: "硅谷独角兽公司CPO职位，斯坦福MBA背景成为关键优势" }
      ],
      faqItems: [
        { q: "斯坦福学历在科技行业认可度如何？", a: "斯坦福在全球科技行业享有极高声誉，是Google、Apple等巨头创始人母校，行业认可度顶级。" },
        { q: "认证周期需要多长时间？", a: "常规专业7-10天完成，工程类专业可能需要10-14天，我们提供加急服务。" },
        { q: "斯坦福学历适合哪些职业发展？", a: "特别适合科技创业、产品管理、技术研发、风险投资等高新技术领域的职业发展。" }
      ]
    },
    4: { // Oxford  
      h1Title: "牛津大学学历认证 - 900年贵族传统，英伦精英标志",
      subtitle: "28位英国首相母校 | 贵族传统传承 | 英联邦国家金字招牌",
      differentiator: "英语世界最古老大学，900年学术传统与贵族底蕴",
      trustData: {
        employmentRate: "96%（Oxford Career Service 2023报告）",
        averageSalary: "毕业生平均£45,000+（英国教育部官方统计）",
        companyPartners: "与汇丰银行、BP石油等英国百强企业深度合作"
      },
      specificDegrees: [
        { name: "牛津哲学博士DPhil", advantage: "学术界最高荣誉", time: "14-21天" },
        { name: "牛津MBA", advantage: "欧洲商界通行证", time: "10-14天" },
        { name: "法学硕士BCL", advantage: "英联邦法律界金标准", time: "10-14天" }
      ],
      specificMajors: [
        { name: "人文社科", career: "智库研究总监", salary: "£60K+", demand: "🔥高" },
        { name: "医学", career: "医学院院长", salary: "£80K+", demand: "🔥极高" },
        { name: "法学", career: "大律师", salary: "£100K+", demand: "🔥极高" },
        { name: "经济学", career: "央行首席经济师", salary: "£90K+", demand: "🔥高" },
        { name: "计算机科学", career: "金融科技CTO", salary: "£85K+", demand: "🔥高" },
        { name: "工程学", career: "工程咨询总监", salary: "£75K+", demand: "🔥中高" }
      ],
      realScenarios: [
        { scenario: "黄教授", story: "国内985高校海归人才引进，牛津DPhil学历让其直接获得长江学者资格" },
        { scenario: "林总裁", story: "某上市公司董事长，牛津MBA背景为其在伦敦交易所IPO增加投资人信心" },
        { scenario: "马法官", story: "最高法院大法官遴选，牛津法学背景成为其学术权威性的有力证明" }
      ],
      faqItems: [
        { q: "牛津大学学历认证周期真的需要14天吗？", a: "牛津大学认证流程相对复杂，但我们已优化至10-14天。若需加急，可提供7天极速通道。" },
        { q: "牛津学历在香港、新加坡认可度如何？", a: "牛津大学在英联邦国家享有极高声誉，香港、新加坡政府机构和跨国公司高度认可。" },
        { q: "费用相比其他学校会更高吗？", a: "牛津认证确实需要更多资源投入，但我们承诺性价比最优。详细报价请联系专属顾问。" }
      ]
    },
    5: { // Cambridge
      h1Title: "剑桥大学学历认证 - 科学巨匠的摇篮，学术殿堂",
      subtitle: "牛顿、霍金母校 | 121位诺奖得主 | 理工科学术权威",
      differentiator: "800年学术传统，培养了众多改变世界的科学家",
      trustData: {
        employmentRate: "97%（Cambridge Career Service 2023报告）",
        averageSalary: "理工科毕业生平均£50,000+（英国官方统计）",
        companyPartners: "与ARM、AstraZeneca等世界500强企业合作"
      },
      specificDegrees: [
        { name: "数学学士", advantage: "量化金融界金字招牌", time: "10-14天" },
        { name: "工程学硕士", advantage: "全球工程技术领域顶级认可", time: "12-16天" },
        { name: "自然科学博士", advantage: "学术研究机构首选", time: "14-21天" }
      ],
      specificMajors: [
        { name: "自然科学", career: "首席科学家", salary: "£70K+" },
        { name: "经济学", career: "量化分析师", salary: "£80K+" },
        { name: "工程学", career: "技术总监", salary: "£75K+" },
        { name: "医学", career: "医学研究院院长", salary: "£85K+" },
        { name: "计算机科学", career: "技术架构师", salary: "£70K+" },
        { name: "数学", career: "金融工程师", salary: "£90K+" }
      ],
      realScenarios: [
        { scenario: "陈研究员", story: "中科院研究所引进人才，剑桥物理博士学历让其获得院士推荐资格" },
        { scenario: "王分析师", story: "高盛量化分析师职位，剑桥数学背景让其年薪达到80万" },
        { scenario: "李工程师", story: "华为海外研发中心主任，剑桥工程学历成为技术权威象征" }
      ],
      faqItems: [
        { q: "剑桥学历在科研领域认可度如何？", a: "剑桥大学在全球科研领域享有极高声誉，是牛顿、霍金等科学巨匠母校，学术界认可度最高。" },
        { q: "理工科专业认证需要多长时间？", a: "理工科专业认证相对复杂，通常需要10-16天，我们已与剑桥官方建立绿色通道。" },
        { q: "剑桥学历适合哪些职业方向？", a: "特别适合学术研究、量化金融、高科技研发、咨询顾问等需要深厚理论基础的职业。" }
      ]
    },
    6: { // NUS
      h1Title: "新加坡国立大学学历认证 - 亚洲学术高峰，全球认可",
      subtitle: "亚洲第一学府 | 国际化程度最高 | 亚太地区金字招牌",
      differentiator: "亚洲顶尖学府，东西方文化交融的国际化教育典范",
      trustData: {
        employmentRate: "94%（NUS Career Centre 2023报告）",
        averageSalary: "毕业生平均S$55,000+（新加坡教育部统计）",
        companyPartners: "与新加坡政府、淡马锡等机构战略合作"
      },
      specificDegrees: [
        { name: "商学硕士", advantage: "亚太商界通行证", time: "10-14天" },
        { name: "工程学学士", advantage: "亚洲工程技术领域认可", time: "7-10天" },
        { name: "法学硕士", advantage: "亚洲法律界专业认可", time: "12-16天" }
      ],
      specificMajors: [
        { name: "商学", career: "亚太区总监", salary: "S$80K+", demand: "🔥极高" },
        { name: "工程学", career: "技术VP", salary: "S$75K+", demand: "🔥高" },
        { name: "计算机科学", career: "软件架构师", salary: "S$70K+", demand: "🔥极高" },
        { name: "医学", career: "医疗机构CEO", salary: "S$90K+", demand: "🔥高" },
        { name: "法学", career: "国际仲裁员", salary: "S$85K+", demand: "🔥中高" },
        { name: "建筑学", career: "首席设计师", salary: "S$65K+", demand: "🔥中高" }
      ],
      realScenarios: [
        { scenario: "张经理", story: "跨国公司亚太区总监职位，NUS商学背景让其在新加坡总部获得重用" },
        { scenario: "刘工程师", story: "新加坡永久居民申请，NUS学历大幅提升技术移民评分" },
        { scenario: "王律师", story: "国际仲裁庭仲裁员资格，NUS法学学历成为专业能力证明" }
      ],
      faqItems: [
        { q: "NUS学历在亚洲认可度如何？", a: "NUS是亚洲排名第一的大学，在整个亚太地区享有极高声誉，特别在新加坡、马来西亚、中国等地认可度很高。" },
        { q: "认证周期需要多长时间？", a: "常规专业7-14天完成，法学等特殊专业可能需要12-16天，我们提供加急服务。" },
        { q: "NUS学历对移民申请有帮助吗？", a: "是的，NUS学历在新加坡、澳洲、加拿大等国技术移民评分中都有很大加分作用。" }
      ]
    },
    7: { // UCL
      h1Title: "University College London Degree Authentication - London's First University, Diverse Academic Excellence",
      subtitle: "London's First University | G5 Super Elite | Architecture Medicine Engineering Powerhouse",
      differentiator: "World-class institution in central London, known for diversity and academic freedom",
      trustData: {
        employmentRate: "93% (UCL Career Services 2023 Report)",
        employmentSource: "UCL Career Services 2023 Report",
        employmentProof: "📊 View Official Report",
        averageSalary: "Graduates average £42,000+",
        salarySource: "UK Official Statistics",
        salaryProof: "💰 View Salary Statistics",
        companyPartners: "Partnerships with BBC, NHS and other renowned British institutions",
        partnersProof: "🤝 View Partnership Agreements"
      },
      specificDegrees: [
        { 
          name: "Master of Architecture", 
          advantage: "Global Architectural Design Recognition", 
          time: "12-16 days",
          value: "World-renowned architectural education, priority for design firms",
          applications: "For: Chief Architect, Design Director, Urban Planner"
        },
        { 
          name: "Medical Doctor", 
          advantage: "UK Healthcare System Gold Standard", 
          time: "16-21 days",
          value: "Strong foundation in British medical practice",
          applications: "For: Clinical Research Director, Hospital Consultant, Medical Researcher"
        },
        { 
          name: "Bachelor of Engineering", 
          advantage: "European Engineering Recognition", 
          time: "10-14 days",
          value: "Technical expertise valued across Europe",
          applications: "For: Project Chief Engineer, Technical Director, Engineering Consultant"
        }
      ],
      specificMajors: [
        { name: "Architecture", career: "Chief Architect", salary: "£65K+", demand: "🔥Very High" },
        { name: "Medicine", career: "Clinical Research Director", salary: "£80K+", demand: "🔥High" },
        { name: "Engineering", career: "Project Chief Engineer", salary: "£60K+", demand: "🔥High" },
        { name: "Computer Science", career: "Technical Director", salary: "£70K+", demand: "🔥High" },
        { name: "Law", career: "Legal Director", salary: "£75K+", demand: "🔥Medium-High" },
        { name: "Economics", career: "Financial Analyst", salary: "£55K+", demand: "🔥Medium-High" }
      ],
      realScenarios: [
        { 
          industry: "Architecture", 
          persona: "Architect Li", 
          story: "Partner at international architecture firm, UCL architecture degree became symbol of design authority",
          timeline: "14 days for authentication, 90% partnership success"
        },
        { 
          industry: "Healthcare", 
          persona: "Doctor Wang", 
          story: "Department head selection at top hospital, UCL medical background helped stand out",
          timeline: "18 days for authentication, 85% selection success"
        },
        { 
          industry: "Engineering", 
          persona: "Engineer Chen", 
          story: "Chief engineer for major European infrastructure project, UCL engineering degree gained high recognition",
          timeline: "12 days for authentication, 88% project success"
        }
      ],
      faqItems: [
        { q: "How is UCL degree recognized in architecture and medicine?", a: "UCL enjoys world-class reputation in architecture and medicine, being one of the top institutions in these fields." },
        { q: "Is the authentication process longer than other schools?", a: "Due to UCL's strict professional certification, some majors take 12-21 days, but we've optimized the process to minimize delays." },
        { q: "Does UCL degree provide advantages for European employment?", a: "Yes, as a G5 university, UCL enjoys high reputation across Europe with strong employment recognition." }
      ]
    },
    8: { // Imperial
      h1Title: "帝国理工学院学历认证 - 英国理工科王者，全球技术精英",
      subtitle: "英国理工科第一 | 世界三大理工学院 | 毕业生起薪最高",
      differentiator: "专注理工科教育，与MIT、加州理工并称世界三大理工学院",
      trustData: {
        employmentRate: "95%（Imperial Career Service 2023报告）",
        averageSalary: "毕业生平均£48,000+（英国最高）",
        companyPartners: "与Shell、BP、Goldman Sachs等巨头合作"
      },
      specificDegrees: [
        { name: "工程学硕士", advantage: "全球工程技术最高认可", time: "10-14天" },
        { name: "商科硕士", advantage: "技术与商业结合的最佳选择", time: "8-12天" },
        { name: "理学博士", advantage: "理工科研究领域顶级认可", time: "14-18天" }
      ],
      specificMajors: [
        { name: "工程学", career: "技术总监", salary: "£70K+", demand: "🔥极高" },
        { name: "商科", career: "技术公司CFO", salary: "£80K+", demand: "🔥高" },
        { name: "计算机科学", career: "系统架构师", salary: "£65K+", demand: "🔥极高" },
        { name: "理学", career: "首席科学家", salary: "£75K+", demand: "🔥高" },
        { name: "金融工程", career: "量化交易员", salary: "£90K+", demand: "🔥极高" },
        { name: "航空工程", career: "航空公司CTO", salary: "£85K+", demand: "🔥中高" }
      ],
      realScenarios: [
        { scenario: "周工程师", story: "石油公司技术总监职位，帝国理工学历让其在能源行业获得技术权威地位" },
        { scenario: "黄分析师", story: "投资银行量化分析师，帝国理工背景让其年薪突破百万" },
        { scenario: "钱研究员", story: "国家重点实验室主任，帝国理工博士学历成为科研实力象征" }
      ],
      faqItems: [
        { q: "帝国理工在理工科领域地位如何？", a: "帝国理工是世界三大理工学院之一，在全球理工科领域享有极高声誉，毕业生起薪为英国最高。" },
        { q: "理工科专业认证有什么特殊要求吗？", a: "理工科专业认证需要更严格的技术审核，通常需要10-18天，我们有专门的技术团队处理。" },
        { q: "帝国理工学历在金融行业认可吗？", a: "是的，帝国理工的量化金融、金融工程等专业在投行和对冲基金行业非常受欢迎。" }
      ]
    },
    9: { // ETH
      h1Title: "苏黎世联邦理工学院学历认证 - 欧洲理工科皇冠，科学巨匠摇篮",
      subtitle: "爱因斯坦母校 | 欧洲理工科第一 | 32位诺奖得主",
      differentiator: "欧洲大陆最顶尖的理工科学府，爱因斯坦的母校",
      trustData: {
        employmentRate: "96%（ETH Career Center 2023报告）",
        averageSalary: "毕业生平均CHF 85,000+（瑞士官方统计）",
        companyPartners: "与瑞银、雀巢、ABB等瑞士巨头合作"
      },
      specificDegrees: [
        { name: "工程学硕士", advantage: "欧洲工程技术最高认可", time: "12-16天" },
        { name: "计算机科学学士", advantage: "欧洲IT行业金字招牌", time: "10-14天" },
        { name: "自然科学博士", advantage: "欧洲科研领域顶级认可", time: "16-21天" }
      ],
      specificMajors: [
        { name: "工程学", career: "欧洲技术总监", salary: "CHF 95K+", demand: "🔥极高" },
        { name: "计算机科学", career: "瑞士科技公司CTO", salary: "CHF 90K+", demand: "🔥极高" },
        { name: "自然科学", career: "研究院院长", salary: "CHF 100K+", demand: "🔥高" },
        { name: "数学", career: "金融建模师", salary: "CHF 85K+", demand: "🔥高" },
        { name: "物理学", career: "技术创新总监", salary: "CHF 95K+", demand: "🔥中高" },
        { name: "化学", career: "制药公司研发VP", salary: "CHF 105K+", demand: "🔥高" }
      ],
      realScenarios: [
        { scenario: "李工程师", story: "欧洲大型工程项目总监，ETH工程学历让其在精密制造领域获得认可" },
        { scenario: "张科学家", story: "中欧科技合作项目负责人，ETH博士学历成为国际合作的桥梁" },
        { scenario: "王技术总监", story: "瑞士科技公司CTO职位，ETH背景让其在欧洲高科技领域站稳脚跟" }
      ],
      faqItems: [
        { q: "ETH在欧洲理工科领域地位如何？", a: "ETH是欧洲大陆理工科排名第一的大学，爱因斯坦的母校，在全球理工科领域享有极高声誉。" },
        { q: "瑞士学历认证有特殊要求吗？", a: "瑞士教育体系较为严格，认证流程相对复杂，通常需要12-21天，我们有专门的欧洲认证团队。" },
        { q: "ETH学历在中欧合作中有优势吗？", a: "是的，ETH学历在中欧科技合作、学术交流等领域有很大优势，是打开欧洲市场的金钥匙。" }
      ]
    },
    10: { // UC Berkeley
      h1Title: "加州大学伯克利分校学历认证 - 公立常春藤典范，自由学术精神",
      subtitle: "公立常春藤领军 | 自由学术精神 | 社会变革先锋",
      differentiator: "美国公立大学的典范，以学术自由和社会责任著称",
      trustData: {
        employmentRate: "92%（UC Berkeley Career Center 2023报告）",
        averageSalary: "毕业生平均$75,000+（加州官方统计）",
        companyPartners: "与Apple、Google、Intel等硅谷巨头合作"
      },
      specificDegrees: [
        { name: "计算机科学学士", advantage: "硅谷技术公司认可", time: "7-10天" },
        { name: "商学硕士", advantage: "西海岸商界通行证", time: "10-14天" },
        { name: "法学博士", advantage: "加州法律界权威认可", time: "12-16天" }
      ],
      specificMajors: [
        { name: "计算机科学", career: "硅谷软件工程师", salary: "$95K+", demand: "🔥极高" },
        { name: "商学", career: "科技公司VP", salary: "$120K+", demand: "🔥高" },
        { name: "法学", career: "律所合伙人", salary: "$150K+", demand: "🔥高" },
        { name: "工程学", career: "技术架构师", salary: "$110K+", demand: "🔥高" },
        { name: "经济学", career: "政策分析师", salary: "$85K+", demand: "🔥中高" },
        { name: "社会学", career: "NGO总监", salary: "$70K+", demand: "🔥中" }
      ],
      realScenarios: [
        { scenario: "程序员小张", story: "Google软件工程师职位，伯克利计算机学历让其在面试中获得技术认可" },
        { scenario: "创业者小李", story: "硅谷创业公司获得天使投资，伯克利背景增加了投资人信心" },
        { scenario: "律师小王", story: "加州知名律所合伙人，伯克利法学学历成为专业能力象征" }
      ],
      faqItems: [
        { q: "伯克利作为公立大学认可度如何？", a: "UC Berkeley是美国公立大学排名第一，被誉为'公立常春藤'，在学术声誉上与私立名校并驾齐驱。" },
        { q: "伯克利学历在硅谷认可度高吗？", a: "是的，伯克利位于旧金山湾区，与硅谷距离很近，在科技行业享有很高声誉。" },
        { q: "公立大学学历认证有什么优势？", a: "公立大学学历认证相对简单快捷，费用也更合理，同时保持很高的学术声誉和就业认可度。" }
      ]
    }
  },
  en: {
    1: { // MIT
      h1Title: "MIT Degree Authentication - Get a Top Global STEM Degree in 7 Days",
      subtitle: "Preferred by Silicon Valley Tech Giants | 48hr Express Service | 100% Official Verification | 2000+ Elites Served",
      differentiator: "Global hub for tech innovation, alma mater of Google and Apple founders",
      trustData: {
        employmentRate: "98%",
        employmentSource: "MIT Career Services 2023 Official Report",
        employmentProof: "📊 View Official Report Screenshot",
        averageSalary: "Starting $95,000+",
        salarySource: "PayScale 2024 Salary Survey",
        salaryProof: "💰 View Salary Statistics",
        companyPartners: "Direct cooperation with Google, Microsoft, Tesla and other Fortune 500 companies",
        partnersProof: "🤝 View Partnership Agreements"
      },
      specificDegrees: [
        { 
          name: "Bachelor of Computer Science", 
          advantage: "Direct path to Silicon Valley tech companies", 
          time: "5-7 days",
          value: "Average starting salary $120,000, priority for Google and Facebook",
          applications: "For: Software Engineer, Tech Director, CTO applications"
        },
        { 
          name: "Master of Engineering Management", 
          advantage: "Stepping stone to tech leadership", 
          time: "7-10 days",
          value: "Dual tech+management background, 300% faster promotion",
          applications: "For: Tech team management, Product Director, Startup Project Lead"
        },
        { 
          name: "PhD in Artificial Intelligence", 
          advantage: "Top recognition in AI field", 
          time: "10-14 days",
          value: "Core talent for AI unicorns, annual salary $200,000+",
          applications: "For: AI Researcher, Machine Learning Expert, Chief Scientist"
        }
      ],
      specificMajors: [
        { name: "Computer Science", career: "Software Architect", salary: "$120K+", demand: "🔥Very High" },
        { name: "Electrical Engineering", career: "Hardware Engineering Director", salary: "$110K+", demand: "🔥Very High" },
        { name: "Mechanical Engineering", career: "CTO in Manufacturing", salary: "$100K+", demand: "🔥High" },
        { name: "Artificial Intelligence", career: "AI Product Manager", salary: "$130K+", demand: "🔥Very High" },
        { name: "Data Science", career: "Chief Data Officer", salary: "$115K+", demand: "🔥Very High" },
        { name: "Bioengineering", career: "VP at Biotech Company", salary: "$105K+", demand: "🔥High" }
      ],
      realScenarios: [
        { 
          industry: "Internet Technology", 
          persona: "Engineer Zhang", 
          story: "CTO interview at a unicorn company, MIT CS degree made him stand out, salary rose from 800K to 2M",
          timeline: "6 days for authentication, 100% interview success"
        },
        { 
          industry: "Tech Immigration", 
          persona: "Director Li", 
          story: "Canada tech immigration, MIT degree added 25 points to EE score, whole family got PR",
          timeline: "5 days for authentication, 95% approval rate"
        },
        { 
          industry: "Startup Funding", 
          persona: "Entrepreneur Wang", 
          story: "MIT MBA helped secure $5M Series A led by Sequoia Capital, high investor recognition",
          timeline: "8 days for authentication, 400% increase in funding success"
        }
      ],
      faqItems: [
        { q: "Does MIT degree authentication really take only 7 days?", a: "Yes, we have a direct channel with MIT, most majors completed within 7 days, urgent cases in 48 hours. 2000+ clients served, 99.8% on-time rate." },
        { q: "How is MIT degree recognized in mainland China?", a: "MIT is listed on the Ministry of Education's official website, globally recognized, can be used for degree certification and overseas returnee policies. Highly recognized by top 500 HRs in China." },
        { q: "What is the cost? Is success guaranteed?", a: "Transparent pricing based on degree and major. We guarantee 100% authenticity, 10x compensation for fakes, full refund if unsuccessful." }
      ]
    },
    2: { // Harvard
      h1Title: "Harvard University Degree Authentication - Global Elite Status Symbol, 7-Day Fast Track",
      subtitle: "Alma Mater of 8 US Presidents | Elite Network | Preferred by Investment Banks & Law Firms | 375 Years of Prestige",
      differentiator: "375 years of history, cradle of global political and business elites",
      trustData: {
        employmentRate: "99%",
        employmentSource: "Harvard Career Services 2023 Employment Report",
        employmentProof: "📈 View Harvard Employment Data Screenshot",
        averageSalary: "MBA graduates average $170,000+",
        salarySource: "Harvard Business School 2023 Salary Survey",
        salaryProof: "💎 View Salary Rankings",
        companyPartners: "Strategic partnerships with JPMorgan, Goldman Sachs, McKinsey and other top investment banks and consulting firms",
        partnersProof: "🏛️ View Partner Institution Certifications"
      },
      specificDegrees: [
        { 
          name: "Harvard MBA", 
          advantage: "Global Business Passport", 
          time: "7-10 days",
          value: "Average annual salary $180,000, priority for Wall Street investment banks",
          applications: "For: CEO/CFO positions, Investment Bank VP, Consulting Partner, Startup Funding"
        },
        { 
          name: "Juris Doctor (JD)", 
          advantage: "Key to Top Law Firm Partnership", 
          time: "10-14 days",
          value: "International law firm starting salary $200,000+, fast track to partnership",
          applications: "For: Law Firm Partner, Legal Director, Corporate General Counsel"
        },
        { 
          name: "Medical Doctor (MD)", 
          advantage: "Highest Recognition in Healthcare", 
          time: "14-21 days",
          value: "Priority consideration for department heads in top hospitals, private clinic valuation doubled",
          applications: "For: Hospital Department Head, Healthcare Group CEO, Private Clinic Founder"
        }
      ],
      specificMajors: [
        { name: "Business Administration MBA", career: "Multinational CEO", salary: "$180K+", demand: "🔥Very High" },
        { name: "Economics", career: "Investment Bank VP", salary: "$150K+", demand: "🔥Very High" },
        { name: "Medicine MD", career: "Healthcare Group CMO", salary: "$200K+", demand: "🔥High" },
        { name: "Law JD", career: "Law Firm Partner", salary: "$220K+", demand: "🔥Very High" },
        { name: "Psychology", career: "Mental Health Institution CEO", salary: "$120K+", demand: "🔥Medium-High" },
        { name: "Biology", career: "Pharmaceutical R&D Director", salary: "$140K+", demand: "🔥High" }
      ],
      realScenarios: [
        { 
          industry: "Investment Banking", 
          persona: "VP Chen", 
          story: "Competition for Asia-Pacific VP position at a top investment bank, Harvard MBA degree was the decisive factor, salary increased from 1.5M to 3M",
          timeline: "9 days for authentication, 98% promotion success rate"
        },
        { 
          industry: "Legal Services", 
          persona: "Partner Liu", 
          story: "Application for international top law firm partnership, Harvard JD degree helped break through 5M annual salary, significantly increased client trust",
          timeline: "12 days for authentication, 95% partnership approval rate"
        },
        { 
          industry: "Healthcare", 
          persona: "Dean Zhao", 
          story: "Selection for top hospital vice president, Harvard medical background helped secure the position, academic status significantly elevated",
          timeline: "18 days for authentication, 92% healthcare executive success rate"
        }
      ],
      faqItems: [
        { q: "What are the requirements for Harvard degree authentication?", a: "We provide a complete authentication solution, including academic background packaging and official channel certification, no complex prerequisites needed. Successfully authenticated for 1500+ elites." },
        { q: "How is Harvard degree recognized in the Chinese workplace?", a: "Harvard University is the most recognized overseas degree among Chinese political and business elites, especially in finance, law, and healthcare. 30% of Fortune 500 CEOs have Harvard backgrounds." },
        { q: "What services are included in the authentication fee?", a: "Includes complete services such as degree authentication, WES certification, embassy certification, plus value-added services like LinkedIn profile optimization, resume packaging, and interview coaching." }
      ]
    },
    3: { // Stanford
      h1Title: "Stanford University Degree Authentication - Cradle of Silicon Valley Innovation",
      subtitle: "Alma Mater of Google & Yahoo Founders | Silicon Valley's First Choice | Technology Innovation Leader",
      differentiator: "Heart of Silicon Valley, perfect blend of technological innovation and entrepreneurial spirit",
      trustData: {
        employmentRate: "97% (Stanford Career Education Official Data)",
        employmentSource: "Stanford Career Education 2023 Report",
        employmentProof: "📊 View Official Report",
        averageSalary: "Engineering graduates average $110,000+",
        salarySource: "PayScale 2024 Data",
        salaryProof: "💰 View Salary Statistics",
        companyPartners: "Deep partnerships with Facebook, Netflix, Tesla and other innovative companies",
        partnersProof: "🤝 View Partnership Agreements"
      },
      specificDegrees: [
        { 
          name: "Master of Computer Science", 
          advantage: "Golden Ticket to Silicon Valley Tech Companies", 
          time: "7-10 days",
          value: "Average starting salary $140,000, priority for tech giants",
          applications: "For: Software Engineer, Tech Lead, Product Manager"
        },
        { 
          name: "Stanford MBA", 
          advantage: "Passport to Venture Capital", 
          time: "10-14 days",
          value: "Strong startup ecosystem, 300% higher funding success rate",
          applications: "For: Startup Founder, VC Partner, Product Director"
        },
        { 
          name: "Engineering PhD", 
          advantage: "Highest Recognition in Tech Innovation", 
          time: "14-21 days",
          value: "Core talent for tech unicorns, annual salary $180,000+",
          applications: "For: Research Scientist, Tech Director, Chief Innovation Officer"
        }
      ],
      specificMajors: [
        { name: "Computer Science", career: "Product & Tech VP", salary: "$140K+", demand: "🔥Very High" },
        { name: "Engineering", career: "Chief Technology Officer", salary: "$160K+", demand: "🔥Very High" },
        { name: "Business Administration", career: "Startup CEO", salary: "$200K+", demand: "🔥High" },
        { name: "Artificial Intelligence", career: "AI Research Scientist", salary: "$180K+", demand: "🔥Very High" },
        { name: "Data Science", career: "Chief Data Scientist", salary: "$150K+", demand: "🔥Very High" },
        { name: "Entrepreneurship", career: "Venture Capital Partner", salary: "$300K+", demand: "🔥Medium-High" }
      ],
      realScenarios: [
        { 
          industry: "Tech Startup", 
          persona: "Founder Sun", 
          story: "Successfully secured $5M seed round investment from Sequoia Capital with Stanford Computer Science degree",
          timeline: "7 days for authentication, 95% funding success rate"
        },
        { 
          industry: "Tech Giant", 
          persona: "Tech Director Zhou", 
          story: "Architect position at internet giant, Stanford degree doubled salary",
          timeline: "8 days for authentication, 100% interview success"
        },
        { 
          industry: "Product Management", 
          persona: "Product Manager Wu", 
          story: "CPO position at Silicon Valley unicorn, Stanford MBA background was key advantage",
          timeline: "10 days for authentication, 90% promotion success"
        }
      ],
      faqItems: [
        { q: "How is Stanford degree recognized in the tech industry?", a: "Stanford enjoys extremely high reputation in global tech industry, being the alma mater of Google and Apple founders, with top-tier industry recognition." },
        { q: "How long does the authentication process take?", a: "Regular majors completed in 7-10 days, engineering majors may take 10-14 days, we offer express service." },
        { q: "Which career paths are suitable for Stanford degree?", a: "Especially suitable for tech entrepreneurship, product management, technical R&D, venture capital and other high-tech fields." }
      ]
    },
    4: { // Oxford
      h1Title: "Oxford University Degree Authentication - 900 Years of Noble Tradition, British Elite Symbol",
      subtitle: "Alma Mater of 28 British Prime Ministers | Noble Heritage | Golden Standard in Commonwealth Countries",
      differentiator: "Oldest university in the English-speaking world, 900 years of academic tradition and noble heritage",
      trustData: {
        employmentRate: "96% (Oxford Career Service 2023 Report)",
        employmentSource: "Oxford Career Service 2023 Report",
        employmentProof: "📊 View Official Report",
        averageSalary: "Graduates average £45,000+",
        salarySource: "UK Department of Education Official Statistics",
        salaryProof: "💰 View Salary Statistics",
        companyPartners: "Deep partnerships with HSBC, BP and other British Fortune 100 companies",
        partnersProof: "🤝 View Partnership Agreements"
      },
      specificDegrees: [
        { 
          name: "Oxford DPhil", 
          advantage: "Highest Honor in Academia", 
          time: "14-21 days",
          value: "Global academic recognition, priority for research positions",
          applications: "For: University Professor, Research Director, Chief Scientist"
        },
        { 
          name: "Oxford MBA", 
          advantage: "European Business Passport", 
          time: "10-14 days",
          value: "Strong European business network, 200% higher executive promotion rate",
          applications: "For: European Business Director, International Strategy Consultant"
        },
        { 
          name: "BCL (Bachelor of Civil Law)", 
          advantage: "Gold Standard in Commonwealth Legal System", 
          time: "10-14 days",
          value: "International law firm starting salary £80,000+, fast track to partnership",
          applications: "For: International Law Firm Partner, Legal Director"
        }
      ],
      specificMajors: [
        { name: "Philosophy", career: "University Professor", salary: "£60K+", demand: "🔥High" },
        { name: "Economics", career: "Central Bank Director", salary: "£90K+", demand: "🔥Very High" },
        { name: "Law", career: "International Law Partner", salary: "£120K+", demand: "🔥Very High" },
        { name: "Medicine", career: "Hospital Director", salary: "£100K+", demand: "🔥High" },
        { name: "Computer Science", career: "Tech Director", salary: "£80K+", demand: "🔥Very High" },
        { name: "Business", career: "European CEO", salary: "£150K+", demand: "🔥High" }
      ],
      realScenarios: [
        { 
          industry: "Academia", 
          persona: "Professor Smith", 
          story: "Successfully secured tenured position at top UK university with Oxford DPhil degree",
          timeline: "15 days for authentication, 95% academic success rate"
        },
        { 
          industry: "International Law", 
          persona: "Partner Brown", 
          story: "Made partner at Magic Circle law firm, Oxford law degree was key factor",
          timeline: "12 days for authentication, 90% partnership success"
        },
        { 
          industry: "European Business", 
          persona: "Director Wilson", 
          story: "Appointed European Regional Director at multinational, Oxford MBA opened doors",
          timeline: "10 days for authentication, 85% executive success"
        }
      ],
      faqItems: [
        { q: "How is Oxford degree recognized globally?", a: "Oxford is one of the world's oldest and most prestigious universities, with global recognition in academia, law, and business. Its degrees are highly valued in Commonwealth countries and internationally." },
        { q: "What is the authentication process timeline?", a: "Regular degrees take 10-14 days, research degrees (DPhil) may take 14-21 days. We offer express service for urgent cases." },
        { q: "Which career paths benefit most from Oxford degree?", a: "Particularly valuable for academic careers, international law, European business leadership, and public policy positions." }
      ]
    },
    5: { // Cambridge
      h1Title: "Cambridge University Degree Authentication - Science and Arts Mastery",
      subtitle: "Newton, Hawking, and Nobel Laureates' Alma Mater | 121 Nobel Laureates | World-Class Academic Excellence",
      differentiator: "800 years of academic tradition, nurturing a legacy of scientific and artistic excellence",
      trustData: {
        employmentRate: "97% (Cambridge Career Service 2023 Report)",
        averageSalary: "Graduates average £50,000+",
        companyPartners: "Strategic partnerships with ARM, AstraZeneca, and other world-class companies"
      },
      specificDegrees: [
        { name: "Mathematics", advantage: "Quantitative Finance Golden Ticket", time: "10-14 days" },
        { name: "Engineering", advantage: "Global Engineering Excellence", time: "12-16 days" },
        { name: "Natural Sciences", advantage: "Top Academic Research", time: "14-21 days" }
      ],
      specificMajors: [
        { name: "Natural Sciences", career: "Chief Scientist", salary: "£70K+" },
        { name: "Economics", career: "Quantitative Analyst", salary: "£80K+" },
        { name: "Engineering", career: "Chief Technology Officer", salary: "£75K+" },
        { name: "Medicine", career: "Medical Research Director", salary: "£85K+" },
        { name: "Computer Science", career: "Software Architect", salary: "£70K+" },
        { name: "Mathematics", career: "Financial Engineer", salary: "£90K+" }
      ],
      realScenarios: [
        { scenario: "Professor Chen", story: "Academic research in Chinese Academy of Sciences, Cambridge Mathematics degree led to direct admission to a prestigious PhD program" },
        { scenario: "Dr. Wang", story: "Senior position at a top UK university, Cambridge MBA significantly boosted career prospects" },
        { scenario: "Ms. Li", story: "Technical leadership at Huawei, Cambridge Engineering degree recognized as a symbol of technical expertise" }
      ],
      faqItems: [
        { q: "How is Cambridge degree recognized in the academic world?", a: "Cambridge University is one of the oldest and most prestigious institutions in the world, with global recognition in academia, science, and the arts." },
        { q: "What is the authentication process timeline?", a: "Regular degrees take 10-14 days, research degrees (DPhil) may take 14-21 days. We offer express service for urgent cases." },
        { q: "Which career paths benefit most from Cambridge degree?", a: "Cambridge's strong foundation in science, technology, and humanities makes it a valuable asset for careers in academia, research, finance, and technology." }
      ]
    },
    6: { // NUS
      h1Title: "National University of Singapore Degree Authentication - Asian Academic Peak, Globally Recognized",
      subtitle: "Asia's #1 University | Highest Internationalization | Golden Standard in Asia-Pacific",
      differentiator: "Asia's top university, perfect blend of Eastern and Western education",
      trustData: {
        employmentRate: "94% (NUS Career Centre 2023 Report)",
        employmentSource: "NUS Career Centre 2023 Report",
        employmentProof: "📊 View Official Report",
        averageSalary: "Graduates average S$55,000+",
        salarySource: "Singapore Ministry of Education Statistics",
        salaryProof: "💰 View Salary Statistics",
        companyPartners: "Strategic partnerships with Singapore Government, Temasek and other institutions",
        partnersProof: "🤝 View Partnership Agreements"
      },
      specificDegrees: [
        { 
          name: "Master of Business", 
          advantage: "Asia-Pacific Business Passport", 
          time: "10-14 days",
          value: "Strong regional business network, 200% higher executive promotion rate",
          applications: "For: Asia-Pacific Director, Regional Manager, Business Development Lead"
        },
        { 
          name: "Bachelor of Engineering", 
          advantage: "Asian Engineering Recognition", 
          time: "7-10 days",
          value: "Technical expertise highly valued in Asian markets",
          applications: "For: Technical VP, Engineering Director, Project Manager"
        },
        { 
          name: "Master of Laws", 
          advantage: "Asian Legal Professional Recognition", 
          time: "12-16 days",
          value: "Strong foundation in Asian and international law",
          applications: "For: Legal Counsel, International Arbitrator, Corporate Lawyer"
        }
      ],
      specificMajors: [
        { name: "Business", career: "Asia-Pacific Director", salary: "S$80K+", demand: "🔥Very High" },
        { name: "Engineering", career: "Technical VP", salary: "S$75K+", demand: "🔥High" },
        { name: "Computer Science", career: "Software Architect", salary: "S$70K+", demand: "🔥Very High" },
        { name: "Medicine", career: "Healthcare CEO", salary: "S$90K+", demand: "🔥High" },
        { name: "Law", career: "International Arbitrator", salary: "S$85K+", demand: "🔥Medium-High" },
        { name: "Architecture", career: "Chief Designer", salary: "S$65K+", demand: "🔥Medium-High" }
      ],
      realScenarios: [
        { 
          industry: "Multinational Business", 
          persona: "Manager Zhang", 
          story: "Asia-Pacific Director position at multinational company, NUS business background helped secure Singapore HQ position",
          timeline: "10 days for authentication, 90% promotion success"
        },
        { 
          industry: "Immigration", 
          persona: "Engineer Liu", 
          story: "Singapore PR application, NUS degree significantly boosted technical immigration points",
          timeline: "8 days for authentication, 95% immigration success"
        },
        { 
          industry: "Legal Services", 
          persona: "Lawyer Wang", 
          story: "International arbitration tribunal qualification, NUS law degree proved professional competence",
          timeline: "12 days for authentication, 85% qualification success"
        }
      ],
      faqItems: [
        { q: "How is NUS degree recognized in Asia?", a: "NUS is ranked #1 in Asia, enjoying extremely high reputation across the Asia-Pacific region, especially in Singapore, Malaysia, and China." },
        { q: "How long does the authentication process take?", a: "Regular majors completed in 7-14 days, special majors like law may take 12-16 days. We offer express service." },
        { q: "Does NUS degree help with immigration applications?", a: "Yes, NUS degrees provide significant points for technical immigration in Singapore, Australia, Canada and other countries." }
      ]
    },
    7: { // UCL
      h1Title: "London University College Degree Authentication - London's First University, Academic Diversity",
      subtitle: "London's First University | G5 Super-Elite University | Architecture, Medicine, and Engineering Strong",
      differentiator: "World-class institution in the heart of London, known for academic freedom and diversity",
      trustData: {
        employmentRate: "93% (UCL Career Services 2023 Report)",
        averageSalary: "Graduates average £42,000+",
        companyPartners: "Strategic partnerships with BBC, NHS, and other leading institutions"
      },
      specificDegrees: [
        { name: "Architecture", advantage: "Global Architectural Design Recognition", time: "12-16 days" },
        { name: "Medicine", advantage: "UK Medical System Gold Standard", time: "16-21 days" },
        { name: "Engineering", advantage: "European Engineering Excellence", time: "10-14 days" }
      ],
      specificMajors: [
        { name: "Architecture", career: "Principal Architect", salary: "£65K+", demand: "🔥Very High" },
        { name: "Medicine", career: "Clinical Research Director", salary: "£80K+", demand: "🔥High" },
        { name: "Engineering", career: "Project Engineer", salary: "£60K+", demand: "🔥High" },
        { name: "Computer Science", career: "Technical Director", salary: "£70K+", demand: "🔥High" },
        { name: "Law", career: "Legal Director", salary: "£75K+", demand: "🔥Medium-High" },
        { name: "Economics", career: "Financial Analyst", salary: "£55K+", demand: "🔥Medium-High" }
      ],
      realScenarios: [
        { scenario: "Architect Li", story: "Partner at international architecture firm, UCL architecture degree recognized as a symbol of design excellence" },
        { scenario: "Doctor Wang", story: "Head of department at top London hospital, UCL medicine degree contributed to successful career in medical field" },
        { scenario: "Engineer Chen", story: "Lead engineer on major European infrastructure project, UCL engineering degree recognized as a symbol of technical expertise" }
      ],
      faqItems: [
        { q: "How is UCL degree recognized in architecture and medicine?", a: "UCL is one of the top institutions in these fields in the UK, with global recognition in academia and practice." },
        { q: "Is the authentication process longer than other universities?", a: "Due to the rigorous nature of some of our programs, it may take longer for some specializations. We strive to optimize the process as much as possible." },
        { q: "Is UCL degree valuable in the European job market?", a: "Absolutely, UCL is a prestigious institution in the UK, with high reputation and recognition across Europe." }
      ]
    },
    8: { // Imperial
      h1Title: "Imperial College London Degree Authentication - World-Class Science and Engineering",
      subtitle: "UK's #1 Science and Engineering University | World's Top 3 Engineering Schools | Highest Starting Salary",
      differentiator: "Leading institution in science and engineering, with MIT, Caltech, and ETH as peers",
      trustData: {
        employmentRate: "95% (Imperial Career Service 2023 Report)",
        averageSalary: "Graduates average £48,000+",
        companyPartners: "Strategic partnerships with Shell, BP, Goldman Sachs, and other leading companies"
      },
      specificDegrees: [
        { name: "Engineering", advantage: "Global Engineering Excellence", time: "10-14 days" },
        { name: "Business", advantage: "Technology and Business Best Fit", time: "8-12 days" },
        { name: "Science", advantage: "Top-Level Research in Science and Engineering", time: "14-18 days" }
      ],
      specificMajors: [
        { name: "Engineering", career: "Chief Technology Officer", salary: "£70K+", demand: "🔥Very High" },
        { name: "Business", career: "Technology Company CFO", salary: "£80K+", demand: "🔥High" },
        { name: "Computer Science", career: "Systems Architect", salary: "£65K+", demand: "🔥Very High" },
        { name: "Science", career: "Chief Scientist", salary: "£75K+", demand: "🔥High" },
        { name: "Financial Engineering", career: "Quantitative Trader", salary: "£90K+", demand: "🔥Very High" },
        { name: "Aerospace Engineering", career: "Airline CTO", salary: "£85K+", demand: "🔥Medium-High" }
      ],
      realScenarios: [
        { scenario: "Engineer Zhou", story: "Technology Director position at major oil company, Imperial College London degree recognized as a symbol of technical expertise in energy sector" },
        { scenario: "Analyst Huang", story: "Quantitative analyst at leading investment bank, Imperial College London background significantly boosted career prospects" },
        { scenario: "Researcher Qian", story: "Head of research lab at prestigious institution, Imperial College London PhD recognized as a symbol of research excellence" }
      ],
      faqItems: [
        { q: "How is Imperial College London degree recognized in science and engineering?", a: "Imperial College London is one of the top science and engineering institutions in the world, with global recognition and high starting salary." },
        { q: "What are the special requirements for science and engineering programs?", a: "Science and engineering programs require a high level of technical expertise, which we assess through a rigorous review process. We have a dedicated team to handle these applications." },
        { q: "Is Imperial College London degree valuable in the financial industry?", a: "Yes, our programs in quantitative finance, financial engineering, and other areas are highly valued in the investment banking and hedge fund industries." }
      ]
    },
    9: { // ETH
      h1Title: "ETH Zurich Degree Authentication - European Engineering Crown, Science and Arts Mastery",
      subtitle: "Einstein's Alma Mater | Europe's #1 Engineering School | 32 Nobel Laureates",
      differentiator: "Top engineering school in Europe, with a legacy of scientific and artistic excellence",
      trustData: {
        employmentRate: "96% (ETH Career Center 2023 Report)",
        averageSalary: "Graduates average CHF 85,000+",
        companyPartners: "Strategic partnerships with UBS, Nestlé, ABB, and other leading companies"
      },
      specificDegrees: [
        { name: "Engineering", advantage: "European Engineering Excellence", time: "12-16 days" },
        { name: "Computer Science", advantage: "European IT Industry Golden Ticket", time: "10-14 days" },
        { name: "Natural Sciences", advantage: "Top-Level Research in Science and Arts", time: "16-21 days" }
      ],
      specificMajors: [
        { name: "Engineering", career: "European Technology Director", salary: "CHF 95K+" },
        { name: "Computer Science", career: "Swiss Tech Company CTO", salary: "CHF 90K+" },
        { name: "Natural Sciences", career: "Research Institute Director", salary: "CHF 100K+" },
        { name: "Mathematics", career: "Financial Modeler", salary: "CHF 85K+" },
        { name: "Physics", career: "Innovation Director", salary: "CHF 95K+" },
        { name: "Chemistry", career: "Pharmaceutical R&D VP", salary: "CHF 105K+" }
      ],
      realScenarios: [
        { scenario: "Engineer Li", story: "Head of European engineering project at a leading company, ETH degree recognized as a symbol of technical expertise in precision manufacturing" },
        { scenario: "Scientist Zhang", story: "Head of Sino-European research project, ETH PhD recognized as a symbol of international cooperation" },
        { scenario: "Technical Director Wang", story: "CTO position at Swiss tech company, ETH background recognized as a symbol of success in European high-tech industry" }
      ],
      faqItems: [
        { q: "How is ETH degree recognized in Europe?", a: "ETH is the top engineering school in Europe, with global recognition and high starting salary. It's also the alma mater of Albert Einstein." },
        { q: "What are the special requirements for Swiss degree authentication?", a: "Swiss education system is rigorous, and the authentication process is complex. We have a dedicated team to handle these applications." },
        { q: "Is ETH degree valuable in the European job market?", a: "Yes, ETH is a prestigious institution in Europe, with global recognition and high starting salary." }
      ]
    },
    10: { // UC Berkeley
      h1Title: "UC Berkeley Degree Authentication - Public Ivy Standard, Academic Freedom",
      subtitle: "Public Ivy Leader | Academic Freedom | Social Change Pioneer",
      differentiator: "Model of public university in the US, known for academic freedom and social responsibility",
      trustData: {
        employmentRate: "92% (UC Berkeley Career Center 2023 Report)",
        averageSalary: "Graduates average $75,000+",
        companyPartners: "Strategic partnerships with Apple, Google, Intel, and other Silicon Valley giants"
      },
      specificDegrees: [
        { name: "Computer Science", advantage: "Recognition from Silicon Valley tech companies", time: "7-10 days" },
        { name: "Business", advantage: "West Coast Business Passport", time: "10-14 days" },
        { name: "Law", advantage: "California Legal Authority", time: "12-16 days" }
      ],
      specificMajors: [
        { name: "Computer Science", career: "Silicon Valley Software Engineer", salary: "$95K+", demand: "🔥Very High" },
        { name: "Business", career: "Tech Company VP", salary: "$120K+", demand: "🔥High" },
        { name: "Law", career: "Law Firm Partner", salary: "$150K+", demand: "🔥High" },
        { name: "Engineering", career: "Technical Architect", salary: "$110K+", demand: "🔥High" },
        { name: "Economics", career: "Policy Analyst", salary: "$85K+", demand: "🔥Medium-High" },
        { name: "Sociology", career: "NGO Director", salary: "$70K+", demand: "🔥Medium" }
      ],
      realScenarios: [
        { scenario: "Programmer Zhang", story: "Software Engineer position at Google, UC Berkeley CS degree recognized as a symbol of technical expertise" },
        { scenario: "Startup Founder Li", story: "Startup backed by angel investment, UC Berkeley background increased investor confidence" },
        { scenario: "Lawyer Wang", story: "Partner at top California law firm, UC Berkeley law degree recognized as a symbol of professional competence" }
      ],
      faqItems: [
        { q: "How is UC Berkeley degree recognized as a public institution?", a: "UC Berkeley is the top public university in the US, known as 'Public Ivy', with academic reputation comparable to private elite institutions." },
        { q: "Is UC Berkeley degree valuable in Silicon Valley?", a: "Yes, UC Berkeley is located in the heart of Silicon Valley, with a strong reputation in the tech industry." },
        { q: "What are the advantages of public university degree certification?", a: "Public university degree certification is straightforward and cost-effective, while maintaining high academic reputation and job market recognition." }
      ]
    }
  }
};

// 生成静态参数
export async function generateStaticParams(): Promise<{ locale: string; id: string }[]> {
  const params: { locale: string; id: string }[] = [];
  const locales = ['zh', 'en'];
  
  for (const locale of locales) {
    const schools = schoolsData[locale as keyof typeof schoolsData];
    for (const school of schools) {
      params.push({
        locale,
        id: school.id.toString()
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; id: string }> }): Promise<Metadata> {
  const { locale, id } = await params;
  const resolvedLocale = locale || 'zh';
  const schoolId = parseInt(id);
  const schools = schoolsData[resolvedLocale as keyof typeof schoolsData] || schoolsData.zh;
  const school = schools.find(s => s.id === schoolId);
  
  if (!school) {
    return {
      title: 'School Not Found',
      description: 'The requested school could not be found.'
    };
  }

  const uniqueInfo = (schoolUniqueInfo[resolvedLocale] && schoolUniqueInfo[resolvedLocale][schoolId]) || schoolUniqueInfo['zh'][schoolId];
  if (!uniqueInfo) {
    return {
      title: 'School Information Not Found',
      description: 'The requested school information could not be found.'
    };
  }

  const pageTitle = `${school.name} Degree Authentication - ${uniqueInfo.h1Title} | Acaboost`;
  const pageDescription = `${school.name} degree authentication service, complete in 7 days. ${uniqueInfo.trustData.employmentRate || '95%+'} employment rate, professional ${school.name} authentication team, 100% verifiable, serving 3000+ professionals. Contact us now for ${school.name} degree authentication solutions.`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: `${school.name} degree authentication,${school.name} certification,${school.name} authentication service,fast degree authentication,${school.name} diploma verification,overseas degree authentication,${school.majors.slice(0,4).join(`${school.name} certification,`)}${school.name} certification,authentication process,authentication fee consultation`,
    openGraph: {
      title: `${school.name} Degree Authentication - Get Authorized Certification in 7 Days`,
      description: pageDescription,
      type: 'website',
      url: `https://acaboost.com/${resolvedLocale}/schools/${schoolId}`,
    },
    alternates: {
      canonical: `https://acaboost.com/${resolvedLocale}/schools/${schoolId}`,
    },
  };
}

export default async function SchoolDetail({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale, id } = await params;
  const resolvedLocale = locale || 'zh';
  const schoolId = parseInt(id);
  
  const schools = schoolsData[resolvedLocale as keyof typeof schoolsData] || schoolsData.zh;
  const school = schools.find(s => s.id === schoolId);

  if (!school) {
    notFound();
  }

  // 如果没有uniqueInfo，使用默认数据
  let uniqueInfo = (schoolUniqueInfo[resolvedLocale] && schoolUniqueInfo[resolvedLocale][schoolId]) || schoolUniqueInfo['zh'][schoolId];
  
  if (!uniqueInfo) {
    // 为缺失数据的学校创建默认信息
    uniqueInfo = {
      h1Title: resolvedLocale === 'en' 
        ? `${school.name} Degree Authentication - Fast & Reliable Academic Credential Services`
        : `${school.name}学历认证 - 快速可靠的学历认证服务`,
      subtitle: resolvedLocale === 'en'
        ? "Professional degree authentication | Global recognition | Fast processing"
        : "专业学历认证 | 全球认可 | 快速办理",
      differentiator: resolvedLocale === 'en'
        ? `Leading institution in ${school.country}`
        : `${school.country}知名学府`,
      trustData: {
        employmentRate: "95%",
        employmentSource: resolvedLocale === 'en' ? "Official employment statistics" : "官方就业统计",
        employmentProof: "📊 " + (resolvedLocale === 'en' ? "View employment report" : "查看就业报告"),
        averageSalary: resolvedLocale === 'en' ? "Competitive market rate" : "市场竞争力薪资",
        salarySource: resolvedLocale === 'en' ? "Industry salary survey 2024" : "2024年行业薪资调研",
        salaryProof: "💰 " + (resolvedLocale === 'en' ? "View salary statistics" : "查看薪资统计"),
        companyPartners: resolvedLocale === 'en' ? "Partnership with leading global companies" : "与全球知名企业建立合作",
        partnersProof: "🤝 " + (resolvedLocale === 'en' ? "View partnership details" : "查看合作详情")
      },
      specificDegrees: [
        { 
          name: resolvedLocale === 'en' ? "Bachelor's Degree" : "学士学位", 
          advantage: resolvedLocale === 'en' ? "Strong academic foundation" : "扎实的学术基础", 
          time: resolvedLocale === 'en' ? "7-10 days" : "7-10天",
          value: resolvedLocale === 'en' ? "Excellent career prospects" : "优秀的职业前景",
          applications: resolvedLocale === 'en' ? "Suitable for: Entry-level positions, further studies" : "适用于：入门级职位、继续深造"
        },
        { 
          name: resolvedLocale === 'en' ? "Master's Degree" : "硕士学位", 
          advantage: resolvedLocale === 'en' ? "Advanced expertise" : "高级专业技能", 
          time: resolvedLocale === 'en' ? "10-14 days" : "10-14天",
          value: resolvedLocale === 'en' ? "Management and leadership roles" : "管理和领导职位",
          applications: resolvedLocale === 'en' ? "Suitable for: Senior positions, specialization" : "适用于：高级职位、专业化发展"
        }
      ],
      specificMajors: school.majors.slice(0, 6).map((major, index) => ({
        name: major,
        career: resolvedLocale === 'en' ? `${major} Specialist` : `${major}专家`,
        salary: resolvedLocale === 'en' ? `$${50 + index * 5}K+` : `¥${(50 + index * 5) * 7}K+`,
        demand: index < 3 ? "🔥" + (resolvedLocale === 'en' ? "High" : "高") : "🔥" + (resolvedLocale === 'en' ? "Medium" : "中等")
      })),
      realScenarios: [
        { 
          industry: resolvedLocale === 'en' ? "Technology" : "科技行业", 
          persona: resolvedLocale === 'en' ? "Tech Professional" : "张工程师", 
          story: resolvedLocale === 'en' 
            ? `Professional leveraged ${school.name} credentials for a promotion to senior role with significant salary increase`
            : `${school.name}学历帮助其获得高级职位晋升，薪资大幅提升`,
          timeline: resolvedLocale === 'en' ? "Authentication: 7-10 days, Success rate: 95%" : "认证用时7-10天，成功率95%"
        },
        { 
          industry: resolvedLocale === 'en' ? "Business" : "商业领域", 
          persona: resolvedLocale === 'en' ? "Business Leader" : "李经理", 
          story: resolvedLocale === 'en' 
            ? `${school.name} degree opened doors to international business opportunities`
            : `${school.name}学历为其打开国际商务机会大门`,
          timeline: resolvedLocale === 'en' ? "Authentication: 8-12 days, Success rate: 92%" : "认证用时8-12天，成功率92%"
        }
      ],
      faqItems: [
        { 
          q: resolvedLocale === 'en' ? `How long does ${school.name} authentication take?` : `${school.name}学历认证需要多长时间？`, 
          a: resolvedLocale === 'en' 
            ? `${school.name} authentication typically takes 7-14 days. We provide expedited services for urgent needs.`
            : `${school.name}学历认证通常需要7-14天。我们为紧急需求提供加急服务。`
        },
        { 
          q: resolvedLocale === 'en' ? `Is ${school.name} degree globally recognized?` : `${school.name}学历全球认可度如何？`, 
          a: resolvedLocale === 'en' 
            ? `${school.name} is internationally recognized and our authentication ensures global acceptance.`
            : `${school.name}具有国际认可度，我们的认证确保全球通用。`
        },
        { 
          q: resolvedLocale === 'en' ? "What is the cost and success guarantee?" : "费用和成功保证是什么？", 
          a: resolvedLocale === 'en' 
            ? "We provide transparent pricing and guarantee 100% authentic credentials. Full refund if unsuccessful."
            : "我们提供透明报价，保证100%真实有效。不成功全额退款。"
        }
      ]
    };
  }

  // Pass all necessary data to client component
  return (
    <SchoolDetailClient 
      locale={resolvedLocale}
      school={school}
      uniqueInfo={uniqueInfo}
      schools={schools}
    />
  );
} 