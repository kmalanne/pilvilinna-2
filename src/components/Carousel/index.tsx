import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const tNS = (key: string) => t(key, { ns: 'component' });

  const { author, text, visible = false } = props;

  return (
    <div
      aria-label={tNS('carousel_item')}
      className={visible ? 'carousel-item visible' : 'carousel-item'}
    >
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
  const { t } = useTranslation();
  const tNS = (key: string) => t(key, { ns: 'component' });

  const [current, setCurrent] = useState(0);
  const { items } = props;

  React.useEffect(() => {
    const timer = setTimeout(onNextClick, 5000);

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
    <div className="carousel" aria-label={tNS('carousel')}>
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
        <div
          role="button"
          aria-label={tNS('previous_button')}
          className="prev"
          onClick={onPrevClick}
          tabIndex={0}
        >
          {'<'}
        </div>
        <div
          role="button"
          aria-label={tNS('next_button')}
          className="next"
          onClick={onNextClick}
          tabIndex={0}
        >
          {'>'}
        </div>
      </div>
    </div>
  );
};
