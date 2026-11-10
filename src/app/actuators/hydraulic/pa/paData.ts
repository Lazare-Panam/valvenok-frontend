// PA series: compact electro-hydraulic part-turn actuators, high pressure (max 180 bar on board).
// Every value comes from the Susin hydraulic brochure "Product Information — Electro Hydraulic
// Actuator, High Pressure PA / Low Pressure PANDA" (Hydraulic - KTC hydraulic.pdf), PA pages,
// and Susin's product page (pressure 120–180 bar, power 180–750 W).
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import type { SeriesDef, ModelRow } from "../_series/types";

const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/ktc-panda-pa.jpg";

const DA: [string, number][] = [["D10", 250], ["D15", 500], ["D20", 1000], ["D30", 1500], ["D60", 4000]];

// [code, open hydraulic (start / end), close spring (start / end), A, B, C, oil, flange, connection]
const SR: string[][] = [
  ["E30", "222 / 145", "142 / 65", "526", "300", "232", "0.3 L", "F10", "DS 14 × 20"],
  ["E40", "451 / 263", "444 / 256", "673", "355", "252", "0.3 L", "F12", "DS 22 × 35"],
  ["E50", "896 / 499", "914 / 517", "834", "350", "260", "0.3 L", "F12", "DS 27 × 40"],
  ["E60", "2,100 / 1,156", "2,024 / 1,081", "1,117", "410", "277", "1.0 L", "F14", "DS 36 × 40"],
];

