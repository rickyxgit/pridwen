// LanguageContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');
  
  const toggleLanguage = () => {
    const newLanguage = language === 'EN' ? 'CN' : 'EN';
    setLanguage(newLanguage);
    console.log("Language changed to:", newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

