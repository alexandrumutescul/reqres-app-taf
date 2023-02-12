Feature: User api
  Scenario: Total field value
    Given I get user list with page= "1" and get data array length and total field value
    When I get user list with page= "2" and get data array length and total field value
    Then I check total data field value