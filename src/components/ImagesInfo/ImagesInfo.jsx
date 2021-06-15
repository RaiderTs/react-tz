import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import apiService from '../../services';
import ErrorImage from '../ErrorImage';
import Loader from '../Loader';
import ImageGallery from '../ImageGallery';
import Button from '../Button';

function ImagesInfo({ imageName, images, page, setImages, setPage }) {
  const [error, setError] = useState(null);
  // const [status, setStatus] = useState(Status.IDLE);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (imageName === '') {
      console.log('Ничего не введено');
      return;
    } else if (imageName) {
      fetchImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageName]);


  // Для пролистывания вниз
  
  // useEffect(() => {
  //   scroll();
  // });

  // const scroll = () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // };

  const fetchImages = () => {
    // setStatus(Status.PENDING);
    setIsLoading(isLoading => !isLoading);

    apiService
      .fetchImages(imageName, page)
      .then(newImages => {
        if (newImages.total !== 0) {
          setImages(prevImages => [...prevImages, ...newImages.hits]);
          setPage(page => page + 1);
          // setStatus(Status.RESOLVED);
        } else return Promise.reject(new Error('Invalid request'));
      })
      .catch(error => {
        setError(error);
        // setStatus(Status.REJECTED);
      })
      .finally(() => setIsLoading(isLoading => !isLoading));
  };


  return (
    <>
      {error && <ErrorImage textError={error} />}
      <ImageGallery images={images} />
      <Loader isLoading={isLoading} />
      {images.length > 0 && !isLoading && !error && (
        <Button onClick={fetchImages} />
      )}
    </>
  );
}
// }

ImagesInfo.propTypes = {
  imageName: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  setImages: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default ImagesInfo;

