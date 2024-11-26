const {chromium,test,expect} = require('@playwright/test')
//const exp = require('constants');

test('amazon page launch' , async ()=> {

    const browser = await chromium.launch({
        headless : false
    });
    const page = await browser.newPage();
    await page.goto('https://www.amazon.in/');

    const pageTitle = await page.title();
    await expect(page).toHaveTitle(pageTitle);

    const searchbox = await page.locator('input#twotabsearchtextbox');
    await expect(searchbox).toBeVisible();
    await expect(searchbox).toBeEmpty();
    await expect(searchbox).toBeEnabled();

    const searchvalue = "iphone 15";
    await searchbox.fill(searchvalue);
    await page.waitForTimeout(3000);
    const sugg = await page.$$("//div[@class='autocomplete-results-container']");

    for(const each of sugg){
        const eachText = await each.innerText();
        if(eachText.includes(searchvalue)){
            console.log(eachText);
        }
    }
    await page.waitForTimeout(3000);
});