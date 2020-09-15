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

const jsonHandler = (json, callback) => {
  const fileReader = new FileReader();
  fileReader.readAsText(json, 'UTF-8');
  fileReader.onload = ((evt) => {
    const values = JSON.parse(evt.target.result);
    const result = [];

    // Проходим по json файлу, чтобы не быть привязанным к ключу galleryImages
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) {
        values[key].map((element) => result.push(element));
      }
    }

    // Вызываем callback функцию для добавления Json'a
    callback(result, 'json');
  });
};

const createID = () => `_${Math.random().toString(36).substr(2, 9)}`;

const addIdToItem = (item) => ({ ...item, id: createID() });

const fileHandler = (file, callback) => {
  switch (file.type) {
    case 'image/jpeg':
    case 'image/png':
      handleUrl(URL.createObjectURL(file), callback);
      break;
    case 'application/json':
      jsonHandler(file, callback);
      break;
    default:
      throw new Error();
  }
};

export {
  handleUrl, addIdToItem, fileHandler, jsonHandler,
};
