import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Listen to scroll events to add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return router.pathname === path || router.pathname.startsWith(`${path}/`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  const navigation = [
    { 
      name: router.locale === 'zh' ? '首页' : 'Home', 
      href: '/' 
    },
    { 
      name: router.locale === 'zh' ? '博客' : 'Blog', 
      href: '/blog' 
    },
    { 
      name: router.locale === 'zh' ? '联系我们' : 'Contact', 
      href: '/contact' 
    },
  ];

  return (
    <header 
      className={`sticky top-0 z-30 bg-white ${
        scrolled ? 'shadow-md' : ''
      } transition-shadow`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center">
              <span className="text-xl font-bold text-blue-600">学历认证服务</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a 
                className={`text-sm font-medium hover:text-blue-600 ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                首页
              </a>
            </Link>
            <Link href="/services">
              <a 
                className={`text-sm font-medium hover:text-blue-600 ${
                  isActive('/services') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                服务
              </a>
            </Link>
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-medium group-hover:text-blue-600 ${
                  isActive('/schools') || isActive('/guides') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                资源
                <svg 
                  className="ml-1 w-4 h-4" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white hidden group-hover:block">
                <div className="py-1" role="menu">
                  <Link href="/schools">
                    <a 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      院校数据库
                    </a>
                  </Link>
                  <Link href="/guides">
                    <a 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      国家认证指南
                    </a>
                  </Link>
                  <Link href="/tools">
                    <a 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      互动工具
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      博客文章
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/contact">
              <a 
                className={`text-sm font-medium hover:text-blue-600 ${
                  isActive('/contact') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                联系我们
              </a>
            </Link>
          </nav>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Link href="/contact">
              <a className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                在线咨询
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                  />
                ) : (
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <a 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                首页
              </a>
            </Link>
            <Link href="/services">
              <a 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/services') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                服务
              </a>
            </Link>
            <Link href="/schools">
              <a 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/schools') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                院校数据库
              </a>
            </Link>
            <Link href="/guides">
              <a 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/guides') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                国家认证指南
              </a>
            </Link>
            <Link href="/tools">
              <a 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/tools') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                互动工具
              </a>
            </Link>
            <Link href="/blog">
              <a 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/blog') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                博客
              </a>
            </Link>
            <Link href="/contact">
              <a 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/contact') 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                联系我们
              </a>
            </Link>
            <div className="pt-4">
              <Link href="/contact">
                <a 
                  className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  在线咨询
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 