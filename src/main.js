'use strict';

// Apply Dark Styling to the Header on Scroll Down

const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Gradually Make the Home Section Transparent on Scroll Down
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    home.style.opacity = 0.9 - window.scrollY / homeHeight; 
});

// Make the Arrow Up Button Transparent on Scroll Down
const arrowUp = document.querySelector('.arrow-up'); 
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 0.9;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// Right side "NavBar Toggle button" click
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Automatically Close the NavBar Menu When a Menu Item is Clicked

navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});
