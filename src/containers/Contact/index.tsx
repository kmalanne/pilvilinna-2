import React from 'react';
import { useTranslation } from 'react-i18next';
import { Banner } from '../../components/Banner';
import './index.css';

export const Contact = () => {
  const { t } = useTranslation();
  const tNS = (key: string) => t(key, { ns: 'contact' });

  return (
    <div className="contact">
      <Banner imgUrl="/images/banner-2.jpg" text={tNS('contact')}></Banner>
    </div>
  );
};
