import {Page, Expect} from '@playwright/test'
import { NavigationPage } from './navigationPage'
import { FormsLayoutsPage } from './formsLayoutsPage'
import { DatePickerPage } from './datePickerPage'

export class PageManager {

    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly formsLayoutsPage: FormsLayoutsPage
    private readonly datePickerPage: DatePickerPage

    constructor(page: Page) {
        this.page = page
        this.navigationPage = new NavigationPage(this.page)
        this.formsLayoutsPage = new FormsLayoutsPage(this.page)
        this.datePickerPage = new DatePickerPage(this.page)
    }

navigateTo(){
    return this.navigationPage
}

onFormsLayoutsPage(){
    return this.formsLayoutsPage
}

onDatePickerPage(){
    return this.datePickerPage
}
}