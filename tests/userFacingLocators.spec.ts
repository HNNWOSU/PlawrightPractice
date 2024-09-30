import {test} from '@playwright/test';

// beforeEach is a special function provided by Playwright.
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

  // Now that we've clicked on the "Forms" link, we want to click on the link
  // that says "Form Layout". Again, we can do this by using the getByText
  // method.
  await page.getByText('Form Layout').click();
});

// This is the test itself. It's a function that Playwright will call to run
// the test.
test('user facing locators', async ({page}) => {
  // First, we want to click on the first text box that has the label "Email".
  // We can do this by using the getByRole method, which will search the page
  // for an element with the given role. In this case, we're looking for an
  // element with the role "textbox", and the label "Email". We're also using
  // the first() method to get the first matching element, since we don't care
  // which one we get.
  await page.getByRole('textbox', {name: 'Email'}).first().click();

  // Next, we want to click on the first button that has the name "Sign in".
  // We can do this by using the getByRole method again, but this time we're
  // looking for an element with the role "button", and the name "Sign in".
  // Again, we're using the first() method to get the first matching element.
  await page.getByRole('button', {name: 'Sign in'}).first().click();

  // Next, we want to click on the element with the label "Email". We can do
  // this by using the getByLabel method, which will search the page for an
  // element with the given label.
  await page.getByLabel('Email').first().click();

  // Next, we want to click on the element with the placeholder text "Jane Doe".
  // We can do this by using the getByPlaceholder method, which will search the
  // page for an element with the given placeholder text.
  await page.getByPlaceholder('Jane Doe').click();

  // Next, we want to click on the link that says "Using the Grid". We can do
  // this by using the getByText method again, but this time we're looking for
  // an element with the text "Using the Grid".
  await page.getByText('Using the Grid').click();

  // Next, we want to click on the element with the test ID "SignIn". We can do
  // this by using the getByTestId method, which will search the page for an
  // element with the given test ID.
  await page.getByTestId('SignIn').click();

  // Finally, we want to click on the link that says "IoT Dashboard". We can do
  // this by using the getByTitle method, which will search the page for an
  // element with the given title.
  await page.getByTitle('IoT Dashboard').click();

});
