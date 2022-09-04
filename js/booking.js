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

  const resEstimateBtn = document.querySelector('.res-estimate-btn');
  resEstimateBtn.addEventListener('click', () => {
    const bdHomeSize = document.querySelectorAll('.bdhome-size');
    const resBath = document.querySelectorAll('.bath');
    const jobFreq = document.querySelectorAll('.job-freq');
    const resCost = document.querySelector('.res-cost');
    const hrRate = 90;

    if (bdHomeSize[0].selected && resBath[0].selected && jobFreq[0].checked
    || bdHomeSize[0].selected && resBath[1].selected && jobFreq[0].checked) {
      let resPriceEst = Math.floor((90 * 1.5) * .8);
      resCost.textContent = resPriceEst;
    } else if (bdHomeSize[0].selected && resBath[0].selected && jobFreq[1].checked
      || bdHomeSize[0].selected && resBath[1].selected && jobFreq[1].checked) {
        let resPriceEst = Math.floor((90 * 1.5) * .85);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[0].selected && resBath[0].selected && jobFreq[2].checked
      || bdHomeSize[0].selected && resBath[1].selected && jobFreq[2].checked) {
        let resPriceEst = Math.floor((90 * 1.5) * .9);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[0].selected && resBath[0].selected && jobFreq[3].checked
      || bdHomeSize[0].selected && resBath[1].selected && jobFreq[3].checked) {
        let resPriceEst = Math.floor(90 * 1.5);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[1].selected && resBath[0].selected && jobFreq[0].checked
      || bdHomeSize[1].selected && resBath[1].selected && jobFreq[0].checked) {
        let resPriceEst = Math.floor((90 * 2.5) * .8);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[1].selected && resBath[0].selected && jobFreq[1].checked
      || bdHomeSize[1].selected && resBath[1].selected && jobFreq[1].checked) {
        let resPriceEst = Math.floor((90 * 2.5) * .85);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[1].selected && resBath[0].selected && jobFreq[2].checked
      || bdHomeSize[1].selected && resBath[1].selected && jobFreq[2].checked) {
        let resPriceEst = Math.floor((90 * 2.5) * .9);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[1].selected && resBath[0].selected && jobFreq[3].checked
      || bdHomeSize[1].selected && resBath[1].selected && jobFreq[3].checked) {
        let resPriceEst = Math.floor(90 * 2.5);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[2].selected && resBath[0].selected && jobFreq[0].checked
      || bdHomeSize[2].selected && resBath[1].selected && jobFreq[0].checked) {
        let resPriceEst = Math.floor((90 * 3.5) * .8);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[2].selected && resBath[0].selected && jobFreq[1].checked
      || bdHomeSize[2].selected && resBath[1].selected && jobFreq[1].checked) {
        let resPriceEst = Math.floor((90 * 3.5) * .85);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[2].selected && resBath[0].selected && jobFreq[2].checked
      || bdHomeSize[2].selected && resBath[1].selected && jobFreq[2].checked) {
        let resPriceEst = Math.floor((90 * 3.5) * .9);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[2].selected && resBath[0].selected && jobFreq[3].checked
      || bdHomeSize[2].selected && resBath[1].selected && jobFreq[3].checked) {
        let resPriceEst = Math.floor(90 * 3.5);
        resCost.textContent = resPriceEst;

    } else if (bdHomeSize[3].selected && resBath[0].selected && jobFreq[0].checked
      || bdHomeSize[3].selected && resBath[1].selected && jobFreq[0].checked) {
        let resPriceEst = Math.floor((90 * 4.5) * .8);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[3].selected && resBath[0].selected && jobFreq[1].checked
      || bdHomeSize[3].selected && resBath[1].selected && jobFreq[1].checked) {
        let resPriceEst = Math.floor((90 * 4.5) * .85);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[3].selected && resBath[0].selected && jobFreq[2].checked
      || bdHomeSize[3].selected && resBath[1].selected && jobFreq[2].checked) {
        let resPriceEst = Math.floor((90 * 4.5) * .9);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[3].selected && resBath[0].selected && jobFreq[3].checked
      || bdHomeSize[3].selected && resBath[1].selected && jobFreq[3].checked) {
        let resPriceEst = Math.floor(90 * 4.5);
        resCost.textContent = resPriceEst;

    } else if (bdHomeSize[4].selected && resBath[0].selected && jobFreq[0].checked
      || bdHomeSize[4].selected && resBath[1].selected && jobFreq[0].checked) {
        let resPriceEst = Math.floor((90 * 5.5) * .8);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[4].selected && resBath[0].selected && jobFreq[1].checked
      || bdHomeSize[4].selected && resBath[1].selected && jobFreq[1].checked) {
        let resPriceEst = Math.floor((90 * 5.5) * .85);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[4].selected && resBath[0].selected && jobFreq[2].checked
      || bdHomeSize[4].selected && resBath[1].selected && jobFreq[2].checked) {
        let resPriceEst = Math.floor((90 * 5.5) * .9);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[4].selected && resBath[0].selected && jobFreq[3].checked
      || bdHomeSize[4].selected && resBath[1].selected && jobFreq[3].checked) {
        let resPriceEst = Math.floor(90 * 5.5);
        resCost.textContent = resPriceEst;

    } else if (bdHomeSize[5].selected && resBath[0].selected && jobFreq[0].checked
      || bdHomeSize[5].selected && resBath[1].selected && jobFreq[0].checked) {
        let resPriceEst = Math.floor((90 * 6.5) * .8);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[5].selected && resBath[0].selected && jobFreq[1].checked
      || bdHomeSize[5].selected && resBath[1].selected && jobFreq[1].checked) {
        let resPriceEst = Math.floor((90 * 6.5) * .85);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[5].selected && resBath[0].selected && jobFreq[2].checked
      || bdHomeSize[5].selected && resBath[1].selected && jobFreq[2].checked) {
        let resPriceEst = Math.floor((90 * 6.5) * .9);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[5].selected && resBath[0].selected && jobFreq[3].checked
      || bdHomeSize[5].selected && resBath[1].selected && jobFreq[3].checked) {
        let resPriceEst = Math.floor(90 * 6.5);
        resCost.textContent = resPriceEst;
    }
    // const bdHomeSize = document.querySelectorAll('.bdhome-size');
    // const resBed = document.querySelectorAll('.bd');
    // const resBath = document.querySelectorAll('.bath');
    // const resApp = document.querySelectorAll('.res-app');
    // const resExtras = document.querySelectorAll('.res-extra');
    // const jobFreq = document.querySelectorAll('.job-freq');
    // const homeSizePrice = [100, 120, 150, 180, 210, 240];
    // const bdrmPrice = [30, 60, 90, 120, 150];
    // const bthPrice = [25, 50, 75];
    // const appPrice = [20, 10];
    // const extPrice = [15, 10];
    // const jobFreqPrice = [.65, .80, .90];
    // const resCost = document.querySelector('.res-cost');
    //
    //
    // if (bdHomeSize[0].selected && resBed[0].selected && resBath[0].selected && resApp[0].checked &&resApp[1].checked
    // && resApp[2].checked && resExtras[0].checked && resExtras[1].checked && resExtras[2].checked && resExtras[3].checked && jobFreq[0].checked) {
    //
    //   let resPriceEst = Math.floor((homeSizePrice[0] + bthPrice[0] + (appPrice[0] * 2) + appPrice[1] + (extPrice[0] * 3) + extPrice[1]) * jobFreqPrice[0]);
    //   resCost.textContent = resPriceEst;
    //
    // } else if (bdHomeSize[0].selected && resBed[0].selected && resBath[0].selected && resApp[0].checked && resApp[1].checked
    //   && resApp[2].checked && resExtras[0].checked && resExtras[1].checked && resExtras[2].checked && resExtras[3].checked && jobFreq[1].checked) {
    //
    //     let resPriceEst = Math.floor((homeSizePrice[0] + bthPrice[0] + (appPrice[0] * 2) + appPrice[1] + (extPrice[0] * 3) + extPrice[1]) * jobFreqPrice[1]);
    //     resCost.textContent = resPriceEst;
    //
    // } else if (bdHomeSize[0].selected && resBed[0].selected && resBath[0].selected && resApp[0].checked && resApp[1].checked
    //   && resApp[2].checked && resExtras[0].checked && resExtras[1].checked && resExtras[2].checked && resExtras[3].checked && jobFreq[2].checked) {
    //
    //     let resPriceEst = Math.floor((homeSizePrice[0] + bthPrice[0] + (appPrice[0] * 2) + appPrice[1] + (extPrice[0] * 3) + extPrice[1]) * jobFreqPrice[2]);
    //     resCost.textContent = resPriceEst;
    // }
  });
});


