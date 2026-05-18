'use client';

import { useState, useMemo, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  // --- INTERIORS ---
  { id: 1, type: 'interior', img: '/images/project/interior/newport-entrance-hall-01.webp', title: 'Newport Entrance I' },
  { id: 2, type: 'interior', img: '/images/project/interior/newport-entrance-hall-02.webp', title: 'Newport Entrance II' },
  { id: 3, type: 'interior', img: '/images/project/interior/newport-entrance-hall-03.webp', title: 'Newport Entrance III' },
  { id: 4, type: 'interior', img: '/images/project/interior/newport-entrance-hall-04.webp', title: 'Newport Entrance IV' },
  { id: 5, type: 'interior', img: '/images/project/interior/newport-entrance-hall-05.webp', title: 'Newport Entrance V' },
  { id: 6, type: 'interior', img: '/images/project/interior/newport-entrance-hall-06.webp', title: 'Newport Entrance VI' },
  { id: 7, type: 'interior', img: '/images/project/interior/newport-entrance-hall-07.webp', title: 'Newport Entrance VII' },
  { id: 8, type: 'interior', img: '/images/project/interior/avangard-office-executive-room-01.jpg', title: 'Avangard Office I' },
  { id: 9, type: 'interior', img: '/images/project/interior/avangard-office-executive-room-02.jpg', title: 'Avangard Office II' },
  { id: 10, type: 'interior', img: '/images/project/interior/avangard-office-executive-room-03.jpg', title: 'Avangard Office III' },
  { id: 11, type: 'interior', img: '/images/project/interior/avangard-office-room.jpg', title: 'Avangard Studio' },
  { id: 12, type: 'interior', img: '/images/project/interior/avangard-office-vip-room-01.jpg', title: 'VIP Suite I' },
  { id: 13, type: 'interior', img: '/images/project/interior/avangard-office-vip-room-02.jpg', title: 'VIP Suite II' },
  { id: 14, type: 'interior', img: '/images/project/interior/avangard-office-yonetici-03.jpg', title: 'Management Suite' },
  { id: 15, type: 'interior', img: '/images/project/interior/bed-room-01.jpg', title: 'Modern Bedroom I' },
  { id: 16, type: 'interior', img: '/images/project/interior/bed-room-02.jpg', title: 'Modern Bedroom II' },
  { id: 17, type: 'interior', img: '/images/project/interior/bed-room-03.jpg', title: 'Modern Bedroom III' },
  { id: 18, type: 'interior', img: '/images/project/interior/bed-room-04.jpg', title: 'Modern Bedroom IV' },
  { id: 19, type: 'interior', img: '/images/project/interior/gym-saloon-fitness.jpg', title: 'Fitness Lounge' },
  { id: 20, type: 'interior', img: '/images/project/interior/gym-saloon-reception.jpg', title: 'GYM Reception' },
  { id: 21, type: 'interior', img: '/images/project/interior/gym-saloon-swimimng-pool.jpg', title: 'Pool & Spa' },
  { id: 22, type: 'interior', img: '/images/project/interior/home-ze-bed-room-01.jpg', title: 'House Ze Bed I' },
  { id: 23, type: 'interior', img: '/images/project/interior/home-ze-bed-room-02.jpg', title: 'House Ze Bed II' },
  { id: 24, type: 'interior', img: '/images/project/interior/home-ze-changing-room.jpg', title: 'House Ze Wardrobe' },
  { id: 25, type: 'interior', img: '/images/project/interior/home-ze-dining-room.jpg', title: 'House Ze Dining' },
  { id: 26, type: 'interior', img: '/images/project/interior/home-ze-saloon.jpg', title: 'House Ze Saloon' },
  { id: 27, type: 'interior', img: '/images/project/interior/modern-office-manager-room.jpg', title: 'Modern Manager Room' },
  { id: 28, type: 'interior', img: '/images/project/interior/modern-office-reception.jpg', title: 'Modern Reception' },
  { id: 29, type: 'interior', img: '/images/project/interior/restaurant-0004.jpg', title: 'Cafe Concept' },
  { id: 30, type: 'interior', img: '/images/project/interior/restaurant-aegean-cuisine-01.jpg', title: 'Aegean Bistro' },
  { id: 31, type: 'interior', img: '/images/project/interior/restaurant-italian-cuisine-01.jpg', title: 'Italian Bistro I' },
  { id: 32, type: 'interior', img: '/images/project/interior/restaurant-italian-cuisine-02.jpg', title: 'Italian Bistro II' },
  { id: 33, type: 'interior', img: '/images/project/interior/sport-complex-turkish-hamam.jpg', title: 'Turkish Hamam' },
  { id: 34, type: 'interior', img: '/images/project/interior/villa-al-bed-room.jpg', title: 'Villa Al Bedroom' },
  { id: 35, type: 'interior', img: '/images/project/interior/villa-al-dining-room-00.jpg', title: 'Villa Al Dining' },
  { id: 36, type: 'interior', img: '/images/project/interior/villa-al-hall.jpg', title: 'Villa Al Entrance' },
  { id: 37, type: 'interior', img: '/images/project/interior/villa-al-kitchen-01.jpg', title: 'Villa Al Kitchen I' },
  { id: 38, type: 'interior', img: '/images/project/interior/villa-al-kitchen-02.jpg', title: 'Villa Al Kitchen II' },
  { id: 39, type: 'interior', img: '/images/project/interior/villa-al-kitchen-03.jpg', title: 'Villa Al Kitchen III' },
  { id: 40, type: 'interior', img: '/images/project/interior/villa-al-saloon.jpg', title: 'Villa Al Saloon' },
  { id: 41, type: 'interior', img: '/images/project/interior/villa-al-study-room-01.jpg', title: 'Villa Al Study I' },
  { id: 42, type: 'interior', img: '/images/project/interior/villa-al-study-room-02.jpg', title: 'Villa Al Study II' },
  { id: 43, type: 'interior', img: '/images/project/interior/children-room.jpeg', title: 'Kids Playroom' },
  { id: 44, type: 'interior', img: '/images/project/interior/classic-office-board-room.jpg', title: 'Classic Board Room' },

  // --- EXTERIORS ---
  { id: 50, type: 'exterior', img: '/images/project/exterior/villa-design-bg-01.jpg', title: 'Modern Villa I' },
  { id: 51, type: 'exterior', img: '/images/project/exterior/villa-design-bg-02.jpg', title: 'Modern Villa II' },
  { id: 52, type: 'exterior', img: '/images/project/exterior/villa-design-bg-03.jpg', title: 'Modern Villa III' },
  { id: 53, type: 'exterior', img: '/images/project/exterior/villa-design-bg-04.jpg', title: 'Modern Villa IV' },
  { id: 54, type: 'exterior', img: '/images/project/exterior/villa-design-bg-05.jpg', title: 'Modern Villa V' },
  { id: 55, type: 'exterior', img: '/images/project/exterior/villa-design-bg-06.jpg', title: 'Modern Villa Night' },
  { id: 56, type: 'exterior', img: '/images/project/exterior/village-design-ba.jpg', title: 'Village Landscape' },

  // --- PRODUCTS ---
  { id: 80, type: 'product', img: '/images/project/product/product-car-01.jpg', title: 'Car Visual I' },
  { id: 81, type: 'product', img: '/images/project/product/product-car-02.jpg', title: 'Car Visual II' },
  { id: 82, type: 'product', img: '/images/project/product/furniture-al.jpeg', title: 'Furniture AL' },
  { id: 83, type: 'product', img: '/images/project/product/furniture-ze.jpeg', title: 'Furniture ZE' },
  { id: 84, type: 'product', img: '/images/project/product/kablo-na.jpeg', title: 'Technical Display' },
  { id: 85, type: 'product', img: '/images/project/product/natura-moni-trace-minerals.jpg', title: 'Packshot Render' },
  { id: 86, type: 'product', img: '/images/project/product/recream-pisik-spreyi.jpg', title: 'Packaging Design' },
  { id: 87, type: 'product', img: '/images/project/product/reflor-family-box-01.png', title: 'Reflor Pharm I' },
  { id: 88, type: 'product', img: '/images/project/product/reflor-family-box-02.png', title: 'Reflor Pharm II' },
  { id: 89, type: 'product', img: '/images/project/product/reflor-family-sase-01.png', title: 'Reflor Sachet I' },
  { id: 90, type: 'product', img: '/images/project/product/reflor-family-sase-02.png', title: 'Reflor Sachet II' },
  { id: 91, type: 'product', img: '/images/project/product/reflor-family.png', title: 'Reflor Family' },
  { id: 92, type: 'product', img: '/images/project/product/sterimar-family-baby-nose-hygiene-100ml-baby-deniz-suyu.png', title: 'Sterimar Baby I' },
  { id: 93, type: 'product', img: '/images/project/product/sterimar-family-baby-nose-hygiene-100ml-baby-tikali-burun.png', title: 'Sterimar Baby II' },
  { id: 94, type: 'product', img: '/images/project/product/sterimar-family-baby-nose-hygiene-100ml-deniz-suyu.png', title: 'Sterimar Adult I' },
  { id: 95, type: 'product', img: '/images/project/product/sterimar-family-baby-nose-hygiene-100ml-tikali-burun.png', title: 'Sterimar Adult II' },
  { id: 96, type: 'product', img: '/images/project/product/sterimar-family-s-p-cold-20ml-soguk-alginligi.png', title: 'Sterimar Cold' },
  { id: 97, type: 'product', img: '/images/project/product/sterimar-family-ste-s-p-allergy-20ml-alerji.png', title: 'Sterimar Allergy' },
];

