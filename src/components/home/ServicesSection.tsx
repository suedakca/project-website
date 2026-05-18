'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

const services = [
  {
    id: 'exterior',
    titleKey: 'about_exterior',
    descKey: 'about_exterior_desc',
    image: '/images/gallery/slide1.png'
  },
  {
    id: 'interior',
    titleKey: 'about_interior',
    descKey: 'about_interior_desc',
    image: '/images/gallery/slide4.png'
  },
  {
    id: 'product',
    titleKey: 'about_product',
    descKey: 'about_product_desc',
    image: '/images/gallery/slide3.png'
  },
  {
    id: 'animations',
    titleKey: 'about_animations',
    descKey: 'about_animations_desc',
    image: '/images/gallery/slide5.png'
  }
];

export default function ServicesSection() {
  const t = useTranslations();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-32 text-white relative z-10 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#040DBF] uppercase tracking-[0.4em] text-[12px] font-bold mb-4"
          >
            Our Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[36px] md:text-[52px] font-extrabold"
          >
            Capabilities
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative h-[500px] lg:h-[600px] rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <Image 
                src={service.image} 
                alt={t(service.titleKey)} 
                fill 
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              
              {/* Default Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
              
              {/* Hover Gradient Effect */}
              <div 
                className={`absolute inset-0 bg-[#040DBF]/80 mix-blend-multiply transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`} 
              />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-[28px] font-bold mb-4 transform transition-transform duration-500 group-hover:-translate-y-4">
                  {t(service.titleKey)}
                </h3>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    hoveredIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-white/80 font-light text-[15px] leading-relaxed transform -translate-y-4">
                    {t(service.descKey).replace(/"/g, '')}
                  </p>
                </div>

                {/* Animated Line */}
                <div className="w-full h-[2px] bg-white/20 mt-6 relative overflow-hidden">
                  <div 
                    className={`absolute top-0 left-0 h-full bg-white transition-all duration-700 ${
                      hoveredIndex === index ? 'w-full' : 'w-0'
                    }`} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
