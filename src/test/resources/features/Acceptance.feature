# @Acceptance
# Feature: fghjk

#   @test1
#   Scenario: Hello World
#     Given Say Hello World

Feature: Greeting

  Scenario: Say hello
    When the greeter says hello
    Then I should have heard "hello"
