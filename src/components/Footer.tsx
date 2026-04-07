import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="site-footer">
      <div className="contact-container bg-black lg:bg-transparent">
        <div className="cont-about">
          <div className="cont-div">
            <div className="img-cont hidden lg:block">
              <Image 
                src="/images/gallery/contact.jpeg" 
                alt="Contact Renderlike" 
                width={1430}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="word-cont px-6 py-12 lg:p-0">
              <div className="cont">
                <p className="uppercase tracking-[0.2em] text-sm lg:text-base mb-2 opacity-80">
                  {t('contact_location')}
                </p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  {t('contact_city')}
                </h1>
                <p className="text-lg lg:text-xl font-light mb-8 leading-relaxed" 
                   dangerouslySetInnerHTML={{ __html: t('contact_address') }} 
                />
                
                <a href="https://www.google.com/maps/dir//1071+Usta+Ankara+%C4%B0%C5%9F+ve+Ya%C5%9Fam+Merkezi,+%C3%87ukurambar,+K%C4%B1z%C4%B1l%C4%B1rmak+Mah,+1443.+Cd.+No:25,+06530+%C3%87ankaya%2FAnkara/@39.9074686,32.8120304,15z" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="google-maps-link text-white underline underline-offset-4 hover:no-underline transition-all block mb-12"
                >
                  Google Maps
                </a>
                
                <div className="contact-cta border-l-2 border-white/30 pl-6 mb-12">
                  <p className="uppercase tracking-widest text-[0.7rem] mb-2 opacity-70">
                    get in touch
                  </p>
                  <a href="mailto:hello@renderlike.com" className="email-link text-2xl lg:text-4xl font-bold hover:underline">
                    hello@renderlike.com
                  </a>
                </div>
                
                <div className="copyright text-sm opacity-60">
                  @Renderlike
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
