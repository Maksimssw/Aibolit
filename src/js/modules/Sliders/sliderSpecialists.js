function sliderSpecialists(item){
    const slider = document.querySelector('.specialists__slider'),
    left = document.querySelector('.specialists__btn-left'),
    right = document.querySelector('.specialists__btn-right'),
    sliderWrapper = document.querySelector('.specialists__slider-wrapper'),
    container = document.querySelector('.container'),
    sliderItem = slider.querySelectorAll('.specialists__slider-item');

    let scrollX = 0;
    let widthItem;

    let numberMultiplication;
    let margins;

    if(container.offsetWidth > 1288){
        numberMultiplication = 3;
        sliderItem.forEach(el => {
            widthItem = slider.offsetWidth / 6
            el.style.width = Math.trunc(widthItem) + 'px';
        });
        margins = 15 * sliderItem.length - 1;
        sliderWrapper.style.width = Math.trunc(widthItem) * sliderItem.length + 'px';
    } else if(container.offsetWidth <= 1288 && container.offsetWidth >= 687){
        numberMultiplication = 3;
        sliderItem.forEach(el => {
            widthItem = slider.offsetWidth / 3
            el.style.width = Math.trunc(widthItem) + 'px';

        });
        margins = 15 * sliderItem.length - 1;
        sliderWrapper.style.width = Math.trunc(widthItem) * sliderItem.length + 'px';
    } else {
        numberMultiplication = 1.5;
        sliderItem.forEach(el => {
            widthItem = slider.offsetWidth / 1
            el.style.width = Math.trunc(widthItem) + 'px';

        });
        margins = sliderItem.length - 1;
        sliderWrapper.style.width = Math.trunc(widthItem) * sliderItem.length + 'px';
    }

    right.addEventListener('click', function(){
        if(scrollX * numberMultiplication < sliderWrapper.offsetWidth){
            scrollX += Math.trunc(widthItem);
        }else{
            scrollX = 0;
        }

        console.log(scrollX);

        sliderWrapper.style.transform = `translateX(-${scrollX}px)`;
    });

    left.addEventListener('click', function(){
        if(scrollX === 0){
            scrollX = sliderWrapper.offsetWidth / numberMultiplication;
        }else{
            scrollX -= Math.trunc(widthItem);
        }
        
        console.log(scrollX);

        sliderWrapper.style.transform = `translateX(-${scrollX}px)`;
    });
}

export default sliderSpecialists;