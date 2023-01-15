import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://medium.com/');
  await page.getByRole('complementary').getByRole('link', { name: 'Technology' }).click();
  await page.getByPlaceholder('Search Medium').click();
  await page.getByPlaceholder('Search Medium').fill('counscious machines');
  await page.getByPlaceholder('Search Medium').press('Enter');
  // await page.locator('div:nth-child(24) > div').click();
  // await page.getByRole('link', { name: 'Deep Learning Is Going to Teach Us All the Lesson of Our Lives: Jobs Are for Machines' }).click();
});