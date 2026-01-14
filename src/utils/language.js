// utils/language.js
export const getLanguageHeaderValue = () => {
    const lang = localStorage.getItem('i18nextLng') || 'en';
    const map = {
      en: 'US',
      de: 'DE',
      fr: 'FR',
      es: 'ES',
      it: 'IT',
    };
    const headerValue = map[lang] || 'US';
    
    console.log(`[getLanguageHeaderValue] i18nextLng: ${lang}, headerValue: ${headerValue}`);
    
    return headerValue;
  };
  