import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Banner } from '../../components/Banner';
import './index.css';

const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
const phoneNumberDisplay = process.env.REACT_APP_PHONE_NUMBER_DISPLAY;

export const OrderingAndDelivering = () => {
  const { t } = useTranslation();
  const tNS = (key: string) => t(key, { ns: 'ordering' });

  return (
    <section className="ordering-delivering" aria-labelledby="title">
      <Banner imgUrl="/images/banner-3.jpg" text={tNS('title')}></Banner>
      <Container>
        <h2 id="title">{tNS('title')}:</h2>
        <p>
          {tNS('info_1')}{' '}
          <a href="mailto:&#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;">
            &#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;
          </a>{' '}
          {tNS('info_2')}{' '}
          <a href={`tel:${phoneNumber}`}>{phoneNumberDisplay}</a>
        </p>
        <p>{tNS('info_3')}</p>
        <p>{tNS('info_4')}</p>
        <p>{tNS('info_5')}</p>
        <p>{tNS('info_6')}</p>
      </Container>
    </section>
  );
};
