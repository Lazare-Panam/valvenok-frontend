import { test, expect } from "@playwright/test";

/**
 * Dead-page coverage. A representative set of top-level routes must render
 * (HTTP < 400, no visible Next error <h1>, real body text); an unknown URL
 * must 404; and the sitemap (394 URLs) is the exhaustive dead-page backbone —
 * we crawl a capped sample and assert each resolves.
 */
const ROUTES = [
  "/",
  "/about",
  "/contact",
  "/news",
  "/brands",
  "/categories",
  "/products",
  "/valves",
  "/valves/industrial-valves",
  "/valves/instrumentation-valves",
  "/high-pressure",
  "/actuators",
  "/fittings-tubing",
  "/dbb-manifolds",
  "/pumps-seals",
  "/instrumentation",
  "/pneumatic",
  "/hydrogen-cryogenic",
  "/filters-sight-glass",
  "/quality",
  "/delivery",
  "/terms",
  "/privacy",
  "/cookies",
  "/returns-policy",
  "/login",
  "/register",
  "/cart",
];

async function assertHealthy(path: string, page: import("@playwright/test").Page) {
  const res = await page.goto(path, { waitUntil: "domcontentloaded" });
  expect(res, `no response for ${path}`).not.toBeNull();
  expect(res!.status(), `${path} HTTP status`).toBeLessThan(400);

  // Next renders <h1 class="next-error-h1"> on 404/500. Match the element (not
  // the HTML string — the dev overlay embeds that class name everywhere).
  await expect(page.locator("h1.next-error-h1")).toBeHidden();
  const text = (await page.locator("body").innerText()).trim();
  expect(text.length, `${path} rendered no visible content`).toBeGreaterThan(100);
}

test.describe("Representative routes render (no dead pages)", () => {
  for (const path of ROUTES) {
    test(`renders ${path}`, async ({ page }) => {
      await assertHealthy(path, page);
    });
  }
});

test.describe("Error handling", () => {
  test("unknown URL returns a real 404", async ({ page }) => {
    const res = await page.goto("/this-page-does-not-exist-" + Date.now(), {
      waitUntil: "domcontentloaded",
    });
    expect(res).not.toBeNull();
    expect(res!.status()).toBe(404);
  });

  test("sitemap is reachable and valid", async ({ request }) => {
    const idx = await request.get("/sitemap.xml");
    expect(idx.status()).toBe(200);
    expect(await idx.text()).toContain("<?xml");
  });
});

test.describe("Sitemap URLs resolve", () => {
  const MAX = 150; // cap so runs stay reasonable; log what is skipped

  test("advertised URLs resolve (capped)", async ({ request }) => {
    const res = await request.get("/sitemap-0.xml");
    expect(res.status()).toBe(200);
    const xml = await res.text();

    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    expect(locs.length, "sitemap has URLs").toBeGreaterThan(0);

    const paths = locs.map((u) => {
      try {
        return new URL(u).pathname;
      } catch {
        return u;
      }
    });

    const toCheck = paths.slice(0, MAX);
    if (paths.length > MAX) {
      // eslint-disable-next-line no-console
      console.log(`sitemap: checking ${MAX} of ${paths.length} URLs (capped)`);
    }

    const broken: string[] = [];
    for (const p of toCheck) {
      const r = await request.get(p, { timeout: 20_000 });
      if (r.status() >= 400) broken.push(`${p} -> HTTP ${r.status()}`);
    }
    expect(broken, "broken sitemap URLs").toEqual([]);
  });
});
