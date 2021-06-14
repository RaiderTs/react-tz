import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux'; 
import ImageGalleryItem from '../ImageGalleryItem';
import style from './ImageGallery.module.css';

function ImageGallery({ images }) {
  // const despatch = useDispatch();

  return (
    <ul className={style.list}>
      {images.map((image, index) => (
        <ImageGalleryItem
          id={image.id}
          src={image.webformatURL}
          alt={image.tags}
          largeImageUrl={image.largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
