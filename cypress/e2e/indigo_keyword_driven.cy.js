// Keyword-driven test for Indigo Non Stop using keywords utility
const keywords = require('../keywords/flightKeywords');
const testData = {
  from: 'BLR',
  to: 'HYD',
  departure: '22',
  return: '28',
  travellerClass: 'Business',
  airline: 'IndiGo'
};

describe('Indigo Non Stop Flight Details - Keyword Driven', () => {
  it('Prints first available Indigo Non Stop flight details', () => {
    keywords['Launch Browser']();
    keywords['Click Flights Tab']();
    keywords['Select Round Trip']();
    keywords['Set From'](testData.from);
    keywords['Set To'](testData.to);
    keywords['Set Departure Date'](testData.departure);
    keywords['Set Return Date'](testData.return);
    keywords['Set Traveller Class'](testData.travellerClass);
    keywords['Click Search']();
    keywords['Filter By Non Stop']();
    keywords['Filter By Airline'](testData.airline);
    keywords['Get Flight Details'](testData.airline).then($el => {
      cy.log('Indigo Non Stop Flight Details:', $el.text());
      cy.screenshot('Indigo-NonStop-Flight-Details');
    });
  });
});
