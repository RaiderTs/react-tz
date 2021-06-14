// import React, { Component } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setImgToFavorite,
  removeImgFromFavorite,
} from '../../store/actions/index';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import style from './ImageGalleryItem.module.css';

function ImageGalleryItem({ id, src, alt, largeImageUrl }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const dispatch = useDispatch();

  const set = () => {
    dispatch(
      setImgToFavorite({
        [id]: {
          src: src,
          alt: alt,
        },
      }),
    );
  };

  const remove = () => {
    dispatch(removeImgFromFavorite());
  };

  return (
    <li className={style.item} id={id}>
      <img
        onClick={toggleModal}
        src={src}
        alt={alt}
        className={style.image}
        id={id}
      />
      <button onClick={set}>Добавить в избранное</button>
      <button onClick={remove}>Удалить с избранного</button>
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
