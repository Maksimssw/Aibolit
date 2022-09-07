function sliderServices(){
    const slider = document.querySelector('.services__info .slider'),
    btnLeft = slider.querySelector('.slider__btn-left'),
    btnRight = slider.querySelector('.slider__btn-right'),
    sliderWrapper = slider.querySelector('.slider__wrapper'),
    sliderItem = slider.querySelectorAll('.slider__item');

    let scrollX = 0;

    console.log(btnLeft);

    if(slider.offsetWidth == 1032){
        sliderItem.forEach(el => {
            el.style.width = (slider.offsetWidth - 40) / 3 + 'px';
        });
        sliderWrapper.style.width = sliderItem[0].offsetWidth * sliderItem.length + 'px';
    }

    function toggleBtn(){
        console.log(scrollX);
        if(scrollX >= slider.offsetWidth){
            btnRight.classList.add('hidden');
            btnLeft.classList.remove('hidden');
        } else{
            btnLeft.classList.add('hidden');
            btnLeft.classList.remove('hidden');
        }
        
        if(scrollX === 0){
            btnLeft.classList.add('hidden');
            btnRight.classList.remove('hidden');
        }
    }

    btnRight.addEventListener('click', function(){
        if(scrollX >= slider.offsetWidth){
            scrollX = 0;
            toggleBtn();
        } else{
            scrollX += slider.offsetWidth;
            toggleBtn();
        }
        
        sliderWrapper.style.transform = `translateX(-${scrollX}px)`;
    });

    btnLeft.addEventListener('click', function(){
        if(scrollX === 0){
            scrollX = slider.offsetWidth
            toggleBtn();
        } else{
            scrollX -= slider.offsetWidth;
            toggleBtn();
        }
        
        sliderWrapper.style.transform = `translateX(-${scrollX}px)`;
    });
}

export default sliderServices;