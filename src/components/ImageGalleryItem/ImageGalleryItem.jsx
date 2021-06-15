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

import iconFavorite from './img/favorite.svg'
import iconFavoriteFill from './img/favorite-fill.svg';

function ImageGalleryItem({ id, src, alt, largeImageUrl }) {
  const [showModal, setShowModal] = useState(false);
  const [imageFavorite, setImageFavorite] = useState(false);

  const storeData = useSelector(state => state.favoriteReducer);
  
  useEffect(() => {
    storeData[id] ? setImageFavorite(true) : setImageFavorite(false); //  Поместить в useEffect
  })
  

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const dispatch = useDispatch();

  // const set = () => {};

  // const remove = () => {};


  const dispatchFavoriteImage = () => {
    if (imageFavorite) {
      dispatch(removeImgFromFavorite(id));
      setImageFavorite(false);
    } else {
        dispatch(
          setImgToFavorite({
            [id]: {
              src: src,
              alt: alt,
            },
          }),
        );
        setImageFavorite(true);
     }
   }


  return (
    <li className={style.item} id={id}>
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
        alt="dd to favorites"
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
