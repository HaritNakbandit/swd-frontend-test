import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import main_th from "../public/locales/th/main.json";
import main_en from "../public/locales/en/main.json";


const resources = {
  th: {
    translation: main_th,
  },
  en: {
    translation: main_en,
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
