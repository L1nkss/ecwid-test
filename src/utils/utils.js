/*
* Обработчик для ссылок
* Необходим получить ширину и высоту изображения, поэтому создаем new Image
* */
const handleUrl = (url, callback) => {
  const img = new Image();
  img.onload = function () {
    const newPicture = {
      url,
      width: this.width,
      height: this.height,
    };
    callback(newPicture, 'url');
  };

  img.src = url;
};

const createID = () => `_${Math.random().toString(36).substr(2, 9)}`;

const addIdToItem = (item) => ({ ...item, id: createID()});

export { handleUrl, addIdToItem};
