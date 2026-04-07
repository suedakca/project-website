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
    <div className="rev_slider_wrapper fullscreen-container bg-black overflow-hidden relative h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {/* Main Image */}
          <Image
            src={slides[current].image}
            alt={t(slides[current].titleKey)}
            fill
            className="object-cover"
            priority
          />
          
          {/* Overlays to match Revolution Slider layers */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[5]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-[5]" />

          {/* Content Layers */}
          <div className="absolute inset-0 flex flex-col justify-end pb-32 px-10 lg:px-32 z-10">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            >
              <div className="tp-caption BigBold-Title text-white uppercase font-black leading-none mb-4">
                <span className="text-[#2a5ced]">{t(slides[current].titleKey)}</span>
              </div>
              
              <div className="tp-caption BigBold-SubTitle text-white text-xl lg:text-3xl font-light max-w-2xl leading-relaxed">
                {t(slides[current].descKey)}
              </div>
            </motion.div>
          </div>

          {/* Decorative Border (Slide Layer 8) */}
          <div className="hidden lg:block absolute inset-0 border-[80px] border-white/5 pointer-events-none z-[20] mx-10 my-10" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full border border-white/50 transition-all ${
              idx === current ? 'bg-[#2a5ced] border-[#2a5ced] scale-125' : 'bg-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
