import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { SocialMediaLinkGroup } from '../SocialMediaLinkGroup';
import './index.css';

const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
const phoneNumberDisplay = process.env.REACT_APP_PHONE_NUMBER_DISPLAY;

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col sm>
            <div className="col-header">Email:</div>
            <a href="mailto:&#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;">
              &#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;
            </a>
          </Col>
          <Col sm>
            <div className="col-header">Puhelin:</div>
            <a href={`tel:${phoneNumber}`}>{phoneNumberDisplay}</a>
          </Col>
          <Col sm>
            <div className="col-header">Yritys:</div>
            <p>Pilvilinnan leipomo (2507048-6), Nokia</p>
          </Col>
        </Row>
        <Row>
          <Col className="social-media-col">
            <SocialMediaLinkGroup></SocialMediaLinkGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
