
const menuBurger = document.querySelector('.menu-burger');
const headerNavWrapper = document.querySelector('.header__nav-wrapper');

menuBurger.addEventListener('click',()=>{

    if (menuBurger.classList.contains('active')){ 
        menuBurger.classList.remove('active');
        headerNavWrapper.classList.remove('active');
    }

    else{
        menuBurger.classList.add('active');
        headerNavWrapper.classList.add('active');
    }
});