import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './index.css';

export interface ICarouselItemProps {
  author: string;
  text: string;
  visible?: boolean;
}

const CarouselItem: React.FC<ICarouselItemProps> = (
  props: ICarouselItemProps
) => {
  const { author, text, visible = false } = props;

  return (
    <div className={visible ? 'carousel-item visible' : 'carousel-item'}>
      <FontAwesomeIcon icon={faUserCircle} size="4x" inverse></FontAwesomeIcon>
      <div className="testimonial">
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
        <p className="author">{author}</p>
      </div>
    </div>
  );
};

export interface ICarouselProps {
  items: ICarouselItemProps[];
}

export const Carousel: React.FC<ICarouselProps> = (props: ICarouselProps) => {
  const [current, setCurrent] = useState(0);
  const { items } = props;

  React.useEffect(() => {
    const timer = setTimeout(onNextClick, 50000000);

    return () => {
      clearTimeout(timer);
    };
  });

  const onPrevClick = () => {
    setCurrent(current === 0 ? items.length - 1 : current - 1);
  };

  const onNextClick = () => {
    setCurrent(current === items.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="carousel">
      {items.map((item, index) => {
        return (
          <CarouselItem
            key={index}
            author={item.author}
            text={item.text}
            visible={index === current}
          ></CarouselItem>
        );
      })}
      <div className="carousel-action">
        <div className="prev" onClick={onPrevClick}></div>
        <div className="next" onClick={onNextClick}></div>
      </div>
    </div>
  );
};
