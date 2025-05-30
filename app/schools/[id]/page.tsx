'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface School {
  id: number;
  name: string;
  country: string;
  location: string;
  qsRank: number | null;
  worldRank: number | null;
  countryRank: number | null;
  documents: string[];
  majors: string[];
  description: string;
  degrees: string[];
  tuition: string;
  duration: string;
  language: string;
}

// Complete school data for detail pages
const schools: School[] = [
  // 美国学校
  { id: 1, name: '麻省理工学院 (MIT)', country: '美国', location: '马萨诸塞-波士顿', qsRank: 1, worldRank: 2, countryRank: 2, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['计算机科学', '电子工程', '机械工程', '物理学', '数学', '生物工程'], description: '麻省理工学院是世界顶尖的理工科大学，以其在科学、技术、工程等领域的卓越成就而闻名。学院拥有强大的研究实力和创新精神，培养了无数科技界的领军人物。', degrees: ['学士学位', '硕士学位', '博士学位', '博士后'], tuition: '$58,240/年', duration: '本科4年，硕士1-2年，博士4-7年', language: '英语' },
  { id: 2, name: '哈佛大学', country: '美国', location: '马萨诸塞-波士顿', qsRank: 4, worldRank: 1, countryRank: 3, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['商业管理', '经济学', '医学', '法学', '心理学', '生物学'], description: '哈佛大学是美国最古老的高等教育机构之一，以其卓越的学术声誉和杰出的校友网络而享誉全球。学校在各个学科领域都保持着世界领先水平。', degrees: ['学士学位', '硕士学位', '博士学位'], tuition: '$56,550/年', duration: '本科4年，硕士1-2年，博士4-7年', language: '英语' },
  { id: 3, name: '斯坦福大学', country: '美国', location: '加利福尼亚-帕拉阿图', qsRank: 6, worldRank: 3, countryRank: 4, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['计算机科学', '工程学', '商业管理', '医学', '人文学科', '社会科学'], description: '斯坦福大学位于硅谷核心地带，是创新和创业精神的代表。学校在技术创新、商业发展等方面具有独特优势，培养了众多科技企业家。', degrees: ['学士学位', '硕士学位', '博士学位'], tuition: '$61,731/年', duration: '本科4年，硕士1-2年，博士4-7年', language: '英语' },
  
  // 其他学校使用通用模板数据
  { id: 4, name: '宾夕法尼亚大学', country: '美国', location: '宾夕法尼亚', qsRank: 11, worldRank: 14, countryRank: 10, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['商业管理', '工程学', '医学', '护理学', '社会工作', '教育学'], description: '宾夕法尼亚大学是著名的常春藤盟校之一，以其优秀的商学院、医学院和工程学院而闻名。学校致力于培养具有全球视野的领导者。', degrees: ['学士学位', '硕士学位', '博士学位'], tuition: '$60,042/年', duration: '本科4年，硕士1-2年，博士4-7年', language: '英语' },
  { id: 25, name: '帝国理工学院', country: '英国', location: '英格兰-伦敦', qsRank: 2, worldRank: 12, countryRank: 5, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '自然科学', '医学', '商业管理', '计算机科学', '材料科学'], description: '帝国理工学院是世界顶尖的科学、工程、医学和商学院，专注于科学、技术、工程、医学和商业的教学和研究。', degrees: ['学士学位', '硕士学位', '博士学位'], tuition: '£35,100/年', duration: '本科3年，硕士1年，博士3-4年', language: '英语' },
  { id: 41, name: '新加坡国立大学 (NUS)', country: '新加坡', location: '新加坡', qsRank: 8, worldRank: 22, countryRank: 1, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '商业管理', '计算机科学', '医学', '法学', '建筑学'], description: '新加坡国立大学是新加坡首屈一指的世界级顶尖大学，为AACSB和EQUIS认证成员，亚洲大学联盟创始成员。', degrees: ['学士学位', '硕士学位', '博士学位'], tuition: 'S$17,550/年', duration: '本科4年，硕士1-2年，博士3-5年', language: '英语' },
];

