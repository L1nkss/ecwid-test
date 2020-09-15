import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { handleUrl } from '../../utils/utils';
import './style/style.scss';
import Loader from '../loader/loader';

// Регулярка для проверки ссылки(начинается ли с http | https)
const checkUrlRegEx = new RegExp('^(http|https)://', 'i');

const Upload = (props) => {
  const [isLoading, setJsonLoader] = useState(false);
  const fileRef = useRef();
  const textRef = useRef();
  const [isFileError, setFileError] = useState(false);

  const handleJsonFile = (json, callback) => {
    const fileReader = new FileReader();
    fileReader.readAsText(json, 'UTF-8');
    fileReader.onload = ((evt) => {
      const test = JSON.parse(evt.target.result);
      const result = [];

      // Проходим по json файлу, чтобы не быть привязанным к ключу galleryImages
      for (const key in test) {
        if (Object.prototype.hasOwnProperty.call(test, key)) {
          test[key].map((element) => result.push(element));
        }
      }

      // Вызываем callback функцию для добавления Json'a
      callback(result, 'json');
    });
  };

  const onTextInputHandler = () => {
    const textPath = textRef.current.value;

    if (textPath === '') {
      return;
    }
    setJsonLoader(true);
    const match = checkUrlRegEx.test(textPath);

    if (match) {
      handleUrl(textPath, props.addPicture);
      textRef.current.value = '';
    }

    setJsonLoader(false);
  };

  const fileHandler = (file) => {
    switch (file.type) {
      case 'image/jpeg':
      case 'image/png':
        setFileError(false);
        handleUrl(URL.createObjectURL(file), props.addPicture);
        break;
      case 'application/json':
        setFileError(false);
        handleJsonFile(file, props.addPicture);
        break;
      default:
        setFileError(true);
        break;
    }
  };

  const onFileInputHandler = (evt) => {
    evt.preventDefault();
    setJsonLoader(true);
    const files = fileRef.current.files.length ? fileRef.current.files : evt.dataTransfer.files;

    files.forEach(fileHandler);

    // Убираем файл, который был в input'e, чтобы устранить дублирование при drag & drop
    fileRef.current.value = '';

    // Меняем статус загрузки
    setJsonLoader(false);
  };

  return (
    <form className={`upload ${props.classContainer}`}>
      {isLoading && <Loader />}
      <div className="mb12">
        <label htmlFor="url">Введите url картинки</label>
        <div className="upload__text mt8">
          <input
            disabled={isLoading}
            ref={textRef}
            className="upload__input-text"
            id="url"
            type="text"
            placeholder="http://"
          />
          <button
            className="upload__button"
            type="button"
            onClick={onTextInputHandler}
            disabled={isLoading}
          >
            Загрузить
          </button>
        </div>
      </div>
      <div>
        <label htmlFor="file">Загрузите файл</label>
        <div
          className="upload__file mt8"
          onDragOver={(evt) => evt.preventDefault()}
          onDrop={onFileInputHandler}
        >
          <input
            ref={fileRef}
            disabled={isLoading}
            className="upload__file-input"
            type="file"
            id="file"
            multiple
            onChange={onFileInputHandler}
          />
          <div className={`upload__file-wrapper ${isFileError ? 'upload__file-wrapper--error' : ''}`}>
            <div>{isFileError ? 'Загрузите json, png или jpeg файл' : 'Загрузить'}</div>
          </div>
        </div>
      </div>
    </form>
  );
};

Upload.defaultProps = {
  classContainer: '',
};

Upload.propTypes = {
  classContainer: PropTypes.string,
  addPicture: PropTypes.func.isRequired,
};

export default Upload;
