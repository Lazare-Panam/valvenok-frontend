import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright config for click/link smoke tests.
 *
 * `webServer` auto-starts the app (dev runs on :6173) before the tests and
 * shuts it down after, so `npm run test:e2e` is all you need. It reuses an
 * already-running dev server if one is up (kill any stale one first).
 *
 * Product/category pages fetch from the live backend, so the machine running
 * these tests needs network access.
 */
const BASE_URL = "http://localhost:6173";

export default defineConfig({
  testDir: "./e2e",
  timeout: 60_000,
  expect: { timeout: 15_000 },
  fullyParallel: true,
  // Cap workers so the single dev server isn't saturated (on-demand route
  // compilation under heavy parallelism causes spurious timeouts).
  workers: process.env.CI ? 2 : 3,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: BASE_URL,
    viewport: { width: 1280, height: 800 }, // desktop: mega-menu nav is visible
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "npm run dev",
    url: BASE_URL,
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
  },
});
