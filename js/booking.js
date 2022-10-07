console.log("helloooo");
const menuIcon = document.querySelector('.material-symbols-outlined');
const dropDownMenu = document.querySelector('nav')
const residentialBtn = document.getElementById('residential');
const moveBtn = document.getElementById('movein-moveout');
const residentialDiv = document.querySelector('.residential-cleaning');
const moveDiv = document.querySelector('.move-cleaning');
const submitBtn = document.querySelector('.submit-btn');
const partyBtn = document.getElementById('party-clean');
const partyDiv = document.querySelector('.party-cleaning');

//drop down menu for navigation on smaller screens
menuIcon.addEventListener('click', () => {
  dropDownMenu.classList.toggle('show');
  menuIcon.classList.add('hide');
});

//functions for showing residential fill-in info
residentialBtn.addEventListener('click', () => {
  residentialDiv.classList.remove('hide');
  moveDiv.classList.add('hide');
  partyDiv.classList.add('hide');

  const resEstimateBtn = document.querySelector('.res-estimate-btn');
  resEstimateBtn.addEventListener('click', () => {
    const bdHomeSize = document.querySelectorAll('.bdhome-size');
    const resBath = document.querySelectorAll('.bath');
    const jobFreq = document.querySelectorAll('.job-freq');
    const resCost = document.querySelector('.res-cost');
    const hrRate = 90;

    if (bdHomeSize[0].selected && resBath[0].selected && jobFreq[0].checked
    || bdHomeSize[0].selected && resBath[1].selected && jobFreq[0].checked) {
      let resPriceEst = 80;
      resCost.textContent = resPriceEst;
    } else if (bdHomeSize[0].selected && resBath[0].selected && jobFreq[1].checked
      || bdHomeSize[0].selected && resBath[1].selected && jobFreq[1].checked) {
        let resPriceEst = 105;
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[0].selected && resBath[0].selected && jobFreq[2].checked
      || bdHomeSize[0].selected && resBath[1].selected && jobFreq[2].checked) {
        let resPriceEst = 160;
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[0].selected && resBath[0].selected && jobFreq[3].checked
      || bdHomeSize[0].selected && resBath[1].selected && jobFreq[3].checked) {
        let resPriceEst = 200;
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[1].selected && resBath[0].selected && jobFreq[0].checked
      || bdHomeSize[1].selected && resBath[1].selected && jobFreq[0].checked) {
        let resPriceEst = Math.floor(60 * 1.5);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[1].selected && resBath[0].selected && jobFreq[1].checked
      || bdHomeSize[1].selected && resBath[1].selected && jobFreq[1].checked) {
        let resPriceEst = Math.floor(70 * 2);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[1].selected && resBath[0].selected && jobFreq[2].checked
      || bdHomeSize[1].selected && resBath[1].selected && jobFreq[2].checked) {
        let resPriceEst = Math.floor(80 * 2.5);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[1].selected && resBath[0].selected && jobFreq[3].checked
      || bdHomeSize[1].selected && resBath[1].selected && jobFreq[3].checked) {
        let resPriceEst = Math.floor(90 * 3);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[2].selected && resBath[0].selected && jobFreq[0].checked
      || bdHomeSize[2].selected && resBath[1].selected && jobFreq[0].checked) {
        let resPriceEst = Math.floor(60 * 2);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[2].selected && resBath[0].selected && jobFreq[1].checked
      || bdHomeSize[2].selected && resBath[1].selected && jobFreq[1].checked) {
        let resPriceEst = Math.floor(70 * 2.5);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[2].selected && resBath[0].selected && jobFreq[2].checked
      || bdHomeSize[2].selected && resBath[1].selected && jobFreq[2].checked) {
        let resPriceEst = Math.floor(80 * 3);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[2].selected && resBath[0].selected && jobFreq[3].checked
      || bdHomeSize[2].selected && resBath[1].selected && jobFreq[3].checked) {
        let resPriceEst = Math.floor(90 * 4);
        resCost.textContent = resPriceEst;

    } else if (bdHomeSize[3].selected && resBath[0].selected && jobFreq[0].checked
      || bdHomeSize[3].selected && resBath[1].selected && jobFreq[0].checked) {
        let resPriceEst = Math.floor(60 * 2.5);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[3].selected && resBath[0].selected && jobFreq[1].checked
      || bdHomeSize[3].selected && resBath[1].selected && jobFreq[1].checked) {
        let resPriceEst = Math.floor(70 * 3);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[3].selected && resBath[0].selected && jobFreq[2].checked
      || bdHomeSize[3].selected && resBath[1].selected && jobFreq[2].checked) {
        let resPriceEst = Math.floor(80 * 3.75);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[3].selected && resBath[0].selected && jobFreq[3].checked
      || bdHomeSize[3].selected && resBath[1].selected && jobFreq[3].checked) {
        let resPriceEst = Math.floor(90 * 4.5);
        resCost.textContent = resPriceEst;

    } else if (bdHomeSize[4].selected && resBath[0].selected && jobFreq[0].checked
      || bdHomeSize[4].selected && resBath[1].selected && jobFreq[0].checked) {
        let resPriceEst = Math.floor(60 * 3);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[4].selected && resBath[0].selected && jobFreq[1].checked
      || bdHomeSize[4].selected && resBath[1].selected && jobFreq[1].checked) {
        let resPriceEst = Math.floor(70 * 3.5);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[4].selected && resBath[0].selected && jobFreq[2].checked
      || bdHomeSize[4].selected && resBath[1].selected && jobFreq[2].checked) {
        let resPriceEst = Math.floor(80 * 4);
        resCost.textContent = resPriceEst;
    } else if (bdHomeSize[4].selected && resBath[0].selected && jobFreq[3].checked
      || bdHomeSize[4].selected && resBath[1].selected && jobFreq[3].checked) {
        let resPriceEst = Math.floor(90 * 5);
        resCost.textContent = resPriceEst;

    // } else if (bdHomeSize[5].selected && resBath[0].selected && jobFreq[0].checked
    //   || bdHomeSize[5].selected && resBath[1].selected && jobFreq[0].checked) {
    //     let resPriceEst = Math.floor(60 * );
    //     resCost.textContent = resPriceEst;
    // } else if (bdHomeSize[5].selected && resBath[0].selected && jobFreq[1].checked
    //   || bdHomeSize[5].selected && resBath[1].selected && jobFreq[1].checked) {
    //     let resPriceEst = Math.floor(70 * 6.5);
    //     resCost.textContent = resPriceEst;
    // } else if (bdHomeSize[5].selected && resBath[0].selected && jobFreq[2].checked
    //   || bdHomeSize[5].selected && resBath[1].selected && jobFreq[2].checked) {
    //     let resPriceEst = Math.floor(80 * 6.5);
    //     resCost.textContent = resPriceEst;
    // } else if (bdHomeSize[5].selected && resBath[0].selected && jobFreq[3].checked
    //   || bdHomeSize[5].selected && resBath[1].selected && jobFreq[3].checked) {
    //     let resPriceEst = Math.floor(90 * 6.5);
    //     resCost.textContent = resPriceEst;
    };
  });
});

