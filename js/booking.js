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
    const wk = document.querySelector('.weekly');
    const bwk = document.querySelector('.bi-weekly');
    const mon = document.querySelector('.monthly');
    const ot = document.querySelector('.one-time-clean');

    if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked && wk.checked) {
      let squareFtValue = Math.floor((squareFt.value * .20) + 45) * .65;
      moveCost.textContent = squareFtValue;
    } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked == false && wk.checked || deepClean.selected == true && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked && wk.checked || deepClean.selected == true && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked && wk.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20) + 30) * .65;
        moveCost.textContent = squareFtValue;
    } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked == false && wk.checked || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked == false && wk.checked || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked == false && moveExtras3.checked && wk.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20) + 15) * .65;
        moveCost.textContent = squareFtValue;
    } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked && bwk.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20) + 45) * .80;
        moveCost.textContent = squareFtValue;
    } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked == false && bwk.checked || deepClean.selected == true && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked && bwk.checked || deepClean.selected == true && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked && bwk.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20) + 30) * .80;
        moveCost.textContent = squareFtValue;
    } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked == false && bwk.checked || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked == false && bwk.checked || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked == false && moveExtras3.checked && bwk.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20) + 15) * .80;
        moveCost.textContent = squareFtValue;
    } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked && mon.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20) + 45) * .90;
        moveCost.textContent = squareFtValue;
    } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked == false && mon.checked || deepClean.selected == true && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked && mon.checked || deepClean.selected == true && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked && mon.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20) + 30) * .90;
        moveCost.textContent = squareFtValue;
    } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked == false && mon.checked || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked == false && mon.checked || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked == false && moveExtras3.checked && mon.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20) + 15) * .90;
        moveCost.textContent = squareFtValue;
    } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked && ot.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20) + 45);
        moveCost.textContent = squareFtValue;
    } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked == false && ot.checked || deepClean.selected == true && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked && ot.checked || deepClean.selected == true && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked && ot.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20) + 30);
        moveCost.textContent = squareFtValue;
    } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked == false && ot.checked || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked == false && ot.checked || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked == false && moveExtras3.checked && ot.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20) + 15);
        moveCost.textContent = squareFtValue;
    } else if (wk.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20) * .65);
        moveCost.textContent = squareFtValue;
    } else if (bwk.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20) * .80);
        moveCost.textContent = squareFtValue;
    } else if (mon.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20) * .90);
        moveCost.textContent = squareFtValue;
    } else if (ot.checked) {
        let squareFtValue = Math.floor((squareFt.value * .20));
        moveCost.textContent = squareFtValue;
    };

  });

  submitBtn.addEventListener('click', () => {
    console.log("hiiii");
  });
});
