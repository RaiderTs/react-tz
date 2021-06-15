import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import ImageGalleryItem from '../ImageGalleryItem';
import style from './ImageGallery.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function ImageGallery({ images }) {
  // const despatch = useDispatch();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <ul className={style.list} data-aos="zoom-in">
      {images.map(({ id, webformatURL, tags, largeImageURL }, index) => (
        <ImageGalleryItem
          id={id}
          src={webformatURL}
          alt={tags}
          largeImageUrl={largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
