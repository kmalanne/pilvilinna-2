import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Col, Row } from 'react-bootstrap';
import { SocialMediaLinkGroup } from '../SocialMediaLinkGroup';
import './index.css';

const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
const phoneNumberDisplay = process.env.REACT_APP_PHONE_NUMBER_DISPLAY;

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const tNS = (key: string) => t(key, { ns: 'contact' });

  return (
    <footer>
      <Container>
        <Row>
          <Col sm>
            <div className="col-header">{tNS('email')}:</div>
            <a href="mailto:&#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;">
              &#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;
            </a>
          </Col>
          <Col sm>
            <div className="col-header">{tNS('phone')}:</div>
            <a href={`tel:${phoneNumber}`}>{phoneNumberDisplay}</a>
          </Col>
          <Col sm>
            <div className="col-header">{tNS('company')}:</div>
            <p>Pilvilinnan leipomo (2507048-6), Nokia</p>
            <a href="https://www.oivahymy.fi/" target="_blank" rel="noreferrer">
              oivahymy.fi
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="social-media-col">
            <SocialMediaLinkGroup></SocialMediaLinkGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
