import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import './index.css';

export interface IServiceItemProps {
  title: string;
  text: string;
  icon: IconDefinition;
}

export const ServiceItem: React.FC<IServiceItemProps> = (
  props: IServiceItemProps
) => {
  const { icon, text, title } = props;

  return (
    <div aria-label="Service" className="service-item">
      <FontAwesomeIcon icon={icon} size="4x"></FontAwesomeIcon>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
