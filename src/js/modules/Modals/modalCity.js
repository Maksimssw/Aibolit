import { closeModal } from "./toggleModal";
import { openModal } from "./toggleModal";

function modalCity(){
    const modal = document.querySelector('.modal-city');
    const modalClose = modal.querySelector('.modal__wrapper-close');
    const btnCity = document.querySelector('.header__city');
    const modalWrapper = document.querySelector(".modal-city__wrapper");

    btnCity.innerText = localStorage.getItem('city') === null ? 'Волгоград' : localStorage.getItem('city');

    modalClose.addEventListener('click', () => {
        closeModal(modal)
    });
    btnCity.addEventListener('click', () => {
        openModal(modal)
    });

    modalWrapper.addEventListener('click', function(e){
        if(e.target.classList.contains('city__link')){
            const cityText = e.target.textContent;
            localStorage.setItem('city', cityText);
            btnCity.innerText = `${cityText}`;

            closeModal(modal);
        }
    });
}   

export default modalCity;