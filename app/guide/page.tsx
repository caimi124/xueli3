'use client';

import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaCheckCircle, FaGraduationCap, FaUsers, FaClock, FaShieldAlt } from 'react-icons/fa';

export default function GuidePage() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">快速领证指南</h1>
          <p className="text-xl md:text-2xl mb-8">
            快速拿证，真实学历，全球认证，直接加WhatsApp获取方案
          </p>
          <Link 
            href="https://wa.me/1234567890" 
            className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2" />
            立即加 WhatsApp
          </Link>
        </div>
      </section>

      {/* 2. 领证流程 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">快速领证流程</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "选择认证国家与学历类型",
                desc: "根据需求选择最适合的认证方案"
              },
              {
                step: "02",
                title: "确认学校与专业可办",
                desc: "专业顾问一对一确认可行性"
              },
              {
                step: "03",
                title: "提交认证资料",
                desc: "简单资料，快速提交"
              },
              {
                step: "04",
                title: "领取学历证书",
                desc: "纸质+电子档，双重保障"
              },
              {
                step: "05",
                title: "免费验证、可查可验",
                desc: "确保100%真实可查"
              }
            ].map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 font-bold text-xl mb-3">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 证书类型展示 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">热门证书类型</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "学历层次",
                items: ["本科", "硕士", "博士"]
              },
              {
                title: "热门专业",
                items: ["工商管理", "教育", "计算机", "金融"]
              },
              {
                title: "认证国家",
                items: ["新加坡", "马来西亚", "英国", "澳洲", "加拿大"]
              }
            ].map((category) => (
              <div key={category.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-600">
                      <FaCheckCircle className="text-blue-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 信任背书 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">为什么选择我们</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaUsers className="text-4xl text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">已成功帮助客户获取真实学历</p>
            </div>
            <div className="text-center">
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">与真实学校合作，含验证渠道</p>
            </div>
            <div className="text-center">
              <FaClock className="text-4xl text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">多语言客服支持 + 经验丰富顾问团队</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 行动区 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">立即免费咨询顾问，获取专属领证方案</h2>
          <p className="text-xl mb-8">专业顾问一对一服务，为您定制最佳方案</p>
          <Link 
            href="https://wa.me/1234567890" 
            className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2" />
            加 WhatsApp 立刻获取方案
          </Link>
        </div>
      </section>
    </div>
  );
} 