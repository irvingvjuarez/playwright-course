import { test, expect } from "@playwright/test";

test.only("Example test", async ({ page }) => {
	await page.goto("https://platzi.com")

	await page.waitForSelector("#Header-v2")

	const header = page.locator("#Header-v2")
	const firstChild = header.locator("nav")

	await expect(firstChild).toHaveClass(/Nav-header/)
})