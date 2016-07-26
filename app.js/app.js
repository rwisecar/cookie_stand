//testing
'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 am', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

//First and Pike

var firstAndPike = {

  //STANDARD PROPERTIES
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custEachHourArray: [],
  cookiesEachHourArray: [], //Holds cookies per hour
  totalDailyCookieSales: 0, //Holds sum of cookies sold per hour
};
  //METHODS

firstAndPike.calcCustEachHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour -
    this.minCustPerHour + 1) + this.minCustPerHour);
    this.custEachHourArray.push(singleHourCust);
  }
  // console.log(this.custEachHourArray);
};

// firstAndPike.calcCustEachHour();

firstAndPike.calcCookiesEachHour = function() {
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  }
  // console.log(this.totalDailyCookieSales);
};

firstAndPike.calcCookiesEachHour();

//Render

firstAndPike.render = function() {
  var pikeList = document.getElementById('pikeId');
  for (var i = 0; i < hours.length; i++){
    var listElement = document.createElement('li');
    listElement.textContent = hours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    pikeList.appendChild(listElement);
  }
  var totalElement = document.createElement('li');
  totalElement.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
  pikeList.appendChild(totalElement);
};

firstAndPike.render();

//SeaTac

var seaTacAir = {

//STANDARD PROPERTIES

  locationName: 'SeaTac Airport',
  minCustPerHour: 34,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custEachHourArray: [],
  cookiesEachHourArray: [], //Holds cookies per hour
  totalDailyCookieSales: 0, //Holds sum of cookies sold per hour
};

//METHODS

seaTacAir.calcCustEachHour = function() {
  for(var i = 0; i < hours.length; i++){
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  };
};

seaTacAir.calcCookiesEachHour = function(){
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  };
};

seaTacAir.calcCookiesEachHour();

// Render

seaTacAir.render = function() {
  var seaTacList = document.getElementById('seatacId');
  for (var i = 0; i < hours.length; i++){
    var listElementOne = document.createElement('li');
    listElementOne.textContent = hours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    seaTacList.appendChild(listElementOne);
  }
  var totalElementOne = document.createElement('li');
  totalElementOne.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
  seaTacList.appendChild(totalElementOne);
};

seaTacAir.render();

//Seattle Center

var seattleCenter = {

//STANDARD PROPERTIES

  locationName: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custEachHourArray: [],
  cookiesEachHourArray: [], //Holds cookies per hour
  totalDailyCookieSales: 0, //Holds sum of cookies sold per hour
};

//METHODS

seattleCenter.calcCustEachHour = function() {
  for(var i = 0; i < hours.length; i++){
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  };
};

seattleCenter.calcCookiesEachHour = function(){
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  };
};

seattleCenter.calcCookiesEachHour();

// Render

seattleCenter.render = function() {
  var centerList = document.getElementById('centerId');
  for (var i = 0; i < hours.length; i++){
    var listElementTwo = document.createElement('li');
    listElementTwo.textContent = hours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    centerList.appendChild(listElementTwo);
  }
  var totalElementTwo = document.createElement('li');
  totalElementTwo.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
  centerList.appendChild(totalElementTwo);
};

seattleCenter.render();

//Capitol Hill

var capHill = {

//STANDARD PROPERTIES

  locationName: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  custEachHourArray: [],
  cookiesEachHourArray: [], //Holds cookies per hour
  totalDailyCookieSales: 0, //Holds sum of cookies sold per hour
};

//METHODS

capHill.calcCustEachHour = function() {
  for(var i = 0; i < hours.length; i++){
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  };
};

capHill.calcCookiesEachHour = function(){
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  };
};

capHill.calcCookiesEachHour();

capHill.render = function() {
  var hillList = document.getElementById('caphillId');
  for (var i = 0; i < hours.length; i++){
    var listElementThree = document.createElement('li');
    listElementThree.textContent = hours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    hillList.appendChild(listElementThree);
  }
  var totalElementThree = document.createElement('li');
  totalElementThree.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
  hillList.appendChild(totalElementThree);
};

capHill.render();

//Alki

var alkiBeach = {

//STANDARD PROPERTIES

  locationName: 'Alki',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  custEachHourArray: [],
  cookiesEachHourArray: [], //Holds cookies per hour
  totalDailyCookieSales: 0, //Holds sum of cookies sold per hour
};

//METHODS

alkiBeach.calcCustEachHour = function() {
  for(var i = 0; i < hours.length; i++){
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  };
};

alkiBeach.calcCookiesEachHour = function(){
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  };
};

alkiBeach.calcCookiesEachHour();

//Render


alkiBeach.render = function() {
  var alkiList = document.getElementById('alkiId');
  for (var i = 0; i < hours.length; i++){
    var listElementFour = document.createElement('li');
    listElementFour.textContent = hours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    alkiList.appendChild(listElementFour);
  }
  var totalElementFour = document.createElement('li');
  totalElementFour.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
  alkiList.appendChild(totalElementFour);
};

alkiBeach.render();
