import { Service, ServiceCategory } from '../types';

// 认证服务
const certificationServices: Service[] = [
  {
    id: "basic-certification",
    name: "基础认证服务",
    description: "针对单一学历的基础认证服务，适用于就业或继续教育。",
    price: {
      amount: 0,
      currency: "CNY"
    },
    features: [
      "学历文件审核",
      "翻译服务（标准文件）",
      "认证申请处理",
      "电子版认证报告",
      "基础咨询服务"
    ],
    duration: "10-15个工作日"
  },
  {
    id: "standard-certification",
    name: "标准认证服务",
    description: "全面的学历认证服务，适用于大多数留学和就业需求。",
    price: {
      amount: 0,
      currency: "CNY"
    },
    features: [
      "学历文件全面审核",
      "优质翻译服务（含专业术语）",
      "优先认证申请处理",
      "纸质认证报告（2份）",
      "电子版认证报告",
      "专属咨询服务"
    ],
    duration: "7-10个工作日",
    recommended: true
  },
  {
    id: "premium-certification",
    name: "高级认证服务",
    description: "尊享VIP认证服务，提供最快速度和最全面的支持。",
    price: {
      amount: 0,
      currency: "CNY"
    },
    features: [
      "学历文件优先审核",
      "高级翻译服务（含行业特定词汇）",
      "加急认证申请处理",
      "纸质认证报告（3份）",
      "电子版认证报告",
      "VIP一对一咨询",
      "后续支持服务（6个月）"
    ],
    duration: "3-5个工作日",
    highlight: true
  }
];

// 申请服务
const applicationServices: Service[] = [
  {
    id: "application-consultation",
    name: "申请咨询服务",
    description: "为您提供专业的院校和专业选择咨询。",
    price: {
      amount: 0,
      currency: "CNY"
    },
    features: [
      "个人情况评估",
      "3-5所院校推荐",
      "专业方向建议",
      "申请策略规划",
      "一次深度咨询（1小时）"
    ],
    duration: "一周内"
  },
  {
    id: "standard-application",
    name: "标准申请服务",
    description: "全程指导和协助您完成学校申请流程。",
    price: {
      amount: 0,
      currency: "CNY"
    },
    features: [
      "5-8所院校推荐",
      "申请材料准备指导",
      "文书修改（3次）",
      "申请表填写指导",
      "材料递交协助",
      "定期申请状态更新",
      "3次专业咨询"
    ],
    duration: "申请季全程",
    recommended: true
  },
  {
    id: "full-service-package",
    name: "全程服务套餐",
    description: "从选校到获得offer全程一站式服务。",
    price: {
      amount: 0,
      currency: "CNY"
    },
    features: [
      "个性化院校筛选",
      "申请材料高级指导",
      "专业文书创作与修改",
      "面试准备与模拟",
      "奖学金申请协助",
      "签证申请指导",
      "入学前准备咨询",
      "无限次专家咨询"
    ],
    duration: "申请前至录取后",
    highlight: true
  }
];

// 企业服务
const corporateServices: Service[] = [
  {
    id: "corporate-verification",
    name: "企业背景调查服务",
    description: "为企业提供员工学历背景核实服务。",
    price: {
      amount: 0,
      currency: "CNY"
    },
    features: [
      "学历真实性核查",
      "院校背景调查",
      "毕业状态确认",
      "核查报告提供"
    ],
    duration: "5-7个工作日"
  },
  {
    id: "batch-certification",
    name: "批量认证服务",
    description: "为企业提供多份学历同时认证的优惠服务。",
    price: {
      amount: 0,
      currency: "CNY"
    },
    features: [
      "多份学历同时处理",
      "统一认证报告格式",
      "企业专属服务人员",
      "批量优惠价格",
      "加急处理选项"
    ],
    duration: "根据数量定制",
    recommended: true
  },
  {
    id: "corporate-solution",
    name: "企业定制方案",
    description: "根据企业需求提供定制化的认证解决方案。",
    price: {
      amount: 0,
      currency: "CNY"
    },
    features: [
      "需求分析会议",
      "定制化认证流程",
      "专属服务团队",
      "定期报告和更新",
      "长期合作支持"
    ],
    duration: "灵活定制",
    highlight: true
  }
];

// 所有服务类别
export const serviceCategories: ServiceCategory[] = [
  {
    id: "academic-certification",
    name: "学历认证服务",
    description: "我们提供专业的学历认证服务，确保您的学历得到全球范围内的认可。",
    services: certificationServices
  },
  {
    id: "application-services",
    name: "申请服务",
    description: "从院校选择到申请提交，我们提供全面的留学申请指导服务。",
    services: applicationServices
  },
  {
    id: "corporate-services",
    name: "企业服务",
    description: "为企业提供员工学历验证和批量认证服务，保障人才质量。",
    services: corporateServices
  }
];

/**
 * 获取所有服务类别
 */
export const getAllServiceCategories = (): ServiceCategory[] => {
  return serviceCategories;
};

/**
 * 根据ID获取特定服务类别
 */
export const getServiceCategoryById = (id: string): ServiceCategory | undefined => {
  return serviceCategories.find(category => category.id === id);
};

/**
 * 根据ID获取特定服务
 */
export const getServiceById = (id: string): Service | undefined => {
  for (const category of serviceCategories) {
    const service = category.services.find(service => service.id === id);
    if (service) {
      return service;
    }
  }
  return undefined;
};

/**
 * 获取推荐的服务
 */
export const getRecommendedServices = (): Service[] => {
  const recommended: Service[] = [];
  serviceCategories.forEach(category => {
    category.services.forEach(service => {
      if (service.recommended) {
        recommended.push(service);
      }
    });
  });
  return recommended;
}; 