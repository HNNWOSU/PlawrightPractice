
/**
 * This test suite is to test the dialog box on the nebulr ui component page.
 * The test suite will test the following:
 * - Navigate to the root of the nebulr ui component page.
 * - Click on the "Tables & data" and then "Smart Table" link.
 * - Trigger the dialog box to appear.
 * - Verify that the dialog box has the correct message.
 * - Verify that the dialog box can be accepted.
 * - Verify that the row is deleted from the table.
 */
import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
 /**
  * beforeEach is a special function provided by Playwright.
  * It will be called before each test is run, and it's a good place to put
  * setup code that needs to run before each test.
  */
 /*
  * Navigate to the root of the nebulr ui component page.
  */
 await page.goto('http://localhost:4200/');
})
 

  test('dialogBox', async ({page}) => {
  /*
   * Navigate to the "Smart Table" page.
   */
  await page.getByText('Tables & data').click()
  await page.getByText('Smart Table').click()

  /*
   * Trigger the dialog box to appear.
   */
  page.on("dialog", dialog => {
    /*
     * Verify that the dialog box has the correct message.
     */
    expect(dialog.message()).toEqual("Are you sure you want to delete?")

    /*
     * Verify that the dialog box can be accepted.
     */
    dialog.accept()
  })

  /*
   * Trigger the dialog box to appear by clicking on the delete button.
   */
  await page.getByRole('table').locator('tr', {hasText: 'mdo@gmail.com'}).locator('.nb-trash').click()

  /*
   * Verify that the row is deleted from the table.
   */
  await expect(page.locator('table tr').first()).not.toHaveText("mdo@gmail.com")
    
  })
