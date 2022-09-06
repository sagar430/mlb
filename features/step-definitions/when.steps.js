const { Given, When, Then } = require('@wdio/cucumber-framework');

import getPageObject from '../pageobjects/getObjects'
import getPageObjectContent from '../pageobjects/getContent'

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    
});

When('I enter {string} in {string} field', async function(stringValue, objectKey) {
    const page = await getPageObject(objectKey)
    await page.clickOnElement(objectKey, false)
    await page.setValue(objectKey, await getPageObjectContent(stringValue))
    await browser.pause(2000)
})


