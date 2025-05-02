import { getTranslation } from "../i18n/server";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await getTranslation(lang);

  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">{t("home.title")}</h1>
      <p className="text-xl">{t("home.description")}</p>
    </main>
  );
}
