ymaps.ready(init);
function init() {

  var myMap = new ymaps.Map("map", {
    center: [59.938631, 30.323037],
    zoom: 16,
    controls: []
  });


  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Круизы по Арктике',
    balloonContent: 'г. Санкт-Петербург, ул. Большая Конюшенная, 19/8'
  }, {
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/svg/map-pin.svg',
        // Размеры метки.
        iconImageSize: [18, 22],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-10, -15]
  }),

  myMap.geoObjects.add(myPlacemark)
}
