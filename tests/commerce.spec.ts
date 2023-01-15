import { test, expect } from "@playwright/test"
const BASE_URL = "https://automationexercise.com/"


test.beforeEach(async ({ page }) => {
	await page.goto(BASE_URL)
})

test.describe("Testing e-commerce page", () => {
	test("Challenge steps", async ({ page }) => {
		await page.mouse.wheel(0, 500)

		const firstProductCard = page.locator("#cartModal + .col-sm-4 .single-products")
		await firstProductCard.hover()

		const cardOverlay = page.locator("#cartModal + .col-sm-4 .product-overlay")
		const cardOverlayDisplayAttribute = await cardOverlay.evaluate((e) =>
			window.getComputedStyle((e as HTMLDivElement)).display
		)
		// await expect(cardOverlay).toBeVisible()
		await expect(cardOverlayDisplayAttribute).toBe("block")

		const addToCartBtn = page.locator("#cartModal + .col-sm-4 .overlay-content > a.add-to-cart")
		await addToCartBtn.click()

		const modal = page.locator("#cartModal")
		await expect(modal).toHaveClass(/show/)

		const modalTitle = page.locator(".modal-content .modal-title")
		await expect(modalTitle).toHaveText("Added!")

		await page.click("button[data-dismiss='modal']")
		await expect(modal).toHaveClass(/fade/)
	})
})