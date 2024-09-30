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

test('extracting values', async ({page}) => {

    // First, we want to extract the text of the button inside the "Basic form"
    // card. We can do this by using the locator method, and then using the
    // textContent() method to get the text of the button.
    const basicForm = page.locator('nb-card').filter({hasText: "Basic form"});
    const buttonText = await basicForm.locator('button').textContent();
    // The text of the button should be "Submit".
    expect(buttonText).toEqual('Submit');

    // Next, we want to get all of the text values of the radio buttons on the
    // page. We can do this by using the allTextContents() method on the
    // locator for all of the radio buttons.
    const allRadioButtonLabels = await page.locator('nb-radio').allTextContents();
    // The array of text content should contain the string "Option 1".
    expect(allRadioButtonLabels).toContain("Option 1");

    // Next, we want to get the value of the text input with the name "Email".
    // We can do this by using the getByRole method to find the text input,
    // and then using the inputValue() method to get the value of the input.
    const emailinput = basicForm.getByRole('textbox', {name: 'Email'});
    // First, we want to set the value of the input to "test@test.com".
    await emailinput.fill('test@test.com');
    // Then we want to verify that the value of the input is "test@test.com".
    const emailValue = await emailinput.inputValue();
    expect(emailValue).toEqual('test@test.com');

    // Finally, we want to get the value of the "placeholder" attribute of the
    // text input with the name "Email". We can do this by using the
    // getAttribute() method.
    const placeholderValue = await emailinput.getAttribute('placeholder');
    // The value of the placeholder attribute should be "Email".
    expect(placeholderValue).toEqual('Email');

})