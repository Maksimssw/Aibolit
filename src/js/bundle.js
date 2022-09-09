/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/Modals/modal.js":
/*!****************************************!*\
  !*** ./src/js/modules/Modals/modal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toggleModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleModal */ "./src/js/modules/Modals/toggleModal.js");


function modal({modal, btnOpen, btnClose}){
    const modalWrapper = document.querySelector(modal),
    modalBtnOpen = document.querySelectorAll(btnOpen),
    modalBtnClose = document.querySelector(btnClose);

    modalBtnOpen.forEach(el => {
        el.addEventListener("click", function(){
            (0,_toggleModal__WEBPACK_IMPORTED_MODULE_0__.openModal)(modalWrapper);
        });
    })

    modalBtnClose.addEventListener('click', function(){
        ;(0,_toggleModal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modalWrapper);
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/js/modules/Modals/modalCity.js":
/*!********************************************!*\
  !*** ./src/js/modules/Modals/modalCity.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toggleModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleModal */ "./src/js/modules/Modals/toggleModal.js");



function modalCity(){
    const modal = document.querySelector('.modal-city');
    const modalClose = modal.querySelector('.modal__wrapper-close');
    const btnCity = document.querySelector('.header__city');
    const modalWrapper = document.querySelector(".modal-city__wrapper");

    btnCity.innerText = localStorage.getItem('city') === null ? 'Волгоград' : localStorage.getItem('city');

    modalClose.addEventListener('click', () => {
        (0,_toggleModal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal)
    });
    btnCity.addEventListener('click', () => {
        (0,_toggleModal__WEBPACK_IMPORTED_MODULE_0__.openModal)(modal)
    });

    modalWrapper.addEventListener('click', function(e){
        if(e.target.classList.contains('city__link')){
            const cityText = e.target.textContent;
            localStorage.setItem('city', cityText);
            btnCity.innerText = `${cityText}`;

            (0,_toggleModal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);
        }
    });
}   

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalCity);

/***/ }),

/***/ "./src/js/modules/Modals/toggleModal.js":
/*!**********************************************!*\
  !*** ./src/js/modules/Modals/toggleModal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function closeModal(modal){
    modal.classList.add('close');
    modal.classList.remove('active');
}

function openModal(modal) {
    modal.classList.add('active');
    modal.classList.remove('close');
    modal.classList.remove('blocker');
};




/***/ }),

/***/ "./src/js/modules/Sliders/sliderPrice.js":
/*!***********************************************!*\
  !*** ./src/js/modules/Sliders/sliderPrice.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sliderPrice(){
    const slider = document.querySelector('.price .slider'),
    priceCost = slider.querySelectorAll('.price__cost'),
    priceNum = document.querySelectorAll('.price__list'),
    sliderWrapper = slider.querySelector('.slider__wrapper');

    priceCost.forEach(el => el.style.width = slider.offsetWidth + 'px');

    function toggleNumberSlider(i){
        priceNum.forEach(el => el.classList.remove('active'));
        priceNum[i - 1].classList.add('active');
        priceNum[i + 3].classList.add('active');
    }

    toggleNumberSlider(1);

    sliderWrapper.style.width = priceCost.length * 100 + '%';

    priceNum.forEach(el => {
        el.addEventListener('click', function(e){
            const num = +e.target.innerText
            toggleNumberSlider(num);
            
            sliderWrapper.style.transform = `translateX(-${slider.offsetWidth * (num - 1)}px)`;
        });
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderPrice);

/***/ }),

