import {test, expect} from '@playwright/test';
import { FormsLayoutsPage } from '../page-Objects/formsLayoutsPage';
import { NavigationPage } from '../page-Objects/navigationPage';


// The beforeEach function is a special function provided by Playwright.
// It will be called before each test is run, and it's a good place to put
// setup code that needs to run before each test.
test.beforeEach(async ({page}) => {
  // The page object represents the browser page that we're interacting with.
  // We're going to navigate to the root of the site.
 
  await page.goto('http://localhost:4200/')
})


test("parameterised methods", async ({page}) => {
const navigateTo = new NavigationPage(page)
const onFormsLayoutsPage = new FormsLayoutsPage(page)


await navigateTo.formsLayoutsPage()
await onFormsLayoutsPage.submitUsingTheGrigFormWithCredentialsAndSelectOptions("hendo@aboh.com", "password123", "Option 2")
await onFormsLayoutsPage.submitInlineFormWithNameEmailAndCheckBox("hendo Smith", "hendo@aboh.com", false)


})