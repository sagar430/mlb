Feature: Login

  Scenario Outline: As a user, I can login and logout successfully
    Given I go to login page
    # Given I go to homepage
    # When I select "Houston Astros" as Favorite team and hit enter
    And I click on "Login"
    And I enter "<Username>" in "Username" field
    And I enter "<Password>" in "Password" field
    # And I click on "Next"
    # When I click on "Sign in"
    # And I click on "Login"
    # And I wait for "Profile" to be displayed
    # And I click on "Profile"
    # And I click on "Sign out"
    # And I click on "Category"

    Examples:
      | Username           | Password       |
      | Yearly User        | password       |
      | Single Team User   | password       |
