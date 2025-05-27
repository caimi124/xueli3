import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('all');

  // 可认证国家和学历类型
  const certificationOptions = [
    {
      id: 1,
      title: '美国学历认证',
      description: '提供Harvard, MIT, Stanford等多所顶尖大学的学士、硕士、博士学历认证',
      icon: 'usa'
    },
    {
      id: 2,
      title: '英国学历认证',
      description: '包括Oxford, Cambridge, LSE等众多世界名校的本科、研究生学历认证',
      icon: 'uk'
    },
    {
      id: 3,
      title: '澳洲学历认证',
      description: '覆盖悉尼大学、墨尔本大学等澳洲八校联盟的全类型学历证明',
      icon: 'australia'
    },
    {
      id: 4,
      title: '加拿大学历认证',
      description: '多伦多大学、麦吉尔大学等加拿大名校的学历认证服务',
      icon: 'canada'
    },
    {
      id: 5,
      title: '欧洲学历认证',
      description: '提供德国、法国、意大利等欧洲多国的学历认证方案',
      icon: 'europe'
    },
    {
      id: 6,
      title: '亚洲学历认证',
      description: '包括日本、新加坡、香港等亚洲地区的优质院校学历认证',
      icon: 'asia'
    }
  ];

  // 认证流程
  const certificationProcess = [
    {
      step: 1,
      title: '免费咨询评估',
      description: '通过WhatsApp联系我们，专业顾问将为您提供个性化的学历认证方案评估'
    },
    {
      step: 2,
      title: '定制认证方案',
      description: '根据您的具体需求，我们为您量身定制认证材料和服务方案'
    },
    {
      step: 3,
      title: '快速安全交付',
      description: '7-15个工作日内，安全交付您的认证材料，全程保密，安全无忧'
    }
  ];

  // 成功案例
  const successCases = [
    {
      id: 1,
      name: '李先生 - 英国硕士学历认证',
      description: '帮助客户顺利通过雇主背景调查，获得跨国公司高管职位',
      image: '/images/placeholder.jpg'
    },
    {
      id: 2,
      name: '王女士 - 美国MBA认证',
      description: '协助客户完成海外移民学历要求，顺利获批移民申请',
      image: '/images/placeholder.jpg'
    },
    {
      id: 3,
      name: '张先生 - 澳洲本科学历认证',
      description: '为客户提供学历认证，成功申请世界名校研究生项目',
      image: '/images/placeholder.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Academic Credential Authentication Services</title>
        <meta name="description" content="Professional academic credential authentication services for international students" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <SEO
          title="学历认证服务 - 100%真实可查的国际学历认证服务平台"
          description="专业提供全球学历认证服务，7-15天快速交付，确保100%真实可查，满足就业、留学、移民等多种需求。"
          keywords={['学历认证', '国际学位认证', '真实可查', '学历证书', '快速认证', '硕士学位认证', '本科学历认证']}
        />
        
        {/* Hero Section */}
        <section className="relative h-[600px] bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold mb-6"
              >
                Professional Academic Credential Authentication
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl mb-8"
              >
                Fast, reliable, and internationally recognized credential verification services
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Advantages Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">100% Verifiable</h3>
                <p className="text-gray-600">All credentials are thoroughly verified and authenticated by our expert team</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">7-Day Processing</h3>
                <p className="text-gray-600">Quick turnaround time with our efficient verification process</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Global Recognition</h3>
                <p className="text-gray-600">Internationally recognized authentication services</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['United States', 'United Kingdom', 'Canada', 'Australia'].map((country) => (
                <motion.div
                  key={country}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 relative">
                    <Image
                      src={`/images/${country.toLowerCase().replace(' ', '-')}.jpg`}
                      alt={country}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{country}</h3>
                    <p className="text-gray-600">Professional credential authentication services</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Submit Documents',
                  description: 'Upload your academic credentials and required documents'
                },
                {
                  title: 'Verification',
                  description: 'Our team verifies the authenticity of your documents'
                },
                {
                  title: 'Certification',
                  description: 'Receive your authenticated credentials within 7 days'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">CS{index}</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">Case Study {index}</h3>
                        <p className="text-sm text-gray-500">Success Story</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Read about how we helped students achieve their academic goals through our authentication services.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Begin your credential authentication process today</p>
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Contact Us
            </Link>
          </div>
        </section>
      </Layout>
    </div>
  );
} 