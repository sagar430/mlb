import {locators,generic} from '../../../index'


const {getById, getByValue, getByXpath, getByText} = locators

const pageObjects = { 
  'Sign in': getByXpath("//*[@data-testid='header-profile-button']"),
  'Profile': getByXpath("//*[@data-testid='header-profile-button']"),
  'Username': getById("email"),
  'Password': getById("password"),
  'Login': getByXpath("//div[@class= 'mlb-onboarding-tile-title' and text()= 'Log In']"),
  // 'Sign out': getByXpath("//a[contains(@href,'logout') and text()='Sign out']"),
}
module.exports = class loginPage extends generic {
  constructor() {
    super(pageObjects)
  }
}