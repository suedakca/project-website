import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: {
      template: '%s | Renderlike',
      default: 'Renderlike | Modern 3D Visual Studio',
    },
    description: 'Specializing in high-end architectural renders, product visuals, and cinematic animations.',
    keywords: ['3D Rendering', 'Architecture', 'Visualization', 'Interior Design', 'Turkey'],
    robots: 'index, follow',
  };
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={poppins.variable}>
      <head>
        {/* Dynamic Title and Meta will go here or in page.tsx */}
      </head>
      <body className="font-poppins bg-white text-dark antialiased">
        <NextIntlClientProvider messages={messages}>
          <div id="wrapper" className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-24 lg:pt-0">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
