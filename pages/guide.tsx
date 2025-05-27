import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

const GuidePage = () => {
  return (
    <Layout>
      <SEO 
        title="快速领证 — 7天内获得真实官方学历证书 | Acaboost"
        description="一站式学历认证与购买服务，快速高效，100%真实可查。支持全球学历证书，7天快速拿证。"
        keywords={["快速领证", "学历证书", "官方认证", "真实学历", "学历购买"]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">快速领证 — 7天内获得真实官方学历证书</h1>
          <p className="text-xl md:text-2xl mb-8">立即添加WhatsApp客服</p>
          <p className="text-2xl font-bold mb-8">19935572576</p>
          <p className="text-lg mb-8">享受一站式学历认证与购买服务，快速高效，100%真实可查！</p>
          <a
            href="https://wa.me/19935572576"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors"
          >
            立即咨询
          </a>
        </div>
      </div>

      {/* Service Advantages */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">服务优势</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">全球覆盖</h3>
            <p className="text-gray-600">支持多国学历证书，含欧美、澳洲、加拿大等热门国家</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">官方认证</h3>
            <p className="text-gray-600">所有证书均为官方真实学历，100%可查询</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">极速办理</h3>
            <p className="text-gray-600">7天快速拿证，节省繁琐时间</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">隐私保障</h3>
            <p className="text-gray-600">信息安全保密，保护客户隐私</p>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">快速领证流程</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
                <p>在线咨询，确定需求</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
                <p>提交资料，核验信息</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
                <p>支付订单，开始办理</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">4</div>
                <p>等待官方认证与制作</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">5</div>
                <p>快速收到证书，验真无忧</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Types */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">可提供学历证书类型</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">学位证书</h3>
            <ul className="space-y-2">
              <li>• 学士学位证书</li>
              <li>• 硕士学位证书</li>
              <li>• 博士学位证书</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">学历文件</h3>
            <ul className="space-y-2">
              <li>• 毕业证书</li>
              <li>• 成绩单</li>
              <li>• 在读证明</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">认证文件</h3>
            <ul className="space-y-2">
              <li>• 学历认证报告</li>
              <li>• 成绩单认证</li>
              <li>• 学位认证</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">证书是否真实可查？</h3>
              <p className="text-gray-600">是的，所有证书均为官方真实学历，100%可查询验证。</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">办理周期多久？</h3>
              <p className="text-gray-600">最快7天内完成，加急可更快。</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">如何保障隐私？</h3>
              <p className="text-gray-600">我们采用严格的隐私保护措施，确保客户信息安全。</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">是否支持全球学历？</h3>
              <p className="text-gray-600">支持多国学历证书，包括欧美、澳洲、加拿大等热门国家。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-green-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">立即咨询，快速领证</h2>
          <p className="text-xl mb-8">添加WhatsApp客服：19935572576</p>
          <a
            href="https://wa.me/19935572576"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            立即咨询
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default GuidePage; 