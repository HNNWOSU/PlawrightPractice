
/**
 * This test suite is to test the lists and dropdowns on the nebulr ui component page.
 * The test suite will test the following:
 * - Checkboxes: Check that checkboxes can be checked and unchecked.
 * - Lists: Check that the list of options can be accessed and clicked.
 * - Dropdown: Check that the dropdown menu can be opened and the options can be selected.
 * - Dropdown colours: Check that the dropdown menu can be opened and the options can be selected and the header will change to the corresponding colour.
 */
import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
 /**
  * beforeEach is a special function provided by Playwright.
  * It will be called before each test is run, and it's a good place to put
  * setup code that needs to run before each test.
  */
 await page.goto('http://localhost:4200/');
})
 
/**
 * This test is to test the checkboxes on the page.
 */
test("Checkboxes", async ({page}) => {

  /**
   * Click on the "Modal & Overlays" link.
   */
  await page.getByText('Modal & Overlays').click()
  /**
   * Click on the "Toastr" link.
   */
  await page.getByText('Toastr').click()
  /**
   * Check the checkbox with the name "Hide on click".
   */
  await page.getByRole("checkbox", {name: "Hide on click"}).check({force: true})
  /**
   * Uncheck the checkbox with the name "Hide on click".
   */
  await page.getByRole("checkbox", {name: "Hide on click"}).uncheck({force: true})
  /**
   * Check the checkbox with the name "Prevent arising of duplicate toast".
   */
  await page.getByRole("checkbox", {name: "Prevent arising of duplicate toast"}).check({force: true})

  /**
   * Get all the checkboxes on the page.
   */
  const allBoxes = page.getByRole("checkbox")
  /**
   * Loop through all the checkboxes and make sure they are unchecked.
   */
  for (const box of await allBoxes.all()) {
    /**
     * Uncheck the checkbox.
     */
    await box.uncheck({force: true})
    /**
     * Make sure the checkbox is unchecked.
     */
    expect (await box.isChecked()).toBeFalsy()
  }
  });

  /**
   * This test is to test the lists and dropdowns on the page.
   */
  test("lists and dropdowns", async ({page}) => {

    /**
     * Get the dropdown menu.
     */
    const dropDownMenu = page.locator('.status-primary rect')
    /**
     * Click on the dropdown menu.
     */
    await dropDownMenu.click()

    /**
     * Get the list of options.
     */
    page.getByRole('list') // When the list has a UL Tag
    page.getByRole("listitem") // When the list has a LI Tag

    /**
     * Get the list of options.
     */
    //const optionList = page.getByRole('list').locator('nb-option')
    const optionsList2 = page.locator('nb-option-list nb-option')
    /**
     * Make sure the list of options have the text ["Light", "Dark", "Cosmic", "Corporate"].
     */
    await expect(optionsList2).toHaveText(["Light", "Dark", "Cosmic", "Corporate"])
    /**
     * Click on the option with the text "Dark".
     */
    await optionsList2.filter({hasText: 'Dark'}).click()
    /**
     * Get the header.
     */
    const header = page.locator('nb-layout-header')
    /**
     * Make sure the header has the background colour "rgb(34, 43, 69)".
     */
    await expect(header).toHaveCSS('background-color', 'rgb(34, 43, 69)')

    /**
     * This is an object that contains the different colours and their corresponding rgb values.
     */
    const colours = {
      'Light': 'rgb(255, 255, 255)',
      'Dark': 'rgb(34, 43, 69)',
      'Cosmic': 'rgb(50, 50, 89)',
      'Corporate': 'rgb(255, 255, 255)'
    }
    /**
     * Loop through the object and click on the corresponding option and check that the header has the corresponding colour.
     */
    await dropDownMenu.click()
    for(const color in colours) {
      /**
       * Click on the option with the text "color".
       */
      await optionsList2.filter({hasText: color}).click()
      /**
       * Make sure the header has the background colour "colours[color]"
       */
      await expect(header).toHaveCSS('background-color', colours[color])
      /**
       * If the colour is not "Corporate", click on the dropdown menu again.
       */
      if (color != 'Corporate') 
      await dropDownMenu.click()
    }

  })


