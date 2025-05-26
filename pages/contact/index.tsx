import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default function ContactPage() {
  // 表单状态
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: '',
    educationType: '',
    targetCountry: '',
    urgency: '',
    message: ''
  });
  
  // 提交状态
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success: boolean; message: string} | null>(null);
  
  // 处理输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 这里应该是实际的API调用，现在模拟一个成功响应
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 成功响应
      setSubmitResult({
        success: true,
        message: '您的咨询请求已成功提交！我们的顾问将在24小时内与您联系。'
      });
      
      // 清空表单
      setFormData({
        name: '',
        phone: '',
        email: '',
        purpose: '',
        educationType: '',
        targetCountry: '',
        urgency: '',
        message: ''
      });
    } catch (error) {
      // 错误处理
      setSubmitResult({
        success: false,
        message: '提交失败，请稍后再试或直接拨打我们的客服电话。'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="联系我们 - 学历认证服务平台"
        description="联系我们的专业顾问，获取学历认证服务的详细咨询。填写表单提交您的需求，我们将为您提供个性化的解决方案。"
        keywords={['学历认证咨询', '联系顾问', '学历服务咨询', '认证需求提交', '国际学历认证', '加急学历办理']}
      />
      
      {/* 顶部横幅 */}
      <div className="bg-blue-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/contact-banner.jpg"
            alt="联系我们"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">联系我们</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              提交您的需求，我们将为您提供专业的学历认证解决方案
            </p>
          </div>
        </div>
      </div>
      
      {/* 主内容区 */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                {/* 联系信息侧边栏 */}
                <div className="md:w-1/3 bg-blue-600 text-white p-8">
                  <h2 className="text-2xl font-bold mb-6">联系方式</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                      <div>
                        <p className="font-medium mb-1">地址</p>
                        <p className="text-blue-100">上海市浦东新区张杨路188号</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                      <div>
                        <p className="font-medium mb-1">电话</p>
                        <p className="text-blue-100">400-888-XXXX</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                      <div>
                        <p className="font-medium mb-1">邮箱</p>
                        <p className="text-blue-100">contact@xueli-service.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                      </svg>
                      <div>
                        <p className="font-medium mb-1">工作时间</p>
                        <p className="text-blue-100">周一至周六 9:00-18:00</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="text-xl font-bold mb-4">客户服务承诺</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>24小时内回复咨询</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>专业顾问一对一服务</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>保密协议保护客户隐私</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>满意度保证</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* 表单区域 */}
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">提交您的需求</h2>
                  
                  {submitResult ? (
                    <div className={`mb-6 p-4 rounded-md ${submitResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          {submitResult.success ? (
                            <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium">{submitResult.message}</p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          姓名 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          电话 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          电子邮箱
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
                          认证用途 <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="purpose"
                          id="purpose"
                          required
                          value={formData.purpose}
                          onChange={handleInputChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                          <option value="">请选择</option>
                          <option value="就业">就业</option>
                          <option value="升职">升职</option>
                          <option value="继续教育">继续教育</option>
                          <option value="移民">移民</option>
                          <option value="创业">创业</option>
                          <option value="其他">其他</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="educationType" className="block text-sm font-medium text-gray-700 mb-1">
                          需要的学历类型 <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="educationType"
                          id="educationType"
                          required
                          value={formData.educationType}
                          onChange={handleInputChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                          <option value="">请选择</option>
                          <option value="本科学历">本科学历</option>
                          <option value="硕士学位">硕士学位</option>
                          <option value="MBA/EMBA">MBA/EMBA</option>
                          <option value="博士学位">博士学位</option>
                          <option value="其他">其他</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="targetCountry" className="block text-sm font-medium text-gray-700 mb-1">
                          意向国家/地区
                        </label>
                        <select
                          name="targetCountry"
                          id="targetCountry"
                          value={formData.targetCountry}
                          onChange={handleInputChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                          <option value="">请选择</option>
                          <option value="美国">美国</option>
                          <option value="英国">英国</option>
                          <option value="澳大利亚">澳大利亚</option>
                          <option value="加拿大">加拿大</option>
                          <option value="新加坡">新加坡</option>
                          <option value="香港">香港</option>
                          <option value="日本">日本</option>
                          <option value="其他">其他</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                          紧急程度
                        </label>
                        <select
                          name="urgency"
                          id="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                          <option value="">请选择</option>
                          <option value="非常紧急（3-5天）">非常紧急（3-5天）</option>
                          <option value="紧急（一周内）">紧急（一周内）</option>
                          <option value="标准（7-15天）">标准（7-15天）</option>
                          <option value="不着急（15天以上）">不着急（15天以上）</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        具体需求和问题描述
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="请详细描述您的需求，例如：专业方向、学校偏好、时间要求等..."
                      ></textarea>
                    </div>
                    
                    <div className="mt-8">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            提交中...
                          </>
                        ) : '提交需求'}
                      </button>
                    </div>
                    
                    <div className="mt-4 text-sm text-gray-500 text-center">
                      提交后，我们的顾问将在24小时内与您联系
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            {/* 常见问题 */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">快速解答</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">如何开始学历认证流程？</h3>
                  <p className="text-gray-600">
                    只需填写上方表单提交您的需求，我们的顾问会与您联系，了解详情并为您量身定制认证方案。您也可以直接拨打我们的客服电话进行咨询。
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">认证流程需要多长时间？</h3>
                  <p className="text-gray-600">
                    标准认证流程约需7天完成。如有紧急需求，我们提供3-5天的加急服务，请在咨询时说明您的时间要求。
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">如何确保学历认证的真实性？</h3>
                  <p className="text-gray-600">
                    我们提供的所有认证材料均可通过官方渠道验证，确保真实可靠。具体验证方式会在服务过程中向您详细说明。
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">可以先咨询再决定是否使用服务吗？</h3>
                  <p className="text-gray-600">
                    当然可以。我们提供免费的初步咨询，了解您的需求并提供建议方案。您可以在充分了解服务内容和流程后再决定是否继续。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 