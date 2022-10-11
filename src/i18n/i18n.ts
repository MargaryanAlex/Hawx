import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en_translation from "./locales/en/translations.json";
import ru_translation from "./locales/ru/translations.json";

const DEFAULT_LOCALE: string = "en";

i18n.use(initReactI18next).init({
  // debug: global.isDev,
  debug: false,
  resources: {
    en: { translation: en_translation },
    ru: { translation: ru_translation },
  },
  lng: DEFAULT_LOCALE,
  fallbackLng: "en",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
