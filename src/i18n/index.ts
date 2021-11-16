import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import { ptBrContent, ptBrAccessibleContent } from "./locales/ptBr";
import { enUsContent, enUsAccessibleContent } from "./locales/enUs";

const languages = {
  ptBr: "pt_BR",
  enUs: "en-US",
};

const namespaces = {
  content: "content",
  accessibleContent: "accessibleContent",
};

const resources: Resource = {
  "pt_BR": {
    content: ptBrContent,
    accessibleContent: ptBrAccessibleContent,
  },
  "en-US": {
    content: enUsContent,
    accessibleContent: enUsAccessibleContent,
  },
};

i18n.use(initReactI18next).init({
  resources,
  ns: [namespaces.content, namespaces.accessibleContent],
  defaultNS: namespaces.content,
  lng: languages.ptBr,
  fallbackLng: languages.ptBr,
});

export default i18n;
