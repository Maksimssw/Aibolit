import modalCity from './modules/Modals/modalCity';
import intro from './modules/intro';
import hamburger from './modules/hamburger'
import direction from './modules/direction';
import sliderSpecialists from './modules/Sliders/sliderSpecialists';
import choice from './modules/choice';
import modal from './modules/Modals/modal';
import entrance from './modules/entrance';
import sliderServices from './modules/Sliders/sliderServices';

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
        sliderServices();
    } catch{}
    try{
        direction();
    } catch{}
    try{
        choice();
    } catch{}
});
