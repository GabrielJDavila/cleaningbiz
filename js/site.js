console.log("Yo whatup hammie");
console.log("Yo what it do shawty");
const menuIcon = document.querySelector('.material-symbols-outlined');
const dropDownMenu = document.querySelector('nav')
const scrollDownBtn = document.querySelector('.scroll-down')
const reviewSection = document.querySelector('.reviews-section')



//drop down menu for navigation on smaller screens
menuIcon.addEventListener('click', () => {
  dropDownMenu.classList.toggle('show');
  menuIcon.classList.add('hide');
});

//scroll down animation from hero button to review section
scrollDownBtn.addEventListener('click', () => {
  reviewSection.scrollIntoView({behavior: "smooth"});
});

//carousel function
document.querySelectorAll(".carousel").forEach(carousel => {
  const items = carousel.querySelectorAll(".carousel-item");
  const buttonsHtml = Array.from(items, () => {
    return `<button class="carousel-button"></button>`;
  });
//after creating buttons, insert them into html
  carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel-nav">
      ${buttonsHtml.join("")}
    </div>
  `);

  const buttons = carousel.querySelectorAll(".carousel-button");

  buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
      //unselect all the items
      items.forEach(item => item.classList.remove("carousel-item-selected"));
      buttons.forEach(button => button.classList.remove("carousel-button-selected"));

      items[i].classList.add("carousel-item-selected");
      button.classList.add("carousel-button-selected");
    });
  });

  items[0].classList.add("carousel-item-selected");
  button[0].classList.add("carousel-button-selected");
});
