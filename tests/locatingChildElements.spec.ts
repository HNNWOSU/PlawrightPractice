import {test} from '@playwright/test';

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

// This is the test itself. It's a function that Playwright will call to run
// the test.
test('locating child elements', async ({page}) => {
  // First, we want to click on the radio button that says "Option 1".
  // We can do this by using the locator method, which will search the page
  // for an element that matches the given selector.
  // In this case, we're using the selector 'nb-card nb-radio :text-is("Option 1")'.
  // This selector is saying "Find an element with the class 'nb-card', then
  // find a child element with the class 'nb-radio', and then find a child
  // element of that with the text 'Option 1'".
  await page.locator('nb-card nb-radio :text-is("Option 1")').click();

  // Next, we want to click on the radio button that says "Option 2".
  // We can do this by using the same selector as before, but this time
  // we're starting from a different element. We're starting from the element
  // with the class 'nb-card', and then finding a child element with the
  // class 'nb-radio', and then finding a child element of that with the
  // text 'Option 2'".
  await page.locator('nb-card').locator('nb-radio :text-is("Option 2")').click();

  // Finally, we want to click on the button that says "Sign in".
  // We can do this by using the getByRole method, which will search the page
  // for an element with the given role. In this case, we're looking for a
  // button with the role "button", and the name "Sign in".
  // We're also using the first() method to get the first matching element,
  // since we don't care which one we get.
  await page.locator('nb-card').getByRole('button', {name: 'Sign in'}).first().click();

  // Click on the button inside the 4th card.
  await page.locator('nb-card').nth(3).getByRole('button').click();
});

