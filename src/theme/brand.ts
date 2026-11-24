// ─────────────────────────────────────────────────────────────────────────────
// Valvenok colour palette — the ONLY place colours are defined (23 Nov 2026).
//
// Everything else uses these names:
//   • components:  BRAND.main, BRAND.border, withAlpha(BRAND.ink, 0.1) …
//   • MUI theme:   built from BRAND in src/theme/ThemeRegistry.tsx
//                  ("primary.main", "text.secondary", "divider" in sx all follow)
//   • CSS files:   var(--vk-main), var(--vk-border) … (generated from BRAND)
//
// A lint rule blocks hard-coded colours anywhere else, so changing a value
// here re-colours the whole site.
// ─────────────────────────────────────────────────────────────────────────────

/** Monochrome family of #008080, darkest → lightest (from the palette tool). */
export const TEAL_SCALE = {
  950: "#012829",
  900: "#023737",
  850: "#004545",
  800: "#025151",
  750: "#036162",
  700: "#007070",
  650: "#027B7B",
  600: "#008080", // brand
  550: "#008D8D",
  500: "#009B9B",
  450: "#01A4A4",
  400: "#00B8B8",
  350: "#00C6C5",
  300: "#06CECE",
  280: "#00E2E2",
  260: "#00F1F1",
  240: "#08F7F7",
  200: "#84FBFB",
  180: "#8FFFFF",
  170: "#9DFFFF",
  150: "#AEFCFC",
  120: "#BAFFFF",
  100: "#C8FFFF",
  75: "#D7FEFE",
  50: "#E4FFFF",
} satisfies Record<number, string>;

/** The original site green (before the teal rebrand), same steps as TEAL_SCALE, darkest →
 *  lightest. 600 = #2E8B1E (links, text), 350 = #61D649 (bright brand), 75 = #EEF9EA (soft). */
export const GREEN_SCALE = {
  950: "#0E1B12",
  900: "#123D17",
  850: "#16471B",
  800: "#1C5A1F",
  750: "#22691F",
  700: "#256F18",
  650: "#2A7D1B",
  600: "#2E8B1E",
  550: "#3A9A27",
  500: "#45AA30",
  450: "#50B838",
  400: "#5CC843",
  350: "#61D649",
  300: "#7ADD66",
  280: "#8FE37E",
  260: "#A2E893",
  240: "#B0EBA3",
  200: "#C2F0B8",
  180: "#CDF2C4",
  170: "#D4F4CC",
  150: "#DCF6D5",
  120: "#E2F7DC",
  100: "#E8F9E3",
  75: "#EEF9EA",
  50: "#F3FBF0",
} satisfies Record<keyof typeof TEAL_SCALE, string>;

/** Greys, washes and logo stops that go with each scale. */
const SCHEME_EXTRAS = {
  teal: {
    borderStrong: "#A9D4D4", wash: "#F2FFFF", body: "#2F4A4A", muted: "#4A6B6B", subtle: "#6E8C8C",
    faint: "#93ABAB", faintest: "#B4C8C8", border: "#D3E8E8", divider: "#E6F2F2", surface: "#F5FAFA",
    logo: { top: "#4FAAAF", mid: "#316A7D", bottom: "#1D425C" },
  },
  green: {
    borderStrong: "#BFE3B4", wash: "#F6FAF5", body: "#3E4D43", muted: "#4B5A50", subtle: "#7A877F",
    faint: "#9AA69E", faintest: "#B5C0B8", border: "#E5EBE6", divider: "#EEF2EF", surface: "#F5F8F5",
    logo: { top: "#61D649", mid: "#2E8B1E", bottom: "#123D17" },
  },
} as const;

// ── ACTIVE SCHEME ── "green" (24 Nov 2026: back to the original green, by request) or "teal".
// Everything below (BRAND, AQUA, LOGO, gradients, ACCENT) follows this one switch.
export const SCHEME: keyof typeof SCHEME_EXTRAS = "green";
/** The active colour scale (TEAL_SCALE or GREEN_SCALE). */
export const SCALE = SCHEME === "green" ? GREEN_SCALE : TEAL_SCALE;
const X = SCHEME_EXTRAS[SCHEME];

