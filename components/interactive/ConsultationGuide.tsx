import React, { useState } from 'react';
import Link from 'next/link';

type ServiceType = 'standard' | 'express' | 'vip';
type DocumentType = 'diploma' | 'transcript' | 'both';
type CountryGroup = 'asia' | 'europe' | 'america' | 'other';

const ConsultationGuide = () => {
  const [serviceType, setServiceType] = useState('standard');
  const [documentType, setDocumentType] = useState('diploma');
  const [countryGroup, setCountryGroup] = useState('asia');
  const [quantity, setQuantity] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = () => {
    setSubmitted(true);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">定制服务咨询</h3>
      
      {submitted ? (
        <div className="text-center py-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">您的需求已提交</h4>
          <p className="text-gray-600 mb-6">感谢您的信息，我们的客服会尽快与您联系，为您提供个性化报价。</p>
          <div className="flex justify-center">
            <Link href="/contact">
              <a className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md">
                联系我们
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              服务类型
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                className={`py-2 px-3 text-sm rounded-md ${
                  serviceType === 'standard'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setServiceType('standard')}
              >
                标准服务
              </button>
              <button
                className={`py-2 px-3 text-sm rounded-md ${
                  serviceType === 'express'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setServiceType('express')}
              >
                加急服务
              </button>
              <button
                className={`py-2 px-3 text-sm rounded-md ${
                  serviceType === 'vip'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setServiceType('vip')}
              >
                VIP服务
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              文件类型
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                className={`py-2 px-3 text-sm rounded-md ${
                  documentType === 'diploma'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setDocumentType('diploma')}
              >
                学历证书
              </button>
              <button
                className={`py-2 px-3 text-sm rounded-md ${
                  documentType === 'transcript'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setDocumentType('transcript')}
              >
                成绩单
              </button>
              <button
                className={`py-2 px-3 text-sm rounded-md ${
                  documentType === 'both'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setDocumentType('both')}
              >
                两者都需要
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              目标国家/地区
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                className={`py-2 px-3 text-sm rounded-md ${
                  countryGroup === 'asia'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setCountryGroup('asia')}
              >
                亚洲国家
              </button>
              <button
                className={`py-2 px-3 text-sm rounded-md ${
                  countryGroup === 'europe'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setCountryGroup('europe')}
              >
                欧洲国家
              </button>
              <button
                className={`py-2 px-3 text-sm rounded-md ${
                  countryGroup === 'america'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setCountryGroup('america')}
              >
                美洲国家
              </button>
              <button
                className={`py-2 px-3 text-sm rounded-md ${
                  countryGroup === 'other'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setCountryGroup('other')}
              >
                其他地区
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              认证数量
            </label>
            <div className="flex items-center">
              <button
                className="bg-gray-200 text-gray-800 h-8 w-8 rounded-l-md flex items-center justify-center"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <div className="h-8 px-4 flex items-center justify-center border-t border-b border-gray-300">
                {quantity}
              </div>
              <button
                className="bg-gray-200 text-gray-800 h-8 w-8 rounded-r-md flex items-center justify-center"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        
          <div className="border-t border-gray-200 mt-6 pt-6">
            <div className="text-center mb-4">
              <p className="text-gray-700 mb-2">
                根据您选择的服务类型和需求，我们将为您提供个性化报价
              </p>
              <p className="text-sm text-gray-500 mb-6">
                请填写上述信息，我们的顾问将在24小时内与您取得联系
              </p>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={handleSubmit}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-center"
              >
                获取报价
              </button>
              <Link href="/contact">
                <a className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md text-center">
                  直接咨询
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultationGuide; 