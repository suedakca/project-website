'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

const projects = [
  { id: 1, image: '/images/gallery/slide1.png', category: 'Exterior', span: 'col-span-12 md:col-span-8 row-span-2' },
  { id: 2, image: '/images/gallery/slide2.png', category: 'Interior', span: 'col-span-12 md:col-span-4 row-span-1' },
  { id: 3, image: '/images/gallery/slide3.png', category: 'Product', span: 'col-span-12 md:col-span-4 row-span-1' },
  { id: 4, image: '/images/gallery/slide4.png', category: 'Architecture', span: 'col-span-12 md:col-span-6 row-span-1' },
  { id: 5, image: '/images/gallery/slide5.png', category: 'Animation', span: 'col-span-12 md:col-span-6 row-span-1' },
];

export default function FeaturedProjects() {
  const t = useTranslations();

  return (
    <section className="bg-[#0a0a0a] py-32 text-white border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#040DBF] uppercase tracking-[0.4em] text-[12px] font-bold mb-4"
            >
              Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[40px] md:text-[64px] font-extrabold leading-none"
            >
              Featured<br/>Works
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/portfolio" 
              className="group flex items-center gap-4 text-[14px] uppercase tracking-widest font-semibold hover:text-[#040DBF] transition-colors"
            >
              {t('show_all')}
              <span className="w-12 h-[2px] bg-white group-hover:bg-[#040DBF] transition-colors relative overflow-hidden">
                <span className="absolute inset-0 bg-[#040DBF] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-12 auto-rows-[250px] gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${project.span}`}
            >
              <Image 
                src={project.image} 
                alt={`${project.category} Project`} 
                fill 
                className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[#040DBF] text-[12px] uppercase tracking-widest font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  View Project
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
