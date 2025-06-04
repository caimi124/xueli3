// 严格按照用户提供的90所学校名单
export interface SchoolData {
  id: number;
  name: string;
  country: string;
  location: string;
  qsRank: number;
  worldRank: number;
  countryRank: number;
  majors: string[];
  specialty: string;
  keyAdvantage: string;
}

export const schoolsData = {
  "zh": [
    {
      "id": 1,
      "name": "麻省理工学院 (MIT)",
      "country": "美国",
      "location": "马萨诸塞-波士顿",
      "qsRank": 1,
      "worldRank": 2,
      "countryRank": 2,
      "majors": [
        "电子工程",
        "计算机科学",
        "机械工程",
        "人工智能",
        "数据科学",
        "生物工程"
      ],
      "specialty": "科技创新与创业",
      "keyAdvantage": "全球科技创新领导者，硅谷入口"
    },
    {
      "id": 2,
      "name": "哈佛大学",
      "country": "美国",
      "location": "马萨诸塞-波士顿",
      "qsRank": 4,
      "worldRank": 1,
      "countryRank": 3,
      "majors": [
        "法学",
        "医学",
        "商学",
        "公共政策",
        "经济学",
        "心理学"
      ],
      "specialty": "商学与医学",
      "keyAdvantage": "全球校友网络，政商界首选"
    },
    {
      "id": 3,
      "name": "斯坦福大学",
      "country": "美国",
      "location": "加利福尼亚-帕拉阿图",
      "qsRank": 6,
      "worldRank": 3,
      "countryRank": 4,
      "majors": [
        "计算机科学",
        "工程学",
        "商业管理",
        "医学",
        "人工智能",
        "数据科学"
      ],
      "specialty": "创新与创业",
      "keyAdvantage": "硅谷核心，创业孵化器"
    },
    {
      "id": 4,
      "name": "宾夕法尼亚大学",
      "country": "美国",
      "location": "宾夕法尼亚",
      "qsRank": 11,
      "worldRank": 14,
      "countryRank": 10,
      "majors": [
        "商学",
        "工程学",
        "医学",
        "法学",
        "计算机科学",
        "经济学"
      ],
      "specialty": "沃顿商学院",
      "keyAdvantage": "全球顶级商学院，金融界翘楚"
    },
    {
      "id": 5,
      "name": "加州大学伯克利分校",
      "country": "美国",
      "location": "加利福尼亚",
      "qsRank": 12,
      "worldRank": 5,
      "countryRank": 17,
      "majors": [
        "计算机科学",
        "工程学",
        "商科",
        "法学",
        "公共政策",
        "新闻学"
      ],
      "specialty": "公立大学典范",
      "keyAdvantage": "硅谷人才摇篮，创新氛围浓厚"
    },
    {
      "id": 6,
      "name": "康奈尔大学",
      "country": "美国",
      "location": "纽约-纽约市",
      "qsRank": 16,
      "worldRank": 19,
      "countryRank": 11,
      "majors": [
        "工程学",
        "商学",
        "农业",
        "兽医学",
        "法学",
        "医学"
      ],
      "specialty": "工程与农业",
      "keyAdvantage": "常春藤盟校，工程教育先驱"
    },
    {
      "id": 7,
      "name": "芝加哥大学",
      "country": "美国",
      "location": "伊利诺斯-芝加哥",
      "qsRank": 21,
      "worldRank": 25,
      "countryRank": 11,
      "majors": [
        "经济学",
        "法学",
        "医学",
        "商学",
        "社会学",
        "政治学"
      ],
      "specialty": "经济学与法学",
      "keyAdvantage": "诺贝尔奖摇篮，经济学圣地"
    },
    {
      "id": 8,
      "name": "普林斯顿大学",
      "country": "美国",
      "location": "新泽西-普林斯顿",
      "qsRank": 22,
      "worldRank": 18,
      "countryRank": 1,
      "majors": [
        "物理学",
        "数学",
        "工程学",
        "公共政策",
        "经济学",
        "计算机科学"
      ],
      "specialty": "理论科学",
      "keyAdvantage": "常春藤盟校典范，学术声誉卓越"
    },
    {
      "id": 9,
      "name": "耶鲁大学",
      "country": "美国",
      "location": "康涅狄格-纽黑文",
      "qsRank": 23,
      "worldRank": 10,
      "countryRank": 5,
      "majors": [
        "法学",
        "医学",
        "艺术",
        "戏剧",
        "音乐",
        "历史"
      ],
      "specialty": "人文艺术",
      "keyAdvantage": "总统摇篮，人文教育典范"
    },
    {
      "id": 10,
      "name": "约翰霍普金斯大学",
      "country": "美国",
      "location": "马里兰",
      "qsRank": 32,
      "worldRank": 13,
      "countryRank": 6,
      "majors": [
        "医学",
        "公共卫生",
        "工程学",
        "国际关系",
        "生物医学",
        "护理学"
      ],
      "specialty": "医学与公共卫生",
      "keyAdvantage": "全球顶级医学院，研究实力强劲"
    },
    {
      "id": 11,
      "name": "哥伦比亚大学",
      "country": "美国",
      "location": "纽约-纽约市",
      "qsRank": 34,
      "worldRank": 9,
      "countryRank": 13,
      "majors": [
        "新闻学",
        "商学",
        "法学",
        "医学",
        "工程学",
        "国际关系"
      ],
      "specialty": "新闻与商学",
      "keyAdvantage": "新闻界黄埔军校，华尔街直通车"
    },
    {
      "id": 12,
      "name": "加州大学洛杉矶分校 (UCLA)",
      "country": "美国",
      "location": "加利福尼亚-洛杉矶",
      "qsRank": 42,
      "worldRank": 11,
      "countryRank": 15,
      "majors": [
        "电影制作",
        "医学",
        "工程学",
        "商学",
        "心理学",
        "艺术"
      ],
      "specialty": "影视制作",
      "keyAdvantage": "好莱坞人才基地，娱乐产业领军"
    },
    {
      "id": 13,
      "name": "纽约大学 (NYU)",
      "country": "美国",
      "location": "纽约-纽约市",
      "qsRank": 43,
      "worldRank": 32,
      "countryRank": 30,
      "majors": [
        "商学",
        "法学",
        "艺术",
        "电影",
        "新闻学",
        "社会工作"
      ],
      "specialty": "商学与艺术",
      "keyAdvantage": "国际化程度最高，艺术氛围浓厚"
    },
    {
      "id": 14,
      "name": "密歇根大学",
      "country": "美国",
      "location": "密歇根-安娜堡",
      "qsRank": 44,
      "worldRank": 19,
      "countryRank": 21,
      "majors": [
        "工程学",
        "商学",
        "医学",
        "法学",
        "公共政策",
        "心理学"
      ],
      "specialty": "公立大学典范",
      "keyAdvantage": "公立常春藤，校友网络强大"
    },
    {
      "id": 15,
      "name": "美国西北大学",
      "country": "美国",
      "location": "伊利诺斯",
      "qsRank": 50,
      "worldRank": 24,
      "countryRank": 6,
      "majors": [
        "新闻学",
        "商学",
        "工程学",
        "医学",
        "法学",
        "音乐"
      ],
      "specialty": "新闻与商学",
      "keyAdvantage": "凯洛格商学院，新闻传播强校"
    },
    {
      "id": 34,
      "name": "新加坡国立大学 (NUS)",
      "country": "新加坡",
      "location": "新加坡",
      "qsRank": 8,
      "worldRank": 22,
      "countryRank": 1,
      "majors": [
        "工程学",
        "商学",
        "计算机科学",
        "医学",
        "法学",
        "建筑学"
      ],
      "specialty": "亚洲顶尖综合大学",
      "keyAdvantage": "亚洲学术中心，国际化程度高"
    },
    {
      "id": 35,
      "name": "南洋理工大学 (NTU)",
      "country": "新加坡",
      "location": "新加坡",
      "qsRank": 15,
      "worldRank": 27,
      "countryRank": 2,
      "majors": [
        "工程学",
        "商学",
        "传播学",
        "计算机科学",
        "材料科学",
        "生物医学"
      ],
      "specialty": "工程与技术",
      "keyAdvantage": "亚洲工程技术领军，创新研究强校"
    },
    {
      "id": 36,
      "name": "牛津大学",
      "country": "英国",
      "location": "英格兰-牛津",
      "qsRank": 3,
      "worldRank": 4,
      "countryRank": 2,
      "majors": [
        "哲学",
        "政治学",
        "经济学",
        "法学",
        "医学",
        "文学"
      ],
      "specialty": "人文社科",
      "keyAdvantage": "英语世界最古老大学，学术声誉无与伦比"
    },
    {
      "id": 37,
      "name": "剑桥大学",
      "country": "英国",
      "location": "英格兰-剑桥",
      "qsRank": 5,
      "worldRank": 6,
      "countryRank": 1,
      "majors": [
        "数学",
        "物理学",
        "工程学",
        "医学",
        "法学",
        "经济学"
      ],
      "specialty": "理工科",
      "keyAdvantage": "科学研究圣地，牛顿母校"
    },
    {
      "id": 38,
      "name": "帝国理工学院",
      "country": "英国",
      "location": "英格兰-伦敦",
      "qsRank": 2,
      "worldRank": 12,
      "countryRank": 5,
      "majors": [
        "工程学",
        "医学",
        "自然科学",
        "商学",
        "计算机科学"
      ],
      "specialty": "理工科",
      "keyAdvantage": "科技专业强校，伦敦核心位置"
    }
  ],
  "en": [
    {
      "id": 1,
      "name": "Massachusetts Institute of Technology (MIT)",
      "country": "United States",
      "location": "Massachusetts-Boston",
      "qsRank": 1,
      "worldRank": 2,
      "countryRank": 2,
      "majors": [
        "Electrical Engineering",
        "Computer Science",
        "Mechanical Engineering",
        "Artificial Intelligence",
        "Data Science",
        "Bioengineering"
      ],
      "specialty": "Technology Innovation & Entrepreneurship",
      "keyAdvantage": "Global technology innovation leader, Silicon Valley gateway"
    },
    {
      "id": 2,
      "name": "Harvard University",
      "country": "United States",
      "location": "Massachusetts-Boston",
      "qsRank": 4,
      "worldRank": 1,
      "countryRank": 3,
      "majors": [
        "Law",
        "Medicine",
        "Business",
        "Public Policy",
        "Economics",
        "Psychology"
      ],
      "specialty": "Business & Medicine",
      "keyAdvantage": "Global alumni network, preferred by political and business leaders"
    }
  ]
};
