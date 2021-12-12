const buttonMenu = document.querySelector('.buttonMenu');
const nav = document.querySelector('.nav');
const responsiveContent = document.querySelector('.responsive-content');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const navLink1 = document.querySelector('.nav-link1');
const navLink2 = document.querySelector('.nav-link2');
const navLink3 = document.querySelector('.nav-link3');
const navLink4 = document.querySelector('.nav-link4');
const carré = document.querySelector('.carré');


buttonMenu.addEventListener("click", function(){
    console.log('click');

    responsiveContent.classList.toggle('nav-activate');
    nav.classList.toggle('nav-activate__nav');
    h1.classList.toggle('nav-activate__h1-2');
    h2.classList.toggle('nav-activate__h1-2');
    navLink1.classList.toggle('nav-link__activate1');
    navLink2.classList.toggle('nav-link__activate2');
    navLink3.classList.toggle('nav-link__activate3');
    navLink4.classList.toggle('nav-link__activate4');
    carré.classList.toggle('carré__activate');

})