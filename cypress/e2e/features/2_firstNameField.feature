Feature: User api
  Scenario Outline: First name field
    Given I get user list with page= "2" and save first_name and id field information form data array with "<index>"
    Then I get single user with id and assert first_name against previously save first_name field
    Examples:
      | index |
      | 0     |
      | 1     |