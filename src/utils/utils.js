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

export default handleUrl;
