import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './index.css';

export const SocialMediaLinkGroup: React.FC = () => {
  const { t } = useTranslation();
  const tNS = (key: string) => t(key, { ns: 'navigation' });

  return (
    <div className="social-nav" aria-label={tNS('social_navigation')}>
      <a href="https://www.facebook.com/Pilvilinnan-leipomo-1541890192566923/">
        <FontAwesomeIcon
          icon={faFacebookSquare}
          size="lg"
          title={tNS('facebook_link')}
        ></FontAwesomeIcon>
      </a>
      <a href="https://www.instagram.com/pilvilinnan_anna/">
        <FontAwesomeIcon
          icon={faInstagram}
          size="lg"
          title={tNS('instagram_link')}
        ></FontAwesomeIcon>
      </a>
    </div>
  );
};
