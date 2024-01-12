const puppeteer = require('puppeteer');
const fs = require('fs/promises')

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://en.wikipedia.org/wiki/Romeo")

    await page.screenshot({path: "bro.png"})

    await browser.close();
}

start();