import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fi' ? 'en' : 'fi');
  };

  return (
    <button
      aria-label="Kielivalinta language change"
      onClick={() => changeLanguage()}
    >
      {i18n.language === 'fi' ? 'en' : 'fi'}
    </button>
  );
};
