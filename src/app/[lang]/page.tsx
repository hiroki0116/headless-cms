import { getTranslation } from "@/utils/i18n";
import type { Locale } from "@/utils/i18n";

export default function Home({
  params,
}: Readonly<{
  params: { lang: Locale };
}>) {
  const t = getTranslation(params.lang);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-red-500">{t.common.siteName}</h1>
        <p className="text-lg">{t.common.siteDescription}</p>
      </main>
    </div>
  );
}
