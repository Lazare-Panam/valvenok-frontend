// Sanitary (tri-clamp) fittings, from the Adaptix "Dairy and Pharma Fittings" datasheets.
// Photos live in blob storage (valvenok-images/brands/Adaptix).

export const SAN_BASE = "/fittings-tubing/sanitary-fittings";
const IMG = "https://pblol2.blob.core.windows.net/valvenok-images/brands/Adaptix";
export const SAN_HERO_IMG = `${IMG}/tri-clamps-range.jpg`;
export const SAN_FERRULE_IMG = `${IMG}/ferrules.jpg`;
export const SAN_BRAND = "Adaptix";
export const SAN_BRAND_LOGO = "https://pblol2.blob.core.windows.net/valvenok-images/brands/Adaptix/adaptix-logo.png";

export type SanSeries = {
  slug: string;
  name: string;
  short: string;
  /** Photo; null = drawn illustration */
  img: string | null;
  intro: string;
  pressure: string;
  specs: [string, string][];
  head: string[];
  rows: string[][];
  note?: string;
};

const COMMON: [string, string][] = [
  ["Material", "316L, 316, 304, 304L or duplex stainless steel"],
  ["Sizes", "DN 6 to DN 300 (½″ to 12″)"],
  ["Marking", "Manufacturer, size, heat number and material grade"],
  ["Test reports", "Mechanical, chemical, NDT, IGC and PMI"],
  ["Certificate", "EN 10204 3.1 material certificate with every delivery"],
  ["Hygienic class", "H3 / H4 to DIN 11866"],
];

// Clamp sizes: ISO 2852 / DIN 32676 / BS 4825 equivalents and clamp diameter A (mm)
const CLAMP_SIZES: [string, string, string, string][] = [
  ["DN 6/8/10", "DIN 4/6/8/10", "½″–¾″", "25.4"],
  ["", "DIN 10/15/20", "", "34"],
  ["DN 8/10/15/20/25", "DIN 32/40", "1″–1½″", "50.5"],
  ["DN 32/40", "DIN 50", "2″", "64"],
  ["DN 50", "", "2½″", "77.5"],
  ["DN 65", "DIN 65", "3″", "91"],
  ["DN 80", "DIN 80", "3½″", "106"],
  ["", "DIN 100", "4″", "119"],
  ["DN 100", "", "4½″", "130"],
  ["", "DIN 125", "", "144.5"],
  ["DN 125", "DIN 125", "5″", "155"],
  ["", "", "6″", "167"],
  ["DN 150", "DIN 150", "6½″", "183"],
  ["", "", "8″", "217.5"],
  ["DN 200", "DIN 200", "8½″", "233.5"],
  ["", "DIN 250", "10″", "268"],
  ["DN 250", "", "10¾″", "286.1"],
  ["", "", "12″", "319.3"],
  ["DN 300", "", "12½″", "338.5"],
];
const dash = (s: string) => s || "–";
const kCode = (a: string) => `K${a.split(".")[0]}`;

const SINGLE_T = ["5.6", "6.3", "7.0", "7.0", "7.0", "7.0", "7.0", "7.0", "10", "10", "10", "10", "14", "14", "14", "14", "14", "20", "20"];
const DOUBLE_W = ["16", "16", "26", "26", "26", "26", "26", "26", "26", "26", "26", "26", "26", "26", "26", "30", "30", "30", "30"];

