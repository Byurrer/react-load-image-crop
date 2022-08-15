# Загрузка и обрезка изображения на React (hooks)

<p align="center" width="100%">
    <img src="https://byurrer.ru/imgs/external/react-load-image-crop.gif"> 
</p>

Пример загрузки изображения с устройства пользователя с последующей обрезкой и получением результата в `base64` с использованием пакета [react-easy-crop](https://www.npmjs.com/package/react-easy-crop) и кусков кода по обрезке [отсюда](https://github.com/kopylovvlad/canvas_image_processing/blob/master/index.js). Интерактивный просмотр на [codesandbox](https://codesandbox.io/s/react-load-image-crop-cbebi2).

Компонент состоит из двух частей:

- `ImageLoader` - загрузка и рендер изображения, задачи:
  - показать кастомизированный элемент формы для загрузки изображения (до загрузки изображения что-то дефолтное)
  - отрисовать обрезанное изображение оставив возможность загрузки нового изображения
- `ImageCroper` - обрезка изображения и выдача результата в `base64`

`ImageLoader` внутри себя содержит `ImageCroper`.
