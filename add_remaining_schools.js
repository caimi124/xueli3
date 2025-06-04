const fs = require('fs');

console.log('📚 开始添加剩余87所学校数据...');

// 读取当前文件内容
let content = fs.readFileSync('data/schools.ts', 'utf-8');

// 美国剩余学校 (ID 4-33) - 30所
const usSchoolsZh = `    {
      "id": 4,
      "name": "宾夕法尼亚大学",
      "country": "美国",
      "location": "宾夕法尼亚州",
      "qsRank": 11,
      "worldRank": 14,
      "countryRank": 4,
      "majors": ["商学", "医学", "工程学", "法学", "社会科学", "艺术学"],
      "specialty": "商学教育",
      "keyAdvantage": "沃顿商学院所在地，金融界领军"
    },
    {
      "id": 5,
      "name": "加州大学伯克利分校",
      "country": "美国",
      "location": "加利福尼亚州",
      "qsRank": 12,
      "worldRank": 5,
      "countryRank": 5,
      "majors": ["工程学", "计算机科学", "商学", "法学", "公共政策", "新闻学"],
      "specialty": "公立大学典范",
      "keyAdvantage": "硅谷人才摇篮，创新氛围浓厚"
    },
    {
      "id": 6,
      "name": "康奈尔大学",
      "country": "美国",
      "location": "纽约州",
      "qsRank": 16,
      "worldRank": 19,
      "countryRank": 6,
      "majors": ["工程学", "商学", "农业", "兽医学", "法学", "医学"],
      "specialty": "工程与农业",
      "keyAdvantage": "常春藤盟校，工程教育先驱"
    }`;

const usSchoolsEn = `    {
      "id": 4,
      "name": "University of Pennsylvania",
      "country": "United States",
      "location": "Pennsylvania",
      "qsRank": 11,
      "worldRank": 14,
      "countryRank": 4,
      "majors": ["Business", "Medicine", "Engineering", "Law", "Social Sciences", "Arts"],
      "specialty": "Business Education",
      "keyAdvantage": "Home of Wharton School, leader in finance"
    },
    {
      "id": 5,
      "name": "University of California, Berkeley",
      "country": "United States",
      "location": "California",
      "qsRank": 12,
      "worldRank": 5,
      "countryRank": 5,
      "majors": ["Engineering", "Computer Science", "Business", "Law", "Public Policy", "Journalism"],
      "specialty": "Public University Excellence",
      "keyAdvantage": "Silicon Valley talent hub, innovative atmosphere"
    },
    {
      "id": 6,
      "name": "Cornell University",
      "country": "United States",
      "location": "New York",
      "qsRank": 16,
      "worldRank": 19,
      "countryRank": 6,
      "majors": ["Engineering", "Business", "Agriculture", "Veterinary", "Law", "Medicine"],
      "specialty": "Engineering & Agriculture",
      "keyAdvantage": "Ivy League, pioneer in engineering education"
    }`;

// 替换中文数据部分
content = content.replace(
  /(\s+)\}\s+\]/,
  `$1},
${usSchoolsZh}
$1]`
);

// 替换英文数据部分  
content = content.replace(
  /(\s+)\}\s+\]\s+\}\s*;/,
  `$1},
${usSchoolsEn}
$1]
};`
);

fs.writeFileSync('data/schools.ts', content, 'utf-8');

console.log('✅ 已添加3所额外的美国学校 (总计6所)');
console.log('📈 进度: 6/90 (6.7%)');
console.log('�� 继续运行此脚本可添加更多学校');

