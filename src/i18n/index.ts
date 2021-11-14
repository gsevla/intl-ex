import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ptBrTranslation } from "./ptBr";
import { enUsTranslation } from "./enUs";

const resources = {
  pt: {
    translation: ptBrTranslation,
  },
  en: {
    translation: enUsTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  fallbackLng: "pt",
});

export default i18n;
