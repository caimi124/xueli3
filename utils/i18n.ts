import { Translations } from '../types';

// 翻译数据
export const translations: Translations = {
  common: {
    'zh': {
      'home': '首页',
      'blog': '博客',
      'contact': '联系我们',
      'readMore': '阅读更多',
      'backToBlog': '返回博客列表',
      'contactUs': '联系我们',
      'loading': '加载中...',
      'notFound': '未找到页面',
      'errorOccurred': '发生错误'
    },
    'en': {
      'home': 'Home',
      'blog': 'Blog',
      'contact': 'Contact',
      'readMore': 'Read more',
      'backToBlog': 'Back to blog',
      'contactUs': 'Contact us',
      'loading': 'Loading...',
      'notFound': 'Page not found',
      'errorOccurred': 'An error occurred'
    }
  },
  home: {
    'zh': {
      'heroTitle': '专业的学历认证服务平台',
      'heroSubtitle': '为您的留学、就业和国际发展提供权威学历认证服务',
      'contactNow': '立即咨询',
      'learnMore': '了解更多',
      'servicesTitle': '我们的服务',
      'servicesSubtitle': '提供全方位的学历认证解决方案，满足您的不同需求',
      'service1Title': '学历认证',
      'service1Desc': '为国内外高校毕业证、学位证等提供官方认证服务，确保您的学历文凭全球认可。',
      'service2Title': '快速处理',
      'service2Desc': '专业高效的认证流程，最快5个工作日完成认证，助您抢占留学和就业先机。',
      'service3Title': '全球认可',
      'service3Desc': '我们的认证结果获得国际教育组织和海外高校广泛认可，为您的国际发展铺平道路。',
      'testimonialsTitle': '客户评价',
      'testimonialsSubtitle': '看看我们的客户如何评价我们的服务'
    },
    'en': {
      'heroTitle': 'Professional Academic Certification Platform',
      'heroSubtitle': 'Providing authoritative academic certification services for your overseas study, employment, and international development',
      'contactNow': 'Contact Now',
      'learnMore': 'Learn More',
      'servicesTitle': 'Our Services',
      'servicesSubtitle': 'Providing comprehensive academic certification solutions to meet your various needs',
      'service1Title': 'Academic Certification',
      'service1Desc': 'Official certification services for diplomas and degrees from universities worldwide, ensuring global recognition of your academic credentials.',
      'service2Title': 'Fast Processing',
      'service2Desc': 'Professional and efficient certification process, completed in as few as 5 working days, helping you secure study and employment opportunities.',
      'service3Title': 'Global Recognition',
      'service3Desc': 'Our certification results are widely recognized by international educational organizations and overseas universities, paving the way for your international development.',
      'testimonialsTitle': 'Testimonials',
      'testimonialsSubtitle': 'See what our clients say about our services'
    }
  },
  contact: {
    'zh': {
      'title': '联系我们',
      'subtitle': '如果您有任何问题或需要咨询，请随时与我们联系，我们将竭诚为您服务。',
      'formTitle': '发送消息给我们',
      'name': '姓名',
      'email': '电子邮箱',
      'phone': '电话',
      'message': '留言',
      'submit': '提交',
      'thankYou': '感谢您的留言！我们将尽快回复您。',
      'fillAllFields': '请填写所有必填字段',
      'contactInfo': '联系方式',
      'address': '地址',
      'addressValue': '北京市朝阳区建国路88号城市大厦15层',
      'workingHours': '工作时间',
      'workingHoursValue': '周一至周五: 上午9点 - 下午6点',
      'followUs': '关注我们'
    },
    'en': {
      'title': 'Contact Us',
      'subtitle': 'If you have any questions or need a consultation, please feel free to contact us. We are here to help you.',
      'formTitle': 'Send us a message',
      'name': 'Name',
      'email': 'Email',
      'phone': 'Phone',
      'message': 'Message',
      'submit': 'Submit',
      'thankYou': 'Thank you for your message! We will get back to you as soon as possible.',
      'fillAllFields': 'Please fill in all required fields',
      'contactInfo': 'Contact Information',
      'address': 'Address',
      'addressValue': '15th Floor, City Building, 88 Jianguo Road, Chaoyang District, Beijing, China',
      'workingHours': 'Working Hours',
      'workingHoursValue': 'Monday - Friday: 9:00 AM - 6:00 PM',
      'followUs': 'Follow Us'
    }
  },
  blog: {
    'zh': {
      'title': '博客',
      'subtitle': '学历认证相关的最新资讯、指南和文章',
      'noPosts': '暂无博客文章',
      'readingTime': '阅读时间：'
    },
    'en': {
      'title': 'Blog',
      'subtitle': 'Latest news, guides and articles about academic certification',
      'noPosts': 'No blog posts yet',
      'readingTime': 'Reading time: '
    }
  }
};

/**
 * 获取翻译文本
 * @param section 翻译部分
 * @param key 翻译键
 * @param locale 语言
 * @returns 翻译文本
 */
export function getTranslation(section: string, key: string, locale: string): string {
  if (!translations[section]) {
    console.warn(`翻译部分 "${section}" 不存在`);
    return key;
  }
  
  if (!translations[section][locale]) {
    console.warn(`语言 "${locale}" 在部分 "${section}" 中不存在`);
    return key;
  }
  
  if (!translations[section][locale][key]) {
    console.warn(`键 "${key}" 在部分 "${section}" 和语言 "${locale}" 中不存在`);
    return key;
  }
  
  const value = translations[section][locale][key];
  return typeof value === 'string' ? value : key;
}

/**
 * 翻译辅助Hook (在React组件中使用)
 * @param locale 当前语言
 * @returns t 翻译函数
 */
export function useTranslations(locale: string = 'zh') {
  function t(section: string, key: string): string {
    return getTranslation(section, key, locale);
  }
  
  return { t };
} 