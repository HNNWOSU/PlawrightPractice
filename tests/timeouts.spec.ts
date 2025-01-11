/* eslint-disable @typescript-eslint/no-unused-vars */
import {expect, test} from '@playwright/test';

// The beforeEach function is a special function provided by Playwright.
// It will be called before each test is run, and it's a good place to put
// setup code that needs to run before each test.
test.beforeEach(async ({page}) => {
  // The page object represents the browser page that we're interacting with.
  // We're going to navigate to the root of the site.
  await page.goto('http://uitestingplayground.com/ajax');

  // Next, we want to click on the link that says "Forms". We can do this
  // by using the getByText method, which will search the page for an element
  // with the text "Forms".
  await page.getByText('Button Triggering AJAX Request').click();

  // We want to wait for the page to load, so we can verify that the button
  // with the class bg-success has the text "Data loaded with AJAX get request.".
  // We can use the waitForSelector method to do this.
  //await page.waitForSelector('.bg-success');
});

// This is a test, which is a function that Playwright will call to run
// the test.
test('Timeouts', async ({page}) => {
  // We want to set a timeout for this test.  This is a global timeout,
  // which means that if any of the code inside of this test times out,
  // the test will fail.
  test.setTimeout(10000);

  // Now we want to get a reference to the element with the class
  // bg-success.  We can use the locator method to do this.
  const successButton = page.locator('.bg-success');

  // Next, we want to click on the successButton.  We'll use the click
  // method to do this.  We'll also provide a timeout of 10000, which
  // means that if the click times out, the test will fail.
  await successButton.click({timeout: 10000});
})
