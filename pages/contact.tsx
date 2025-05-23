import React, { useState } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { useRouter } from 'next/router';

export default function Contact() {
  const router = useRouter();
  const { locale } = router;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setError(locale === 'zh' ? '请填写所有必填字段' : 'Please fill in all required fields');
      return;
    }
    
    // Here you would typically send the data to your server or a third-party service
    // For demo purposes, we'll just simulate a successful submission
    setTimeout(() => {
      setSubmitted(true);
      setError('');
    }, 1000);
  };
  
  // SEO数据
  const seoTitle = locale === 'zh' ? '联系我们 - 专业学历认证咨询' : 'Contact Us - Professional Academic Certification';
  const seoDescription = locale === 'zh' 
    ? '与我们的学历认证专家取得联系，获取专业咨询和服务。我们提供高效的响应和个性化的解决方案。' 
    : 'Get in touch with our academic certification experts for professional consultation and services. We offer prompt responses and personalized solutions.';
  
  // 联系页面结构化数据
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: locale === 'zh' ? '学历认证服务平台' : 'Academic Certification Platform',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://academic-cert.com'}`,
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://academic-cert.com'}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86 123 4567 8910',
      email: 'info@academiccert.com',
      contactType: 'customer service',
      availableLanguage: ['Chinese', 'English']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: locale === 'zh' ? '建国路88号城市大厦15层' : '15th Floor, City Building, 88 Jianguo Road',
      addressLocality: 'Beijing',
      addressRegion: 'Chaoyang District',
      postalCode: '100022',
      addressCountry: 'CN'
    }
  };
  
  return (
    <Layout>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={locale === 'zh' 
          ? ['联系我们', '学历认证', '留学咨询', '国际教育'] 
          : ['contact us', 'academic certification', 'study abroad consultation', 'international education']}
        structuredData={contactSchema}
      />
      <div className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900">
              {locale === 'zh' ? '联系我们' : 'Contact Us'}
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'zh' 
                ? '如果您有任何问题或需要咨询，请随时与我们联系，我们将竭诚为您服务。' 
                : 'If you have any questions or need a consultation, please feel free to contact us. We are here to help you.'}
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {locale === 'zh' ? '发送消息给我们' : 'Send us a message'}
            </h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
                {locale === 'zh'
                  ? '感谢您的留言！我们将尽快回复您。'
                  : 'Thank you for your message! We will get back to you as soon as possible.'}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6">
                    {error}
                  </div>
                )}
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    {locale === 'zh' ? '姓名' : 'Name'} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    {locale === 'zh' ? '电子邮箱' : 'Email'} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    {locale === 'zh' ? '电话' : 'Phone'}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    {locale === 'zh' ? '留言' : 'Message'} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-primary text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {locale === 'zh' ? '提交' : 'Submit'}
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {locale === 'zh' ? '联系方式' : 'Contact Information'}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-700">
                    <p className="font-medium">{locale === 'zh' ? '电子邮箱' : 'Email'}</p>
                    <p className="mt-1">info@academiccert.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-700">
                    <p className="font-medium">{locale === 'zh' ? '电话' : 'Phone'}</p>
                    <p className="mt-1">+86 123 4567 8910</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-700">
                    <p className="font-medium">{locale === 'zh' ? '地址' : 'Address'}</p>
                    <p className="mt-1">
                      {locale === 'zh'
                        ? '北京市朝阳区建国路88号城市大厦15层'
                        : '15th Floor, City Building, 88 Jianguo Road, Chaoyang District, Beijing, China'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-700">
                    <p className="font-medium">{locale === 'zh' ? '工作时间' : 'Working Hours'}</p>
                    <p className="mt-1">
                      {locale === 'zh'
                        ? '周一至周五: 上午9点 - 下午6点'
                        : 'Monday - Friday: 9:00 AM - 6:00 PM'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {locale === 'zh' ? '关注我们' : 'Follow Us'}
              </h2>
              
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                
                <a href="#" className="text-gray-400 hover:text-primary">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                
                <a href="#" className="text-gray-400 hover:text-primary">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>
                
                <a href="#" className="text-gray-400 hover:text-primary">
                  <span className="sr-only">WeChat</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 2.344-6.244 2.012-1.17 4.591-1.064 6.53.283 1.06-2.539-.022-5.093-2.5-6.409-1.798-.957-3.875-1.26-5.928-.766-1.13.273-2.18.784-3.057 1.514zm1.188 1.352c.774-.557 1.668-.948 2.617-1.114 1.743-.368 3.528-.143 5.09.586 1.856.976 3.109 2.842 2.35 4.815-1.417-1.239-3.743-1.603-5.534-.798-2.112.945-3.15 3.245-2.087 5.323-.216.013-.434.025-.653.025-1.714 0-3.33-.427-4.725-1.174-.042-.022-.087-.034-.132-.034a.289.289 0 0 0-.167.054l-1.455.852.286-1.095a.691.691 0 0 0-.271-.752C3.699 8.926 2.788 7.347 2.788 5.579c0-3.036 3.155-5.539 7.09-5.539zm10.736 7.999c-.996 0-1.887.43-2.502 1.117a3.424 3.424 0 0 0-.735 2.13c0 .344.047.673.132.989.37 1.355 1.444 2.292 2.753 2.462.55.071 1.014-.353 1.014-.908 0-.19-.069-.361-.18-.498 1.143-1.098 1.45-2.416.926-3.807-.274-.728-.782-1.32-1.408-1.485zm-7.297.021c-.533 0-1.001.18-1.408.476-.667.484-1.11 1.251-1.11 2.144 0 .258.036.498.095.734.274 1.085 1.066 1.842 2.07 2.016.409.071.742-.082.982-.366.099-.12.168-.258.168-.407 0-.188-.069-.36-.18-.496.965-.934 1.227-2.393.667-3.57-.262-.546-.774-.531-.774-.531h-.51zm-.097 1.462c.327 0 .593.196.593.437 0 .242-.266.437-.593.437-.327 0-.593-.196-.593-.437 0-.241.266-.437.593-.437zm4.056 0c.327 0 .593.196.593.437 0 .242-.266.437-.593.437-.327 0-.593-.196-.593-.437 0-.241.266-.437.593-.437z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 