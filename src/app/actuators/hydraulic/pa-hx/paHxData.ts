// PA-HX series: hydraulic rack & pinion part-turn actuators, 80–160 bar.
// Every value comes from the Susin "Hydraulic & Electro Hydraulic Actuator — Data Sheet"
// (Hydraulic - HLP.pdf), Rotary Rack & Pinion pages 10–13 and Construction of Material page 17.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import type { SeriesDef, ModelRow } from "../_series/types";

const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/pa-hx.jpg";

const SHAFT = "Max Shaft D (4KtP / 4KtD / 2Fl / Ws-Wd, mm)";

// [type, torque, A, B, C, 4KtP, 4KtD, 2Fl, Ws/Wd, flange, weight kg, oil L]
const DA: (string | number)[][] = [
  ["D005", 90, 200, 110, 96, 14, 14, 14, 16, "F05 – F07", 9, "0.016"],
  ["D010", 220, 270, 120, 115, 17, 17, 17, 20, "F05 – F07", 15, "0.04"],
  ["D020", 400, 290, 150, 155, 24, 24, 22, 30, "F07 – F10", 18, "0.07"],
  ["D040", 600, 300, 160, 155, 30, 30, 27, 40, "F10 – F14", 25, "0.08"],
  ["D041", 1200, 500, 205, 185, 40, 40, 40, 55, "F14 – F16", 43, "0.36"],
  ["D042", 900, 400, 160, 155, 30, 30, 27, 40, "F12 – F14", 25, "0.16"],
  ["D043", 2150, 500, 205, 185, 40, 40, 40, 55, "F14 – F16", 45, "0.40"],
  ["D045", 4500, 630, 265, 230, 55, 55, 50, 65, "F16 – F25", 97, "0.90"],
  ["D110", 10000, 835, 365, 285, 75, 75, 75, 90, "F16 – F30", 248, "1.90"],
];

// [type, spring torque, A, B, C, 4KtP, 4KtD, 2Fl, Ws/Wd, flange, switch box a/b/c/d, weight, oil]
const SC: (string | number)[][] = [
  ["E10-SC", 35, 275, 110, 100, 14, 14, 14, 16, "F05 – F07", "30/80/20/18", 10, "0.02"],
  ["E20-SC", 90, 380, 130, 115, 17, 17, 17, 20, "F05 – F07", "30/80/20/22", 20, "0.04"],
  ["E30-SC", 160, 530, 160, 155, 24, 24, 22, 30, "F07 – F10", "30/80/20/28", 25, "0.075"],
  ["E40-SC", 400, 660, 170, 155, 30, 30, 27, 40, "F10 – F14", "30/80/20/28", 55, "0.16"],
  ["E50-SC", 860, 805, 230, 180, 40, 40, 40, 55, "F10 – F16", "30/130/20/36", 85, "0.4"],
  ["E70-SC", 1900, 1100, 300, 230, 55, 55, 55, 65, "F14 – F25", "30/155/30/48", 155, "0.9"],
  ["E75-SC", 2400, 1100, 300, 230, 55, 55, 55, 65, "F14 – F25", "30/155/30/48", 160, "1.1"],
  ["E90-SC", 4000, 1300, 405, 285, 75, 75, 75, 90, "F16 – F30", "40/210/60/30", 320, "1.9"],
  ["E110-SC", 8000, 1680, 510, 285, 75, 75, 75, 90, "F16 – F30", "10/210/30/30", 640, "3.7"],
];

const SO: (string | number)[][] = [
  ["E05-SO", 45, 210, 110, 100, 14, 14, 14, 16, "F05 – F07", "30/80/20/18", 10, "0.016"],
  ["E20-SO", 100, 355, 130, 115, 17, 17, 17, 20, "F05 – F07", "30/80/20/22", 20, "0.040"],
  ["E25-SO", 180, 485, 160, 155, 24, 24, 22, 30, "F07 – F10", "30/80/20/28", 25, "0.075"],
  ["E40-SO", 455, 635, 170, 155, 30, 30, 27, 40, "F10 – F14", "30/80/20/28", 45, "0.16"],
  ["E50-SO", 940, 750, 230, 180, 40, 40, 40, 55, "F10 – F16", "30/130/20/36", 80, "0.40"],
  ["E72-SO", 2225, 1050, 300, 230, 55, 55, 55, 65, "F14 – F25", "30/155/30/48", 150, "0.90"],
  ["E78-SO", 4160, 1265, 405, 285, 75, 75, 75, 90, "F16 – F30", "", 360, "1.90"],
  ["E110-SO", 8320, 1765, 510, 285, 75, 75, 75, 90, "F16 – F30", "", 620, "3.70"],
];

