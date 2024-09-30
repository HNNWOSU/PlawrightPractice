// This block of code is a Playwright test, which is a type of end-to-end test
// that automates a web browser and verifies the behavior of a web application.
import {test} from '@playwright/test';

// This is a "before each" block, which means it will run before each of the tests
// defined below.  It sets up the browser so that it is in a known state before
// each test.
test.beforeEach(async ({page}) => {
  // Go to the root of the web site.
  await page.goto('http://localhost:4200/');

  // Click on the link that says "Forms".
  await page.getByText('Forms').click();
});

// This is the first test.  It verifies that we can navigate to the "Form Layout"
// page.
test ('the first Test', async ({page}) => {
  // Click on the link that says "Form Layout".
  await page.getByText('Form Layout').click()
});

// This is the second test.  It verifies that we can navigate to the "Datepicker"
// page.
test ('Navigate to Date Picker Page', async ({page}) => {
  // Click on the link that says "Datepicker".
  await page.getByText('Datepicker').click()
})
