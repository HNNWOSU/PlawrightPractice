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
test('reusing locators', async ({page}) => {

    // First, we get a handle on the "Basic form" card.
    // We're using the locator method, which takes a selector as its argument.
    // The selector we're giving it is 'nb-card', which is the class of the cards
    // that we're using to wrap each form.
    // Then we're using the filter method to narrow down the results to the
    // card that has the text "Basic form" inside of it.
    const basicForm = page.locator('nb-card').filter({hasText: "Basic form"});

    // Next, we get a handle on the e-mail text box.
    // We're using the getByRole method, which is a method that Playwright
    // provides for finding elements on the page.
    // The first argument to getByRole is the role of the element, and the
    // second argument is an options object that we can use to provide more
    // information about the element that we're looking for.
    // In this case, the role of the element is "textbox", and the name of the
    // element is "Email".
    const emailField = basicForm.getByRole('textbox', {name: 'Email'});

    // Now that we have a handle on the e-mail text box, we can fill it in.
    // We're using the fill method to enter the text "test@test.com" into the
    // text box.
    await emailField.fill('test@test.com');

    // Next, we get a handle on the password text box.
    // We're using the getByRole method again, but this time we're looking for
    // an element with the role "textbox" and the name "Password".
    const passwordField = basicForm.getByRole('textbox', {name: 'Password'});

    // Now that we have a handle on the password text box, we can fill it in.
    // We're using the fill method to enter the text "Welcome123" into the text
    // box.
    await passwordField.fill('Welcome123');

    // Next, we get a handle on the checkbox that says "Check me out".
    // We're using the locator method again, but this time we're looking for
    // an element with the class "nb-checkbox".
    const checkbox = basicForm.locator('nb-checkbox');

    // Now that we have a handle on the checkbox, we can check it.
    // We're using the click method to check the box.
    await checkbox.click();

    // Finally, we get a handle on the submit button.
    // We're using the getByRole method again, but this time we're looking for
    // an element with the role "button" and the name "SUBMIT".
    const submitButton = basicForm.getByRole('button', {name: 'SUBMIT'});

    // Now that we have a handle on the submit button, we can click it.
    // We're using the click method to submit the form.
    await submitButton.click();

    // Now that we've submitted the form, we want to verify that the value
    // of the email text box is "test@test.com".
    // We're using the expect method to perform this verification.
    // The first argument to expect is the value that we expect the text box
    // to have, and the second argument is the text box itself.
    // The expect method will check that the value of the text box is equal to
    // the expected value, and will throw an exception if it's not.
    await expect(emailField).toHaveValue('test@test.com');


})