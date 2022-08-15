console.log("helloooo");
const estimateBtn = document.querySelector('.estimate-btn');
const squareFt = document.getElementById('squareft');
const submitBtn = document.querySelector('.submit-btn');
const cost = document.querySelector('.cost');
const menuIcon = document.querySelector('.material-symbols-outlined');
const dropDownMenu = document.querySelector('nav')

//drop down menu for navigation on smaller screens
menuIcon.addEventListener('click', () => {
  dropDownMenu.classList.toggle('show');
  menuIcon.classList.add('hide');
});

//js for booking page calculation animation
estimateBtn.addEventListener('click', () => {
  console.log('hiiiiiii buddy');
  let squareFtValue = squareFt.value * .20;
  cost.textContent = squareFtValue;
})

submitBtn.addEventListener('click', () => {
  console.log("hiiii");
});
