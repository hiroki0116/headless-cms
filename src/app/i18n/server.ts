import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { getOptions } from "./settings";

const initI18next = async (lng: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng));
  return i18nInstance;
};

export async function getTranslation(lng: string) {
  const i18nextInstance = await initI18next(lng);
  return {
    t: i18nextInstance.getFixedT(lng),
    i18n: i18nextInstance,
  };
}
