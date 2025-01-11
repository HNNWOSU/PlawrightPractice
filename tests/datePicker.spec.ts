import { test, expect } from '@playwright/test';

/**
 * The beforeEach function is a special function provided by Playwright.
 * It will be called before each test is run, and it's a good place to put
 * setup code that needs to run before each test.
 */
test.beforeEach( async ({page}) => {
  /**
   * This line of code navigates to the root of the site.
   * It's a good place to start if you want to make sure that the page
   * is in a known state before each test.
   */
  await page.goto('http://localhost:4200/');

  /**
   * This line of code clicks on the link that says "Forms". We can do this
   * by using the getByText method, which will search the page for an element
   * with the text "Forms".
   */
  await page.getByText('Forms').click();

  /**
   * This line of code clicks on the link that says "Datepicker". Again, we can do this
   * by using the getByText method, which will search the page for an element
   * with the text "Datepicker".
   */
  await page.getByText('Datepicker').click()
})

/**
 * This is the test itself. It's a function that Playwright will call to run
 * the test.
 */
test('datepicker', async ({page}) => {
  /**
   * This line of code gets the calendar input field. We can do this by using the
   * getByPlaceholder method, which will search the page for an element with
   * the placeholder text "Form Picker".
   */
  const calendarInputField = page.getByPlaceholder('Form Picker');

  /**
   * This line of code clicks on the calendar input field. This will cause the
   * calendar to appear.
   */
  await calendarInputField.click();

  /**
   * This line of code creates a new date object. We're going to use this to create
   * a date that is 500 days in the future.
   */
  let date = new Date();

  /**
   * This line of code sets the date to 500 days in the future.
   */
  date.setDate(date.getDate() + 500);

  /**
   * This line of code extracts the date, month, and year from the date object.
   * We're going to use these to construct a string that we can verify appears
   * in the input field.
   */
  const expectedDate = date.getDate().toString();
  const expectedMonthShort = date.toLocaleString('en-GB', {month: 'short'});
  const expectedMonthLong = date.toLocaleString('en-GB', {month: 'long'});
  const expectedYear = date.getFullYear();

  /**
   * This line of code constructs the string that we're going to verify appears
   * in the input field.
   */
  const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;

  /**
   * This line of code gets the current month that is displayed in the calendar.
   * We're going to use this to determine how many times we need to click the
   * "next" button to advance the calendar to the month that we want to test.
   */
  let calendarMonth = await page.locator ('nb-calendar-view-mode').textContent();

  /**
   * This line of code constructs the string that we're going to look for in the
   * calendar.
   */
  const expectedMonthandYear = `${expectedMonthLong} ${expectedYear}`;

  /**
   * This while loop will run until the calendar is showing the month that we
   * want to test.
   */
  while (!calendarMonth.includes(expectedMonthandYear)){ 
    /**
     * This line of code clicks on the "next" button in the calendar.
     */
    await page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click() // while (calendarMonth)

    /**
     * This line of code gets the current month that is displayed in the calendar.
     * We're going to use this to determine when we can exit the loop.
     */
    calendarMonth = await page.locator ('nb-calendar-view-mode').textContent();
  }

  /**
   * This line of code clicks on the day cell that has the date that we want to
   * test.
   */
  await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate, {exact: true}).click();

  /**
   * This line of code verifies that the input field has the expected date.
   */
  await expect(calendarInputField).toHaveValue(dateToAssert);

})