/** Colour roles. Use these in components — never raw hex. */
export const BRAND = {
  // ── Brand colour (active scheme) ──
  main: SCALE[600], // buttons, links, icons, badges
  hover: SCALE[700], // hover / active, dark accent text on white
  deep: SCALE[800], // strong fills, dark headings accents
  strip: SCALE[900], // dark bands and sections
  accent: SCALE[400], // highlights
  bright: SCALE[350], // accent text / icons on dark backgrounds

  // ── Tints (backgrounds, chips, borders) ──
  tint: SCALE[50], // hover / selected background
  tintStrong: SCALE[75],
  hoverBorder: SCALE[150],
  borderStrong: X.borderStrong, // brand border that reads on white and on dark
  wash: X.wash, // pale brand panel / strip background

  // ── Neutrals (greys tinted to the brand hue) ──
  white: "#FFFFFF",
  ink: SCALE[950], // headings, body text, shadows, photo overlays
  body: X.body,
  muted: X.muted,
  subtle: X.subtle,
  faint: X.faint,
  faintest: X.faintest,
  border: X.border,
  divider: X.divider,
  surface: X.surface, // page / section background

  // ── Status (real states only: errors, warnings, success) ──
  error: "#C2413B",
  errorSoft: "#FDECEC",
  warning: "#B26A00",
  warningSoft: "#FFF7E6",
  success: "#2E7D32",
  successSoft: "#EAF8E4",

  // ── Third-party brand colours (must stay recognisable) ──
  whatsapp: "#25D366",
  linkedin: "#0E76A8",
} satisfies Record<string, string>;

export type BrandColor = keyof typeof BRAND;

/** Bright aqua accents (homepage, 23 Nov 2026). Backgrounds, glows, underlines and
 *  dots only — too light for text on white (contrast under 2:1). */
export const AQUA = {
  glow: SCALE[280], // #00E2E2 — underlines, dots, active marks
  glowDeep: SCALE[300], // #06CECE
  neon: SCALE[260], // #00F1F1 — blurred background glows
  soft: SCALE[200], // #84FBFB — soft glows, borders on tints
  softer: SCALE[170], // #9DFFFF
  mist: SCALE[120], // #BAFFFF — strongest pale wash
  mistMid: SCALE[100], // #C8FFFF
  mistLight: SCALE[75], // #D7FEFE
  mistFaint: SCALE[50], // #E4FFFF — lightest wash
} satisfies Record<string, string>;

