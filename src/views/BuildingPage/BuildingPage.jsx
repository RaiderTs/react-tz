import { useState } from 'react';
import ImagesInfo from '../../components/ImagesInfo';

function BuildingPage() {
  const [imageName] = useState('building');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <>
      {/* <Searchbar onSubmit={handleFormSubmit} /> */}
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

export default BuildingPage;
