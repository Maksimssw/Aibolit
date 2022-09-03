import {closeModal, openModal} from './toggleModal';

function modal({modal, btnOpen, btnClose}){
    const modalWrapper = document.querySelector(modal),
    modalBtnOpen = document.querySelectorAll(btnOpen),
    modalBtnClose = document.querySelector(btnClose);

    modalBtnOpen.forEach(el => {
        el.addEventListener("click", function(){
            openModal(modalWrapper);
        });
    })

    modalBtnClose.addEventListener('click', function(){
        closeModal(modalWrapper);
    });
}

export default modal;