// Ferrules: flange OD A, tube OD, tube ID, length L, part code
const FERRULES: [string, string, string, string, string][] = [
  ["25.4", "8", "6", "12.7", "TCFR-25.8.12"], ["25.4", "10", "8", "12.7", "TCFR-25.10.12"], ["25.4", "6.35", "4.57", "21.5", "TCFR-25.6.21"],
  ["25.4", "9.53", "7.75", "21.5", "TCFR-25.9.21"], ["25.4", "12.7", "9.4", "21.5", "TCFR-25.12.21"], ["25.4", "19.05", "15.75", "21.5", "TCFR-25.19.21"],
  ["25.4", "10.2", "7", "12.7", "TCFR-25.7.12"], ["25.4", "13.5", "10.3", "12.7", "TCFR-25.13.12"], ["25.4", "17.2", "14", "12.7", "TCFR-25.17.12"],
  ["34", "13", "10", "18", "TCFR-34.13.18"], ["34", "19", "16", "18", "TCFR-34.19.18"], ["34", "23", "20", "18", "TCFR-34.23.18"],
  ["34", "17.2", "14", "18", "TCFR-34.17.18"], ["34", "21.3", "18.1", "18", "TCFR-34.21.18"],
  ["50.5", "29", "26", "21.5", "TCFR-50.29.21"], ["50.5", "35", "32", "21.5", "TCFR-50.35.21"], ["50.5", "41", "38", "21.5", "TCFR-50.41.21"],
  ["50.5", "21.3", "18.1", "21.5", "TCFR-50.21.21"], ["50.5", "26.9", "23.7", "21.5", "TCFR-50.26.21"], ["50.5", "33.7", "29.7", "21.5", "TCFR-50.33.21"],
  ["50.5", "25.4", "22.1", "21.5", "TCFR-50.25.21"], ["50.5", "25", "22.6", "21.5", "TCFR-50.21"], ["50.5", "38.1", "34.9", "21.5", "TCFR-50.38.21"],
  ["50.5", "38", "35.6", "21.5", "TCFR-50.38"], ["50.5", "25.4", "22.1", "12.7", "TCFR-50.25.12"], ["50.5", "38.1", "34.9", "12.7", "TCFR-50.38.12"],
  ["64", "53", "50", "21.5", "TCFR-64.53.21"], ["64", "42.4", "38.4", "21.5", "TCFR-64.42.21"], ["64", "48.3", "44.3", "21.5", "TCFR-64.48.21"],
  ["64", "50.8", "47.5", "21.5", "TCFR-64.50.21"], ["64", "51", "48.6", "21.5", "TCFR-64.51.21"], ["64", "50.8", "47.5", "12.7", "TCFR-64.50.12"],
  ["77", "60.3", "56.3", "21.5", "TCFR-77.60.21"], ["77", "60.3", "56.3", "28", "TCFR-77.60.28"], ["77", "63.5", "60.3", "21.5", "TCFR-77.63.21"],
  ["77", "63.5", "60.3", "12.7", "TCFR-77.63.12"],
  ["91", "70", "66", "28", "TCFR-91.70.28"], ["91", "76.1", "72.1", "28", "TCFR-91.76.28"], ["91", "76.1", "72.1", "21.5", "TCFR-91.76.21"],
  ["106", "85", "81", "28", "TCFR-106.85.28"], ["106", "88.9", "84.9", "28", "TCFR-106.88.28"], ["106", "88.9", "84.9", "21.5", "TCFR-106.88.21"],
  ["119", "104", "100", "28", "TCFR-119.104.28"], ["119", "101.6", "97.6", "28", "TCFR-119.101.28"], ["119", "101.6", "97.6", "15.9", "TCFR-119.101.15"],
  ["130", "114.3", "110.3", "28", "TCFR-130.114.28"], ["130", "114.3", "109.7", "28", "TCFR-130.114"],
  ["144.4", "129", "125", "28", "TCFR-144.129.28"], ["155", "129", "125", "28", "TCFR-155.129.28"], ["155", "139.7", "135.7", "28", "TCFR-155.139.28"],
  ["167", "154", "150", "28", "TCFR-258.12"], ["183", "154", "150", "28", "TCFR-183.154.28"], ["183", "168.3", "161.1", "28", "TCFR-183.168.28"],
  ["217.4", "204", "200", "28", "TCFR-217.204.28"], ["233", "204", "200", "28", "TCFR-233.204.28"], ["233", "219.1", "213.5", "28", "TCFR-233.219.28"],
  ["268", "254", "250", "28", "TCFR-268.254.28"], ["286.1", "273", "267.8", "28", "TCFR-286.273.28"], ["319", "304", "300", "28", "TCFR-319.304.28"],
  ["338.1", "323.9", "318.2", "28", "TCFR-338.323.28"],
];

