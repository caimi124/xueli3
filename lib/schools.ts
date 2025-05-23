import { School } from '../types';

// 模拟学校数据库
const SCHOOLS_DATA: School[] = [
  {
    id: "harvard",
    name: "哈佛大学",
    country: "美国",
    city: "剑桥",
    ranking: 1,
    specialties: ["商业", "法律", "医学", "计算机科学"],
    accreditation: ["美国高等教育认证委员会", "全球商学院协会认证"],
    description: "哈佛大学是一所位于美国马萨诸塞州剑桥市的私立研究型大学，成立于1636年，是美国历史最悠久的高等学府。",
    website: "https://www.harvard.edu/",
    imageUrl: "/images/schools/harvard.jpg"
  },
  {
    id: "oxford",
    name: "牛津大学",
    country: "英国",
    city: "牛津",
    ranking: 2,
    specialties: ["人文学科", "社会科学", "医学", "数学"],
    accreditation: ["英国高等教育质量保证局", "英国学位授予权委员会"],
    description: "牛津大学是一所位于英国牛津的公立研究型大学，是英语世界中第二古老的大学，也是世界上现存第二古老的高等教育机构。",
    website: "https://www.ox.ac.uk/",
    imageUrl: "/images/schools/oxford.jpg"
  },
  {
    id: "tsinghua",
    name: "清华大学",
    country: "中国",
    city: "北京",
    ranking: 15,
    specialties: ["工程", "计算机科学", "建筑", "经济学"],
    accreditation: ["中国教育部", "全球工程教育协会"],
    description: "清华大学是中国著名的高等教育机构，被誉为中国最顶尖的大学之一，在工程、科学和技术领域享有全球声誉。",
    website: "https://www.tsinghua.edu.cn/",
    imageUrl: "/images/schools/tsinghua.jpg"
  },
  {
    id: "toronto",
    name: "多伦多大学",
    country: "加拿大",
    city: "多伦多",
    ranking: 18,
    specialties: ["生物医学", "人工智能", "人文学科", "商业"],
    accreditation: ["加拿大高等教育质量委员会", "安大略省高等教育质量委员会"],
    description: "多伦多大学是加拿大最大、最负盛名的研究型大学，在多项国际大学排名中名列前茅，拥有强大的研究能力和广泛的学科覆盖。",
    website: "https://www.utoronto.ca/",
    imageUrl: "/images/schools/toronto.jpg"
  },
  {
    id: "melbourne",
    name: "墨尔本大学",
    country: "澳大利亚",
    city: "墨尔本",
    ranking: 33,
    specialties: ["生物医学", "法律", "工程学", "艺术"],
    accreditation: ["澳大利亚高等教育质量和标准署", "澳大利亚学历资格框架"],
    description: "墨尔本大学是澳大利亚历史第二悠久的大学，也是该国顶尖研究型高校之一，以其卓越的教学和研究闻名于世。",
    website: "https://www.unimelb.edu.au/",
    imageUrl: "/images/schools/melbourne.jpg"
  }
];

/**
 * 获取所有学校列表
 */
export const getAllSchools = (): School[] => {
  return SCHOOLS_DATA;
};

/**
 * 根据ID获取学校详情
 */
export const getSchoolById = (id: string): School | undefined => {
  return SCHOOLS_DATA.find(school => school.id === id);
};

/**
 * 根据过滤条件筛选学校
 */
export const filterSchools = (countries: string[] = [], specialties: string[] = [], search: string = ""): School[] => {
  return SCHOOLS_DATA.filter(school => {
    // 国家筛选
    const countryMatch = countries.length === 0 || countries.includes(school.country);
    
    // 专业筛选
    const specialtyMatch = specialties.length === 0 || 
      (school.specialties && school.specialties.some(s => specialties.includes(s)));
    
    // 搜索名称
    const searchMatch = search === "" || 
      school.name.toLowerCase().includes(search.toLowerCase()) || 
      (school.description && school.description.toLowerCase().includes(search.toLowerCase()));
    
    return countryMatch && specialtyMatch && searchMatch;
  });
};

/**
 * 获取所有可用的国家列表
 */
export const getAvailableCountries = (): string[] => {
  const countries = new Set(SCHOOLS_DATA.map(school => school.country));
  return Array.from(countries);
};

/**
 * 获取所有可用的专业列表
 */
export const getAvailableSpecialties = (): string[] => {
  const specialties = new Set<string>();
  SCHOOLS_DATA.forEach(school => {
    school.specialties?.forEach(specialty => specialties.add(specialty));
  });
  return Array.from(specialties);
}; 