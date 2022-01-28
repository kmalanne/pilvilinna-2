import React from 'react';
import { useTranslation } from 'react-i18next';
import { Banner } from '../../components/Banner';
import './index.css';

export const Contact = () => {
  const { t } = useTranslation();
  const tNS = (key: string) => t(key, { ns: 'contact' });

  return (
    <section className="contact" aria-label={tNS('contact_info')}>
      <Banner imgUrl="/images/banner-2.jpg" text={tNS('contact')}></Banner>
    </section>
  );
};
