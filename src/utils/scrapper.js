const puppeteer = require('puppeteer')
const fs = require('fs')
const { TIMEOUT } = require('dns')

const componentArray = []
let pageCount = 1

const Scrapper = async (url) => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--start-maximized'],
      defaultViewport: null
    })
    const page = await browser.newPage()
    await page.goto(url)
    sweepPage(page, browser)
  } catch (error) {
    console.error(error)
  }
}
const sweepPage = async (page, browser) => {
  console.log('Starting sweep of page')
  const listDiv = await page.$$(
    '#navlist > li > div[class="s-productthumbbox"]'
  )
  for (const divProduct of listDiv) {
    let img = await divProduct.$eval('img', (element) => element.src)
    let title = await divProduct.$eval('img', (element) => element.title)

    let description = await divProduct.$eval(
      'span.productdescriptionname',
      (element) => element.textContent
    )
    try {
      // page.waitForSelector('span[class="CurrencySizeLarge curprice"]')
      let price = await divProduct.$eval('span.CurrencySizeLarge', (element) =>
        element.textContent.trim().replace('£', '')
      )
      const component = { img, title, description, price }
      componentArray.push(component)
    } catch (error) {
      console.log('error getting the price')
      console.error(error)
      console.log(componentArray[componentArray.length - 1])
    }
  }
  try {
    await page.waitForSelector('a[class="swipeNextClick NextLink "]', {
      timeout: 60000
    })
    console.log('waited for next page button')
    await page.$eval('a[class="swipeNextClick NextLink "]', (el) => el.click())
    console.log('clicked the button')
    // await page.waitForNavigation({
    //   timeout: 60000
    //   // waitUntil: 'domcontentloaded'
    // }) //wait for navigation timed out incresed to 60s!
    // console.log('waited for navigation')
    await page.waitForSelector('#navlist', { timeout: 60000 })
    let currentPage = await page.$eval(
      'span[class="CurrentPageNumber"]',
      (element) => element.textContent
    )
    pageCount += 1

    console.log('the current page is ', currentPage, 'it should be', pageCount)

    sweepPage(page, browser)
  } catch (error) {
    console.error(error)
    console.log(
      'finished all pages and got an error for not finding the next one',
      error
    )
    console.log(componentArray[componentArray.length - 1])
    saveProducts(componentArray)
    await browser.close()
  }
}
const saveProducts = (arrayOfObjects) => {
  fs.writeFile('products.json', JSON.stringify(arrayOfObjects), () => {
    console.log('File Saved')
  })
}

module.exports = { Scrapper }
