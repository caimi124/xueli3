'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaGraduationCap, FaMapMarkerAlt, FaStar, FaWhatsapp } from 'react-icons/fa';

export default function Schools() {
  const schools = [
    {
      name: '哈佛大学',
      country: '美国',
      type: '世界顶尖学府',
      description: '哈佛大学是美国最古老的高等学府，也是世界最著名的大学之一。提供本科、硕士和博士课程。',
      ranking: '世界排名第1',
      programs: ['本科', '硕士', '博士'],
      features: ['世界顶尖师资', '丰富的研究资源', '广泛的校友网络']
    },
    {
      name: '牛津大学',
      country: '英国',
      type: '世界顶尖学府',
      description: '牛津大学是英语世界最古老的大学，拥有悠久的历史和卓越的学术传统。',
      ranking: '世界排名第2',
      programs: ['本科', '硕士', '博士'],
      features: ['传统学院制', '世界级研究设施', '国际化学习环境']
    },
    {
      name: '东京大学',
      country: '日本',
      type: '亚洲顶尖学府',
      description: '东京大学是日本最顶尖的综合性大学，在亚洲乃至世界都享有盛誉。',
      ranking: '亚洲排名第1',
      programs: ['本科', '硕士', '博士'],
      features: ['创新研究', '跨学科教育', '国际化视野']
    },
    {
      name: '剑桥大学',
      country: '英国',
      type: '世界顶尖学府',
      description: '剑桥大学是英国最著名的大学之一，以其卓越的学术成就和悠久的历史而闻名。',
      ranking: '世界排名第3',
      programs: ['本科', '硕士', '博士'],
      features: ['世界级研究', '创新教育', '丰富的校园生活']
    },
    {
      name: '麻省理工学院',
      country: '美国',
      type: '世界顶尖学府',
      description: 'MIT是全球最著名的理工类大学，在科技创新领域处于世界领先地位。',
      ranking: '世界排名第4',
      programs: ['本科', '硕士', '博士'],
      features: ['科技创新', '实践导向', '创业支持']
    },
    {
      name: '斯坦福大学',
      country: '美国',
      type: '世界顶尖学府',
      description: '斯坦福大学是硅谷的核心，以其创新精神和创业文化而闻名。',
      ranking: '世界排名第5',
      programs: ['本科', '硕士', '博士'],
      features: ['创新文化', '创业生态', '跨学科研究']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-white mb-4 hover:text-gray-200">
            <FaArrowLeft className="mr-2" />
            返回首页
          </Link>
          <h1 className="text-4xl font-bold mb-4">合作院校</h1>
          <p className="text-xl">选择您心仪的院校，开启您的留学之旅</p>
        </div>
      </div>

      {/* Schools Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school) => (
            <div key={school.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">{school.name}</h2>
                  <FaGraduationCap className="text-blue-600 text-2xl" />
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{school.country}</span>
                </div>
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {school.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{school.description}</p>
                <div className="mb-4">
                  <div className="flex items-center text-yellow-400">
                    <FaStar />
                    <span className="ml-2 text-gray-700">{school.ranking}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">开设课程：</h3>
                  <div className="flex flex-wrap gap-2">
                    {school.programs.map((program) => (
                      <span key={program} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">特色优势：</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {school.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <Link
                  href="https://wa.me/1234567890"
                  className="block text-center bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-xl" />
                  咨询详情
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}