const n = (v: string | number) => (typeof v === "number" ? v.toLocaleString("en-GB") : v);
const base = (r: (string | number)[]) => ({
  model: `PA-HX ${r[0]}`,
  torque: `${n(r[1])} Nm`,
  abc: `${n(r[2])} × ${n(r[3])} × ${n(r[4])} mm`,
  shaft: `${r[5]} / ${r[6]} / ${r[7]} / ${r[8]}`,
  flange: String(r[9]),
});
const daRow = (r: (string | number)[]) => ({ ...base(r), weight: `${r[10]} kg`, oil: `${r[11]} L` }) as ModelRow;
const srRow = (r: (string | number)[]) => ({ ...base(r), box: String(r[10]), weight: `${r[11]} kg`, oil: `${r[12]} L` }) as ModelRow;

const COLS = (torqueLabel: string, box: boolean) => [
  { key: "model", label: "Model" },
  { key: "torque", label: torqueLabel },
  { key: "flange", label: "ISO 5211 Flange" },
  { key: "abc", label: "Dimensions A × B × C" },
  { key: "shaft", label: SHAFT },
  ...(box ? [{ key: "box", label: "Switch Box Interface a/b/c/d" }] : []),
  { key: "weight", label: "Weight" },
  { key: "oil", label: "Oil Volume" },
];

