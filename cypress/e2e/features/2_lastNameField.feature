Feature: User api
  Scenario Outline: Last name field
    Given I get user list with page= "2" and save last_name and id field information form data array with "<index>"
    Then I get single user with id and assert last_name against previously save last_name field
    Examples:
      | index |
      | 0     |
      | 1     |