export interface School {
  name: string;
  country: string;
  qsRanking: number;
  logo: string;
  slug: string;
  majors: string[];
}

export const schools: School[] = [
  {
    name: "麻省理工学院 (MIT)",
    country: "美国",
    qsRanking: 1,
    logo: "/images/schools/mit.jpg",
    slug: "mit",
    majors: [
      "电子工程",
      "计算机科学",
      "机械工程",
      "人工智能",
      "数据科学",
      "生物工程",
      "材料科学"
    ]
  },
  {
    name: "哈佛大学",
    country: "美国",
    qsRanking: 4,
    logo: "/images/schools/harvard.jpg",
    slug: "harvard",
    majors: [
      "法学",
      "医学",
      "商学",
      "公共政策",
      "经济学",
      "心理学",
      "计算机科学"
    ]
  },
  {
    name: "牛津大学",
    country: "英国",
    qsRanking: 3,
    logo: "/images/schools/oxford.jpg",
    slug: "oxford",
    majors: [
      "人文社科",
      "医学",
      "法学",
      "经济学",
      "计算机科学",
      "工程学",
      "教育学"
    ]
  },
  {
    name: "剑桥大学",
    country: "英国",
    qsRanking: 5,
    logo: "/images/schools/cambridge.jpg",
    slug: "cambridge",
    majors: [
      "自然科学",
      "经济学",
      "工程学",
      "医学",
      "计算机科学",
      "数学",
      "物理学"
    ]
  },
  {
    name: "新加坡国立大学 (NUS)",
    country: "新加坡",
    qsRanking: 8,
    logo: "/images/schools/nus.jpg",
    slug: "nus",
    majors: [
      "工程学",
      "计算机科学",
      "商学",
      "医学",
      "法学",
      "建筑学",
      "环境科学"
    ]
  },
  {
    name: "东京大学",
    country: "日本",
    qsRanking: 32,
    logo: "/images/schools/tokyo.jpg",
    slug: "tokyo",
    majors: [
      "自然科学",
      "工程学",
      "医学",
      "经济学",
      "计算机科学",
      "农学",
      "药学"
    ]
  },
  {
    name: "多伦多大学",
    country: "加拿大",
    qsRanking: 25,
    logo: "/images/schools/toronto.jpg",
    slug: "toronto",
    majors: [
      "医学",
      "计算机科学",
      "商学",
      "工程学",
      "法学",
      "教育学",
      "心理学"
    ]
  },
  {
    name: "墨尔本大学",
    country: "澳大利亚",
    qsRanking: 13,
    logo: "/images/schools/melbourne.jpg",
    slug: "melbourne",
    majors: [
      "法学",
      "医学",
      "商学",
      "工程学",
      "计算机科学",
      "教育学",
      "建筑学"
    ]
  },
  {
    name: "香港大学 (HKU)",
    country: "香港",
    qsRanking: 17,
    logo: "/images/schools/hku.jpg",
    slug: "hku",
    majors: [
      "医学",
      "法学",
      "商学",
      "工程学",
      "计算机科学",
      "建筑学",
      "教育学"
    ]
  }
];