// //function for showing commercial fill-in info
// moveBtn.addEventListener('click', () => {
//   moveDiv.classList.remove('hide');
//   residentialDiv.classList.add('hide');
//   //js for booking page calculation animation
//   const moveEstimateBtn = document.querySelector('.move-estimate-btn');
//   moveEstimateBtn.addEventListener('click', () => {
//     const genClean = document.querySelector('.gen-clean');
//     const deepClean = document.querySelector('.deep-clean');
//     const squareFt = document.getElementById('squareft');
//     const moveCost = document.querySelector('.move-cost');
//     const moveExtras1 = document.querySelector('.extras1');
//     const moveExtras2 = document.querySelector('.extras2');
//     const moveExtras3 = document.querySelector('.extras3');
//     const wk = document.querySelector('.weekly');
//     const bwk = document.querySelector('.bi-weekly');
//     const mon = document.querySelector('.monthly');
//     const ot = document.querySelector('.one-time-clean');
//
//     if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked && wk.checked) {
//       let squareFtValue = Math.floor((squareFt.value * .20) + 45) * .65;
//       moveCost.textContent = squareFtValue;
//     } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked == false && wk.checked || deepClean.selected == true && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked && wk.checked || deepClean.selected == true && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked && wk.checked) {
//         let squareFtValue = Math.floor((squareFt.value * .20) + 30) * .65;
//         moveCost.textContent = squareFtValue;
//     } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked == false && wk.checked || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked == false && wk.checked || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked == false && moveExtras3.checked && wk.checked) {
//         let squareFtValue = Math.floor((squareFt.value * .20) + 15) * .65;
//         moveCost.textContent = squareFtValue;
//     } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked && bwk.checked) {
//         let squareFtValue = Math.floor((squareFt.value * .20) + 45) * .80;
//         moveCost.textContent = squareFtValue;
//     } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked == false && bwk.checked || deepClean.selected == true && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked && bwk.checked || deepClean.selected == true && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked && bwk.checked) {
//         let squareFtValue = Math.floor((squareFt.value * .20) + 30) * .80;
//         moveCost.textContent = squareFtValue;
//     } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked == false && bwk.checked || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked == false && bwk.checked || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked == false && moveExtras3.checked && bwk.checked) {
//         let squareFtValue = Math.floor((squareFt.value * .20) + 15) * .80;
//         moveCost.textContent = squareFtValue;
//     } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked && mon.checked) {
//         let squareFtValue = Math.floor((squareFt.value * .20) + 45) * .90;
//         moveCost.textContent = squareFtValue;
//     } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked == false && mon.checked || deepClean.selected == true && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked && mon.checked || deepClean.selected == true && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked && mon.checked) {
//         let squareFtValue = Math.floor((squareFt.value * .20) + 30) * .90;
//         moveCost.textContent = squareFtValue;
//     } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked == false && mon.checked || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked == false && mon.checked || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked == false && moveExtras3.checked && mon.checked) {
//         let squareFtValue = Math.floor((squareFt.value * .20) + 15) * .90;
//         moveCost.textContent = squareFtValue;
//     } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked && ot.checked) {
//         let squareFtValue = Math.floor((squareFt.value * .20) + 45);
//         moveCost.textContent = squareFtValue;
//     } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked && moveExtras3.checked == false && ot.checked || deepClean.selected == true && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked && ot.checked || deepClean.selected == true && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked && ot.checked) {
//         let squareFtValue = Math.floor((squareFt.value * .20) + 30);
//         moveCost.textContent = squareFtValue;
//     } else if (deepClean.selected && moveExtras1.checked && moveExtras2.checked == false && moveExtras3.checked == false && ot.checked || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked && moveExtras3.checked == false && ot.checked || deepClean.selected && moveExtras1.checked == false && moveExtras2.checked == false && moveExtras3.checked && ot.checked) {
//         let squareFtValue = Math.floor((squareFt.value * .20) + 15);
//         moveCost.textContent = squareFtValue;
//     } else if (wk.checked) {
//         let squareFtValue = Math.floor((squareFt.value * .20) * .65);
//         moveCost.textContent = squareFtValue;
//     } else if (bwk.checked) {
//         let squareFtValue = Math.floor((squareFt.value * .20) * .80);
//         moveCost.textContent = squareFtValue;
//     } else if (mon.checked) {
//         let squareFtValue = Math.floor((squareFt.value * .20) * .90);
//         moveCost.textContent = squareFtValue;
//     } else if (ot.checked) {
//         let squareFtValue = Math.floor((squareFt.value * .20));
//         moveCost.textContent = squareFtValue;
//     };
//
//   });
// });
