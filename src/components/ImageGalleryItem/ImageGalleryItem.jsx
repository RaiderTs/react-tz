// import React, { Component } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setImgToFavorite,
  removeImgFromFavorite,
} from '../../store/actions/index';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import style from './ImageGalleryItem.module.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';

function ImageGalleryItem({ id, src, alt, largeImageUrl }) {
  const [showModal, setShowModal] = useState(false);
  const [imageFavorite, setImageFavorite] = useState(false);

  const storeData = useSelector(state => state.favoriteReducer);

  useEffect(() => {
    storeData[id] ? setImageFavorite(true) : setImageFavorite(false); //  Поместить в useEffect
  }, [storeData, id]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const dispatch = useDispatch();

  const dispatchFavoriteImage = () => {
    if (imageFavorite) {
      dispatch(removeImgFromFavorite(id));
      setImageFavorite(false);
    } else {
      //
      dispatch(
        setImgToFavorite({
          [id]: {
            webformatURL: src,
            alt: alt,
            largeImageURL: largeImageUrl,
          },
        }),
      );
      setImageFavorite(true);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <li data-aos="fade-up" className={style.item} id={id}>
      <img
        onClick={toggleModal}
        src={src}
        alt={alt}
        className={style.image}
        id={id}
      />

      <img
        src={imageFavorite ? iconFavoriteFill : iconFavorite}
        onClick={dispatchFavoriteImage}
        className={style.favorite}
        alt="add to favorites"
      />

      {/* <button onClick={dispatchFavoriteImage} className={style.favorite}>
        {imageFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button> */}

      {showModal && (
        <Modal onClose={toggleModal} src={largeImageUrl} alt={alt} />
      )}
    </li>
  );
}
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
