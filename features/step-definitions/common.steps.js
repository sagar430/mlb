const { Given, When, Then } = require('@wdio/cucumber-framework');

import getPageObject from '../pageobjects/getObjects'

When('I click on {string}', async function(objectKey) {
  const page = await getPageObject(objectKey)
  await page.clickOnElement(objectKey, false)
})

When('I select {string} as Favorite team and hit enter', async function(objectKey) {
  const page = await getPageObject(objectKey)
  await page.clickOnElement(objectKey, false)
  await page.setValue('\uE007')
})

When('I wait for {string} to be displayed', async function(objectKey) {
  const page = await getPageObject(objectKey)
  await page.waitForElement(objectKey, false)
})

When('I select the {string} tab', async function(objectKey) {
  const page = await getPageObject(objectKey)
  await page.clickOnElement(objectKey, false)
})

When('I wait for sometime', async function() {
  await browser.pause(5000)
})

When('I scroll down', async function (){
  await browser.execute('mobile: scroll', { 'direction': 'down'});
})