/***/ "./src/js/modules/Sliders/sliderServices.js":
/*!**************************************************!*\
  !*** ./src/js/modules/Sliders/sliderServices.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sliderServices({sliderSer, btnLeftSer, btnRightSer, sliderWrapperSer, sliderItemSer}){
    const slider = document.querySelector(sliderSer),
    btnLeft = document.querySelector(btnLeftSer),
    btnRight = document.querySelector(btnRightSer),
    sliderWrapper = slider.querySelector(sliderWrapperSer),
    sliderItem = slider.querySelectorAll(sliderItemSer);

    // Начальная позиция
    let scrollX = 0;

    // Вычесление ширины элементов и ширины контейнера
    function counting(px, i){
        sliderItem.forEach(el => {
            el.style.width = (slider.offsetWidth - px) / i + 'px';
        });
        sliderWrapper.style.width = sliderItem[0].offsetWidth * sliderItem.length + 'px';
    }

    // Адаптация Слайдеров 
    if(slider.offsetWidth == 1032){
        counting(40, 3)
    } else if(slider.offsetWidth == 1300){
        counting(75, 4);
    }else if(slider.offsetWidth == 689){
        counting(20, 2);
    }else if(slider.offsetWidth == 650){
        counting(0, 2);
    }

    // Изменение классов
    function toggleBtn(){
        // Открытие левой кнопки
        btnLeft.classList.remove('hidden');
        btnRight.classList.remove('hidden');

        // Если сколл больше условия, закрытие правой кнопки, а так же открытие левой
        if(scrollX >= sliderWrapper.offsetWidth - slider.offsetWidth){
            btnRight.classList.add('hidden');
        }

        // В начальном значение левая кнопка закрыта
        if(scrollX === 0){
            btnLeft.classList.add('hidden');
        }
    }   

    // Обработка правой кнопки
    btnRight.addEventListener('click', function(){
        if(scrollX >= sliderWrapper.offsetWidth - slider.offsetWidth){
            scrollX = 0;
            toggleBtn();
        } else{
            scrollX += slider.offsetWidth;
            toggleBtn();
        }

        // Скролл контейнера
        sliderWrapper.style.transform = `translateX(-${scrollX}px)`;
    });

    // Обработка левой кнопки
    btnLeft.addEventListener('click', function(){
        if(scrollX === 0){
            scrollX = slider.offsetWidth
            toggleBtn();
        } else{
            scrollX -= slider.offsetWidth;
            toggleBtn();
        }
        
        // Скролл контейнера
        sliderWrapper.style.transform = `translateX(-${scrollX}px)`;
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderServices);

/***/ }),

/***/ "./src/js/modules/Sliders/sliderSpecialists.js":
/*!*****************************************************!*\
  !*** ./src/js/modules/Sliders/sliderSpecialists.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sliderSpecialists(item){
    const slider = document.querySelector('.specialists__slider'),
    left = document.querySelector('.specialists__btn-left'),
    right = document.querySelector('.specialists__btn-right'),
    sliderWrapper = document.querySelector('.specialists__slider-wrapper'),
    container = document.querySelector('.container'),
    sliderItem = slider.querySelectorAll('.specialists__slider-item');

    let scrollX = 0;
    let widthItem;

    let numberMultiplication;
    let margins;

    if(container.offsetWidth > 1288){
        numberMultiplication = 3;
        sliderItem.forEach(el => {
            widthItem = slider.offsetWidth / 6
            el.style.width = Math.trunc(widthItem) + 'px';
        });
        margins = 15 * sliderItem.length - 1;
        sliderWrapper.style.width = Math.trunc(widthItem) * sliderItem.length + 'px';
    } else if(container.offsetWidth <= 1288 && container.offsetWidth >= 687){
        numberMultiplication = 3;
        sliderItem.forEach(el => {
            widthItem = slider.offsetWidth / 3
            el.style.width = Math.trunc(widthItem) + 'px';

        });
        margins = 15 * sliderItem.length - 1;
        sliderWrapper.style.width = Math.trunc(widthItem) * sliderItem.length + 'px';
    } else {
        numberMultiplication = 1.2;
        sliderItem.forEach(el => {
            widthItem = slider.offsetWidth / 1
            el.style.width = Math.trunc(widthItem) + 'px';

        });
        margins = 15 * sliderItem.length - 1;
        sliderWrapper.style.width = Math.trunc(widthItem) * sliderItem.length + 'px';
    }

    right.addEventListener('click', function(){
        if(scrollX * numberMultiplication < sliderWrapper.offsetWidth){
            scrollX += Math.trunc(widthItem);
        }else{
            scrollX = 0;
        }

        console.log(scrollX);

        sliderWrapper.style.transform = `translateX(-${scrollX}px)`;
    });

    left.addEventListener('click', function(){
        if(scrollX === 0){
            scrollX = sliderWrapper.offsetWidth / numberMultiplication;
        }else{
            scrollX -= Math.trunc(widthItem);
        }
        
        console.log(scrollX);

        sliderWrapper.style.transform = `translateX(-${scrollX}px)`;
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderSpecialists);

/***/ }),

