import {expect, test} from '@playwright/test'
import { PageManager } from '../page-Objects/pageManager'


// The beforeEach function is a special function provided by Playwright.
// It will be called before each test is run, and it's a good place to put
// setup code that needs to run before each test.
test.beforeEach(async ({page}) => {
  // The page object represents the browser page that we're interacting with.
  // We're going to navigate to the root of the site.
 
  await page.goto('http://localhost:4200/')
})

test("navigate to form Page", async ({page}) => {
  const pm = new PageManager(page)

  await pm.navigateTo().formsLayoutsPage()
  await pm.navigateTo().datepickerPage()
  await pm.navigateTo().smartTablePage()
  await pm.navigateTo().toastPage()
  await pm.navigateTo().tooltipPage()

})

test("parameterised methods", async ({page}) => {
 const pm = new PageManager(page)

await pm.navigateTo().formsLayoutsPage()
await pm.onFormsLayoutsPage().submitUsingTheGrigFormWithCredentialsAndSelectOptions("hendo@aboh.com", "password123", "Option 2")
await pm.onFormsLayoutsPage().submitInlineFormWithNameEmailAndCheckBox("hendo Smith", "hendo@aboh.com", false)
await pm.navigateTo().datepickerPage()
await pm.onDatePickerPage().selectCommonDatePickerFromToday(6)
await pm.onDatePickerPage().selectDatePickerWithRange(5, 25)



})




