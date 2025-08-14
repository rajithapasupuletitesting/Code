// Page Object for MakeMyTrip Flights Page
class FlightsPage {
  visit() {
    cy.visit('https://www.makemytrip.com/');
  }
  clickFlightsTab() {
    cy.get('li[data-cy="menu_Flights"]').click();
  }
  selectRoundTrip() {
    cy.get('li[data-cy="roundTrip"]').click();
  }
  setFrom(city) {
    cy.get('input[placeholder="From"]').clear().type(city).type('{enter}');
  }
  setTo(city) {
    cy.get('input[placeholder="To"]').clear().type(city).type('{enter}');
  }
  setDepartureDate(date) {
    cy.get('div[aria-label="Departure Date"]').click();
    cy.contains('div', date).click();
  }
  setReturnDate(date) {
    cy.get('div[aria-label="Return Date"]').click();
    cy.contains('div', date).click();
  }
  setTravellerClass(travellerClass) {
    cy.get('label[for="travellers"]').click();
    cy.contains('li', travellerClass).click();
    cy.get('button[data-cy="travellerApplyBtn"]').click();
  }
  clickSearch() {
    cy.get('a[data-cy="search"]').click();
  }
  filterByAirline(airline) {
    cy.contains('span', airline).click();
  }
  filterByNonStop() {
    cy.contains('span', 'Non Stop').click();
  }
  filterByFareType(fareType) {
    cy.contains('span', fareType).click();
  }
  getFlightDetails(airline) {
    return cy.contains('span', airline).parents('div[data-cy="flightCard"]');
  }
}

module.exports = new FlightsPage();
