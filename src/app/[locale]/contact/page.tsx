'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-40 pb-24 relative z-10 overflow-hidden">
      
      {/* HEADER SECTION */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 mb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#040DBF] uppercase tracking-[0.4em] text-[12px] font-bold mb-4"
        >
          {t('nav_contact')}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[40px] md:text-[64px] font-extrabold leading-none mb-12"
        >
          Get in Touch
        </motion.h1>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* IMAGE / VIBE COLUMN */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] h-[400px] lg:h-[700px] relative rounded-2xl overflow-hidden border border-white/10"
          >
            <Image 
              src="/images/gallery/contact.jpeg" 
              alt="Contact Renderlike" 
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-10 left-10">
              <div className="w-12 h-[2px] bg-[#040DBF] mb-6" />
              <p className="text-white/60 text-lg font-light italic max-w-sm">
                &quot;Let&apos;s blend your unique design with realistic lighting and prepare you to present perfect results.&quot;
              </p>
            </div>
          </motion.div>

          {/* CONTACT INFO COLUMN */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[55%] flex flex-col justify-center"
          >
            <div className="mb-16">
              <p className="uppercase tracking-[0.3em] text-[12px] font-bold text-[#040DBF] mb-4">
                {t('contact_location')}
              </p>
              <h2 className="text-[48px] lg:text-[72px] font-extrabold mb-6 leading-none">
                {t('contact_city')}
              </h2>
              <div 
                className="text-[18px] lg:text-[22px] font-light mb-12 leading-relaxed text-white/70 max-w-lg border-l-2 border-white/10 pl-6" 
                dangerouslySetInnerHTML={{ __html: t('contact_address').replace(/\n/g, '<br/>') }} 
              />
              
              <div className="mt-8">
                <p className="uppercase tracking-widest text-[10px] mb-3 opacity-50 font-bold">
                  Direct Line
                </p>
                <a href="mailto:hello@renderlike.com" className="text-[28px] lg:text-[40px] font-bold hover:text-[#040DBF] transition-colors">
                  hello@renderlike.com
                </a>
              </div>
            </div>

            {/* FIXED GOOGLE MAP */}
            <div className="w-full h-[300px] lg:h-[350px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.146476106606!2d32.81156827653835!3d39.90641177152643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f964af3eb31%3A0xe7a505e7f19114ad!2s1071+Usta+Ankara!5e0!3m2!1str!2str!4v1712498200000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
