'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  function onLanguageChange(newLocale: string) {
    startTransition(() => {
      // @ts-ignore
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <div className="flex items-center space-x-2 text-sm font-medium">
      <button
        onClick={() => onLanguageChange('tr')}
        disabled={isPending || locale === 'tr'}
        className={`hover:text-brand transition-colors ${
          locale === 'tr' ? 'text-brand font-bold underline underline-offset-4' : 'text-gray-600'
        }`}
      >
        TR
      </button>
      <span className="text-gray-300">/</span>
      <button
        onClick={() => onLanguageChange('en')}
        disabled={isPending || locale === 'en'}
        className={`hover:text-brand transition-colors ${
          locale === 'en' ? 'text-brand font-bold underline underline-offset-4' : 'text-gray-600'
        }`}
      >
        EN
      </button>
    </div>
  );
}
