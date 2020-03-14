import React, { useState } from 'react';
import './index.css';
import { Image, IImageProps } from '../Image';
import { Lightbox } from '../../components/Lightbox';

export interface IGalleryProps {
  images: Array<IImageProps>;
}

export const Gallery: React.FC<IGalleryProps> = (props: IGalleryProps) => {
  const { images } = props;

  const [currentImage, setCurrentImage] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // fetchImages = async (): Promise<void> => {
  //   this.setState({ loading: true });

  //   const { images, lastId } = this.state;

  //   try {
  //     let albumId = this.state.albumId;
  //     if (albumId === 0) {
  //       albumId = await this.fetchAlbum();
  //     }

  //     const response: any = await fetch(
  //       `${process.env.REACT_APP_API_URL}/albums/${albumId}/images?cursor=${lastId}&limit=${LIMIT}`
  //     );
  //     const json = await response.json();

  //     const nextImages = json.map((image: ImageProps, index: number) => ({
  //       className: this.getImageClass(index),
  //       id: images.length + index,
  //       thumbnailURL: image.thumbnailURL,
  //       previewURL: image.previewURL,
  //     }));

  //     this.setState({
  //       hasMore: nextImages.length === LIMIT,
  //       lastId: json[json.length - 1].id,
  //       loading: false,
  //       images: [...images, ...nextImages],
  //     });
  //   } catch (error) {
  //     this.setState({ error: error.message, loading: false });
  //   }
  // };

  // getImageClass = (index: number) => {
  //   if (this.state.images.length < 20) {
  //     return 'gallery-image';
  //   }

  //   const style =
  //     styleClasses[Math.floor(Math.random() * Math.floor(styleClasses.length))];

  //   return classNames([
  //     ['gallery-image', true],
  //     [style, index !== 0 && index % 4 === 0 && true],
  //   ]);
  // };

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
      <div className="gallery">
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
