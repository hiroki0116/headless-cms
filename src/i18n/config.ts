export const locales = ["ja", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ja";

export function getLocaleFromPathname(pathname: string): Locale {
  const locale = pathname.split("/")[1] as Locale;
  return locales.includes(locale) ? locale : defaultLocale;
}