/***/ "./src/js/modules/choice.js":
/*!**********************************!*\
  !*** ./src/js/modules/choice.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server/server */ "./src/js/server/server.js");


function choice(){
    const choiceWrapper = document.querySelector('.choice__wrapper');

    (0,_server_server__WEBPACK_IMPORTED_MODULE_0__["default"])('./choice.json')
        .then(data => setChoice(data.choice));

    function setChoice(data){
        data.map(el => {
            const {img, title, subtitle} = el;

            const div = document.createElement('div');
            div.classList.add('choice__item');

            div.innerHTML = `
            <h2 class="choice__item-title title_section">${title}</h2>
            <div class="choice__item-block">
                <div class="choice__item-photo">
                    <img src='${img}' alt="icon">
                </div>
                <p class="choice__item-subtitle text">${subtitle}</p>
            </div>
            `;

            choiceWrapper.appendChild(div);
        })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (choice);

/***/ }),

/***/ "./src/js/modules/direction.js":
/*!*************************************!*\
  !*** ./src/js/modules/direction.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server/server */ "./src/js/server/server.js");


function direction(){
    const directionWrapper = document.querySelector('.direction__wrapper');

    (0,_server_server__WEBPACK_IMPORTED_MODULE_0__["default"])('http://localhost:3000/direction.json')
        .then(data => setDirection(data.direction));

    function setDirection(data){
        data.map(el => {
            const {title, services, img} = el;

            const a = document.createElement('a');
            a.classList.add('direction__list');
            a.setAttribute('href', '#');

            a.innerHTML = `
            <h3 class="direction__title text_section">${title}</h3>
            <p class="direction__services text">${services} услуг</p>
            <div class="direction__photo">
                <img src='${img}' alt="ico">
            </div>
            `;

            directionWrapper.appendChild(a);
            
        })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (direction);

/***/ }),

/***/ "./src/js/modules/entrance.js":
/*!************************************!*\
  !*** ./src/js/modules/entrance.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modals_toggleModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modals/toggleModal */ "./src/js/modules/Modals/toggleModal.js");


function entrance (){
    const tel = document.querySelector('.modal__tel'),
    form = document.querySelector('.form-entrance'),
    messageError = document.querySelector('.modal__error'),
    btn = document.querySelector('.modal__btn'),
    modal = document.querySelector('.modal');

    tel.addEventListener('input', function(e){
        let num = +e.target.value
        
        if(Number.isInteger(num)){
            messageError.classList.remove('active');
            btn.classList.add('active');
            btn.setAttribute('href', 'order.html');
        } else{
            messageError.classList.add('active');
            btn.classList.remove('active');
            btn.removeAttribute('href');
        }
    });

    form.addEventListener('submit', function(e){
        e.preventDefault();
    });

    btn.addEventListener('click', function(){
        if(btn.classList.contains('active')){
            (0,_Modals_toggleModal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);
            tel.value = '';
        }
    });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (entrance);

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function hamburger(){
    const hamburger = document.querySelector('.hamburger');
    const menuWrapper = document.querySelector('.menu-wrapper');

    
    menuWrapper.appendChild(document.querySelector('.menu').cloneNode(1));

    function toggle(){
        hamburger.classList.toggle('active');
        menuWrapper.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggle);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hamburger);

/***/ }),

