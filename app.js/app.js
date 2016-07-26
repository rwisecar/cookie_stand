//testing
'use strict';

var hours = ['6:00 a.m.', '7:00 a.m.', '8:00 a.m.', '9:00 a.m.', '10:00 a.m', '11:00 a.m.', '12:00 p.m.', '1:00 p.m.', '2:00 p.m.', '3:00 p.m.', '4:00 p.m', '5:00 p.m.', '6:00 p.m.', '7:00 p.m.'];

//First and Pike

var firstAndPike = {

  //STANDARD PROPERTIES
  name: 'First and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  cookiePerSale: 6.3,
  cookiesPerHourArray: [], //Holds cookies per hour
  totalDailyCookieSales: 0, //Holds sum of cookies sold per hour

  //METHODS
  avgCookies: function () {
    for (var i = 0; i < hours.length; i++) {
      var singleHourCookies = (Math.floor((Math.floor((Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers)) * this.cookiePerSale));
      this.cookiesPerHourArray.push(singleHourCookies);
      this.totalDailyCookieSales += singleHourCookies;
    };
  },
};
firstAndPike.avgCookies(firstAndPike.minCustomers, firstAndPike.maxCustomers);

//
