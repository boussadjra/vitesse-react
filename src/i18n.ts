import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import locale from './locales/index';



  i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    //   lng: 'ar',
      fallbackLng: 'en',
      debug: true,
      resources: {
            en: {
                translation: {
                    ...locale.en
                }
            },
            ar: {
                translation: {
                    ...locale.ar
                }
            }
      },


      interpolation: {
          escapeValue: false, // not needed for react as it escapes by default
      }
  });



export default i18n;