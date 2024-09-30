import {test} from '@playwright/test';

// Playwright lets us write tests for our webpages.
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
});

// This is the test itself. It's a function that Playwright will call to run
// the test.
test('locator syntax rules', async ({page}) => {

  // This is a test of the syntax for locating elements in Playwright.
  // The first example is of locating an element by its tag name.
  page.locator('input');

  // The second example is of locating an element by its ID.
  page.locator('#inputEmail1');

  // The third example is of locating an element by its class.
  // The class is on the element itself, and is not inherited from a parent.
  page.locator('.shape-rectangle');

  // The fourth example is of locating an element by an attribute.
  // The attribute is on the element itself, and is not inherited from a parent.
  page.locator('[placeholder="Email"]');

  // The fifth example is of locating an element by its full class value.
  // This is the class attribute on the element itself, including all the classes
  // that are on the element.
  page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]');

  // The sixth example is of combining multiple selectors.
  // The first selector is the tag name, the second selector is the placeholder attribute,
  // and the third selector is the nbinput attribute.
  page.locator('input[placeholder="Email"] [nbinput]');

  // The seventh example is of locating an element by its xpath.
  // This is not recommended by Playwright, because it's slower than the other
  // methods. The other methods are faster because they use the browser's built-in
  // functionality for locating elements.
  page.locator('//*[@id="inputEmail1"]');

  // The eighth example is of locating an element by a partial match of its text.
  // This means that the element must contain the text that we're searching for,
  // but it doesn't have to be an exact match.
  page.locator(':text("Using")');

  // The ninth example is of locating an element by an exact match of its text.
  // This means that the element must contain exactly the text that we're searching
  // for, without any extra characters.
  page.locator(':text-is("Using the Grid")');
})