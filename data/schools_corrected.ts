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
  zh: [
    // 美国 - 33所学校
    { id: 1, name: '麻省理工学院 (MIT)', country: '美国', location: '马萨诸塞-波士顿', qsRank: 1, worldRank: 2, countryRank: 2, majors: ['电子工程', '计算机科学', '机械工程', '人工智能', '数据科学', '生物工程'], specialty: '科技创新与创业', keyAdvantage: '全球科技创新领导者，硅谷入口' },
    { id: 2, name: '哈佛大学', country: '美国', location: '马萨诸塞-波士顿', qsRank: 4, worldRank: 1, countryRank: 3, majors: ['法学', '医学', '商学', '公共政策', '经济学', '心理学'], specialty: '商学与医学', keyAdvantage: '全球校友网络，政商界首选' },
    { id: 3, name: '斯坦福大学', country: '美国', location: '加利福尼亚-帕拉阿图', qsRank: 6, worldRank: 3, countryRank: 4, majors: ['计算机科学', '工程学', '商业管理', '医学', '人工智能', '数据科学'], specialty: '创新与创业', keyAdvantage: '硅谷核心，创业孵化器' },
    { id: 4, name: '宾夕法尼亚大学', country: '美国', location: '宾夕法尼亚', qsRank: 11, worldRank: 14, countryRank: 10, majors: ['商学', '工程学', '医学', '法学', '计算机科学', '经济学'], specialty: '沃顿商学院', keyAdvantage: '全球顶级商学院，金融界翘楚' },
    { id: 5, name: '加州大学伯克利分校', country: '美国', location: '加利福尼亚', qsRank: 12, worldRank: 5, countryRank: 17, majors: ['计算机科学', '工程学', '商科', '法学', '公共政策', '新闻学'], specialty: '公立大学典范', keyAdvantage: '硅谷人才摇篮，创新氛围浓厚' },
    // 注意：这是简化版本，需要完整添加所有90所学校
  ],
  en: [
    // United States - 33 schools
    { id: 1, name: 'Massachusetts Institute of Technology (MIT)', country: 'United States', location: 'Massachusetts-Boston', qsRank: 1, worldRank: 2, countryRank: 2, majors: ['Electrical Engineering', 'Computer Science', 'Mechanical Engineering', 'Artificial Intelligence', 'Data Science', 'Bioengineering'], specialty: 'Technology Innovation & Entrepreneurship', keyAdvantage: 'Global technology innovation leader, Silicon Valley gateway' },
    { id: 2, name: 'Harvard University', country: 'United States', location: 'Massachusetts-Boston', qsRank: 4, worldRank: 1, countryRank: 3, majors: ['Law', 'Medicine', 'Business', 'Public Policy', 'Economics', 'Psychology'], specialty: 'Business & Medicine', keyAdvantage: 'Global alumni network, preferred by political and business leaders' },
    { id: 3, name: 'Stanford University', country: 'United States', location: 'California-Palo Alto', qsRank: 6, worldRank: 3, countryRank: 4, majors: ['Computer Science', 'Engineering', 'Business Management', 'Medicine', 'Artificial Intelligence', 'Data Science'], specialty: 'Innovation & Entrepreneurship', keyAdvantage: 'Silicon Valley core, startup incubator' },
    // 注意：这是简化版本，需要完整添加所有90所学校
  ]
}; 