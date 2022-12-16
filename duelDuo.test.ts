
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})
test('Draw button displays choices', async () =>{
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})
test('Add to duo button displays player-duo', async () =>{
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath('//button[@class="bot-btn"]')).click()
    const duo = await driver.findElement(By.id('player-duo'))
    const displayed = await duo.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})