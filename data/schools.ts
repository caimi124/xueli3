export interface School {
  name: string;
  country: string;
  qsRanking: number;
  logo: string;
  slug: string;
  majors: string[];
}

export const schools: School[] = [
  // 美国 - 33所学校
  {
    name: "麻省理工学院 (MIT)",
    country: "美国",
    qsRanking: 1,
    logo: "/images/schools/mit.jpg",
    slug: "mit",
    majors: ["电子工程", "计算机科学", "机械工程", "人工智能", "数据科学", "生物工程", "材料科学"]
  },
  {
    name: "哈佛大学",
    country: "美国",
    qsRanking: 4,
    logo: "/images/schools/harvard.jpg",
    slug: "harvard",
    majors: ["法学", "医学", "商学", "公共政策", "经济学", "心理学", "计算机科学"]
  },
  {
    name: "斯坦福大学",
    country: "美国",
    qsRanking: 6,
    logo: "/images/schools/stanford.jpg",
    slug: "stanford",
    majors: ["计算机科学", "工程学", "商业管理", "医学", "人工智能", "数据科学"]
  },
  {
    name: "宾夕法尼亚大学",
    country: "美国",
    qsRanking: 11,
    logo: "/images/schools/upenn.jpg",
    slug: "upenn",
    majors: ["商学", "工程学", "医学", "法学", "计算机科学", "经济学"]
  },
  {
    name: "加州大学伯克利分校",
    country: "美国",
    qsRanking: 12,
    logo: "/images/schools/berkeley.jpg",
    slug: "berkeley",
    majors: ["计算机科学", "工程学", "商科", "法学", "公共政策", "新闻学"]
  },
  {
    name: "康奈尔大学",
    country: "美国",
    qsRanking: 16,
    logo: "/images/schools/cornell.jpg",
    slug: "cornell",
    majors: ["工程学", "商学", "农学", "兽医学", "酒店管理", "计算机科学"]
  },
  {
    name: "芝加哥大学",
    country: "美国",
    qsRanking: 21,
    logo: "/images/schools/uchicago.jpg",
    slug: "uchicago",
    majors: ["经济学", "商学", "法学", "医学", "社会科学", "物理学"]
  },
  {
    name: "普林斯顿大学",
    country: "美国",
    qsRanking: 22,
    logo: "/images/schools/princeton.jpg",
    slug: "princeton",
    majors: ["经济学", "计算机科学", "物理学", "数学", "工程学", "公共政策"]
  },
  {
    name: "耶鲁大学",
    country: "美国",
    qsRanking: 23,
    logo: "/images/schools/yale.jpg",
    slug: "yale",
    majors: ["法学", "医学", "商学", "人文学科", "社会科学", "艺术学"]
  },
  {
    name: "约翰霍普金斯大学",
    country: "美国",
    qsRanking: 32,
    logo: "/images/schools/jhu.jpg",
    slug: "jhu",
    majors: ["医学", "公共卫生", "国际关系", "工程学", "护理学", "生物医学"]
  },
  {
    name: "哥伦比亚大学",
    country: "美国",
    qsRanking: 34,
    logo: "/images/schools/columbia.jpg",
    slug: "columbia",
    majors: ["新闻学", "商学", "医学", "法学", "工程学", "国际关系"]
  },
  {
    name: "加州大学洛杉矶分校 (UCLA)",
    country: "美国",
    qsRanking: 42,
    logo: "/images/schools/ucla.jpg",
    slug: "ucla",
    majors: ["电影学", "医学", "商学", "工程学", "心理学", "计算机科学"]
  },
  {
    name: "纽约大学 (NYU)",
    country: "美国",
    qsRanking: 43,
    logo: "/images/schools/nyu.jpg",
    slug: "nyu",
    majors: ["商学", "艺术学", "法学", "医学", "工程学", "电影学"]
  },
  {
    name: "密歇根大学",
    country: "美国",
    qsRanking: 44,
    logo: "/images/schools/umich.jpg",
    slug: "umich",
    majors: ["工程学", "商学", "医学", "法学", "公共政策", "心理学"]
  },
  {
    name: "美国西北大学",
    country: "美国",
    qsRanking: 50,
    logo: "/images/schools/northwestern.jpg",
    slug: "northwestern",
    majors: ["新闻学", "商学", "医学", "工程学", "音乐学", "戏剧学"]
  },
  {
    name: "卡内基梅隆大学",
    country: "美国",
    qsRanking: 58,
    logo: "/images/schools/cmu.jpg",
    slug: "cmu",
    majors: ["计算机科学", "工程学", "商学", "艺术学", "机器人学", "人工智能"]
  },
  {
    name: "杜克大学",
    country: "美国",
    qsRanking: 61,
    logo: "/images/schools/duke.jpg",
    slug: "duke",
    majors: ["医学", "商学", "法学", "工程学", "公共政策", "环境科学"]
  },
  {
    name: "伊利诺伊大学香槟分校",
    country: "美国",
    qsRanking: 69,
    logo: "/images/schools/uiuc.jpg",
    slug: "uiuc",
    majors: ["工程学", "计算机科学", "商学", "农学", "新闻学", "教育学"]
  },
  {
    name: "华盛顿大学",
    country: "美国",
    qsRanking: 76,
    logo: "/images/schools/uw.jpg",
    slug: "uw",
    majors: ["医学", "计算机科学", "工程学", "商学", "公共卫生", "环境科学"]
  },
  {
    name: "布朗大学",
    country: "美国",
    qsRanking: 79,
    logo: "/images/schools/brown.jpg",
    slug: "brown",
    majors: ["计算机科学", "经济学", "工程学", "国际关系", "医学", "心理学"]
  },
  {
    name: "普渡大学西拉法叶分校",
    country: "美国",
    qsRanking: 89,
    logo: "/images/schools/purdue.jpg",
    slug: "purdue",
    majors: ["工程学", "计算机科学", "航空航天", "农学", "商学", "兽医学"]
  },
  {
    name: "波士顿大学",
    country: "美国",
    qsRanking: 108,
    logo: "/images/schools/bu.jpg",
    slug: "bu",
    majors: ["商学", "工程学", "医学", "传播学", "法学", "教育学"]
  },
  {
    name: "南加州大学 (USC)",
    country: "美国",
    qsRanking: 125,
    logo: "/images/schools/usc.jpg",
    slug: "usc",
    majors: ["电影学", "商学", "工程学", "传播学", "医学", "音乐学"]
  },
  {
    name: "莱斯大学",
    country: "美国",
    qsRanking: 141,
    logo: "/images/schools/rice.jpg",
    slug: "rice",
    majors: ["工程学", "自然科学", "商学", "音乐学", "建筑学", "人文学科"]
  },
  {
    name: "亚利桑那州立大学",
    country: "美国",
    qsRanking: 200,
    logo: "/images/schools/asu.jpg",
    slug: "asu",
    majors: ["商学", "工程学", "新闻学", "法学", "教育学", "可持续发展"]
  },
  {
    name: "明尼苏达大学双城分校",
    country: "美国",
    qsRanking: 203,
    logo: "/images/schools/umn.jpg",
    slug: "umn",
    majors: ["工程学", "商学", "医学", "农学", "公共卫生", "兽医学"]
  },
  {
    name: "俄亥俄州立大学",
    country: "美国",
    qsRanking: 208,
    logo: "/images/schools/osu.jpg",
    slug: "osu",
    majors: ["工程学", "商学", "医学", "农学", "教育学", "兽医学"]
  },
  {
    name: "天普大学",
    country: "美国",
    qsRanking: 690,
    logo: "/images/schools/temple.jpg",
    slug: "temple",
    majors: ["商学", "工程学", "传媒学", "法学", "医学", "教育学"]
  },
  {
    name: "美利坚大学",
    country: "美国",
    qsRanking: 720,
    logo: "/images/schools/american.jpg",
    slug: "american",
    majors: ["国际关系", "商学", "传播学", "法学", "公共政策", "教育学"]
  },
  {
    name: "布兰迪斯大学",
    country: "美国",
    qsRanking: 730,
    logo: "/images/schools/brandeis.jpg",
    slug: "brandeis",
    majors: ["商学", "社会科学", "生命科学", "计算机科学", "心理学", "经济学"]
  },
  {
    name: "奥本大学",
    country: "美国",
    qsRanking: 1000,
    logo: "/images/schools/auburn.jpg",
    slug: "auburn",
    majors: ["工程学", "商学", "农学", "兽医学", "建筑学", "教育学"]
  },
  {
    name: "肯特州立大学",
    country: "美国",
    qsRanking: 1200,
    logo: "/images/schools/kent.jpg",
    slug: "kent",
    majors: ["商学", "教育学", "艺术学", "传媒学", "护理学", "工程学"]
  },
  {
    name: "罗德岛大学",
    country: "美国",
    qsRanking: 1200,
    logo: "/images/schools/uri.jpg",
    slug: "uri",
    majors: ["工程学", "商学", "海洋学", "药学", "护理学", "教育学"]
  },
  
  // 英国 - 27所学校
  {
    name: "帝国理工学院",
    country: "英国",
    qsRanking: 2,
    logo: "/images/schools/imperial.jpg",
    slug: "imperial",
    majors: ["工程学", "计算机科学", "医学", "商科", "自然科学", "数学"]
  },
  {
    name: "牛津大学",
    country: "英国",
    qsRanking: 3,
    logo: "/images/schools/oxford.jpg",
    slug: "oxford",
    majors: ["人文社科", "医学", "法学", "经济学", "计算机科学", "工程学"]
  },
  {
    name: "剑桥大学",
    country: "英国",
    qsRanking: 5,
    logo: "/images/schools/cambridge.jpg",
    slug: "cambridge",
    majors: ["自然科学", "经济学", "工程学", "医学", "计算机科学", "数学"]
  },
  {
    name: "伦敦大学学院 (UCL)",
    country: "英国",
    qsRanking: 9,
    logo: "/images/schools/ucl.jpg",
    slug: "ucl",
    majors: ["建筑学", "工程学", "医学", "法学", "经济学", "心理学"]
  },
  {
    name: "爱丁堡大学",
    country: "英国",
    qsRanking: 27,
    logo: "/images/schools/edinburgh.jpg",
    slug: "edinburgh",
    majors: ["医学", "工程学", "商学", "法学", "艺术学", "计算机科学"]
  },
  {
    name: "曼彻斯特大学",
    country: "英国",
    qsRanking: 34,
    logo: "/images/schools/manchester.jpg",
    slug: "manchester",
    majors: ["工程学", "商学", "医学", "计算机科学", "材料科学", "化学"]
  },
  {
    name: "伦敦国王学院 (KCL)",
    country: "英国",
    qsRanking: 40,
    logo: "/images/schools/kcl.jpg",
    slug: "kcl",
    majors: ["医学", "法学", "国际关系", "商学", "工程学", "心理学"]
  },
  {
    name: "伦敦政治经济学院 (LSE)",
    country: "英国",
    qsRanking: 50,
    logo: "/images/schools/lse.jpg",
    slug: "lse",
    majors: ["经济学", "政治学", "社会学", "法学", "商学", "国际关系"]
  },
  {
    name: "布里斯托大学",
    country: "英国",
    qsRanking: 54,
    logo: "/images/schools/bristol.jpg",
    slug: "bristol",
    majors: ["工程学", "医学", "法学", "经济学", "计算机科学", "地球科学"]
  },
  {
    name: "华威大学",
    country: "英国",
    qsRanking: 69,
    logo: "/images/schools/warwick.jpg",
    slug: "warwick",
    majors: ["商学", "经济学", "工程学", "计算机科学", "数学", "统计学"]
  },
  {
    name: "格拉斯哥大学",
    country: "英国",
    qsRanking: 78,
    logo: "/images/schools/glasgow.jpg",
    slug: "glasgow",
    majors: ["医学", "工程学", "商学", "法学", "兽医学", "心理学"]
  },
  {
    name: "南安普顿大学",
    country: "英国",
    qsRanking: 80,
    logo: "/images/schools/southampton.jpg",
    slug: "southampton",
    majors: ["工程学", "计算机科学", "海洋学", "医学", "商学", "法学"]
  },
  {
    name: "利兹大学",
    country: "英国",
    qsRanking: 82,
    logo: "/images/schools/leeds.jpg",
    slug: "leeds",
    majors: ["工程学", "商学", "医学", "法学", "艺术学", "传媒学"]
  },
  {
    name: "伯明翰大学",
    country: "英国",
    qsRanking: 94,
    logo: "/images/schools/birmingham.jpg",
    slug: "birmingham",
    majors: ["医学", "工程学", "商学", "法学", "教育学", "心理学"]
  },
  {
    name: "谢菲尔德大学",
    country: "英国",
    qsRanking: 105,
    logo: "/images/schools/sheffield.jpg",
    slug: "sheffield",
    majors: ["工程学", "医学", "商学", "建筑学", "新闻学", "计算机科学"]
  },
  {
    name: "诺丁汉大学",
    country: "英国",
    qsRanking: 108,
    logo: "/images/schools/nottingham.jpg",
    slug: "nottingham",
    majors: ["工程学", "商学", "医学", "法学", "农学", "兽医学"]
  },
  {
    name: "伦敦玛丽女王大学",
    country: "英国",
    qsRanking: 120,
    logo: "/images/schools/qmul.jpg",
    slug: "qmul",
    majors: ["医学", "工程学", "法学", "商学", "计算机科学", "经济学"]
  },
  {
    name: "纽卡斯尔大学 (英国)",
    country: "英国",
    qsRanking: 129,
    logo: "/images/schools/newcastle.jpg",
    slug: "newcastle",
    majors: ["医学", "工程学", "商学", "法学", "建筑学", "农学"]
  },
  {
    name: "兰卡斯特大学",
    country: "英国",
    qsRanking: 141,
    logo: "/images/schools/lancaster.jpg",
    slug: "lancaster",
    majors: ["商学", "工程学", "计算机科学", "环境科学", "心理学", "艺术学"]
  },
  {
    name: "利物浦大学",
    country: "英国",
    qsRanking: 165,
    logo: "/images/schools/liverpool.jpg",
    slug: "liverpool",
    majors: ["医学", "工程学", "商学", "法学", "兽医学", "海洋学"]
  },
  {
    name: "约克大学 (英国)",
    country: "英国",
    qsRanking: 184,
    logo: "/images/schools/york.jpg",
    slug: "york",
    majors: ["计算机科学", "经济学", "心理学", "考古学", "语言学", "音乐学"]
  },
  {
    name: "卡迪夫大学",
    country: "英国",
    qsRanking: 186,
    logo: "/images/schools/cardiff.jpg",
    slug: "cardiff",
    majors: ["工程学", "商学", "医学", "法学", "新闻学", "建筑学"]
  },
  {
    name: "莱斯特大学",
    country: "英国",
    qsRanking: 285,
    logo: "/images/schools/leicester.jpg",
    slug: "leicester",
    majors: ["医学", "法学", "商学", "工程学", "考古学", "博物馆学"]
  },
  {
    name: "伦敦城市大学",
    country: "英国",
    qsRanking: 352,
    logo: "/images/schools/city.jpg",
    slug: "city",
    majors: ["商学", "工程学", "法学", "新闻学", "计算机科学", "音乐学"]
  },
  {
    name: "牛津布鲁克斯大学",
    country: "英国",
    qsRanking: 416,
    logo: "/images/schools/brookes.jpg",
    slug: "brookes",
    majors: ["商学", "工程学", "建筑学", "教育学", "酒店管理", "艺术学"]
  },
  {
    name: "格林威治大学",
    country: "英国",
    qsRanking: 700,
    logo: "/images/schools/greenwich.jpg",
    slug: "greenwich",
    majors: ["商学", "工程学", "建筑学", "计算机科学", "教育学", "健康科学"]
  },
  {
    name: "布莱顿大学",
    country: "英国",
    qsRanking: 850,
    logo: "/images/schools/brighton.jpg",
    slug: "brighton",
    majors: ["艺术学", "商学", "工程学", "医学", "教育学", "建筑学"]
  },
  {
    name: "德比大学",
    country: "英国",
    qsRanking: 1200,
    logo: "/images/schools/derby.jpg",
    slug: "derby",
    majors: ["商学", "工程学", "教育学", "健康科学", "艺术学", "计算机科学"]
  },
  {
    name: "利兹贝克特大学",
    country: "英国",
    qsRanking: 1200,
    logo: "/images/schools/leedsbeckett.jpg",
    slug: "leedsbeckett",
    majors: ["商学", "工程学", "教育学", "健康科学", "艺术学", "体育科学"]
  },

  // 新加坡 - 2所学校
  {
    name: "新加坡国立大学 (NUS)",
    country: "新加坡",
    qsRanking: 8,
    logo: "/images/schools/nus.jpg",
    slug: "nus",
    majors: ["工程学", "计算机科学", "商学", "医学", "法学", "建筑学"]
  },
  {
    name: "南洋理工大学 (NTU)",
    country: "新加坡",
    qsRanking: 15,
    logo: "/images/schools/ntu.jpg",
    slug: "ntu",
    majors: ["工程学", "商学", "传播学", "教育学", "计算机科学", "材料科学"]
  },

  // 日本 - 3所学校
  {
    name: "东京大学",
    country: "日本",
    qsRanking: 32,
    logo: "/images/schools/tokyo.jpg",
    slug: "tokyo",
    majors: ["自然科学", "工程学", "医学", "经济学", "计算机科学", "农学"]
  },
  {
    name: "东京工业大学",
    country: "日本",
    qsRanking: 84,
    logo: "/images/schools/titech.jpg",
    slug: "titech",
    majors: ["工程学", "计算机科学", "材料科学", "化学", "物理学", "数学"]
  },
  {
    name: "大阪大学",
    country: "日本",
    qsRanking: 86,
    logo: "/images/schools/osaka.jpg",
    slug: "osaka",
    majors: ["医学", "工程学", "经济学", "法学", "理学", "文学"]
  },

  // 加拿大 - 5所学校
  {
    name: "多伦多大学",
    country: "加拿大",
    qsRanking: 25,
    logo: "/images/schools/toronto.jpg",
    slug: "toronto",
    majors: ["医学", "计算机科学", "商学", "工程学", "法学", "教育学"]
  },
  {
    name: "麦吉尔大学",
    country: "加拿大",
    qsRanking: 29,
    logo: "/images/schools/mcgill.jpg",
    slug: "mcgill",
    majors: ["医学", "工程学", "商学", "法学", "音乐学", "农学"]
  },
  {
    name: "英属哥伦比亚大学 (UBC)",
    country: "加拿大",
    qsRanking: 38,
    logo: "/images/schools/ubc.jpg",
    slug: "ubc",
    majors: ["医学", "工程学", "商学", "林学", "计算机科学", "教育学"]
  },
  {
    name: "圣保罗大学",
    country: "加拿大",
    qsRanking: 92,
    logo: "/images/schools/ottawa.jpg",
    slug: "ottawa",
    majors: ["医学", "工程学", "法学", "商学", "社会科学", "教育学"]
  },
  {
    name: "阿尔伯塔大学",
    country: "加拿大",
    qsRanking: 96,
    logo: "/images/schools/alberta.jpg",
    slug: "alberta",
    majors: ["工程学", "医学", "商学", "农学", "法学", "教育学"]
  },

  // 澳大利亚 - 5所学校
  {
    name: "墨尔本大学",
    country: "澳大利亚",
    qsRanking: 13,
    logo: "/images/schools/melbourne.jpg",
    slug: "melbourne",
    majors: ["法学", "医学", "商学", "工程学", "计算机科学", "教育学"]
  },
  {
    name: "悉尼大学",
    country: "澳大利亚",
    qsRanking: 18,
    logo: "/images/schools/sydney.jpg",
    slug: "sydney",
    majors: ["商科", "工程学", "医学", "法学", "建筑学", "媒体传播"]
  },
  {
    name: "新南威尔士大学",
    country: "澳大利亚",
    qsRanking: 19,
    logo: "/images/schools/unsw.jpg",
    slug: "unsw",
    majors: ["工程学", "商学", "医学", "法学", "艺术学", "建筑学"]
  },
  {
    name: "澳大利亚国立大学",
    country: "澳大利亚",
    qsRanking: 30,
    logo: "/images/schools/anu.jpg",
    slug: "anu",
    majors: ["政治学", "国际关系", "经济学", "法学", "工程学", "计算机科学"]
  },
  {
    name: "莫纳什大学",
    country: "澳大利亚",
    qsRanking: 37,
    logo: "/images/schools/monash.jpg",
    slug: "monash",
    majors: ["医学", "工程学", "商学", "法学", "教育学", "药学"]
  },

  // 新西兰 - 2所学校
  {
    name: "奥克兰大学",
    country: "新西兰",
    qsRanking: 65,
    logo: "/images/schools/auckland.jpg",
    slug: "auckland",
    majors: ["工程学", "医学", "商学", "法学", "教育学", "艺术学"]
  },
  {
    name: "林肯大学 (新西兰)",
    country: "新西兰",
    qsRanking: 368,
    logo: "/images/schools/lincoln.jpg",
    slug: "lincoln",
    majors: ["农学", "环境科学", "商学", "工程学", "旅游管理", "景观建筑"]
  },

  // 香港 - 6所学校
  {
    name: "香港大学 (HKU)",
    country: "香港",
    qsRanking: 17,
    logo: "/images/schools/hku.jpg",
    slug: "hku",
    majors: ["医学", "法学", "商学", "工程学", "社会科学", "建筑学"]
  },
  {
    name: "香港中文大学 (CUHK)",
    country: "香港",
    qsRanking: 36,
    logo: "/images/schools/cuhk.jpg",
    slug: "cuhk",
    majors: ["商学", "医学", "工程学", "社会科学", "教育学", "新闻学"]
  },
  {
    name: "香港科技大学 (HKUST)",
    country: "香港",
    qsRanking: 47,
    logo: "/images/schools/hkust.jpg",
    slug: "hkust",
    majors: ["工程学", "商学", "理学", "计算机科学", "环境科学", "数学"]
  },
  {
    name: "香港理工大学",
    country: "香港",
    qsRanking: 57,
    logo: "/images/schools/polyu.jpg",
    slug: "polyu",
    majors: ["工程学", "商学", "设计学", "酒店管理", "健康科学", "建筑学"]
  },
  {
    name: "香港城市大学",
    country: "香港",
    qsRanking: 62,
    logo: "/images/schools/cityu.jpg",
    slug: "cityu",
    majors: ["工程学", "商学", "创意媒体", "法学", "兽医学", "计算机科学"]
  },
  {
    name: "香港浸会大学",
    country: "香港",
    qsRanking: 252,
    logo: "/images/schools/hkbu.jpg",
    slug: "hkbu",
    majors: ["传理学", "商学", "中医药学", "艺术学", "社会科学", "理学"]
  },

  // 澳门 - 3所学校
  {
    name: "澳门大学",
    country: "澳门",
    qsRanking: 245,
    logo: "/images/schools/um.jpg",
    slug: "um",
    majors: ["商学", "工程学", "法学", "教育学", "健康科学", "社会科学"]
  },
  {
    name: "澳门科技大学",
    country: "澳门",
    qsRanking: 464,
    logo: "/images/schools/must.jpg",
    slug: "must",
    majors: ["商学", "工程学", "计算机科学", "法学", "中医药学", "设计学"]
  },
  {
    name: "澳门城市大学",
    country: "澳门",
    qsRanking: 999,
    logo: "/images/schools/cityu-macau.jpg",
    slug: "cityu-macau",
    majors: ["商学", "教育学", "法学", "艺术学", "设计学", "计算机科学"]
  },

  // 荷兰 - 2所学校
  {
    name: "阿姆斯特丹大学",
    country: "荷兰",
    qsRanking: 55,
    logo: "/images/schools/uva.jpg",
    slug: "uva",
    majors: ["经济学", "法学", "医学", "心理学", "传播学", "计算机科学"]
  },
  {
    name: "莱顿大学",
    country: "荷兰",
    qsRanking: 141,
    logo: "/images/schools/leiden.jpg",
    slug: "leiden",
    majors: ["法学", "医学", "社会科学", "人文学科", "考古学", "语言学"]
  },

  // 西班牙 - 2所学校
  {
    name: "巴塞罗那大学",
    country: "西班牙",
    qsRanking: 165,
    logo: "/images/schools/ub.jpg",
    slug: "ub",
    majors: ["医学", "法学", "经济学", "教育学", "心理学", "艺术学"]
  },
  {
    name: "瓦伦西亚大学",
    country: "西班牙",
    qsRanking: 445,
    logo: "/images/schools/uv.jpg",
    slug: "uv",
    majors: ["经济学", "法学", "医学", "教育学", "心理学", "工程学"]
  }
];

