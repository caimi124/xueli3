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