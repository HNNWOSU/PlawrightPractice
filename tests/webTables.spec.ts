
/**
 * This test is for the Smart Table component.
 */
import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
 /**
  * beforeEach is a special function provided by Playwright.
  * It will be called before each test is run, and it's a good place to put
  * setup code that needs to run before each test.
  */
 /**
  * We're going to navigate to the root of the site.
  */
 await page.goto('http://localhost:4200/');
})

  test('web Tables1', async ({page}) => {

    /**
     * We're going to click on the link that says "Tables & data". We can do this
     * by using the getByText method, which will search the page for an element
     * with the text "Tables & data".
     */
    await page.getByText('Tables & data').click()
    /**
     * Next, we want to click on the link that says "Smart Table". Again, we can do this
     * by using the getByText method.
     */
    await page.getByText('Smart Table').click()

    /**
     * How to get the rows by any text in the row
     */
    const targetRow = page.getByRole('row', {name: 'snow@gmail.com'})
    /**
     * Click on the edit button in the row
     */
    await targetRow.locator('.nb-edit').click()
    /**
     * Clear the value in the age column
     */
    await page.locator('input-editor').getByPlaceholder("Age").clear()
    /**
     * Set the value of the age column to "30"
     */
    await page.locator('input-editor').getByPlaceholder("Age").fill("30")
    /**
     * Click on the save button to save the changes
     */
    await page.locator('.nb-checkmark').click()

    /**
     * How to get a row based on the value in a specific column
     */
    /**
     * Click on the second page in the pagination
     */
    await page.locator('.ng2-smart-pagination-nav').getByText("2").click()
    /**
     * Get the row with the id 11 in the table
     */
    const targetRowByID = page.getByRole('row', {name: '11'}).filter({has: page.locator('td').nth(1).getByText('11')})
    /**
     * Click on the edit button in the row
     */
    await targetRowByID.locator('.nb-edit').click()
    /**
     * Clear the value in the e-mail column
     */
    await page.locator('input-editor').getByPlaceholder("E-mail").clear()
    /**
     * Set the value of the e-mail column to "okoroJuniour@gmail"
     */
    await page.locator('input-editor').getByPlaceholder("E-mail").fill("okoroJuniour@gmail")
    /**
     * Click on the save button to save the changes
     */
    await page.locator('.nb-checkmark').click()
    /**
     * Verify that the e-mail column now has the value "okoroJuniour@gmail"
     */
    await expect(targetRowByID.locator("td").nth(5)).toContainText("okoroJuniour@gmail")

    /**
     * Test Filter of the table
     */
    /**
     * Use an array of ages to test the filter
     */
    const ages = ['20', '30', '40', '48', '19','32', '25','200']

    for (let age of ages) {
      /**
       * Clear the filter input
       */
      await page.locator('input-filter').getByPlaceholder("Age").clear()
      /**
       * Fill the filter input with the current age
       */
      await page.locator('input-filter').getByPlaceholder("Age").fill(age)
      /**
       * Wait for the table to reload
       */
      await page.waitForTimeout(500)
      /**
       * Get all the rows in the table
       */
      const ageRows = page.locator('tbody tr')

      for(let row of await ageRows.all()) {
        /**
         * Get the value of the last cell in the row
         */
        const cellValue = await row.locator('td').last().textContent()
        /**
         * If the age is 200, then the table should have a "No data found" message
         */
        if (age == '200') {
          expect(await page.getByRole('table').textContent()).toContain("No data found")

        } else {
          /**
           * Otherwise, the value of the last cell should be equal to the age
           */
          expect(cellValue).toContain(age)
        }

         }
         }
            
  })
