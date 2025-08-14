// . Keyword utility for keyword-driven tests
const FlightsPage = require('../pages/FlightsPage');

const keywords = {
  'Launch Browser': () => FlightsPage.visit(),
  'Click Flights Tab': () => FlightsPage.clickFlightsTab(),
  'Select Round Trip': () => FlightsPage.selectRoundTrip(),
  'Set From': (city) => FlightsPage.setFrom(city),
  'Set To': (city) => FlightsPage.setTo(city),
  'Set Departure Date': (date) => FlightsPage.setDepartureDate(date),
  'Set Return Date': (date) => FlightsPage.setReturnDate(date),
  'Set Traveller Class': (travellerClass) => FlightsPage.setTravellerClass(travellerClass),
  'Click Search': () => FlightsPage.clickSearch(),
  'Filter By Airline': (airline) => FlightsPage.filterByAirline(airline),
  'Filter By Non Stop': () => FlightsPage.filterByNonStop(),
  'Filter By Fare Type': (fareType) => FlightsPage.filterByFareType(fareType),
  'Get Flight Details': (airline) => FlightsPage.getFlightDetails(airline)
};

module.exports = keywords;
