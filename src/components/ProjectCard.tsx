'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description?: string;
}

export default function ProjectCard({ title, category, image, description }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Milo Effect Overlay */}
        <div className="absolute inset-0 bg-brand/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-white text-xl font-bold uppercase tracking-widest mb-2">
              {title}
            </h3>
            <div className="h-1 w-12 bg-white mx-auto mb-4" />
            <p className="text-white/80 text-sm italic line-clamp-3">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Title Below (for non-hover state/mobile) */}
      <div className="p-4 bg-white lg:group-hover:bg-brand transition-colors duration-500">
        <p className="text-xs text-brand lg:group-hover:text-white/70 font-bold uppercase tracking-tighter mb-1">
          {category}
        </p>
        <h4 className="text-sm font-bold text-dark lg:group-hover:text-white truncate">
          {title}
        </h4>
      </div>
    </motion.div>
  );
}
