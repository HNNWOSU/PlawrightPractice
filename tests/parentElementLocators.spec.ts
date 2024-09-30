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
test('parent element locators', async ({page}) => {
    // This is a test of the parent element locators in Playwright.
    // Parent element locators are used to find elements inside of other elements.
    // The first example is of finding an element with the class "nb-card" that
    // has a text element with the text "Using the Grid". We can do this by
    // using the locator method, and then using the getByRole method to find
    // the text box with the name "Email".
    await page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: 'Email'}).click();

    // The second example is of finding an element with the class "nb-card" that
    // has a text element with the text "Basic form". We can do this by
    // using the locator method, and then using the getByRole method to find
    // the text box with the name "Email".
    await page.locator('nb-card', {hasText: "Basic form"}).getByRole('textbox', {name: 'Email'}).click();

    // The third example is of finding an element with the class "nb-card" that
    // has a text element with the id "inputEmail1". We can do this by
    // using the locator method, and then using the getByRole method to find
    // the text box with the name "Email".
    await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox', {name: 'Email'}).click();

    // The fourth example is of finding an element with the class "nb-card" that
    // has a text element with the text "Basic form", and then finding a text
    // box with the name "Email" inside of that element. We can do this by
    // using the locator method, and then using the getByRole method to find
    // the text box with the name "Email".
    await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: 'Email'}).click();

    // The fifth example is of finding an element with the class "nb-card" that
    // has a text element with the class "status-danger", and then finding a
    // text box with the name "Password" inside of that element. We can do
    // this by using the locator method, and then using the getByRole method to
    // find the text box with the name "Password".
    await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox', {name: 'Password'}).click();

    // The sixth example is of finding an element with the class "nb-card" that
    // has a text element with the text "Sign in", and then finding a text box
    // with the name "Email" inside of that element. We can do this by using
    // the locator method, and then using the getByRole method to find the
    // text box with the name "Email".
    await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText:"Sign in"})
    .getByRole('textbox', {name: 'Email'}).click();

    // The seventh example is of finding an element with the text "Using the
    // Grid", and then finding a text box with the name "Email" inside of that
    // element. We can do this by using the locator method, and then using the
    // getByRole method to find the text box with the name "Email".
    await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox', {name: 'Email'}).click();
})