export const PA: SeriesDef = {
  code: "PA",
  path: "/actuators/hydraulic/pa",
  h1: "PA Series",
  subtitle: "Electro-Hydraulic Actuator — High Pressure",
  overline: "Hydraulic Actuators / PA Series",
  intro:
    "Compact electro-hydraulic part-turn actuators working at up to 180 bar on board, for high torque from a small body. Pump, oil and controls are built in, so only electric power is needed. Double acting from 250 to 4,000 Nm, spring return up to 2,100 Nm, and up to 10,000 Nm on request. On-off or modulating, ATEX Zone 1 & 2.",
  image: IMAGE,
  imageAlt: "PA electro-hydraulic high pressure part-turn actuator",
  catalog: SUSIN_CATALOG.KTC_HYDRAULIC,
  catalogLabel: "Download PANDA / PA brochure (PDF)",
  chips: ["Electro-Hydraulic", "Up to 180 bar", "Double Acting", "Spring Return", "ATEX Zone 1 & 2", "SIL 2 option"],
  heroStats: [
    { label: "Torque", value: "250 – 4,000 Nm (10,000 on request)" },
    { label: "Pressure", value: "120 – 180 bar" },
    { label: "Models", value: "D10 – D60 · E30 – E60" },
    { label: "Hazardous Areas", value: "ATEX Zone 1 & 2" },
  ],
  techSpecs: [
    { label: "Double Acting Torque", value: "250 – 4,000 Nm (D10 – D60)" },
    { label: "Spring Return Torque", value: "Open up to 2,100 Nm, spring close up to 2,024 Nm (E30 – E60)" },
    { label: "Higher Torque", value: "Up to 10,000 Nm on request" },
    { label: "Operating Pressure", value: "120 – 180 bar (max 180 bar on board)" },
    { label: "Motor Voltage", value: "400 V 50/60 Hz or 230 V 50 Hz" },
    { label: "Power Consumption", value: "180 – 750 W (model dependent)" },
    { label: "Solenoid Valve", value: "24 VDC or 230 V 50 Hz" },
    { label: "Speed", value: "Adjustable by throttle" },
    { label: "Medium", value: "Hydraulic oil HLP, filtered min. 10 µm" },
    { label: "Ambient Temperature", value: "-20°C to +50°C" },
    { label: "Hazardous Areas", value: "Zone 1 and 2 (Ex-proof option)" },
    { label: "Control", value: "Open / close or modulating" },
    { label: "Rotation", value: "90°, adjustable" },
    { label: "Options", value: "Ex-proof, SIL 2, limit switch box, potentiometer, on-board control box" },
  ],
  features: [
    { title: "High Torque, Small Body", body: "Up to 180 bar on board gives far more torque than a low pressure unit of the same size." },
    { title: "Only Power Needed", body: "Pump, oil and control block are built in. For double acting models a reversible pump and motor are supplied." },
    { title: "Fail-Safe Options", body: "Spring return models, or a pressure accumulator, move the valve to its safe position on power loss." },
    { title: "Nearly Wear-Free", body: "Most wear parts run permanently in oil, and the direct pump-to-cylinder connection avoids gearbox losses." },
    { title: "Complete Control", body: "Available with a complete control cabinet and modulating software, or an on-board control box." },
    { title: "Hazardous Areas", body: "Ex-proof and SIL 2 versions for Zone 1 and 2." },
  ],
  trust: [
    { value: "250–4,000 Nm", label: "Standard Torque" },
    { value: "10,000 Nm", label: "On Request" },
    { value: "180 bar", label: "Max On-Board Pressure" },
    { value: "9 Models", label: "Double Acting & Spring Return" },
    { value: "ATEX", label: "Zone 1 & 2" },
  ],
  common: [
    { label: "Operating Pressure", value: "120 – 180 bar" },
    { label: "Motor Voltage", value: "400 V 50/60 Hz or 230 V 50 Hz" },
    { label: "Solenoid Valve", value: "24 VDC or 230 V 50 Hz" },
    { label: "Ambient Temperature", value: "-20°C to +50°C" },
    { label: "Hazardous Areas", value: "Zone 1 and 2" },
    { label: "Control", value: "Open / close (O) or modulating (M)" },
    { label: "Options", value: "EX Ex-proof · S2 SIL 2 · EB limit switch box · PM potentiometer · OB on-board control" },
  ],
  groups: [
    {
      key: "da",
      title: "Double acting",
      note: "Hydraulic open and close, 0° / 90°.",
      cols: [
        { key: "model", label: "Model" },
        { key: "torque", label: "Torque Open / Close" },
      ],
      summary: ["model", "torque"],
      rows: DA.map(([code, nm]) => ({ model: `PA ${code}`, torque: `${nm.toLocaleString("en-GB")} Nm` }) as ModelRow),
    },
    {
      key: "sr",
      title: "Single acting, spring return",
      note: "Oil opens the valve (0° → 90°), the spring closes it (90° → 0°). Torque shown as start / end of stroke.",
      cols: [
        { key: "model", label: "Model" },
        { key: "open", label: "Open, Hydraulic (Nm)" },
        { key: "close", label: "Close, Spring (Nm)" },
        { key: "abc", label: "Dimensions A × B × C" },
        { key: "flange", label: "ISO 5211 Flange" },
        { key: "conn", label: "Connection (SW × depth)" },
        { key: "oil", label: "Oil Volume" },
      ],
      summary: ["model", "open", "close", "flange", "abc"],
      rows: SR.map(([code, open, close, a, b, c, oil, flange, conn]) =>
        ({ model: `PA ${code}`, open, close, abc: `${a} × ${b} × ${c} mm`, oil, flange, conn }) as ModelRow),
    },
  ],
  listTitle: "PA Series Electro-Hydraulic Actuators: All Models",
  listIntro:
    "High pressure electro-hydraulic part-turn actuators, up to 180 bar on board. 5 double acting models (250–4,000 Nm) and 4 spring return models; up to 10,000 Nm on request. Click a model for its full specifications.",
  listChips: ["D10 – D60", "E30 – E60", "250 – 4,000 Nm", "Up to 180 bar", "ATEX Zone 1 & 2"],
  rfqName: "PA Electro-Hydraulic Actuator",
  rfqDescription:
    "Compact high pressure (up to 180 bar) electro-hydraulic part-turn actuators, double acting 250–4,000 Nm or spring return, up to 10,000 Nm on request, ATEX Zone 1 & 2.",
  rfqKeySpecs: [
    { label: "Torque", value: "250 – 4,000 Nm" },
    { label: "Pressure", value: "Up to 180 bar" },
    { label: "Fail Action", value: "Spring return option" },
    { label: "Hazardous Areas", value: "ATEX Zone 1 & 2" },
  ],
  subCategory: "PA Series",
};
