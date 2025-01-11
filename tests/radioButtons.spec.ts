/* eslint-disable @typescript-eslint/no-unused-vars */
import {expect, test} from '@playwright/test'
import { delay } from 'rxjs-compat/operator/delay'

// The beforeEach function is a special function provided by Playwright.
// It will be called before each test is run, and it's a good place to put
// setup code that needs to run before each test.
test.beforeEach(async ({page}) => {
  // The page object represents the browser page that we're interacting with.
  // We're going to navigate to the root of the site.
  console.log("Navigating to the root of the site")
  await page.goto('http://localhost:4200/')
});

// This is a test suite, which is a collection of tests. We'll call it 'Forms Layouts Page'.
test.describe("Forms Layouts Page Suite", () => {
  // This beforeEach block will be run before each test in the suite.
  test.beforeEach(async ({page}) => {
    // Next, we want to click on the link that says "Forms". We can do this
  // by using the getByText method, which will search the page for an element
  // with the text "Forms".
  console.log("Clicking on the link that says 'Forms'")
  await page.getByText('Forms').click()

  // Now that we've clicked on the "Forms" link, we want to click on the
  // link that says "Form Layout". Again, we can do this by using the getByText
  // method.
  console.log("Clicking on the link that says 'Form Layout'")
  await page.getByText('Form Layout').click()
  });

  // This is a test that will run after beforeEach has been run. We'll call it 'input fields'.
  test("input fields", async ({page}) => {
      // We want to get the input field that is a child of the card that says "Using the Grid"
      // and has the role of 'textbox' and the name of 'Email'
      console.log("Getting the input field that is a child of the card that says 'Using the Grid'")
      const usingTheGridInputEmail = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: 'Email'})
      console.log("Using the Grid input field: " + usingTheGridInputEmail)

      // We want to fill the input field with 'test@test.com'
      console.log("Filling the input field with 'test@test.com'")
      await usingTheGridInputEmail.fill('test@test.com')

      // Next, we want to clear the input field
      console.log("Clearing the input field")
      await usingTheGridInputEmail.clear()

      // Now, we want to press the keys 'test2@test.com' sequentially
      console.log("Pressing the keys 'test2@test.com' sequentially")
      await usingTheGridInputEmail.pressSequentially('test2@test.com')

      // Next, we want to clear the input field again
      console.log("Clearing the input field again")
      await usingTheGridInputEmail.clear()

      // And finally, we want to press the keys 'test2@test.com' sequentially again, but with a delay of 500ms between each key press.
      console.log("Pressing the keys 'test2@test.com' sequentially again, with a delay of 500ms between each key press")
      await usingTheGridInputEmail.pressSequentially('test2@test.com', {delay: 500})


      //generic assertions
      console.log("Getting the value of the input field")
      const emailValue = await usingTheGridInputEmail.inputValue()
      console.log("The value of the input field is: " + emailValue)
      expect(emailValue).toEqual("test2@test.com")

      //locator assertions
      console.log("Verifying that the input field has the value 'test2@test.com'")
      await expect(usingTheGridInputEmail).toHaveValue('test2@test.com')
  })
//This is a tutorial on radio buttons
  test("radio buttons", async ({page}) => {
    // We want to get the card that says "Using the Grid"
    const usingTheGridForm = page.locator('nb-card', {hasText: "Using the Grid"})
    console.log("Got the card that says 'Using the Grid'")

    // We want to check the radio button with the name "Option 1"
    console.log("Checking the radio button with the name 'Option 1'")
    await usingTheGridForm.getByRole("radio", {name: "Option 1"}).check({force: true})
    console.log("The radio button with the name 'Option 1' has been checked")

    // Now, we want to verify that the radio button with the name "Option 1" is checked
    console.log("Verifying that the radio button with the name 'Option 1' is checked")
    const radioValue = await usingTheGridForm.getByRole("radio", {name: "Option 1"}).isChecked()
    console.log("The radio button with the name 'Option 1' is " + radioValue)
    expect(radioValue).toBeTruthy()
    console.log("Verified that the radio button with the name 'Option 1' is checked")

    // Next, we want to verify that the radio button with the name "Option 1" is checked using the `toBeChecked` method
    console.log("Verifying that the radio button with the name 'Option 1' is checked using the 'toBeChecked' method")
    await expect(usingTheGridForm.getByRole("radio", {name: "Option 1"})).toBeChecked()
    console.log("Verified that the radio button with the name 'Option 1' is checked using the 'toBeChecked' method")

    // Now, we want to check the radio button with the name "Option 2"
    console.log("Checking the radio button with the name 'Option 2'")
    await usingTheGridForm.getByRole("radio", {name: "Option 2"}).check({force: true})
    console.log("The radio button with the name 'Option 2' has been checked")

    // Next, we want to verify that the radio button with the name "Option 2" is checked
    console.log("Verifying that the radio button with the name 'Option 2' is checked")
    expect (await usingTheGridForm.getByRole("radio", {name: "Option 2"}).isChecked()).toBeTruthy()
    console.log("Verified that the radio button with the name 'Option 2' is checked")

    // Finally, we want to verify that the radio button with the name "Option 1" is not checked
    console.log("Verifying that the radio button with the name 'Option 1' is not checked")
    expect (await usingTheGridForm.getByRole("radio", {name: "Option 1"}).isChecked()).toBeFalsy()
    console.log("Verified that the radio button with the name 'Option 1' is not checked")
  })

})
