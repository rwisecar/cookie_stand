'use strict';
//Worked with Britt, had help from Judy

//Establishing array of store hours of operation
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 am', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

//establishing array into which I'll push each of my objects
var allLocations = [];

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

  //Methods
  //Calculate customers each hour using a random number generator
  this.calcCustEachHour = function(){
    //for loop to cycle through each hour the store is open, and for that hour, produce a random number between the minimum and maximum customers per hour for each store location.
    for (var i = 0; i < hours.length; i++) {
      var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      //Push that input to the custEachHourArray.
      this.custEachHourArray.push(singleHourCust);
    }
  };

  //Calculate number of cookies sold each hour using previous function output
  this.calcCookiesEachHour = function(){
    this.calcCustEachHour();
    //Use another for loop to use the random numbers created in the previous function, and multiply it by the average cookies per customer for each location to get average cookies per hour
    for (var i = 0; i < hours.length; i++) {
      var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
      //push result to an array
      this.cookiesEachHourArray.push(singleHourCookies);
      //add each singlieHourCookies to find daily total for each location
      this.totalDailyCookieSales += singleHourCookies;
    }
  };
  //run the function
  this.calcCookiesEachHour();
  //push the result to the allLocations array
  allLocations.push(this);

// Create each row of the table using a render function
  this.render = function(){
    //find the html element we want to attach the rows to
    var cookieTable = document.getElementById('salesTable');
    //create a new row for each store Name
    var cookieTableRow = document.createElement('tr');
    //create a new cell in that row
    var locationTableCell = document.createElement('td');
    //populate that cell with the name of each location
    locationTableCell.textContent = this.locationName;
    //append that cell to the table row
    cookieTableRow.appendChild(locationTableCell);
    //run a for loop to create a new cell for each hour that will show the number of cookies made per hour per location
    for (var i = 0; i < this.cookiesEachHourArray.length; i++){
      //create table cell
      var cookieTableCell = document.createElement('td');
      //fill with content
      cookieTableCell.textContent = this.cookiesEachHourArray[i];
      //append to the table row
      cookieTableRow.appendChild(cookieTableCell);
    }
    //create another cell that will hold the total cookies sold per location
    var totalCookieElement = document.createElement('td');
    //fill with content- totalDailyCookieSales for each location
    totalCookieElement.textContent = this.totalDailyCookieSales;
    //append the table cell to the table row
    cookieTableRow.appendChild(totalCookieElement);
    //append the table row to the table
    cookieTable.appendChild(cookieTableRow);
  };

};

//Object Instances / Array Elements- creating a new object for each store location, and running the render function on each object

var firstAndPike = new StoreLocation('First and Pike',23,65,6.3);
firstAndPike.render();
var seaTacAir = new StoreLocation('SeaTac Airport',34,24,1.2);
seaTacAir.render();
var seaCenter = new StoreLocation('Seattle Center',11,38,3.7);
seaCenter.render();
var capHill = new StoreLocation('Capitol Hill',20,38,2.3);
capHill.render();
var alkiBeach = new StoreLocation('Alki',2,16,4.6);
alkiBeach.render();

//Creating a header row
function makeHeader(){
  //find the table we want to append this to
  var cookieTable = document.getElementById('salesTable');
  //create a thead element
  var cookieHeader = document.createElement('thead');
  //create a table row element
  var cookieHeaderRow = document.createElement('tr');
  //create a th cell
  var headerElement = document.createElement('th');
  //populate that cell with the phrase 'Store Locations'
  headerElement.textContent = 'Store Locations';
  //append it to the header row
  cookieHeaderRow.appendChild(headerElement);
  //run a for loop to create a new th cell for each hour that the stores remain open
  for (var i = 0; i < hours.length; i++){
    var cookieHourHeader = document.createElement('th');
    cookieHourHeader.textContent = hours[i];
    //append to the header row
    cookieHeaderRow.appendChild(cookieHourHeader);
  }
  //create a header cell to display total cookies for the day
  var totalHeaderElement = document.createElement('th');
  //fill that cell with content
  totalHeaderElement.textContent = 'Total Cookies';
  //append the cell to the header row
  cookieHeaderRow.appendChild(totalHeaderElement);
  //append the row to the thead element
  cookieHeader.appendChild(cookieHeaderRow);
  //append the thead element to the table
  cookieTable.appendChild(cookieHeader);
};
//run the function
makeHeader();

//Creating a footer that, right now, just holds the word "nope" for each cell
function makeFooter(){
  //find the table we want to append the footer to
  var cookieTable = document.getElementById('salesTable');
  //create a row
  var cookieFooter = document.createElement('tr');
  //create a cell
  var cookieFooterTitle = document.createElement('td');
  //fill the cell with the following content
  cookieFooterTitle.textContent = 'Total Cookies Per Hour';
  //append the title cell to the footer row
  cookieFooter.appendChild(cookieFooterTitle);
  //run a for loop to create content for each cell for each hour the store is open
  for (var i = 0; i < hours.length; i++){
    //create the cell element for each hour
    var cookieFooterCell = document.createElement('td');
    //fill each cell with the same content- someday this will add up the total cookies for each hour
    cookieFooterCell.textContent = 'Nope';
    //append to the footer row
    cookieFooter.appendChild(cookieFooterCell);
  };
  //append footer row to the table
  cookieTable.appendChild(cookieFooter);
}
//run the footer function
makeFooter();
