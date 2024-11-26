const {chromium,test,expect} = require('@playwright/test')
//const exp = require('constants');

test('testing page launch' , async ()=> {

    const browser = await chromium.launch({
        headless : false
    });
    const page = await browser.newPage();
    await page.goto('https://testautomationpractice.blogspot.com/');

    const pageTitle = await page.title();
    await expect(page).toHaveTitle(pageTitle);


});