/**
 * This file contains a class that represents a page object for the navigation
 * page. Page objects are a pattern for making tests more readable and
 * maintainable by separating out the logic of the test from the logic of the
 * page.
 *
 * The class is called NavigationPage and has a constructor that takes a Page
 * object as a parameter. The Page object is a Playwright class that represents
 * a single tab in a browser.
 *
 * The class contains methods to navigate to different sections of the page.
 */
import { Page } from "@playwright/test"
import { HelperBase } from "./helperBase";

export class NavigationPage extends HelperBase {

    /**
     * The Page object that represents the page we're navigating.
     */
   
    /**
     * The constructor takes a Page object and assigns it to the page property.
     * This is essential for interacting with the browser page within the class.
     *
     * @param page - The Page object that represents the page we're navigating.
     */
    constructor(page: Page) {
        // Assign the passed Page object to the class's page property.
        super(page); 
    }

    /**
     * Navigates to the page that has the form layouts examples.
     * This is achieved by clicking on the "Forms" link, followed by the "Form Layout" link.
     */
    async formsLayoutsPage() {
        // Ensure the "Forms" group is expanded before clicking the "Form Layout" link.
        await this.selectGroupMenuItem('Forms');

        // Click on the "Form Layout" link to navigate to the form layouts examples page.
        await this.page.getByText("Form Layout").click();
        await this.waitForNumberOfSeconds(2)
    }

    /**
     * Navigates to the page that has the datepicker examples.
     * This method first ensures the "Forms" group is expanded and then clicks the "Datepicker" link.
     */
    async datepickerPage() {
        // Ensure the "Forms" group is expanded.
        await this.selectGroupMenuItem('Forms');

        // Click on the "Datepicker" link to navigate to the datepicker examples page.
        await this.page.getByText('Datepicker').click();
    }

    /**
     * Navigates to the page that has the smart table examples.
     * This is done by expanding the "Tables & data" group and clicking the "Smart Table" link.
     */
    async smartTablePage() {
        // Ensure the "Tables & data" group is expanded.
        await this.selectGroupMenuItem('Tables & data');

        // Click on the "Smart Table" link to navigate to the smart table examples page.
        await this.page.getByText('Smart Table').click();
    }

    /**
     * Navigates to the page that has the toast examples.
     * The method expands the "Modal & Overlays" group and clicks the "Toastr" link.
     */
    async toastPage() {
        // Ensure the "Modal & Overlays" group is expanded.
        await this.selectGroupMenuItem('Modal & Overlays');

        // Click on the "Toastr" link to navigate to the toast examples page.
        await this.page.getByText('Toastr').click();
    }

    /**
     * Navigates to the page that has the tooltip examples.
     * It ensures the "Modal & Overlays" group is expanded and then clicks the "Tooltip" link.
     */
    async tooltipPage() {
        // Ensure the "Modal & Overlays" group is expanded.
        await this.selectGroupMenuItem('Modal & Overlays');

        // Click on the "Tooltip" link to navigate to the tooltip examples page.
        await this.page.getByText('Tooltip').click();
    }

    /**
     * A helper method that clicks on a group menu item if it is not already expanded.
     * This method takes the title of the group menu item and interacts with its expanded state.
     *
     * @param groupItemTitle - The title of the group menu item we want to expand.
     */
    private async selectGroupMenuItem(groupItemTitle: string) {
        // Get the Locator object for the group menu item by its title.
        const groupItem = this.page.getByTitle(groupItemTitle);

        // Get the current expanded state of the group menu item.
        const expandedState = await groupItem.getAttribute('aria-expanded');

        // If the group menu item is not expanded, click it to expand.
        if (expandedState === 'false') {
            await groupItem.click();
        }
    }
}

