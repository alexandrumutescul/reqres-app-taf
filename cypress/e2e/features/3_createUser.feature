Feature: User api
  Scenario: Last name field
    Given I create user with last name "morpheus" and job "leader"
    Then I check response status, id, year of creation and that response duration is below "101"