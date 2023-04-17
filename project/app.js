const toggleBtn = document.querySelector(".navbar__toogleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

//! Don't Worry about this JavaScript Codes! Just copy and paste it! 
//? What this code is doing is that this will let the menu down on click! 