// Sight glass end caps: ISO, DIN, BS, clamp A, glass d1, thickness T, part code
const SIGHT: [string, string, string, string, string, string, string][] = [
  ["DN 6/8/10", "DIN 4/6/8/10", "½″–¾″", "25.4", "10", "10", "TCSG-K25.10.10"],
  ["", "DIN 10/15/20", "", "34", "14", "8", "TCSG-K34.14.8"],
  ["DN 8/10/15/20/25", "DIN 32/40", "1″–1½″", "50.5", "25", "10", "TCSG-K50.25.10"],
  ["DN 32/40", "DIN 50", "2″", "64", "30", "10", "TCSG-K64.30.10"],
];

const CLAMP_HEAD = (last: string) => ["Part code", "ISO 2852", "DIN 32676", "BS 4825", "Clamp A (mm)", last];

export const SERIES: SanSeries[] = [
  {
    slug: "single-pin-tri-clamp",
    name: "Single pin heavy-duty tri-clamp (S type)",
    short: "Single pin tri-clamp",
    img: `${IMG}/single-pin-clamp.jpg`,
    intro: "The everyday tri-clamp. One hinge pin and a wing nut close two ferrules onto a gasket by hand, with no tools. Heavy-duty cast body for higher working pressures.",
    pressure: "9–50 bar at 150 °C",
    specs: [
      ["Standards", "ISO 2852, DIN 32676, BS 4825 (ASME BPE)"],
      ...COMMON,
      ["Surface finish", "Mechanically polished, electropolished or mirror polished"],
      ["Test pressure", "18–100 bar"],
      ["Max. working pressure", "9–50 bar at 150 °C (depends on size)"],
      ["Options", "Different wing nuts available"],
    ],
    head: CLAMP_HEAD("T (mm)"),
    rows: CLAMP_SIZES.map((r, i) => [`TCL-S-${kCode(r[3])}`, dash(r[0]), dash(r[1]), dash(r[2]), r[3], SINGLE_T[i]]),
  },
  {
    slug: "double-bolted-clamp",
    name: "Double-bolted high-pressure clamp (SSH type)",
    short: "Double-bolted tri-clamp",
    img: `${IMG}/double-bolted-clamp.jpg`,
    intro: "Two bolts instead of a hinge and wing nut, tightened with a spanner. Used where the joint must not be opened by hand, or on lines with pressure surges.",
    pressure: "9–18 bar",
    specs: [
      ["Standards", "ISO 2852, DIN 32676, BS 4825 (ASME BPE)"],
      ...COMMON,
      ["Surface finish", "Mechanically polished, electropolished or mirror polished"],
      ["Test pressure", "18–100 bar"],
      ["Max. working pressure", "9–18 bar (depends on size)"],
      ["Options", "Stainless steel A2 or brass nuts"],
    ],
    head: CLAMP_HEAD("W (mm)"),
    rows: CLAMP_SIZES.map((r, i) => [`TCL-DB-${kCode(r[3])}`, dash(r[0]), dash(r[1]), dash(r[2]), r[3], DOUBLE_W[i]]),
  },
  {
    slug: "tri-clamp-ferrule",
    name: "Tri-clamp ferrule, short",
    short: "Tri-clamp ferrule",
    img: `${IMG}/ferrules.jpg`,
    intro: "The weld-on end that turns a plain tube into a tri-clamp connection. Welded to the tube, then joined to the next ferrule with a gasket and clamp.",
    pressure: "Clamp-rated",
    specs: [
      ["Standards", "DIN 32676 type A, B and C"],
      ...COMMON,
      ["Surface finish", "Mechanically polished or mirror polished; electropolishing on request"],
      ["Roughness", "Ra < 0.4 µm inside, Ra < 0.8 µm outside"],
      ["Sterilising temperature", "150 °C"],
      ["Custom sizes", "Available on request"],
    ],
    head: ["Part code", "Flange OD A (mm)", "Tube OD (mm)", "Tube ID (mm)", "Length L (mm)"],
    rows: FERRULES.map((f) => [f[4], f[0], f[1], f[2], f[3]]),
  },
  {
    slug: "tri-clamp-blind-cover",
    name: "Tri-clamp blind cover (blank)",
    short: "Tri-clamp blind cover",
    img: `${IMG}/blind-cover.jpg`,
    intro: "A solid end cap that closes off a ferrule, for unused ports, cleaning points and line ends.",
    pressure: "10–25 bar",
    specs: [
      ["Standards", "ISO 2852, DIN 32676, BS 4825 (ASME BPE)"],
      ...COMMON,
      ["Surface finish", "Mechanically polished; mirror polish or electropolishing on request"],
      ["Roughness", "Ra < 0.4 µm inside, Ra < 0.8 µm outside"],
      ["Max. pressure", "10–25 bar (depends on size)"],
      ["Sterilising temperature", "150 °C"],
    ],
    head: CLAMP_HEAD("T (mm)"),
    rows: CLAMP_SIZES.map((r, i) => [`TCBL-${kCode(r[3])}.${SINGLE_T[i].replace(".", "")}`, dash(r[0]), dash(r[1]), dash(r[2]), r[3], SINGLE_T[i]]),
  },
  {
    slug: "sight-glass-end-cap",
    name: "Sight glass end cap",
    short: "Sight glass end cap",
    img: `${IMG}/sight-glass-end-cap.jpg`,
    intro: "An end cap with a glass window, so you can see the product, level or cleaning inside a vessel or line without opening it.",
    pressure: "1–16 bar",
    specs: [
      ["Standards", "ISO 2852, DIN 32676, BS 4825 (ASME BPE)"],
      ...COMMON,
      ["Surface finish", "Mechanically polished; mirror polish or electropolishing on request"],
      ["Roughness", "Ra < 0.4 µm inside, Ra < 0.8 µm outside"],
      ["Max. pressure", "1–16 bar (depends on size)"],
      ["Working temperature", "−30 to 230 °C"],
    ],
    head: ["Part code", "ISO 2852", "DIN 32676", "BS 4825", "Clamp A (mm)", "Glass d1 (mm)", "T (mm)"],
    rows: SIGHT.map((r) => [r[6], dash(r[0]), dash(r[1]), dash(r[2]), r[3], r[4], r[5]]),
    note: "Larger sizes on request.",
  },
];

