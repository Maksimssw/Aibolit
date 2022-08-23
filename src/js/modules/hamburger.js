function hamburger(){
    const hamburger = document.querySelector('.hamburger');
    const menuWrapper = document.querySelector('.menu-wrapper');

    
    menuWrapper.appendChild(document.querySelector('.menu').cloneNode(1));

    function toggle(){
        hamburger.classList.toggle('active');
        menuWrapper.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggle);
}

export default hamburger;