// 为不在详细数据中的学校生成默认数据
function getSchoolData(id: number): School | null {
  // 先查找详细数据
  const detailedSchool = schools.find(s => s.id === id);
  if (detailedSchool) {
    return detailedSchool;
  }

  // 如果没有详细数据，根据ID生成默认数据
  const schoolNames: { [key: number]: { name: string; country: string; location: string; qsRank: number | null; worldRank: number | null; countryRank: number | null; majors: string[] } } = {
    5: { name: '加州大学伯克利分校', country: '美国', location: '加利福尼亚', qsRank: 12, worldRank: 5, countryRank: 17, majors: ['计算机科学', '工程学', '商业管理', '经济学', '心理学', '政治学'] },
    6: { name: '康奈尔大学', country: '美国', location: '纽约-纽约市', qsRank: 16, worldRank: 19, countryRank: 11, majors: ['工程学', '农业科学', '建筑学', '商业管理', '兽医学', '酒店管理'] },
    26: { name: '牛津大学', country: '英国', location: '英格兰-牛津', qsRank: 3, worldRank: 4, countryRank: 2, majors: ['人文学科', '社会科学', '自然科学', '医学', '法学', '商业管理'] },
    27: { name: '剑桥大学', country: '英国', location: '英格兰-剑桥', qsRank: 5, worldRank: 6, countryRank: 1, majors: ['数学', '自然科学', '工程学', '医学', '法学', '经济学'] },
    42: { name: '南洋理工大学 (NTU)', country: '新加坡', location: '新加坡', qsRank: 15, worldRank: 27, countryRank: 2, majors: ['工程学', '商业管理', '计算机科学', '材料科学', '生物科学', '教育学'] },
    43: { name: '墨尔本大学', country: '澳大利亚', location: '维多利亚-墨尔本', qsRank: 13, worldRank: 27, countryRank: 1, majors: ['医学', '法学', '商业管理', '工程学', '建筑学', '教育学'] },
    48: { name: '多伦多大学', country: '加拿大', location: '多伦多', qsRank: 25, worldRank: 17, countryRank: 1, majors: ['医学', '工程学', '商业管理', '法学', '计算机科学', '文理科学'] },
    53: { name: '东京大学', country: '日本', location: '东京', qsRank: 32, worldRank: 84, countryRank: 2, majors: ['法学', '医学', '工程学', '经济学', '文学', '理学'] },
    56: { name: '香港大学 (HKU)', country: '香港', location: '香港-中西区', qsRank: 17, worldRank: 44, countryRank: 1, majors: ['医学', '法学', '商业管理', '工程学', '建筑学', '社会科学'] },
    67: { name: '阿姆斯特丹大学', country: '荷兰', location: '阿姆斯特丹', qsRank: 55, worldRank: 33, countryRank: 1, majors: ['社会科学', '人文学科', '经济学', '法学', '医学', '自然科学'] },
    69: { name: '巴塞罗那大学', country: '西班牙', location: '巴塞罗那', qsRank: 165, worldRank: 79, countryRank: 1, majors: ['医学', '法学', '经济学', '教育学', '心理学', '艺术学'] },
  };

  const schoolInfo = schoolNames[id];
  if (!schoolInfo) {
    return null;
  }

  // 根据国家生成默认信息
  const countryDefaults: { [key: string]: { description: string; tuition: string; duration: string; language: string; degrees: string[] } } = {
    '美国': {
      description: '这是一所享有盛誉的美国高等学府，在教学和研究方面都有着卓越的表现，为学生提供世界一流的教育体验。',
      tuition: '$55,000/年',
      duration: '本科4年，硕士1-2年，博士4-7年',
      language: '英语',
      degrees: ['学士学位', '硕士学位', '博士学位']
    },
    '英国': {
      description: '这是一所历史悠久的英国著名大学，以其优秀的教学质量和学术研究而闻名世界，培养了众多杰出人才。',
      tuition: '£35,000/年',
      duration: '本科3年，硕士1年，博士3-4年',
      language: '英语',
      degrees: ['学士学位', '硕士学位', '博士学位']
    },
    '新加坡': {
      description: '这是一所世界著名的新加坡大学，以其卓越的教学和研究而享誉国际，为学生提供优质的教育环境。',
      tuition: 'S$20,000/年',
      duration: '本科4年，硕士1-2年，博士3-5年',
      language: '英语',
      degrees: ['学士学位', '硕士学位', '博士学位']
    },
    '澳大利亚': {
      description: '这是一所著名的澳大利亚大学，以其高质量的教育和研究而享誉国际，为学生提供丰富的学习机会。',
      tuition: 'A$40,000/年',
      duration: '本科3年，硕士1-2年，博士3-4年',
      language: '英语',
      degrees: ['学士学位', '硕士学位', '博士学位']
    },
    '加拿大': {
      description: '这是一所优秀的加拿大大学，以其多元化的学术环境和高质量的教育而闻名，吸引着来自世界各地的学生。',
      tuition: 'C$35,000/年',
      duration: '本科4年，硕士1-2年，博士4-6年',
      language: '英语',
      degrees: ['学士学位', '硕士学位', '博士学位']
    },
    '日本': {
      description: '这是一所杰出的日本大学，在亚洲地区享有很高的声誉，致力于为学生提供优质的教育和研究机会。',
      tuition: '¥500,000/年',
      duration: '本科4年，硕士2年，博士3年',
      language: '日语/英语',
      degrees: ['学士学位', '硕士学位', '博士学位']
    },
    '香港': {
      description: '这是一所著名的香港高等学府，结合了东西方教育的优势，为学生提供国际化的学习环境。',
      tuition: 'HK$145,000/年',
      duration: '本科4年，硕士1-2年，博士3-4年',
      language: '英语',
      degrees: ['学士学位', '硕士学位', '博士学位']
    },
    '荷兰': {
      description: '这是一所优秀的荷兰大学，以其开放的学术环境和创新的教学方法而闻名，吸引着国际学生。',
      tuition: '€8,000/年',
      duration: '本科3年，硕士1-2年，博士4年',
      language: '荷兰语/英语',
      degrees: ['学士学位', '硕士学位', '博士学位']
    },
    '西班牙': {
      description: '这是一所历史悠久的西班牙大学，以其深厚的文化底蕴和优质的教育而享有盛誉。',
      tuition: '€5,000/年',
      duration: '本科4年，硕士1-2年，博士3-4年',
      language: '西班牙语/英语',
      degrees: ['学士学位', '硕士学位', '博士学位']
    }
  };

  const defaults = countryDefaults[schoolInfo.country] || countryDefaults['美国'];

  return {
    id,
    ...schoolInfo,
    documents: ['毕业证', '学位证', '成绩单', '认证报告'],
    ...defaults
  };
}

