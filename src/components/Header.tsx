'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as any });
  };

  return (
    <header className={`site-header header-style-1 nav-wide mobile-sider-drawer-menu ${pathname === '/' && !isScrolled ? 'header-transparent' : 'header-solid'}`}>
      <div className={`main-bar-wraper ${isScrolled ? 'sticky-no-fixed is-fixed' : 'sticky-header'}`}>
        <div 
          className={`main-bar ${pathname === '/' && !isScrolled ? 'bg-transparent' : 'bg-white'} transition-all duration-300 flex items-center`}
          style={{ 
            height: '90px', 
            backgroundColor: pathname === '/' && !isScrolled ? 'transparent' : 'white',
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.3s ease'
          }}
        >
          <div className="container-fluid px-10 lg:px-20 w-full flex justify-between items-center" style={{ width: '100%', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="logo-header">
              <div className="logo-header-inner logo-header-one flex items-center">
                <Link href="/">
                  <Image src="/images/logo-dark.png" width={171} height={40} alt="Renderlike Logo" style={{ height: '40px', width: 'auto' }} />
                </Link>
              </div>
            </div>

            {/* NAV Toggle Button (Mobile) */}
            <button 
              id="mobile-side-drawer" 
              type="button"
              className={`navbar-toggler lg:hidden ${isMobileMenuOpen ? '' : 'collapsed'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ display: 'none' }} /* Assuming desktop-first fix, we can refine mobile later */
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar icon-bar-first bg-dark"></span>
              <span className="icon-bar icon-bar-two bg-dark"></span>
              <span className="icon-bar icon-bar-three bg-dark"></span>
            </button>

            {/* MAIN Nav & Socials */}
            <div className={`header-nav navbar-collapse collapse ${isMobileMenuOpen ? 'show flex' : 'hidden lg:flex'} items-center`} style={{ display: 'flex', alignItems: 'center' }}>
              <ul className="nav navbar-nav flex items-center mb-0" style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
                <li style={{ padding: '0 15px' }}>
                  <Link href="/" style={{ fontSize: '12px', textTransform: 'uppercase', color: pathname === '/' ? '#040DBF' : '#666', textDecoration: 'none', fontWeight: pathname === '/' ? '600' : '400' }}>{t('nav_home')}</Link>
                </li>
                <li style={{ padding: '0 15px' }}>
                  <Link href="/portfolio" style={{ fontSize: '12px', textTransform: 'uppercase', color: pathname.startsWith('/portfolio') ? '#040DBF' : '#666', textDecoration: 'none' }}>{t('nav_projects')}</Link>
                </li>
                <li style={{ padding: '0 15px' }}>
                  <Link href="/about" style={{ fontSize: '12px', textTransform: 'uppercase', color: pathname.startsWith('/about') ? '#040DBF' : '#666', textDecoration: 'none' }}>{t('nav_about')}</Link>
                </li>
                <li style={{ padding: '0 15px' }}>
                  <Link href="/contact" style={{ fontSize: '12px', textTransform: 'uppercase', color: pathname.startsWith('/contact') ? '#040DBF' : '#666', textDecoration: 'none' }}>{t('nav_contact')}</Link>
                </li>
                
                <li className="lang-switch-li flex items-center px-4" style={{ display: 'flex', alignItems: 'center', padding: '0 20px' }}>
                  <button 
                    onClick={() => handleLocaleChange('tr')} 
                    style={{ fontSize: '12px', fontWeight: 'bold', background: 'none', border: 'none', cursor: 'pointer', color: locale === 'tr' ? '#040DBF' : '#999' }}
                  >
                    TR
                  </button>
                  <span style={{ margin: '0 5px', color: '#ccc' }}>/</span>
                  <button 
                    onClick={() => handleLocaleChange('en')} 
                    style={{ fontSize: '12px', fontWeight: 'bold', background: 'none', border: 'none', cursor: 'pointer', color: locale === 'en' ? '#040DBF' : '#999' }}
                  >
                    EN
                  </button>
                </li>

                {/* Social Pipe & Icons */}
                <li className="hidden lg:flex items-center ml-4 pl-10 border-l border-[#040DBF]/30 h-6" style={{ borderLeft: '1px solid rgba(4,13,191,0.3)', paddingLeft: '30px', marginLeft: '20px', height: '20px', display: 'flex', alignItems: 'center' }}>
                  <div className="flex space-x-5" style={{ display: 'flex', gap: '20px' }}>
                    <a href="https://www.instagram.com/renderlikeofficial/" target="_blank" rel="noreferrer" style={{ color: '#333' }}>
                      <i className="fa-brands fa-instagram" style={{ fontSize: '18px' }}></i>
                    </a>
                    <a href="http://linkedin.com/company/renderlike-3d-visual-studio" target="_blank" rel="noreferrer" style={{ color: '#333' }}>
                      <i className="fa-brands fa-linkedin-in" style={{ fontSize: '18px' }}></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCVaKjFb1j6issDq8NTtb0EA" target="_blank" rel="noreferrer" style={{ color: '#333' }}>
                      <i className="fa-brands fa-youtube" style={{ fontSize: '18px' }}></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
