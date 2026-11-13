import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('This will run before all tests');
});

test.beforeEach(async ( { page } ) => {
  console.log('This will run before each test');
  await page.goto('https://www.google.com/');
});

test.afterEach(async () => {
  console.log('This will run after each test');
});

test.afterAll(async () => {
  console.log('This will run after all tests');
});


test('Test 1', async ({ page }) => {
  // await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');

});



test('Test 2', async ({ page }) => {
  // await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('sauce');

});