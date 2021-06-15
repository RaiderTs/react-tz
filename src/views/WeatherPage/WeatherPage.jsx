import { useState } from 'react';
import ImagesInfo from '../../components/ImagesInfo';

function WeatherPage() {
  const [imageName] = useState('weather');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <>
      <ImagesInfo
        imageName={imageName}
        images={images}
        page={page}
        setImages={setImages}
        setPage={setPage}
      />
    </>
  );
}

export default WeatherPage;
