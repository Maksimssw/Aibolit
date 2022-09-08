function sliderServices({sliderSer, btnLeftSer, btnRightSer, sliderWrapperSer, sliderItemSer}){
    const slider = document.querySelector(sliderSer),
    btnLeft = document.querySelector(btnLeftSer),
    btnRight = document.querySelector(btnRightSer),
    sliderWrapper = slider.querySelector(sliderWrapperSer),
    sliderItem = slider.querySelectorAll(sliderItemSer);

    let scrollX = 0;

    function counting(px, i){
        sliderItem.forEach(el => {
            el.style.width = (slider.offsetWidth - px) / i + 'px';
        });
        console.log(sliderItem[0]);
        sliderWrapper.style.width = sliderItem[0].offsetWidth * sliderItem.length + 'px';
    }

    if(slider.offsetWidth == 1032){
        counting(40, 3)
    } else if(slider.offsetWidth == 1300){
        counting(75, 4);
    }

    function toggleBtn(){
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

    console.log(btnLeft)
    console.log(btnRight)

    btnRight.addEventListener('click', function(){
        if(scrollX >= slider.offsetWidth){
            scrollX = 0;
            toggleBtn();
        } else{
            scrollX += slider.offsetWidth;
            toggleBtn();
        }
        console.log(1);
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