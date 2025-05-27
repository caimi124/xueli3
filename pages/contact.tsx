import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

const ContactPage = () => {
  return (
    <Layout>
      <SEO 
        title="立即咨询 | 全球学历认证顾问 | Acaboost"
        description="无需填写表单，点击WhatsApp一键直达认证顾问，获取100%真实学历。已成功服务1200+客户，支持30+国家学历认证。"
        keywords={["学历认证", "WhatsApp咨询", "学历顾问", "快速认证", "全球学历"]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">全球学历认证顾问，7天快速拿证</h1>
          <p className="text-xl md:text-2xl mb-8">无需填写表单，点击 WhatsApp 一键直达认证顾问，获取100%真实学历！</p>
          <div className="flex flex-col items-center gap-6">
            <a
              href="https://wa.me/19935572576"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors text-xl"
            >
              立即 WhatsApp 咨询
            </a>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Image
                src="/images/whatsapp-qr.png"
                alt="WhatsApp QR Code"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <p className="text-lg">我们在线时间：每天 9:00 - 22:00（支持中英文）</p>
          </div>
        </div>
      </div>

      {/* Service Advantages */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">我们能为您提供什么？</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-4">教育行业专家</h3>
            <p className="text-gray-600">多年国际教育领域经验，熟悉各国学历政策</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-4">📄</div>
            <h3 className="text-xl font-bold mb-4">官方认证学历</h3>
            <p className="text-gray-600">提供100%真实学历，可在政府官网查验</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-4">⏱️</div>
            <h3 className="text-xl font-bold mb-4">极速办证流程</h3>
            <p className="text-gray-600">3~7天内快速交付完整学历材料</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-4">🌎</div>
            <h3 className="text-xl font-bold mb-4">支持多国院校</h3>
            <p className="text-gray-600">覆盖美国、英国、加拿大、澳洲、东南亚等上百所大学</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-4">一对一专属顾问</h3>
            <p className="text-gray-600">全程答疑，资料准备、认证流程全托管</p>
          </div>
        </div>
      </div>

      {/* Testimonials & Stats */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">客户好评</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 italic mb-4">"我是新加坡工作，需要认证一份硕士学历，3天就搞定了！"</p>
              <p className="text-gray-800 font-semibold">- 张先生，新加坡</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 italic mb-4">"流程非常顺利，而且是真实可查的官方文件。"</p>
              <p className="text-gray-800 font-semibold">- 李女士，上海</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 italic mb-4">"顾问很贴心，还会帮我整理材料。"</p>
              <p className="text-gray-800 font-semibold">- 王先生，北京</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
              <p className="text-gray-600">已成功服务客户</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <p className="text-gray-600">支持认证国家</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4,000+</div>
              <p className="text-gray-600">累计处理学历类型</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-green-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">有任何问题？添加 WhatsApp 顾问，一对一解答！</h2>
          <p className="text-xl mb-8">不留信息也能快速了解！</p>
          <div className="flex flex-col items-center gap-6">
            <a
              href="https://wa.me/19935572576"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors text-xl"
            >
              立即加顾问
            </a>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Image
                src="/images/whatsapp-qr.png"
                alt="WhatsApp QR Code"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage; 