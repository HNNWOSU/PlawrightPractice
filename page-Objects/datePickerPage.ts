import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class DatePickerPage extends HelperBase {
   
    constructor(page: Page) {
        super(page);
    }

    async selectCommonDatePickerFromToday(numbeOfDaysFromToday: number) {
        const calendarInputField = this.page.getByPlaceholder('Form Picker');
        await calendarInputField.click();
        const dateToAssert = await this.selectDateInCalendar(numbeOfDaysFromToday, false);
        await expect(calendarInputField).toHaveValue(dateToAssert);
    }

    async selectDatePickerWithRange(startDayFromToday: number, endDayFromToday: number) {
        const calendarInputField = this.page.getByPlaceholder('Range Picker');
        await calendarInputField.click();
        const startDateToAssert = await this.selectDateInCalendar(startDayFromToday, true);
        const endDateToAssert = await this.selectDateInCalendar(endDayFromToday, true);
        const dateToAssert = `${startDateToAssert} - ${endDateToAssert}`;
        await expect(calendarInputField).toHaveValue(dateToAssert);
    }

    private async selectDateInCalendar(numbeOfDaysFromToday: number, isRangeCalendar: boolean) {
        let date = new Date();
        date.setDate(date.getDate() + numbeOfDaysFromToday);
        const expectedDate = date.getDate().toString();
        const expectedMonthShort = date.toLocaleString('en-GB', {month: 'short'});
        const expectedMonthLong = date.toLocaleString('en-GB', {month: 'long'});
        const expectedYear = date.getFullYear();
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;

        let calendarMonth = await this.page.locator('nb-calendar-view-mode').textContent();
        const expectedMonthandYear = `${expectedMonthLong} ${expectedYear}`;
        while (!calendarMonth.includes(expectedMonthandYear)) {
            await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click();
            calendarMonth = await this.page.locator('nb-calendar-view-mode').textContent();
        }

        // Use different selectors based on calendar type
        const selector = isRangeCalendar ? 
        'nb-calendar-range-day-cell.range-cell.day-cell' : 
        'nb-calendar-day-cell.day-cell:not(.range-cell)';

    if (isRangeCalendar) {
        await this.page
            .locator('nb-calendar-range-day-cell')
            .filter({ hasText: expectedDate })
            .first()
            .click();
    } else {
        await this.page
            .locator('nb-calendar-day-cell:not(.range-cell)')
            .filter({ hasText: expectedDate })
            .first()
            .click();
    }

    return dateToAssert;
    }
}