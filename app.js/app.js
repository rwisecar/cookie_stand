//testing
'use strict';

var hours = ['6:00 a.m.', '7:00 a.m.', '8:00 a.m.', '9:00 a.m.', '10:00 a.m', '11:00 a.m.', '12:00 p.m.', '1:00 p.m.', '2:00 p.m.', '3:00 p.m.', '4:00 p.m', '5:00 p.m.', '6:00 p.m.', '7:00 p.m.'];

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
  for(var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour -
    this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  };
};

firstAndPike.calcCookiesEachHour = function(){
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  };
};

firstAndPike.calcCookiesEachHour();

//OLD VERSION
//   avgCookies: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var singleHourCookies = (Math.floor((Math.floor((Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers)) * this.cookiePerSale));
//       this.cookiesPerHourArray.push(singleHourCookies);
//       this.totalDailyCookieSales += singleHourCookies;
//     };
//   },
// };
// firstAndPike.avgCookies(firstAndPike.minCustomers, firstAndPike.maxCustomers);

//SeaTac


var SeaTac = {

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

SeaTac.calcCustEachHour = function() {
  for(var i = 0; i < hours.length; i++){
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  };
};

SeaTac.calcCookiesEachHour = function(){
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookieSales += singleHourCookies;
  };
};

SeaTac.calcCookiesEachHour();

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
