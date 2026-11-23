// Brands with products on this site (moved out of the Brands page, 23 Nov 2026, so the
// About page's logo wall uses the same list).
const V = "https://pblol2.blob.core.windows.net/valvenok-images";

export type Cat = "Valves" | "Actuators" | "Fittings" | "Hydrogen" | "Instrumentation";
export type OnSite = { name: string; logo?: string; scale?: number; dark?: boolean; cta?: string; external?: boolean; desc: string; cats: Cat[]; href: string; website?: string };

export const ON_SITE: OnSite[] = [
  { name: "Susin I-Tork", scale: 1.15, logo: `${V}/logo/susin-logo.webp`, desc: "Pneumatic, electric, hydraulic and mechanical actuators, and limit switch boxes.", cats: ["Actuators"], href: "/brands/susin" },
  { name: "Panam", logo: "https://pblol2.blob.core.windows.net/valvenok-images/brands/panam-logo.png", desc: "Instrumentation valves, manifolds and fittings for hydrogen, oil and gas and industrial applications.", cats: ["Valves", "Fittings", "Hydrogen"], href: "/valves/instrumentation-valves", website: "https://www.panamvalve.com/" },
  { name: "Mars Valves", scale: 1.6, logo: `${V}/brands/mars.png`, desc: "Ball valves: 2-piece, 3-piece, flanged, sanitary and fire-safe ranges.", cats: ["Valves"], href: "/brands/mars-valves", website: "https://www.marsvalvenok.com/" },
  { name: "Hiflux", logo: `${V}/brands/hiflux-logo.png`, desc: "High-pressure valves, fittings and tubing rated to 150,000 psi.", cats: ["Hydrogen", "Fittings"], href: "/brands/hiflux", website: "https://www.hiflux.uk.com/" },
  { name: "Value Valves", logo: `${V}/products/valves/butterfly-valves/logo.svg`, desc: "Butterfly valves and flow control solutions for industrial piping systems.", cats: ["Valves"], href: "/brands/value-valves" },
  { name: "Pietro Fiorentini", logo: `${V}/products/industrial-valves/logo.svg`, desc: "Gas distribution valves, control ball valves and pressure regulators for natural gas and hydrogen networks.", cats: ["Valves", "Instrumentation"], href: "/brands/pietro-fiorentini" },
  { name: "Youngdo", logo: `${V}/brands/youngdo-logo.png`, desc: "Hydrogen, LPG and industrial gas cylinder valves for high-pressure gas storage and distribution.", cats: ["Hydrogen", "Valves"], href: "/brands/youngdo" },
  { name: "Adaptix", logo: `${V}/brands/Adaptix/adaptix-logo.png`, desc: "Sanitary tri-clamp fittings: clamps, ferrules, blind covers and sight glass end caps.", cats: ["Fittings"], href: "/fittings-tubing/sanitary-fittings" },
  { name: "SPAC", logo: "https://pblol2.blob.core.windows.net/spac-images/spac-logo.webp", desc: "Pneumatic push-in fittings and tubing here; rack & pinion actuators on their own website.", cats: ["Fittings"], href: "/fittings-tubing/pneumatic-fittings", website: "https://www.spacpneumatic.co.uk/" },
  { name: "Cameron", logo: `${V}/brands/cameron-logo.png`, desc: "WKM 370D flanged ball valve.", cats: ["Valves"], href: "/valves/industrial-valves/ball-valves/cameron-wkm-370d" },
  { name: "Fisher", scale: 1.3, logo: `${V}/brands/fisher-logo.jpg`, desc: "Lined globe valve.", cats: ["Valves"], href: "/valves/industrial-valves/globe-valve/fisher-rss-lined" },
  { name: "Bettis", logo: `${V}/brands/bettis-logo.png`, desc: "Actuated ball valves.", cats: ["Valves", "Actuators"], href: "/valves/industrial-valves/ball-valves/bettis-rpx" },
  { name: "Velan", logo: `${V}/brands/velan-logo.png`, desc: "Cast steel swing check valves.", cats: ["Valves"], href: "/valves/industrial-valves/check-valves/velan-swing-check" },
  { name: "Anderson Greenwood", scale: 1.8, logo: `${V}/brands/anderson-greewood-logo.jpg`, desc: "Bolted bonnet check valves.", cats: ["Valves"], href: "/valves/industrial-valves/check-valves/ag-fasani-check" },
  { name: "Bonney Forge", logo: `${V}/brands/bf-logo.jpg`, desc: "Welded bonnet globe valves.", cats: ["Valves"], href: "/valves/industrial-valves/globe-valve/bonney-forge-welded-bonnet" },
  // Products to be added later: KOSAPLUS links to its own website for now, FHT to an enquiry
  { name: "KOSAPLUS", logo: "https://pblol2.blob.core.windows.net/kosaplus/logo/kosaplus-official-logo.svg", desc: "Scotch yoke and rack & pinion pneumatic actuators, electric actuators and limit switch boxes.", cats: ["Actuators"], href: "https://www.kosaplus.co.uk/", external: true, cta: "Visit website" },
  { name: "FHT Valves", logo: `${V}/brands/fht-valves-logo.png`, desc: "Industrial ball valves. Products coming soon; ask us for a quote now.", cats: ["Valves"], href: "/contact", cta: "Ask about FHT" },
];
