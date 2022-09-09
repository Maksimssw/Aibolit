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

export default sliderServices;