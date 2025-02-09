import Swiper from 'swiper';
// import { EffectCards } from 'swiper/modules';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';

import '../scss/style.scss';

(function () {
	const burgerOpenMenu = document.querySelector('.header__box-burger');
	const navigationMenu = document.querySelector('.header__nav');
	const burgerCloseMenu = document.querySelector('.header__nav-close');

	burgerOpenMenu.addEventListener("click", () => {
		navigationMenu.classList.add('active');
	});

	burgerCloseMenu.addEventListener("click", () => {
		navigationMenu.classList.remove('active');
	});
})();

(function () {
	const tabsItem = document.querySelectorAll('.tabs__list-item');
	const tabsContent = document.querySelectorAll('.tabs__content-item');

	tabsItem.forEach((tab, index) => {
		tab.addEventListener("click", () => {
			tabsContent.forEach((content) => {
				content.classList.remove('active')
			})
			tabsItem.forEach((tab) => {
				tab.classList.remove('active')
			})
			tabsItem[index].classList.add('active')
			tabsContent[index].classList.add('active')
		})
	})
})();

const swiper = new Swiper('.team__swiper', {
	modules: [Pagination, Autoplay],
	spaceBetween: 30,
	loop: true,
	speed: 700,
	autoplay: {
		delay: 2000,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// modules: [EffectCards],
	// effect: "cards",
	// grabCursor: true,
});

// POPUP

const myPopup = new Popup({
	id: "my-popup",
	title: "My First Popup",
	content: `
			An example popup.
			Supports multiple lines.`,
});


const teamPopup = document.querySelector('.header__address');

teamPopup.addEventListener("click", () => {
	myPopup.show();
})