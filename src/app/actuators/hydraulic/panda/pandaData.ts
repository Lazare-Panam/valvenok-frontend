// PANDA series: compact electro-hydraulic part-turn actuators, low pressure (max 8 bar on board).
// Every value comes from the Susin hydraulic brochure "Product Information — Electro Hydraulic
// Actuator, High Pressure PA / Low Pressure PANDA" (Hydraulic - KTC hydraulic.pdf), PANDA pages.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import type { SeriesDef, ModelRow } from "../_series/types";

const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/ktc-panda-pa.jpg";

// Dimensions are listed for the smaller sizes only ("other dimensions available on request")
const DIM: Record<string, Partial<ModelRow>> = {
  D10: { a: "410", b: "298", c: "210", oil: "0.3 L", flange: "F05 / F07", conn: "DS 14 × 16" },
  D15: { a: "460", b: "306", c: "210", oil: "0.6 L", flange: "F05 / F07", conn: "DS 14 × 18" },
  D20: { a: "460", b: "332", c: "210", oil: "0.6 L", flange: "F05 / F07", conn: "DS 17 × 19" },
  D30: { a: "640", b: "350", c: "210", oil: "1.5 L", flange: "F07 / F10", conn: "DS 17 × 24" },
  E10: { a: "460", b: "279", c: "210", oil: "0.6 L", flange: "F05 / F07", conn: "DS 17 × 19" },
  E15: { a: "640", b: "292", c: "210", oil: "1.5 L", flange: "F07 / F10", conn: "DS 17 × 24" },
  E20: { a: "640", b: "314", c: "210", oil: "1.5 L", flange: "F07 / F10", conn: "DS 22 × 30" },
  E30: { a: "640", b: "321", c: "210", oil: "1.5 L", flange: "F07 / F10", conn: "DS 22 × 34" },
};
const dims = (code: string) => {
  const d = DIM[code];
  return d ? { ...d, abc: `${d.a} × ${d.b} × ${d.c} mm` } as Partial<ModelRow> : {};
};

const DA: [string, number][] = [
  ["D10", 46], ["D15", 93], ["D20", 146], ["D30", 213], ["D40", 344], ["D50", 443], ["D60", 696],
  ["D70", 908], ["D80", 1225], ["D90", 1702], ["D100", 2859], ["D110", 4150], ["D120", 5744], ["D130", 7207],
];

// [code, open hydraulic 0°→90° (start / end), close spring 90°→0° (start / end)]
// E40: the brochure prints the same torques as E20, which looks like a typo; shown as "On request" until Susin confirms.
const SR: [string, string, string][] = [
  ["E10", "102 / 77", "69 / 44"], ["E15", "152 / 118", "94 / 60"], ["E20", "245 / 187", "157 / 98"],
  ["E30", "371 / 245", "198 / 126"], ["E40", "On request", "On request"], ["E50", "638 / 509", "399 / 269"],
  ["E60", "846 / 657", "568 / 379"], ["E70", "1,192 / 946", "756 / 510"], ["E80", "1,994 / 1,608", "1,251 / 865"],
  ["E90", "2,840 / 2,228", "1,922 / 1,309"], ["E100", "3,989 / 3,124", "2,620 / 1,754"],
  ["E110", "4,099 / 3,335", "2,971 / 2,207"], ["E120", "9,274 / 7,403", "5,939 / 4,068"],
];

const DIM_COLS = [
  { key: "abc", label: "Dimensions A × B × C" },
  { key: "flange", label: "ISO 5211 Flange" },
  { key: "conn", label: "Connection (SW × depth)" },
  { key: "oil", label: "Oil Volume" },
];

