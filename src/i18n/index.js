// i18n index file - exports all translations organized by language and namespace

// Arabic translations
import arCommon from './locales/ar/common.json';
import arNav from './locales/ar/nav.json';
import arFooter from './locales/ar/footer.json';
import arHome from './locales/ar/home.json';
import arAbout from './locales/ar/about.json';
import arFranchise from './locales/ar/franchise.json';
import arBranches from './locales/ar/branches.json';
import arContact from './locales/ar/contact.json';
import arBlog from './locales/ar/blog.json';
import arPartners from './locales/ar/partners.json';

// English translations
import enCommon from './locales/en/common.json';
import enNav from './locales/en/nav.json';
import enFooter from './locales/en/footer.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enFranchise from './locales/en/franchise.json';
import enBranches from './locales/en/branches.json';
import enContact from './locales/en/contact.json';
import enBlog from './locales/en/blog.json';
import enPartners from './locales/en/partners.json';

// Combine all translations by language
export const translations = {
  ar: {
    common: arCommon,
    nav: arNav,
    footer: arFooter,
    home: arHome,
    about: arAbout,
    franchise: arFranchise,
    branches: arBranches,
    contact: arContact,
    blog: arBlog,
    partners: arPartners,
  },
  en: {
    common: enCommon,
    nav: enNav,
    footer: enFooter,
    home: enHome,
    about: enAbout,
    franchise: enFranchise,
    branches: enBranches,
    contact: enContact,
    blog: enBlog,
    partners: enPartners,
  },
};

// Helper function to get nested translation value
export const getTranslation = (lang, key) => {
  const keys = key.split('.');
  let value = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to the other language if key not found
      if (lang === 'ar') {
        let fallback = translations['en'];
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk];
          } else {
            return key; // Return key as fallback
          }
        }
        return fallback;
      }
      return key; // Return key as fallback
    }
  }

  return value;
};

export default translations;
