// ---------- SELECT INITIAL ITEMS ---------- //
const menuIcon = document.querySelector('.material-symbols-outlined');
const dropDownMenu = document.querySelector('nav')
const scrollDownBtn = document.querySelector('.scroll-down')
const reviewSection = document.querySelector('.reviews-section')
const learnMoreBtn1 = document.querySelector('.sl-1');
const learnMoreBtn2 = document.querySelector('.sl-2');
const learnMoreBtn3 = document.querySelector('.sl-3');
const servDescrip1 = document.querySelector('.service-description-1');
const servDescrip2 = document.querySelector('.service-description-2');
const servDescrip3 = document.querySelector('.service-description-3');

// ----- DROP DOWN MENU FUNCTION ----- //
//drop down menu for navigation on smaller screens
menuIcon.addEventListener('click', () => {
  dropDownMenu.classList.toggle('show');
  menuIcon.classList.add('hide');
});

// ----- SCROLL DOWN FUNCTION ----- //
//scroll down animation from hero button to review section
scrollDownBtn.addEventListener('click', () => {
  reviewSection.scrollIntoView({behavior: "smooth"});
});

// -------- CAROUSEL FUNCTION-------- //

// select carousel items
const gallery = [
  {image: './img/gallery1.jpg'},
  {image: './img/gallery2.jpg'},
  {image: './img/gallery3.jpg'}
]

const img = document.getElementById('img');
const nxtBtn = document.getElementById('nxt-btn');
const prevBtn = document.getElementById('prev-btn');
let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showGalleryItem();
});

// show current item
function showGalleryItem() {
  const item = gallery[currentItem];
  img.src = item.image;
};

// show next item
nxtBtn.addEventListener('click', () => {
  currentItem++;
  if(currentItem > gallery.length -1) {
    currentItem = 0;
  }
  showGalleryItem();
});

prevBtn.addEventListener('click', () => {
  currentItem--;
  if(currentItem < 0) {
    currentItem = gallery.length - 1;
  };
  showGalleryItem();
});
