import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SocialMediaLinkGroup } from '../SocialMediaLinkGroup';
import './index.css';

const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
const phoneNumberDisplay = process.env.REACT_APP_PHONE_NUMBER_DISPLAY;

export const Header: React.FC = () => {
  return (
    <div className="header">
      <Container>
        <div className="header-left">
          <a href={`tel:${phoneNumber}`}>
            <FontAwesomeIcon icon={faPhoneAlt} size="lg"></FontAwesomeIcon>
            {phoneNumberDisplay}
          </a>
          <a href="mailto:&#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;">
            <FontAwesomeIcon icon={faEnvelope} size="lg"></FontAwesomeIcon>
            &#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;
          </a>
        </div>
        <div className="header-right">
          <SocialMediaLinkGroup></SocialMediaLinkGroup>
        </div>
      </Container>
    </div>
  );
};