moveBtn.addEventListener('click', () => {
  moveDiv.classList.remove('hide');
  residentialDiv.classList.add('hide');
  partyDiv.classList.add('hide');

  const moveEstimateBtn = document.querySelector('.move-estimate-btn');
  moveEstimateBtn.addEventListener('click', () => {
    const mbdHomeSize = document.querySelectorAll('.move-bdhome-size');
    const mBath = document.querySelectorAll('.move-bath');
    const mjobFreq = document.querySelectorAll('.move-job-freq');
    const mCost = document.querySelector('.move-cost');
    const mhrRate = 90;

    if (mbdHomeSize[0].selected && mBath[0].selected && mjobFreq[0].checked
    || mbdHomeSize[0].selected && mBath[1].selected && mjobFreq[0].checked) {
      let mPriceEst = 80;
      mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[0].selected && mBath[0].selected && mjobFreq[1].checked
      || mbdHomeSize[0].selected && mBath[1].selected && mjobFreq[1].checked) {
        let mPriceEst = 105;
        mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[0].selected && mBath[0].selected && mjobFreq[2].checked
      || mbdHomeSize[0].selected && mBath[1].selected && mjobFreq[2].checked) {
        let mPriceEst = 160;
        mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[0].selected && mBath[0].selected && mjobFreq[3].checked
      || mbdHomeSize[0].selected && mBath[1].selected && mjobFreq[3].checked) {
        let mPriceEst = 200;
        mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[1].selected && mBath[0].selected && mjobFreq[0].checked
      || mbdHomeSize[1].selected && mBath[1].selected && mjobFreq[0].checked) {
        let mPriceEst = Math.floor(60 * 1.5);
        mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[1].selected && mBath[0].selected && mjobFreq[1].checked
      || mbdHomeSize[1].selected && mBath[1].selected && mjobFreq[1].checked) {
        let mPriceEst = Math.floor(70 * 2);
        mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[1].selected && mBath[0].selected && mjobFreq[2].checked
      || mbdHomeSize[1].selected && mBath[1].selected && mjobFreq[2].checked) {
        let mPriceEst = Math.floor(80 * 2.5);
        mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[1].selected && mBath[0].selected && mjobFreq[3].checked
      || mbdHomeSize[1].selected && mBath[1].selected && mjobFreq[3].checked) {
        let mPriceEst = Math.floor(90 * 3);
        mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[2].selected && mBath[0].selected && mjobFreq[0].checked
      || mbdHomeSize[2].selected && mBath[1].selected && mjobFreq[0].checked) {
        let mPriceEst = Math.floor(60 * 2);
        mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[2].selected && mBath[0].selected && mjobFreq[1].checked
      || mbdHomeSize[2].selected && mBath[1].selected && mjobFreq[1].checked) {
        let mPriceEst = Math.floor(70 * 2.5);
        mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[2].selected && mBath[0].selected && mjobFreq[2].checked
      || mbdHomeSize[2].selected && mBath[1].selected && mjobFreq[2].checked) {
        let mPriceEst = Math.floor(80 * 3);
        mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[2].selected && mBath[0].selected && mjobFreq[3].checked
      || mbdHomeSize[2].selected && mBath[1].selected && mjobFreq[3].checked) {
        let mPriceEst = Math.floor(90 * 4);
        mCost.textContent = mPriceEst;

    } else if (mbdHomeSize[3].selected && mBath[0].selected && mjobFreq[0].checked
      || mbdHomeSize[3].selected && mBath[1].selected && mjobFreq[0].checked) {
        let mPriceEst = Math.floor(60 * 2.5);
        mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[3].selected && mBath[0].selected && mjobFreq[1].checked
      || mbdHomeSize[3].selected && mBath[1].selected && mjobFreq[1].checked) {
        let mPriceEst = Math.floor(70 * 3);
        mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[3].selected && mBath[0].selected && mjobFreq[2].checked
      || mbdHomeSize[3].selected && mBath[1].selected && mjobFreq[2].checked) {
        let mPriceEst = Math.floor(80 * 3.75);
        mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[3].selected && mBath[0].selected && mjobFreq[3].checked
      || mbdHomeSize[3].selected && mBath[1].selected && mjobFreq[3].checked) {
        let mPriceEst = Math.floor(90 * 4.5);
        mCost.textContent = mPriceEst;

    } else if (mbdHomeSize[4].selected && mBath[0].selected && mjobFreq[0].checked
      || mbdHomeSize[4].selected && mBath[1].selected && mjobFreq[0].checked) {
        let mPriceEst = Math.floor(60 * 3);
        mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[4].selected && mBath[0].selected && mjobFreq[1].checked
      || mbdHomeSize[4].selected && mBath[1].selected && mjobFreq[1].checked) {
        let mPriceEst = Math.floor(70 * 3.5);
        mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[4].selected && mBath[0].selected && mjobFreq[2].checked
      || mbdHomeSize[4].selected && mBath[1].selected && mjobFreq[2].checked) {
        let mPriceEst = Math.floor(80 * 4);
        mCost.textContent = mPriceEst;
    } else if (mbdHomeSize[4].selected && mBath[0].selected && mjobFreq[3].checked
      || mbdHomeSize[4].selected && mBath[1].selected && mjobFreq[3].checked) {
        let mPriceEst = Math.floor(90 * 5);
        mCost.textContent = mPriceEst;

    // } else if (mbdHomeSize[5].selected && mBath[0].selected && mjobFreq[0].checked
    //   || mbdHomeSize[5].selected && mBath[1].selected && mjobFreq[0].checked) {
    //     let mPriceEst = Math.floor(60 * 6.5);
    //     mCost.textContent = mPriceEst;
    // } else if (mbdHomeSize[5].selected && mBath[0].selected && mjobFreq[1].checked
    //   || mbdHomeSize[5].selected && mBath[1].selected && mjobFreq[1].checked) {
    //     let mPriceEst = Math.floor(70 * 6.5);
    //     mCost.textContent = mPriceEst;
    // } else if (mbdHomeSize[5].selected && mBath[0].selected && mjobFreq[2].checked
    //   || mbdHomeSize[5].selected && mBath[1].selected && mjobFreq[2].checked) {
    //     let mPriceEst = Math.floor(80 * 6.5);
    //     mCost.textContent = mPriceEst;
    // } else if (mbdHomeSize[5].selected && mBath[0].selected && mjobFreq[3].checked
    //   || mbdHomeSize[5].selected && mBath[1].selected && mjobFreq[3].checked) {
    //     let mPriceEst = Math.floor(90 * 6.5);
    //     mCost.textContent = mPriceEst;
    };
  });
});

partyBtn.addEventListener('click', () => {
  partyDiv.classList.remove('hide');
  moveDiv.classList.add('hide');
  residentialDiv.classList.add('hide');
  const priceDesrip = document.querySelector('.party-price-description');
  priceDesrip.textContent = "* For after party cleaning rates, please contact us for more info.";
});
