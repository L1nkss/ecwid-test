import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { handleUrl, fileHandler } from '../../utils/utils';
import './style/style.scss';
import Loader from '../loader/loader';

// Регулярка для проверки ссылки(начинается ли с http | https)
const checkUrlRegEx = new RegExp('^(http|https)://', 'i');

const Upload = (props) => {
  const [isLoading, setJsonLoader] = useState(false);
  const fileRef = useRef();
  const textRef = useRef();
  const [isFileError, setFileError] = useState(false);

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

  const onFileInputHandler = (evt) => {
    evt.preventDefault();
    setJsonLoader(true);
    const files = fileRef.current.files.length ? fileRef.current.files : evt.dataTransfer.files;

    try {
      setFileError(false);
      files.forEach((file) => fileHandler(file, props.addPicture));
    } catch (e) {
      setFileError(true);
    }

    // Убираем файл, который был в input'e, чтобы устранить дублирование при drag & drop
    fileRef.current.value = '';

    // Меняем статус загрузки
    setJsonLoader(false);
  };

  return (
    <form className={`upload-block ${props.classContainer}`}>
      {isLoading && <Loader />}
      <div className="upload-block__field">
        <label className="upload-block__label" htmlFor="url">Введите url картинки</label>
        <div className="upload-block__url">
          <input
            disabled={isLoading}
            ref={textRef}
            className="upload-block__url-input"
            id="url"
            type="text"
            placeholder="http://"
          />
          <button
            className="upload-block__button"
            type="button"
            onClick={onTextInputHandler}
            disabled={isLoading}
          >
            Загрузить
          </button>
        </div>
      </div>
      <div className="upload-block__field">
        <label className="upload-block__label" htmlFor="file">Загрузите файл</label>
        <div
          className="upload-block__drop-area"
          onDragOver={(evt) => evt.preventDefault()}
          onDrop={onFileInputHandler}
        >
          <input
            ref={fileRef}
            disabled={isLoading}
            className="upload-block__drop-area-input"
            type="file"
            id="file"
            multiple
            onChange={onFileInputHandler}
          />
          <div className={`upload-block__drop-area-inner ${isFileError ? 'upload-block__drop-area-inner--error' : ''}`}>
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
