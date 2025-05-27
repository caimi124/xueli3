import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: '服务项目',
      links: [
        { label: '学历认证', href: '/services' },
        { label: '院校库', href: '/schools' },
        { label: '成功案例', href: '/cases' },
        { label: '认证指南', href: '/guide' }
      ]
    },
    {
      title: '关于我们',
      links: [
        { label: '公司简介', href: '/about' },
        { label: '联系我们', href: '/contact' },
        { label: '常见问题', href: '/faq' },
        { label: '隐私政策', href: '/privacy' }
      ]
    },
    {
      title: '联系方式',
      links: [
        { label: 'WhatsApp: +1234567890', href: 'https://wa.me/1234567890' },
        { label: 'Email: contact@example.com', href: 'mailto:contact@example.com' },
        { label: '工作时间: 周一至周五 9:00-18:00', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">学历认证</h3>
            <p className="text-gray-400 mb-4">
              专业提供全球学历认证服务，7-15天快速交付，确保100%真实可查。
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} 学历认证. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 