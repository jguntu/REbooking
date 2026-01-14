import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import JSON translation files
import en from '../src/locales/en/translation.json';
import de from '../src/locales/de/translation.json';
import fr from '../src/locales/fr/translation.json';
import es from '../src/locales/es/translation.json';
import it from '../src/locales/it/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lng',
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      de: { translation: de },
      fr: { translation: fr },
      es: { translation: es },
      it: { translation: it },
    },
  });

export default i18n;