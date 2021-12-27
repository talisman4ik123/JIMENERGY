import { isWebp } from "./libs/webpImg.js";
isWebp();

import { burger } from "./libs/burger.js";
burger('burger-content');

// import {formPopup} from "./libs/popupForm.js"
// formPopup(openBtns, fromBG, form, formBody);


import { blurElements } from "./libs/blurElements.js";
blurElements();

document.querySelector('.header-main__caption').classList.add('_active');
document.querySelector('.header-main__bottom').classList.add('_active');
document.querySelector('.header-main__content').classList.add('_active');

import { animationWithScroll } from "./libs/animationWithScroll.js";
animationWithScroll('._animation-element');


import { isMobile } from "./libs/isMobile.js";
if (isMobile.any()) {
    document.body.classList.add('_mobile');
} else {
    document.body.classList.add('_pc');
}

function trasformPlaceholder(input) {
    const inp = document.querySelector(input);
    const placeHolder = inp.previousElementSibling;
    inp.onfocus = function () {
        placeHolder.classList.add('active');
    };
    inp.onblur = function () {
        if (inp.value == "") {
            placeHolder.classList.remove('active');
        }
    };
}

trasformPlaceholder("#name");
trasformPlaceholder("#phone");
trasformPlaceholder("#message");

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) { //проверка на существование объекта на который сcылаемся
            const gotoBlock = document.querySelector(menuLink.dataset.goto); //получаем объект на который ссылаемся
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            const iconMenu = document.querySelector('.burger');
            const burgerContent = document.querySelector('.burger-content');
            if (iconMenu.classList.contains('burger--active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove("burger--active");
                burgerContent.classList.remove("burger-content--active");
            }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}



//import {pagination} from "./libs/pagination.js";
//pagination(list, item, itemCount);


//import Swiper, { Navigation, Pagination } from 'swiper';
//const swiper = new Swiper();