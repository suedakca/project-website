'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/images/gallery/slide1.png',
    titleKey: 'hero_exterior_design',
    descKey: 'hero_exterior_desc',
  },
  {
    id: 2,
    image: '/images/gallery/slide2.png',
    titleKey: 'hero_in_ex_design',
    descKey: 'hero_in_ex_desc',
  },
  {
    id: 3,
    image: '/images/gallery/slide3.png',
    titleKey: 'hero_products_visual',
    descKey: 'hero_products_desc',
  },
  {
    id: 4,
    image: '/images/gallery/slide4.png',
    titleKey: 'hero_interior_design',
    descKey: 'hero_interior_desc',
  },
  {
    id: 5,
    image: '/images/gallery/slide5.png',
    titleKey: 'hero_animations',
    descKey: 'hero_animations_desc',
  },
];

export default function HeroSlider() {
  const t = useTranslations();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="rev_slider_wrapper fullscreen-container bg-black overflow-hidden relative" 
      style={{ height: '100vh', width: '100vw' }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Main Image */}
          <Image
            src={slides[current].image}
            alt={t(slides[current].titleKey)}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          
          {/* Overlays */}
          <div className="absolute inset-0 z-[5]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
          <div className="absolute inset-0 z-[5]" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), transparent)' }} />

          {/* Content Layers */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 lg:px-32 z-10" style={{ zIndex: 10, paddingTop: '180px' }}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="max-w-5xl"
            >
              <h1 
                className="uppercase leading-[1.1] mb-6 drop-shadow-2xl"
                style={{ fontSize: '64px', fontWeight: 800, color: 'white', fontFamily: 'Poppins, sans-serif' }}
              >
                {t(slides[current].titleKey).split(' ').map((word, i) => (
                  <span key={i} style={{ color: i === 0 ? '#040DBF' : 'white' }}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              
              <p 
                className="font-light tracking-wide max-w-3xl mx-auto leading-relaxed opacity-90"
                style={{ fontSize: '22px', color: 'white', fontFamily: 'Poppins, sans-serif' }}
              >
                {t(slides[current].descKey)}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-30" style={{ zIndex: 30 }}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="w-3 h-3 rounded-full border border-white/50 transition-all"
            style={{ 
              backgroundColor: idx === current ? '#040DBF' : 'transparent',
              borderColor: idx === current ? '#040DBF' : 'rgba(255,255,255,0.5)',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              transform: idx === current ? 'scale(1.25)' : 'scale(1)'
            }}
          />
        ))}
      </div>
    </div>
  );
}