interface SchoolDetailPageProps {
  params: {
    id: string;
  };
}

const getSchoolLogo = (country: string, schoolName: string) => {
  if (country === '美国') {
    if (schoolName.includes('MIT') || schoolName.includes('麻省理工')) return '🔬';
    if (schoolName.includes('哈佛')) return '🏛️';
    if (schoolName.includes('斯坦福')) return '🌲';
    if (schoolName.includes('普林斯顿')) return '🦁';
    if (schoolName.includes('耶鲁')) return '🗝️';
    if (schoolName.includes('哥伦比亚')) return '👑';
    if (schoolName.includes('芝加哥')) return '🏢';
    if (schoolName.includes('宾夕法尼亚')) return '🔔';
    if (schoolName.includes('康奈尔')) return '🌿';
    if (schoolName.includes('加州大学')) return '🌞';
    if (schoolName.includes('UCLA')) return '🎬';
    if (schoolName.includes('USC')) return '⚔️';
    if (schoolName.includes('纽约大学') || schoolName.includes('NYU')) return '🗽';
    if (schoolName.includes('密歇根')) return '🏈';
    if (schoolName.includes('西北大学')) return '🎭';
    if (schoolName.includes('卡内基梅隆')) return '💻';
    if (schoolName.includes('杜克')) return '👑';
    if (schoolName.includes('波士顿')) return '🦞';
    if (schoolName.includes('华盛顿大学')) return '🌲';
    return '🗽';
  }
  if (country === '英国') {
    if (schoolName.includes('牛津')) return '📚';
    if (schoolName.includes('剑桥')) return '⚖️';
    if (schoolName.includes('帝国理工')) return '🔧';
    if (schoolName.includes('UCL') || schoolName.includes('伦敦大学学院')) return '🏛️';
    if (schoolName.includes('LSE') || schoolName.includes('伦敦政治经济')) return '💼';
    if (schoolName.includes('KCL') || schoolName.includes('伦敦国王')) return '👑';
    if (schoolName.includes('爱丁堡')) return '🏰';
    if (schoolName.includes('曼彻斯特')) return '⚽';
    if (schoolName.includes('华威')) return '⚔️';
    if (schoolName.includes('布里斯托')) return '🌉';
    return '👑';
  }
  if (country === '新加坡') {
    if (schoolName.includes('NUS') || schoolName.includes('国立大学')) return '🦁';
    if (schoolName.includes('NTU') || schoolName.includes('南洋理工')) return '🔬';
    return '🦁';
  }
  if (country === '澳大利亚') {
    if (schoolName.includes('墨尔本')) return '🦘';
    if (schoolName.includes('悉尼')) return '🏖️';
    if (schoolName.includes('新南威尔士')) return '⚡';
    if (schoolName.includes('澳大利亚国立')) return '🏛️';
    if (schoolName.includes('莫纳什')) return '🔬';
    return '🦘';
  }
  if (country === '加拿大') {
    if (schoolName.includes('多伦多')) return '🍁';
    if (schoolName.includes('麦吉尔')) return '🏔️';
    if (schoolName.includes('UBC') || schoolName.includes('英属哥伦比亚')) return '🌲';
    return '🍁';
  }
  if (country === '日本') {
    if (schoolName.includes('东京大学')) return '🗾';
    if (schoolName.includes('东京工业')) return '🔧';
    if (schoolName.includes('大阪')) return '🏯';
    return '🗾';
  }
  if (country === '香港') {
    if (schoolName.includes('HKU') || schoolName.includes('香港大学')) return '🏙️';
    if (schoolName.includes('CUHK') || schoolName.includes('中文大学')) return '📚';
    if (schoolName.includes('HKUST') || schoolName.includes('科技大学')) return '🔬';
    if (schoolName.includes('理工大学')) return '🔧';
    if (schoolName.includes('城市大学')) return '🏢';
    if (schoolName.includes('浸会大学')) return '⛪';
    return '🏙️';
  }
  if (country === '新西兰') {
    if (schoolName.includes('奥克兰')) return '🥝';
    if (schoolName.includes('林肯')) return '🌿';
    return '🥝';
  }
  if (country === '澳门') {
    if (schoolName.includes('澳门大学')) return '🎰';
    if (schoolName.includes('科技大学')) return '🔬';
    if (schoolName.includes('城市大学')) return '🏢';
    return '🎰';
  }
  if (country === '荷兰') {
    if (schoolName.includes('阿姆斯特丹')) return '🌷';
    if (schoolName.includes('莱顿')) return '🧪';
    return '🌷';
  }
  if (country === '西班牙') {
    if (schoolName.includes('巴塞罗那')) return '🌞';
    if (schoolName.includes('瓦伦西亚')) return '🍊';
    return '🌞';
  }
  return '🎓';
};

