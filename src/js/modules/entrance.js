import {closeModal} from './Modals/toggleModal'

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
            closeModal(modal);
            tel.value = '';
        }
    });

}

export default entrance;