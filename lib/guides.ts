import { Post } from '../types';

// 国家认证指南
interface CountryGuide {
  id: string;
  country: string;
  flag: string; // emoji flag
  coverImage: string;
  content: {
    overview: string;
    requirements: string[];
    process: string[];
    timeframe: string;
    costs: string;
    tips: string[];
    resources: {
      title: string;
      url: string;
    }[];
  }
}

// 模拟国家认证指南数据
const countryGuides: CountryGuide[] = [
  {
    id: 'usa',
    country: '美国',
    flag: '🇺🇸',
    coverImage: '/images/guides/usa.jpg',
    content: {
      overview: '美国是全球留学的热门目的地之一，拥有完善的学历认证体系。美国的学历认证通常需要通过专业的第三方评估机构进行，如WES（World Education Services）或ECE（Educational Credential Evaluators）等。',
      requirements: [
        '完整的学位证书和成绩单原件',
        '所有非英文文件的认证翻译',
        '学校官方密封的成绩单（部分机构要求）',
        '个人身份证明文件',
        '部分专业可能需要提供课程大纲或学分证明'
      ],
      process: [
        '选择合适的评估机构（如WES、ECE）',
        '在评估机构官网创建账户并提交申请',
        '支付评估费用',
        '按要求提交所需文件',
        '等待评估完成',
        '获取评估报告'
      ],
      timeframe: '标准评估通常需要7-20个工作日，加急服务可缩短至3-5个工作日。',
      costs: '基本评估费用约200-400美元，具体取决于评估类型和选择的机构。加急服务需额外付费。',
      tips: [
        '提前3-6个月开始准备认证流程',
        '确保所有文件的翻译符合评估机构的要求',
        '保持文件的一致性，特别是姓名拼写',
        '选择评估类型时，考虑未来用途（就业、继续教育等）',
        '保留所有原始文件的副本'
      ],
      resources: [
        {
          title: 'World Education Services (WES)',
          url: 'https://www.wes.org/'
        },
        {
          title: 'Educational Credential Evaluators (ECE)',
          url: 'https://www.ece.org/'
        },
        {
          title: 'National Association of Credential Evaluation Services',
          url: 'https://www.naces.org/'
        }
      ]
    }
  },
  {
    id: 'uk',
    country: '英国',
    flag: '🇬🇧',
    coverImage: '/images/guides/uk.jpg',
    content: {
      overview: '英国的学历认证主要通过UK ENIC（前身为UK NARIC）进行，这是英国官方指定的国家学历认证机构。UK ENIC提供资格比较服务，帮助海外学历持有者在英国的学历等级认定。',
      requirements: [
        '学历证书和成绩单的扫描件',
        '所有非英文文件的认证翻译',
        '个人身份证明文件',
        '完整的申请表格'
      ],
      process: [
        '访问UK ENIC官方网站并注册账户',
        '选择适合的认证服务类型',
        '在线填写申请表并上传所需文件',
        '支付认证费用',
        '等待评估完成',
        '接收电子版和/或纸质版认证结果'
      ],
      timeframe: '标准服务处理时间为10-15个工作日，加急服务可在1-5个工作日内完成。',
      costs: '基本认证费用约70-150英镑，视服务类型而定。加急服务和额外纸质证书需额外付费。',
      tips: [
        '确保提交的文件清晰完整',
        '如需用于签证申请，请选择相应的签证专用评估服务',
        '保留认证结果的电子版和纸质版',
        '部分英国雇主和院校可能有自己的额外要求',
        '认证报告通常有效期为5年'
      ],
      resources: [
        {
          title: 'UK ENIC (formerly UK NARIC)',
          url: 'https://www.enic.org.uk/'
        },
        {
          title: 'British Council - Education UK',
          url: 'https://study-uk.britishcouncil.org/'
        },
        {
          title: 'UK Visas and Immigration',
          url: 'https://www.gov.uk/government/organisations/uk-visas-and-immigration'
        }
      ]
    }
  },
  {
    id: 'canada',
    country: '加拿大',
    flag: '🇨🇦',
    coverImage: '/images/guides/canada.jpg',
    content: {
      overview: '加拿大的学历认证体系较为分散，不同省份和用途可能需要不同的认证机构。常用的评估机构包括WES加拿大分部、ICAS（International Credential Assessment Service）和IQAS（International Qualifications Assessment Service）等。',
      requirements: [
        '学历证书和成绩单原件或公证副本',
        '所有非英文/法文文件的认证翻译',
        '由学校直接发送的密封成绩单（部分机构要求）',
        '身份证明文件',
        '学习计划或课程大纲（某些情况下需要）'
      ],
      process: [
        '根据所在省份和目的选择适当的评估机构',
        '在评估机构网站创建账户并提交申请',
        '支付评估费用',
        '按照具体要求提交所需文件',
        '等待评估完成',
        '获取评估报告'
      ],
      timeframe: '标准评估通常需要6-12周，部分机构提供加急服务（15-20个工作日）。',
      costs: '基本评估费用约200-300加元，视评估类型和机构而定。',
      tips: [
        '如用于移民，确认使用移民部认可的评估机构',
        '提前了解不同省份的特殊要求',
        '保持与评估机构的沟通，定期查看申请进度',
        '准备好解释学制差异的材料',
        '考虑加拿大双语环境，必要时准备英文和法文材料'
      ],
      resources: [
        {
          title: 'World Education Services Canada',
          url: 'https://www.wes.org/ca/'
        },
        {
          title: 'International Credential Assessment Service (ICAS)',
          url: 'https://www.icascanada.ca/'
        },
        {
          title: 'Immigration, Refugees and Citizenship Canada',
          url: 'https://www.canada.ca/en/services/immigration-citizenship.html'
        }
      ]
    }
  }
];

/**
 * 获取所有国家认证指南
 */
export const getAllCountryGuides = (): CountryGuide[] => {
  return countryGuides;
};

/**
 * 根据ID获取特定国家认证指南
 */
export const getCountryGuideById = (id: string): CountryGuide | undefined => {
  return countryGuides.find(guide => guide.id === id);
};

/**
 * 将国家认证指南转换为博客文章格式
 */
export const convertGuidesToPosts = (): Post[] => {
  return countryGuides.map(guide => ({
    id: `guide-${guide.id}`,
    title: `${guide.country}${guide.flag}学历认证指南`,
    date: new Date().toISOString().split('T')[0], // 使用当前日期
    slug: `guides/${guide.id}`,
    excerpt: `了解如何在${guide.country}进行学历认证，包括所需材料、流程、时间和费用等详细信息。`,
    coverImage: guide.coverImage,
    category: '认证指南'
  }));
}; 