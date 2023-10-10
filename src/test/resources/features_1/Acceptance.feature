Feature: Acceptance Test 1

  @AT1_1
  Scenario: AT1 Acceptance test 1
    When AT1_S1 I validate "YL World"
    Then AT1_S2 I validate get "YL" API

  @AT1_2
  Scenario: AT2 Acceptance test API Call 2
    When AT1_S3 I am making a Get API call for "YL" configs
