function slider({sliderArg, constArg, numArg, sliderWrapperArg}){
    const slider = document.querySelector(sliderArg),
    cost = slider.querySelectorAll(constArg),
    num = document.querySelectorAll(numArg),
    sliderWrapper = slider.querySelector(sliderWrapperArg);

    cost.forEach(el => el.style.width = slider.offsetWidth + 'px');

    function toggleNumberSlider(i){
        num.forEach(el => el.classList.remove('active'));
        num[i - 1].classList.add('active');
        num[i + 3].classList.add('active');
    };

    toggleNumberSlider(1);

    sliderWrapper.style.width = cost.length * 100 + '%';

    num.forEach(el => {
        el.addEventListener('click', function(e){
            const num = +e.target.innerText
            toggleNumberSlider(num);
            
            sliderWrapper.style.transform = `translateX(-${slider.offsetWidth * (num - 1)}px)`;
        });
    })
}

export default slider;