import {locators,generic} from '../../../index'


const {getById, getByValue, getByXpath, getByText} = locators

const pageObjects = { 
  'Houston Astros': getByXpath("//div[@class='mlb-favorites-team-name' and text()='Houston Astros']"),
  'Next': getByXpath("//button[contains(@class,'next')]"),
}
module.exports = class favoritePage extends generic {
  constructor() {
    super(pageObjects)
  }
}