import {expect, test} from '@playwright/test';

/**
 * The beforeEach function is a special function provided by Playwright.
 * It will be called before each test is run, and it's a good place to put
 * setup code that needs to run before each test.
 *
 * In this case, we're just navigating to the root of the site.
 */
test.beforeEach( async ({page}) => {
  /**
   * This line of code navigates to the root of the site.
   * It's a good place to start if you want to make sure that the page
   * is in a known state before each test.
   */
  await page.goto('http://localhost:4200/')
  })

  test("sliders", async ({page}) => {

    // Update attributes
    // const tempGauge = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle')

    // // Evaluate the element in the context of the page.
    // // This is a way to run JavaScript code in the context of the page.
    // // The function that we pass to evaluate will be called with the element
    // // as its first argument, and it will be executed in the context of the page.
    // // The return value of the function will be returned to us.
    
    // await tempGauge.evaluate (node => {
    //   // Set the cx and cy attributes of the element to the specified values.
    //   // This is the center of the circle.
    //   node.setAttribute('cx','232.630')
    //   node.setAttribute('cy','232.630')
    // })

    // // Click on the element.
    // // This will trigger the click event on the element.
    // await tempGauge.click()

    //mouse movement
    const tempDragger = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger')
    // Make sure that the element is visible on the page.
    // This is necessary because the element might be offscreen.
    await tempDragger.scrollIntoViewIfNeeded()

    // Get the bounding box of the element.
    // This is the box that surrounds the element on the page.
    const box = await tempDragger.boundingBox()
    // Calculate the center of the box.
    const x = box.x + box.width / 2
    const y = box.y + box.height / 2

    // Move the mouse to the center of the box.
    // This is necessary because we need to click on the box.
    await page.mouse.move(x, y)
    // Click on the box.
    // This will trigger the click event on the box.
    await page.mouse.down()
    // Move the mouse to the right by 100 pixels.
    // This will simulate a drag event.
    await page.mouse.move(x + 100, y)
    // Move the mouse down by 100 pixels.
    // This will simulate a drag event.
    await page.mouse.move(x + 100, y + 100)
    // Release the mouse button.
    // This will end the drag event.
    await page.mouse.up()
    // Check that the element has the text "30".
    // This is necessary to verify that the drag event was successful.
    await expect(tempDragger).toContainText("30")

  })

