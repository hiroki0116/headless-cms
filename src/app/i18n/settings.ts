import i18n from "i18next";

export const defaultNS = "translation";
export const fallbackLng = "ja";
export const languages = ["ja", "en"];

export const locales = ["ja", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ja";

export const getOptions = (lng: string = fallbackLng) => ({
  lng,
  fallbackLng,
  defaultNS,
  fallbackNS: defaultNS,
  ns: [defaultNS],
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
