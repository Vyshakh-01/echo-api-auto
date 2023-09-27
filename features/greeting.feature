Feature: Greeting

  
  @TestTag1
  Scenario: Say hello
    When the greeter says hello
    Then I should have heard "ww3"

  @TestTag2
  Scenario: Validating API call
    When Get API Test
    
