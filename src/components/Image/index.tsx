import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface IImageProps {
  className?: string;
  id?: number;
  onClick?: (id: number) => void;
  src?: string;
  previewURL?: string;
  thumbnailURL?: string;
}

export const Image: React.FC<IImageProps> = (props: IImageProps) => {
  const { t } = useTranslation();
  const tNS = (key: string) => t(key, { ns: 'component' });

  const { className, id, onClick, src } = props;

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>();

  const width = containerRef.current ? containerRef.current.offsetWidth : 100;
  const height = containerRef.current ? containerRef.current.offsetHeight : 100;

  const onImageLoaded = () => {
    setIsImageLoaded(true);
  };

  const onImageClick = (
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (onClick) {
      onClick(id as number);
    }
  };

  return (
    <React.Fragment>
      {!isImageLoaded && (
        <div ref={containerRef as any}>
          <svg width={width} height={height} viewBox="0 0 50 50">
            <rect width={width} height={height} fill="#bdc3c7" />
          </svg>
        </div>
      )}
      <img
        className={className}
        src={src}
        onClick={onImageClick}
        onLoad={onImageLoaded}
        alt={tNS('image')}
        tabIndex={0}
      />
    </React.Fragment>
  );
};