// 全球知名大学数据库
export const schoolsData = {
  zh: [
    // 美国 - 33所学校
    { 
      id: 1, 
      name: '麻省理工学院 (MIT)',
      country: '美国',
      location: '马萨诸塞-波士顿',
      qsRank: 1,
      worldRank: 2,
      countryRank: 2,
      majors: ['电子工程', '计算机科学', '机械工程', '人工智能', '数据科学', '生物工程'],
      specialty: '科技创新与创业',
      keyAdvantage: '全球科技创新领导者，硅谷直通车'
    },
    { 
      id: 2, 
      name: '哈佛大学',
      country: '美国',
      location: '马萨诸塞-波士顿',
      qsRank: 4,
      worldRank: 1,
      countryRank: 3,
      majors: ['法学', '医学', '商学', '公共政策', '经济学', '心理学'],
      specialty: '商科与医学',
      keyAdvantage: '全球校友网络，政商界首选'
    },
    { 
      id: 3, 
      name: '斯坦福大学',
      country: '美国',
      location: '加利福尼亚-帕拉阿图',
      qsRank: 6,
      worldRank: 3,
      countryRank: 4,
      majors: ['计算机科学', '工程学', '商业管理', '医学', '人工智能', '数据科学'],
      specialty: '创新创业',
      keyAdvantage: '硅谷核心，创业孵化器'
    },
    { 
      id: 4, 
      name: '宾夕法尼亚大学',
      country: '美国',
      location: '宾夕法尼亚',
      qsRank: 11,
      worldRank: 14,
      countryRank: 10,
      majors: ['商学', '工程学', '医学', '法学', '计算机科学', '经济学'],
      specialty: '沃顿商学院',
      keyAdvantage: '全球顶级商学院，金融界翘楚'
    },
    { 
      id: 5, 
      name: '加州大学伯克利分校',
      country: '美国',
      location: '加利福尼亚',
      qsRank: 12,
      worldRank: 5,
      countryRank: 17,
      majors: ['计算机科学', '工程学', '商科', '法学', '公共政策', '新闻学'],
      specialty: '公立大学典范',
      keyAdvantage: '硅谷人才摇篮，创新氛围浓厚'
    },
    { 
      id: 6, 
      name: '康奈尔大学',
      country: '美国',
      location: '纽约-纽约市',
      qsRank: 16,
      worldRank: 19,
      countryRank: 11,
      majors: ['工程学', '商学', '农学', '兽医学', '酒店管理', '计算机科学'],
      specialty: '农业与工程',
      keyAdvantage: '常春藤盟校，农业科学领先'
    },
    { 
      id: 7, 
      name: '芝加哥大学',
      country: '美国',
      location: '伊利诺斯-芝加哥',
      qsRank: 21,
      worldRank: 25,
      countryRank: 11,
      majors: ['经济学', '商学', '法学', '医学', '社会科学', '物理学'],
      specialty: '芝加哥学派经济学',
      keyAdvantage: '经济学诺贝尔奖摇篮'
    },
    { 
      id: 8, 
      name: '普林斯顿大学',
      country: '美国',
      location: '新泽西-普林斯顿',
      qsRank: 22,
      worldRank: 18,
      countryRank: 1,
      majors: ['经济学', '计算机科学', '物理学', '数学', '工程学', '公共政策'],
      specialty: '理论研究',
      keyAdvantage: '学术研究顶尖，师生比例优异'
    },
    { 
      id: 9, 
      name: '耶鲁大学',
      country: '美国',
      location: '康涅狄格-纽黑文',
      qsRank: 23,
      worldRank: 10,
      countryRank: 5,
      majors: ['法学', '医学', '商学', '人文学科', '社会科学', '艺术学'],
      specialty: '人文社科',
      keyAdvantage: '常春藤联盟，政治精英摇篮'
    },
    { 
      id: 10, 
      name: '约翰霍普金斯大学',
      country: '美国',
      location: '马里兰',
      qsRank: 32,
      worldRank: 13,
      countryRank: 6,
      majors: ['医学', '公共卫生', '国际关系', '工程学', '护理学', '生物医学'],
      specialty: '医学与公共卫生',
      keyAdvantage: '全球顶级医学院，公共卫生领导者'
    },
    { 
      id: 11, 
      name: '哥伦比亚大学',
      country: '美国',
      location: '纽约-纽约市',
      qsRank: 34,
      worldRank: 9,
      countryRank: 13,
      majors: ['新闻学', '商学', '医学', '法学', '工程学', '国际关系'],
      specialty: '新闻传媒',
      keyAdvantage: '纽约核心位置，媒体资源丰富'
    },
    { 
      id: 12, 
      name: '加州大学洛杉矶分校 (UCLA)',
      country: '美国',
      location: '加利福尼亚-洛杉矶',
      qsRank: 42,
      worldRank: 11,
      countryRank: 15,
      majors: ['电影学', '医学', '商学', '工程学', '心理学', '计算机科学'],
      specialty: '影视娱乐',
      keyAdvantage: '好莱坞邻近，娱乐产业资源丰富'
    },
    { 
      id: 13, 
      name: '纽约大学 (NYU)',
      country: '美国',
      location: '纽约-纽约市',
      qsRank: 43,
      worldRank: 32,
      countryRank: 30,
      majors: ['商学', '艺术学', '法学', '医学', '工程学', '电影学'],
      specialty: '商学与艺术',
      keyAdvantage: '纽约中心，金融艺术双强'
    },
    { 
      id: 14, 
      name: '密歇根大学',
      country: '美国',
      location: '密歇根-安娜堡',
      qsRank: 44,
      worldRank: 19,
      countryRank: 21,
      majors: ['工程学', '商学', '医学', '法学', '公共政策', '心理学'],
      specialty: '公立常春藤',
      keyAdvantage: '公立大学典范，校友网络强大'
    },
    { 
      id: 15, 
      name: '美国西北大学',
      country: '美国',
      location: '伊利诺斯',
      qsRank: 50,
      worldRank: 24,
      countryRank: 6,
      majors: ['新闻学', '商学', '医学', '工程学', '音乐学', '戏剧学'],
      specialty: '新闻与商学',
      keyAdvantage: '凯洛格商学院，新闻学院知名'
    },
    { 
      id: 16, 
      name: '卡内基梅隆大学',
      country: '美国',
      location: '宾夕法尼亚-匹兹堡',
      qsRank: 58,
      worldRank: 134,
      countryRank: 21,
      majors: ['计算机科学', '工程学', '商学', '艺术学', '机器人学', '人工智能'],
      specialty: '计算机科学',
      keyAdvantage: '计算机科学顶尖，机器人学领先'
    },
    { 
      id: 17, 
      name: '杜克大学',
      country: '美国',
      location: '北卡罗来纳-杜罕',
      qsRank: 61,
      worldRank: 26,
      countryRank: 6,
      majors: ['医学', '商学', '法学', '工程学', '公共政策', '环境科学'],
      specialty: '医学与商学',
      keyAdvantage: '南方哈佛，篮球传统强'
    },
    { 
      id: 18, 
      name: '伊利诺伊大学香槟分校',
      country: '美国',
      location: '伊利诺斯-尼巴纳-香槟',
      qsRank: 69,
      worldRank: 100,
      countryRank: 33,
      majors: ['工程学', '计算机科学', '商学', '农学', '新闻学', '教育学'],
      specialty: '工程与计算机',
      keyAdvantage: '公立大学工程强校'
    },
    { 
      id: 19, 
      name: '华盛顿大学',
      country: '美国',
      location: '华盛顿-西雅图',
      qsRank: 76,
      worldRank: 30,
      countryRank: 46,
      majors: ['医学', '计算机科学', '工程学', '商学', '公共卫生', '环境科学'],
      specialty: '医学与工程',
      keyAdvantage: '西海岸名校，亚马逊微软人才输送地'
    },
    { 
      id: 20, 
      name: '布朗大学',
      country: '美国',
      location: '罗德岛-普罗维登斯',
      qsRank: 79,
      worldRank: 153,
      countryRank: 13,
      majors: ['计算机科学', '经济学', '工程学', '国际关系', '医学', '心理学'],
      specialty: '开放式课程',
      keyAdvantage: '常春藤盟校，课程自由度高'
    },
    { 
      id: 21, 
      name: '普渡大学西拉法叶分校',
      country: '美国',
      location: '印第安纳-西拉法叶',
      qsRank: 89,
      worldRank: 167,
      countryRank: 46,
      majors: ['工程学', '计算机科学', '航空航天', '农学', '商学', '兽医学'],
      specialty: '工程与航空',
      keyAdvantage: '工程学院声誉卓著，航空航天强'
    },
    { 
      id: 22, 
      name: '波士顿大学',
      country: '美国',
      location: '马萨诸塞-波士顿',
      qsRank: 108,
      worldRank: 73,
      countryRank: 41,
      majors: ['商学', '工程学', '医学', '传播学', '法学', '教育学'],
      specialty: '传播学与商学',
      keyAdvantage: '波士顿市中心，实习就业机会多'
    },
    { 
      id: 23, 
      name: '南加州大学 (USC)',
      country: '美国',
      location: '加利福尼亚-洛杉矶',
      qsRank: 125,
      worldRank: 79,
      countryRank: 27,
      majors: ['电影学', '商学', '工程学', '传播学', '医学', '音乐学'],
      specialty: '电影学院',
      keyAdvantage: '好莱坞人才摇篮，校友网络强大'
    },
    { 
      id: 24, 
      name: '莱斯大学',
      country: '美国',
      location: '德克萨斯-休斯敦',
      qsRank: 141,
      worldRank: 223,
      countryRank: 18,
      majors: ['工程学', '自然科学', '商学', '音乐学', '建筑学', '人文学科'],
      specialty: '工程与自然科学',
      keyAdvantage: '小而精的研究型大学'
    },
    { 
      id: 25, 
      name: '亚利桑那州立大学',
      country: '美国',
      location: '亚利桑那-坦普',
      qsRank: 200,
      worldRank: 179,
      countryRank: 121,
      majors: ['商学', '工程学', '新闻学', '法学', '教育学', '可持续发展'],
      specialty: '创新教育',
      keyAdvantage: '在线教育先驱，创新课程设计'
    },
    { 
      id: 26, 
      name: '明尼苏达大学双城分校',
      country: '美国',
      location: '明尼苏达-明尼阿波利斯',
      qsRank: 203,
      worldRank: 63,
      countryRank: 54,
      majors: ['工程学', '商学', '医学', '农学', '公共卫生', '兽医学'],
      specialty: '公共卫生与农学',
      keyAdvantage: '公共卫生学院全美领先'
    },
    { 
      id: 27, 
      name: '俄亥俄州立大学',
      country: '美国',
      location: '俄亥俄-哥伦布',
      qsRank: 208,
      worldRank: 61,
      countryRank: 41,
      majors: ['工程学', '商学', '医学', '农学', '教育学', '兽医学'],
      specialty: '农学与工程',
      keyAdvantage: '公立研究型大学，农学强'
    },
    { 
      id: 28, 
      name: '天普大学',
      country: '美国',
      location: '宾夕法尼亚-费城',
      qsRank: 690,
      worldRank: 335,
      countryRank: 98,
      majors: ['商学', '工程学', '传媒学', '法学', '医学', '教育学'],
      specialty: '传媒与商学',
      keyAdvantage: '费城市中心，传媒学院知名'
    },
    { 
      id: 29, 
      name: '美利坚大学',
      country: '美国',
      location: '哥伦比亚特区-华盛顿',
      qsRank: 720,
      worldRank: 784,
      countryRank: 91,
      majors: ['国际关系', '商学', '传播学', '法学', '公共政策', '教育学'],
      specialty: '国际关系',
      keyAdvantage: '华盛顿DC核心，政治资源丰富'
    },
    { 
      id: 30, 
      name: '布兰迪斯大学',
      country: '美国',
      location: '马萨诸塞',
      qsRank: 730,
      worldRank: 610,
      countryRank: 63,
      majors: ['商学', '社会科学', '生命科学', '计算机科学', '心理学', '经济学'],
      specialty: '社会正义研究',
      keyAdvantage: '小型研究型大学，师生比例优'
    },
    { 
      id: 31, 
      name: '奥本大学',
      country: '美国',
      location: '阿拉巴马',
      qsRank: 1000,
      worldRank: 620,
      countryRank: 105,
      majors: ['工程学', '商学', '农学', '兽医学', '建筑学', '教育学'],
      specialty: '农学与兽医学',
      keyAdvantage: '南部农业强校，兽医学院知名'
    },
    { 
      id: 32, 
      name: '肯特州立大学',
      country: '美国',
      location: '俄亥俄',
      qsRank: 1200,
      worldRank: 894,
      countryRank: 231,
      majors: ['商学', '教育学', '艺术学', '传媒学', '护理学', '工程学'],
      specialty: '教育学与艺术',
      keyAdvantage: '师范教育传统强，艺术学院知名'
    },
    { 
      id: 33, 
      name: '罗德岛大学',
      country: '美国',
      location: '罗德岛',
      qsRank: 1200,
      worldRank: 749,
      countryRank: 152,
      majors: ['工程学', '商学', '海洋学', '药学', '护理学', '教育学'],
      specialty: '海洋科学',
      keyAdvantage: '海洋科学研究领先，药学院优秀'
    },
    // 英国 - 27所学校
    { 
      id: 34, 
      name: '帝国理工学院',
      country: '英国',
      location: '英格兰-伦敦',
      qsRank: 2,
      worldRank: 12,
      countryRank: 5,
      majors: ['工程学', '计算机科学', '医学', '商科', '自然科学', '数学'],
      specialty: '理工科专精',
      keyAdvantage: '英国理工科第一，就业前景优'
    },
    { 
      id: 35, 
      name: '牛津大学',
      country: '英国',
      location: '英格兰-牛津',
      qsRank: 3,
      worldRank: 4,
      countryRank: 2,
      majors: ['人文社科', '医学', '法学', '经济学', '计算机科学', '工程学'],
      specialty: '传统学术研究',
      keyAdvantage: '英国最古老大学，学术声誉极高'
    },
    { 
      id: 36, 
      name: '剑桥大学',
      country: '英国',
      location: '英格兰-剑桥',
      qsRank: 5,
      worldRank: 6,
      countryRank: 1,
      majors: ['自然科学', '经济学', '工程学', '医学', '计算机科学', '数学'],
      specialty: '理工科研究',
      keyAdvantage: '诺贝尔奖得主摇篮'
    },
    { 
      id: 37, 
      name: '伦敦大学学院 (UCL)',
      country: '英国',
      location: '英格兰-伦敦',
      qsRank: 9,
      worldRank: 7,
      countryRank: 9,
      majors: ['建筑学', '工程学', '医学', '法学', '经济学', '心理学'],
      specialty: '多元化学科',
      keyAdvantage: '伦敦中心，国际化程度高'
    },
    { 
      id: 38, 
      name: '爱丁堡大学',
      country: '英国',
      location: '苏格兰-爱丁堡',
      qsRank: 27,
      worldRank: 38,
      countryRank: 15,
      majors: ['医学', '工程学', '商学', '法学', '艺术学', '计算机科学'],
      specialty: '医学与工程',
      keyAdvantage: '苏格兰首府，历史悠久'
    },
    { 
      id: 39, 
      name: '曼彻斯特大学',
      country: '英国',
      location: '英格兰-曼彻斯特',
      qsRank: 34,
      worldRank: 67,
      countryRank: 22,
      majors: ['工程学', '商学', '医学', '计算机科学', '材料科学', '化学'],
      specialty: '工程与材料科学',
      keyAdvantage: '工业革命发源地，工程传统强'
    },
    { 
      id: 40, 
      name: '伦敦国王学院 (KCL)',
      country: '英国',
      location: '英格兰-伦敦',
      qsRank: 40,
      worldRank: 36,
      countryRank: 24,
      majors: ['医学', '法学', '国际关系', '商学', '工程学', '心理学'],
      specialty: '医学与法学',
      keyAdvantage: '伦敦核心，医学院知名'
    },
    { 
      id: 41, 
      name: '伦敦政治经济学院 (LSE)',
      country: '英国',
      location: '英格兰-伦敦',
      qsRank: 50,
      worldRank: 239,
      countryRank: 3,
      majors: ['经济学', '政治学', '社会学', '法学', '商学', '国际关系'],
      specialty: '社会科学',
      keyAdvantage: '社会科学全球领先'
    },
    { 
      id: 42, 
      name: '布里斯托大学',
      country: '英国',
      location: '英格兰-布里斯托尔',
      qsRank: 54,
      worldRank: 96,
      countryRank: 16,
      majors: ['工程学', '医学', '法学', '经济学', '计算机科学', '地球科学'],
      specialty: '工程与地球科学',
      keyAdvantage: '航空工程强，地理位置优越'
    },
    { 
      id: 43, 
      name: '华威大学',
      country: '英国',
      location: '英格兰-考文垂',
      qsRank: 69,
      worldRank: 172,
      countryRank: 10,
      majors: ['商学', '经济学', '工程学', '计算机科学', '数学', '统计学'],
      specialty: '商学与数学',
      keyAdvantage: '商学院排名顶尖'
    },
    // 继续添加剩余英国学校...
    
    // 新加坡 - 2所学校
    { 
      id: 61, 
      name: '新加坡国立大学 (NUS)',
      country: '新加坡',
      location: '新加坡',
      qsRank: 8,
      worldRank: 22,
      countryRank: 1,
      majors: ['工程学', '计算机科学', '商学', '医学', '法学', '建筑学'],
      specialty: '亚洲领先',
      keyAdvantage: '亚洲金融中心，就业率高'
    },
    { 
      id: 62, 
      name: '南洋理工大学 (NTU)',
      country: '新加坡',
      location: '新加坡',
      qsRank: 15,
      worldRank: 27,
      countryRank: 2,
      majors: ['工程学', '商学', '传播学', '教育学', '计算机科学', '材料科学'],
      specialty: '工程与传媒',
      keyAdvantage: '年轻活力，科研实力强'
    },
    
    // 日本 - 3所学校
    { 
      id: 63, 
      name: '东京大学',
      country: '日本',
      location: '东京',
      qsRank: 32,
      worldRank: 84,
      countryRank: 2,
      majors: ['自然科学', '工程学', '医学', '经济学', '计算机科学', '农学'],
      specialty: '日本最高学府',
      keyAdvantage: '日本学术顶峰，政商界影响力大'
    },
    { 
      id: 64, 
      name: '东京工业大学',
      country: '日本',
      location: '东京',
      qsRank: 84,
      worldRank: 445,
      countryRank: 4,
      majors: ['工程学', '计算机科学', '材料科学', '化学', '物理学', '数学'],
      specialty: '理工科专精',
      keyAdvantage: '日本理工科顶尖，科研实力强'
    },
    { 
      id: 65, 
      name: '大阪大学',
      country: '日本',
      location: '大阪',
      qsRank: 86,
      worldRank: 315,
      countryRank: 3,
      majors: ['医学', '工程学', '经济学', '法学', '理学', '文学'],
      specialty: '医学与工程',
      keyAdvantage: '关西地区名校，医学院知名'
    },
    
    // 加拿大 - 5所学校
    { 
      id: 66, 
      name: '多伦多大学',
      country: '加拿大',
      location: '多伦多',
      qsRank: 25,
      worldRank: 17,
      countryRank: 1,
      majors: ['医学', '计算机科学', '商学', '工程学', '法学', '教育学'],
      specialty: '综合性研究',
      keyAdvantage: '加拿大顶尖，移民友好政策'
    },
    { 
      id: 67, 
      name: '麦吉尔大学',
      country: '加拿大',
      location: '蒙特利尔',
      qsRank: 29,
      worldRank: 56,
      countryRank: 3,
      majors: ['医学', '工程学', '商学', '法学', '音乐学', '农学'],
      specialty: '医学研究',
      keyAdvantage: '加拿大哈佛，医学院顶尖'
    },
    { 
      id: 68, 
      name: '英属哥伦比亚大学 (UBC)',
      country: '加拿大',
      location: '温哥华',
      qsRank: 38,
      worldRank: 39,
      countryRank: 2,
      majors: ['医学', '工程学', '商学', '林学', '计算机科学', '教育学'],
      specialty: '自然资源',
      keyAdvantage: '温哥华美丽校园，亚洲门户'
    },
    { 
      id: 69, 
      name: '圣保罗大学',
      country: '加拿大',
      location: '渥太华',
      qsRank: 92,
      worldRank: 127,
      countryRank: 4,
      majors: ['医学', '工程学', '法学', '商学', '社会科学', '教育学'],
      specialty: '双语教育',
      keyAdvantage: '首都大学，政府资源丰富'
    },
    { 
      id: 70, 
      name: '阿尔伯塔大学',
      country: '加拿大',
      location: '埃德蒙顿',
      qsRank: 96,
      worldRank: 150,
      countryRank: 4,
      majors: ['工程学', '医学', '商学', '农学', '法学', '教育学'],
      specialty: '石油工程',
      keyAdvantage: '石油省份，工程研究领先'
    },

    // 澳大利亚 - 5所学校
    { 
      id: 71, 
      name: '墨尔本大学',
      country: '澳大利亚',
      location: '维多利亚-墨尔本',
      qsRank: 13,
      worldRank: 27,
      countryRank: 1,
      majors: ['法学', '医学', '商学', '工程学', '计算机科学', '教育学'],
      specialty: '澳洲八大联盟',
      keyAdvantage: '澳洲学术声誉最高'
    },
    { 
      id: 72, 
      name: '悉尼大学',
      country: '澳大利亚',
      location: '新南威尔士-悉尼',
      qsRank: 18,
      worldRank: 29,
      countryRank: 3,
      majors: ['商科', '工程学', '医学', '法学', '建筑学', '媒体传播'],
      specialty: '历史悠久',
      keyAdvantage: '澳洲第一所大学，就业机会多'
    },
    { 
      id: 73, 
      name: '新南威尔士大学',
      country: '澳大利亚',
      location: '新南威尔士-悉尼',
      qsRank: 19,
      worldRank: 36,
      countryRank: 2,
      majors: ['工程学', '商学', '医学', '法学', '艺术学', '建筑学'],
      specialty: '工程技术',
      keyAdvantage: '工程学院澳洲顶尖'
    },
    { 
      id: 74, 
      name: '澳大利亚国立大学',
      country: '澳大利亚',
      location: '堪培拉',
      qsRank: 30,
      worldRank: 85,
      countryRank: 4,
      majors: ['政治学', '国际关系', '经济学', '法学', '工程学', '计算机科学'],
      specialty: '政治与国际关系',
      keyAdvantage: '首都大学，政治资源丰富'
    },
    { 
      id: 75, 
      name: '莫纳什大学',
      country: '澳大利亚',
      location: '维多利亚-墨尔本',
      qsRank: 37,
      worldRank: 35,
      countryRank: 5,
      majors: ['医学', '工程学', '商学', '法学', '教育学', '药学'],
      specialty: '医学与工程',
      keyAdvantage: '澳洲规模最大，国际化程度高'
    },

    // 新西兰 - 2所学校
    { 
      id: 76, 
      name: '奥克兰大学',
      country: '新西兰',
      location: '奥克兰',
      qsRank: 65,
      worldRank: 132,
      countryRank: 1,
      majors: ['工程学', '医学', '商学', '法学', '教育学', '艺术学'],
      specialty: '新西兰顶尖',
      keyAdvantage: '新西兰最大城市，就业机会多'
    },
    { 
      id: 77, 
      name: '林肯大学 (新西兰)',
      country: '新西兰',
      location: '坎特伯雷',
      qsRank: 368,
      worldRank: 1137,
      countryRank: 7,
      majors: ['农学', '环境科学', '商学', '工程学', '旅游管理', '景观建筑'],
      specialty: '农业与环境',
      keyAdvantage: '农业科学领先，环境优美'
    },

    // 香港 - 6所学校
    { 
      id: 78, 
      name: '香港大学 (HKU)',
      country: '香港',
      location: '香港-中西区',
      qsRank: 17,
      worldRank: 44,
      countryRank: 1,
      majors: ['医学', '法学', '商学', '工程学', '社会科学', '建筑学'],
      specialty: '东西文化融合',
      keyAdvantage: '亚洲国际金融中心，就业前景广阔'
    },
    { 
      id: 79, 
      name: '香港中文大学 (CUHK)',
      country: '香港',
      location: '香港-沙田区',
      qsRank: 36,
      worldRank: 42,
      countryRank: 2,
      majors: ['商学', '医学', '工程学', '社会科学', '教育学', '新闻学'],
      specialty: '中英双语教育',
      keyAdvantage: '双语教学优势，传统与现代结合'
    },
    { 
      id: 80, 
      name: '香港科技大学 (HKUST)',
      country: '香港',
      location: '香港-西贡区',
      qsRank: 47,
      worldRank: 105,
      countryRank: 3,
      majors: ['工程学', '商学', '理学', '计算机科学', '环境科学', '数学'],
      specialty: '科技创新',
      keyAdvantage: '年轻活力，科技研发强'
    },
    { 
      id: 81, 
      name: '香港理工大学',
      country: '香港',
      location: '香港-九龙城区',
      qsRank: 57,
      worldRank: 67,
      countryRank: 4,
      majors: ['工程学', '商学', '设计学', '酒店管理', '健康科学', '建筑学'],
      specialty: '应用科学',
      keyAdvantage: '实用导向，就业率高'
    },
    { 
      id: 82, 
      name: '香港城市大学',
      country: '香港',
      location: '香港-九龙城区',
      qsRank: 62,
      worldRank: 79,
      countryRank: 5,
      majors: ['工程学', '商学', '创意媒体', '法学', '兽医学', '计算机科学'],
      specialty: '创意媒体',
      keyAdvantage: '创新教学，国际化程度高'
    },
    { 
      id: 83, 
      name: '香港浸会大学',
      country: '香港',
      location: '香港-九龙城区',
      qsRank: 252,
      worldRank: 471,
      countryRank: 6,
      majors: ['传理学', '商学', '中医药学', '艺术学', '社会科学', '理学'],
      specialty: '传媒与中医',
      keyAdvantage: '传媒专业知名，中医药特色'
    },

    // 澳门 - 3所学校
    { 
      id: 84, 
      name: '澳门大学',
      country: '澳门',
      location: '澳门-大堂区',
      qsRank: 245,
      worldRank: 262,
      countryRank: 1,
      majors: ['商学', '工程学', '法学', '教育学', '健康科学', '社会科学'],
      specialty: '多元文化融合',
      keyAdvantage: '东西文化交汇，语言优势明显'
    },
    { 
      id: 85, 
      name: '澳门科技大学',
      country: '澳门',
      location: '澳门-大堂区',
      qsRank: 464,
      worldRank: 814,
      countryRank: 2,
      majors: ['商学', '工程学', '计算机科学', '法学', '中医药学', '设计学'],
      specialty: '科技与中医',
      keyAdvantage: '科技创新，中医药特色'
    },
    { 
      id: 86, 
      name: '澳门城市大学',
      country: '澳门',
      location: '澳门-大堂区',
      qsRank: 999,
      worldRank: 999,
      countryRank: 3,
      majors: ['商学', '教育学', '法学', '艺术学', '设计学', '计算机科学'],
      specialty: '教育与艺术',
      keyAdvantage: '小班教学，个性化培养'
    },

    // 荷兰 - 2所学校
    { 
      id: 87, 
      name: '阿姆斯特丹大学',
      country: '荷兰',
      location: '阿姆斯特丹',
      qsRank: 55,
      worldRank: 33,
      countryRank: 1,
      majors: ['经济学', '法学', '医学', '心理学', '传播学', '计算机科学'],
      specialty: '社会科学',
      keyAdvantage: '欧洲金融中心，国际化程度极高'
    },
    { 
      id: 88, 
      name: '莱顿大学',
      country: '荷兰',
      location: '莱顿',
      qsRank: 141,
      worldRank: 56,
      countryRank: 4,
      majors: ['法学', '医学', '社会科学', '人文学科', '考古学', '语言学'],
      specialty: '人文社会科学',
      keyAdvantage: '荷兰最古老大学，学术传统深厚'
    },

    // 西班牙 - 2所学校
    { 
      id: 89, 
      name: '巴塞罗那大学',
      country: '西班牙',
      location: '巴塞罗那',
      qsRank: 165,
      worldRank: 79,
      countryRank: 1,
      majors: ['医学', '法学', '经济学', '教育学', '心理学', '艺术学'],
      specialty: '综合性研究',
      keyAdvantage: '西班牙顶尖，地中海文化中心'
    },
    { 
      id: 90, 
      name: '瓦伦西亚大学',
      country: '西班牙',
      location: '巴伦西亚',
      qsRank: 445,
      worldRank: 251,
      countryRank: 6,
      majors: ['经济学', '法学', '医学', '教育学', '心理学', '工程学'],
      specialty: '地中海研究',
      keyAdvantage: '历史悠久，地中海沿岸重要城市'
    }
  ],
  en: [
    // United States - 33 schools
    { id: 1, name: 'Massachusetts Institute of Technology (MIT)', country: 'United States', location: 'Massachusetts-Boston', qsRank: 1, worldRank: 2, countryRank: 2, majors: ['Electrical Engineering', 'Computer Science', 'Mechanical Engineering', 'Artificial Intelligence', 'Data Science', 'Bioengineering'], specialty: 'Technology Innovation & Entrepreneurship', keyAdvantage: 'Global technology innovation leader, Silicon Valley gateway' },
    { id: 2, name: 'Harvard University', country: 'United States', location: 'Massachusetts-Boston', qsRank: 4, worldRank: 1, countryRank: 3, majors: ['Law', 'Medicine', 'Business', 'Public Policy', 'Economics', 'Psychology'], specialty: 'Business & Medicine', keyAdvantage: 'Global alumni network, preferred by political and business leaders' },
    { id: 3, name: 'Stanford University', country: 'United States', location: 'California-Palo Alto', qsRank: 6, worldRank: 3, countryRank: 4, majors: ['Computer Science', 'Engineering', 'Business Management', 'Medicine', 'Artificial Intelligence', 'Data Science'], specialty: 'Innovation & Entrepreneurship', keyAdvantage: 'Silicon Valley core, startup incubator' },
    { id: 4, name: 'University of Pennsylvania', country: 'United States', location: 'Pennsylvania', qsRank: 11, worldRank: 14, countryRank: 10, majors: ['Business', 'Engineering', 'Medicine', 'Law', 'Computer Science', 'Economics'], specialty: 'Wharton Business School', keyAdvantage: 'World-class business school, finance industry leader' },
    { id: 5, name: 'University of California, Berkeley', country: 'United States', location: 'California', qsRank: 12, worldRank: 5, countryRank: 17, majors: ['Computer Science', 'Engineering', 'Business', 'Law', 'Public Policy', 'Journalism'], specialty: 'Public University Excellence', keyAdvantage: 'Silicon Valley talent hub, innovative atmosphere' },
    { id: 6, name: 'Cornell University', country: 'United States', location: 'New York-New York City', qsRank: 16, worldRank: 19, countryRank: 11, majors: ['Engineering', 'Business', 'Agriculture', 'Veterinary Medicine', 'Hospitality Management', 'Computer Science'], specialty: 'Agriculture & Engineering', keyAdvantage: 'Ivy League school, agricultural science leader' },
    { id: 7, name: 'University of Chicago', country: 'United States', location: 'Illinois-Chicago', qsRank: 21, worldRank: 25, countryRank: 11, majors: ['Economics', 'Business', 'Law', 'Medicine', 'Social Sciences', 'Physics'], specialty: 'Chicago School Economics', keyAdvantage: 'Nobel Prize economics hub' },
    { id: 8, name: 'Princeton University', country: 'United States', location: 'New Jersey-Princeton', qsRank: 22, worldRank: 18, countryRank: 1, majors: ['Economics', 'Computer Science', 'Physics', 'Mathematics', 'Engineering', 'Public Policy'], specialty: 'Theoretical Research', keyAdvantage: 'Top academic research, excellent student-faculty ratio' },
    { id: 9, name: 'Yale University', country: 'United States', location: 'Connecticut-New Haven', qsRank: 23, worldRank: 10, countryRank: 5, majors: ['Law', 'Medicine', 'Business', 'Humanities', 'Social Sciences', 'Arts'], specialty: 'Humanities & Social Sciences', keyAdvantage: 'Ivy League, political elite training ground' },
    { id: 10, name: 'Johns Hopkins University', country: 'United States', location: 'Maryland', qsRank: 32, worldRank: 13, countryRank: 6, majors: ['Medicine', 'Public Health', 'International Relations', 'Engineering', 'Nursing', 'Biomedical Sciences'], specialty: 'Medicine & Public Health', keyAdvantage: 'World-class medical school, public health leader' },
    { id: 11, name: 'Columbia University', country: 'United States', location: 'New York-New York City', qsRank: 34, worldRank: 9, countryRank: 13, majors: ['Journalism', 'Business', 'Medicine', 'Law', 'Engineering', 'International Relations'], specialty: 'Journalism & Media', keyAdvantage: 'NYC location, rich media resources' },
    { id: 12, name: 'University of California, Los Angeles (UCLA)', country: 'United States', location: 'California-Los Angeles', qsRank: 42, worldRank: 11, countryRank: 15, majors: ['Film Studies', 'Medicine', 'Business', 'Engineering', 'Psychology', 'Computer Science'], specialty: 'Film & Entertainment', keyAdvantage: 'Hollywood proximity, entertainment industry resources' },
    { id: 13, name: 'New York University (NYU)', country: 'United States', location: 'New York-New York City', qsRank: 43, worldRank: 32, countryRank: 30, majors: ['Business', 'Arts', 'Law', 'Medicine', 'Engineering', 'Film Studies'], specialty: 'Business & Arts', keyAdvantage: 'NYC center, finance and arts excellence' },
    { id: 14, name: 'University of Michigan', country: 'United States', location: 'Michigan-Ann Arbor', qsRank: 44, worldRank: 19, countryRank: 21, majors: ['Engineering', 'Business', 'Medicine', 'Law', 'Public Policy', 'Psychology'], specialty: 'Public Ivy', keyAdvantage: 'Public university excellence, strong alumni network' },
    { id: 15, name: 'Northwestern University', country: 'United States', location: 'Illinois', qsRank: 50, worldRank: 24, countryRank: 6, majors: ['Journalism', 'Business', 'Medicine', 'Engineering', 'Music', 'Theater'], specialty: 'Journalism & Business', keyAdvantage: 'Kellogg Business School, renowned journalism school' },
    { id: 16, name: 'Carnegie Mellon University', country: 'United States', location: 'Pennsylvania-Pittsburgh', qsRank: 58, worldRank: 134, countryRank: 21, majors: ['Computer Science', 'Engineering', 'Business', 'Arts', 'Robotics', 'Artificial Intelligence'], specialty: 'Computer Science', keyAdvantage: 'Top computer science, robotics leader' },
    { id: 17, name: 'Duke University', country: 'United States', location: 'North Carolina-Durham', qsRank: 61, worldRank: 26, countryRank: 6, majors: ['Medicine', 'Business', 'Law', 'Engineering', 'Public Policy', 'Environmental Science'], specialty: 'Medicine & Business', keyAdvantage: 'Harvard of the South, strong basketball tradition' },
    { id: 18, name: 'University of Illinois at Urbana-Champaign', country: 'United States', location: 'Illinois-Urbana-Champaign', qsRank: 69, worldRank: 100, countryRank: 33, majors: ['Engineering', 'Computer Science', 'Business', 'Agriculture', 'Journalism', 'Education'], specialty: 'Engineering & Computer Science', keyAdvantage: 'Public university engineering powerhouse' },
    { id: 19, name: 'University of Washington', country: 'United States', location: 'Washington-Seattle', qsRank: 76, worldRank: 30, countryRank: 46, majors: ['Medicine', 'Computer Science', 'Engineering', 'Business', 'Public Health', 'Environmental Science'], specialty: 'Medicine & Engineering', keyAdvantage: 'West Coast prestige, Amazon/Microsoft talent pipeline' },
    { id: 20, name: 'Brown University', country: 'United States', location: 'Rhode Island-Providence', qsRank: 79, worldRank: 153, countryRank: 13, majors: ['Computer Science', 'Economics', 'Engineering', 'International Relations', 'Medicine', 'Psychology'], specialty: 'Open Curriculum', keyAdvantage: 'Ivy League, high curriculum flexibility' },
    { id: 21, name: 'Purdue University West Lafayette', country: 'United States', location: 'Indiana-West Lafayette', qsRank: 89, worldRank: 167, countryRank: 46, majors: ['Engineering', 'Computer Science', 'Aerospace', 'Agriculture', 'Business', 'Veterinary Medicine'], specialty: 'Engineering & Aerospace', keyAdvantage: 'Engineering school reputation, aerospace strength' },
    { id: 22, name: 'Boston University', country: 'United States', location: 'Massachusetts-Boston', qsRank: 108, worldRank: 73, countryRank: 41, majors: ['Business', 'Engineering', 'Medicine', 'Communications', 'Law', 'Education'], specialty: 'Communications & Business', keyAdvantage: 'Boston city center, many internship opportunities' },
    { id: 23, name: 'University of Southern California (USC)', country: 'United States', location: 'California-Los Angeles', qsRank: 125, worldRank: 79, countryRank: 27, majors: ['Film Studies', 'Business', 'Engineering', 'Communications', 'Medicine', 'Music'], specialty: 'Film School', keyAdvantage: 'Hollywood talent hub, strong alumni network' },
    { id: 24, name: 'Rice University', country: 'United States', location: 'Texas-Houston', qsRank: 141, worldRank: 223, countryRank: 18, majors: ['Engineering', 'Natural Sciences', 'Business', 'Music', 'Architecture', 'Humanities'], specialty: 'Engineering & Natural Sciences', keyAdvantage: 'Small elite research university' },
    { id: 25, name: 'Arizona State University', country: 'United States', location: 'Arizona-Tempe', qsRank: 200, worldRank: 179, countryRank: 121, majors: ['Business', 'Engineering', 'Journalism', 'Law', 'Education', 'Sustainability'], specialty: 'Innovation in Education', keyAdvantage: 'Online education pioneer, innovative curriculum design' },
    { id: 26, name: 'University of Minnesota Twin Cities', country: 'United States', location: 'Minnesota-Minneapolis', qsRank: 203, worldRank: 63, countryRank: 54, majors: ['Engineering', 'Business', 'Medicine', 'Agriculture', 'Public Health', 'Veterinary Medicine'], specialty: 'Public Health & Agriculture', keyAdvantage: 'Leading public health school in US' },
    { id: 27, name: 'Ohio State University', country: 'United States', location: 'Ohio-Columbus', qsRank: 208, worldRank: 61, countryRank: 41, majors: ['Engineering', 'Business', 'Medicine', 'Agriculture', 'Education', 'Veterinary Medicine'], specialty: 'Agriculture & Engineering', keyAdvantage: 'Public research university, agricultural strength' },
    { id: 28, name: 'Temple University', country: 'United States', location: 'Pennsylvania-Philadelphia', qsRank: 690, worldRank: 335, countryRank: 98, majors: ['Business', 'Engineering', 'Communications', 'Law', 'Medicine', 'Education'], specialty: 'Communications & Business', keyAdvantage: 'Philadelphia city center, renowned communications school' },
    { id: 29, name: 'American University', country: 'United States', location: 'Washington DC', qsRank: 720, worldRank: 784, countryRank: 91, majors: ['International Relations', 'Business', 'Communications', 'Law', 'Public Policy', 'Education'], specialty: 'International Relations', keyAdvantage: 'Washington DC core, rich political resources' },
    { id: 30, name: 'Brandeis University', country: 'United States', location: 'Massachusetts', qsRank: 730, worldRank: 610, countryRank: 63, majors: ['Business', 'Social Sciences', 'Life Sciences', 'Computer Science', 'Psychology', 'Economics'], specialty: 'Social Justice Research', keyAdvantage: 'Small research university, excellent student-faculty ratio' },
    { id: 31, name: 'Auburn University', country: 'United States', location: 'Alabama', qsRank: 1000, worldRank: 620, countryRank: 105, majors: ['Engineering', 'Business', 'Agriculture', 'Veterinary Medicine', 'Architecture', 'Education'], specialty: 'Agriculture & Veterinary Medicine', keyAdvantage: 'Southern agricultural powerhouse, renowned veterinary school' },
    { id: 32, name: 'Kent State University', country: 'United States', location: 'Ohio', qsRank: 1200, worldRank: 894, countryRank: 231, majors: ['Business', 'Education', 'Arts', 'Communications', 'Nursing', 'Engineering'], specialty: 'Education & Arts', keyAdvantage: 'Strong teacher education tradition, renowned arts school' },
    { id: 33, name: 'University of Rhode Island', country: 'United States', location: 'Rhode Island', qsRank: 1200, worldRank: 749, countryRank: 152, majors: ['Engineering', 'Business', 'Oceanography', 'Pharmacy', 'Nursing', 'Education'], specialty: 'Ocean Sciences', keyAdvantage: 'Leading oceanographic research, excellent pharmacy school' },

    // United Kingdom - 27 schools
    { id: 34, name: 'Imperial College London', country: 'United Kingdom', location: 'England-London', qsRank: 2, worldRank: 12, countryRank: 5, majors: ['Engineering', 'Computer Science', 'Medicine', 'Business', 'Natural Sciences', 'Mathematics'], specialty: 'STEM Excellence', keyAdvantage: 'UK STEM leader, excellent employment prospects' },
    { id: 35, name: 'University of Oxford', country: 'United Kingdom', location: 'England-Oxford', qsRank: 3, worldRank: 4, countryRank: 2, majors: ['Humanities & Social Sciences', 'Medicine', 'Law', 'Economics', 'Computer Science', 'Engineering'], specialty: 'Traditional Academic Research', keyAdvantage: 'Oldest UK university, extremely high academic reputation' },
    { id: 36, name: 'University of Cambridge', country: 'United Kingdom', location: 'England-Cambridge', qsRank: 5, worldRank: 6, countryRank: 1, majors: ['Natural Sciences', 'Economics', 'Engineering', 'Medicine', 'Computer Science', 'Mathematics'], specialty: 'STEM Research', keyAdvantage: 'Nobel Prize winner hub' },
    { id: 37, name: 'University College London (UCL)', country: 'United Kingdom', location: 'England-London', qsRank: 9, worldRank: 7, countryRank: 9, majors: ['Architecture', 'Engineering', 'Medicine', 'Law', 'Economics', 'Psychology'], specialty: 'Multidisciplinary', keyAdvantage: 'London center, high internationalization' },
    { id: 38, name: 'University of Edinburgh', country: 'United Kingdom', location: 'Scotland-Edinburgh', qsRank: 27, worldRank: 38, countryRank: 15, majors: ['Medicine', 'Engineering', 'Business', 'Law', 'Arts', 'Computer Science'], specialty: 'Medicine & Engineering', keyAdvantage: 'Scottish capital, historic prestige' },
    { id: 39, name: 'University of Manchester', country: 'United Kingdom', location: 'England-Manchester', qsRank: 34, worldRank: 67, countryRank: 22, majors: ['Engineering', 'Business', 'Medicine', 'Computer Science', 'Materials Science', 'Chemistry'], specialty: 'Engineering & Materials Science', keyAdvantage: 'Industrial Revolution birthplace, strong engineering tradition' },
    { id: 40, name: "King's College London (KCL)", country: 'United Kingdom', location: 'England-London', qsRank: 40, worldRank: 36, countryRank: 24, majors: ['Medicine', 'Law', 'International Relations', 'Business', 'Engineering', 'Psychology'], specialty: 'Medicine & Law', keyAdvantage: 'London core, renowned medical school' },
    { id: 41, name: 'London School of Economics (LSE)', country: 'United Kingdom', location: 'England-London', qsRank: 50, worldRank: 239, countryRank: 3, majors: ['Economics', 'Politics', 'Sociology', 'Law', 'Business', 'International Relations'], specialty: 'Social Sciences', keyAdvantage: 'Global social sciences leader' },
    { id: 42, name: 'University of Bristol', country: 'United Kingdom', location: 'England-Bristol', qsRank: 54, worldRank: 96, countryRank: 16, majors: ['Engineering', 'Medicine', 'Law', 'Economics', 'Computer Science', 'Earth Sciences'], specialty: 'Engineering & Earth Sciences', keyAdvantage: 'Strong aerospace engineering, excellent location' },
    { id: 43, name: 'University of Warwick', country: 'United Kingdom', location: 'England-Coventry', qsRank: 69, worldRank: 172, countryRank: 10, majors: ['Business', 'Economics', 'Engineering', 'Computer Science', 'Mathematics', 'Statistics'], specialty: 'Business & Mathematics', keyAdvantage: 'Top-ranked business school' },
    { id: 44, name: 'University of Glasgow', country: 'United Kingdom', location: 'Scotland-Glasgow', qsRank: 78, worldRank: 104, countryRank: 14, majors: ['Medicine', 'Engineering', 'Business', 'Law', 'Veterinary Medicine', 'Psychology'], specialty: 'Medicine & Veterinary Medicine', keyAdvantage: 'Historic Scottish university, medical excellence' },
    { id: 45, name: 'University of Southampton', country: 'United Kingdom', location: 'England-Southampton', qsRank: 80, worldRank: 120, countryRank: 18, majors: ['Engineering', 'Computer Science', 'Oceanography', 'Medicine', 'Business', 'Law'], specialty: 'Engineering & Oceanography', keyAdvantage: 'Marine engineering leader, coastal research' },
    { id: 46, name: 'University of Leeds', country: 'United Kingdom', location: 'England-Leeds', qsRank: 82, worldRank: 93, countryRank: 20, majors: ['Engineering', 'Business', 'Medicine', 'Law', 'Arts', 'Communications'], specialty: 'Engineering & Business', keyAdvantage: 'Major northern university, industry connections' },
    { id: 47, name: 'University of Birmingham', country: 'United Kingdom', location: 'England-Birmingham', qsRank: 94, worldRank: 112, countryRank: 19, majors: ['Medicine', 'Engineering', 'Business', 'Law', 'Education', 'Psychology'], specialty: 'Medicine & Engineering', keyAdvantage: 'Red brick university, medical school heritage' },
    { id: 48, name: 'University of Sheffield', country: 'United Kingdom', location: 'England-Sheffield', qsRank: 105, worldRank: 146, countryRank: 24, majors: ['Engineering', 'Medicine', 'Business', 'Architecture', 'Journalism', 'Computer Science'], specialty: 'Engineering & Materials', keyAdvantage: 'Engineering excellence, materials science leader' },
    { id: 49, name: 'University of Nottingham', country: 'United Kingdom', location: 'England-Nottingham', qsRank: 108, worldRank: 116, countryRank: 25, majors: ['Engineering', 'Business', 'Medicine', 'Law', 'Agriculture', 'Veterinary Medicine'], specialty: 'Engineering & Agriculture', keyAdvantage: 'Beautiful campus, veterinary school' },
    { id: 50, name: 'Queen Mary University of London', country: 'United Kingdom', location: 'England-London', qsRank: 120, worldRank: 130, countryRank: 29, majors: ['Medicine', 'Engineering', 'Law', 'Business', 'Computer Science', 'Economics'], specialty: 'Medicine & Law', keyAdvantage: 'London location, medical school strength' },
    { id: 51, name: 'Newcastle University (UK)', country: 'United Kingdom', location: 'England-Newcastle', qsRank: 129, worldRank: 171, countryRank: 32, majors: ['Medicine', 'Engineering', 'Business', 'Law', 'Architecture', 'Agriculture'], specialty: 'Medicine & Engineering', keyAdvantage: 'Northern powerhouse, medical heritage' },
    { id: 52, name: 'Lancaster University', country: 'United Kingdom', location: 'England-Lancaster', qsRank: 141, worldRank: 162, countryRank: 35, majors: ['Business', 'Engineering', 'Computer Science', 'Environmental Science', 'Psychology', 'Arts'], specialty: 'Business & Environment', keyAdvantage: 'Campus university, environmental research' },
    { id: 53, name: 'University of Liverpool', country: 'United Kingdom', location: 'England-Liverpool', qsRank: 165, worldRank: 176, countryRank: 38, majors: ['Medicine', 'Engineering', 'Business', 'Law', 'Veterinary Medicine', 'Oceanography'], specialty: 'Medicine & Veterinary Medicine', keyAdvantage: 'Maritime city, veterinary excellence' },
    { id: 54, name: 'University of York (UK)', country: 'United Kingdom', location: 'England-York', qsRank: 184, worldRank: 208, countryRank: 42, majors: ['Computer Science', 'Economics', 'Psychology', 'Archaeology', 'Linguistics', 'Music'], specialty: 'Computer Science & Humanities', keyAdvantage: 'Historic city, interdisciplinary strength' },
    { id: 55, name: 'Cardiff University', country: 'United Kingdom', location: 'Wales-Cardiff', qsRank: 186, worldRank: 179, countryRank: 43, majors: ['Engineering', 'Business', 'Medicine', 'Law', 'Journalism', 'Architecture'], specialty: 'Engineering & Journalism', keyAdvantage: 'Welsh capital, journalism school' },
    { id: 56, name: 'University of Leicester', country: 'United Kingdom', location: 'England-Leicester', qsRank: 285, worldRank: 351, countryRank: 56, majors: ['Medicine', 'Law', 'Business', 'Engineering', 'Archaeology', 'Museum Studies'], specialty: 'Medicine & Archaeology', keyAdvantage: 'Medical research, archaeological excellence' },
    { id: 57, name: 'City, University of London', country: 'United Kingdom', location: 'England-London', qsRank: 352, worldRank: 451, countryRank: 68, majors: ['Business', 'Engineering', 'Law', 'Journalism', 'Computer Science', 'Music'], specialty: 'Business & Journalism', keyAdvantage: 'London finance district, business connections' },
    { id: 58, name: 'Oxford Brookes University', country: 'United Kingdom', location: 'England-Oxford', qsRank: 416, worldRank: 601, countryRank: 78, majors: ['Business', 'Engineering', 'Architecture', 'Education', 'Hospitality Management', 'Arts'], specialty: 'Business & Architecture', keyAdvantage: 'Practical education, Oxford location' },
    { id: 59, name: 'University of Greenwich', country: 'United Kingdom', location: 'England-London', qsRank: 700, worldRank: 801, countryRank: 95, majors: ['Business', 'Engineering', 'Architecture', 'Computer Science', 'Education', 'Health Sciences'], specialty: 'Applied Sciences', keyAdvantage: 'London location, practical focus' },
    { id: 60, name: 'University of Brighton', country: 'United Kingdom', location: 'England-Brighton', qsRank: 850, worldRank: 901, countryRank: 98, majors: ['Arts', 'Business', 'Engineering', 'Medicine', 'Education', 'Architecture'], specialty: 'Arts & Design', keyAdvantage: 'Creative industries, coastal location' },

    // Singapore - 2 schools  
    { id: 61, name: 'National University of Singapore (NUS)', country: 'Singapore', location: 'Singapore', qsRank: 8, worldRank: 22, countryRank: 1, majors: ['Engineering', 'Computer Science', 'Business', 'Medicine', 'Law', 'Architecture'], specialty: 'Asian Leader', keyAdvantage: 'Asian financial center, high employment rate' },
    { id: 62, name: 'Nanyang Technological University (NTU)', country: 'Singapore', location: 'Singapore', qsRank: 15, worldRank: 27, countryRank: 2, majors: ['Engineering', 'Business', 'Communications', 'Education', 'Computer Science', 'Materials Science'], specialty: 'Engineering & Media', keyAdvantage: 'Young and dynamic, strong research capability' },

    // Japan - 3 schools
    { id: 63, name: 'University of Tokyo', country: 'Japan', location: 'Tokyo', qsRank: 32, worldRank: 84, countryRank: 2, majors: ['Natural Sciences', 'Engineering', 'Medicine', 'Economics', 'Computer Science', 'Agriculture'], specialty: 'Japan\'s Premier Institution', keyAdvantage: 'Japan\'s academic pinnacle, major political and business influence' },
    { id: 64, name: 'Tokyo Institute of Technology', country: 'Japan', location: 'Tokyo', qsRank: 84, worldRank: 445, countryRank: 4, majors: ['Engineering', 'Computer Science', 'Materials Science', 'Chemistry', 'Physics', 'Mathematics'], specialty: 'STEM Excellence', keyAdvantage: 'Japan\'s top STEM university, strong research capability' },
    { id: 65, name: 'Osaka University', country: 'Japan', location: 'Osaka', qsRank: 86, worldRank: 315, countryRank: 3, majors: ['Medicine', 'Engineering', 'Economics', 'Law', 'Science', 'Literature'], specialty: 'Medicine & Engineering', keyAdvantage: 'Kansai region prestige, renowned medical school' },

    // Canada - 5 schools
    { id: 66, name: 'University of Toronto', country: 'Canada', location: 'Toronto', qsRank: 25, worldRank: 17, countryRank: 1, majors: ['Medicine', 'Computer Science', 'Business', 'Engineering', 'Law', 'Education'], specialty: 'Comprehensive Research', keyAdvantage: 'Canada\'s top university, immigration-friendly policies' },
    { id: 67, name: 'McGill University', country: 'Canada', location: 'Montreal', qsRank: 29, worldRank: 56, countryRank: 3, majors: ['Medicine', 'Engineering', 'Business', 'Law', 'Music', 'Agriculture'], specialty: 'Medical Research', keyAdvantage: 'Harvard of Canada, top medical school' },
    { id: 68, name: 'University of British Columbia (UBC)', country: 'Canada', location: 'Vancouver', qsRank: 38, worldRank: 39, countryRank: 2, majors: ['Medicine', 'Engineering', 'Business', 'Forestry', 'Computer Science', 'Education'], specialty: 'Natural Resources', keyAdvantage: 'Beautiful Vancouver campus, gateway to Asia' },
    { id: 69, name: 'University of Ottawa', country: 'Canada', location: 'Ottawa', qsRank: 92, worldRank: 127, countryRank: 4, majors: ['Medicine', 'Engineering', 'Law', 'Business', 'Social Sciences', 'Education'], specialty: 'Bilingual Education', keyAdvantage: 'Capital university, rich government resources' },
    { id: 70, name: 'University of Alberta', country: 'Canada', location: 'Edmonton', qsRank: 96, worldRank: 150, countryRank: 4, majors: ['Engineering', 'Medicine', 'Business', 'Agriculture', 'Law', 'Education'], specialty: 'Petroleum Engineering', keyAdvantage: 'Oil province, leading engineering research' },

    // Australia - 5 schools
    { id: 71, name: 'University of Melbourne', country: 'Australia', location: 'Victoria-Melbourne', qsRank: 13, worldRank: 27, countryRank: 1, majors: ['Law', 'Medicine', 'Business', 'Engineering', 'Computer Science', 'Education'], specialty: 'Group of Eight', keyAdvantage: 'Australia\'s highest academic reputation' },
    { id: 72, name: 'University of Sydney', country: 'Australia', location: 'New South Wales-Sydney', qsRank: 18, worldRank: 29, countryRank: 3, majors: ['Business', 'Engineering', 'Medicine', 'Law', 'Architecture', 'Media Communications'], specialty: 'Historic Prestige', keyAdvantage: 'Australia\'s first university, many job opportunities' },
    { id: 73, name: 'University of New South Wales', country: 'Australia', location: 'New South Wales-Sydney', qsRank: 19, worldRank: 36, countryRank: 2, majors: ['Engineering', 'Business', 'Medicine', 'Law', 'Arts', 'Architecture'], specialty: 'Engineering Technology', keyAdvantage: 'Australia\'s top engineering school' },
    { id: 74, name: 'Australian National University', country: 'Australia', location: 'Canberra', qsRank: 30, worldRank: 85, countryRank: 4, majors: ['Politics', 'International Relations', 'Economics', 'Law', 'Engineering', 'Computer Science'], specialty: 'Politics & International Relations', keyAdvantage: 'Capital university, rich political resources' },
    { id: 75, name: 'Monash University', country: 'Australia', location: 'Victoria-Melbourne', qsRank: 37, worldRank: 35, countryRank: 5, majors: ['Medicine', 'Engineering', 'Business', 'Law', 'Education', 'Pharmacy'], specialty: 'Medicine & Engineering', keyAdvantage: 'Australia\'s largest, high internationalization' },

    // New Zealand - 2 schools
    { id: 76, name: 'University of Auckland', country: 'New Zealand', location: 'Auckland', qsRank: 65, worldRank: 132, countryRank: 1, majors: ['Engineering', 'Medicine', 'Business', 'Law', 'Education', 'Arts'], specialty: 'New Zealand\'s Premier', keyAdvantage: 'New Zealand\'s largest city, many job opportunities' },
    { id: 77, name: 'Lincoln University (New Zealand)', country: 'New Zealand', location: 'Canterbury', qsRank: 368, worldRank: 1137, countryRank: 7, majors: ['Agriculture', 'Environmental Science', 'Business', 'Engineering', 'Tourism Management', 'Landscape Architecture'], specialty: 'Agriculture & Environment', keyAdvantage: 'Leading agricultural science, beautiful environment' },

    // Hong Kong - 6 schools
    { id: 78, name: 'University of Hong Kong (HKU)', country: 'Hong Kong', location: 'Hong Kong-Central & Western', qsRank: 17, worldRank: 44, countryRank: 1, majors: ['Medicine', 'Law', 'Business', 'Engineering', 'Social Sciences', 'Architecture'], specialty: 'East-West Cultural Fusion', keyAdvantage: 'Asian international financial center, broad career prospects' },
    { id: 79, name: 'Chinese University of Hong Kong (CUHK)', country: 'Hong Kong', location: 'Hong Kong-Sha Tin', qsRank: 36, worldRank: 42, countryRank: 2, majors: ['Business', 'Medicine', 'Engineering', 'Social Sciences', 'Education', 'Journalism'], specialty: 'Bilingual Education', keyAdvantage: 'Bilingual teaching advantage, tradition meets modernity' },
    { id: 80, name: 'Hong Kong University of Science and Technology (HKUST)', country: 'Hong Kong', location: 'Hong Kong-Sai Kung', qsRank: 47, worldRank: 105, countryRank: 3, majors: ['Engineering', 'Business', 'Science', 'Computer Science', 'Environmental Science', 'Mathematics'], specialty: 'Technology Innovation', keyAdvantage: 'Young and dynamic, strong tech R&D' },
    { id: 81, name: 'Hong Kong Polytechnic University', country: 'Hong Kong', location: 'Hong Kong-Kowloon City', qsRank: 57, worldRank: 67, countryRank: 4, majors: ['Engineering', 'Business', 'Design', 'Hotel Management', 'Health Sciences', 'Architecture'], specialty: 'Applied Sciences', keyAdvantage: 'Practice-oriented, high employment rate' },
    { id: 82, name: 'City University of Hong Kong', country: 'Hong Kong', location: 'Hong Kong-Kowloon City', qsRank: 62, worldRank: 79, countryRank: 5, majors: ['Engineering', 'Business', 'Creative Media', 'Law', 'Veterinary Medicine', 'Computer Science'], specialty: 'Creative Media', keyAdvantage: 'Innovative teaching, high internationalization' },
    { id: 83, name: 'Hong Kong Baptist University', country: 'Hong Kong', location: 'Hong Kong-Kowloon City', qsRank: 252, worldRank: 471, countryRank: 6, majors: ['Communications', 'Business', 'Traditional Chinese Medicine', 'Arts', 'Social Sciences', 'Science'], specialty: 'Media & Traditional Medicine', keyAdvantage: 'Renowned communications programs, TCM specialty' },

    // Macau - 3 schools
    { id: 84, name: 'University of Macau', country: 'Macau', location: 'Macau-Largo do Senado', qsRank: 245, worldRank: 262, countryRank: 1, majors: ['Business', 'Engineering', 'Law', 'Education', 'Health Sciences', 'Social Sciences'], specialty: 'Multicultural Fusion', keyAdvantage: 'East-West cultural crossroads, language advantages' },
    { id: 85, name: 'Macau University of Science and Technology', country: 'Macau', location: 'Macau-Largo do Senado', qsRank: 464, worldRank: 814, countryRank: 2, majors: ['Business', 'Engineering', 'Computer Science', 'Law', 'Traditional Chinese Medicine', 'Design'], specialty: 'Technology & Traditional Medicine', keyAdvantage: 'Tech innovation, TCM specialty' },
    { id: 86, name: 'City University of Macau', country: 'Macau', location: 'Macau-Largo do Senado', qsRank: 999, worldRank: 999, countryRank: 3, majors: ['Business', 'Education', 'Law', 'Arts', 'Design', 'Computer Science'], specialty: 'Education & Arts', keyAdvantage: 'Small class teaching, personalized development' },

    // Netherlands - 2 schools
    { id: 87, name: 'University of Amsterdam', country: 'Netherlands', location: 'Amsterdam', qsRank: 55, worldRank: 33, countryRank: 1, majors: ['Economics', 'Law', 'Medicine', 'Psychology', 'Communications', 'Computer Science'], specialty: 'Social Sciences', keyAdvantage: 'European financial center, extremely high internationalization' },
    { id: 88, name: 'Leiden University', country: 'Netherlands', location: 'Leiden', qsRank: 141, worldRank: 56, countryRank: 4, majors: ['Law', 'Medicine', 'Social Sciences', 'Humanities', 'Archaeology', 'Linguistics'], specialty: 'Humanities & Social Sciences', keyAdvantage: 'Netherlands\' oldest university, deep academic tradition' },

    // Spain - 2 schools
    { id: 89, name: 'University of Barcelona', country: 'Spain', location: 'Barcelona', qsRank: 165, worldRank: 79, countryRank: 1, majors: ['Medicine', 'Law', 'Economics', 'Education', 'Psychology', 'Arts'], specialty: 'Comprehensive Research', keyAdvantage: 'Spain\'s top university, Mediterranean cultural center' },
    { id: 90, name: 'University of Valencia', country: 'Spain', location: 'Valencia', qsRank: 445, worldRank: 251, countryRank: 6, majors: ['Economics', 'Law', 'Medicine', 'Education', 'Psychology', 'Engineering'], specialty: 'Mediterranean Studies', keyAdvantage: 'Historic prestige, important Mediterranean coastal city' }
  ]
};
