function menuPage({menuPage, menuWrapperPage, menuBtnPage}){
    const menu = document.querySelector(menuPage),
    menuWrapper = menu.querySelector(menuWrapperPage),
    menuBtn = menu.querySelector(menuBtnPage);

    function toggleClassMenu(){
        menuBtn.style.transform = 'rotate(90deg)';
        menuWrapper.classList.toggle('active');
    }

    menuBtn.addEventListener('click', function(){
        if(menuWrapper.classList.contains('active')){
            menuBtn.style.transform = 'rotate(-90deg)';
            menuWrapper.classList.remove('active');
        } else{
            toggleClassMenu();
        }
    });
}

export default menuPage;