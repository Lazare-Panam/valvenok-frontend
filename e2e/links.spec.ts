import { test, expect } from "@playwright/test";

/**
 * Link-integrity smoke test: for each seed page, collect internal links
 * (<a href="/...">) and assert each resolves (HTTP < 400). Deep dynamic detail
 * pages (/variants, /products/, category [id] detail) are numerous and slow;
 * they're covered comprehensively by the sitemap crawl in pages.spec, so the
 * crawler skips them and stays a fast structural check. Per-page checks are
 * capped (logged) so a hub page with hundreds of links can't hang the run.
 */
const SEED_PAGES = [
  "/",
  "/valves",
  "/high-pressure",
  "/actuators",
  "/fittings-tubing",
  "/hydrogen-cryogenic",
  "/brands",
  "/news",
  "/about",
];

const SKIP = ["/variants", "/products/"];
const MAX_PER_PAGE = 60;

for (const path of SEED_PAGES) {
  test(`internal links resolve on ${path}`, async ({ page, request }) => {
    await page.goto(path, { waitUntil: "domcontentloaded" });

    const hrefs = await page.$$eval('a[href^="/"]', (els) =>
      els.map((e) => e.getAttribute("href") || ""),
    );
    const all = [
      ...new Set(hrefs.map((h) => h.split("#")[0]).filter((h) => h.length > 0)),
    ].filter((h) => !SKIP.some((s) => h.includes(s)));

    expect(all.length, `no internal links found on ${path}`).toBeGreaterThan(0);

    const targets = all.slice(0, MAX_PER_PAGE);
    if (all.length > MAX_PER_PAGE) {
      // eslint-disable-next-line no-console
      console.log(`${path}: checking ${MAX_PER_PAGE} of ${all.length} links (capped)`);
    }

    const broken: string[] = [];
    for (const href of targets) {
      const res = await request.get(href, { timeout: 20_000 });
      if (res.status() >= 400) broken.push(`${href} -> HTTP ${res.status()}`);
    }
    expect(broken, `broken links found on ${path}`).toEqual([]);
  });
}
