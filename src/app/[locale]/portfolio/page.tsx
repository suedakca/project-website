'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const projects = [
  // INTERIOR
  { id: 1, type: 'interior', img: '/images/project/interior/Bathroom Design - 01.jpg', title: 'Bathroom Design' },
  { id: 2, type: 'interior', img: '/images/project/interior/Kitchen Design - 01.jpg', title: 'Kitchen Design' },
  { id: 3, type: 'interior', img: '/images/project/interior/Living Room - 02.jpg', title: 'Living Room' },
  { id: 4, type: 'interior', img: '/images/project/interior/Office - 01.jpg', title: 'Office Design' },
  // EXTERIOR
  { id: 5, type: 'exterior', img: '/images/project/exterior/Villa Design-BG-01.jpg', title: 'Villa Exterior' },
  { id: 6, type: 'exterior', img: '/images/project/exterior/Villa Design-BG-02.jpg', title: 'Modern Villa' },
  { id: 7, type: 'exterior', img: '/images/project/exterior/Villa Design-BG-03.jpg', title: 'Luxury Residence' },
  // PRODUCT
  { id: 8, type: 'product', img: '/images/project/product/PRODUCT CAR-01.jpg', title: 'Product Visualization' },
  { id: 9, type: 'product', img: '/images/project/product/Sterimar Family-BABY NOSE HYGIENE 100ML BABY DENIZ SUYU.png', title: 'Packaging Design' },
];

export default function PortfolioPage() {
  const t = useTranslations();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(p => p.type === activeFilter);
  }, [activeFilter]);

  return (
    <div className="page-content pt-24 lg:pt-0">
      {/* FILTER SECTION */}
      <div className="filter-cont mb-0 py-12 bg-white">
        <section className="filter-old sticky top-24 z-30">
          <ul className="filter flex justify-center items-center list-none p-0">
            <li className={activeFilter === 'all' ? 'active' : ''}>
              <button onClick={() => setActiveFilter('all')}>{t('show_all')}</button>
            </li>
            <li className={activeFilter === 'interior' ? 'active' : ''}>
              <button onClick={() => setActiveFilter('interior')}>{t('about_interior')}</button>
            </li>
            <li className={activeFilter === 'exterior' ? 'active' : ''}>
              <button onClick={() => setActiveFilter('exterior')}>{t('about_exterior')}</button>
            </li>
            <li className={activeFilter === 'product' ? 'active' : ''}>
              <button onClick={() => setActiveFilter('product')}>{t('about_product')}</button>
            </li>
          </ul>
        </section>
      </div>

      {/* PORTFOLIO GRID */}
      <section className="portfolio-section fullscreen min-h-screen">
        <div className="portfolio-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`portfolio-post ${project.type} animate-fadeIn`}>
              <div className="box effect-milo relative cursor-pointer group overflow-hidden aspect-[4/3] lg:aspect-square">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* BLUE OVERLAY */}
                <div className="absolute inset-0 bg-[#2a5ced]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center z-10">
                  <p className="text-white text-2xl lg:text-3xl font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                    {project.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
