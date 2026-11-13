import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1778077284176');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('sauce');
  await page.getByText('Sauce Labs').click();
  await page.getByRole('link', { name: 'Sauce Labs: Cross Browser' }).click();
});