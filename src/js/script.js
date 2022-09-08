import modalCity from './modules/Modals/modalCity';
import intro from './modules/intro';
import hamburger from './modules/hamburger'
import direction from './modules/direction';
import sliderSpecialists from './modules/Sliders/sliderSpecialists';
import choice from './modules/choice';
import modal from './modules/Modals/modal';
import entrance from './modules/entrance';
import sliderServices from './modules/Sliders/sliderServices';
import sliderPrice from './modules/Sliders/sliderPrice';

document.addEventListener('DOMContentLoaded', function(){
    modalCity();
    try{
        modal({
            modal: '.modal',
            btnOpen: '.record__list',
            btnClose: '.modal_close-entrance'
        })
    } catch{}
    try{
        entrance();
    } catch{};
    try{
        intro();
    } catch{}
    try{
        sliderSpecialists();
    } catch{}
    hamburger();
    try{
        sliderServices({
            sliderSer: '.services__info .slider',
            btnLeftSer: '.slider__btn-left',
            btnRightSer: '.slider__btn-right',
            sliderWrapperSer: '.slider__wrapper',
            sliderItemSer: '.slider__item'
        });
    } catch{}
    sliderServices({
        sliderSer: '.services-all__wrapper .slider',
        btnLeftSer: '.services-all__wrapper .btn_left',
        btnRightSer: '.services-all__wrapper .btn_right',
        sliderWrapperSer: '.slider__wrapper',
        sliderItemSer: '.slider__item'
    });
    try{
        sliderPrice();
    } catch{}
    try{
        direction();
    } catch{}
    try{
        choice();
    } catch{}
});
