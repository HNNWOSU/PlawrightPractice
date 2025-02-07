import { test, expect } from '@playwright/test';


test("Checkboxes", async ({page}) => {
 
 await page.goto('http://localhost:4200/');
    
  await page.getByText('Modal & Overlays').click()

  await page.getByText('Toastr').click()
  await page.getByRole("checkbox", {name: "Hide on click"}).check({force: true})
  await page.getByRole("checkbox", {name: "Hide on click"}).uncheck({force: true})
  await page.getByRole("checkbox", {name: "Prevent arising of duplicate toast"}).check({force: true})

  const allBoxes = page.getByRole("checkbox")
  for (const box of await allBoxes.all()) {
await box.uncheck({force: true})
expect (await box.isChecked()).toBeFalsy()
  }
  })
