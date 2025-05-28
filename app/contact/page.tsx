'use client';

import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部标题区 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">联系我们</h1>
          <p className="text-xl">
            我们专注为您提供<strong>真实、权威的学历认证服务</strong>，专业团队一对一对接，欢迎随时咨询。
          </p>
        </div>
      </section>

      {/* 联系方式 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">📞 联系方式</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <span className="text-2xl mr-4">📱</span>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <Link 
                    href="https://wa.me/1234567890" 
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    点击添加
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📞</span>
                <div>
                  <h3 className="font-semibold">电话</h3>
                  <p>+86 123 4567 8901</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📧</span>
                <div>
                  <h3 className="font-semibold">邮箱</h3>
                  <p>support@acaboost.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link 
                href="https://wa.me/1234567890" 
                className="inline-block bg-green-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                立即添加 WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 已服务客户 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">👥 我们已服务的客户</h2>
          <div className="text-center mb-8">
            <p className="text-xl mb-4">
              我们已成功服务<strong>超 1000 名客户</strong>，帮助他们获取真实、可验证的学历证书。
            </p>
            <p className="text-gray-600">
              从咨询、选校到出证，全流程透明、合规、高效。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "真实案例背书",
              "海外高校合作认证",
              "全球可查可验学历服务"
            ].map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-lg text-center">
                <span className="text-green-500 text-2xl mb-2 block">✅</span>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 合作院校 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">🎓 合作院校 · 正规学历 · 全球认证</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-xl mb-6">
              我们与多国高校/教育机构合作，确保每一份学历证书都<strong>正规、真实、可验证</strong>。
            </p>
            <p className="mb-6">
              无论您需要认证<strong>本科、硕士或博士学历</strong>，我们都能提供：
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                正规渠道申请
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                多国认证可选（新加坡、马来西亚、英国、澳洲、加拿大等）
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">•</span>
                支持教育部/留服系统验证
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 快速咨询入口 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">🚀 快速咨询入口</h2>
          <p className="text-xl mb-8">
            立即添加 WhatsApp，开启您的专属学历认证咨询！
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              "一对一顾问服务",
              "快速匹配院校与学历方案",
              "免费解答 & 私密沟通"
            ].map((item) => (
              <div key={item} className="bg-blue-700 p-6 rounded-lg">
                <span className="text-2xl mb-2 block">🔹</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <Link 
            href="https://wa.me/1234567890" 
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            添加 WhatsApp 立即咨询
          </Link>
        </div>
      </section>
    </div>
  );
} 