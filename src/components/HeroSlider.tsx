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

  // Animation Variants
  const textReveal = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.5 + i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    })
  };

  const currentSlide = slides[current];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Main Image */}
          <Image
            src={currentSlide.image}
            alt={t(currentSlide.titleKey)}
            fill
            className="object-cover opacity-70"
            priority
            sizes="100vw"
          />
          
          {/* Gradients for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 lg:px-32 z-10 pt-20">
            <div className="max-w-6xl overflow-hidden">
              <h1 className="uppercase leading-[1.1] mb-6 drop-shadow-2xl text-[48px] md:text-[64px] lg:text-[90px] font-extrabold text-white tracking-tight flex flex-wrap justify-center overflow-hidden">
                {t(currentSlide.titleKey).split(' ').map((word, i) => (
                  <motion.span
                    key={`${current}-${i}`}
                    custom={i}
                    variants={textReveal}
                    initial="hidden"
                    animate="visible"
                    className={`inline-block mx-2 ${i === 0 ? 'text-[#040DBF]' : 'text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70'}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <motion.p
                key={`desc-${current}`}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="font-light tracking-wider max-w-3xl mx-auto leading-relaxed text-[18px] md:text-[24px] text-white/90"
              >
                {t(currentSlide.descKey)}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern Progress Indicators */}
      <div className="absolute bottom-12 left-0 w-full px-10 lg:px-20 z-30 flex items-center justify-between">
        
        {/* Number Indicators */}
        <div className="text-white text-sm font-medium tracking-widest flex items-center gap-4">
          <span className="text-[#040DBF] text-lg">0{current + 1}</span>
          <span className="h-[1px] w-8 bg-white/30"></span>
          <span className="text-white/50">0{slides.length}</span>
        </div>

        {/* Progress Bars */}
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className="relative h-1 w-12 bg-white/20 overflow-hidden rounded-full transition-all hover:bg-white/40"
            >
              {idx === current && (
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 8, ease: "linear" }}
                  className="absolute top-0 left-0 h-full bg-[#040DBF]"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
