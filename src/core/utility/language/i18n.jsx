import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";

i18n.use(initReactI18next).init({
    debug: true,
    fellbackLng:"fa",


  resources: {
    fa: {
      Translation: {},
    },
    en: {
      Translation: {},
    },
  },
});

export default i18n;
