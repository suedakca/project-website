'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as any });
  };

  const isHome = pathname === '/';
  const isTransparent = isHome && !isScrolled;

  const headerBgClass = isTransparent 
    ? 'bg-transparent' 
    : 'bg-white/95 backdrop-blur-md shadow-sm';
    
  const textClass = isTransparent ? 'text-white' : 'text-dark';
  const hoverTextClass = 'hover:text-[#040DBF]';
  const logoFilter = isTransparent ? 'brightness-0 invert' : '';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${headerBgClass}`}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 h-[90px] flex justify-between items-center transition-all duration-500">
        
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center">
          <Image 
            src="/images/logo-dark.png" 
            width={171} 
            height={40} 
            alt="Renderlike Logo" 
            className={`transition-all duration-500 ${logoFilter}`} 
          />
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden relative z-50 p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: isTransparent && !isMobileMenuOpen ? 'white' : '#111' }}></div>
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: isTransparent && !isMobileMenuOpen ? 'white' : '#111' }}></div>
          <div className={`w-6 h-0.5 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: isTransparent && !isMobileMenuOpen ? 'white' : '#111' }}></div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          <ul className={`flex items-center space-x-8 text-[13px] font-medium uppercase tracking-wider ${textClass}`}>
            <li>
              <Link href="/" className={`transition-colors ${isHome ? 'text-[#040DBF]' : hoverTextClass}`}>
                {t('nav_home')}
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={`transition-colors ${pathname.startsWith('/portfolio') ? 'text-[#040DBF]' : hoverTextClass}`}>
                {t('nav_projects')}
              </Link>
            </li>
            <li>
              <Link href="/about" className={`transition-colors ${pathname.startsWith('/about') ? 'text-[#040DBF]' : hoverTextClass}`}>
                {t('nav_about')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`transition-colors ${pathname.startsWith('/contact') ? 'text-[#040DBF]' : hoverTextClass}`}>
                {t('nav_contact')}
              </Link>
            </li>
          </ul>

          <div className={`flex items-center space-x-2 text-[12px] font-bold ${textClass}`}>
            <button 
              onClick={() => handleLocaleChange('tr')} 
              className={`transition-colors ${locale === 'tr' ? 'text-[#040DBF]' : 'opacity-60 hover:opacity-100'}`}
            >
              TR
            </button>
            <span className="opacity-40">/</span>
            <button 
              onClick={() => handleLocaleChange('en')} 
              className={`transition-colors ${locale === 'en' ? 'text-[#040DBF]' : 'opacity-60 hover:opacity-100'}`}
            >
              EN
            </button>
          </div>

          <div className={`flex items-center space-x-5 pl-8 border-l ${isTransparent ? 'border-white/30' : 'border-gray-200'} ${textClass}`}>
            <a href="https://www.instagram.com/renderlikeofficial/" target="_blank" rel="noreferrer" className="hover:text-[#040DBF] transition-colors">
              <i className="fa-brands fa-instagram text-[16px]"></i>
            </a>
            <a href="http://linkedin.com/company/renderlike-3d-visual-studio" target="_blank" rel="noreferrer" className="hover:text-[#040DBF] transition-colors">
              <i className="fa-brands fa-linkedin-in text-[16px]"></i>
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-500 flex flex-col justify-center items-center ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className="flex flex-col items-center space-y-8 text-2xl font-semibold text-dark">
            <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_home')}</Link></li>
            <li><Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_projects')}</Link></li>
            <li><Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_about')}</Link></li>
            <li><Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_contact')}</Link></li>
          </ul>
        </div>

      </div>
    </header>
  );
}
