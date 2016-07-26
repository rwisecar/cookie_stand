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
  };
}

makeCookieRow();




//     function makeAllRows() {
//       for (var cat = 0; cat < allCats.length; cat++){
//         var tableRow = document.createElement('tr'); // creates a tr element
//         var tdElement = document.createElement('td'); //creates a td element
//         tdElement.textContent = allCats[cat].name; //fill tdElement with content
//         tableRow.appendChild(tdElement); //add the tdElement to the tr element
//         tdElement = document.createElement('td');
//         tdElement.textContent = allCats[cat].color;
//         tableRow.appendChild(tdElement);
//         tdElement = document.createElement('td');
//         tdElement.textContent = allCats[cat].tail;
//         tableRow.appendChild(tdElement);
//         catTable.appendChild(tableRow);
//       };
//     }
//   }
// }


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
