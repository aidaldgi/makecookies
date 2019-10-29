/********************************COOKIE clicker********************************/

//defaults
let cookieCount = 0;
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;


//DOM decleration
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');


//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
 cookieClicker.addEventListener("click", function() {
 cookieCount = cookieCount + clickPower;
 cookieCounter.innerHTML = cookieCount
 refreshCookieCount()
})

//Buy click power (event)
buyClickPower.addEventListener("click", function() {
  if (cookieCount >= clickPowerPriceAmount) {
    console.log("Item succesfully Bought");
  } else {
    console.log("You don't have enough cookies!");
  }
})

//refresh cookies
  let refreshCookieCount = function() {
    cookieCounter.innerHTML = cookieCount;
  }

  if (cookieCount >= clickPowerPriceAmount) {
 //subtract cookies from the price of the item
 cookieCount -= clickPowerPriceAmount;
 //update cookie counter.
 cookieCounter.innerHTML = cookieCount;
 refreshCookieCount()
}

//Upgrade power level
  clickPowerLevelNumber += 1;

//Update click price
  clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);

//update Click Power
clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);

  let refreshPowerClick = function() {
    clickPowerLevel.innterHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
  }

//refresh shop item
  refreshPowerClick();

  /********************************Grandmas********************************/

  //set default values
  let grandmaPower = 50;
  let grandmaPriceAmount = 500;
  let grandmaLevelNumber = 0;
  let grandmaAuto = false;


  //declare DOM variables
  let buyGrandma = document.getElementById('buy-grandma');
  let grandmaPrice = document.getElementById('grandma-price');
  let grandmaLevel = document.getElementById('grandma-level');
  let grandmaMultiple = document.getElementById('grandma-multiple');

  //buy a grandma
  buyGrandma.addEventListener("click", function() {

    let refreshGrandma = function() {
      grandmaLevel.innerHTML = grandmaLevelNumber
      grandmaPrice.innerHTML = grandmaPriceAmount;
      grandmaMultiple.innerHTML = grandmaPower - 10;
    }

  //make sure we have enough cookies and subtract our cookies from the price
  if (cookieCount >= grandmaPriceAmount) {
    // Subtract cookies from the price of the item.
    cookieCount +=  - grandmaPriceAmount;
    refreshCookieCount()

  //upgrade power level
  grandmaLevelNumber += 1;

  //update price
  grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);

  //update grandma power
  grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);

  //turn autoGrandma on!
  autoGrandma = true
  autoGrandmaStart();

  let autoGrandmaStart = function() {
  let grandmaInt = window.setInterval(function(){
    cookieCount += grandmaPower;
    refreshCookieCount();
  }, 1000);
}

  //refresh shop item
  refreshGrandma();

}
})

/********************************Facilities********************************/

//set default values
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;


//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

//buy a facility
buyFacility.addEventListener("click", function() {
    //set autoLoop to false
    facilityAuto = false;

    //make sure we have enough cookies
    if (cookieCount >= facilityPriceAmount) {
      cookieCount -= facilityPriceAmount;
      refreshCookieCount()

    //upgrade power level
    facilityLevelNumber += 1;

    //update price
    facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);

    //update facility power
    facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);;

    //turn autoFacility on!
    facilityAuto = true
    autoFacilityStart();

    //refresh shop item
    refreshFacility();

  }
})

//game loop
let autoFacilityStart = function() {
    let facilityInt = window.setInterval(function(){
      cookieCount += facilityPower;
      refreshCookieCount();
    }, 1000);
}
//refresh shop
let refreshFacility = function() {
  facilityLevel.innerHTML = facilityLevelNumber
  facilityPrice.innerHTML = facilityPriceAmount;
  facilityMultiple.innerHTML = facilityPower - 600;
}
