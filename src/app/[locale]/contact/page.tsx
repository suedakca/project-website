import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="contact-container pt-32 pb-24">
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

      {/* FIXED GOOGLE MAP */}
      <div className="container mx-auto px-6 mt-12">
        <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700">
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
      </div>
    </div>
  );
}
