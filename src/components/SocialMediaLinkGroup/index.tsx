import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './index.css';

export const SocialMediaLinkGroup: React.FC = () => {
  return (
    <>
      <a href="https://www.facebook.com/Pilvilinnan-leipomo-1541890192566923/">
        <FontAwesomeIcon icon={faFacebookSquare} size="lg"></FontAwesomeIcon>
      </a>
      <a href="https://www.instagram.com/pilvilinnan_anna/">
        <FontAwesomeIcon icon={faInstagram} size="lg"></FontAwesomeIcon>
      </a>
    </>
  );
};
