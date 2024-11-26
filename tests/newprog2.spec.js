const {chromium,test,expect} = require('@playwright/test');

test('eb games page launch' , async ()=> {

    const browser = await chromium.launch({
        headless : false
    });
    const page = await browser.newPage();
    await page.goto('https://www.ebgames.com.au/');

    const pageTitle = await page.title();
    await expect(page).toHaveTitle(pageTitle);

    const searchbox = await page.locator('input#desktopsearch');
    await expect(searchbox).toBeVisible();
    await expect(searchbox).toBeEmpty();
    await expect(searchbox).toBeEnabled();
    const searchvalue = "clothing";
    await searchbox.fill(searchvalue);
    const sugg = await page
    
    await page.waitForTimeout(3000);

    const sugg = await page.$$("//div[@class='product-tile border svelte-1pu983o']");

    await page.waitForTimeout(3000);



});