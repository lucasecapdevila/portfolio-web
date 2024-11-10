import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import global_en from "./en/global.json";
import global_es from "./es/global.json";

i18next.use(LanguageDetector).use(initReactI18next).init({
  debug: true,
  lng: 'es',
  resources: {
    es: { global: global_es },
    en: { global: global_en },
  }
})