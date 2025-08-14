// Modular test for SpiceJet using reusable functions
const FlightsPage = require('../pages/FlightsPage');

function searchSpiceJet(from, to, departure, ret, travellerClass) {
  FlightsPage.visit();
  FlightsPage.clickFlightsTab();
  FlightsPage.selectRoundTrip();
  FlightsPage.setFrom(from);
  FlightsPage.setTo(to);
  FlightsPage.setDepartureDate(departure);
  FlightsPage.setReturnDate(ret);
  FlightsPage.setTravellerClass(travellerClass);
  FlightsPage.clickSearch();
  FlightsPage.filterByAirline('SpiceJet');
}

describe('SpiceJet Flight Details - Modular', () => {
  it('Prints SpiceJet flight details using modular approach', () => {
    searchSpiceJet('DEL', 'BOM', '20', '25', 'Economy');
    FlightsPage.getFlightDetails('SpiceJet').then($el => {
      cy.log('SpiceJet Flight Details:', $el.text());
      cy.screenshot('SpiceJet-Flight-Details-Modular');
    });
  });
});
