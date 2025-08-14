// Data-driven test for SpiceJet using POM and fixture data
const FlightsPage = require('../pages/FlightsPage');

describe('SpiceJet Flight Details - Data Driven', () => {
  beforeEach(() => {
    cy.fixture('flightData').as('data');
  });

  it('Prints SpiceJet flight details', function () {
    const testData = this.data[0];
    FlightsPage.visit();
    FlightsPage.clickFlightsTab();
    FlightsPage.selectRoundTrip();
    FlightsPage.setFrom(testData.from);
    FlightsPage.setTo(testData.to);
    FlightsPage.setDepartureDate(testData.departure);
    FlightsPage.setReturnDate(testData.return);
    FlightsPage.setTravellerClass(testData.travellerClass);
    FlightsPage.clickSearch();
    FlightsPage.filterByAirline(testData.airline);
    FlightsPage.getFlightDetails(testData.airline).then($el => {
      cy.log('SpiceJet Flight Details:', $el.text());
      cy.screenshot('SpiceJet-Flight-Details');
    });
  });
});
