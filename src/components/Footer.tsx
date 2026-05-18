import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-dark text-white pt-24 pb-8 relative z-10 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        {/* Contact Card */}
        <div className="flex flex-col lg:flex-row bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden min-h-[500px] mb-20 relative">
          
          {/* Image Section */}
          <div className="w-full lg:w-[60%] relative min-h-[350px] lg:min-h-full">
            <Image 
              src="/images/gallery/contact.jpeg" 
              alt="Contact Renderlike" 
              fill
              className="object-cover opacity-80"
              style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)' }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]"></div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-[40%] p-10 lg:p-16 flex flex-col justify-center relative z-10">
            <p className="uppercase tracking-[0.3em] text-[11px] font-medium mb-4 text-[#040DBF]">
              {t('contact_location')}
            </p>
            <h2 className="text-[48px] lg:text-[72px] font-bold mb-6 leading-none tracking-tight">
              {t('contact_city')}
            </h2>
            <p className="text-[16px] lg:text-[18px] font-light mb-10 leading-relaxed text-white/70 whitespace-pre-line">
              {t('contact_address')}
            </p>
            
            <a 
              href="https://www.google.com/maps/dir//1071+Usta+Ankara+%C4%B0%C5%9F+ve+Ya%C5%9Fam+Merkezi,+%C3%87ukurambar,+K%C4%B1z%C4%B1l%C4%B1rmak+Mah,+1443.+Cd.+No:25,+06530+%C3%87ankaya%2FAnkara/@39.9074686,32.8120304,15z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-white border-b border-white/30 pb-1 w-max hover:border-white transition-colors font-medium mb-16"
            >
              Google Maps
            </a>
            
            <div className="mt-auto border-l-2 border-[#040DBF] pl-6">
              <p className="uppercase tracking-widest text-[10px] mb-3 text-white/50 font-bold">
                {t('contact_get_in_touch')}
              </p>
              <a href="mailto:hello@renderlike.com" className="text-[22px] lg:text-[28px] font-semibold hover:text-[#040DBF] transition-colors">
                hello@renderlike.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/40 text-[13px] font-medium border-t border-white/10 pt-8">
          <div className="mb-4 md:mb-0 flex items-center space-x-2">
            <Image src="/images/logo-dark.png" width={100} height={24} alt="Renderlike" className="brightness-0 invert opacity-50" />
            <span>&copy; {new Date().getFullYear()} Renderlike Studio.</span>
          </div>
          <div className="flex space-x-8">
            <Link href="/portfolio" className="hover:text-white transition-colors">{t('nav_projects')}</Link>
            <Link href="/about" className="hover:text-white transition-colors">{t('nav_about')}</Link>
            <Link href="/contact" className="hover:text-white transition-colors">{t('nav_contact')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
