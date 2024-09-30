import {expect, test} from '@playwright/test';

// The beforeEach function is a special function provided by Playwright.
// It will be called before each test is run, and it's a good place to put
// setup code that needs to run before each test.
test.beforeEach(async ({page}) => {
  // The page object represents the browser page that we're interacting with.
  // We're going to navigate to the root of the site.
  await page.goto('http://localhost:4200/');

  // Next, we want to click on the link that says "Forms". We can do this
  // by using the getByText method, which will search the page for an element
  // with the text "Forms".
  await page.getByText('Forms').click();

  // Now that we've clicked on the "Forms" link, we want to click on the
  // link that says "Form Layout". Again, we can do this by using the getByText
  // method.
  await page.getByText('Form Layout').click();
});


test('assertions', async ({page}) => {
    // The `page.locator` method takes a CSS selector and returns a Locator object.
    // The Locator object represents an element on the page that matches the given CSS selector.
    // In this case, the CSS selector is looking for an element with the class "nb-card"
    // that also contains the text "Basic form".
    // The `filter` method is used to narrow down the results of the Locator object.
    // The `hasText` method is a special method provided by Playwright that will look
    // for an element that contains the given text.
    const basicFormButton = page.locator('nb-card').filter({hasText: "Basic form"});
    // The `locator` method is used again to find the first element that matches
    // the given CSS selector. In this case, we're looking for a button.
    const basicFormButtonElement = basicFormButton.locator('button');
    // The `textContent` method is used to get the text content of the element.
    // In this case, the text content of the button is "Submit".
    const text = await basicFormButtonElement.textContent();
    // The `expect` method is used to make an assertion about the value of `text`.
    // The `toEqual` method is used to specify that the value of `text` should
    // equal the given value, which is "Submit".
    expect(text).toEqual('Submit');

    // General assertions are assertions that are made without using a Locator object.
    // In this case, we're asserting that the value of `value` is equal to 5.
    const value = 5
    expect(value).toBe(5)

    // Locator assertions are assertions that are made using a Locator object.
    // In this case, we're asserting that the text content of the button is "Submit".
    await expect(basicFormButtonElement).toHaveText('Submit')

    // Soft assertions are assertions that are made without throwing an error
    // if the assertion fails.
    // In this case, we're asserting that the text content of the button is "Submit".
    // If the assertion fails, the test will not throw an error.
    // Instead, the failure will be logged to the console.
    await expect.soft(basicFormButtonElement).toHaveText('Submit')
    // Finally, we're clicking the button.
    await basicFormButtonElement.click()



})