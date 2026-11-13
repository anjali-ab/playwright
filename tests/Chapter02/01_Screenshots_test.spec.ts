// Import the necessary modules from Playwright
import { test, expect } from '@playwright/test';

// Define a test case for taking a screenshot
test('Capture Screenshot', async ({ page }) => {
// Navigate to the desired webpage
  await page.goto('https://www.youtube.com/@testerstalk');

    // Element screenshot
    await page.locator('#page-header-container').screenshot({ path: './screenshots/element-screenshot.png' });

    //page screenshot
    await page.screenshot({ path: './screenshots/page-screenshot.png' });

    // Full page screenshot
    await page.screenshot({ path: './screenshots/full-page-screenshot.png', fullPage: true });
});
