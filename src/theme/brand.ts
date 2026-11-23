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
export const TEAL = {
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

/** Colour roles. Use these in components — never raw hex. */
export const BRAND = {
  // ── Brand teal ──
  main: TEAL[600], // buttons, links, icons, badges
  hover: TEAL[700], // hover / active, dark accent text on white
  deep: TEAL[800], // strong fills, dark headings accents
  strip: TEAL[900], // dark bands and sections
  accent: TEAL[400], // highlights
  bright: TEAL[350], // accent text / icons on dark backgrounds

  // ── Teal tints (backgrounds, chips, borders) ──
  tint: TEAL[50], // hover / selected background
  tintStrong: TEAL[75],
  hoverBorder: TEAL[150],
  borderStrong: "#A9D4D4", // teal border that reads on white and on dark
  wash: "#F2FFFF", // pale teal panel / strip background

  // ── Neutrals (greys tinted to the teal hue) ──
  white: "#FFFFFF",
  ink: TEAL[950], // headings, body text, shadows, photo overlays
  body: "#2F4A4A",
  muted: "#4A6B6B",
  subtle: "#6E8C8C",
  faint: "#93ABAB",
  faintest: "#B4C8C8",
  border: "#D3E8E8",
  divider: "#E6F2F2",
  surface: "#F5FAFA", // page / section background

  // ── Status (real states only: errors, warnings, success) ──
  error: "#C2413B",
  errorSoft: "#FDECEC",
  warning: "#B26A00",
  warningSoft: "#FFF7E6",
  success: "#2E7D32",
  successSoft: "#EAF8E4",

  // ── Third-party brand colours (must stay recognisable) ──
  whatsapp: "#25D366",
} satisfies Record<string, string>;

export type BrandColor = keyof typeof BRAND;

/** Bright aqua accents (homepage, 23 Nov 2026). Backgrounds, glows, underlines and
 *  dots only — too light for text on white (contrast under 2:1). */
export const AQUA = {
  glow: TEAL[280], // #00E2E2 — underlines, dots, active marks
  glowDeep: TEAL[300], // #06CECE
  neon: TEAL[260], // #00F1F1 — blurred background glows
  soft: TEAL[200], // #84FBFB — soft glows, borders on tints
  softer: TEAL[170], // #9DFFFF
  mist: TEAL[120], // #BAFFFF — strongest pale wash
  mistMid: TEAL[100], // #C8FFFF
  mistLight: TEAL[75], // #D7FEFE
  mistFaint: TEAL[50], // #E4FFFF — lightest wash
} satisfies Record<string, string>;

/** A palette colour at the given opacity: withAlpha(BRAND.ink, 0.08) → "rgba(1,40,41,0.08)". */
export function withAlpha(hex: string, a: number): string {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

/** The logo's own gradient (measured from valvenok-new-logo, top → bottom). */
export const LOGO = {
  top: "#4FAAAF",
  mid: "#316A7D",
  bottom: "#1D425C",
} satisfies Record<string, string>;

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

/** Brand line under the header: light → brand → deep. */
export const BRAND_LINE = `linear-gradient(90deg, ${TEAL[400]} 0%, ${TEAL[600]} 50%, ${TEAL[800]} 100%)`;

/** Shadow in the ink colour at a given opacity. */
export const shade = (a: number) => withAlpha(BRAND.ink, a);

/** CSS variables for .css files: --vk-main, --vk-border, … (injected by ThemeRegistry). */
export const BRAND_CSS_VARS: Record<string, string> = Object.fromEntries(
  Object.entries(BRAND).map(([k, v]) => [`--vk-${k.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase())}`, v]),
);
