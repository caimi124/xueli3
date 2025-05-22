import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const { locale } = router;

  // SEO数据
  const seoTitle = locale === 'zh' ? '专业的学历认证服务平台' : 'Professional Academic Certification Platform';
  const seoDescription = locale === 'zh' 
    ? '为您的留学、就业和国际发展提供权威学历认证服务，快速高效的认证流程，全球认可的认证结果。'
    : 'Providing authoritative academic certification services for your overseas study, employment, and international development with fast processing and global recognition.';
  
  // 结构化数据 - 服务列表
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: locale === 'zh' ? '学历认证' : 'Academic Certification',
          description: locale === 'zh' 
            ? '为国内外高校毕业证、学位证等提供官方认证服务，确保您的学历文凭全球认可。' 
            : 'Official certification services for diplomas and degrees from universities worldwide, ensuring global recognition of your academic credentials.',
          provider: {
            '@type': 'Organization',
            name: locale === 'zh' ? '学历认证服务平台' : 'Academic Certification Platform'
          }
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: locale === 'zh' ? '快速处理' : 'Fast Processing',
          description: locale === 'zh' 
            ? '专业高效的认证流程，最快5个工作日完成认证，助您抢占留学和就业先机。' 
            : 'Professional and efficient certification process, completed in as few as 5 working days, helping you secure study and employment opportunities.'
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: locale === 'zh' ? '全球认可' : 'Global Recognition',
          description: locale === 'zh' 
            ? '我们的认证结果获得国际教育组织和海外高校广泛认可，为您的国际发展铺平道路。' 
            : 'Our certification results are widely recognized by international educational organizations and overseas universities, paving the way for your international development.'
        }
      }
    ]
  };

  const features = [
    {
      title: locale === 'zh' ? '学历认证' : 'Academic Certification',
      description: locale === 'zh' 
        ? '为国内外高校毕业证、学位证等提供官方认证服务，确保您的学历文凭全球认可。' 
        : 'Official certification services for diplomas and degrees from universities worldwide, ensuring global recognition of your academic credentials.',
      icon: (
        <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v10" />
        </svg>
      ),
    },
    {
      title: locale === 'zh' ? '快速处理' : 'Fast Processing',
      description: locale === 'zh' 
        ? '专业高效的认证流程，最快5个工作日完成认证，助您抢占留学和就业先机。' 
        : 'Professional and efficient certification process, completed in as few as 5 working days, helping you secure study and employment opportunities.',
      icon: (
        <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: locale === 'zh' ? '全球认可' : 'Global Recognition',
      description: locale === 'zh' 
        ? '我们的认证结果获得国际教育组织和海外高校广泛认可，为您的国际发展铺平道路。' 
        : 'Our certification results are widely recognized by international educational organizations and overseas universities, paving the way for your international development.',
      icon: (
        <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      content: locale === 'zh' 
        ? '学历认证平台帮我顺利完成了硕士学位的认证，整个流程非常顺畅，工作人员也很专业。感谢他们的帮助，让我成功申请到了理想的海外大学。' 
        : 'The Academic Certification Platform helped me successfully complete the certification of my master\'s degree. The entire process was smooth, and the staff were very professional. Thanks to their help, I successfully applied to my dream overseas university.',
      author: locale === 'zh' ? '张先生，北京' : 'Mr. Zhang, Beijing',
    },
    {
      content: locale === 'zh' 
        ? '作为一名留学生，我需要将国外学位证书在国内认证。平台提供的服务既快速又准确，解决了我的燃眉之急，真的非常感谢！' 
        : 'As an international student, I needed to have my foreign degree certificate certified in China. The service provided by the platform was both fast and accurate, solving my urgent need. I am really grateful!',
      author: locale === 'zh' ? '李女士，上海' : 'Ms. Li, Shanghai',
    },
    {
      content: locale === 'zh' 
        ? '公司聘请国际人才时要求学历认证，平台的专业服务大大加速了我们的招聘流程，认证结果获得了各方认可，非常值得信赖。' 
        : 'When our company recruits international talent, we require academic certification. The platform\'s professional service greatly accelerated our recruitment process, and the certification results were recognized by all parties. Very trustworthy.',
      author: locale === 'zh' ? '王总监，国际企业' : 'Director Wang, International Enterprise',
    },
  ];

  return (
    <Layout>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={locale === 'zh' ? '学历认证,留学认证,教育部认证,国际教育' : 'academic certification,study abroad,education verification,international education'}
        structuredData={serviceSchema}
      />
      {/* Hero Section */}
      <div className="bg-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                {locale === 'zh' 
                  ? '专业的学历认证服务平台' 
                  : 'Professional Academic Certification Platform'}
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                {locale === 'zh' 
                  ? '为您的留学、就业和国际发展提供权威学历认证服务' 
                  : 'Providing authoritative academic certification services for your overseas study, employment, and international development'}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 md:text-lg">
                  {locale === 'zh' ? '立即咨询' : 'Contact Now'}
                </Link>
                <Link href="/blog" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 md:text-lg">
                  {locale === 'zh' ? '了解更多' : 'Learn More'}
                </Link>
              </div>
            </div>
            <div className="mt-12 md:mt-0 md:w-1/2">
              <div className="relative h-64 md:h-96 rounded-lg shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-300">
                  {/* Replace with an actual image */}
                  <div className="w-full h-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {locale === 'zh' ? '我们的服务' : 'Our Services'}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {locale === 'zh' 
                ? '提供全方位的学历认证解决方案，满足您的不同需求' 
                : 'Providing comprehensive academic certification solutions to meet your various needs'}
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-blue-50 rounded-md p-2 inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {locale === 'zh' ? '客户评价' : 'Testimonials'}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {locale === 'zh' 
                ? '看看我们的客户如何评价我们的服务' 
                : 'See what our clients say about our services'}
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600 italic">{testimonial.content}</p>
                    <p className="mt-3 text-gray-900 font-medium">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700">
              {locale === 'zh' ? '联系我们' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 