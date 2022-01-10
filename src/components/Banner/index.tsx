import React from 'react';
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
    <div className="container-fluid banner" style={style}>
      <h3>{text}</h3>
    </div>
  );
};
