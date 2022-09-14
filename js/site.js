console.log("Yo whatup hammie");
console.log("Yo what it do shawty");
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

//drop down menu for navigation on smaller screens
menuIcon.addEventListener('click', () => {
  dropDownMenu.classList.toggle('show');
  menuIcon.classList.add('hide');
});

//scroll down animation from hero button to review section
scrollDownBtn.addEventListener('click', () => {
  reviewSection.scrollIntoView({behavior: "smooth"});
});

//learn more button code to drop down description
// learnMoreBtn1.addEventListener('click', () => {
//   if (servDescrip1.classList.contains('hide')) {
//     servDescrip1.classList.remove('hide');
//   } else {
//     servDescrip1.classList.add('hide');
//   };
// });

// learnMoreBtn2.addEventListener('click', () => {
//   if (servDescrip2.classList.contains('hide')) {
//     servDescrip2.classList.remove('hide');
//   } else {
//     servDescrip2.classList.add('hide');
//   };
// });
//
// learnMoreBtn3.addEventListener('click', () => {
//   if (servDescrip3.classList.contains('hide')) {
//     servDescrip3.classList.remove('hide');
//   } else {
//     servDescrip3.classList.add('hide');
//   };
// });

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
  buttons[0].classList.add("carousel-button-selected");
});


// //review carousel
// const reviews = [
//   {
//     id: 1,
//     name: "Aurora Dentrix",
//     job: "Office Cleaning",
//     img: "./img/cleaning3.jpg",
//     text: "We have to look our best for our clients, and the office space needed a deep clean. We now use them monthly to save us the time and focus on our best work."
//   },
//   {
//     id: 2,
//     name: "Kelly Williams, Realtor",
//     job: "Move Out Cleaning",
//     img: "./img/cleaning4.jpg",
//     text: "They're the best! Helped me clean my units for showings."
//   },
//   {
//     id: 3,
//     name: "Edge Fitness",
//     job: "Gym Cleaning",
//     img: "./img/cleaning6.jpg",
//     text: "They are proffessionals and get the job done perfectly. We use them on a weekly basis for deep cleans of the facility."
//   }
// ]
//
// // select items
// const img = document.getElementById('person-img');
// const author = document.getElementById('author');
// const job = document.getElementById('service-reviewed');
// const info = document.getElementById('review-info');
//
// const prevBtn = document.querySelector('.prev-btn');
// const nxtBtn = document.querySelector('.next-btn');
// const randomBtn = document.querySelector('.random-btn');
// let currentItem = 0;
//
// //load initial items
// window.addEventListener("DOMContentLoaded", () => {
//   showReview()
// });
//
// // show review based on item
// function showReview() {
//   const item = reviews[currentItem];
//   img.background = item.img;
//   author.textContent = item.name;
//   job.textContent = item.job;
//   info.textContent = item.text;
// };
//
// // show next review
// nxtBtn.addEventListener('click', () => {
//   currentItem++;
//   if(currentItem > reviews.length - 1) {
//     currentItem = 0;
//   }
//   showReview();
// });
//
// prevBtn.addEventListener('click', () => {
//   currentItem--;
//   if(currentItem < 0) {
//     currentItem = reviews.length - 1;
//   }
//   showReview();
// });
//
// randomBtn.addEventListener('click', () => {
//   currentItem = Math.floor(Math.random() * reviews.length);
//   showReview();
// });