/** A palette colour at the given opacity: withAlpha(BRAND.ink, 0.08) → "rgba(1,40,41,0.08)". */
export function withAlpha(hex: string, a: number): string {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

/** Partner colours for teal on the homepage (23 Nov 2026). Each option has the
 *  same roles; ACCENT below picks the active one. Teal stays the brand colour.
 *   bold  — strong fills (icon boxes)
 *   deep  — highlighted words and stats (readable on white)
 *   text  — text on accent tags (readable)
 *   soft  — blobs and borders (pastel mid)
 *   blob2 — second blob shade
 *   light — tag / label backgrounds
 *   wash  — section background washes */
export const BUTTER = {
  bold: "#FFDE78",
  deep: "#B9780F", // highlighted words / stats (readable)
  text: "#8A6400",
  soft: "#FFDE78",
  blob2: "#FFDE78",
  light: "#FFF1C2",
  wash: "#FFF8DD",
} satisfies Record<string, string>;

export const PLUM = {
  bold: "#6D2E46",
  deep: "#8A3A58", // lighter plum for highlighted words / stats
  text: "#6D2E46",
  soft: "#D9AFC0", // mauve (blobs, borders)
  blob2: "#F2B8C6", // dusty rose
  light: "#F2E1E8", // pink-mauve tag fill
  wash: "#FAF1F4",
} satisfies Record<string, string>;

export const COPPER = {
  bold: "#B87333", // copper (icon fills)
  deep: "#9C5A25", // darker copper for highlighted words / stats
  text: "#8A4F1E", // text on copper tags
  soft: "#D9A77A", // rose-gold (borders, light accents)
  blob2: "#E8D6BA", // sand / champagne (accents on dark photos)
  light: "#F6E6D6", // tag / icon-box fill
  wash: "#FBF5EF", // section washes
} satisfies Record<string, string>;

/** Accent gradient for highlighted words, numbers and solid icon boxes. */
export const accentGradient = (a: { bold: string; deep: string }) => `linear-gradient(170deg, ${a.deep} 0%, ${a.bold} 100%)`;

/** Active homepage partner colour. Saved designs: git branches design/aqua-butter, design/teal-plum. */

/** The logo's own gradient (measured from valvenok-new-logo, top → bottom). */
export const LOGO = { ...X.logo };

/** Fill for pills and buttons — matches the logo gradient (23 Nov 2026). */
export const BRAND_GRADIENT = `linear-gradient(170deg, ${LOGO.top} 0%, ${LOGO.mid} 60%, ${LOGO.bottom} 100%)`;
export const BRAND_GRADIENT_HOVER = `linear-gradient(170deg, ${LOGO.mid} 0%, ${LOGO.bottom} 100%)`;

/** Mix two palette colours: mix(LOGO.top, BRAND.white, 0.8) = 80% of the way to white. */
export function mix(from: string, to: string, t: number): string {
  const a = parseInt(from.slice(1), 16), b = parseInt(to.slice(1), 16);
  const ch = (sh: number) => Math.round(((a >> sh) & 255) * (1 - t) + ((b >> sh) & 255) * t);
  return "#" + [16, 8, 0].map((sh) => ch(sh).toString(16).padStart(2, "0")).join("").toUpperCase();
}

/** Light version of the logo gradient, for pills on dark photos (text: LOGO.bottom). */
export const LOGO_GRADIENT_LIGHT = `linear-gradient(170deg, ${mix(LOGO.top, BRAND.white, 0.8)} 0%, ${mix(LOGO.top, BRAND.white, 0.55)} 55%, ${mix(LOGO.mid, BRAND.white, 0.6)} 100%)`;
export const LOGO_GRADIENT_LIGHT_HOVER = `linear-gradient(170deg, ${mix(LOGO.top, BRAND.white, 0.6)} 0%, ${mix(LOGO.mid, BRAND.white, 0.45)} 100%)`;

/** Accent built from the logo colours (23 Nov 2026): replaces copper, so the homepage
 *  uses only brand colours. Same roles as COPPER / BUTTER / PLUM above. */
export const LOGO_ACCENT = {
  bold: LOGO.top, // #4FAAAF icon fills
  deep: LOGO.mid, // #316A7D highlighted words / stats
  text: LOGO.bottom, // #1D425C text on accent tags
  soft: mix(LOGO.top, BRAND.white, 0.45), // borders, light accents
  blob2: mix(LOGO.top, BRAND.white, 0.55), // highlights on dark backgrounds
  light: mix(LOGO.top, BRAND.white, 0.86), // tag / icon-box fill
  wash: mix(LOGO.top, BRAND.white, 0.94), // section washes
};

/** The active accent. */
export const ACCENT = LOGO_ACCENT;

/** Deep sections, footer and quote banner (23 Nov 2026): like the logo, teal at the top
 *  fading to deep navy at the bottom, muted to match the hero photo's tone. */
export const LOGO_DEEP_GRADIENT = `linear-gradient(180deg, ${mix(LOGO.mid, LOGO.top, 0.3)} 0%, ${LOGO.mid} 35%, ${LOGO.bottom} 75%, ${mix(LOGO.bottom, "#000000", 0.25)} 100%)`;

/** Softer band (23 Nov 2026): the logo's light-to-mid teal, no navy, so the coloured
 *  bands blend with the white and mist bands around them. White text still reads on it. */
export const LOGO_SOFT_GRADIENT = `linear-gradient(180deg, ${mix(LOGO.top, BRAND.white, 0.08)} 0%, ${mix(LOGO.top, LOGO.mid, 0.3)} 55%, ${mix(LOGO.top, LOGO.mid, 0.6)} 100%)`;

/** Light tint band (23 Nov 2026): starts at the same aqua the mist band ends on (AQUA.mistLight)
 *  and deepens gently towards the logo teal, so the bands read as one family. Dark text on top. */
export const LOGO_TINT_GRADIENT = `linear-gradient(180deg, ${AQUA.mistLight} 0%, ${mix(AQUA.mistLight, LOGO.top, 0.14)} 45%, ${mix(AQUA.mistLight, LOGO.top, 0.3)} 100%)`;

/** Brand line under the header: light → brand → deep. */
export const BRAND_LINE = `linear-gradient(90deg, ${SCALE[400]} 0%, ${SCALE[600]} 50%, ${SCALE[800]} 100%)`;

/** Shadow in the ink colour at a given opacity. */
export const shade = (a: number) => withAlpha(BRAND.ink, a);

/** CSS variables for .css files: --vk-main, --vk-border, … (injected by ThemeRegistry). */
export const BRAND_CSS_VARS: Record<string, string> = Object.fromEntries(
  Object.entries(BRAND).map(([k, v]) => [`--vk-${k.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase())}`, v]),
);

/** The navbar's original green (before the teal rebrand). Used for the navbar on every page
 *  except the teal ones in src/theme/tealPages.ts (24 Nov 2026). Same role names as BRAND. */
export const NAV_GREEN = {
  main: "#61D649",
  hover: "#2E8B1E",
  deep: "#123D17",
  tint: "#EEF9EA",
  tintStrong: "#DDF3D6",
  wash: "#F6FAF5",
  border: "#E5EBE6",
  divider: "#EEF2EF",
  hoverBorder: "#BFE3B4",
  ink: "#0E1B12",
  body: "#4B5A50",
  muted: "#5B6B60",
  subtle: "#7A877F",
  faint: "#9AA69E",
  faintest: "#B5C0B8",
  ctaHover: "#55C93E",
} as const;

/** The homepage's original pastel look (before the rebrand), restored 24 Nov 2026.
 *  WASH: band backgrounds; BLOB: drifting blurred glows; PASTEL_PAIRS: tint + matching ink
 *  (the Brands page category colours); RAINBOW: the green → sky → sun bar. */
export const PASTEL = {
  cream: "#FBFDF8",
  dot: "rgba(46,139,30,0.10)",
  wash: {
    mint: "linear-gradient(180deg, #FFFFFF 0%, #FBFDF8 18%, #F1FAEC 60%, #FFFFFF 100%)",
    sky: "linear-gradient(180deg, #FFFFFF 0%, #F3F9FE 25%, #EEF7FD 65%, #FFFFFF 100%)",
    butter: "linear-gradient(180deg, #FFFFFF 0%, #FFFCF1 25%, #FFF8E4 65%, #FFFFFF 100%)",
    lilac: "linear-gradient(180deg, #FFFFFF 0%, #F8F5FD 25%, #F4F0FC 65%, #FFFFFF 100%)",
    plain: "#FFFFFF",
  },
  blob: {
    lime: "rgba(97,214,73,0.28)",
    sky: "rgba(140,205,255,0.30)",
    sun: "rgba(255,225,130,0.32)",
    lilac: "rgba(201,185,242,0.30)",
  },
  pairs: [
    { tint: "#EAF8E4", ink: "#2E8B1E" }, // mint
    { tint: "#E3F3FF", ink: "#1F6FB2" }, // sky
    { tint: "#FFF5D6", ink: "#8A6100" }, // sun
    { tint: "#EEE9FF", ink: "#5B43B5" }, // lilac
    { tint: "#E6F7F2", ink: "#1E7D63" }, // aqua
  ],
  rainbow: "linear-gradient(90deg, #61D649, #8FD9F0, #FFD978, #61D649)",
} as const;
/** Pastel pair for item i, cycling mint → sky → sun → lilac → aqua. */
export const pastelPair = (i: number) => PASTEL.pairs[i % PASTEL.pairs.length];
/** Card background: a pastel fading to white (as the Brands category cards). */
export const pastelFade = (tint: string) => `linear-gradient(160deg, ${tint} 0%, #FFFFFF 75%)`;

/** Pills and buttons as before the rebrand (restored 24 Nov 2026): flat, no gradients.
 *  solid: bright green with deep-green text. label: soft green tag. labelDark: on dark photos. */
export const PILL = {
  green: "#61D649",
  greenHover: "#55C93E",
  greenDeep: "#123D17",
  solid: { background: "#61D649", color: "#123D17", border: "1px solid #61D649", boxShadow: "none", "&:hover": { background: "#55C93E" } },
  label: { color: "#2E8B1E", background: "#EEF9EA", border: "1px solid rgba(46,139,30,0.15)", boxShadow: "none" },
  labelDark: { color: "#C9F2BF", background: "rgba(97,214,73,0.14)", border: "1px solid rgba(97,214,73,0.3)", boxShadow: "none" },
} as const;
