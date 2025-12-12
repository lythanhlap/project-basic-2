const mobileBtn = document.querySelector('.header__nav-mobile');
const mobileMenu = document.querySelector('.nav-mobile')

mobileBtn.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('is-open')
})