import i18n from "i18next";
<<<<<<< HEAD
import {initReactI18next} from "react-i18next";

import eng_translation from "./locales/eng/translations.json";
import rus_translation from "./locales/rus/translations.json";

const DEFAULT_LOCALE: string = "eng";

i18n.use(initReactI18next).init({
    // debug: global.isDev,
    debug: false,
    resources: {
        eng: {translation: eng_translation},
        rus: {translation: rus_translation},
    },
    lng: DEFAULT_LOCALE,
    fallbackLng: "eng",
    keySeparator: ".",
    interpolation: {
        escapeValue: false,
    },
=======
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
>>>>>>> 9444585a40ebb3f1dceede8d9029cf775b02c5ac
});

export default i18n;
