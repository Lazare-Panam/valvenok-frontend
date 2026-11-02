# Valvenok website rules

Every page on valvenok.com follows these rules. When adding, moving or redesigning a page, check it against this list first.

---

## 1. Every product sits in exactly 4 levels

| Level | Name | What it is | Example | URL |
|---|---|---|---|---|
| 1 | **Category** | What kind of product | Valves | `/valves` |
| 2 | **Type** | The product type | Butterfly Valves | `/valves/butterfly-valves` |
| 3 | **Series** | One range from one brand | Centric (SIRCA) | `/valves/butterfly-valves/centric` |
| 4 | **Model** | Sizes and part numbers | Table on the series page | (no own URL, except shop SKUs) |

- **Never deeper than level 3 in the URL.** The model table lives on the series page, not on a separate `/products` page.
- **Never skip a level.** If a type has only one series, it still gets a series page.
- The **menu shows levels 1 to 3**, the same as the three columns.

## 2. The categories are fixed

1. Valves
2. Actuators
3. Instrumentation & Fittings
4. Hydrogen & High Pressure
5. Pumps & Seals
6. Filters & Flow

A new category needs a deliberate decision, not a new folder.

## 3. One product, one home

- Each type and series has **one page only**. For example, globe valves must not exist under both "industrial" and "sealed" valves.
- Other places that mention it **link** to that page instead of copying it.
- If two pages cover the same thing, keep the stronger one (Search Console traffic) and **301 redirect** the other to it.

## 4. Brands are labels, not levels

- A brand is never a level in the URL or the menu. It's shown as a **badge on the series**.
- `/brands` is a **directory**. Each brand page has:
  - an overview
  - its series on Valvenok (links)
  - stock to buy, if any
  - "Visit website", if the brand has its own site (Panam, Mars, Hiflux, Kosaplus, SPAC)
- Brands supplied on request have no page of their own. Their card on `/brands` says **"Ask for a quote"**.

## 5. What every page must have

| Page | Must have |
|---|---|
| Category | Intro text (about 150 words), type cards, guides, quote button |
| Type | Intro text, "which series for which job", series cards with brand badges, FAQ, guides |
| Series | Brand, overview, specs, model table, datasheet or certificates, **Buy** (if stocked) or **Request a quote** |
| Shop SKU | Price, stock, add to cart, link to its series page |

## 6. Naming

- **URLs:** lowercase, hyphens, English. No brand in the type part. The brand can go in the series part (`/valves/ball-valves/mars-series-77`).
- **Page title:** `Series or Type name: short benefit | Valvenok`, under 60 characters.
- **One H1 per page.** Sentence case for body text (never Every Word Capitalised).
- **The menu label matches the page's H1.**

## 7. Adding or moving a page

1. Decide its category, type and series (rule 1).
2. Check it doesn't already exist (rule 3).
3. Build it from the **shared template** for its level. Never copy another page's layout by hand.
4. Add it to the **menu data** and the **sitemap** at the same time.
5. If it replaces an old URL: add a **301 redirect** and update the internal links.
6. Production build, then check at desktop and phone width.

## 8. Content

- No claims we can't prove (no "world-leading", "the best", or exact stock or lead times unless confirmed).
- Certification "varies by model" unless the certificate is linked.
- Link out to a group company's website where it sells the same product (footer, About, product pages).
