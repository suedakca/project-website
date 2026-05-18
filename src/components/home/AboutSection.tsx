'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutSection() {
  const t = useTranslations();

  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden text-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 z-10 relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#040DBF] uppercase tracking-[0.4em] text-[12px] font-bold mb-6"
          >
            Philosophy
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[40px] md:text-[56px] lg:text-[72px] font-extrabold leading-[1.1] mb-8"
          >
            {t('about_design')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[18px] md:text-[22px] text-white/60 font-light leading-relaxed max-w-xl italic border-l-2 border-white/10 pl-6"
          >
            {t('about_design_desc')}
          </motion.p>
        </div>

        {/* Image Grid/Composition */}
        <div className="w-full lg:w-1/2 relative h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute right-0 top-0 w-[80%] h-[80%] z-10 rounded-lg overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/gallery/slide2.png" 
              alt="Design Philosophy" 
              fill 
              className="object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-0 bottom-0 w-[60%] h-[60%] z-20 rounded-lg overflow-hidden shadow-2xl border-4 border-[#0a0a0a]"
          >
            <Image 
              src="/images/gallery/slide1.png" 
              alt="Design Detail" 
              fill 
              className="object-cover"
            />
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#040DBF]/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
