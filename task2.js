const puppeteer = require('puppeteer');

async function main(){
    const browser = await puppeteer.launch({headless: false, slowMo: 100, args: ['--start-maximized']})
    const page =  await browser.newPage()
    await page.setViewport({
        width: 1920,
        height: 1080,
    });
    await page.goto("https://www.tesonet.com")
    await page.waitForTimeout(3000)
    const element = await page.$x("//*[@id='menu-item-19']")
    await element[0].click()
    await page.waitForTimeout(3000)
    const categories = await page.$x("//p[@class='text-muted mb-0 text-small' and not(contains(span, 0))]/ancestor::div[@class='career-lever-v3__job-category-content']/h4");

    for(const i in categories){
        let categoryCount = await page.evaluate(el => el.textContent, categories[i]);
        console.log('Open category name is:', categoryCount);
    }

    await browser.close()
}
main();
