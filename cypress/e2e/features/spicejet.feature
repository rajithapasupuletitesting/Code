@smoke
Feature: SpiceJet Flight Search
  Scenario: Print SpiceJet flight details
    Given I am on the MakeMyTrip homepage
    When I search for SpiceJet flights from "DEL" to "BOM" for round trip
    Then I should see SpiceJet flight details
