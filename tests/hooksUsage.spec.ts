import {test} from '@playwright/test';

// Run this beforeEach block before each test. The block navigates to the root of the site.
test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/')
})

// This is a test suite, which is a collection of tests. We'll call it 'suite1'.
test.describe('suite1', () => {
    // Run this beforeEach block before each test in suite1.
    test.beforeEach(async ({page}) => {
        // Click on the link that says "Forms".
        await page.getByText('Forms').click()
    })

    // This is a test that will run after beforeEach has been run. We'll call it 'test1'.
    test('test1', async ({page}) => {
        // Click on the link that says "Form Layout".
        await page.getByText('Form Layout').click()
    })

    // This is another test that will run after beforeEach has been run. We'll call it 'test2'.
    test('test2', async ({page}) => {
        // Click on the link that says "Datepicker".
        await page.getByText('Datepicker').click()
    })

    // This is a nested test suite, which is a collection of tests inside another suite.
    test.describe('suite2', () => {
        // Run this beforeEach block before each test in suite2.
        test.beforeEach(async ({page}) => {
            // Click on the link that says "Charts".
            await page.getByText('Charts').click()
        })
    
        // This is a test that will run after beforeEach has been run. We'll call it 'test4'.
        test('test4', async ({page}) => {
            // Click on the link that says "eCharts".
            await page.getByText('eCharts').click()
        })
     
    })
})
