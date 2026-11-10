// One list of brands that drives "Shop by brand" across the site.
// Shaped like the API's Brands table (valvenok-clean-api) plus the two things it still needs:
// which product types each brand makes, and how we show it.
//
// When a brand gets its own website: set `website` and change `mode` to "own-site".
// The menus and pages then send people to that site instead of listing its products here.

import { GROUP_SITES } from "./group";

export type ProductType = "valves" | "actuators" | "hydrogen" | "fittings" | "instrumentation";

/** featured: products are on Valvenok. own-site: only on the brand's own website. both: on both. */
export type BrandMode = "featured" | "own-site" | "both";

export interface Brand {
  slug: string;
  name: string;
  logo: string;
  /** Some logo files have wide margins; scale them up to look the same size */
  logoScale?: number;
  /** Brand page on Valvenok, if there is one */
  page?: string;
  /** The brand's own website, if it has one */
  website?: string;
  mode: BrandMode;
  /** What the brand makes, per product type (one short line), and where to send people for it */
  makes: Partial<Record<ProductType, { text: string; href?: string }>>;
  sortOrder: number;
}

const V = "https://pblol2.blob.core.windows.net/valvenok-images";
const site = (name: string) => GROUP_SITES.find((g) => g.name === name)?.url;

export const BRANDS: Brand[] = [
  {
    slug: "susin",
    name: "Susin",
    logo: `${V}/logo/susin-logo.webp`,
    page: "/brands/susin",
    mode: "featured",
    makes: {
      actuators: { text: "All actuator types" },
    },
    sortOrder: 1,
  },
  {
    slug: "kosaplus",
    name: "KOSAPLUS",
    logo: `${V}/brands/kosaplus-logo.png`,
    logoScale: 2.2,
    website: site("KOSAPLUS UK"),
    mode: "own-site",
    makes: {
      actuators: { text: "Scotch yoke and electric actuators" },
    },
    sortOrder: 2,
  },
  {
    slug: "spac",
    name: "SPAC",
    logo: "https://pblol2.blob.core.windows.net/spac-images/spac-logo.webp",
    website: site("SPAC Pneumatic"),
    mode: "own-site",
    makes: {
      actuators: { text: "Rack & pinion actuators" },
    },
    sortOrder: 3,
  },
  {
    slug: "danfoss",
    name: "Danfoss",
    logo: `${V}/products/danfoss/new-logo.svg`,
    mode: "featured",
    makes: {
      actuators: { text: "PVE actuators for proportional valves", href: "/actuators/electric/pvae32" },
    },
    sortOrder: 4,
  },
];

export interface BrandLink {
  brand: Brand;
  text: string;
  /** Where the link goes: the brand's own site, its Valvenok page, or its products here */
  href: string;
  external: boolean;
}

/** Brands that make this product type, with where each one should link. */
export function brandsFor(type: ProductType): BrandLink[] {
  return BRANDS.filter((b) => b.makes[type])
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((brand) => {
      const m = brand.makes[type]!;
      const external = brand.mode === "own-site" || (!brand.page && !m.href && !!brand.website);
      const href = external ? brand.website! : m.href ?? brand.page ?? brand.website ?? "/brands";
      return { brand, text: m.text, href, external };
    });
}
