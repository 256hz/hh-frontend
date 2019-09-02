const puppeteer = require('puppeteer')
const constants = require('../constants')

test('API should return something', () => {
  expect.assertions(1);
  return constants.functions.fetchColors().then( data => {
    expect(data).not.toBeFalsy();
  });
});

test('first response from API should include id, hex, created, updated, family, & relative_color', async () => {
  expect.assertions(6)
  const data = await constants.functions.fetchColors()
  const first = data.data[0]
  expect(first.id).not.toBeFalsy()
  expect(first.hex).not.toBeFalsy()
  expect(first.created_at).not.toBeFalsy()
  expect(first.updated_at).not.toBeFalsy()
  expect(first.family).not.toBeFalsy()
  expect(first.relative_color).not.toBeFalsy()
})

test('integration tests: random, red filter, deselect filter', async () => {
  const browser = await puppeteer.launch({
    headless: true,
    slowMo: 80,
  })
  const page = await browser.newPage()
  await page.goto('http://localhost:3001')
  await page.click('button#random')
  const random_swatch = await page.$eval('.swatches__swatch', el => el.outerHTML)
  expect(random_swatch).toContain('swatches__swatch__hero')

  await page.click('div#filter_red')
  let swatches = await page.$$eval('.swatches__swatch', el => el.map( sw => sw.outerHTML))
  let includes_red = swatches.filter( sw => sw.includes('red'))
  expect(includes_red.length).toBe(12)

  await page.click('div#filter_red')
  swatches = await page.$$eval('.swatches__swatch', el => el.map( sw => sw.outerHTML ))
  includes_red = swatches.filter( sw => sw.includes('red'))
  expect(includes_red.length).not.toBe(12)
})