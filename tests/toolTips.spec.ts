
/**
 * This test suite is to test the tooltips on the nebulr ui component page.
 * The test suite will test the following:
 * - Tooltips: Check that tooltips can be hovered over and the text will appear.
 */
import { test, expect } from '@playwright/test';

/**
 * beforeEach is a special function provided by Playwright.
 * It will be called before each test is run, and it's a good place to put
 * setup code that needs to run before each test.
 */
test.beforeEach( async ({page}) => {
  /**
   * Navigate to the root of the site.
   */
  await page.goto('http://localhost:4200/');
})
 

/**
 * This test is to test the tooltips on the page.
 */
test('tooltips', async ({page}) => {

  /**
   * Click on the "Modal & Overlays" link.
   */
  await page.getByText('Modal & Overlays').click()
  /**
   * Click on the "Tooltip" link.
   */
  await page.getByText('Tooltip').click()
 
  /**
   * Get the card with the text "Tooltip Placements".
   */
  const ToolTipCard = page.locator('nb-card', {hasText: 'Tooltip Placements'})
  /**
   * Hover over the button with the text "Top".
   */
  await ToolTipCard.getByRole('button', {name: 'Top'}).hover()

  /**
   * Get the tooltip element. This is usually created as standard practice when creating a tooltip.
   */
  page.getByRole('tooltip')
  /**
   * Get the text inside the tooltip element.
   */
  const tooltip = await page.locator('nb-tooltip').textContent()
  /**
   * Expect the text inside the tooltip element to contain the string "This is a tooltip".
   */
  expect (tooltip).toContain("This is a tooltip")
  
    
  })

