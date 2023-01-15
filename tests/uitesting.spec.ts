import { test, expect } from '@playwright/test';
const BASE_URL = "http://uitestingplayground.com/"

test('test', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.getByRole('link', { name: 'Resources' }).click();
  expect(page).toHaveURL(BASE_URL + "resources")

  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Click' }).click();
	expect(page).toHaveURL(BASE_URL + "click")

  await page.getByRole('button', { name: 'Button That Ignores DOM Click Event' }).click();
});