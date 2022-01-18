import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    lng: 'fi',
    supportedLngs: ['fi', 'en'],
    fallbackLng: 'fi',
    nonExplicitSupportedLngs: true,
    ns: [
      'assortment',
      'contact',
      'home',
      'navigation',
      'orderingAndDelivering',
    ],
    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV === 'development',
  });

export const i18n = i18next;
