const fs = require('fs');

console.log('🔧 开始修复学校数据的中英文混合问题...');

// 正确的中文学校数据 (58-90 应该是中文)
const correctZhSchools = [
  {
    "id": 58,
    "name": "香港中文大学",
    "country": "香港",
    "location": "香港",
    "qsRank": 53,
    "worldRank": 48,
    "countryRank": 3,
    "majors": [
      "商学",
      "医学",
      "工程学",
      "社会科学",
      "中文研究",
      "教育学"
    ],
    "specialty": "中西文化融合",
    "keyAdvantage": "双语教育，传承文化底蕴与创新并重"
  },
  {
    "id": 59,
    "name": "香港城市大学",
    "country": "香港",
    "location": "香港",
    "qsRank": 70,
    "worldRank": 80,
    "countryRank": 4,
    "majors": [
      "工程学",
      "商学",
      "创意媒体",
      "兽医学",
      "法学",
      "理学"
    ],
    "specialty": "应用研究",
    "keyAdvantage": "产学研一体化，创新应用导向"
  },
  {
    "id": 60,
    "name": "香港理工大学",
    "country": "香港",
    "location": "香港",
    "qsRank": 65,
    "worldRank": 92,
    "countryRank": 5,
    "majors": [
      "工程学",
      "商学",
      "设计学",
      "酒店管理",
      "健康科学",
      "建筑学"
    ],
    "specialty": "应用科学与技术",
    "keyAdvantage": "实务教育先驱，就业导向强"
  },
  {
    "id": 61,
    "name": "香港浸会大学",
    "country": "香港",
    "location": "香港",
    "qsRank": 295,
    "worldRank": 340,
    "countryRank": 6,
    "majors": [
      "传播学",
      "商学",
      "中医学",
      "文学",
      "社会科学",
      "理学"
    ],
    "specialty": "传媒与中医",
    "keyAdvantage": "传媒教育领军，中西医结合"
  },
  {
    "id": 62,
    "name": "澳门大学",
    "country": "澳门",
    "location": "澳门",
    "qsRank": 254,
    "worldRank": 358,
    "countryRank": 1,
    "majors": [
      "工程学",
      "商学",
      "法学",
      "社会科学",
      "健康科学",
      "教育学"
    ],
    "specialty": "一国两制研究",
    "keyAdvantage": "大湾区学术桥梁，多元文化汇聚"
  },
  {
    "id": 63,
    "name": "澳门科技大学",
    "country": "澳门",
    "location": "澳门",
    "qsRank": 362,
    "worldRank": 462,
    "countryRank": 2,
    "majors": [
      "信息技术",
      "商学",
      "法学",
      "中医学",
      "健康科学",
      "人文艺术"
    ],
    "specialty": "科技与中医",
    "keyAdvantage": "国际化程度高，科研创新活跃"
  },
  {
    "id": 64,
    "name": "澳门理工学院",
    "country": "澳门",
    "location": "澳门",
    "qsRank": 701,
    "worldRank": 650,
    "countryRank": 3,
    "majors": [
      "工程学",
      "商学",
      "艺术学",
      "语言学",
      "健康科学",
      "社会服务"
    ],
    "specialty": "应用型高等教育",
    "keyAdvantage": "实用技能培训，服务本地产业"
  },
  {
    "id": 65,
    "name": "奥克兰大学",
    "country": "新西兰",
    "location": "奥克兰",
    "qsRank": 68,
    "worldRank": 125,
    "countryRank": 1,
    "majors": [
      "工程学",
      "医学",
      "商学",
      "法学",
      "艺术学",
      "理学"
    ],
    "specialty": "新西兰顶尖学府",
    "keyAdvantage": "新西兰学术声誉最高，研究实力强劲"
  },
  {
    "id": 66,
    "name": "奥塔哥大学",
    "country": "新西兰",
    "location": "达尼丁",
    "qsRank": 206,
    "worldRank": 217,
    "countryRank": 2,
    "majors": [
      "医学",
      "牙科学",
      "理学",
      "商学",
      "法学",
      "人文学"
    ],
    "specialty": "医学与牙科",
    "keyAdvantage": "新西兰历史最悠久大学，医学教育传统"
  },
  {
    "id": 67,
    "name": "阿姆斯特丹大学",
    "country": "荷兰",
    "location": "阿姆斯特丹",
    "qsRank": 53,
    "worldRank": 54,
    "countryRank": 1,
    "majors": [
      "经济学",
      "法学",
      "社会科学",
      "人文学",
      "理学",
      "医学"
    ],
    "specialty": "欧洲人文社科",
    "keyAdvantage": "欧洲文化中心，国际化程度极高"
  },
  {
    "id": 68,
    "name": "代尔夫特理工大学",
    "country": "荷兰",
    "location": "代尔夫特",
    "qsRank": 47,
    "worldRank": 58,
    "countryRank": 2,
    "majors": [
      "工程学",
      "建筑学",
      "计算机科学",
      "应用科学",
      "设计学",
      "技术管理"
    ],
    "specialty": "工程与技术",
    "keyAdvantage": "欧洲工程教育领军，创新技术强校"
  },
  {
    "id": 69,
    "name": "巴塞罗那大学",
    "country": "西班牙",
    "location": "巴塞罗那",
    "qsRank": 184,
    "worldRank": 166,
    "countryRank": 1,
    "majors": [
      "医学",
      "法学",
      "经济学",
      "文学",
      "理学",
      "教育学"
    ],
    "specialty": "地中海学术传统",
    "keyAdvantage": "西班牙学术重镇，地中海文化中心"
  },
  {
    "id": 70,
    "name": "马德里自治大学",
    "country": "西班牙",
    "location": "马德里",
    "qsRank": 215,
    "worldRank": 201,
    "countryRank": 2,
    "majors": [
      "医学",
      "法学",
      "经济学",
      "理学",
      "工程学",
      "心理学"
    ],
    "specialty": "医学与法学",
    "keyAdvantage": "西班牙首都学术中心，国际交流活跃"
  },
  {
    "id": 71,
    "name": "曼彻斯特大学",
    "country": "英国",
    "location": "英格兰-曼彻斯特",
    "qsRank": 32,
    "worldRank": 51,
    "countryRank": 8,
    "majors": [
      "工程学",
      "商学",
      "医学",
      "理学",
      "社会科学",
      "计算机科学"
    ],
    "specialty": "工业革命发源地",
    "keyAdvantage": "英国传统工业重镇，工程技术领先"
  },
  {
    "id": 72,
    "name": "布里斯托大学",
    "country": "英国",
    "location": "英格兰-布里斯托",
    "qsRank": 55,
    "worldRank": 76,
    "countryRank": 9,
    "majors": [
      "工程学",
      "医学",
      "法学",
      "社会科学",
      "艺术学",
      "理学"
    ],
    "specialty": "红砖大学",
    "keyAdvantage": "英国传统名校，学术声誉优秀"
  },
  {
    "id": 73,
    "name": "华威大学",
    "country": "英国",
    "location": "英格兰-考文垂",
    "qsRank": 67,
    "worldRank": 103,
    "countryRank": 10,
    "majors": [
      "商学",
      "工程学",
      "经济学",
      "政治学",
      "数学",
      "计算机科学"
    ],
    "specialty": "商学与工程",
    "keyAdvantage": "新兴大学典范，国际知名商学院"
  },
  {
    "id": 74,
    "name": "格拉斯哥大学",
    "country": "英国",
    "location": "苏格兰-格拉斯哥",
    "qsRank": 78,
    "worldRank": 101,
    "countryRank": 11,
    "majors": [
      "医学",
      "工程学",
      "法学",
      "商学",
      "艺术学",
      "社会科学"
    ],
    "specialty": "苏格兰古老大学",
    "keyAdvantage": "苏格兰学术传统，工程医学强校"
  },
  {
    "id": 75,
    "name": "杜伦大学",
    "country": "英国",
    "location": "英格兰-杜伦",
    "qsRank": 92,
    "worldRank": 147,
    "countryRank": 12,
    "majors": [
      "商学",
      "法学",
      "工程学",
      "理学",
      "人文学",
      "社会科学"
    ],
    "specialty": "古老学院制",
    "keyAdvantage": "英格兰第三古老大学，学院传统丰富"
  },
  {
    "id": 76,
    "name": "谢菲尔德大学",
    "country": "英国",
    "location": "英格兰-谢菲尔德",
    "qsRank": 96,
    "worldRank": 121,
    "countryRank": 13,
    "majors": [
      "工程学",
      "医学",
      "建筑学",
      "新闻学",
      "商学",
      "理学"
    ],
    "specialty": "工程与材料",
    "keyAdvantage": "工程材料科学领军，工业城市特色"
  },
  {
    "id": 77,
    "name": "伯明翰大学",
    "country": "英国",
    "location": "英格兰-伯明翰",
    "qsRank": 84,
    "worldRank": 116,
    "countryRank": 14,
    "majors": [
      "医学",
      "工程学",
      "商学",
      "法学",
      "教育学",
      "理学"
    ],
    "specialty": "红砖大学典范",
    "keyAdvantage": "英国工业城市核心，多元化发展"
  },
  {
    "id": 78,
    "name": "利兹大学",
    "country": "英国",
    "location": "英格兰-利兹",
    "qsRank": 75,
    "worldRank": 127,
    "countryRank": 15,
    "majors": [
      "商学",
      "工程学",
      "医学",
      "法学",
      "艺术学",
      "传媒学"
    ],
    "specialty": "大型综合大学",
    "keyAdvantage": "英国最大大学之一，学科覆盖全面"
  },
  {
    "id": 79,
    "name": "诺丁汉大学",
    "country": "英国",
    "location": "英格兰-诺丁汉",
    "qsRank": 100,
    "worldRank": 148,
    "countryRank": 16,
    "majors": [
      "工程学",
      "医学",
      "商学",
      "法学",
      "农业学",
      "兽医学"
    ],
    "specialty": "国际发展",
    "keyAdvantage": "国际校区丰富，全球教育领军"
  },
  {
    "id": 80,
    "name": "南安普顿大学",
    "country": "英国",
    "location": "英格兰-南安普顿",
    "qsRank": 81,
    "worldRank": 97,
    "countryRank": 17,
    "majors": [
      "工程学",
      "理学",
      "医学",
      "商学",
      "计算机科学",
      "海洋科学"
    ],
    "specialty": "工程与技术",
    "keyAdvantage": "工程技术研究强劲，海洋科学专长"
  },
  {
    "id": 81,
    "name": "纽卡斯尔大学",
    "country": "英国",
    "location": "英格兰-纽卡斯尔",
    "qsRank": 122,
    "worldRank": 179,
    "countryRank": 18,
    "majors": [
      "医学",
      "工程学",
      "商学",
      "建筑学",
      "艺术学",
      "社会科学"
    ],
    "specialty": "医学与工程",
    "keyAdvantage": "传统医学研究重镇，工程实力雄厚"
  },
  {
    "id": 82,
    "name": "兰卡斯特大学",
    "country": "英国",
    "location": "英格兰-兰卡斯特",
    "qsRank": 146,
    "worldRank": 196,
    "countryRank": 19,
    "majors": [
      "商学",
      "工程学",
      "计算机科学",
      "环境科学",
      "心理学",
      "语言学"
    ],
    "specialty": "现代大学典范",
    "keyAdvantage": "新兴大学典范，学科实力均衡"
  },
  {
    "id": 83,
    "name": "约克大学",
    "country": "英国",
    "location": "英格兰-约克",
    "qsRank": 167,
    "worldRank": 199,
    "countryRank": 20,
    "majors": [
      "计算机科学",
      "心理学",
      "社会学",
      "政治学",
      "考古学",
      "语言学"
    ],
    "specialty": "人文社科",
    "keyAdvantage": "传统人文社科强校，历史名城环境"
  },
  {
    "id": 84,
    "name": "巴斯大学",
    "country": "英国",
    "location": "英格兰-巴斯",
    "qsRank": 148,
    "worldRank": 192,
    "countryRank": 21,
    "majors": [
      "工程学",
      "商学",
      "建筑学",
      "体育科学",
      "心理学",
      "计算机科学"
    ],
    "specialty": "工程与建筑",
    "keyAdvantage": "工程建筑实力强，校园环境优美"
  },
  {
    "id": 85,
    "name": "卡迪夫大学",
    "country": "英国",
    "location": "威尔士-卡迪夫",
    "qsRank": 154,
    "worldRank": 166,
    "countryRank": 22,
    "majors": [
      "新闻学",
      "建筑学",
      "工程学",
      "医学",
      "商学",
      "心理学"
    ],
    "specialty": "新闻传播",
    "keyAdvantage": "威尔士首府大学，新闻传播知名"
  },
  {
    "id": 86,
    "name": "埃克塞特大学",
    "country": "英国",
    "location": "英格兰-埃克塞特",
    "qsRank": 163,
    "worldRank": 154,
    "countryRank": 23,
    "majors": [
      "商学",
      "法学",
      "医学",
      "工程学",
      "心理学",
      "环境科学"
    ],
    "specialty": "商学与法学",
    "keyAdvantage": "英格兰西南学术中心，环境优美"
  },
  {
    "id": 87,
    "name": "莱斯特大学",
    "country": "英国",
    "location": "英格兰-莱斯特",
    "qsRank": 272,
    "worldRank": 251,
    "countryRank": 24,
    "majors": [
      "法医学",
      "医学",
      "商学",
      "工程学",
      "考古学",
      "天体物理学"
    ],
    "specialty": "法医学",
    "keyAdvantage": "世界法医学研究领军，特色学科突出"
  },
  {
    "id": 88,
    "name": "雷丁大学",
    "country": "英国",
    "location": "英格兰-雷丁",
    "qsRank": 229,
    "worldRank": 202,
    "countryRank": 25,
    "majors": [
      "商学",
      "农业学",
      "环境科学",
      "建筑环境",
      "教育学",
      "心理学"
    ],
    "specialty": "农业与环境",
    "keyAdvantage": "农业环境科学强劲，可持续发展重点"
  },
  {
    "id": 89,
    "name": "苏塞克斯大学",
    "country": "英国",
    "location": "英格兰-布莱顿",
    "qsRank": 240,
    "worldRank": 246,
    "countryRank": 26,
    "majors": [
      "国际关系",
      "发展研究",
      "商学",
      "心理学",
      "计算机科学",
      "工程学"
    ],
    "specialty": "国际发展",
    "keyAdvantage": "国际发展研究知名，社会科学强校"
  },
  {
    "id": 90,
    "name": "思克莱德大学",
    "country": "英国",
    "location": "苏格兰-格拉斯哥",
    "qsRank": 296,
    "worldRank": 325,
    "countryRank": 27,
    "majors": [
      "工程学",
      "商学",
      "理学",
      "教育学",
      "法学",
      "建筑学"
    ],
    "specialty": "应用科学与技术",
    "keyAdvantage": "苏格兰技术大学，实务教育导向"
  }
];

// 读取原始文件
const content = fs.readFileSync('data/schools.ts', 'utf-8');

// 替换中文数据部分
const beforeZh = content.substring(0, content.indexOf('"zh": [') + '"zh": ['.length);
const afterZh = content.substring(content.indexOf('], "en":'));

const newZhData = correctZhSchools.map(school => 
  '    ' + JSON.stringify(school, null, 2).replace(/\n/g, '\n    ')
).join(',\n');

const newContent = beforeZh + '\n' + newZhData + '\n  ' + afterZh;

// 写入修复后的文件
fs.writeFileSync('data/schools.ts', newContent, 'utf-8');

console.log('✅ 修复完成！');
console.log('📊 修复内容:');
console.log('- 将ID 58-90的英文条目替换为正确的中文版本');
console.log('- 确保所有中文字段使用中文内容');
console.log('- 保持ID对应关系正确');
console.log('- 国家名称统一使用中文');

console.log('\n🔍 建议验证:');
console.log('1. 运行 node verify_schools.js 检查数据完整性');
console.log('2. 运行 npm run build 确保构建成功');
console.log('3. 检查学校页面中文显示是否正常'); 