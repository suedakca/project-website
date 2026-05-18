'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

const categories = [
  { id: 'interior', key: 'about_interior', image: '/images/about/ABOUT_INTERIOR.png', descKey: 'about_interior_desc' },
  { id: 'exterior', key: 'about_exterior', image: '/images/about/ABOUT_EX.png', descKey: 'about_exterior_desc' },
  { id: 'products', key: 'about_product', image: '/images/about/ABOUT_PRODUCT.png', descKey: 'about_product_desc' },
  { id: 'animations', key: 'about_animations', image: '/images/about/ABOUT_ANI.png', descKey: 'about_animations_desc' },
  { id: 'design', key: 'about_design', image: '/images/about/ABOUT_IN-EX.png', descKey: 'about_design_desc' },
];

export default function AboutPage() {
  const t = useTranslations();

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-40 pb-24 relative z-10 overflow-hidden">
      
      {/* HEADER SECTION */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 mb-20 lg:mb-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#040DBF] uppercase tracking-[0.4em] text-[12px] font-bold mb-4"
        >
          {t('nav_about')}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[40px] md:text-[64px] font-extrabold leading-none mb-6"
        >
          Our Story & Vision
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-1px h-24 bg-gradient-to-b from-white/30 to-transparent mx-auto mt-12"
        />
      </div>

      {/* CONTENT SECTIONS */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col gap-32">
          {categories.map((cat, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={cat.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
              >
                
                {/* Image Column */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-2xl group">
                    <Image 
                      src={cat.image} 
                      alt={t(cat.key)} 
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>

                {/* Text Column */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[#040DBF] font-mono text-sm tracking-widest opacity-80">
                      0{idx + 1}
                    </span>
                    <div className="h-[1px] w-12 bg-white/20" />
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-bold mb-8 uppercase leading-tight">
                    {t(cat.key)}
                  </h2>
                  <p className="text-lg lg:text-xl font-light leading-relaxed text-white/70 border-l-2 border-[#040DBF] pl-6 italic mb-10">
                    &quot;{t(cat.descKey).replace(/"/g, '')}&quot;
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm tracking-widest uppercase opacity-40 font-bold">
                    <span>Renderlike Studio</span>
                    <span className="w-1 h-1 rounded-full bg-current" />
                    <span>Est. 2024</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
