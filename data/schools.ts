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
    },
    { 
      id: 21, 
      name: '加州理工学院',
      country: '美国',
      location: '加利福尼亚-帕萨迪纳',
      qsRank: 6, 
      majors: ['物理学', '工程学', '计算机科学', '数学', '化学', '生物学'],
      specialty: '科学研究',
      keyAdvantage: '诺贝尔奖摇篮，科研实力顶尖'
    },
    { 
      id: 22, 
      name: '普林斯顿大学',
      country: '美国',
      location: '新泽西-普林斯顿',
      qsRank: 16, 
      majors: ['经济学', '计算机科学', '物理学', '数学', '工程学', '公共政策'],
      specialty: '理论研究',
      keyAdvantage: '学术研究顶尖，师生比例优秀'
    },
    { 
      id: 23, 
      name: '耶鲁大学',
      country: '美国',
      location: '康涅狄格-纽黑文',
      qsRank: 18, 
      majors: ['法学', '医学', '商学', '人文学科', '社会科学', '艺术学'],
      specialty: '人文社科',
      keyAdvantage: '常春藤盟校，政治精英摇篮'
    },
    { 
      id: 24, 
      name: '哥伦比亚大学',
      country: '美国',
      location: '纽约',
      qsRank: 19, 
      majors: ['新闻学', '商学', '医学', '法学', '工程学', '国际关系'],
      specialty: '新闻传媒',
      keyAdvantage: '纽约核心位置，媒体资源丰富'
    },
    { 
      id: 25, 
      name: '芝加哥大学',
      country: '美国',
      location: '伊利诺伊-芝加哥',
      qsRank: 21, 
      majors: ['经济学', '商学', '法学', '社会学', '政治学', '物理学'],
      specialty: '经济学',
      keyAdvantage: '经济学诺奖得主最多的大学'
    },
    { 
      id: 26, 
      name: '宾夕法尼亚大学',
      country: '美国',
      location: '宾夕法尼亚-费城',
      qsRank: 15, 
      majors: ['商学', '医学', '工程学', '法学', '教育学', '社会工作'],
      specialty: '沃顿商学院',
      keyAdvantage: '商学院全球第一，华尔街首选'
    },
    { 
      id: 27, 
      name: '康奈尔大学',
      country: '美国',
      location: '纽约-伊萨卡',
      qsRank: 13, 
      majors: ['工程学', '农学', '兽医学', '商学', '酒店管理', '建筑学'],
      specialty: '应用科学',
      keyAdvantage: '酒店管理与农学全球领先'
    },
    { 
      id: 28, 
      name: '杜克大学',
      country: '美国',
      location: '北卡罗来纳-达勒姆',
      qsRank: 23, 
      majors: ['医学', '商学', '法学', '工程学', '公共政策', '环境科学'],
      specialty: '医学研究',
      keyAdvantage: '医学院享誉全球，校园环境优美'
    },
    { 
      id: 29, 
      name: '西北大学',
      country: '美国',
      location: '伊利诺伊-埃文斯顿',
      qsRank: 34, 
      majors: ['新闻学', '商学', '工程学', '医学', '音乐', '戏剧'],
      specialty: '新闻传媒',
      keyAdvantage: '新闻学院全美第一，表演艺术出色'
    },
    { 
      id: 30, 
      name: '约翰霍普金斯大学',
      country: '美国',
      location: '马里兰-巴尔的摩',
      qsRank: 24, 
      majors: ['医学', '公共卫生', '国际关系', '生物工程', '护理学', '教育学'],
      specialty: '医学研究',
      keyAdvantage: '医学院全球顶尖，NIH合作密切'
    },
    { 
      id: 31, 
      name: '卡内基梅隆大学',
      country: '美国',
      location: '宾夕法尼亚-匹兹堡',
      qsRank: 52, 
      majors: ['计算机科学', '工程学', '商学', '艺术学', '戏剧', '人工智能'],
      specialty: '计算机科学',
      keyAdvantage: '计算机科学全球前三，AI研究领先'
    },
    { 
      id: 32, 
      name: '纽约大学',
      country: '美国',
      location: '纽约',
      qsRank: 38, 
      majors: ['商学', '艺术学', '法学', '医学', '电影', '新闻学'],
      specialty: '艺术创意',
      keyAdvantage: '位于纽约心脏地带，实习机会丰富'
    },
    { 
      id: 33, 
      name: '伦敦大学学院',
      country: '英国',
      location: '伦敦',
      qsRank: 9, 
      majors: ['建筑学', '工程学', '医学', '法学', '经济学', '心理学'],
      specialty: '多学科综合',
      keyAdvantage: '伦敦中心位置，国际化程度高'
    },
    { 
      id: 34, 
      name: '帝国理工学院',
      country: '英国',
      location: '伦敦',
      qsRank: 6, 
      majors: ['工程学', '计算机科学', '医学', '商学', '自然科学', '数学'],
      specialty: 'STEM专精',
      keyAdvantage: '英国理工科第一，就业前景优秀'
    },
    { 
      id: 35, 
      name: '伦敦政治经济学院',
      country: '英国',
      location: '伦敦',
      qsRank: 45, 
      majors: ['经济学', '政治学', '社会学', '法学', '会计金融', '国际关系'],
      specialty: '社会科学',
      keyAdvantage: '社会科学全球第一，政商界校友众多'
    },
    { 
      id: 36, 
      name: '爱丁堡大学',
      country: '英国',
      location: '爱丁堡',
      qsRank: 22, 
      majors: ['医学', '工程学', '商学', '法学', '艺术学', '语言学'],
      specialty: '传统名校',
      keyAdvantage: '苏格兰最古老大学，文化底蕴深厚'
    },
    { 
      id: 37, 
      name: '曼彻斯特大学',
      country: '英国',
      location: '曼彻斯特',
      qsRank: 32, 
      majors: ['工程学', '计算机科学', '商学', '医学', '材料科学', '化学'],
      specialty: '工程技术',
      keyAdvantage: '工业革命发源地，工程技术实力强'
    },
    { 
      id: 38, 
      name: '伦敦大学国王学院',
      country: '英国',
      location: '伦敦',
      qsRank: 40, 
      majors: ['医学', '法学', '人文学科', '社会科学', '自然科学', '工程学'],
      specialty: '医学法学',
      keyAdvantage: '医学与法学传统强校，研究实力雄厚'
    },
    { 
      id: 39, 
      name: '南洋理工大学',
      country: '新加坡',
      location: '新加坡',
      qsRank: 12, 
      majors: ['工程学', '计算机科学', '商学', '传媒学', '材料科学', '生物工程'],
      specialty: '工程技术',
      keyAdvantage: '亚洲科技强校，校园环境优美'
    },
    { 
      id: 40, 
      name: '苏黎世联邦理工学院',
      country: '瑞士',
      location: '苏黎世',
      qsRank: 7, 
      majors: ['工程学', '计算机科学', '自然科学', '数学', '建筑学', '材料科学'],
      specialty: '工程技术',
      keyAdvantage: '欧洲理工科领袖，爱因斯坦母校'
    },
    { 
      id: 41, 
      name: '麦吉尔大学',
      country: '加拿大',
      location: '魁北克-蒙特利尔',
      qsRank: 30, 
      majors: ['医学', '工程学', '商学', '法学', '文学', '音乐'],
      specialty: '医学研究',
      keyAdvantage: '加拿大哈佛，医学院享誉全球'
    },
    { 
      id: 42, 
      name: '英属哥伦比亚大学',
      country: '加拿大',
      location: '不列颠哥伦比亚-温哥华',
      qsRank: 34, 
      majors: ['林学', '工程学', '商学', '医学', '计算机科学', '环境科学'],
      specialty: '环境科学',
      keyAdvantage: '环境优美，亚洲学生友好'
    },
    { 
      id: 43, 
      name: '澳大利亚国立大学',
      country: '澳大利亚',
      location: '堪培拉',
      qsRank: 30, 
      majors: ['政治学', '国际关系', '经济学', '工程学', '计算机科学', '物理学'],
      specialty: '政治外交',
      keyAdvantage: '澳洲国立，政府研究机构集中'
    },
    { 
      id: 44, 
      name: '悉尼大学',
      country: '澳大利亚',
      location: '悉尼',
      qsRank: 18, 
      majors: ['商学', '工程学', '医学', '法学', '建筑学', '传媒学'],
      specialty: '历史传承',
      keyAdvantage: '澳洲第一所大学，就业机会丰富'
    },
    { 
      id: 45, 
      name: '新南威尔士大学',
      country: '澳大利亚',
      location: '悉尼',
      qsRank: 19, 
      majors: ['工程学', '商学', '计算机科学', '建筑学', '艺术设计', '法学'],
      specialty: '工程商科',
      keyAdvantage: '工程和商科双强，创新创业活跃'
    },
    { 
      id: 46, 
      name: '昆士兰大学',
      country: '澳大利亚',
      location: '布里斯班',
      qsRank: 43, 
      majors: ['农学', '兽医学', '工程学', '商学', '医学', '环境科学'],
      specialty: '农业科学',
      keyAdvantage: '农业和兽医学全球领先'
    },
    { 
      id: 47, 
      name: '莫纳什大学',
      country: '澳大利亚',
      location: '墨尔本',
      qsRank: 42, 
      majors: ['医学', '工程学', '商学', '教育学', '艺术设计', '药学'],
      specialty: '医学教育',
      keyAdvantage: '澳洲最大大学，国际合作广泛'
    },
    { 
      id: 48, 
      name: '香港科技大学',
      country: '香港',
      location: '香港',
      qsRank: 40, 
      majors: ['工程学', '商学', '计算机科学', '生物技术', '环境科学', '数学'],
      specialty: '科技创新',
      keyAdvantage: '年轻有活力，科技创新实力强'
    },
    { 
      id: 49, 
      name: '香港中文大学',
      country: '香港',
      location: '香港',
      qsRank: 47, 
      majors: ['商学', '医学', '工程学', '社会科学', '人文学科', '教育学'],
      specialty: '中西结合',
      keyAdvantage: '双语教学，中西文化融合'
    },
    { 
      id: 50, 
      name: '香港城市大学',
      country: '香港',
      location: '香港',
      qsRank: 70, 
      majors: ['工程学', '商学', '计算机科学', '创意媒体', '法学', '兽医学'],
      specialty: '应用研究',
      keyAdvantage: '应用研究导向，就业率高'
    },
    { 
      id: 51, 
      name: '京都大学',
      country: '日本',
      location: '京都',
      qsRank: 36, 
      majors: ['自然科学', '工程学', '医学', '经济学', '文学', '法学'],
      specialty: '基础研究',
      keyAdvantage: '日本第二古老大学，诺奖得主众多'
    },
    { 
      id: 52, 
      name: '大阪大学',
      country: '日本',
      location: '大阪',
      qsRank: 68, 
      majors: ['医学', '工程学', '经济学', '法学', '理学', '文学'],
      specialty: '医学工程',
      keyAdvantage: '关西地区顶尖大学，产学合作密切'
    },
    { 
      id: 53, 
      name: '东京工业大学',
      country: '日本',
      location: '东京',
      qsRank: 91, 
      majors: ['工程学', '理学', '计算机科学', '材料科学', '化学', '物理学'],
      specialty: '理工科',
      keyAdvantage: '日本理工科最高学府'
    },
    { 
      id: 54, 
      name: '延世大学',
      country: '韩国',
      location: '首尔',
      qsRank: 76, 
      majors: ['商学', '工程学', '医学', '社会科学', '人文学科', '国际关系'],
      specialty: '综合实力',
      keyAdvantage: '韩国SKY之一，国际化程度高'
    },
    { 
      id: 55, 
      name: '高丽大学',
      country: '韩国',
      location: '首尔',
      qsRank: 79, 
      majors: ['商学', '法学', '工程学', '医学', '政治学', '新闻学'],
      specialty: '人文社科',
      keyAdvantage: '韩国私立名校，政商界校友多'
    },
    { 
      id: 56, 
      name: '阿姆斯特丹大学',
      country: '荷兰',
      location: '阿姆斯特丹',
      qsRank: 53, 
      majors: ['商学', '经济学', '法学', '心理学', '传媒学', '计算机科学'],
      specialty: '商科经济',
      keyAdvantage: '欧洲商业中心，国际氛围浓厚'
    },
    { 
      id: 57, 
      name: '代尔夫特理工大学',
      country: '荷兰',
      location: '代尔夫特',
      qsRank: 47, 
      majors: ['工程学', '建筑学', '计算机科学', '航空航天', '土木工程', '工业设计'],
      specialty: '工程技术',
      keyAdvantage: '欧洲顶尖理工大学，工程实力强劲'
    },
    { 
      id: 58, 
      name: '巴塞罗那大学',
      country: '西班牙',
      location: '巴塞罗那',
      qsRank: 184, 
      majors: ['医学', '人文学科', '社会科学', '法学', '经济学', '心理学'],
      specialty: '人文医学',
      keyAdvantage: '西班牙最古老大学之一，历史悠久'
    },
    { 
      id: 59, 
      name: '洛桑联邦理工学院',
      country: '瑞士',
      location: '洛桑',
      qsRank: 36, 
      majors: ['工程学', '计算机科学', '建筑学', '生命科学', '基础科学', '环境科学'],
      specialty: '科技创新',
      keyAdvantage: '欧洲创新科技中心'
    },
    { 
      id: 60, 
      name: '复旦大学',
      country: '中国',
      location: '上海',
      qsRank: 50, 
      majors: ['经济学', '管理学', '医学', '新闻学', '国际关系', '计算机科学'],
      specialty: '综合实力',
      keyAdvantage: '上海滩名校，金融商业资源丰富'
    },
    { 
      id: 61, 
      name: '上海交通大学',
      country: '中国',
      location: '上海',
      qsRank: 51, 
      majors: ['工程学', '医学', '商学', '计算机科学', '材料科学', '海洋工程'],
      specialty: '工程技术',
      keyAdvantage: '工科实力强劲，产学研结合密切'
    },
    { 
      id: 62, 
      name: '浙江大学',
      country: '中国',
      location: '杭州',
      qsRank: 44, 
      majors: ['工程学', '计算机科学', '管理学', '医学', '农学', '材料科学'],
      specialty: '综合研究',
      keyAdvantage: '综合实力强，创新创业氛围浓厚'
    },
    { 
      id: 63, 
      name: '中国科学技术大学',
      country: '中国',
      location: '合肥',
      qsRank: 137, 
      majors: ['物理学', '化学', '数学', '计算机科学', '工程学', '生物学'],
      specialty: '基础科学',
      keyAdvantage: '基础科学研究实力雄厚'
    },
    { 
      id: 64, 
      name: '南京大学',
      country: '中国',
      location: '南京',
      qsRank: 133, 
      majors: ['物理学', '化学', '天文学', '地质学', '文学', '历史学'],
      specialty: '理科文科',
      keyAdvantage: '理科实力强劲，人文底蕴深厚'
    },
    { 
      id: 65, 
      name: '华中科技大学',
      country: '中国',
      location: '武汉',
      qsRank: 199, 
      majors: ['工程学', '医学', '管理学', '计算机科学', '光电信息', '机械工程'],
      specialty: '工程医学',
      keyAdvantage: '工科医科并重，科研实力强'
    },
    { 
      id: 66, 
      name: '西安交通大学',
      country: '中国',
      location: '西安',
      qsRank: 344, 
      majors: ['工程学', '管理学', '医学', '经济学', '理学', '能源工程'],
      specialty: '工程管理',
      keyAdvantage: '西部名校，工程管理实力强'
    },
    { 
      id: 67, 
      name: '同济大学',
      country: '中国',
      location: '上海',
      qsRank: 216, 
      majors: ['建筑学', '土木工程', '汽车工程', '环境工程', '城市规划', '设计学'],
      specialty: '建筑工程',
      keyAdvantage: '建筑土木全国第一，德国合作深入'
    },
    { 
      id: 68, 
      name: '北京航空航天大学',
      country: '中国',
      location: '北京',
      qsRank: 383, 
      majors: ['航空航天', '计算机科学', '机械工程', '材料科学', '电子信息', '自动化'],
      specialty: '航空航天',
      keyAdvantage: '航空航天工程全国领先'
    },
    { 
      id: 69, 
      name: '天津大学',
      country: '中国',
      location: '天津',
      qsRank: 498, 
      majors: ['化学工程', '建筑学', '水利工程', '机械工程', '材料科学', '管理学'],
      specialty: '化工建筑',
      keyAdvantage: '中国第一所现代大学，工程实力强'
    },
    { 
      id: 70, 
      name: '大连理工大学',
      country: '中国',
      location: '大连',
      qsRank: 571, 
      majors: ['化学工程', '船舶工程', '机械工程', '土木工程', '计算机科学', '管理学'],
      specialty: '化工海洋',
      keyAdvantage: '化工和海洋工程特色鲜明'
    }
    // ... existing code ...
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
    },
    { 
      id: 21, 
      name: 'California Institute of Technology',
      country: 'United States',
      location: 'California, Pasadena',
      qsRank: 6, 
      majors: ['Physics', 'Engineering', 'Computer Science', 'Mathematics', 'Chemistry', 'Biology'],
      specialty: 'Scientific Research',
      keyAdvantage: 'Nobel Prize Laureates, Top Research Institution'
    },
    { 
      id: 22, 
      name: 'Princeton University',
      country: 'United States',
      location: 'New Jersey, Princeton',
      qsRank: 16, 
      majors: ['Economics', 'Computer Science', 'Physics', 'Mathematics', 'Engineering', 'Public Policy'],
      specialty: 'Theoretical Research',
      keyAdvantage: 'Top Academic Research, Excellent Faculty-Student Ratio'
    },
    { 
      id: 23, 
      name: 'Yale University',
      country: 'United States',
      location: 'Connecticut, New Haven',
      qsRank: 18, 
      majors: ['Law', 'Medicine', 'Business', 'Humanities', 'Social Sciences', 'Arts'],
      specialty: 'Humanities & Social Sciences',
      keyAdvantage: 'Ivy League, Political Elite Cradle'
    },
    { 
      id: 24, 
      name: 'Columbia University',
      country: 'United States',
      location: 'New York',
      qsRank: 19, 
      majors: ['Journalism', 'Business', 'Medicine', 'Law', 'Engineering', 'International Affairs'],
      specialty: 'Journalism & Media',
      keyAdvantage: 'Heart of New York, Rich Media Resources'
    },
    { 
      id: 25, 
      name: 'University of Chicago',
      country: 'United States',
      location: 'Illinois, Chicago',
      qsRank: 21, 
      majors: ['Economics', 'Business', 'Law', 'Sociology', 'Political Science', 'Physics'],
      specialty: 'Economics',
      keyAdvantage: 'University with Most Nobel Prize Laureates in Economics'
    },
    { 
      id: 26, 
      name: 'University of Pennsylvania',
      country: 'United States',
      location: 'Pennsylvania, Philadelphia',
      qsRank: 15, 
      majors: ['Business', 'Medicine', 'Engineering', 'Law', 'Education', 'Social Work'],
      specialty: 'Wharton School of Business',
      keyAdvantage: 'World\'s Top Business School, Wall Street Favorite'
    },
    { 
      id: 27, 
      name: 'Cornell University',
      country: 'United States',
      location: 'New York, Ithaca',
      qsRank: 13, 
      majors: ['Engineering', 'Agriculture', 'Veterinary Medicine', 'Business', 'Hotel Administration', 'Architecture'],
      specialty: 'Applied Sciences',
      keyAdvantage: 'Leader in Hospitality Management and Agriculture'
    },
    { 
      id: 28, 
      name: 'Duke University',
      country: 'United States',
      location: 'North Carolina, Durham',
      qsRank: 23, 
      majors: ['Medicine', 'Business', 'Law', 'Engineering', 'Public Policy', 'Environmental Science'],
      specialty: 'Medical Research',
      keyAdvantage: 'Top Medical School, Beautiful Campus'
    },
    { 
      id: 29, 
      name: 'Northwestern University',
      country: 'United States',
      location: 'Illinois, Evanston',
      qsRank: 34, 
      majors: ['Journalism', 'Business', 'Engineering', 'Medicine', 'Music', 'Theater'],
      specialty: 'Journalism & Media',
      keyAdvantage: 'Top Journalism School, Excellent Performing Arts'
    },
    { 
      id: 30, 
      name: 'Johns Hopkins University',
      country: 'United States',
      location: 'Maryland, Baltimore',
      qsRank: 24, 
      majors: ['Medicine', 'Public Health', 'International Relations', 'Bioengineering', 'Nursing', 'Education'],
      specialty: 'Medical Research',
      keyAdvantage: 'Top Medical School, Close Collaboration with NIH'
    },
    { 
      id: 31, 
      name: 'Carnegie Mellon University',
      country: 'United States',
      location: 'Pennsylvania, Pittsburgh',
      qsRank: 52, 
      majors: ['Computer Science', 'Engineering', 'Business', 'Arts', 'Theater', 'Artificial Intelligence'],
      specialty: 'Computer Science',
      keyAdvantage: 'Top 3 Computer Science Program, Leading in AI Research'
    },
    { 
      id: 32, 
      name: 'New York University',
      country: 'United States',
      location: 'New York',
      qsRank: 38, 
      majors: ['Business', 'Arts', 'Law', 'Medicine', 'Film', 'Journalism'],
      specialty: 'Creative Arts',
      keyAdvantage: 'Located in the Heart of New York, Rich Internship Opportunities'
    },
    { 
      id: 33, 
      name: 'University College London',
      country: 'United Kingdom',
      location: 'London',
      qsRank: 9, 
      majors: ['Architecture', 'Engineering', 'Medicine', 'Law', 'Economics', 'Psychology'],
      specialty: 'Multidisciplinary',
      keyAdvantage: 'Central London, High Internationalization'
    },
    { 
      id: 34, 
      name: 'Imperial College London',
      country: 'United Kingdom',
      location: 'London',
      qsRank: 6, 
      majors: ['Engineering', 'Computer Science', 'Medicine', 'Business', 'Natural Sciences', 'Mathematics'],
      specialty: 'STEM Specialization',
      keyAdvantage: 'UK\'s Top STEM, Excellent Career Prospects'
    },
    { 
      id: 35, 
      name: 'London School of Economics and Political Science',
      country: 'United Kingdom',
      location: 'London',
      qsRank: 45, 
      majors: ['Economics', 'Politics', 'Sociology', 'Law', 'Accounting & Finance', 'International Relations'],
      specialty: 'Social Sciences',
      keyAdvantage: 'Leading Social Sciences, Influential Political & Business Alumni'
    },
    { 
      id: 36, 
      name: 'University of Edinburgh',
      country: 'United Kingdom',
      location: 'Edinburgh',
      qsRank: 22, 
      majors: ['Medicine', 'Engineering', 'Business', 'Law', 'Arts', 'Languages'],
      specialty: 'Traditional Elite',
      keyAdvantage: 'Oldest University in Scotland, Rich Cultural Heritage'
    },
    { 
      id: 37, 
      name: 'University of Manchester',
      country: 'United Kingdom',
      location: 'Manchester',
      qsRank: 32, 
      majors: ['Engineering', 'Computer Science', 'Business', 'Medicine', 'Materials Science', 'Chemistry'],
      specialty: 'Engineering & Technology',
      keyAdvantage: 'Birthplace of the Industrial Revolution, Strong Engineering Program'
    },
    { 
      id: 38, 
      name: 'King\'s College London',
      country: 'United Kingdom',
      location: 'London',
      qsRank: 40, 
      majors: ['Medicine', 'Law', 'Humanities', 'Social Sciences', 'Natural Sciences', 'Engineering'],
      specialty: 'Medical Law',
      keyAdvantage: 'Strong Tradition in Medicine and Law, Robust Research'
    },
    { 
      id: 39, 
      name: 'National University of Singapore',
      country: 'Singapore',
      location: 'Singapore',
      qsRank: 12, 
      majors: ['Engineering', 'Computer Science', 'Business', 'Media Studies', 'Materials Science', 'Biomedical Engineering'],
      specialty: 'Engineering & Technology',
      keyAdvantage: 'Top Asian Tech University, Beautiful Campus'
    },
    { 
      id: 40, 
      name: 'ETH Zurich',
      country: 'Switzerland',
      location: 'Zurich',
      qsRank: 7, 
      majors: ['Engineering', 'Computer Science', 'Natural Sciences', 'Mathematics', 'Architecture', 'Materials Science'],
      specialty: 'Engineering Technology',
      keyAdvantage: 'European STEM Leader, Home to Einstein'
    },
    { 
      id: 41, 
      name: 'McGill University',
      country: 'Canada',
      location: 'Quebec, Montreal',
      qsRank: 30, 
      majors: ['Medicine', 'Engineering', 'Business', 'Law', 'Literature', 'Music'],
      specialty: 'Medical Research',
      keyAdvantage: 'Canada\'s Harvard, Top Medical School'
    },
    { 
      id: 42, 
      name: 'University of British Columbia',
      country: 'Canada',
      location: 'British Columbia, Vancouver',
      qsRank: 34, 
      majors: ['Forestry', 'Engineering', 'Business', 'Medicine', 'Computer Science', 'Environmental Science'],
      specialty: 'Environmental Science',
      keyAdvantage: 'Beautiful Environment, Friendly to Asian Students'
    },
    { 
      id: 43, 
      name: 'Australian National University',
      country: 'Australia',
      location: 'Canberra',
      qsRank: 30, 
      majors: ['Politics', 'International Relations', 'Economics', 'Engineering', 'Computer Science', 'Physics'],
      specialty: 'Politics & Diplomacy',
      keyAdvantage: 'Australian National, Government Research Institutions Concentrated'
    },
    { 
      id: 44, 
      name: 'University of Sydney',
      country: 'Australia',
      location: 'Sydney',
      qsRank: 18, 
      majors: ['Business', 'Engineering', 'Medicine', 'Law', 'Architecture', 'Media Communication'],
      specialty: 'Historic Legacy',
      keyAdvantage: 'Australia\'s First University, Abundant Job Opportunities'
    },
    { 
      id: 45, 
      name: 'University of New South Wales',
      country: 'Australia',
      location: 'Sydney',
      qsRank: 19, 
      majors: ['Engineering', 'Business', 'Computer Science', 'Architecture', 'Design', 'Law'],
      specialty: 'Engineering & Business',
      keyAdvantage: 'Strong in Engineering and Business, Active in Innovation and Entrepreneurship'
    },
    { 
      id: 46, 
      name: 'University of Queensland',
      country: 'Australia',
      location: 'Brisbane',
      qsRank: 43, 
      majors: ['Agriculture', 'Veterinary Science', 'Engineering', 'Business', 'Medicine', 'Environmental Science'],
      specialty: 'Agricultural Sciences',
      keyAdvantage: 'Leader in Agriculture and Veterinary Science'
    },
    { 
      id: 47, 
      name: 'Monash University',
      country: 'Australia',
      location: 'Melbourne',
      qsRank: 42, 
      majors: ['Medicine', 'Engineering', 'Business', 'Education', 'Design', 'Pharmacy'],
      specialty: 'Medical Education',
      keyAdvantage: 'Largest University in Australia, Wide International Collaboration'
    },
    { 
      id: 48, 
      name: 'Hong Kong University of Science and Technology',
      country: 'Hong Kong',
      location: 'Hong Kong',
      qsRank: 40, 
      majors: ['Engineering', 'Business', 'Computer Science', 'Biotechnology', 'Environmental Science', 'Mathematics'],
      specialty: 'Technological Innovation',
      keyAdvantage: 'Young and Vibrant, Strong in Technological Innovation'
    },
    { 
      id: 49, 
      name: 'The Chinese University of Hong Kong',
      country: 'Hong Kong',
      location: 'Hong Kong',
      qsRank: 47, 
      majors: ['Business', 'Medicine', 'Engineering', 'Social Sciences', 'Humanities', 'Education'],
      specialty: 'East-West Fusion',
      keyAdvantage: 'Bilingual Education, East-West Cultural Fusion'
    },
    { 
      id: 50, 
      name: 'City University of Hong Kong',
      country: 'Hong Kong',
      location: 'Hong Kong',
      qsRank: 70, 
      majors: ['Engineering', 'Business', 'Computer Science', 'Creative Media', 'Law', 'Veterinary Medicine'],
      specialty: 'Applied Research',
      keyAdvantage: 'Applied Research-Oriented, High Employment Rate'
    },
    { 
      id: 51, 
      name: 'Kyoto University',
      country: 'Japan',
      location: 'Kyoto',
      qsRank: 36, 
      majors: ['Natural Sciences', 'Engineering', 'Medicine', 'Economics', 'Literature', 'Law'],
      specialty: 'Basic Research',
      keyAdvantage: 'Second Oldest University in Japan, Home to Many Nobel Laureates'
    },
    { 
      id: 52, 
      name: 'Osaka University',
      country: 'Japan',
      location: 'Osaka',
      qsRank: 68, 
      majors: ['Medicine', 'Engineering', 'Economics', 'Law', 'Science', 'Literature'],
      specialty: 'Medical Engineering',
      keyAdvantage: 'Top University in Kansai, Close Collaboration with Industry'
    },
    { 
      id: 53, 
      name: 'Tokyo Institute of Technology',
      country: 'Japan',
      location: 'Tokyo',
      qsRank: 91, 
      majors: ['Engineering', 'Science', 'Computer Science', 'Materials Science', 'Chemistry', 'Physics'],
      specialty: 'Science & Engineering',
      keyAdvantage: 'Top Science and Engineering University in Japan'
    },
    { 
      id: 54, 
      name: 'Yonsei University',
      country: 'South Korea',
      location: 'Seoul',
      qsRank: 76, 
      majors: ['Business', 'Engineering', 'Medicine', 'Social Sciences', 'Humanities', 'International Relations'],
      specialty: 'Comprehensive Strength',
      keyAdvantage: 'One of South Korea\'s SKY, High Internationalization'
    },
    { 
      id: 55, 
      name: 'Korea University',
      country: 'South Korea',
      location: 'Seoul',
      qsRank: 79, 
      majors: ['Business', 'Law', 'Engineering', 'Medicine', 'Politics', 'Journalism'],
      specialty: 'Humanities & Social Sciences',
      keyAdvantage: 'Private University with Influential Political & Business Alumni'
    },
    { 
      id: 56, 
      name: 'University of Amsterdam',
      country: 'Netherlands',
      location: 'Amsterdam',
      qsRank: 53, 
      majors: ['Business', 'Economics', 'Law', 'Psychology', 'Media Studies', 'Computer Science'],
      specialty: 'Business & Economics',
      keyAdvantage: 'European Business Hub, International Atmosphere'
    },
    { 
      id: 57, 
      name: 'Delft University of Technology',
      country: 'Netherlands',
      location: 'Delft',
      qsRank: 47, 
      majors: ['Engineering', 'Architecture', 'Computer Science', 'Aerospace Engineering', 'Civil Engineering', 'Industrial Design'],
      specialty: 'Engineering & Technology',
      keyAdvantage: 'Top Engineering University in the Netherlands, Strong in Engineering'
    },
    { 
      id: 58, 
      name: 'University of Barcelona',
      country: 'Spain',
      location: 'Barcelona',
      qsRank: 184, 
      majors: ['Medicine', 'Humanities', 'Social Sciences', 'Law', 'Economics', 'Psychology'],
      specialty: 'Medical Humanities',
      keyAdvantage: 'One of the Oldest Universities in Spain, Rich History'
    },
    { 
      id: 59, 
      name: 'EPFL',
      country: 'Switzerland',
      location: 'Lausanne',
      qsRank: 36, 
      majors: ['Engineering', 'Computer Science', 'Architecture', 'Life Sciences', 'Basic Sciences', 'Environmental Sciences'],
      specialty: 'Technological Innovation',
      keyAdvantage: 'European Innovation and Technology Hub'
    },
    { 
      id: 60, 
      name: 'Fudan University',
      country: 'China',
      location: 'Shanghai',
      qsRank: 50, 
      majors: ['Economics', 'Management', 'Medicine', 'Journalism', 'International Relations', 'Computer Science'],
      specialty: 'Comprehensive Strength',
      keyAdvantage: 'Shanghai\'s Top University, Rich Financial and Business Resources'
    },
    { 
      id: 61, 
      name: 'Tsinghua University',
      country: 'China',
      location: 'Beijing',
      qsRank: 20, 
      majors: ['Engineering', 'Computer Science', 'Economics', 'Management', 'Science', 'Architecture'],
      specialty: 'Engineering & Technology',
      keyAdvantage: 'China\'s Top STEM, Rich International Cooperation'
    },
    { 
      id: 62, 
      name: 'Zhejiang University',
      country: 'China',
      location: 'Hangzhou',
      qsRank: 44, 
      majors: ['Engineering', 'Computer Science', 'Management', 'Medicine', 'Agriculture', 'Materials Science'],
      specialty: 'Comprehensive Research',
      keyAdvantage: 'Strong Comprehensive Strength, Active in Innovation and Entrepreneurship'
    },
    { 
      id: 63, 
      name: 'University of Science and Technology of China',
      country: 'China',
      location: 'Hefei',
      qsRank: 137, 
      majors: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science', 'Engineering', 'Biology'],
      specialty: 'Basic Sciences',
      keyAdvantage: 'Strong in Basic Sciences Research'
    },
    { 
      id: 64, 
      name: 'Nanjing University',
      country: 'China',
      location: 'Nanjing',
      qsRank: 133, 
      majors: ['Physics', 'Chemistry', 'Astronomy', 'Geology', 'Literature', 'History'],
      specialty: 'Science & Humanities',
      keyAdvantage: 'Strong in Science, Rich in Humanities'
    },
    { 
      id: 65, 
      name: 'Huazhong University of Science and Technology',
      country: 'China',
      location: 'Wuhan',
      qsRank: 199, 
      majors: ['Engineering', 'Medicine', 'Management', 'Computer Science', 'Optoelectronics', 'Mechanical Engineering'],
      specialty: 'Engineering & Medicine',
      keyAdvantage: 'Strong in Engineering and Medicine, Strong Research'
    },
    { 
      id: 66, 
      name: 'Xi\'an Jiaotong University',
      country: 'China',
      location: 'Xi\'an',
      qsRank: 344, 
      majors: ['Engineering', 'Management', 'Medicine', 'Economics', 'Science', 'Energy Engineering'],
      specialty: 'Engineering & Management',
      keyAdvantage: 'Western University, Strong in Engineering and Management'
    },
    { 
      id: 67, 
      name: 'Tongji University',
      country: 'China',
      location: 'Shanghai',
      qsRank: 216, 
      majors: ['Architecture', 'Civil Engineering', 'Automobile Engineering', 'Environmental Engineering', 'Urban Planning', 'Design'],
      specialty: 'Architecture & Civil Engineering',
      keyAdvantage: 'Top in Architecture and Civil Engineering in China, Deep Cooperation with Germany'
    },
    { 
      id: 68, 
      name: 'Beijing Institute of Technology',
      country: 'China',
      location: 'Beijing',
      qsRank: 383, 
      majors: ['Aeronautics and Astronautics', 'Computer Science', 'Mechanical Engineering', 'Materials Science', 'Electronics and Information', 'Automation'],
      specialty: 'Aeronautics and Astronautics',
      keyAdvantage: 'Leading in Aeronautics and Astronautics Engineering in China'
    },
    { 
      id: 69, 
      name: 'Tianjin University',
      country: 'China',
      location: 'Tianjin',
      qsRank: 498, 
      majors: ['Chemical Engineering', 'Architecture', 'Hydraulic Engineering', 'Mechanical Engineering', 'Materials Science', 'Management'],
      specialty: 'Chemical Engineering & Architecture',
      keyAdvantage: 'First Modern University in China, Strong in Engineering'
    },
    { 
      id: 70, 
      name: 'Dalian University of Technology',
      country: 'China',
      location: 'Dalian',
      qsRank: 571, 
      majors: ['Chemical Engineering', 'Shipbuilding Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Computer Science', 'Management'],
      specialty: 'Chemical Engineering & Maritime',
      keyAdvantage: 'Distinctive in Chemical Engineering and Maritime Engineering'
    }
    // ... existing code ...
  ]
};
