import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

export const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const tNS = (key: string) => t(key, { ns: 'component' });

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fi' ? 'en' : 'fi');
  };

  return (
    <button
      aria-label={tNS('language_switch')}
      onClick={() => changeLanguage()}
    >
      {i18n.language === 'fi' ? 'en' : 'fi'}
    </button>
  );
};
