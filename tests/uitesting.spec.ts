import { test, expect } from '@playwright/test';
const BASE_URL = "http://uitestingplayground.com/"

test('test', async ({ page }) => {
  await page.goto(BASE_URL);
	await page.click(".blockquote-footer")

  await page.click("a[href='/resources']");
  await expect(page).toHaveURL(BASE_URL + "resources")

  await page.goBack();
	await expect(page).toHaveURL(BASE_URL)

  await page.click("a[href='/click']");
	await expect(page).toHaveURL(BASE_URL + "click")

	const btn = page.locator("id=badButton")
  await btn.click();
	await expect(btn).toHaveClass("btn btn-success")
});