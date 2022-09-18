import {closeModal, openModal} from './Modals/toggleModal';

function feedback(){
    const feedback = document.querySelector('.modal__text'),
    messageError = document.querySelector('.modal__error'),
    modalReviews = document.querySelector('.modal_reviews'),
    modalConsideration = document.querySelector('.modal_consideration'),
    modalBtn = document.querySelector('.modal__btn'),
    modalClose = document.querySelectorAll('.modal_close');

    // Обработка события получения данных
    feedback.addEventListener('input', function(e){
        let feedbackValue = e.target.value;

        // Если в поле есть текст, то удаляется сообщение
        // об ошибке ,а так же кнопка становится активной.
        if(feedbackValue){
            messageError.classList.remove('active');

            modalBtn.classList.add('active');
        }
        // В случае если текста нетy:  
        // Показывается текст об ошибке.
        // Кнопка становится не активной.
        else{
            messageError.classList.add('active');
            modalBtn.classList.remove('active');
        }
    });

    // Обработка события с кнопкой "Отправить"
    modalBtn.addEventListener('click', function(e){
        e.preventDefault();

        // В случае если кнопка активна:
        if(modalBtn.classList.contains('active')){
            // Закрытие модального окна с создание отзыва.
            closeModal(modalReviews);

            // Очистка поля ввода.
            feedback.value = '';

            messageError.classList.add('active');
            modalBtn.classList.remove('active');

            // Открытие модального окна с рассмотрением отзыва.
            openModal(modalConsideration);
        }
    })

    // Все кнопки закрытия модального окна
    modalClose.forEach(el => {
        // При нажатий закрытие модального окна
        el.addEventListener('click', function(){
            closeModal(modalConsideration);
        });
    })
}

export default feedback;