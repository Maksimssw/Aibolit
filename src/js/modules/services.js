function services(){
    const menu = document.querySelector('.services__wrapper .menu'),
    menuWrapper = menu.querySelector('.menu__wrapper'),
    menuBtn = menu.querySelector('.menu__wrapper');

    function toggleClassMenu(){
        menuWrapper.classList.toggle('active');
    }

    menuBtn.addEventListener('click', toggleClassMenu);
}

export default services();