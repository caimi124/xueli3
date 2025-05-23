import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { School } from '../../types';

interface SchoolCardProps {
  school: School;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ school }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 w-full">
        {school.imageUrl ? (
          <Image
            src={school.imageUrl}
            alt={school.name}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJNQNGgFZGgAAAAABJRU5ErkJggg=="
          />
        ) : (
          <div className="bg-gray-300 h-full w-full flex items-center justify-center">
            <span className="text-gray-500">{school.name}</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{school.name}</h3>
          {school.ranking && (
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              排名: {school.ranking}
            </span>
          )}
        </div>
        
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
          </svg>
          <span>{school.country} {school.city}</span>
        </div>
        
        {school.specialties && school.specialties.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1 mt-1">
              {school.specialties.slice(0, 3).map((specialty, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
                  {specialty}
                </span>
              ))}
              {school.specialties.length > 3 && (
                <span className="text-gray-500 text-xs">+{school.specialties.length - 3}</span>
              )}
            </div>
          </div>
        )}
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {school.description || "暂无描述"}
        </p>
        
        <Link href={`/schools/${school.id}`}>
          <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
            查看详情
            <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SchoolCard; 