export const PA_HX: SeriesDef = {
  code: "PA-HX",
  path: "/actuators/hydraulic/pa-hx",
  h1: "PA-HX Series",
  subtitle: "Hydraulic Rack & Pinion Actuator",
  overline: "Hydraulic Actuators / PA-HX Series",
  intro:
    "Rack & pinion part-turn actuators that turn hydraulic pressure into 90° rotary motion, for precise, high-torque valve control. Double acting from 90 to 10,000 Nm at 100 bar, or single acting with a spring to close (35–8,000 Nm) or to open (45–8,320 Nm). Working pressure 80–160 bar, ISO 5211 mounting, ATEX conformity.",
  image: IMAGE,
  imageAlt: "PA-HX hydraulic rack and pinion part-turn actuators",
  catalog: SUSIN_CATALOG.HLP,
  catalogLabel: "Download hydraulic data sheet (PDF)",
  chips: ["Rack & Pinion", "Double Acting", "Spring to Close", "Spring to Open", "80 – 160 bar", "ATEX"],
  heroStats: [
    { label: "Torque", value: "35 – 10,000 Nm" },
    { label: "Pressure", value: "80 – 160 bar" },
    { label: "Models", value: "26 (D005 – D110, E05 – E110)" },
    { label: "Mounting", value: "ISO 5211 F05 – F30" },
  ],
  techSpecs: [
    { label: "Double Acting Torque", value: "90 – 10,000 Nm at 100 bar (D005 – D110)" },
    { label: "Spring to Close (end torque)", value: "35 – 8,000 Nm (E10-SC – E110-SC)" },
    { label: "Spring to Open (start torque)", value: "45 – 8,320 Nm (E05-SO – E110-SO)" },
    { label: "Working Pressure", value: "80 – 160 bar" },
    { label: "Hydraulic Fluid", value: "HLP 15…46, DIN 51524-2 / ISO 6743-4" },
    { label: "Ambient Temperature", value: "-10°C to +60°C (option -40°C to +80°C)" },
    { label: "Hydraulic Connection", value: "Female thread 1/4\", 3/8\", 1/2\"" },
    { label: "Valve Block", value: "Customised block available (solenoid valves, pressure reducing valves etc.)" },
    { label: "Mounting", value: "ISO 5211, DIN 3337, NAMUR, VDI/VDE 3845" },
    { label: "Hazardous Areas", value: "ATEX conformity (II 2G c k IIC T4, Zone 1)" },
    { label: "Protection", value: "Submersible on request" },
    { label: "Hand Pump & Limit Switches", value: "Hand pump available; wide range of limit switches (mechanical, proximity)" },
  ],
  features: [
    { title: "Precise Rotary Control", body: "Rack & pinion converts hydraulic energy into smooth rotary motion for valves that need fine adjustment." },
    { title: "Modulating Control", body: "Continuous positioning (not only fully open or closed) for variable flow or pressure duty." },
    { title: "Spring Fail-Safe", body: "Single acting versions spring to close or spring to open on loss of pressure." },
    { title: "Speed Control", body: "Adjustable movement speed for better performance and precision." },
    { title: "Manual Override", body: "Manual override and hand pump for operation during power failure." },
    { title: "Stainless Rack & Pinion", body: "V2A rack and pinion, 50CrV4 springs and an S235JR housing (data sheet construction of material)." },
  ],
  trust: [
    { value: "35–10,000 Nm", label: "Torque Range" },
    { value: "160 bar", label: "Max Working Pressure" },
    { value: "26 Models", label: "DA · Spring Close · Spring Open" },
    { value: "ISO 5211", label: "F05 – F30" },
    { value: "ATEX", label: "Conformity" },
  ],
  common: [
    { label: "Working Pressure", value: "80 – 160 bar" },
    { label: "Hydraulic Fluid", value: "HLP 15…46, DIN 51524-2 / ISO 6743-4" },
    { label: "Ambient Temperature", value: "-10°C to +60°C (option -40°C to +80°C)" },
    { label: "Hydraulic Connection", value: "Female thread 1/4\", 3/8\", 1/2\"" },
    { label: "Hazardous Areas", value: "ATEX conformity" },
    { label: "Hand Pump", value: "Available" },
  ],
  groups: [
    {
      key: "da",
      title: "Double acting",
      note: "Part-turn 90°, hydraulic open and close. Torque at 100 bar.",
      cols: COLS("Torque at 100 bar", false),
      summary: ["model", "torque", "flange", "abc", "weight"],
      rows: DA.map(daRow),
    },
    {
      key: "sc",
      title: "Spring return, fail close",
      note: "Single acting, spring to close. End torque of the spring.",
      cols: COLS("Spring End Torque", true),
      summary: ["model", "torque", "flange", "abc", "weight"],
      rows: SC.map(srRow),
    },
    {
      key: "so",
      title: "Spring return, fail open",
      note: "Single acting, spring to open. Start torque of the spring.",
      cols: COLS("Spring Start Torque", true),
      summary: ["model", "torque", "flange", "abc", "weight"],
      rows: SO.map(srRow),
    },
  ],
  listTitle: "PA-HX Series Hydraulic Rack & Pinion Actuators: All Models",
  listIntro:
    "Hydraulic rack & pinion part-turn actuators, 80–160 bar. 9 double acting, 9 spring-to-close and 8 spring-to-open models from 35 to 10,000 Nm, with dimensions, weights and oil volumes. Click a model for its full specifications.",
  listChips: ["D005 – D110", "E05 – E110", "35 – 10,000 Nm", "80 – 160 bar", "ISO 5211"],
  rfqName: "PA-HX Hydraulic Rack & Pinion Actuator",
  rfqDescription:
    "Hydraulic rack & pinion part-turn actuators, 80–160 bar: double acting 90–10,000 Nm, spring to close 35–8,000 Nm, spring to open 45–8,320 Nm.",
  rfqKeySpecs: [
    { label: "Torque", value: "35 – 10,000 Nm" },
    { label: "Pressure", value: "80 – 160 bar" },
    { label: "Versions", value: "Double acting, spring close, spring open" },
    { label: "Mounting", value: "ISO 5211" },
  ],
  subCategory: "PA-HX Series",
};
