//const {chromium,test} = require('@playwright/test')

import {test,chromium} from '@playwright/test';

test('locator', async ()=>{

    const browser = await chromium.launch({
        headless : false
    });
    const page = await browser.newPage();
    awaitpage.goto('https://www.facebook.com/');
    const pageTitle = await page.title();
    Console.Log(pageTitle);

    const pageText = await page.locator('inputtext _55r1 _6luy').textContent();
    console.log(pageText);
    const username = await page.locator('#email');
    await expect(username).toBeVisible();
    await username.fill("trendnologies");
    await page.getByTestId('royal_email').click();

    await page.close();
   

});