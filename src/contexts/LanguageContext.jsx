"use client";

import React, { createContext, useContext, useState, useEffect, useLayoutEffect } from 'react';
import { translations, getTranslation } from '../i18n';
import { useLoading } from './LoadingContext';

const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLanguage = 'ar' }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [direction, setDirection] = useState(initialLanguage === 'ar' ? 'rtl' : 'ltr');
  const { startLoading, stopLoading } = useLoading();

  useLayoutEffect(() => {
    const newDirection = language === 'ar' ? 'rtl' : 'ltr';
    setDirection(newDirection);
    
    // Update DOM attributes
    document.documentElement.setAttribute('dir', newDirection);
    document.documentElement.setAttribute('lang', language);
    
    // Sync to storage
    localStorage.setItem('quik-language', language);
    
    // Final sync for cookie (ensure it matches state)
    document.cookie = `quik-language=${language}; path=/; max-age=31536000; SameSite=Lax`;
  }, [language]);

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    const newDirection = newLang === 'ar' ? 'rtl' : 'ltr';
    startLoading();
    setLanguage(newLang);
    setDirection(newDirection);
    // Set direction immediately on document
    document.documentElement.setAttribute('dir', newDirection);
    // Sync cookie
    document.cookie = `quik-language=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
  };

  const changeLanguage = (lang) => {
    if (lang === 'ar' || lang === 'en' && lang !== language) {
      const newDirection = lang === 'ar' ? 'rtl' : 'ltr';
      startLoading();
      setLanguage(lang);
      setDirection(newDirection);
      // Set direction immediately on document
      document.documentElement.setAttribute('dir', newDirection);
      // Sync cookie
      document.cookie = `quik-language=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    }
  };

  // Translation function with namespace support
  // Usage: t('common.loading') or t('home.hero.title1')
  const t = (key) => {
    return getTranslation(language, key) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