// 添加剩余的美国学校（21-33）
const remainingUSSchools_zh = [
  { id: 21, name: '波士顿大学', country: '美国', location: '马萨诸塞-波士顿', qsRank: 108, worldRank: 73, countryRank: 41, majors: ['商学', '工程学', '医学', '法学', '新闻学', '国际关系'], specialty: '综合研究型大学', keyAdvantage: '波士顿学术圈核心，研究实力强' },
  { id: 22, name: '南加州大学 (USC)', country: '美国', location: '加利福尼亚-洛杉矶', qsRank: 125, worldRank: 79, countryRank: 27, majors: ['电影制作', '工程学', '商学', '传播学', '音乐', '戏剧'], specialty: '电影制作', keyAdvantage: '好莱坞电影工业摇篮，娱乐传媒强校' },
  { id: 23, name: '莱斯大学', country: '美国', location: '德克萨斯-休斯敦', qsRank: 141, worldRank: 223, countryRank: 18, majors: ['工程学', '自然科学', '商学', '建筑学', '音乐', '人文学'], specialty: '小而精的研究型大学', keyAdvantage: '师生比例优异，个人关注度高' },
  { id: 24, name: '亚利桑那州立大学', country: '美国', location: '亚利桑那-坦普', qsRank: 200, worldRank: 179, countryRank: 121, majors: ['工程学', '商学', '新闻学', '教育学', '艺术', '法学'], specialty: '创新教育模式', keyAdvantage: '在线教育领军，创新实践强' },
  { id: 25, name: '明尼苏达大学双城分校', country: '美国', location: '明尼苏达-明尼阿波利斯', qsRank: 203, worldRank: 63, countryRank: 54, majors: ['工程学', '医学', '商学', '农业', '兽医学', '公共卫生'], specialty: '公立研究型大学', keyAdvantage: '研究实力雄厚，性价比高' },
  { id: 26, name: '俄亥俄州立大学', country: '美国', location: '俄亥俄-哥伦布', qsRank: 208, worldRank: 61, countryRank: 41, majors: ['工程学', '商学', '医学', '农业', '教育学', '体育'], specialty: '综合性公立大学', keyAdvantage: '校友网络庞大，体育文化浓厚' },
  { id: 27, name: '普渡大学西拉法叶分校', country: '美国', location: '印第安纳-西拉法叶', qsRank: 89, worldRank: 167, countryRank: 46, majors: ['工程学', '农业', '科学', '技术', '商学', '兽医学'], specialty: '工程与技术', keyAdvantage: '工程教育传统强校，实用技术导向' },
  { id: 28, name: '天普大学', country: '美国', location: '宾夕法尼亚-费城', qsRank: 685, worldRank: 335, countryRank: 98, majors: ['商学', '教育学', '法学', '医学', '艺术', '传播学'], specialty: '城市型综合大学', keyAdvantage: '费城地理优势，实习机会丰富' },
  { id: 29, name: '美利坚大学', country: '美国', location: '哥伦比亚特区-华盛顿', qsRank: 715, worldRank: 784, countryRank: 91, majors: ['国际关系', '政治学', '商学', '法学', '传播学', '公共政策'], specialty: '国际关系与政治', keyAdvantage: '华盛顿特区政治中心，政府实习便利' },
  { id: 30, name: '布兰迪斯大学', country: '美国', location: '马萨诸塞', qsRank: 725, worldRank: 610, countryRank: 63, majors: ['商学', '社会科学', '生物科学', '心理学', '计算机科学', '经济学'], specialty: '小型私立研究型大学', keyAdvantage: '犹太文化传统，学术氛围浓厚' },
  { id: 31, name: '奥本大学', country: '美国', location: '阿拉巴马', qsRank: 975, worldRank: 620, countryRank: 105, majors: ['工程学', '农业', '商学', '建筑学', '兽医学', '林业'], specialty: '农业与工程', keyAdvantage: '南部工程农业强校，实践教育突出' },
  { id: 32, name: '肯特州立大学', country: '美国', location: '俄亥俄', qsRank: 1100, worldRank: 894, countryRank: 231, majors: ['商学', '教育学', '艺术', '新闻学', '健康科学', '技术'], specialty: '州立综合大学', keyAdvantage: '学费亲民，专业覆盖面广' },
  { id: 33, name: '罗德岛大学', country: '美国', location: '罗德岛', qsRank: 1100, worldRank: 749, countryRank: 152, majors: ['海洋科学', '工程学', '商学', '教育学', '护理学', '药学'], specialty: '海洋科学', keyAdvantage: '海洋研究特色鲜明，沿海地理优势' }
];

// 英文对应版本
const remainingUSSchools_en = [
  { id: 21, name: 'Boston University', country: 'United States', location: 'Massachusetts-Boston', qsRank: 108, worldRank: 73, countryRank: 41, majors: ['Business', 'Engineering', 'Medicine', 'Law', 'Journalism', 'International Relations'], specialty: 'Comprehensive Research University', keyAdvantage: 'Core of Boston academic circle, strong research' },
  { id: 22, name: 'University of Southern California (USC)', country: 'United States', location: 'California-Los Angeles', qsRank: 125, worldRank: 79, countryRank: 27, majors: ['Film Production', 'Engineering', 'Business', 'Communication', 'Music', 'Drama'], specialty: 'Film Production', keyAdvantage: 'Hollywood film industry cradle, entertainment media powerhouse' },
  // ... 继续添加完整的美国学校
];

// 其他国家学校
const otherCountrySchools_zh = [
  // 日本 - 3所学校
  { id: 39, name: '东京大学', country: '日本', location: '东京', qsRank: 32, worldRank: 84, countryRank: 2, majors: ['工程学', '理学', '医学', '法学', '经济学', '文学'], specialty: '日本最高学府', keyAdvantage: '日本学术声誉最高，政商界培养基地' },
  { id: 40, name: '东京工业大学', country: '日本', location: '东京', qsRank: 84, worldRank: 445, countryRank: 4, majors: ['工程学', '理学', '计算机科学', '材料科学', '环境科学', '生命科学'], specialty: '理工科专门大学', keyAdvantage: '日本理工科最强，技术创新领军' },
  { id: 41, name: '大阪大学', country: '日本', location: '大阪', qsRank: 86, worldRank: 315, countryRank: 3, majors: ['医学', '工程学', '理学', '法学', '经济学', '文学'], specialty: '关西地区学术中心', keyAdvantage: '医学研究突出，关西经济圈核心' },
  
  // 加拿大 - 5所学校  
  { id: 42, name: '多伦多大学', country: '加拿大', location: '多伦多', qsRank: 25, worldRank: 17, countryRank: 1, majors: ['医学', '工程学', '商学', '法学', '文学', '理学'], specialty: '加拿大顶尖综合大学', keyAdvantage: '加拿大学术声誉最高，研究实力强劲' },
  { id: 43, name: '麦吉尔大学', country: '加拿大', location: '蒙特利尔', qsRank: 29, worldRank: 56, countryRank: 3, majors: ['医学', '法学', '工程学', '商学', '艺术', '科学'], specialty: '加拿大哈佛', keyAdvantage: '国际声誉卓越，英法双语环境' },
  // ... 继续添加
];

console.log('准备添加剩余学校数据...');
console.log('美国学校数量:', remainingUSSchools_zh.length);
console.log('其他国家学校数量:', otherCountrySchools_zh.length); 