export const PANDA: SeriesDef = {
  code: "PANDA",
  path: "/actuators/hydraulic/panda",
  h1: "PANDA Series",
  subtitle: "Electro-Hydraulic Actuator — Low Pressure",
  overline: "Hydraulic Actuators / PANDA Series",
  intro:
    "Compact electro-hydraulic part-turn actuators with their own pump and a maximum of 8 bar on board, so only electric power is needed. Built on a part-turn actuator originally designed for air, they can replace or retrofit pneumatic actuators. Double acting from 46 to 7,207 Nm, spring return up to 9,274 Nm, on-off or modulating, ATEX Zone 1 & 2.",
  image: IMAGE,
  imageAlt: "PANDA electro-hydraulic low pressure part-turn actuator",
  catalog: SUSIN_CATALOG.KTC_HYDRAULIC,
  catalogLabel: "Download PANDA / PA brochure (PDF)",
  chips: ["Electro-Hydraulic", "Max 8 bar on board", "Double Acting", "Spring Return", "ATEX Zone 1 & 2", "SIL 2 option"],
  heroStats: [
    { label: "Torque", value: "46 – 9,274 Nm" },
    { label: "Pressure", value: "Max 8 bar on board" },
    { label: "Models", value: "D10 – D130 · E10 – E120" },
    { label: "Hazardous Areas", value: "ATEX Zone 1 & 2" },
  ],
  techSpecs: [
    { label: "Double Acting Torque", value: "46 – 7,207 Nm (D10 – D130)" },
    { label: "Spring Return Torque", value: "Open up to 9,274 Nm, spring close up to 5,939 Nm (E10 – E120)" },
    { label: "On-Board Pressure", value: "Max 8.0 bar" },
    { label: "Motor Voltage", value: "400 V 50/60 Hz or 230 V 50 Hz" },
    { label: "Power Consumption", value: "180 – 250 W" },
    { label: "Solenoid Valve", value: "24 VDC or 230 V 50 Hz" },
    { label: "Speed", value: "Adjustable by throttle" },
    { label: "Medium", value: "Hydraulic oil HLP, filtered min. 10 µm" },
    { label: "Ambient Temperature", value: "-20°C to +50°C" },
    { label: "Hazardous Areas", value: "Zone 1 and 2 (ATEX certified option)" },
    { label: "Control", value: "Open / close or modulating" },
    { label: "Rotation", value: "90°, adjustable" },
    { label: "Mounting", value: "ISO 5211, NAMUR plate; connection D, L or DS" },
    { label: "Options", value: "ATEX, SIL 2, limit switch box, potentiometer, on-board control box" },
  ],
  features: [
    { title: "Only Power Needed", body: "Pump, oil and control block are built in. No compressed air or separate hydraulic supply is required." },
    { title: "Replaces Pneumatic Actuators", body: "Based on a part-turn actuator originally designed for air, with a NAMUR flange for direct connection: suitable for replacing or retrofitting pneumatic actuators." },
    { title: "Fail-Safe Options", body: "Spring return models, or a pressure accumulator, store the energy to move the valve to its safe position on power loss." },
    { title: "Nearly Wear-Free", body: "Mechanically loaded parts run permanently in oil, with no transmission gearbox." },
    { title: "Block Technology", body: "Block construction with O-ring sealing and almost no pipes or fittings; every unit is function-tested before delivery." },
    { title: "Hazardous & Outdoor Use", body: "ATEX certified and SIL 2 versions; suitable for outdoor, sea-air and explosive atmospheres." },
  ],
  trust: [
    { value: "46–9,274 Nm", label: "Torque Range" },
    { value: "8 bar", label: "On-Board Pressure" },
    { value: "27 Models", label: "Double Acting & Spring Return" },
    { value: "ATEX", label: "Zone 1 & 2" },
    { value: "SIL 2", label: "Certified Option" },
  ],
  common: [
    { label: "On-Board Pressure", value: "Max 8.0 bar" },
    { label: "Motor Voltage", value: "400 V 50/60 Hz or 230 V 50 Hz" },
    { label: "Power Consumption", value: "180 – 250 W" },
    { label: "Solenoid Valve", value: "24 VDC or 230 V 50 Hz" },
    { label: "Ambient Temperature", value: "-20°C to +50°C" },
    { label: "Hazardous Areas", value: "Zone 1 and 2" },
    { label: "Control", value: "Open / close (O) or modulating (M)" },
    { label: "Options", value: "EX ATEX · S2 SIL 2 · EB limit switch box · PM potentiometer · OB on-board control" },
  ],
  groups: [
    {
      key: "da",
      title: "Double acting",
      note: "Hydraulic open and close, 0° / 90°.",
      cols: [
        { key: "model", label: "Model" },
        { key: "torque", label: "Torque Open / Close" },
        ...DIM_COLS,
      ],
      summary: ["model", "torque", "flange", "abc"],
      rows: DA.map(([code, nm]) => ({ model: `PANDA ${code}`, torque: `${nm.toLocaleString("en-GB")} Nm`, ...dims(code) }) as ModelRow),
    },
    {
      key: "sr",
      title: "Single acting, spring return",
      note: "Oil opens the valve (0° → 90°), the spring closes it (90° → 0°). Torque shown as start / end of stroke.",
      cols: [
        { key: "model", label: "Model" },
        { key: "open", label: "Open, Hydraulic (Nm)" },
        { key: "close", label: "Close, Spring (Nm)" },
        ...DIM_COLS,
      ],
      summary: ["model", "open", "close", "flange"],
      rows: SR.map(([code, open, close]) => ({ model: `PANDA ${code}`, open, close, ...dims(code) }) as ModelRow),
    },
  ],
  listTitle: "PANDA Series Electro-Hydraulic Actuators: All Models",
  listIntro:
    "Low pressure electro-hydraulic part-turn actuators, max 8 bar on board. 14 double acting models (46–7,207 Nm) and 13 spring return models. Click a model for its full specifications.",
  listChips: ["D10 – D130", "E10 – E120", "46 – 9,274 Nm", "Max 8 bar", "ATEX Zone 1 & 2"],
  rfqName: "PANDA Electro-Hydraulic Actuator",
  rfqDescription:
    "Compact low pressure (8 bar) electro-hydraulic part-turn actuators, double acting 46–7,207 Nm or spring return, ATEX Zone 1 & 2.",
  rfqKeySpecs: [
    { label: "Torque", value: "46 – 9,274 Nm" },
    { label: "Pressure", value: "Max 8 bar on board" },
    { label: "Fail Action", value: "Spring return option" },
    { label: "Hazardous Areas", value: "ATEX Zone 1 & 2" },
  ],
  subCategory: "PANDA Series",
};
