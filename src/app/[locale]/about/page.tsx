'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const categories = [
  { id: 'interior', key: 'about_interior', image: '/images/about/ABOUT_INTERIOR.png', descKey: 'about_interior_desc' },
  { id: 'exterior', key: 'about_exterior', image: '/images/about/ABOUT_EX.png', descKey: 'about_exterior_desc' },
  { id: 'products', key: 'about_product', image: '/images/about/ABOUT_PRODUCT.png', descKey: 'about_product_desc' },
  { id: 'animations', key: 'about_animations', image: '/images/about/ABOUT_ANI.png', descKey: 'about_animations_desc' },
  { id: 'design', key: 'about_design', image: '/images/about/ABOUT_IN-EX.png', descKey: 'about_design_desc' },
];

export default function AboutPage() {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState('interior');

  return (
    <div className="about-container pb-24">
      <h1 className="sr-only">{t('nav_about')} - Renderlike</h1>
      
      {/* FILTER SECTION */}
      <div className="filter-cont mb-12">
        <section className="filter-old">
          <ul className="filter flex justify-center items-center list-none p-0">
            {categories.map((cat) => (
              <li key={cat.id} className={activeTab === cat.id ? 'active' : ''}>
                <button 
                  onClick={() => setActiveTab(cat.id)}
                  className="transition-all hover:opacity-100"
                >
                  {t(cat.key)}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="container mx-auto">
        {categories.map((cat) => (
          activeTab === cat.id && (
            <div key={cat.id} className={`cont-about ${cat.id}-about animate-fadeIn`}>
              <div className="about-div">
                <div className="img-about">
                  <Image 
                    src={cat.image} 
                    alt={t(cat.key)} 
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="word-about">
                  <div className="word">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 uppercase border-b-2 border-white/20 pb-4">
                      {t(cat.key)}
                    </h2>
                    <p className="text-lg lg:text-xl font-light leading-relaxed mb-8">
                      {t(cat.descKey)}
                    </p>
                    <div className="copyright text-sm opacity-60">
                      @Renderlike
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        ))}
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
