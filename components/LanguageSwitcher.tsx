"use client";

import { useLocale, useTranslations } from "next-intl";
import { setLocale } from "@/lib/actions/i18n";
import { useRouter } from "next/navigation";

const locales = ["en", "ar", "es", "fr", "de", "zh", "ja", "pt", "ru"];

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const t = useTranslations("Languages");
  const router = useRouter();

  const handleLanguageChange = async (newLocale: string) => {
    if (newLocale === currentLocale) return;
    await setLocale(newLocale);
    router.refresh();
  };

  return (
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-500  max-w-md mx-auto">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLanguageChange(locale)}
          className={`hover:text-black dark:hover:text-white transition-colors cursor-pointer ${
            currentLocale === locale
              ? "text-black dark:text-white font-medium"
              : ""
          }`}
        >
          {t(locale)}
        </button>
      ))}
    </div>
  );
}
