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
    <div
      aria-labelledby="title"
      className="container-fluid banner"
      style={style}
    >
      <h1 id="title">{text}</h1>
    </div>
  );
};
