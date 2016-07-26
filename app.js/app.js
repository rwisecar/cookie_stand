'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 am', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

//First and Pike SAMPLE LITERAL NOTATION

// var firstAndPike = {
//
//   //STANDARD PROPERTIES
//   locationName: 'First and Pike',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiesPerCust: 6.3,
//   custEachHourArray: [],
//   cookiesEachHourArray: [], //Holds cookies per hour
//   totalDailyCookieSales: 0, //Holds sum of cookies sold per hour
// };


// Object Constructor
function StoreLocation(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust){

//Properties
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHourArray = [],
  this.cookiesEachHourArray = [];
  this.totalDailyCookieSales = 0;

  //Methods
  //Calculate customers each hour using a random number generator
  this.calcCustEachHour = function(){
    for (var i = 0; i < hours.length; i++) {
      var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custEachHourArray.push(singleHourCust);
    }
  };

  //Calculate number of cookies sold each hour using previous function output
  this.calcCookiesEachHour = function(){
    this.calcCustEachHour();
    for (var i = 0; i < hours.length; i++) {
      var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
      this.cookiesEachHourArray.push(singleHourCookies);
      this.totalDailyCookieSales += singleHourCookies;
    }
  };
  this.calcCookiesEachHour();
};

//Object Instances / Array Elements

var firstAndPike = new StoreLocation('First and Pike',23,65,6.3);
var seaTacAir = new StoreLocation('SeaTac Airport',34,24,1.2);
var seaCenter = new StoreLocation('Seattle Center',11,38,3.7);
var capHill = new StoreLocation('Capitol Hill',20,38,2.3);
var alkiBeach = new StoreLocation('Alki',2,16,4.6);

// //Render Sample from Previous Iterations
//
// firstAndPike.render = function() {
//   var pikeList = document.getElementById('pikeId');
//   for (var i = 0; i < hours.length; i++){
//     var listElement = document.createElement('li');
//     listElement.textContent = hours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
//     pikeList.appendChild(listElement);
//   }
//   var totalElement = document.createElement('li');
//   totalElement.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
//   pikeList.appendChild(totalElement);
// };
//
// firstAndPike.render();
