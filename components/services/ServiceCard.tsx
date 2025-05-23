import React from 'react';
import Link from 'next/link';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden border ${
      service.highlight ? 'border-blue-500' : service.recommended ? 'border-green-500' : 'border-gray-200'
    }`}>
      {(service.highlight || service.recommended) && (
        <div className={`${
          service.highlight ? 'bg-blue-500' : 'bg-green-500'
        } text-white text-center text-sm font-medium py-1`}>
          {service.highlight ? '尊享服务' : '推荐选择'}
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className="flex items-baseline mb-6">
          <span className="text-lg font-bold text-gray-900">需咨询报价</span>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 mb-2">服务包含：</h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
          </svg>
          <span>处理时间: {service.duration}</span>
        </div>
        
        <Link href={`/contact?service=${service.id}`}>
          <a className={`block w-full text-center py-2 px-4 rounded-md font-medium ${
            service.highlight 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : service.recommended
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}>
            预约咨询
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard; 