const getCountryGradient = (country: string) => {
  const gradients: Record<string, string> = {
    '美国': 'from-red-50 to-blue-50',
    '英国': 'from-blue-50 to-red-50',
    '新加坡': 'from-red-50 to-white',
    '澳大利亚': 'from-green-50 to-yellow-50',
    '加拿大': 'from-red-50 to-red-50',
    '日本': 'from-red-50 to-white',
    '香港': 'from-red-50 to-white',
    '新西兰': 'from-blue-50 to-red-50',
    '澳门': 'from-green-50 to-red-50',
    '荷兰': 'from-orange-50 to-blue-50',
    '西班牙': 'from-red-50 to-yellow-50'
  };
  return gradients[country] || 'from-blue-50 to-blue-100';
};

export default function SchoolDetailPage({ params }: SchoolDetailPageProps) {
  const schoolId = parseInt(params.id);
  const school = getSchoolData(schoolId);

  if (!school) {
    notFound();
  }

  const getCountryFlag = (country: string) => {
    const flags: Record<string, string> = {
      '美国': '🇺🇸',
      '英国': '🇬🇧',
      '澳大利亚': '🇦🇺',
      '加拿大': '🇨🇦',
      '新加坡': '🇸🇬',
      '日本': '🇯🇵',
      '香港': '🇭🇰',
      '新西兰': '🇳🇿',
      '澳门': '🇲🇴',
      '荷兰': '🇳🇱',
      '西班牙': '🇪🇸'
    };
    return flags[country] || '🌍';
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link className="flex items-center" href="/">
              <span className="text-xl font-bold text-blue-600">Acaboost</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/">
                首页
              </Link>
              <Link className="text-sm font-medium transition-colors text-blue-600" href="/schools">
                院校数据库
              </Link>
              <Link className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="/guide">快速领证服务</Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/blog">
                博客
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/contact">
                联系我们
              </Link>
              <Link 
                href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
              >
                WhatsApp咨询
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {/* Breadcrumb */}
        <section className="py-4 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm">
              <Link href="/" className="text-blue-600 hover:text-blue-800">首页</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link href="/schools" className="text-blue-600 hover:text-blue-800">院校数据库</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-700">{school.name}</span>
            </nav>
          </div>
        </section>

        {/* School Header */}
        <section className="py-8 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{getCountryFlag(school.country)}</span>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{school.name}</h1>
                    <p className="text-blue-100 text-lg">{school.country} · {school.location}</p>
                  </div>
                </div>
                
                {/* Rankings */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {school.qsRank && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-sm text-blue-100">QS世界排名</div>
                      <div className="text-2xl font-bold text-yellow-300">#{school.qsRank}</div>
                    </div>
                  )}
                  {school.worldRank && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-sm text-blue-100">世界综合排名</div>
                      <div className="text-2xl font-bold text-green-300">#{school.worldRank}</div>
                    </div>
                  )}
                  {school.countryRank && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-sm text-blue-100">国内排名</div>
                      <div className="text-2xl font-bold text-orange-300">#{school.countryRank}</div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="text-center">
                <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${getCountryGradient(school.country)} flex items-center justify-center mx-auto mb-4 border border-gray-200 shadow-sm`}>
                  <span className="text-6xl">{getSchoolLogo(school.country, school.name)}</span>
                </div>
                <Link 
                  href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  <span className="mr-2">📱</span>
                  立即咨询认证
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* School Information */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* University Description */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-4">🏫 大学介绍</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {school.description} <br />
                    <span className="font-semibold text-blue-700 block mt-2">学历含金量高，国际认可度强，适用于工作背景认证、移民申请、职业提升等多种场景。</span>
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1">📍 所在地区</h3>
                      <p className="text-gray-700 font-medium">{school.location}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1">⏱️ 出证周期参考</h3>
                      <p className="text-gray-700 font-medium">约7–15个工作日</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1">🔒 认证支持</h3>
                      <p className="text-gray-700 font-medium">支持海牙认证、教育局认证、WES等权威认证</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1">📞 专属顾问服务</h3>
                      <p className="text-gray-700 font-medium">一对一顾问全程协助，支持定制个性化方案</p>
                    </div>
                  </div>
                </div>

                {/* Popular Majors */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-4">🎓 热门专业</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {school.majors.map((major, index) => (
                      <div key={index} className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-center hover:bg-blue-100 transition-colors">
                        <span className="text-blue-700 font-medium">{major}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <span className="font-semibold">💡 提示：</span> 
                      以上专业均支持学历认证服务，如需了解具体专业的认证要求和流程，请联系我们的专业顾问。
                    </p>
                  </div>
                </div>

                {/* Available Degrees */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-4">📜 可获得学历</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {school.degrees.map((degree, index) => (
                      <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                        <div className="text-2xl mr-3">🎓</div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{degree}</h3>
                          <p className="text-sm text-gray-600">全球认可 · 可认证</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                {/* Available Documents */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <h3 className="text-lg font-bold mb-4">📋 可认证材料</h3>
                  <div className="space-y-2">
                    {school.documents.map((doc, index) => (
                      <div key={index} className="flex items-center p-2 bg-green-50 rounded-lg">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Box */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold mb-3">🚀 快速认证通道</h3>
                  <ul className="text-sm space-y-2 mb-4">
                    <li className="flex items-center">
                      <span className="mr-2">⚡</span>
                      7天内完成认证
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✅</span>
                      100%真实可查
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">🌐</span>
                      全球官方认可
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">🔒</span>
                      安全保密
                    </li>
                  </ul>
                  <Link 
                    href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                  >
                    立即开始认证
                  </Link>
                </div>

                {/* FAQ */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-bold mb-4">❓ 常见问题</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800 mb-1">认证周期多久？</h4>
                      <p className="text-sm text-gray-600">一般7-15个工作日，加急3-5天</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800 mb-1">材料是否真实？</h4>
                      <p className="text-sm text-gray-600">100%真实可查，支持官方验证</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800 mb-1">费用如何收取？</h4>
                      <p className="text-sm text-gray-600">透明定价，认证成功后付款</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">🎯 准备开始您的学历认证之旅？</h2>
            <p className="text-gray-600 mb-8">
              我们的专业顾问团队将为您提供一对一的认证方案，确保您快速获得真实可查的{school.name}学历证明
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-semibold mb-2">专业咨询</h3>
                <p className="text-sm text-gray-600">一对一专业顾问咨询</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold mb-2">快速认证</h3>
                <p className="text-sm text-gray-600">7天内完成认证流程</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-3">🔐</div>
                <h3 className="font-semibold mb-2">安全保障</h3>
                <p className="text-sm text-gray-600">100%真实可查保证</p>
              </div>
            </div>
            <Link 
              href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <span className="mr-3">📱</span>
              WhatsApp 顾问咨询
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">关于我们</h3>
              <p className="text-gray-400">专业提供全球学历认证服务，7天快速交付，确保100%真实可查。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><Link className="text-gray-400 hover:text-white transition-colors" href="/">首页</Link></li>
                <li><Link className="text-gray-400 hover:text-white transition-colors" href="/schools">学校资源</Link></li>
                <li><Link className="text-gray-400 hover:text-white transition-colors" href="/contact">联系我们</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系方式</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    WhatsApp: +1 (234) 567-890
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link href="mailto:contact@acaboost.com" className="hover:text-white transition-colors">
                    Email: contact@acaboost.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Acaboost. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Link 
        href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
        </svg>
      </Link>
    </div>
  );
} 