/***/ "./src/js/modules/intro.js":
/*!*********************************!*\
  !*** ./src/js/modules/intro.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function intro(){
    const wrapper = document.querySelector(".intro__wrapper");

    // Данные блоков
    const caps = [
        {
            title: 'Айболит круглосуточная ветклиника',
            img: './img/Cap/image.png',
            classPhoto: 'cap__photo-kitty',
            classTitle: 'cap_kitty'
        },
        {
            title: 'Комфортные оборудованные стационары',
            img: './img/Cap/image2.png',
            classPhoto: 'cap__photo-human',
            classTitle: 'cap_human'
        },
        {
            title: 'Новейшее европейское оборудование',
            img: './img/Cap/image3.png',
            classPhoto: 'cap__photo-dog',
            classTitle: 'cap_dog'
        },
        {
            title: 'Собственная современная лаборатория',
            img: './img/Cap/image4.png',
            classPhoto: 'cap__photo-rabbit',
            classTitle: 'cap_rabbit'
        },
        {
            title: 'Аптека и зоомагазин по доступным ценам',
            img: './img/Cap/image5.png',
            classPhoto: 'cap__photo-cat',
            classTitle: 'cap_cat'
        },
        {
            title: 'Груминг салон и косметические товары',
            img: './img/Cap/image6.png',
            classPhoto: 'cap__photo-puppies',
            classTitle: 'cap_puppies'
        }
    ]


    // Создание блоков
    caps.map(item => {
        const {title, img, classPhoto, classTitle} = item;

        const div = document.createElement('div');

        div.classList.add('cap');

        div.innerHTML = `
        <h1 class="cap__title title_big ${classTitle}">${title}</h1>
        <a href="record.html" class="cap__btn btn text_link">ЗАПИСАТЬСЯ</a>
        <ul class="icons">
            <li class="icons__list">
                <a class="icons__link" href="#">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM31.4151 24.7348C31.3596 25.9573 31.1652 26.792 30.8813 27.5226C30.2847 29.0652 29.0652 30.2847 27.5226 30.8813C26.7923 31.1652 25.9573 31.3593 24.7351 31.4151C23.5104 31.4709 23.1192 31.4844 20.0003 31.4844C16.8811 31.4844 16.4902 31.4709 15.2652 31.4151C14.043 31.3593 13.208 31.1652 12.4777 30.8813C11.7111 30.593 11.0172 30.141 10.4434 29.5566C9.85931 28.9832 9.40735 28.2889 9.11896 27.5226C8.83514 26.7923 8.64075 25.9573 8.58521 24.7351C8.52875 23.5101 8.51562 23.1189 8.51562 20C8.51562 16.8811 8.52875 16.4899 8.5849 15.2652C8.64044 14.0427 8.83453 13.208 9.11835 12.4774C9.40674 11.7111 9.85901 11.0168 10.4434 10.4434C11.0168 9.85901 11.7111 9.40704 12.4774 9.11865C13.208 8.83484 14.0427 8.64075 15.2652 8.5849C16.4899 8.52905 16.8811 8.51562 20 8.51562C23.1189 8.51562 23.5101 8.52905 24.7348 8.58521C25.9573 8.64075 26.792 8.83484 27.5226 9.11835C28.2889 9.40674 28.9832 9.85901 29.5569 10.4434C30.141 11.0172 30.5933 11.7111 30.8813 12.4774C31.1655 13.208 31.3596 14.0427 31.4154 15.2652C31.4713 16.4899 31.4844 16.8811 31.4844 20C31.4844 23.1189 31.4713 23.5101 31.4151 24.7348ZM28.8952 13.2944C28.7103 12.7934 28.4154 12.34 28.0322 11.9678C27.66 11.5846 27.2069 11.2897 26.7056 11.1048C26.2991 10.9469 25.6884 10.759 24.5636 10.7078C23.3469 10.6523 22.9821 10.6404 19.9016 10.6404C16.8209 10.6404 16.4561 10.652 15.2396 10.7075C14.1148 10.759 13.5038 10.9469 13.0976 11.1048C12.5964 11.2897 12.143 11.5846 11.7711 11.9678C11.3879 12.34 11.093 12.7931 10.9078 13.2944C10.7499 13.7009 10.562 14.3119 10.5108 15.4367C10.4553 16.6531 10.4434 17.0179 10.4434 20.0987C10.4434 23.1791 10.4553 23.5439 10.5108 24.7607C10.562 25.8855 10.7499 26.4962 10.9078 26.9027C11.093 27.4039 11.3876 27.857 11.7708 28.2292C12.143 28.6124 12.5961 28.9073 13.0973 29.0922C13.5038 29.2504 14.1148 29.4383 15.2396 29.4895C16.4561 29.545 16.8206 29.5566 19.9013 29.5566C22.9824 29.5566 23.3472 29.545 24.5633 29.4895C25.6881 29.4383 26.2991 29.2504 26.7056 29.0922C27.7118 28.7041 28.507 27.9088 28.8952 26.9027C29.053 26.4962 29.241 25.8855 29.2925 24.7607C29.348 23.5439 29.3596 23.1791 29.3596 20.0987C29.3596 17.0179 29.348 16.6531 29.2925 15.4367C29.2413 14.3119 29.0534 13.7009 28.8952 13.2944ZM19.9016 26.0225C16.6296 26.0225 13.9772 23.3704 13.9772 20.0983C13.9772 16.8263 16.6296 14.1742 19.9016 14.1742C23.1733 14.1742 25.8258 16.8263 25.8258 20.0983C25.8258 23.3704 23.1733 26.0225 19.9016 26.0225ZM24.6755 13.94C24.6755 14.7046 25.2954 15.3245 26.06 15.3245C26.8246 15.3245 27.4442 14.7046 27.4445 13.94C27.4445 13.1754 26.8246 12.5555 26.06 12.5555C25.2954 12.5555 24.6755 13.1754 24.6755 13.94ZM23.8424 20C23.8424 22.1221 22.1221 23.8424 20 23.8424C17.8779 23.8424 16.1576 22.1221 16.1576 20C16.1576 17.8779 17.8779 16.1577 20 16.1577C22.1221 16.1577 23.8424 17.8779 23.8424 20Z" fill="#C3B9B5"/>
                    </svg>  
                </a>                               
            </li>
            <li class="icons__list">
                <a class="icons__link" href="#">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 19.975C0 8.94382 8.94382 0 19.975 0C31.0062 0 39.9501 8.94136 39.9501 19.975C39.9501 31.0062 31.0062 39.9501 19.975 39.9501C8.94382 39.9501 0 31.0062 0 19.975ZM21.8651 19.9749L25.1385 19.9725L25.5754 15.8427H21.8601L21.8651 13.7753C21.8651 12.6991 21.94 12.1224 23.4856 12.1224H25.553V7.99005H22.2471C18.2796 7.99005 17.3657 10.04 17.3657 13.4107L17.3707 15.8427L14.3745 15.8452V19.975H17.3707V31.9599H21.8626L21.8651 19.9749Z" fill="#C3B9B5"/>
                    </svg>
                </a>
            </li>
            <li class="icons__list">
                <a class="icons__link" href="#">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM20.2749 28.9372H18.7208C18.7208 28.9372 15.2917 29.146 12.2721 25.9666C8.97886 22.4989 6.07041 15.6175 6.07041 15.6175C6.07041 15.6175 5.90275 15.1664 6.08488 14.9483C6.2896 14.703 6.84729 14.6873 6.84729 14.6873L10.5623 14.6627C10.5623 14.6627 10.9124 14.722 11.163 14.9079C11.3695 15.0614 11.4853 15.3484 11.4853 15.3484C11.4853 15.3484 12.0857 16.884 12.8809 18.2733C14.4329 20.9854 15.1558 21.5786 15.6828 21.2881C16.4505 20.8644 16.2204 17.4541 16.2204 17.4541C16.2204 17.4541 16.2345 16.2162 15.8339 15.665C15.5236 15.2377 14.9384 15.1132 14.68 15.0782C14.471 15.05 14.8141 14.5592 15.2589 14.3389C15.9274 14.0077 17.1081 13.9888 18.503 14.0034C19.5898 14.0145 19.9025 14.083 20.3275 14.1869C21.3134 14.4276 21.2827 15.1991 21.2164 16.8636C21.1966 17.3609 21.1736 17.938 21.1736 18.6045C21.1736 18.7545 21.1692 18.9143 21.1648 19.0788C21.1418 19.9312 21.1154 20.9072 21.6702 21.2699C21.9547 21.4555 22.6507 21.2977 24.3916 18.3082C25.2168 16.8915 25.8356 15.2256 25.8356 15.2256C25.8356 15.2256 25.9707 14.9286 26.1808 14.8012C26.3957 14.6713 26.6855 14.7112 26.6855 14.7112L30.595 14.6866C30.595 14.6866 31.7696 14.5449 31.9599 15.081C32.1593 15.644 31.5208 16.9583 29.9236 19.111C28.4059 21.1567 27.6689 21.9078 27.7392 22.5737C27.7904 23.0584 28.2694 23.498 29.1866 24.3589C31.111 26.1653 31.6239 27.1138 31.7458 27.3392C31.7557 27.3575 31.763 27.371 31.7682 27.3798C32.6295 28.824 30.8131 28.9372 30.8131 28.9372L27.341 28.9861C27.341 28.9861 26.5948 29.1357 25.6128 28.4535C25.0993 28.0971 24.5972 27.515 24.1189 26.9605C23.3877 26.1127 22.7118 25.3291 22.135 25.514C21.1672 25.8246 21.1976 27.9335 21.1976 27.9335C21.1976 27.9335 21.2046 28.3839 20.984 28.6238C20.7443 28.8851 20.2749 28.9372 20.2749 28.9372Z" fill="#C3B9B5"/>
                    </svg>
                </a>                                                               
            </li>
            <li class="icons__list">
                <a class="icons__link" href="#">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM32.4969 20.0204C32.4969 20.0204 32.4969 24.0765 31.9824 26.0324C31.694 27.103 30.8499 27.9471 29.7794 28.2352C27.8235 28.75 20 28.75 20 28.75C20 28.75 12.197 28.75 10.2206 28.2147C9.15009 27.9266 8.30597 27.0822 8.01758 26.0117C7.50275 24.0765 7.50275 20 7.50275 20C7.50275 20 7.50275 15.9442 8.01758 13.9883C8.30566 12.9178 9.17053 12.0529 10.2206 11.7648C12.1765 11.25 20 11.25 20 11.25C20 11.25 27.8235 11.25 29.7794 11.7853C30.8499 12.0734 31.694 12.9178 31.9824 13.9883C32.5177 15.9442 32.4969 20.0204 32.4969 20.0204ZM24.0146 20L17.5089 23.7469V16.2531L24.0146 20Z" fill="#C3B9B5"/>
                    </svg>
                </a>
            </li>
        </ul>
        <div class="cap__photo ${classPhoto}">
            <img src="${img}" alt="animals"/>
        </div>
        `;

        wrapper.appendChild(div);
    });

    const capList = document.querySelectorAll('.cap');
    const btnNum = document.querySelectorAll(".intro__list");

    let current = 1;

    // Добовление класса active, для отоброжения на странице
    function activeCap(i){
        capList.forEach(el => el.classList.remove('active'));
        btnNum.forEach(el => el.classList.remove('active'));
        capList[i - 1].classList.add('active');
        btnNum[i - 1].classList.add("active");
    }

    // Начальное значиние отоброжения
    activeCap(1);

    // Обработка цифры при нажатий 
    function assetProcessing(e){
        if(e.target.classList.contains('intro__list')){
            activeCap(+e.target.textContent);
            current = +e.target.textContent;
        }
    }

    // Обработка клика
    wrapper.addEventListener('click', function(e){
        assetProcessing(e);
    });

    // Обработка кнопки 'Enter'
    btnNum.forEach(el => {
        el.addEventListener('keydown', function(e){
            if(e.code === 'Enter'){
                assetProcessing(e);
            }
        });
    })

    // Каждые 8 секунд включается новый блок
    setInterval(() => {
        if(current < 6){
            current++;
            activeCap(current);
        } else{
            current = 1;
            activeCap(current);
        }
    }, 8000);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intro);

/***/ }),

