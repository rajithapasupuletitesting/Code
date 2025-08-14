const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const FlightsPage = require('../../pages/FlightsPage');

Given('I am on the MakeMyTrip homepage', () => {
  FlightsPage.visit();
});

When('I search for SpiceJet flights from {string} to {string} for round trip', (from, to) => {
  FlightsPage.clickFlightsTab();
  FlightsPage.selectRoundTrip();
  FlightsPage.setFrom(from);
  FlightsPage.setTo(to);
  FlightsPage.setDepartureDate('20');
  FlightsPage.setReturnDate('25');
  FlightsPage.setTravellerClass('Economy');
  FlightsPage.clickSearch();
  FlightsPage.filterByAirline('SpiceJet');
});

Then('I should see SpiceJet flight details', () => {
  FlightsPage.getFlightDetails('SpiceJet').then($el => {
    cy.log('SpiceJet Flight Details:', $el.text());
    cy.screenshot('SpiceJet-Flight-Details-BDD-Feature');
  });
});
