// 学校数据类型定义
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

// 主要的学校数据导出
export const schoolsData = {
  zh: [
    // 美国 - 33所学校
    { 
      id: 1, 
      name: '麻省理工学院 (MIT)',
      country: '美国',
      location: '马萨诸塞州-波士顿',
      qsRank: 1,
      worldRank: 2,
      countryRank: 2,
      majors: ['电子工程', '计算机科学', '机械工程', '人工智能', '数据科学', '生物工程'],
      specialty: '科技创新与创业',
      keyAdvantage: '全球科技创新领导者，硅谷入口'
    },
    { 
      id: 2, 
      name: '哈佛大学',
      country: '美国',
      location: '马萨诸塞州-波士顿',
      qsRank: 4,
      worldRank: 1,
      countryRank: 3,
      majors: ['法学', '医学', '商学', '公共政策', '经济学', '心理学'],
      specialty: '商学与医学',
      keyAdvantage: '全球校友网络，政商界首选'
    },
    { 
      id: 3, 
      name: '斯坦福大学',
      country: '美国',
      location: '加利福尼亚州-帕洛阿尔托',
      qsRank: 6,
      worldRank: 3,
      countryRank: 4,
      majors: ['计算机科学', '工程学', '商业管理', '医学', '人工智能', '数据科学'],
      specialty: '创新与创业',
      keyAdvantage: '硅谷核心，创业孵化器'
    }
    // 注意：这是简化版本，需要添加完整的90所学校数据
  ],
  en: [
    // United States - 33 schools
    { 
      id: 1, 
      name: 'Massachusetts Institute of Technology (MIT)',
      country: 'United States',
      location: 'Massachusetts-Boston',
      qsRank: 1,
      worldRank: 2,
      countryRank: 2,
      majors: ['Electrical Engineering', 'Computer Science', 'Mechanical Engineering', 'Artificial Intelligence', 'Data Science', 'Bioengineering'],
      specialty: 'Technology Innovation & Entrepreneurship',
      keyAdvantage: 'Global technology innovation leader, Silicon Valley gateway'
    },
    { 
      id: 2, 
      name: 'Harvard University',
      country: 'United States',
      location: 'Massachusetts-Boston',
      qsRank: 4,
      worldRank: 1,
      countryRank: 3,
      majors: ['Law', 'Medicine', 'Business', 'Public Policy', 'Economics', 'Psychology'],
      specialty: 'Business & Medicine',
      keyAdvantage: 'Global alumni network, preferred by political and business leaders'
    },
    { 
      id: 3, 
      name: 'Stanford University',
      country: 'United States',
      location: 'California-Palo Alto',
      qsRank: 6,
      worldRank: 3,
      countryRank: 4,
      majors: ['Computer Science', 'Engineering', 'Business Management', 'Medicine', 'Artificial Intelligence', 'Data Science'],
      specialty: 'Innovation & Entrepreneurship',
      keyAdvantage: 'Silicon Valley core, startup incubator'
    }
    // 注意：这是简化版本，需要添加完整的90所学校数据
  ]
}; 