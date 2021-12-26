import { isWebp } from "./libs/webpImg.js";
isWebp();

import { burger } from "./libs/burger.js";
burger('header-top__menu');

// import {formPopup} from "./libs/popupForm.js"
// formPopup(openBtns, fromBG, form, formBody);


// import {blurElements} from "./libs/blurElements.js";
// blurElements();


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

//import {pagination} from "./libs/pagination.js";
//pagination(list, item, itemCount);


//import Swiper, { Navigation, Pagination } from 'swiper';
//const swiper = new Swiper();