const puppeteer = require('puppeteer')

test('should open in browser', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=1920,1080']
  })
  const page = await browser.newPage()
  await page.goto('http://localhost:3001')
  await page.click('button.sidebar__button-random')
})