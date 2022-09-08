function sliderPrice(){
    const slider = document.querySelector('.price .slider'),
    priceCost = slider.querySelectorAll('.price__cost'),
    priceNum = document.querySelectorAll('.price__list'),
    sliderWrapper = slider.querySelector('.slider__wrapper');

    priceCost.forEach(el => el.style.width = slider.offsetWidth + 'px');

    function toggleNumberSlider(i){
        priceNum.forEach(el => el.classList.remove('active'));
        priceNum[i - 1].classList.add('active');
        priceNum[i + 3].classList.add('active');
    }

    toggleNumberSlider(1);

    sliderWrapper.style.width = priceCost.length * 100 + '%';

    priceNum.forEach(el => {
        el.addEventListener('click', function(e){
            const num = +e.target.innerText
            toggleNumberSlider(num);
            
            sliderWrapper.style.transform = `translateX(-${slider.offsetWidth * (num - 1)}px)`;
        });
    })
}

export default sliderPrice;