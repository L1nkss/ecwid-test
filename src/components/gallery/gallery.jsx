import React from 'react';
import './style/style.scss';
import PropTypes from 'prop-types';
import { handleUrl, fileHandler } from '../../utils/utils';
import BASE_IMAGE_HEIGHT from '../../constants/constants';

const Gallery = (props) => {
  const handleDrop = (evt) => {
    evt.preventDefault();

    // Если мы делаем drag and drop уже существующего изображения (находится в галерее)
    if (evt.dataTransfer.items[0].type === 'text/plain') {
      const url = evt.dataTransfer.getData('URL');
      handleUrl(url, props.addPicture);
      return;
    }

    evt.dataTransfer.files.forEach((file) => fileHandler(file, props.addPicture));
  };
  const createImage = (image) => {
    const ratio = image.width / image.height;
    const widthBase = ratio * BASE_IMAGE_HEIGHT;

    return (
      <div className="gallery__item" style={{ flexGrow: ratio }} key={image.id}>
        <span className="gallery__item-icon-close" onClick={() => props.deletePicture(image.id)}>
          <i className="fas fa-trash-alt" />
        </span>
        <img
          className="gallery__item-img"
          width={widthBase}
          height={BASE_IMAGE_HEIGHT}
          src={image.url}
          alt="Изображение"
          style={{ flexGrow: 1 }}
        />
      </div>
    );
  };

  return (
    <div
      className="gallery"
      draggable
      onDragOver={(evt) => evt.preventDefault()}
      onDrop={handleDrop}
    >
      {props.images && props.images.map(createImage)}
    </div>
  );
};

Gallery.propTypes = {
  addPicture: PropTypes.func.isRequired,
  deletePicture: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    height: PropTypes.number,
    id: PropTypes.string,
    url: PropTypes.string,
    width: PropTypes.number,
  })).isRequired,
};

export default Gallery;
