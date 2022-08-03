console.log("Yo whatup hammie");
console.log("Yo what it do shawty");
const menuIcon = document.querySelector('.material-symbols-outlined');
const dropDownMenu = document.querySelector('nav')
const scrollDownBtn = document.querySelector('.scroll-down')
const reviewSection = document.querySelector('.review-section')


menuIcon.addEventListener('click', () => {
  dropDownMenu.classList.toggle('show');
})

scrollDownBtn.addEventListener('click', () => {
  reviewSection.scrollIntoView({behavior: "smooth"});
})
