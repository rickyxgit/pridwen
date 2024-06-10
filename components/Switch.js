import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import styles from "../styles/components/Switch.module.css";

import { useLanguage } from './LanguageContext';


const MySwitch = () => {
  /** 
  const isBrowser = typeof window !== 'undefined';

  const [language, setLanguage] = useState(() => {
    if (isBrowser) {
      const storedLanguage = localStorage.getItem('language');
      return storedLanguage ? storedLanguage : 'EN';
    }
    return 'EN';
  });

  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem('language', language);
    }
  }, [language, isBrowser]);

  const getCurrentLanguage = () => {
    return language;
  };
  const handleToggle = (checked) => {
    setLanguage(checked ? 'CN' : 'EN');
  };
  */

 
  const { language, toggleLanguage } = useLanguage();

  return (
    <div>
      
      <Switch
        onChange={toggleLanguage}
        checked={language === 'CN'}
        checkedIcon={<span className={styles.switchIcon}>中文</span>} // Display "EN" when checked
        uncheckedIcon={<span className={styles.switchIcon}>EN</span>} // Display "CN" when unchecked
        onColor="#1f82cc" // Customize color when checked
        offColor="#165b8f" // Customize color when unchecked
        height={24} // Adjust the height as needed
        width={60} // Adjust the width as needed
        className={styles.switch} // Apply additional styling using CSS modules
      />
      <div>
      
      </div>
    </div>
  );
};


export const getCurrentLanguage = () => {
  if (typeof window !== 'undefined') {
    const language = localStorage.getItem('language') || 'EN';
    return language;
  }
  return 'EN';
};

export default MySwitch;