/***/ "./src/js/modules/services.js":
/*!************************************!*\
  !*** ./src/js/modules/services.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function services(){
    const menu = document.querySelector('.services__wrapper .menu'),
    menuWrapper = menu.querySelector('.menu__wrapper'),
    menuBtn = menu.querySelector('.menu__wrapper');

    function toggleClassMenu(){
        menuWrapper.classList.toggle('active');
    }

    menuBtn.addEventListener('click', toggleClassMenu);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (services());

/***/ }),

/***/ "./src/js/server/server.js":
/*!*********************************!*\
  !*** ./src/js/server/server.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function GET(url){
    let res = await fetch(url);
    
    if(!res.ok){
        throw new Error(`url: ${url}, status: ${res.status}`)
    }

    return await res.json();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GET);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Modals_modalCity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Modals/modalCity */ "./src/js/modules/Modals/modalCity.js");
/* harmony import */ var _modules_intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/intro */ "./src/js/modules/intro.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_direction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/direction */ "./src/js/modules/direction.js");
/* harmony import */ var _modules_Sliders_sliderSpecialists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Sliders/sliderSpecialists */ "./src/js/modules/Sliders/sliderSpecialists.js");
/* harmony import */ var _modules_choice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/choice */ "./src/js/modules/choice.js");
/* harmony import */ var _modules_Modals_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/Modals/modal */ "./src/js/modules/Modals/modal.js");
/* harmony import */ var _modules_entrance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/entrance */ "./src/js/modules/entrance.js");
/* harmony import */ var _modules_Sliders_sliderServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/Sliders/sliderServices */ "./src/js/modules/Sliders/sliderServices.js");
/* harmony import */ var _modules_Sliders_sliderPrice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/Sliders/sliderPrice */ "./src/js/modules/Sliders/sliderPrice.js");
/* harmony import */ var _modules_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/services */ "./src/js/modules/services.js");












