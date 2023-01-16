import { test, expect } from "@playwright/test"

const BASE_URL = "http://uitestingplayground.com/"

test.beforeEach(async ({ page }) => {
	await page.goto(BASE_URL + "textinput")
})

test.describe("Using assertions", () => {
	test("Expect", async ({ page }) => {
		const contentText = "Juárez"
		await page.type("input.form-control", contentText)

		await page.pause()

		const changingBtn = page.locator("#updatingButton")
		await changingBtn.click()
		await expect(changingBtn).toHaveText(contentText)
	})
})