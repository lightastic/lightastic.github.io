// mobile menu
const burgerItem = document.querySelector('#burger')
const navbarMenu = document.querySelector('#nav-links')

burgerItem.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
})