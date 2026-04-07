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
    <header className="site-header header-style-1 nav-wide mobile-sider-drawer-menu">
      <div className={`main-bar-wraper ${isScrolled ? 'sticky-no-fixed is-fixed' : 'sticky-header'}`}>
        <div className="main-bar bg-white p-t10">
          <div className="container">
            <div className="logo-header">
              <div className="logo-header-inner logo-header-one">
                <Link href="/">
                  <Image src="/images/logo-dark.png" width={171} height={49} alt="Renderlike Logo" />
                </Link>
              </div>
            </div>

            {/* NAV Toggle Button */}
            <button 
              id="mobile-side-drawer" 
              type="button"
              className={`navbar-toggler ${isMobileMenuOpen ? '' : 'collapsed'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar icon-bar-first"></span>
              <span className="icon-bar icon-bar-two"></span>
              <span className="icon-bar icon-bar-three"></span>
            </button>

            {/* MAIN Nav */}
            <div className={`header-nav navbar-collapse collapse ${isMobileMenuOpen ? 'show' : ''}`}>
              <ul className="nav navbar-nav">
                <li className="mobile-about lg:hidden" style={{ height: '50px' }}>
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="fa-solid fa-x" style={{ fontSize: '24px', position: 'absolute', bottom: '30%', left: '45%' }}></i>
                  </button>
                </li>
                <li className={pathname === '/' ? 'active' : ''}>
                  <Link href="/">{t('nav_home')}</Link>
                </li>
                <li className={pathname.startsWith('/portfolio') ? 'active' : ''}>
                  <Link href="/portfolio">{t('nav_projects')}</Link>
                </li>
                <li className={pathname.startsWith('/about') ? 'active' : ''}>
                  <Link href="/about">{t('nav_about')}</Link>
                </li>
                <li className={pathname.startsWith('/contact') ? 'active' : ''}>
                  <Link href="/contact">{t('nav_contact')}</Link>
                </li>
                
                <li className="lang-switch-li">
                  <button 
                    onClick={() => handleLocaleChange('tr')} 
                    className={locale === 'tr' ? 'active' : ''}
                  >
                    TR
                  </button>
                  <span>/</span>
                  <button 
                    onClick={() => handleLocaleChange('en')} 
                    className={locale === 'en' ? 'active' : ''}
                  >
                    EN
                  </button>
                </li>

                <div className="mobil-social lg:hidden" style={{ borderTop: '1px solid white', width: '100%' }}>
                  <li>
                    <a href="http://linkedin.com/company/renderlike-3d-visual-studio" target="_blank">
                      <i className="fa-brands fa-linkedin-in" style={{ fontSize: '24px', color: 'white', padding: '20px' }}></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCVaKjFb1j6issDq8NTtb0EA" target="_blank">
                      <i className="fa-brands fa-youtube" style={{ fontSize: '24px', color: 'white', padding: '20px' }}></i>
                    </a>
                    <a href="https://www.instagram.com/renderlikeofficial/" target="_blank">
                      <i className="fa-brands fa-instagram" style={{ fontSize: '24px', color: 'white', padding: '20px' }}></i>
                    </a>
                  </li>
                </div>
              </ul>

              <div className="mobile-nav">
                <ul className="nav navbar-nav">
                  <li><a href="#">|</a></li>
                  <li>
                    <a href="https://www.instagram.com/renderlikeofficial/" target="_blank">
                      <i className="fa-brands fa-instagram" style={{ fontSize: '24px' }}></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://linkedin.com/company/renderlike-3d-visual-studio" target="_blank">
                      <i className="fa-brands fa-linkedin-in" style={{ fontSize: '24px' }}></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCVaKjFb1j6issDq8NTtb0EA" target="_blank">
                      <i className="fa-brands fa-youtube" style={{ fontSize: '24px' }}></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
