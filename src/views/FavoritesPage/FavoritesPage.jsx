import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ImageGallery from '../../components/ImageGallery';

import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const [images, setImages] = useState([]);

  const storeData = useSelector(state => state.favoriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map(item => {
        return {
          id: item[0],
          ...item[1],
        };
      });
      
      setImages(res);
    }
  }, [storeData]);

  return (
    <>
      {/* <h1 className={styles.header_comment}>Favorites</h1> */}
      {images.length ? (
        <ImageGallery images={images} />
      ) : (
        <h2 className={styles.comment}>No data</h2>
      )}
    </>
  );
};

export default FavoritesPage;
