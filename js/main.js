/* Mobile Menu */

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');

const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}



/* Phone Mask */

mask('[data-tel-input]');

const inputPhone = document.querySelectorAll('[data-tel-input]');

inputPhone.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == '+') input.value = '';
    })
    input.addEventListener('blur', () => {
        if (input.value == '+') input.value = '';
    })
});



/* Yandex Map */

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.943543,30.338928],
        zoom: 16
    });
    	
    var myPlacemark = new ymaps.Placemark(
        [59.943543,30.338928], 
        {
			balloonContent: `
				<div class="balloon">
					<div class="balloon__address">Наб. реки Фонтанки 10-15</div>
					<div class="balloon__contacts">
						<a href="tel:+78121234567">+8 (812) 123-45-67</a>
					</div>
				</div>
			`,
        },
        {
            iconLayout: 'default#image',
            iconImageHref: './../img/map/location-pin.svg',
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40]
        }
    );

    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
	myMap.controls.remove('searchControl'); // удаляем поиск
	myMap.controls.remove('trafficControl'); // удаляем контроль трафика
	myMap.controls.remove('typeSelector'); // удаляем тип
    // myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	// myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
	myMap.controls.remove('rulerControl'); // удаляем контрол правил
	myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)


    myMap.geoObjects.add(myPlacemark);
    // myPlacemark.balloon.open();
}