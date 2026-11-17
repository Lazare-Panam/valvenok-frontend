// ITQ Micro (economic style) electric actuators for small valves.
// Every value below comes from the Susin I-Tork catalogue (Electric - ITQ Micro.pdf).
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";

const BLOB = "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin";

export const ITQM_IMAGE = `${BLOB}/itq-micro.jpg`;
export const ITQM_CATALOG = SUSIN_CATALOG.ITQ_MICRO;

export interface ITQMicroModel {
  model: string;
  torqueNm: number;
  speed: string;
  mounting: string;
  power: string;
  enclosure: string;
  weightKg: number | null; // null: not given in the catalogue
  image: string;
  summary: string;
  specs: { label: string; value: string }[];
}

export const ITQM_MODELS: ITQMicroModel[] = [
  {
    model: "ITQ 0020",
    torqueNm: 25,
    speed: "11 s (50 / 60 Hz and 24 VDC)",
    mounting: "ISO 5211 F03",
    power: "85–265 VAC 1Ph (option 24 VAC/DC)",
    enclosure: "IP66",
    weightKg: 1, // catalogue p.2 performance table
    image: `${BLOB}/itq-0020.jpg`,
    summary: "For small 1\" ball valve automation. Free voltage, very compact and light.",
    specs: [
      { label: "Duty Cycle", value: "50% (S2)" },
      { label: "Stem Adaption", value: "11 × 11 mm square female shaft, with 9 × 9 mm insert" },
      { label: "Rated Current", value: "0.60 A (24 VAC) · 0.55 A (24 VDC) · 0.16 A (110 V) · 0.08 A (220 V)" },
      { label: "Motor Insulation", value: "Class E" },
      { label: "Limit Switches", value: "2 for open & close (5 A, 250 VAC)" },
      { label: "Option", value: "Extra limit switch relays for open & close (5 A, 250 VAC)" },
      { label: "Travel Angle", value: "90° ± 5°" },
      { label: "Cable Entry", value: "1 × PG11 cable gland with 30 cm wires" },
      { label: "Surface Protection", value: "Polyester coating" },
      { label: "Ambient Temperature", value: "-10°C to +65°C" },
      { label: "Humidity", value: "90% RH" },
    ],
  },
  {
    model: "ITQ 0040",
    torqueNm: 40,
    speed: "16 s (50 Hz) / 13 s (60 Hz) / 7 s (24 VDC)",
    mounting: "ISO 5211 F03 / F04 / F05 / F07",
    power: "110 / 220 VAC 1Ph, 24 VDC",
    enclosure: "IP67",
    weightKg: 2.5,
    image: `${BLOB}/itq-0040.jpg`,
    summary: "For on-off small ball / plug valves and dampers. Spur gears, declutchable lever and dome position indicator.",
    specs: [
      { label: "Duty Cycle (On/Off)", value: "S2 – 30 min" },
      { label: "Duty Cycle (Modulating)", value: "S4 – 50%" },
      { label: "Stem Adaption", value: "14 × 14 mm double square female shaft" },
      { label: "Rated Current", value: "0.27 A (110 V) · 0.21 A (220 V) · 0.8 A (24 VDC)" },
      { label: "Motor", value: "Induction motor, insulation class B" },
      { label: "Limit Switches", value: "2 for each travel" },
      { label: "Space Heater", value: "2 W" },
      { label: "Manual Operation", value: "Declutchable lever & shaft on bottom (hex wrench), 6 turns" },
      { label: "Indicator", value: "Continuous mechanical position indicator" },
      { label: "Option", value: "RPC remote position controller, 4–20 mA input & output" },
      { label: "Travel Angle", value: "90° ± 5°" },
      { label: "Cable Entries", value: "2 × M20×1.5 (option 2 × PF1/2)" },
      { label: "Terminal Block", value: "Spring loaded push type" },
      { label: "Surface Protection", value: "Anodised polyester coating" },
      { label: "Ambient Temperature", value: "-20°C to +70°C" },
      { label: "Humidity", value: "90% RH" },
    ],
  },
  {
    model: "ITQ 0080",
    torqueNm: 80,
    speed: "16 s (50 Hz) / 14 s (60 Hz) / 12 s (24 VDC)",
    mounting: "ISO 5211 F05 / F07",
    power: "110 / 220 VAC 1Ph, 380 / 440 VAC 3Ph, 24 VDC",
    enclosure: "IP67",
    weightKg: 3.5,
    image: `${BLOB}/itq-0080.jpg`,
    summary: "For small ball & plug valves and dampers. Self-locking spur and worm gears, no brake needed, mechanical stopper bolts.",
    specs: [
      { label: "Duty Cycle (On/Off)", value: "S2 – 40%, max 30 min" },
      { label: "Duty Cycle (Modulating)", value: "S4 – 50%, 1,200 starts/hour" },
      { label: "Stem Adaption", value: "17 × 17 mm double square female shaft" },
      { label: "Rated Current", value: "0.97 A (110 V) · 0.52 A (220 V) · 0.52 A (380 V) · 0.56 A (440 V) · 3.8 A (24 VDC)" },
      { label: "Motor", value: "Induction motor, insulation class E" },
      { label: "Self Locking", value: "By worm gearing" },
      { label: "Limit Switches", value: "2 for each travel end (1 each as dry contact)" },
      { label: "Space Heater", value: "3 W" },
      { label: "Manual Operation", value: "By M6 wrench directly to the worm gear, 7 turns" },
      { label: "Indicator", value: "Continuous mechanical position indicator" },
      { label: "Options", value: "Current transmitter (4–20 mA output); RPC (input 4–20 mA / 0–10 / 2–10 / 1–5 / 0–5 VDC, output 4–20 mA)" },
      { label: "Travel Angle", value: "90° ± 10° by external adjustable mechanical stopper" },
      { label: "Cable Entries", value: "2 × M20×1.5 (option 2 × PF1/2)" },
      { label: "Terminal Block", value: "Spring loaded push type" },
      { label: "Surface Protection", value: "Anodised & polyester coating" },
      { label: "Ambient Temperature", value: "-20°C to +70°C" },
      { label: "Humidity", value: "90% RH" },
    ],
  },
];
