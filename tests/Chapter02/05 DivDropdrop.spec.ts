import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
 
await page.locator('#comboBox').click();

await expect(page.locator('#dropdown')).toBeVisible();

await page.locator('#dropdown .option').nth(1).click();

});


