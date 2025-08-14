// BDD-style test for SpiceJet using Cypress (pseudo-Gherkin, can be adapted for cucumber)
const FlightsPage = require('../pages/FlightsPage');

describe('SpiceJet Flight Details - BDD Style', () => {
  it('Given user is on MakeMyTrip, When searching for SpiceJet, Then flight details are printed', () => {
    // Given
    FlightsPage.visit();
    // When
    FlightsPage.clickFlightsTab();
    FlightsPage.selectRoundTrip();
    FlightsPage.setFrom('DEL');
    FlightsPage.setTo('BOM');
    FlightsPage.setDepartureDate('20');
    FlightsPage.setReturnDate('25');
    FlightsPage.setTravellerClass('Economy');
    FlightsPage.clickSearch();
    FlightsPage.filterByAirline('SpiceJet');
    // Then
    FlightsPage.getFlightDetails('SpiceJet').then($el => {
      cy.log('SpiceJet Flight Details:', $el.text());
      cy.screenshot('SpiceJet-Flight-Details-BDD');
    });
  });
});