export const findSeries = (slug: string) => SERIES.find((s) => s.slug === slug);

export const SAN_FAQ = [
  {
    q: "What is a tri-clamp connection?",
    a: "Two ferrules welded to the tube ends, a gasket between them, and a clamp that holds them together. It opens and closes in seconds and leaves a smooth bore with no threads, so it cleans easily.",
  },
  {
    q: "Which standards do these fittings match?",
    a: "ISO 2852, DIN 32676 and BS 4825 (ASME BPE). The size tables show the equivalent DN, DIN and inch size for each clamp diameter, so you can match an existing line.",
  },
  {
    q: "Single pin or double-bolted clamp?",
    a: "Single pin clamps close by hand with a wing nut and suit most lines. Double-bolted clamps are tightened with a tool, for joints that must not be opened by hand or lines with pressure surges.",
  },
  {
    q: "Do they come with a material certificate?",
    a: "Yes. Every delivery comes with an EN 10204 3.1 material certificate, and each part is marked with size, heat number and material grade.",
  },
  {
    q: "Which materials are available?",
    a: "316L, 316, 304, 304L and duplex stainless steel. Tell us the grade and surface finish when you ask for a quote.",
  },
  {
    q: "Are tri-clamp fittings suitable for CIP and SIP?",
    a: "Yes. The polished bore and the clamp joint are designed for clean-in-place and steam-in-place. Ferrules, blind covers and sight glasses are rated for sterilising at 150 °C.",
  },
];

