const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I go to homepage$/, async () => {
    await browser.url(`/html5/browser_browser_es5/`)
});

Given(/^I go to login page$/, async () => {
    await browser.url(`/html5/browser_browser_es5/login`)
});