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
import sliderPrice from './modules/Sliders/sliderPrice';

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
            menuPage: '.services__wrapper .menu-page',
            menuWrapperPage: '.menu-page__wrapper',
            menuBtnPage: '.menu-page__btn'
        });

        // Слайдер цен
        sliderPrice();

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
        // Динамическое создание напрпавлений
        direction();

        // Динамическое создание качеств
        choice();

        // Динамическое создание записи
        intro();
    } catch{}
});
