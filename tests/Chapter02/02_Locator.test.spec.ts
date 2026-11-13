// Import the necessary modules from Playwright
import { test, expect } from '@playwright/test';

// Define a test case for taking a screenshot
test('Locators in Playwright', async ({ page }) => {
// Navigate to the desired webpage
  await page.goto('https://github.com/signup?source=login');

  // By Role
  //await page.getByRole('link', { name: 'Sign in' }).click();

  // By Label
  //await page.getByLabel('Username or email address').fill('anjali');

  // By Image
  await page.getByAltText('GitHub Mascots Mona, Copilot, and a rubber duck floating together.').click();

  // By Placeholder

});
