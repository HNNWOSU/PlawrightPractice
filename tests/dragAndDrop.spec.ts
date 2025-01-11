import {expect, test} from '@playwright/test';

// The beforeEach function is a special function provided by Playwright.
// It will be called before each test is run, and it's a good place to put
// setup code that needs to run before each test.
test('Drag and Drop', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');

  // Wait for and handle the specific consent dialog shown in the screenshot
  // We're using a try block here because the consent dialog might not be present
  // if it's already been handled (e.g. if you've already clicked "Consent" on the
  // page before running the test). If the consent dialog is not present, we
  // don't want the test to fail.
  try {
    // Wait for the consent button. The button is identified by the text "Consent",
    // which is the text of the button in the consent dialog.
    await page.waitForSelector('button:has-text("Consent")', { timeout: 5000 });

    // Click the consent button. This will cause the consent dialog to disappear.
    await page.click('button:has-text("Consent")');

    // Verify the popup is gone. This is just a sanity check to make sure the
    // consent dialog was actually handled.
    await page.waitForSelector('.cookie-consent-popup', { state: 'hidden', timeout: 5000 });
  } catch (error) {
    console.log('Cookie consent might have been handled already or not present');
  }

  // Now continue with your drag and drop test...
  // We're going to use Playwright's frameLocator to locate the iframe that
  // contains the Photo Manager. The frame is identified by its rel-title attribute,
  // which is "Photo Manager".
  const frame = page.frameLocator('[rel-title="Photo Manager"] iframe');

  // We're going to drag the first image (High Tatras 2) to the trash can.
  await frame.locator('li', {hasText: 'High Tatras 2'}).dragTo(frame.locator('#trash'))

  // And now we're going to drag the second image (High Tatras 4) to the trash can.
  // We're using the hover method to move the mouse over the element before starting
  // the drag.
  await frame.locator('li', {hasText: 'High Tatras 4'}).hover()
  await page.mouse.down()
  await frame.locator('#trash').hover()
  await page.mouse.up()

  // Verify that the images are in the trash can.
  await expect(frame.locator('#trash li h5')).toHaveText(["High Tatras 2", "High Tatras 4"])
});
