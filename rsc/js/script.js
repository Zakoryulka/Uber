window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.main-menu'),
    menuItem = document.querySelectorAll('.main-menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger--active');
        menu.classList.toggle('main-menu--active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger--active');
            menu.classList.toggle('main-menu--active');
        })
    })
})