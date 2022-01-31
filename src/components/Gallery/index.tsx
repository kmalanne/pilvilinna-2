import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, IImageProps } from '../Image';
import { Lightbox } from '../../components/Lightbox';
import './index.css';

export interface IGalleryProps {
  images: Array<IImageProps>;
}

export const Gallery: React.FC<IGalleryProps> = (props: IGalleryProps) => {
  const { t } = useTranslation();
  const tNS = (key: string) => t(key, { ns: 'component' });

  const { images } = props;

  const [currentImage, setCurrentImage] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImage(currentImage + 1);
  };

  const prevImage = () => {
    setCurrentImage(currentImage - 1);
  };

  const openLightbox = (imageId: number) => {
    if (document.documentElement) {
      document.documentElement.style.overflow = 'hidden';
    }

    setCurrentImage(imageId);
    setIsModalOpen(true);
  };

  const closeLightbox = () => {
    if (document.documentElement) {
      document.documentElement.style.overflow = 'scroll';
    }

    setCurrentImage(-1);
    setIsModalOpen(false);
  };

  const onClickImage = (imageId: number) => {
    openLightbox(imageId);
  };

  const onClickLightboxImage = () => {
    if (currentImage === images.length - 1) {
      return;
    }

    nextImage();
  };

  const onClickLightboxClose = () => {
    closeLightbox();
  };

  const onClickLightboxNext = () => {
    nextImage();
  };

  const onClickLightboxPrevious = () => {
    prevImage();
  };

  return (
    <React.Fragment>
      <div className="gallery" aria-label={tNS('image_gallery')}>
        {images.map((image: IImageProps, index) => (
          <Image
            key={index}
            className="gallery-image"
            id={index}
            onClick={onClickImage}
            src={image.thumbnailURL}
          />
        ))}
      </div>
      {isModalOpen && (
        <Lightbox
          currentImage={currentImage}
          images={images}
          onClickImage={onClickLightboxImage}
          onClickNext={onClickLightboxNext}
          onClickPrevious={onClickLightboxPrevious}
          onClose={onClickLightboxClose}
        />
      )}
    </React.Fragment>
  );
};
