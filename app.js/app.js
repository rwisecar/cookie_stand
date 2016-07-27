'use strict';
//Worked with Britt, had help from Judy and Adrian on building the table. Updated following code review. Worked with Maelle on making the form input populate the correct row.

//Establishing array of store hours of operation
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 am', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

//establishing array into which I'll push each of my objects
var allLocations = [];

//establishing table to which data will be pushed
var cookieTable = document.getElementById('salesTable');



// Object Constructor function- create objects with the properties listed below
function StoreLocation(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust){
//Properties for the object constructor
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHourArray = [],
  this.cookiesEachHourArray = [];
  this.totalDailyCookieSales = 0;
  //push the result to the allLocations array
  allLocations.push(this);
  //Methods
  //Calculate customers each hour using a random number generator and a for loop, then push that input to the custEachHourArray.
  this.calcCustEachHour = function(){
    for (var i = 0; i < hours.length; i++) {
      var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custEachHourArray.push(singleHourCust);
    }
  };
  //Calculate number of cookies sold each hour using previous function output, and use the output to populate cookiesEachHourArray. Then add each singleHourCookies to find daily total for each location.
  this.calcCookiesEachHour = function(){
    this.calcCustEachHour();
    for (var i = 0; i < hours.length; i++) {
      var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
      this.cookiesEachHourArray.push(singleHourCookies);
      this.totalDailyCookieSales += singleHourCookies;
    }
  };
  //run the function
  this.calcCookiesEachHour();


// Create each row of the table using a render function
  this.render = function(){
    //create a new row for each store Name, create a new cell in that row, populate it with the name of each location, and append the cells to the table row.
    var cookieTableRow = document.createElement('tr');
    var locationTableCell = document.createElement('td');
    locationTableCell.textContent = this.locationName;
    cookieTableRow.appendChild(locationTableCell);
    //run a for loop to create a new cell for each hour that will show the number of cookies made per hour per location, to populate the data portion of the table
    for (var i = 0; i < this.cookiesEachHourArray.length; i++){
      var cookieTableCell = document.createElement('td');
      cookieTableCell.textContent = this.cookiesEachHourArray[i];
      cookieTableRow.appendChild(cookieTableCell);
    }
    //create another cell that will hold the total cookies sold per location, fill with content, and append.
    var totalCookieElement = document.createElement('td');
    totalCookieElement.textContent = this.totalDailyCookieSales;
    cookieTableRow.appendChild(totalCookieElement);
    cookieTable.appendChild(cookieTableRow);
  };
};

//Object Instances / Array Elements- creating a new object for each store location, and running the render function on each object

var firstAndPike = new StoreLocation('First and Pike',23,65,6.3);
var seaTacAir = new StoreLocation('SeaTac Airport',34,24,1.2);
var seaCenter = new StoreLocation('Seattle Center',11,38,3.7);
var capHill = new StoreLocation('Capitol Hill',20,38,2.3);
var alkiBeach = new StoreLocation('Alki',2,16,4.6);


//Creating a header row by creating a row, creating a cell, adding content (hours of operation, populated with a for loop), and appending cell to row, and row to table.
function makeHeader(){
  var cookieHeader = document.createElement('thead');
  var cookieHeaderRow = document.createElement('tr');
  var headerElement = document.createElement('th');
  headerElement.textContent = 'Store Locations';
  cookieHeaderRow.appendChild(headerElement);
  for (var i = 0; i < hours.length; i++){
    var cookieHourHeader = document.createElement('th');
    cookieHourHeader.textContent = hours[i];
    cookieHeaderRow.appendChild(cookieHourHeader);
  }
  //create a header cell to display total cookies for the day
  var totalHeaderElement = document.createElement('th');
  totalHeaderElement.textContent = 'Total Cookies';
  cookieHeaderRow.appendChild(totalHeaderElement);
  cookieHeader.appendChild(cookieHeaderRow);
  cookieTable.appendChild(cookieHeader);
};

function renderAll(){
  for (var i = 0; i < allLocations.length; i++){
    allLocations[i].render();
  };
};

function workIt(){
  cookieTable.innerHTML = '';
};

//A footer, based on Adrian and Lee's code, and with Adrian and Britt's help, made following code review, that calculates the total cookies sold per hour.
function makeFooter(){
  var cookieFooter = document.createElement('tr');
  var cookieFooterTitle = document.createElement('td');
  cookieFooterTitle.textContent = 'Total Cookies Per Hour';
  cookieFooter.appendChild(cookieFooterTitle);
  var combinedTotal = 0;
  for (var i = 0; i < hours.length; i++){
    var hourlyTotal = 0;
    for (var j = 0; j < allLocations.length; j++) {
      hourlyTotal = hourlyTotal + allLocations[j].cookiesEachHourArray[i];
      combinedTotal += allLocations[j].cookiesEachHourArray[i];
      console.log(combinedTotal);
    }
    var cookieFooterCell = document.createElement('td');
    cookieFooterCell.textContent = hourlyTotal;
    cookieFooter.appendChild(cookieFooterCell);
  }
  var cookieFooterTotalCell = document.createElement('td');
  cookieFooterTotalCell.textContent = combinedTotal;
  cookieFooter.appendChild(cookieFooterTotalCell);
  cookieTable.appendChild(cookieFooter);
};

// run the function
makeHeader();
renderAll();
makeFooter();

//event handler

var inputForm = document.getElementById('inputForm');
var submitButton = document.getElementById('submitButton');

function createNewObject(event) {
  event.preventDefault();

  var newName = event.target.newName.value;
  var newMin = event.target.newMin.value;
  var newMax = event.target.newMax.value;
  var newCookies = event.target.newCookies.value;
  console.log(newName, newMin, newMax, newCookies);

  //basic data validation so that blank fields cannot be submitted
  if (!event.target.newName.value || !event.target.newMin.value || !event.target.newMax.value || !event.target.newCookies.value) {
    return alert('Blank fields dummy! Fill em in.');
  };

  //Clears input fields after submit pressed
  event.target.newName.value = null;
  event.target.newMin.value = null;
  event.target.newMax.value = null;
  event.target.newCookies.value = null;

  var newObject = new StoreLocation(newName, newMin, newMax, newCookies);
  console.log(newObject);
  //clear table before loading new content
  workIt();
  //fill table with new content
  makeHeader();
  //render new row
  renderAll();
  //add footer element
  makeFooter();
};

inputForm.addEventListener('submit', createNewObject);
