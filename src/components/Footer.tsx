import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="site-footer bg-white border-t border-gray-100">
      <div className="contact-section relative overflow-visible pt-20 pb-0">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-stretch bg-[#040DBF] rounded-sm shadow-2xl overflow-hidden min-h-[500px]">
            {/* Image Column */}
            <div className="w-full lg:w-2/3 relative min-h-[300px] lg:min-h-full">
              <Image 
                src="/images/gallery/contact.jpeg" 
                alt="Contact Renderlike" 
                fill
                className="object-cover"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 90%)' }}
              />
            </div>
            
            {/* Content Column */}
            <div className="w-full lg:w-1/3 p-10 lg:p-16 flex flex-col justify-center text-white" style={{ backgroundColor: '#040DBF', color: 'white', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p className="uppercase tracking-[0.3em] text-[12px] font-semibold mb-2 opacity-70" style={{ letterSpacing: '0.3em', fontSize: '12px' }}>
                {t('contact_location')}
              </p>
              <h2 className="text-[40px] lg:text-[60px] font-bold mb-6 leading-none" style={{ fontWeight: 700, margin: '20px 0' }}>
                {t('contact_city')}
              </h2>
              <p className="text-[16px] lg:text-[18px] font-light mb-10 leading-relaxed opacity-90 whitespace-pre-line text-left" style={{ fontWeight: 300, marginBottom: '30px' }}>
                {t('contact_address')}
              </p>
              
              <a href="https://www.google.com/maps/dir//1071+Usta+Ankara+%C4%B0%C5%9F+ve+Ya%C5%9Fam+Merkezi,+%C3%87ukurambar,+K%C4%B1z%C4%B1l%C4%B1rmak+Mah,+1443.+Cd.+No:25,+06530+%C3%87ankaya%2FAnkara/@39.9074686,32.8120304,15z" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-white underline underline-offset-8 hover:opacity-70 transition-all font-medium mb-12"
                 style={{ color: 'white', marginBottom: '40px', display: 'block' }}
              >
                Google Maps
              </a>
              
              <div className="mt-auto border-l-2 border-white/20 pl-6" style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '24px' }}>
                <p className="uppercase tracking-widest text-[10px] mb-2 opacity-60 font-bold" style={{ fontSize: '10px' }}>
                  {t('contact_get_in_touch')}
                </p>
                <a href="mailto:hello@renderlike.com" className="text-[20px] lg:text-[28px] font-bold hover:underline underline-offset-4" style={{ color: 'white', fontWeight: 700 }}>
                  hello@renderlike.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="py-10 flex justify-between items-center text-gray-400 text-[12px] font-medium grayscale opacity-50">
            <div>© {new Date().getFullYear()} Renderlike Studio</div>
            <div className="flex space-x-6">
              <Link href="/portfolio" className="hover:text-black transition-colors">Portfolio</Link>
              <Link href="/about" className="hover:text-black transition-colors">About</Link>
              <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
