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
  /** Logo URL; without one the card shows the name */
  logo?: string;
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
    name: "Susin I-Tork",
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
      fittings: { text: "Pneumatic push-in fittings and tubing", href: "/fittings-tubing/pneumatic-fittings" },
    },
    sortOrder: 3,
  },
  // Danfoss hidden 13 Nov (pages kept live, logged on vk-z1 for clean-up)

  // Other menu tabs (16 Nov): every brand whose products sit in that tab's menu.
  // href points at the brand's range on Valvenok; brands with their own site also get "Website ↗".
  {
    slug: "panam",
    name: "Panam",
    logo: "https://pblol2.blob.core.windows.net/panam-images/panam-resize_smallest.jpg",
    website: site("Panam Valves"),
    mode: "both",
    makes: {
      valves: { text: "Instrumentation valves and manifolds", href: "/valves/instrumentation-valves" },
      hydrogen: { text: "High pressure valves, fittings and tubing", href: "/hydrogen-cryogenic" },
      fittings: { text: "Instrumentation tube and pipe fittings", href: "/fittings-tubing/instrumentation-fittings" },
    },
    sortOrder: 0.1,
  },
  {
    slug: "hiflux",
    name: "Hiflux",
    logo: `${V}/products/hiflux/logo.png`,
    page: "/brands/hiflux",
    website: site("Hiflux UK"),
    mode: "both",
    makes: {
      hydrogen: { text: "High pressure valves, fittings and tubing", href: "/brands/hiflux" },
      fittings: { text: "High pressure tubing and fittings", href: "/fittings-tubing/tubing" },
    },
    sortOrder: 0.2,
  },
  {
    slug: "mars-valves",
    name: "Mars Valves",
    logo: `${V}/brands/mars.png`,
    page: "/brands/mars-valves",
    website: site("Mars Valve"),
    mode: "both",
    makes: { valves: { text: "Ball valves" } },
    sortOrder: 12,
  },
  {
    slug: "value-valves",
    name: "Value Valves",
    logo: `${V}/products/valves/butterfly-valves/logo.svg`,
    page: "/brands/value-valves",
    mode: "featured",
    makes: { valves: { text: "Butterfly, ball and check valves" } },
    sortOrder: 13,
  },
  {
    slug: "utam-valves",
    name: "UTAM",
    logo: `${V}/products/valves/utam-logo.png`,
    page: "/brands/utam-valves",
    mode: "featured",
    makes: { valves: { text: "Globe and gate valves" } },
    sortOrder: 14,
  },
  {
    slug: "pietro-fiorentini",
    name: "Pietro Fiorentini",
    logo: `${V}/products/industrial-valves/logo.svg`,
    page: "/brands/pietro-fiorentini",
    mode: "featured",
    makes: {
      valves: { text: "Control ball and butterfly valves" },
      instrumentation: { text: "Gas pressure regulators", href: "/instrumentation/gas-pressure-regulator" },
    },
    sortOrder: 15,
  },
  {
    slug: "vsi",
    name: "VSI",
    logo: `${V}/brands/vsi.png`,
    mode: "featured",
    makes: { valves: { text: "Atlas severe service control valves", href: "/valves/industrial-valves/control-valves" } },
    sortOrder: 16,
  },
  {
    slug: "cameron",
    name: "Cameron",
    logo: `${V}/brands/cameron-logo.png`,
    mode: "featured",
    makes: { valves: { text: "WKM 370D flanged ball valve", href: "/valves/industrial-valves/ball-valves/cameron-wkm-370d" } },
    sortOrder: 17,
  },
  {
    slug: "fisher",
    name: "Fisher",
    logo: `${V}/brands/fisher-logo.jpg`,
    mode: "featured",
    makes: { valves: { text: "Lined globe valve", href: "/valves/industrial-valves/globe-valve/fisher-rss-lined" } },
    sortOrder: 18,
  },
  {
    slug: "bettis",
    name: "Bettis",
    logo: `${V}/brands/bettis-logo.png`,
    mode: "featured",
    makes: { valves: { text: "Actuated ball valves", href: "/valves/industrial-valves/ball-valves/bettis-rpx" } },
    sortOrder: 19,
  },
  {
    slug: "velan",
    name: "Velan",
    logo: `${V}/brands/velan-logo.png`,
    mode: "featured",
    makes: { valves: { text: "Cast steel swing check valves", href: "/valves/industrial-valves/check-valves/velan-swing-check" } },
    sortOrder: 20,
  },
  {
    slug: "anderson-greenwood",
    name: "Anderson Greenwood",
    logo: `${V}/brands/anderson-greewood-logo.jpg`,
    mode: "featured",
    makes: { valves: { text: "Bolted bonnet check valves", href: "/valves/industrial-valves/check-valves/ag-fasani-check" } },
    sortOrder: 21,
  },
  {
    slug: "bonney-forge",
    name: "Bonney Forge",
    mode: "featured",
    makes: { valves: { text: "Welded bonnet globe valves", href: "/valves/industrial-valves/globe-valve/bonney-forge-welded-bonnet" } },
    sortOrder: 22,
  },
  {
    slug: "adaptix",
    name: "Adaptix",
    logo: `${V}/brands/Adaptix/adaptix-logo.png`,
    mode: "featured",
    makes: { fittings: { text: "Sanitary tri-clamp fittings", href: "/fittings-tubing/sanitary-fittings" } },
    sortOrder: 23,
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
      // A brand with its own site still links here for a type whose range is on Valvenok (href set)
      const external = !m.href && (brand.mode === "own-site" || (!brand.page && !!brand.website));
      const href = external ? brand.website! : m.href ?? brand.page ?? brand.website ?? "/brands";
      return { brand, text: m.text, href, external };
    });
}
