import { test, expect } from '@playwright/test';

test('Test codegen', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by Testers Talk');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  await page.locator('#movie_player video').click();
  await page.locator('#movie_player video').click();
  await page.locator('#movie_player video').click();
  await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
});