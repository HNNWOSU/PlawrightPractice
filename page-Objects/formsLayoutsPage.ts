import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class FormsLayoutsPage extends HelperBase {

    constructor(page: Page) {
        super(page);
    }

    async submitUsingTheGrigFormWithCredentialsAndSelectOptions(email: string, password: string, optionText: string) {
const usingTheGridInputForm = this.page.locator('nb-card', {hasText: "Using the Grid"})
await usingTheGridInputForm.getByRole('textbox', { name: 'Email' }).fill(email)
await usingTheGridInputForm.getByRole('textbox', { name: 'Password' }).fill(password)
await usingTheGridInputForm.getByRole('radio', { name: optionText }).check({force: true})
await usingTheGridInputForm.getByRole('button').click()

    }
    /**
     * This method is used to submit the inline form
     * @param name - Should be first and last name
     * @param email - valid email for user
     * @param rememberMe true or false
     */

    async submitInlineFormWithNameEmailAndCheckBox(name: string, email: string, rememberMe: boolean) {
  // Implementation for submitInlineFormWithNameEmailAndCheckBox
const inLineForm = this.page.locator('nb-card', {hasText: "Inline form"})
await inLineForm.getByRole('textbox', { name: 'Jane Doe' }).fill(name)
await inLineForm.getByRole('textbox', { name: 'Email' }).fill(email)
if (rememberMe) {
    await inLineForm.getByRole('checkbox').check({force: true})
}
await inLineForm.getByRole("button").click()
}

}

