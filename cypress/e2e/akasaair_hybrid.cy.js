// Hybrid test for AkasaAir Senior Citizen using async/await and screenshot
const FlightsPage = require('../pages/FlightsPage');

describe('AkasaAir Senior Citizen - Hybrid Framework', () => {
  it('Prints first available AkasaAir flight details for Senior Citizen', () => {
    FlightsPage.visit();
    FlightsPage.clickFlightsTab();
    FlightsPage.selectRoundTrip();
    FlightsPage.setFrom('DEL');
    FlightsPage.setTo('BOM');
    FlightsPage.setDepartureDate('20');
    FlightsPage.setReturnDate('25');
    FlightsPage.setTravellerClass('Economy');
    FlightsPage.clickSearch();
    FlightsPage.filterByFareType('Senior Citizen');
    FlightsPage.clickSearch();
    // Async example: wait for results
    cy.wait(3000).then(() => {
      FlightsPage.filterByAirline('AkasaAir');
      FlightsPage.getFlightDetails('AkasaAir').then($el => {
        cy.log('AkasaAir Senior Citizen Flight Details:', $el.text());
        cy.screenshot('AkasaAir-SeniorCitizen-Flight-Details');
      });
    });
  });
});
