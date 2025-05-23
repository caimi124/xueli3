import React, { useState, useEffect } from 'react';
import Link from 'next/link';

type ServiceType = 'standard' | 'express' | 'vip';
type DocumentType = 'diploma' | 'transcript' | 'both';
type CountryGroup = 'asia' | 'europe' | 'america' | 'other';

interface PriceConfig {
  base: {
    [key in ServiceType]: number;
  };
  documentMultiplier: {
    [key in DocumentType]: number;
  };
  countryMultiplier: {
    [key in CountryGroup]: number;
  };
}

const priceConfig: PriceConfig = {
  base: {
    standard: 2000,
    express: 3500,
    vip: 5800
  },
  documentMultiplier: {
    diploma: 1,
    transcript: 1,
    both: 1.6
  },
  countryMultiplier: {
    asia: 1,
    europe: 1.2,
    america: 1.25,
    other: 1.3
  }
};

const CostCalculator: React.FC = () => {
  const [serviceType, setServiceType] = useState<ServiceType>('standard');
  const [documentType, setDocumentType] = useState<DocumentType>('diploma');
  const [countryGroup, setCountryGroup] = useState<CountryGroup>('asia');
  const [quantity, setQuantity] = useState(1);
  const [totalCost, setTotalCost] = useState(0);
  
  useEffect(() => {
    // 计算总费用
    const base = priceConfig.base[serviceType];
    const docMultiplier = priceConfig.documentMultiplier[documentType];
    const countryMultiplier = priceConfig.countryMultiplier[countryGroup];
    
    let total = base * docMultiplier * countryMultiplier * quantity;
    
    // 批量折扣
    if (quantity >= 3 && quantity < 5) {
      total *= 0.95; // 5%折扣
    } else if (quantity >= 5) {
      total *= 0.9; // 10%折扣
    }
    
    setTotalCost(Math.round(total));
  }, [serviceType, documentType, countryGroup, quantity]);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">费用计算器</h3>
      
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
            
            <span className="ml-3 text-sm text-gray-500">
              {quantity >= 5 ? '10%批量折扣' : quantity >= 3 ? '5%批量折扣' : ''}
            </span>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 mt-6 pt-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700">预估费用：</span>
          <span className="text-2xl font-bold text-blue-600">¥{totalCost}</span>
        </div>
        
        <div className="text-xs text-gray-500 mb-6">
          注：此费用仅为预估，实际费用可能因具体情况而有所调整。详情请咨询我们的客服人员。
        </div>
        
        <div className="flex space-x-3">
          <Link href="/services">
            <a className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-center">
              查看详细服务
            </a>
          </Link>
          <Link href="/contact">
            <a className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md text-center">
              获取精确报价
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator; 