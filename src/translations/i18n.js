import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import global_en from "./en/global.json";
import global_es from "./es/global.json";
import HttpBackend from "i18next-http-backend";

i18next.use(LanguageDetector).use(initReactI18next).use(HttpBackend).init({
  debug: true,
  lng: localStorage.getItem("i18nextLng") || 'es',
  backend: {
    loadPath: '/translations/{{lng}}/global.json'
  },
  resources: {
    es: { global: global_es },
    en: { global: global_en },
  }
})