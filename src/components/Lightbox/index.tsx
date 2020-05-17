import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import { Image as LightboxImage, IImageProps } from '../Image';

export interface ILightboxProps {
  currentImage: number;
  images: Array<IImageProps>;
  onClickImage: () => void;
  onClickNext: () => void;
  onClickPrevious: () => void;
  onClose: () => void;
}

function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export const Lightbox: React.FC<ILightboxProps> = (props: ILightboxProps) => {
  const {
    currentImage,
    images,
    onClickImage,
    onClickNext,
    onClickPrevious,
    onClose,
  } = props;

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const previousImage = usePrevious(currentImage) || 0;

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  });

  useEffect(() => {
    const preloadImage = (index: number, onload?: () => void) => {
      return preloadImageData(images[index], onload);
    };

    const currentIndex = currentImage;
    const nextIndex = currentImage + 1;
    const prevIndex = currentImage - 1;

    let preloadIndex;
    if (currentIndex && previousImage < currentIndex) {
      preloadIndex = nextIndex;
    } else if (currentIndex && previousImage > currentIndex) {
      preloadIndex = prevIndex;
    }

    if (preloadIndex) {
      preloadImage(preloadIndex);
    } else {
      preloadImage(prevIndex);
      preloadImage(nextIndex);
    }

    if (currentImage !== previousImage) {
      const image = preloadImageData(images[currentImage], handleImageLoaded);

      if (image) {
        setIsImageLoaded(image.complete);
      }
    }

    if (currentImage === 0 && previousImage === 0) {
      setIsImageLoaded(true);
    }
  }, [currentImage, images, previousImage]);

  const handleKeyDown = (event: KeyboardEvent): boolean => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    switch (event.keyCode) {
      case 13: // enter
      case 27: // esc
        close();
        return true;
      case 37: // left
        prevImage();
        return true;
      case 39: // right
        nextImage();
        return true;
      default:
        return false;
    }
  };

  const handleClose = (
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ): void => {
    event.preventDefault();

    close();
  };

  const handleClickBackdrop = (
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ): void => {
    event.preventDefault();

    if ((event.target as HTMLElement).id === 'lightbox') {
      close();
    }
  };

  const handleClickImage = () => {
    onClickImage();
  };

  const close = () => {
    onClose();
  };

  const preloadImageData = (imageData: IImageProps, onload?: () => void) => {
    if (!imageData) {
      return;
    }

    const image = new Image();
    image.onload = onload ? onload : null;
    image.src = imageData.previewURL ? imageData.previewURL : '';

    return image;
  };

  const handleImageLoaded = () => {
    setIsImageLoaded(true);
  };

  const prevImage = (
    event?: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => {
    if (currentImage === 0) {
      return;
    }

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    onClickPrevious();
  };

  const nextImage = (
    event?: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => {
    if (currentImage === images.length - 1) {
      return;
    }

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    onClickNext();
  };

  const renderImage = () => {
    const image = images[currentImage];

    return (
      <figure>
        <LightboxImage
          className="lightbox-image"
          id={currentImage}
          onClick={handleClickImage}
          src={image.previewURL}
        />
      </figure>
    );
  };

  const renderPrevArrow = () => {
    if (currentImage === 0) {
      return null;
    }

    return (
      <button
        className="lightbox-button lightbox-button-previous"
        aria-label="Previous"
        onClick={prevImage}
      >
        <FontAwesomeIcon icon={faChevronLeft} size="2x"></FontAwesomeIcon>
      </button>
    );
  };

  const renderNextArrow = () => {
    if (currentImage === images.length - 1) {
      return null;
    }

    return (
      <button
        className="lightbox-button lightbox-button-next"
        aria-label="Next"
        onClick={nextImage}
      >
        <FontAwesomeIcon icon={faChevronRight} size="2x"></FontAwesomeIcon>
      </button>
    );
  };

  return ReactDOM.createPortal(
    <div className="lightbox-backdrop">
      <div id="lightbox" className="lightbox" onClick={handleClickBackdrop}>
        <button
          className="lightbox-button lightbox-button-close"
          aria-label="Close Modal"
          onClick={handleClose}
        >
          <span className="lightbox-close-text">Close</span>
          <FontAwesomeIcon icon={faTimes} size="2x" inverse></FontAwesomeIcon>
        </button>
        <div className="lightbox-content">{renderImage()}</div>
        {isImageLoaded && renderPrevArrow()}
        {isImageLoaded && renderNextArrow()}
      </div>
    </div>,
    document.body
  );
};
