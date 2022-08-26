console.log("helloooo");
const menuIcon = document.querySelector('.material-symbols-outlined');
const dropDownMenu = document.querySelector('nav')
const residentialBtn = document.getElementById('residential');
const commercialBtn = document.getElementById('commercial');
const residentialDiv = document.querySelector('.residential-cleaning');
const commercialDiv = document.querySelector('.commercial-cleaning');
const submitBtn = document.querySelector('.submit-btn');

//drop down menu for navigation on smaller screens
menuIcon.addEventListener('click', () => {
  dropDownMenu.classList.toggle('show');
  menuIcon.classList.add('hide');
});

//functions for showing residential fill-in info
residentialBtn.addEventListener('click', () => {
  residentialDiv.classList.remove('hide');
  commercialDiv.classList.add('hide');
});


//function for showing commercial fill-in info
commercialBtn.addEventListener('click', () => {
  commercialDiv.classList.remove('hide');
  residentialDiv.classList.add('hide');
  //js for booking page calculation animation
  const comEstimateBtn = document.querySelector('.com-estimate-btn');
  comEstimateBtn.addEventListener('click', () => {
    const squareFt = document.getElementById('squareft');
    const comCost = document.querySelector('.com-cost');
    let squareFtValue = squareFt.value * .20;
    comCost.textContent = squareFtValue;
  })

  submitBtn.addEventListener('click', () => {
    console.log("hiiii");
  });
});
