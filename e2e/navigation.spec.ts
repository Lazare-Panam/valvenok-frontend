import { test, expect } from "@playwright/test";

/**
 * Click-through: header nav links land on the expected route, logo returns
 * home. Uses .first() since footer repeats some link texts (navbar is first in
 * the DOM).
 */
const NAV = [
  { name: "About Us", url: /\/about$/ },
  { name: "News & Blog", url: /\/news$/ },
  { name: "Brands", url: /\/brands$/ },
  { name: "Contact Us", url: /\/contact$/ },
];

test.describe("Header navigation", () => {
  for (const item of NAV) {
    test(`nav "${item.name}" navigates`, async ({ page }) => {
      await page.goto("/");
      await page.getByRole("link", { name: item.name, exact: true }).first().click();
      await expect(page).toHaveURL(item.url);
    });
  }

  test("logo returns home", async ({ page }) => {
    await page.goto("/about");
    await page.locator('a[href="/"]').first().click();
    await expect(page).toHaveURL(/localhost:6173\/$/);
  });
});
