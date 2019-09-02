const puppeteer = require('puppeteer')
const constants = require('../constants')

beforeEach( () => {setTimeout(()=>{}, 5000)}, 5000)

test('API should return something', async () => {
  // expect.assertions(1)
  const data = constants.functions.fetchColors()
  expect(data).not.toBeFalsy()
})

test('first response from API should include id, hex, created, updated, family, & relative_color', async () => {
  const data = await constants.functions.fetchColors()
  // expect.assertions(6)
  expect(data.data[0].id).not.toBeFalsy()
  expect(data.data[0].hex).not.toBeFalsy()
  expect(data.data[0].created_at).not.toBeFalsy()
  expect(data.data[0].updated_at).not.toBeFalsy()
  expect(data.data[0].family).not.toBeFalsy()
  expect(data.data[0].relative_color).not.toBeFalsy()
})

test('integration tests: random, red filter, deselect filter', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  })
  const page = await browser.newPage()
  await page.goto(constants.siteTestUrl)

  // expect.assertions(3)

  await page.click('button#random')
  const random_swatch = await page.$eval('.swatches__swatch', el => el.outerHTML)
  expect(random_swatch).toContain('swatches__swatch--hero')

  await page.click('div#filter_red')
  let swatches = await page.$$eval('.swatches__swatch', el => el.map( sw => sw.outerHTML))
  let includes_red = swatches.filter( sw => sw.includes('red'))
  expect(includes_red.length).toBe(12)

  await page.click('div#filter_red')
  swatches = await page.$$eval('.swatches__swatch', el => el.map( sw => sw.outerHTML ))
  includes_red = swatches.filter( sw => sw.includes('red'))
  expect(includes_red.length).not.toBe(12)
})