export default function PortfolioPage() {
  const t = useTranslations();
  const [activeFilter, setActiveFilter] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(p => p.type === activeFilter);
  }, [activeFilter]);

  if (!mounted) return null;

  const filters = [
    { id: 'all', label: 'Show All' },
    { id: 'interior', label: 'Interiors' },
    { id: 'exterior', label: 'Exteriors' },
    { id: 'product', label: 'Products Visual' },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-24 relative z-10 overflow-hidden">
      
      {/* HEADER SECTION */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 mb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#040DBF] uppercase tracking-[0.4em] text-[12px] font-bold mb-4"
        >
          {t('nav_projects')}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[40px] md:text-[64px] font-extrabold leading-none mb-12"
        >
          Selected Works
        </motion.h1>

        {/* FILTER SECTION */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          {filters.map((filter) => (
            <button 
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className="relative pb-2 text-[16px] md:text-[20px] font-semibold transition-all duration-300"
              style={{ color: activeFilter === filter.id ? '#fff' : 'rgba(255,255,255,0.4)' }}
            >
              {filter.label}
              {activeFilter === filter.id && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#040DBF]"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* PORTFOLIO GRID - Masonry/Mosaic Style */}
      <section className="max-w-[1920px] mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={project.id} 
                className="relative overflow-hidden group aspect-square border border-white/5"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                
                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040DBF]/90 via-[#040DBF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-10 z-20">
                  <p className="text-white/80 text-[10px] uppercase tracking-[0.3em] font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 mb-2">
                    {project.type}
                  </p>
                  <h3 className="text-white text-2xl lg:text-3xl font-bold uppercase text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
