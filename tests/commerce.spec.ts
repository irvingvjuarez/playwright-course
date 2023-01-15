import { test, expect } from "@playwright/test"
const BASE_URL = "https://automationexercise.com/"


test.beforeEach(async ({ page }) => {
	await page.goto(BASE_URL)
})

test.describe("Testing e-commerce page", () => {
	test("Scroll down to see the products", async ({ page }) => {
		await page.mouse.wheel(0, 500)
		const firstProductCard = page.locator("#cartModal + .col-sm-4 .single-products")

		await firstProductCard.hover()

		const cardOverlay = page.locator("#cartModal + .col-sm-4 .product-overlay")
		await expect(cardOverlay).toBeVisible()


	})
})