import React, { useState } from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Image from 'next/image';
import Link from 'next/link';

// 学校数据
const schools = [
  {
    id: 1,
    name: 'University of Melbourne',
    chineseName: '墨尔本大学',
    country: '澳大利亚',
    logo: '/images/schools/melbourne.png',
    qsRank: 13,
    degrees: ['本科', '硕士', '博士'],
    specialties: ['商科', '工程', '医学'],
    verified: true
  },
  {
    id: 2,
    name: 'University of Birmingham',
    chineseName: '伯明翰大学',
    country: '英国',
    logo: '/images/schools/birmingham.png',
    qsRank: 91,
    degrees: ['本科', '硕士'],
    specialties: ['商科', '计算机'],
    verified: true
  },
  // 更多学校数据...
];

// 筛选选项
const countries = ['全部', '英国', '澳大利亚', '加拿大', '美国', '新加坡', '马来西亚'];
const degreeTypes = ['全部', '大专', '本科', '硕士', '博士'];
const specialties = ['全部', '商科', '工程', '计算机', '医学', '艺术', '教育'];

export default function SchoolsPage() {
  const [selectedCountry, setSelectedCountry] = useState('全部');
  const [selectedDegree, setSelectedDegree] = useState('全部');
  const [selectedSpecialty, setSelectedSpecialty] = useState('全部');

  return (
    <Layout>
      <SEO
        title="全球认证院校资源库 - 300+国际高校认证服务"
        description="提供全球300+所知名院校的学历认证服务，包括英国、澳大利亚、加拿大等国家的顶尖大学。"
        keywords={['学历认证', '国际院校', '大学认证', '留学认证', '学历办理']}
      />

      <main className="min-h-screen px-6 py-12 bg-white text-gray-800">
        {/* 页面标题与引导 */}
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">全球认证院校资源库</h1>
          <p className="text-lg text-gray-600">支持300+ 所国际高校认证服务，一键查找目标院校</p>
        </section>

        {/* 筛选功能模块 */}
        <section className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <select 
            className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countries.map(country => (
              <option key={country} value={country}>
                {country === '全部' ? '选择国家/地区' : country}
              </option>
            ))}
          </select>
          <select 
            className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedDegree}
            onChange={(e) => setSelectedDegree(e.target.value)}
          >
            {degreeTypes.map(degree => (
              <option key={degree} value={degree}>
                {degree === '全部' ? '选择学历类型' : degree}
              </option>
            ))}
          </select>
          <select 
            className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            {specialties.map(specialty => (
              <option key={specialty} value={specialty}>
                {specialty === '全部' ? '选择专业方向' : specialty}
              </option>
            ))}
          </select>
        </section>

        {/* 学校列表区域 */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map(school => (
            <div key={school.id} className="border shadow-sm rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="relative h-16 mb-4">
                <Image
                  src={school.logo}
                  alt={school.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">{school.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{school.chineseName}</p>
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <span className="mr-2">🌍 {school.country}</span>
                <span>🏆 QS排名: {school.qsRank}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {school.degrees.map(degree => (
                  <span key={degree} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {degree}
                  </span>
                ))}
              </div>
              <Link href={`/schools/${school.id}`}>
                <a className="block w-full bg-blue-600 text-white text-center rounded-xl py-2 hover:bg-blue-700 transition">
                  查看详情 →
                </a>
              </Link>
            </div>
          ))}
        </section>

        {/* 推荐模块 */}
        <section className="mt-16 bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">🔥 热门推荐院校</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {schools.slice(0, 3).map(school => (
              <div key={school.id} className="bg-white p-4 rounded-xl shadow">
                <h4 className="font-semibold mb-1">{school.name}</h4>
                <p className="text-sm text-gray-500">{school.country} · QS排名: {school.qsRank}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 浮动 WhatsApp 按钮 */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg z-50 flex items-center"
        >
          <span className="mr-2">📲</span>
          立即咨询 WhatsApp
        </a>
      </main>
    </Layout>
  );
} 