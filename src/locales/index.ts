import commonAr from './ar/common.json';
import commonEn from './en/common.json';
import demoAr from './ar/demo.json';
import demoEn from './en/demo.json';
import homeAr from './ar/home.json';
import homeEn from './en/home.json';
import sidebarAr from './ar/sidebar.json';
import sidebarEn from './en/sidebar.json';

export default {
  en: {
    ...homeEn,
    ...sidebarEn,
    ...commonEn,
    ...demoEn,
  },
  ar: {
    ...homeAr,
    ...sidebarAr,
    ...commonAr,
    ...demoAr,
  },
};
