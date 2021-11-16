import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ptBrContent, ptBrAccessibleContent } from "./locales/ptBr";
import { enUsContent, enUsAccessibleContent } from "./locales/enUs";

const languages = {
  pt: "pt",
  en: "en",
};

const namespaces = {
  content: "content",
  accessibleContent: "accessibleContent",
};

const resources = {
  pt: {
    content: ptBrContent,
    accessibleContent: ptBrAccessibleContent,
  },
  en: {
    content: enUsContent,
    accessibleContent: enUsAccessibleContent,
  },
};

i18n.use(initReactI18next).init({
  resources,
  ns: [namespaces.content, namespaces.accessibleContent],
  defaultNS: namespaces.content,
  lng: languages.pt,
  fallbackLng: languages.pt,
});

export default i18n;
