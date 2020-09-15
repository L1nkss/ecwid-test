import React, { useState } from 'react';
import PhotoGallery from '../../components/photo-gallery/photo-gallery';
import Header from '../../components/header/header';
import Upload from '../../components/upload/upload';
import { addIdToItem } from "../../utils/utils";

import './style/style.scss';

const App = () => {
  const [images, setImages] = useState([]);

  const deletePicture = (id) => {
    // Получаем индекс элемента, который надо удалить
    const idx = images.findIndex((image) => image.id === id);
    // Получаем новый массив без элемента
    setImages([...images.slice(0, idx), ...images.slice(idx + 1)]);
  };

  const addPicture = (pictures) => {
    // Если пришел массив(json файл), то обрабатываем как массив
    const result = Array.isArray(pictures) ? pictures.map(addIdToItem) : [...images, addIdToItem(pictures)];

    setImages(((prevState) => ([...prevState, ...result])));
  };

  return (
    <div className="app">
      <Header />
      <div className="container pt32">
        <Upload classContainer="mb32 mx-auto" addPicture={addPicture} />
        <PhotoGallery images={images} deletePicture={deletePicture} addPicture={addPicture} />
      </div>
    </div>
  );
};

export default App;
