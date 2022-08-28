console.log("helloooo");
const menuIcon = document.querySelector('.material-symbols-outlined');
const dropDownMenu = document.querySelector('nav')
const residentialBtn = document.getElementById('residential');
const moveBtn = document.getElementById('movein-moveout');
const residentialDiv = document.querySelector('.residential-cleaning');
const moveDiv = document.querySelector('.move-cleaning');
const submitBtn = document.querySelector('.submit-btn');

//drop down menu for navigation on smaller screens
menuIcon.addEventListener('click', () => {
  dropDownMenu.classList.toggle('show');
  menuIcon.classList.add('hide');
});

//functions for showing residential fill-in info
residentialBtn.addEventListener('click', () => {
  residentialDiv.classList.remove('hide');
  moveDiv.classList.add('hide');
});


//function for showing commercial fill-in info
moveBtn.addEventListener('click', () => {
  moveDiv.classList.remove('hide');
  residentialDiv.classList.add('hide');
  //js for booking page calculation animation
  const moveEstimateBtn = document.querySelector('.move-estimate-btn');
  moveEstimateBtn.addEventListener('click', () => {
    const genClean = document.querySelector('.gen-clean');
    const deepClean = document.querySelector('.deep-clean');
    const squareFt = document.getElementById('squareft');
    const moveCost = document.querySelector('.move-cost');
    const moveExtras1 = document.querySelector('.extras1');
    const moveExtras2 = document.querySelector('.extras2');
    const moveExtras3 = document.querySelector('.extras3');
    const wkClean = document.querySelector('.weekly');
    const bwkClean = document.getElementById('bi-weekly');
    const mClean = document.getElementById('monthly');

    if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked && wkClean.checked) {
      let squareFtValue = Math.floor((squareFt.value * .20) + 45);
      moveCost.textContent = squareFtValue;
      alert("This works!");
    } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked == false || deepClean.selected == true && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked || deepClean.selected == true && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20) + 30);
        moveCost.textContent = squareFtValue;
    } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked == false || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked == false || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked == false && moveExtras3.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20) + 15);
        moveCost.textContent = squareFtValue;
    };

  });

  submitBtn.addEventListener('click', () => {
    console.log("hiiii");
  });
});
