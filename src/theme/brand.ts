// Valvenok colour scheme — monochrome family of #008080 (agreed 23 Nov 2026).
// TEAL is the full scale, darkest → lightest, sampled from the palette tool.
// Rows 4–6 (#0FFFFF-ish neons) are in the family but too loud for UI chrome —
// keep them for small highlights only, if at all.
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
  300: "#09CECE",
  200: "#84FBFC",
  150: "#AEFCFC",
  100: "#C8FFFF",
  75: "#D7FEFE",
  50: "#E4FFFF",
} as const;

// Roles — use these in components, not raw hex.
export const BRAND = {
  main: TEAL[600], // buttons, icons, badges
  hover: TEAL[700], // hover / active text, button hover
  deep: TEAL[800], // strong fills (mobile menu button, avatar)
  strip: TEAL[900], // top contact strip
  accent: TEAL[400], // highlights, icons on dark
  ink: TEAL[950], // body text
  onDark: TEAL[75], // text on deep teal
  tint: TEAL[50], // hover background
  tintStrong: TEAL[75],
  hoverBorder: TEAL[150],
  wash: "#F2FFFF", // panel / strip background (half-step lighter than TEAL[50])

  // Neutral greys, tinted to the teal hue so they sit in the family
  muted: "#4A6B6B",
  subtle: "#6E8C8C",
  faint: "#93ABAB",
  faintest: "#B4C8C8",
  border: "#D3E8E8",
  divider: "#E6F2F2",
} as const;

/** Brand line under the header: light → brand → deep. */
export const BRAND_LINE = `linear-gradient(90deg, ${TEAL[400]} 0%, ${TEAL[600]} 50%, ${TEAL[800]} 100%)`;

/** Shadow colour (TEAL[950]) at a given opacity. */
export const shade = (a: number) => `rgba(1,40,41,${a})`;
