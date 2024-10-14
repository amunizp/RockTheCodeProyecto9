const puppeteer = require('puppeteer')
const fs = require('fs')

const componentArray = []

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

  const Navlist = await page.$$(
    '#navlist > li > div[class="s-productthumbbox"]'
  )
  const img = await page.$$eval(
    '#navlist > li > div[class="s-productthumbbox"] ',
    (elements) => {
      console.log('These are the elements', elements)
      return elements //.map((e) => e.src)
    }
  )
  console.log('The images are:', img)
}

module.exports = { Scrapper }
