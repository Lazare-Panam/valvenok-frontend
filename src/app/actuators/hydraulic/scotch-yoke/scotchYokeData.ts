// HRS scotch yoke hydraulic actuators: HRSDA (double acting) and HRSSA (spring return),
// hydraulic or electro-hydraulic (EHRSDA / EHRSSA).
// Torque tables reuse the existing model list (adf/products/hooks/hrsdaData.ts, from the data sheet);
// the other values come from the Susin I-Tork "Hydraulic & Electro Hydraulic Actuator — Data Sheet"
// (Hydraulic - HLP.pdf), Rotary Scotch Yoke pages 3–9.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import { HRSDA_DATA } from "../adf/products/hooks/hrsdaData";
import type { SeriesDef, ModelRow } from "../_series/types";

const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/ktc-hrsda.jpg";
const n = (v?: number) => (v == null ? "—" : v.toLocaleString("en-GB"));
const short = (m: string) => m.split("/")[0];

const da = HRSDA_DATA.filter((d) => d.series === "HRSDA");
const sr = HRSDA_DATA.filter((d) => d.series === "HRSSA");

// Spring return: one summary row per actuator size (spring options vary the torque)
const srSizes = [...new Set(sr.map((d) => short(d.model)))].map((size) => {
  const rows = sr.filter((d) => short(d.model) === size);
  const starts = rows.map((d) => d.springStart ?? 0);
  return {
    model: size,
    springs: String(rows.length),
    spring: `${n(Math.min(...starts))} – ${n(Math.max(...starts))} Nm`,
  } as ModelRow;
});

export const SCOTCH_YOKE: SeriesDef = {
  code: "HRS",
  path: "/actuators/hydraulic/scotch-yoke",
  h1: "Hydraulic Scotch Yoke Series",
  subtitle: "HRSDA Double Acting · HRSSA Spring Return",
  overline: "Hydraulic Actuators / Scotch Yoke",
  intro:
    "Scotch yoke part-turn actuators for the largest valves, hydraulic (HRSDA / HRSSA) or electro-hydraulic (EHRSDA / EHRSSA), at up to 200 bar. Double acting from 208 to 112,595 Nm across 20 sizes, and spring return models that close the valve on loss of pressure or power. Symmetric or canted yoke, IP66M / IP67M.",
  image: IMAGE,
  imageAlt: "HRSDA hydraulic scotch yoke actuator",
  catalog: SUSIN_CATALOG.HLP,
  catalogLabel: "Download hydraulic data sheet (PDF)",
  chips: ["Scotch Yoke", "Double Acting", "Spring Return", "Up to 200 bar", "IP66M / IP67M", "Electro-Hydraulic Option"],
  heroStats: [
    { label: "Torque", value: "208 – 112,595 Nm" },
    { label: "Pressure", value: "Up to 200 bar" },
    { label: "Models", value: "HRSDA · HRSSA" },
    { label: "Protection", value: "IP66M / IP67M" },
  ],
  techSpecs: [
    { label: "Double Acting Torque", value: "208 – 112,595 Nm (tables at 100, 130 and 160 bar)" },
    { label: "Spring Return", value: "Spring torque from 147 Nm, several spring options per size" },
    { label: "Operating Pressure", value: "Hydraulic up to 200 bar (2,900 psi)" },
    { label: "Protection", value: "IEC IP66M / IP67M, O-ring sealed" },
    { label: "Body", value: "Fully enclosed centre body, ductile iron or stainless steel by size" },
    { label: "Yoke", value: "Symmetric or canted design" },
    { label: "Cylinder", value: "Carbon steel, honed and hot chrome plated; chrome plated rods" },
    { label: "Bearings", value: "High-grade bronze or ceramic; bronze sliding blocks" },
    { label: "Travel Stop", value: "Adjustable -5° to +95°" },
    { label: "Mounting", value: "ISO 5211 direct mounting; NAMUR for accessories" },
    { label: "Painting", value: "C4 to ISO 12944 (option C5-M)" },
    { label: "Fail Action", value: "Stay put, fail last, fail open or fail close (spring or accumulator)" },
  ],
  features: [
    { title: "Torque for the Largest Valves", body: "Up to 112,595 Nm double acting at 160 bar, from a fully enclosed, weather-resistant centre body." },
    { title: "Symmetric or Canted Yoke", body: "Choose the yoke to match the valve torque curve with minimum weight and cost." },
    { title: "Low Friction, No Chatter", body: "Honed, hot chrome plated cylinders, bronze sliding blocks and a dynamic sailing piston seal, even after long idle periods." },
    { title: "Electro-Hydraulic Option", body: "EHRSDA / EHRSSA versions with power pack, accumulator or hand pump; solar-charged power packs for remote sites." },
    { title: "Fail-Safe Choices", body: "Stay put, fail last, fail open or fail close using spring or stored accumulator energy." },
    { title: "Modular & Low Maintenance", body: "Modular double acting, tandem or spring return builds; replaceable bearings and L-plate yoke for long life." },
  ],
  trust: [
    { value: "112,595 Nm", label: "Max Torque" },
    { value: "200 bar", label: "Max Pressure" },
    { value: "20 Sizes", label: "Double Acting" },
    { value: "IP66M / IP67M", label: "Protection" },
    { value: "C4 / C5-M", label: "ISO 12944 Painting" },
  ],
  common: [],
  groups: [
    {
      key: "da",
      title: "HRSDA double acting",
      note: "Torque in Nm, open / close. Hydraulic HRSDA or electro-hydraulic EHRSDA.",
      cols: [
        { key: "model", label: "Model" },
        { key: "t100", label: "100 bar" },
        { key: "t130", label: "130 bar" },
        { key: "t160", label: "160 bar" },
      ],
      summary: ["model", "t100", "t130", "t160"],
      rows: da.map((d) => ({
        model: short(d.model),
        t100: `${n(d.torque100OpenNm)} / ${n(d.torque100CloseNm)}`,
        t130: `${n(d.torque130OpenNm)} / ${n(d.torque130CloseNm)}`,
        t160: `${n(d.torque160OpenNm)} / ${n(d.torque160CloseNm)}`,
      }) as ModelRow),
    },
    {
      key: "sr",
      title: "HRSSA spring return",
      note: "Each size comes with several spring options. Spring start torque range shown; see the full list for every spring and the oil-side torque at 100, 130 and 160 bar.",
      cols: [
        { key: "model", label: "Size" },
        { key: "springs", label: "Spring Options" },
        { key: "spring", label: "Spring Start Torque" },
      ],
      summary: ["model", "springs", "spring"],
      rows: srSizes,
    },
  ],
  listTitle: "",
  listIntro: "",
  listChips: [],
  rfqName: "Hydraulic Scotch Yoke Actuator (HRSDA / HRSSA)",
  rfqDescription:
    "Hydraulic or electro-hydraulic scotch yoke actuators up to 200 bar: double acting 208–112,595 Nm, spring return options, IP66M / IP67M.",
  rfqKeySpecs: [
    { label: "Torque", value: "208 – 112,595 Nm" },
    { label: "Pressure", value: "Up to 200 bar" },
    { label: "Versions", value: "Double acting, spring return" },
    { label: "Protection", value: "IP66M / IP67M" },
  ],
  subCategory: "Scotch Yoke",
  productsHref: "/actuators/hydraulic/adf/products",
  totalModels: HRSDA_DATA.length,
};
