import modalCity from './modules/Modals/modalCity';
import intro from './modules/intro';
import hamburger from './modules/hamburger'
import direction from './modules/direction';
import sliderSpecialists from './modules/Sliders/sliderSpecialists';
import choice from './modules/choice';
import modal from './modules/Modals/modal';
import entrance from './modules/entrance';
import menuPage from './modules/menuPage';
import sliderServices from './modules/Sliders/sliderServices';
import slider from './modules/Sliders/slider';
import feedback from './modules/feedback';

document.addEventListener('DOMContentLoaded', function(){
    // Модальное окно городов во всех страницах 
    modalCity();

    // Гамбургер для меню во всех страницах
    hamburger();

    try{
        // Модальное окно для записи
        modal({
            modal: '.modal',
            btnOpen: '.record__list',
            btnClose: '.modal_close-entrance'
        })
    } catch{}

    try{
        // Переход страницу с оплатой
        entrance();
    } catch{};
    try{
        // Слайдер специалистов
        sliderSpecialists();
    } catch{}

    try{
        // Нижнее меню ссылок 
        menuPage({
            menuPage: '.menu-page',
            menuWrapperPage: '.menu-page__wrapper',
            menuBtnPage: '.menu-page__btn'
        });
    }catch{}

    try{
        // Слайдер отзывов
        slider({
            sliderArg: '.slider_reviews',
            constArg: '.slider__item',
            numArg: '.pages__item',
            sliderWrapperArg: '.slider__wrapper'
        }) 

        // Создание отзыва
        feedback();

        // Модальное окно для создания отзыва
        modal({
            modal: '.modal',
            btnOpen: '.office__feedback',
            btnClose: '.modal_close-entrance'
        })

        // Сладйер пройденных курсов
        sliderServices({
            sliderSer: '.slider_courses .slider__container',
            btnLeftSer: '.slider__btn-left',
            btnRightSer: '.slider__btn-right',
            sliderWrapperSer: '.slider__wrapper',
            sliderItemSer: '.slider__item'
        })
    } catch{}


    try{
        // Слайдер цен
        slider({
            sliderArg: '.price .slider',
            constArg: '.price__cost',
            numArg: '.price__list',
            sliderWrapperArg: '.slider__wrapper'
        });

        // Слайдер врачей
        sliderServices({
            sliderSer: '.services__info .slider',
            btnLeftSer: '.slider__btn-left',
            btnRightSer: '.slider__btn-right',
            sliderWrapperSer: '.slider__wrapper',
            sliderItemSer: '.slider__item'
        });

        // Слайдер направлений 
        sliderServices({
            sliderSer: '.services-all__wrapper .slider',
            btnLeftSer: '.services-all__wrapper .btn_left',
            btnRightSer: '.services-all__wrapper .btn_right',
            sliderWrapperSer: '.slider__wrapper',
            sliderItemSer: '.slider__item'
        });
    } catch{}

    try{
        // Слайдер Блога
        slider({
            sliderArg: '.blog__info .slider',
            constArg: '.slider__item',
            numArg: '.pages__item',
            sliderWrapperArg: '.slider__wrapper'
        });
    }catch{}

    try{
        // Динамическое создание напрпавлений
        direction();

        // Динамическое создание качеств
        choice();

        // Динамическое создание записи
        intro();
    } catch{}
});
