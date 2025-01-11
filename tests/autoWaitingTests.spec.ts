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

test('auto waiting', async ({page}) => {

  // We want to verify that the button with the class bg-success has the text
  // "Data loaded with AJAX get request.".
  const successButton = page.locator('.bg-success');

  // We can use the waitForSelector method to wait for the button to be
  // visible, and then verify that it has the correct text.
  //await page.waitForSelector('.bg-success');

  // Or we can use the waitFor method to wait for the button to have the
  // correct text.
  //await successButton.waitFor({state: 'attached'});
  //const text = await successButton.allTextContents();

  // Another way to do this is to use the waitFor method with an options object
  // that specifies the state of the element that we want to wait for.
  //await successButton.waitFor({state: 'visible'});
  //const text = await successButton.textContent();

  // The most verbose way to do this is to use the waitFor method with a
  // timeout, and then verify that the button has the correct text.
  //await page.waitForTimeout(20000);
  //const text = await successButton.allTextContents();

  // The most concise way to do this is to use the haveText method, which
  // will wait for the button to have the correct text.
  await expect(successButton).toHaveText('Data loaded with AJAX get request.')
})

test('alternative waits', async ({page}) => {

  // We want to verify that the button with the class bg-success has the text
  // "Data loaded with AJAX get request.".
  const successButton = page.locator('.bg-success');

  // We can use the waitForSelector method to wait for the button to be
  // visible, and then verify that it has the correct text.
  //await page.waitForSelector('.bg-success');

  // Or we can use the waitFor method to wait for the button to have the
  // correct text.
  //await successButton.waitFor({state: 'attached'});
  //const text = await successButton.allTextContents();

  // Another way to do this is to use the waitFor method with an options object
  // that specifies the state of the element that we want to wait for.
  //await successButton.waitFor({state: 'visible'});
  //const text = await successButton.textContent();

  // The most verbose way to do this is to use the waitFor method with a
  // timeout, and then verify that the button has the correct text.
  //await page.waitForTimeout(20000);
  //const text = await successButton.allTextContents();

  // The most concise way to do this is to use the haveText method, which
  // will wait for the button to have the correct text.
  //await expect(successButton).toHaveText('Data loaded with AJAX get request.')

  // Another way to wait for the page to load is to wait for the response
  // from the server. We can do this by using the waitForResponse method.
  //await page.waitForResponse('http://uitestingplayground.com/ajaxdata');

  // Another way to wait for the page to load is to wait for the network
  // calls to finish. We can do this by using the waitForLoadState method
  // with the 'networkidle' option.
  await page.waitForLoadState("networkidle");

  // Another way to wait for the page to load is to wait for the page to
  // change to a specific URL. We can do this by using the waitForURL method.
  //await page.waitForURL('http://uitestingplayground.com/');

  // Finally, we can verify that the button has the correct text.
  const text = await successButton.allTextContents()
  expect(text).toContain('Data loaded with AJAX get request.')
})
