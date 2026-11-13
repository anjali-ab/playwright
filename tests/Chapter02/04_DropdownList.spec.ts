import { test, expect } from '@playwright/test';

test('Handling dropdown list in Playwright', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  //await page.getByLabel('aria-label', { exact: true }).click();
  await page.getByLabel('Create new account')

});
 