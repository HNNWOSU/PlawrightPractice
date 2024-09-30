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


});

test('auto waiting', async ({page}) => {

const successButton = page.locator('.bg-success');
//await successButton.click();

const text = await successButton.textContent();
expect(text).toEqual('Data loaded with AJAX get request.');

})