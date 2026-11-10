// "Also in our group": series sold on another group website, shown on Valvenok as
// feature cards that open that site. Used by the mega menu and the type pages, so every
// placement stays in sync. When a series moves to a group site, add it here (and hide its
// old Valvenok page); when a new group site goes live, add its series the same way.
//
// Names and one-line descriptions are taken from each brand's own website
// (kosaplus.co.uk series pages, spacpneumatic.co.uk/products/actuators).

import { BRANDS, type Brand } from "./brandRegistry";

/** Where the series belongs in the Actuators tab (matches the menu column) */
export type ShowcaseCategory = "pneumatic" | "electric" | "accessories";

export interface ShowcaseSeries {
  brand: string; // brand slug in brandRegistry
  code: string;
  name: string; // menu label, same style as our own series
  line: string; // one line, from the brand's site
  img: string;
  href: string; // page on the brand's own website
  category: ShowcaseCategory;
}

const K = "https://www.kosaplus.co.uk/products";
const KI = "https://pblol2.blob.core.windows.net/kosaplus";

export const SHOWCASE: ShowcaseSeries[] = [
  // KOSAPLUS pneumatic
  { brand: "kosaplus", code: "AD", name: "AD Series — Scotch Yoke, Double Acting", line: "Double acting scotch yoke, AD50 to AD300, SIL 3 certified", img: `${KI}/pneumatic-actuator/series-ad-as-scotch-yoke.webp`, href: `${K}/pneumatic-actuator/series/ad`, category: "pneumatic" },
  { brand: "kosaplus", code: "AS", name: "AS Series — Scotch Yoke, Spring Return", line: "Spring return (fail-safe) scotch yoke, AS50 to AS300, SIL 3 certified", img: `${KI}/pneumatic-actuator/series-ad-as-scotch-yoke.webp`, href: `${K}/pneumatic-actuator/series/as`, category: "pneumatic" },
  { brand: "kosaplus", code: "RD", name: "RD Series — Rack & Pinion, Double Acting", line: "Double acting rack & pinion, RD32 to RD210, SIL 3 certified", img: `${KI}/pneumatic-actuator/series-rd-rs-rack-pinion.webp`, href: `${K}/pneumatic-actuator/series/rd`, category: "pneumatic" },
  { brand: "kosaplus", code: "RS", name: "RS Series — Rack & Pinion, Spring Return", line: "Spring return (fail-safe) rack & pinion, RS40 to RS210, SIL 3 certified", img: `${KI}/pneumatic-actuator/series-rd-rs-rack-pinion.webp`, href: `${K}/pneumatic-actuator/series/rs`, category: "pneumatic" },
  // SPAC pneumatic
  { brand: "spac", code: "SRA", name: "SRA Series — Rack & Pinion", line: "Rack & pinion actuators and actuator valves, priced to order online", img: "https://pblol2.blob.core.windows.net/spac-images/products/actuators/SRA-25-02.jpg", href: "https://www.spacpneumatic.co.uk/products/actuators", category: "pneumatic" },
  // KOSAPLUS electric
  { brand: "kosaplus", code: "KE", name: "KE Series — Quarter-Turn", line: "Quarter-turn, 8 to 1,200 Nm, on/off or modulating", img: `${KI}/electric-actuator/series/ke.webp`, href: `${K}/electric-actuator/series/ke`, category: "electric" },
  { brand: "kosaplus", code: "KPF", name: "KPF Series — Explosion Proof, Flat Indicator", line: "ATEX and IECEx explosion proof, 25 to 500 Nm", img: `${KI}/electric-actuator/series/kpf.webp`, href: `${K}/electric-actuator/series/kpf`, category: "electric" },
  { brand: "kosaplus", code: "KPD", name: "KPD Series — Explosion Proof, Dome Indicator", line: "ATEX and IECEx explosion proof, 25 to 500 Nm", img: `${KI}/electric-actuator/series/kpf.webp`, href: `${K}/electric-actuator/series/kpd`, category: "electric" },
  { brand: "kosaplus", code: "KS", name: "KS Series — Fast-Acting", line: "1-second stroke on/off actuators, 10 and 25 Nm", img: `${KI}/electric-actuator/series/ks.webp`, href: `${K}/electric-actuator/series/ks`, category: "electric" },
  { brand: "kosaplus", code: "KR", name: "KR Series — Safe Return", line: "Fail-safe return, 20 to 60 Nm, 100–250 V AC", img: `${KI}/electric-actuator/series/ke-ke002.webp`, href: `${K}/electric-actuator/series/kr`, category: "electric" },
  // KOSAPLUS accessories
  { brand: "kosaplus", code: "KLS1", name: "KLS1 Series — Weatherproof Limit Switch Box", line: "Weatherproof IP67 / IP68 valve position indicators, KLS10 to KLS14", img: `${KI}/valve-position-indicator/category-valve-position-indicator.webp`, href: `${K}/valve-position-indicator/series/kls1`, category: "accessories" },
  { brand: "kosaplus", code: "KLS2", name: "KLS2 Series — Explosion-Proof Limit Switch Box", line: "Explosion proof Ex db IIC T6 Gb, IP67, KLS20 to KLS24", img: `${KI}/valve-position-indicator/category-valve-position-indicator.webp`, href: `${K}/valve-position-indicator/series/kls2`, category: "accessories" },
];

export interface ShowcaseItem extends ShowcaseSeries {
  brandInfo: Brand;
  siteName: string; // e.g. "KOSAPLUS UK"
}

const SITE_NAME: Record<string, string> = { kosaplus: "KOSAPLUS UK", spac: "SPAC Pneumatic" };

export function showcaseFor(category: ShowcaseCategory): ShowcaseItem[] {
  return SHOWCASE.filter((s) => s.category === category).map((s) => ({
    ...s,
    brandInfo: BRANDS.find((b) => b.slug === s.brand)!,
    siteName: SITE_NAME[s.brand] ?? s.brand,
  }));
}
