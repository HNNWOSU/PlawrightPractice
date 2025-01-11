/**
 * This class represents a page object for the navigation page. Page objects
 * are a pattern for making tests more readable and maintainable by
 * separating out the logic of the test from the logic of the page.
 *
 * The class is called NavigationPage and has a constructor that takes a Page
 * object as a parameter. The Page object is a Playwright class that represents
 * a single tab in a browser.
 *
 * The class has one method, formsLayoutsPage. This method is a page object
 * method that navigates to the page that has the form layouts examples.
 */
import { Locator, Page } from "@playwright/test";

export class NavigationPage1 {

    /**
     * The Page object that represents the page we're navigating.
     *
     * This is the object that you would call methods like `goto` and `click` on
     * to interact with the page.
     */
        readonly page: Page;

    /**
     * A Locator object that represents an element on the page that we want to
     * interact with.
     *
     * In this case, the element is a link with the text "Form Layout".
     */
        readonly formsLayoutLink: Locator;

    /**
     * A Locator object that represents an element on the page that we want to
     * interact with.
     *
     * In this case, the element is a link with the text "Datepicker".
     */
        readonly datePickerLink: Locator;

    /**
     * A Locator object that represents an element on the page that we want to
     * interact with.
     *
     * In this case, the element is a link with the text "Smart Table".
     */
        readonly smartTableLink: Locator;

    /**
     * A Locator object that represents an element on the page that we want to
     * interact with.
     *
     * In this case, the element is a link with the text "Toastr".
     */
        readonly toastLink: Locator;

    /**
     * A Locator object that represents an element on the page that we want to
     * interact with.
     *
     * In this case, the element is a link with the text "Tooltip".
     */
        readonly tooltipLink: Locator;

    /**
     * The constructor takes a Page object and assigns it to the page property.
     *
     * @param page - The Page object that represents the page we're navigating.
     */
    constructor(page: Page) {
        this.page = page;

        // Create Locator objects for the elements we want to interact with.
        this.formsLayoutLink = page.getByText("Form Layout")
        this.datePickerLink = page.getByText('Datepicker')
        this.smartTableLink = page.getByText('Smart Table')
        this.toastLink = page.getByText('Toastr')
        this.tooltipLink = page.getByText('Tooltip')
    }

    /**
     * This method navigates to the page that has the form layouts examples.
     *
     * It does this by clicking on the "Forms" link, which takes you to the
     * "Form Layout" page.
     */
    async formsLayoutsPage() {
        // Click on the "Forms" link, which takes you to the "Form Layout" page.
        // This is done by calling the `click` method on the Locator object that
        // represents the link.
            await this.selectGroupMenuItem('Forms')

        // Click on the "Form Layout" link, which takes you to the page that has
        // the form layouts examples.
        // This is done by calling the `click` method on the Locator object that
        // represents the link.
            await this.formsLayoutLink.click();
    }

    /**
     * This method navigates to the page that has the datepicker examples.
     *
     * It does this by first clicking on the "Forms" link, which takes you to the
     * page that has the datepicker examples.
     */
    async datepickerPage() {
        await this.selectGroupMenuItem('Forms')
        await this.datePickerLink.click()
   
}

    /**
     * This method navigates to the page that has the smart table examples.
     *
     * It does this by clicking on the "Tables & data" link, which takes you to
     * the page that has the smart table examples.
     */
    async smartTablePage() {
        await this.selectGroupMenuItem('Tables & data')
        await this.smartTableLink.click()
    
    }

    /**
     * This method navigates to the page that has the toast examples.
     *
     * It does this by clicking on the "Modal & Overlays" link, which takes you
     * to the page that has the toast examples.
     */
    async toastPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.toastLink.click()
    }

    /**
     * This method navigates to the page that has the tooltip examples.
     *
     * It does this by clicking on the "Modal & Overlays" link, which takes you
     * to the page that has the tooltip examples.
     */
    async tooltipPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.tooltipLink.click()
 
  }

  /**
   * This method is a helper method that clicks on a group menu item if it is
   * not already expanded.
   *
   * It takes a string parameter, `groupItemTitle`, which is the title of the
   * group menu item that we want to click on.
   *
   * It first gets the Locator object for the group menu item by calling the
   * `getByText` method on the Page object, passing in the `groupItemTitle`
   * parameter.
   *
   * It then gets the current expanded state of the group menu item by calling
   * the `getAttribute` method on the Locator object, passing in the string
   * `'aria-expanded'`.
   *
   * If the expanded state is `'false'`, it calls the `click` method on the
   * Locator object to expand the group menu item.
   */
  private async selectGroupMenuItem(groupItemTitle: string) {

    const groupItem = this.page.getByTitle(groupItemTitle )
    const expandedState = await groupItem.getAttribute('aria-expanded')

    if (expandedState === 'false') {
      await groupItem.click()
  }
  }
}