// 全球知名大学数据库
export const schoolsData = {
  zh: [
    { 
      id: 1, 
      name: '麻省理工学院 (MIT)',
      country: '美国',
      location: '马萨诸塞-波士顿',
      qsRank: 1, 
      majors: ['计算机科学', '电子工程', '机械工程', '物理学', '数学', '生物工程'],
      specialty: '科技创新与创业',
      keyAdvantage: '硅谷直通车，科技巨头首选'
    },
    { 
      id: 2, 
      name: '哈佛大学',
      country: '美国',
      location: '马萨诸塞-波士顿',
      qsRank: 4, 
      majors: ['商业管理', '经济学', '医学', '法学', '心理学', '生物学'],
      specialty: '商科与医学',
      keyAdvantage: '全球校友网络，政商界首选'
    },
    { 
      id: 3, 
      name: '斯坦福大学',
      country: '美国',
      location: '加利福尼亚-硅谷',
      qsRank: 5, 
      majors: ['计算机科学', '工程学', '商业管理', '医学', '人工智能', '数据科学'],
      specialty: '创新创业',
      keyAdvantage: '硅谷核心，创业孵化器'
    },
    { 
      id: 4, 
      name: '牛津大学',
      country: '英国',
      location: '牛津',
      qsRank: 2, 
      majors: ['人文学科', '法学', '医学', '自然科学', '社会科学', '工程学'],
      specialty: '传统学术研究',
      keyAdvantage: '英国最古老大学，学术声誉极高'
    },
    { 
      id: 5, 
      name: '剑桥大学',
      country: '英国',
      location: '剑桥',
      qsRank: 3, 
      majors: ['数学', '自然科学', '工程学', '医学', '人文学科', '经济学'],
      specialty: '理工科研究',
      keyAdvantage: '诺贝尔奖得主摇篮'
    },
    { 
      id: 6, 
      name: '新加坡国立大学',
      country: '新加坡',
      location: '新加坡',
      qsRank: 8, 
      majors: ['计算机科学', '工程学', '商科', '医学', '建筑学', '法学'],
      specialty: '亚洲领先',
      keyAdvantage: '亚洲金融中心，就业率高'
    },
    { 
      id: 7, 
      name: '伦敦大学学院',
      country: '英国',
      location: '伦敦',
      qsRank: 9, 
      majors: ['建筑学', '工程学', '医学', '法学', '经济学', '心理学'],
      specialty: '多元化学科',
      keyAdvantage: '伦敦中心，国际化程度高'
    },
    { 
      id: 8, 
      name: '帝国理工学院',
      country: '英国',
      location: '伦敦',
      qsRank: 6, 
      majors: ['工程学', '计算机科学', '医学', '商科', '自然科学', '数学'],
      specialty: '理工科专精',
      keyAdvantage: '英国理工科第一，就业前景优'
    },
    { 
      id: 9, 
      name: '苏黎世联邦理工学院',
      country: '瑞士',
      location: '苏黎世',
      qsRank: 7, 
      majors: ['工程学', '计算机科学', '自然科学', '数学', '建筑学', '材料科学'],
      specialty: '工程技术',
      keyAdvantage: '欧洲理工科翘楚'
    },
    { 
      id: 10, 
      name: '加州大学伯克利分校',
      country: '美国',
      location: '加利福尼亚-旧金山湾区',
      qsRank: 10, 
      majors: ['计算机科学', '工程学', '商科', '法学', '公共政策', '新闻学'],
      specialty: '公立大学典范',
      keyAdvantage: '硅谷人才摇篮，创新氛围浓厚'
    },
    // 继续添加更多学校...
    { 
      id: 11, 
      name: '耶鲁大学',
      country: '美国',
      location: '康涅狄格-纽黑文',
      qsRank: 16, 
      majors: ['法学', '医学', '商科', '人文学科', '社会科学', '艺术学'],
      specialty: '人文社科',
      keyAdvantage: '常春藤联盟，政界精英摇篮'
    },
    { 
      id: 12, 
      name: '普林斯顿大学',
      country: '美国',
      location: '新泽西',
      qsRank: 20, 
      majors: ['经济学', '计算机科学', '物理学', '数学', '工程学', '公共政策'],
      specialty: '理论研究',
      keyAdvantage: '学术研究顶尖，师生比例优异'
    },
    { 
      id: 13, 
      name: '多伦多大学',
      country: '加拿大',
      location: '多伦多',
      qsRank: 25, 
      majors: ['医学', '工程学', '商科', '计算机科学', '法学', '教育学'],
      specialty: '综合性研究',
      keyAdvantage: '加拿大顶尖，移民友好政策'
    },
    { 
      id: 14, 
      name: '墨尔本大学',
      country: '澳大利亚',
      location: '墨尔本',
      qsRank: 14, 
      majors: ['医学', '法学', '商科', '工程学', '艺术学', '教育学'],
      specialty: '澳洲八大联盟',
      keyAdvantage: '澳洲学术声誉最高'
    },
    { 
      id: 15, 
      name: '悉尼大学',
      country: '澳大利亚',
      location: '悉尼',
      qsRank: 18, 
      majors: ['商科', '工程学', '医学', '法学', '建筑学', '媒体传播'],
      specialty: '历史悠久',
      keyAdvantage: '澳洲第一所大学，就业机会多'
    },
    { 
      id: 16, 
      name: '香港大学',
      country: '香港',
      location: '香港',
      qsRank: 26, 
      majors: ['商科', '医学', '法学', '工程学', '社会科学', '建筑学'],
      specialty: '东西文化融合',
      keyAdvantage: '亚洲国际金融中心，就业前景广阔'
    },
    { 
      id: 17, 
      name: '东京大学',
      country: '日本',
      location: '东京',
      qsRank: 28, 
      majors: ['工程学', '医学', '法学', '经济学', '理学', '文学'],
      specialty: '日本最高学府',
      keyAdvantage: '日本学术顶峰，政商界影响力大'
    },
    { 
      id: 18, 
      name: '首尔国立大学',
      country: '韩国',
      location: '首尔',
      qsRank: 41, 
      majors: ['工程学', '商科', '医学', '法学', '人文学科', '自然科学'],
      specialty: '韩国顶尖',
      keyAdvantage: '韩国最高学府，亚洲影响力强'
    },
    { 
      id: 19, 
      name: '北京大学',
      country: '中国',
      location: '北京',
      qsRank: 17, 
      majors: ['人文学科', '社会科学', '理学', '医学', '工学', '经济学'],
      specialty: '中国顶尖学府',
      keyAdvantage: '中国学术声誉最高，国际认可度高'
    },
    { 
      id: 20, 
      name: '清华大学',
      country: '中国',
      location: '北京',
      qsRank: 20, 
      majors: ['工程学', '计算机科学', '经济学', '管理学', '理学', '建筑学'],
      specialty: '工程技术',
      keyAdvantage: '中国理工科第一，国际合作丰富'
    }
    // 这里可以继续添加更多学校到70所...
  ],
  en: [
    { 
      id: 1, 
      name: 'Massachusetts Institute of Technology (MIT)',
      country: 'United States',
      location: 'Massachusetts, Boston',
      qsRank: 1, 
      majors: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Physics', 'Mathematics', 'Bioengineering'],
      specialty: 'Technology Innovation & Entrepreneurship',
      keyAdvantage: 'Silicon Valley Express, Tech Giants\' Top Choice'
    },
    { 
      id: 2, 
      name: 'Harvard University',
      country: 'United States',
      location: 'Massachusetts, Boston',
      qsRank: 4, 
      majors: ['Business Management', 'Economics', 'Medicine', 'Law', 'Psychology', 'Biology'],
      specialty: 'Business & Medicine',
      keyAdvantage: 'Global Alumni Network, Political & Business Elite Choice'
    },
    { 
      id: 3, 
      name: 'Stanford University',
      country: 'United States',
      location: 'California, Silicon Valley',
      qsRank: 5, 
      majors: ['Computer Science', 'Engineering', 'Business Management', 'Medicine', 'Artificial Intelligence', 'Data Science'],
      specialty: 'Innovation & Entrepreneurship',
      keyAdvantage: 'Silicon Valley Core, Startup Incubator'
    },
    { 
      id: 4, 
      name: 'University of Oxford',
      country: 'United Kingdom',
      location: 'Oxford',
      qsRank: 2, 
      majors: ['Humanities', 'Law', 'Medicine', 'Natural Sciences', 'Social Sciences', 'Engineering'],
      specialty: 'Traditional Academic Research',
      keyAdvantage: 'UK\'s Oldest University, Exceptional Academic Reputation'
    },
    { 
      id: 5, 
      name: 'University of Cambridge',
      country: 'United Kingdom',
      location: 'Cambridge',
      qsRank: 3, 
      majors: ['Mathematics', 'Natural Sciences', 'Engineering', 'Medicine', 'Humanities', 'Economics'],
      specialty: 'STEM Research',
      keyAdvantage: 'Nobel Laureates Cradle'
    },
    { 
      id: 6, 
      name: 'National University of Singapore',
      country: 'Singapore',
      location: 'Singapore',
      qsRank: 8, 
      majors: ['Computer Science', 'Engineering', 'Business', 'Medicine', 'Architecture', 'Law'],
      specialty: 'Asian Leadership',
      keyAdvantage: 'Asian Financial Hub, High Employment Rate'
    },
    { 
      id: 7, 
      name: 'University College London',
      country: 'United Kingdom',
      location: 'London',
      qsRank: 9, 
      majors: ['Architecture', 'Engineering', 'Medicine', 'Law', 'Economics', 'Psychology'],
      specialty: 'Multidisciplinary',
      keyAdvantage: 'Central London, High Internationalization'
    },
    { 
      id: 8, 
      name: 'Imperial College London',
      country: 'United Kingdom',
      location: 'London',
      qsRank: 6, 
      majors: ['Engineering', 'Computer Science', 'Medicine', 'Business', 'Natural Sciences', 'Mathematics'],
      specialty: 'STEM Specialization',
      keyAdvantage: 'UK\'s Top STEM, Excellent Career Prospects'
    },
    { 
      id: 9, 
      name: 'ETH Zurich',
      country: 'Switzerland',
      location: 'Zurich',
      qsRank: 7, 
      majors: ['Engineering', 'Computer Science', 'Natural Sciences', 'Mathematics', 'Architecture', 'Materials Science'],
      specialty: 'Engineering Technology',
      keyAdvantage: 'European STEM Leader'
    },
    { 
      id: 10, 
      name: 'University of California, Berkeley',
      country: 'United States',
      location: 'California, San Francisco Bay Area',
      qsRank: 10, 
      majors: ['Computer Science', 'Engineering', 'Business', 'Law', 'Public Policy', 'Journalism'],
      specialty: 'Public University Excellence',
      keyAdvantage: 'Silicon Valley Talent Pool, Innovation Atmosphere'
    },
    // 继续添加更多学校...
    { 
      id: 11, 
      name: 'Yale University',
      country: 'United States',
      location: 'Connecticut, New Haven',
      qsRank: 16, 
      majors: ['Law', 'Medicine', 'Business', 'Humanities', 'Social Sciences', 'Arts'],
      specialty: 'Humanities & Social Sciences',
      keyAdvantage: 'Ivy League, Political Elite Cradle'
    },
    { 
      id: 12, 
      name: 'Princeton University',
      country: 'United States',
      location: 'New Jersey',
      qsRank: 20, 
      majors: ['Economics', 'Computer Science', 'Physics', 'Mathematics', 'Engineering', 'Public Policy'],
      specialty: 'Theoretical Research',
      keyAdvantage: 'Top Academic Research, Excellent Faculty-Student Ratio'
    },
    { 
      id: 13, 
      name: 'University of Toronto',
      country: 'Canada',
      location: 'Toronto',
      qsRank: 25, 
      majors: ['Medicine', 'Engineering', 'Business', 'Computer Science', 'Law', 'Education'],
      specialty: 'Comprehensive Research',
      keyAdvantage: 'Canada\'s Top, Immigration-Friendly Policies'
    },
    { 
      id: 14, 
      name: 'University of Melbourne',
      country: 'Australia',
      location: 'Melbourne',
      qsRank: 14, 
      majors: ['Medicine', 'Law', 'Business', 'Engineering', 'Arts', 'Education'],
      specialty: 'Group of Eight',
      keyAdvantage: 'Australia\'s Highest Academic Reputation'
    },
    { 
      id: 15, 
      name: 'University of Sydney',
      country: 'Australia',
      location: 'Sydney',
      qsRank: 18, 
      majors: ['Business', 'Engineering', 'Medicine', 'Law', 'Architecture', 'Media Communication'],
      specialty: 'Historic Legacy',
      keyAdvantage: 'Australia\'s First University, Abundant Job Opportunities'
    },
    { 
      id: 16, 
      name: 'University of Hong Kong',
      country: 'Hong Kong',
      location: 'Hong Kong',
      qsRank: 26, 
      majors: ['Business', 'Medicine', 'Law', 'Engineering', 'Social Sciences', 'Architecture'],
      specialty: 'East-West Cultural Fusion',
      keyAdvantage: 'Asian International Financial Center, Broad Career Prospects'
    },
    { 
      id: 17, 
      name: 'University of Tokyo',
      country: 'Japan',
      location: 'Tokyo',
      qsRank: 28, 
      majors: ['Engineering', 'Medicine', 'Law', 'Economics', 'Science', 'Literature'],
      specialty: 'Japan\'s Premier Institution',
      keyAdvantage: 'Japan\'s Academic Peak, Strong Political & Business Influence'
    },
    { 
      id: 18, 
      name: 'Seoul National University',
      country: 'South Korea',
      location: 'Seoul',
      qsRank: 41, 
      majors: ['Engineering', 'Business', 'Medicine', 'Law', 'Humanities', 'Natural Sciences'],
      specialty: 'Korea\'s Leading',
      keyAdvantage: 'Korea\'s Premier Institution, Strong Asian Influence'
    },
    { 
      id: 19, 
      name: 'Peking University',
      country: 'China',
      location: 'Beijing',
      qsRank: 17, 
      majors: ['Humanities', 'Social Sciences', 'Science', 'Medicine', 'Engineering', 'Economics'],
      specialty: 'China\'s Premier Institution',
      keyAdvantage: 'China\'s Highest Academic Reputation, High International Recognition'
    },
    { 
      id: 20, 
      name: 'Tsinghua University',
      country: 'China',
      location: 'Beijing',
      qsRank: 20, 
      majors: ['Engineering', 'Computer Science', 'Economics', 'Management', 'Science', 'Architecture'],
      specialty: 'Engineering & Technology',
      keyAdvantage: 'China\'s Top STEM, Rich International Cooperation'
    }
    // 这里可以继续添加更多学校到70所...
  ]
}; 