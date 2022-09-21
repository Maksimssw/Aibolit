function smoothScrolling(){

    // Получение всех ссылок 
    const anchors = document.querySelectorAll('a[href*="#"]');

    // Прогоняем каждый элемент по 1
    for(let anchor of anchors){
        // Для каждой ссылке добавляем обработчик события 
        anchor.addEventListener('click', function(e){
            // Отмена стандартного поведения 
            e.preventDefault();

            // Получение значения атрибута 
            const blockId = anchor.getAttribute('href');

            document.querySelector('' + blockId).scrollIntoView({
                behavior: "smooth",
                block: 'start'
            })
        });
    }
}

export default smoothScrolling;