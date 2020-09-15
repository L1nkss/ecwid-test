import React from 'react';
import './style/style.scss';
import PropTypes from 'prop-types';
import handleUrl from '../../utils/utils';

const PhotoGallery = (props) => {
  const handleDrop = (evt) => {
    evt.preventDefault();

    // Если мы делаем drag and drop уже существующего изображения (находится в галерее)
    if (evt.dataTransfer.items[0].type === 'text/plain') {
      const url = evt.dataTransfer.getData('URL');
      handleUrl(url, props.addPicture);
      return;
    }

    for (let i = 0; i < evt.dataTransfer.items.length; i++) {
      const url = URL.createObjectURL(evt.dataTransfer.items[i].getAsFile());
      handleUrl(url, props.addPicture);
    }
  };
  const createImage = (image) => {
    const ratio = image.width / image.height;
    const widthBase = ratio * 200;

    return (
      <div className="photo-gallery__item" style={{ flexGrow: ratio }} key={image.id}>
        <span className="photo-gallery__item-close" onClick={() => props.deletePicture(image.id)}>
          <i className="fas fa-trash-alt" />
        </span>
        <img className="photo-gallery__item-img" width={widthBase} height={200} src={image.url} alt="Изображение" style={{ flexGrow: 1 }} />
      </div>
    );
  };

  return (
    <div
      className="photo-gallery"
      draggable
      onDragOver={(evt) => evt.preventDefault()}
      onDrop={handleDrop}
    >
      {props.images && props.images.map(createImage)}
    </div>
  );
};

PhotoGallery.propTypes = {
  addPicture: PropTypes.func.isRequired,
  deletePicture: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    height: PropTypes.number,
    id: PropTypes.string,
    url: PropTypes.string,
    width: PropTypes.number,
  })).isRequired,
};

export default PhotoGallery;
