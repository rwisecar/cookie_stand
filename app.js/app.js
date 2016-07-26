'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 am', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

var allLocations = [];

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
  allLocations.push(this);
};

//Object Instances / Array Elements

var firstAndPike = new StoreLocation('First and Pike',23,65,6.3);
var seaTacAir = new StoreLocation('SeaTac Airport',34,24,1.2);
var seaCenter = new StoreLocation('Seattle Center',11,38,3.7);
var capHill = new StoreLocation('Capitol Hill',20,38,2.3);
var alkiBeach = new StoreLocation('Alki',2,16,4.6);

//Table

var cookieTable = document.getElementById('salesTable');

//Header Row
function makeHeader() {
  var cookieHeaderRow = document.createElement('tr');
  var headerElement = document.createElement('th');
  headerElement.textContent = 'Store Locations';
  cookieHeaderRow.appendChild(headerElement);
  for (var i = 0; i < hours.length; i++){
    var cookieHourHeader = document.createElement('th');
    cookieHourHeader.textContent = hours[i];
    cookieHeaderRow.appendChild(cookieHourHeader);
  };
  var totalHeaderElement = document.createElement('th');
  totalHeaderElement.textContent = 'Total Cookies';
  cookieHeaderRow.appendChild(totalHeaderElement);
  cookieTable.appendChild(cookieHeaderRow);
}

makeHeader();

//Location Name Rows
function makeCookieRow(){
  for (var i = 0; i < allLocations.length; i++){
    var cookieTableRow = document.createElement('tr');
    var cookieRowElement = document.createElement('td');
    cookieRowElement.textContent = allLocations[i].locationName;
    cookieTableRow.appendChild(cookieRowElement);
    cookieTable.appendChild(cookieTableRow);
    for (var j = 0; j < hours.length; j++){
      var cookiePerHourElement = document.createElement('td');
      cookiePerHourElement.textContent = allLocations[i].cookiesEachHourArray[j];
      cookieTableRow.appendChild(cookiePerHourElement);
      cookieTable.appendChild(cookieTableRow);
    };
    var totalCookieElement = document.createElement('td');
    totalCookieElement.textContent = allLocations[i].totalDailyCookieSales;
    cookieTableRow.appendChild(totalCookieElement);
    cookieTable.appendChild(cookieTableRow);
  };
}

makeCookieRow();