document.addEventListener('DOMContentLoaded', function(){
    (0,_modules_Modals_modalCity__WEBPACK_IMPORTED_MODULE_0__["default"])();
    try{
        (0,_modules_Modals_modal__WEBPACK_IMPORTED_MODULE_6__["default"])({
            modal: '.modal',
            btnOpen: '.record__list',
            btnClose: '.modal_close-entrance'
        })
    } catch{}
    try{
        (0,_modules_entrance__WEBPACK_IMPORTED_MODULE_7__["default"])();
    } catch{};
    try{
        (0,_modules_intro__WEBPACK_IMPORTED_MODULE_1__["default"])();
    } catch{}
    try{
        (0,_modules_Sliders_sliderSpecialists__WEBPACK_IMPORTED_MODULE_4__["default"])();
    } catch{}
    (0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_2__["default"])();
    try{
        (0,_modules_Sliders_sliderServices__WEBPACK_IMPORTED_MODULE_8__["default"])({
            sliderSer: '.services__info .slider',
            btnLeftSer: '.slider__btn-left',
            btnRightSer: '.slider__btn-right',
            sliderWrapperSer: '.slider__wrapper',
            sliderItemSer: '.slider__item'
        });
    } catch{}
    (0,_modules_Sliders_sliderServices__WEBPACK_IMPORTED_MODULE_8__["default"])({
        sliderSer: '.services-all__wrapper .slider',
        btnLeftSer: '.services-all__wrapper .btn_left',
        btnRightSer: '.services-all__wrapper .btn_right',
        sliderWrapperSer: '.slider__wrapper',
        sliderItemSer: '.slider__item'
    });
    try{
        (0,_modules_Sliders_sliderPrice__WEBPACK_IMPORTED_MODULE_9__["default"])();
    } catch{}
    try{
        (0,_modules_services__WEBPACK_IMPORTED_MODULE_10__["default"])();
    }catch{}
    try{
        (0,_modules_direction__WEBPACK_IMPORTED_MODULE_3__["default"])();
    } catch{}
    try{
        (0,_modules_choice__WEBPACK_IMPORTED_MODULE_5__["default"])();
    } catch{}
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map