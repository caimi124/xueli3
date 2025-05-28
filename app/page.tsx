'use client';

import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaGraduationCap, FaCheckCircle, FaUsers, FaStar } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">全球学历认证，一站式搞定</h1>
          <p className="text-xl mb-8">专业、快速、可靠的学历认证服务</p>
          <Link 
            href="https://wa.me/1234567890" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl" />
            立即咨询
          </Link>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">认证流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: FaGraduationCap, title: '选择学校', desc: '从我们的合作院校中选择' },
              { icon: FaCheckCircle, title: '提交材料', desc: '提供必要的认证材料' },
              { icon: FaUsers, title: '专员对接', desc: '专业顾问全程指导' },
              { icon: FaCheckCircle, title: '完成认证', desc: '获得官方认证证书' }
            ].map((step, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <step.icon className="text-4xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">合作院校</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: '哈佛大学', country: '美国', type: '世界顶尖学府' },
              { name: '牛津大学', country: '英国', type: '世界顶尖学府' },
              { name: '东京大学', country: '日本', type: '亚洲顶尖学府' }
            ].map((school, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{school.name}</h3>
                <p className="text-gray-600 mb-2">{school.country}</p>
                <p className="text-blue-600">{school.type}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/schools"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block"
            >
              查看更多院校
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">客户评价</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: '张先生', content: '服务非常专业，认证过程顺利！', rating: 5 },
              { name: '李女士', content: '顾问很耐心，解答了很多问题。', rating: 5 },
              { name: '王先生', content: '效率很高，很快就拿到了认证。', rating: 5 }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-xl" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">开始您的认证之旅</h2>
          <p className="text-xl mb-8">专业顾问随时为您服务</p>
          <Link 
            href="https://wa.me/1234567890"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl" />
            立即咨询
          </Link>
        </div>
      </section>
    </main>
  );
} 