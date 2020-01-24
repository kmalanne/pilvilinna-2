import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './index.css';

export interface IBannerProps {
  text: string;
  imgUrl: string;
}

export const Banner: React.FC<IBannerProps> = (props: IBannerProps) => {
  const { imgUrl, text } = props;

  const style = {
    backgroundImage: `url(${imgUrl})`,
  };

  return (
    <Jumbotron className="banner-jumbotron" style={style}>
      <h3>{text}</h3>
    </Jumbotron>
  );
};
