// ITS position monitoring switch boxes (limit switch boxes). Every value is from
// Susin I-Tork's ITS catalogue (Accessories - ITS.pdf, a scan, read page by page
// on 16 Nov 2026): ITS 200 p.2, ITS 400 p.3, ITS 500 and materials p.4, cams,
// terminals, indicator and mechanical switches p.5, DPDT and proximity sensors
// p.6, mounting brackets p.7, model number legend p.8.
//
// Catalogue oddity kept as printed: switch option 6 reads "8 - SPDT + output
// (4-20mA)" where every other option starts with "2"; ask Susin I-Tork.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";

export const ITS_IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/susin-limit-switch.webp";
export const ITS_CATALOG = SUSIN_CATALOG.ITS;

/** Model number legend (p.8). `all`: ITS 200, 400 and 500; otherwise ITS 400 and 500 only. */
export const SWITCH_OPTIONS: { code: string; group: "Mechanical switches" | "Proximity sensors"; text: string; all: boolean }[] = [
  { code: "00", group: "Mechanical switches", text: "2 × SPDT", all: true },
  { code: "01", group: "Mechanical switches", text: "3 × SPDT", all: true },
  { code: "02", group: "Mechanical switches", text: "4 × SPDT", all: true },
  { code: "03", group: "Mechanical switches", text: "2 × SPST", all: true },
  { code: "04", group: "Mechanical switches", text: "2 × DPDT", all: true },
  { code: "05", group: "Mechanical switches", text: "2 × SPDT + position output 0 – 1 kΩ", all: false },
  { code: "06", group: "Mechanical switches", text: "SPDT + position output 4 – 20 mA", all: false },
  { code: "10", group: "Proximity sensors", text: "Autonics PSN17-5DNU", all: true },
  { code: "11", group: "Proximity sensors", text: "P+F NJ2-V3-N", all: true },
  { code: "1S", group: "Proximity sensors", text: "Other sensor types", all: true },
];

export const CABLE_ENTRIES: { code: string; text: string; all: boolean }[] = [
  { code: "A", text: "1/2\" NPT", all: true },
  { code: "B", text: "M20 × 1.5", all: true },
  { code: "C", text: "1/2\" PT", all: true },
  { code: "D", text: "1/2\" PF", all: true },
  { code: "E", text: "PG 13.5", all: true },
  { code: "F", text: "3/4\" PF", all: false },
  { code: "G", text: "3/4\" NPT", all: false },
  { code: "H", text: "M25 × 1.5", all: false },
];

export interface ItsModel {
  model: string; // "ITS 200"
  slug: string; // "ITS-200"
  digit: string; // first digit of the model number
  kind: string;
  summary: string;
  enclosure: string;
  enclosureOpt?: string;
  housing: string;
  coating: string;
  coatingOpt?: string;
  temp: string;
  tempOpt?: string;
  cable: string;
  /** Dimensions, mm (p.2–3 drawings); ITS 500 has no drawing of its own */
  dims?: { width: number; height: string; depth: number; mount: string };
}

export const ITS_MODELS: ItsModel[] = [
  {
    model: "ITS 200", slug: "ITS-200", digit: "2", kind: "Weatherproof",
    summary: "For small pneumatic actuators and valves: a compact box that saves installation space, with a choice of switches and sensors.",
    enclosure: "Weatherproof IP67, O-ring sealed",
    housing: "Aluminium die-cast",
    coating: "Epoxy-polyester inside and outside against corrosion", coatingOpt: "Nylon coating, special colour coating",
    temp: "−20 to +80 °C",
    cable: "1/2\" NPT (option M20 × 1.5, 1/2\" BSP, 1/2\" PT, PG 13.5, 1/2\" PF)",
    dims: { width: 130, height: "131 / 141", depth: 100, mount: "80 × 32" },
  },
  {
    model: "ITS 400", slug: "ITS-400", digit: "4", kind: "Explosion proof",
    summary: "For valves and actuators in hazardous areas: compact, robust aluminium construction to EN 50014 and EN 50018, for Zone 1 and 2.",
    enclosure: "Explosion proof Ex d IIC T6, IP67, O-ring sealed", enclosureOpt: "IP68",
    housing: "Aluminium die-cast",
    coating: "Chromated, epoxy-polyester outside against corrosion", coatingOpt: "Nylon coating, special colour coating",
    temp: "−20 to +80 °C", tempOpt: "Higher (to about 100 °C) and lower (from about −40 °C)",
    cable: "2 × 3/4\" PF (option M20 × 1.5, 1/2\" BSP, 1/2\" PT, PG 13.5, 1/2\" PF and other standard threads)",
    dims: { width: 142, height: "163 / 173", depth: 134, mount: "80 × 32" },
  },
  {
    model: "ITS 500", slug: "ITS-500", digit: "5", kind: "Special material",
    summary: "The ITS 400 in a 316L or Duplex stainless steel housing, for extremely corrosive conditions and offshore service.",
    enclosure: "As ITS 400: Ex d IIC T6, IP67 (IP68 option)",
    housing: "316L or Duplex stainless steel",
    coating: "No painting on the stainless steel housing",
    temp: "As ITS 400: −20 to +80 °C", tempOpt: "Higher and lower temperature versions",
    cable: "As ITS 400: 2 × 3/4\" PF, other standard threads",
  },
];

// Shared by every ITS (p.2–5)
export const ITS_COMMON: [string, string][] = [
  ["Mounting", "Rotary valves and NAMUR rotary pneumatic actuators"],
  ["Position indicator", "Dome type, 0 – 90° (option 3-way L-port or T-port)"],
  ["Indicator colours", "Red for close, yellow for open (option red / green)"],
  ["Visible from", "Up to 50 m"],
  ["Terminal block", "8 terminals: 6 for switches, 2 for solenoid valve power"],
  ["Terminal strips", "Socket type with screws, max. 2.5 mm², 26 A at 30 °C (UL, CSA)"],
  ["Cams", "Easy set: no tool needed; red cam for close, green for open"],
];

// Construction material (p.4)
export const ITS_MATERIALS: [string, string][] = [
  ["Housing", "Aluminium die-cast (ITS 500: 316L or Duplex)"],
  ["Sealing", "NBR O-rings on each interface: dome, lower / upper housing, shaft"],
  ["Dome indicator", "High impact poly-carbonate"],
  ["Cams", "Poly-carbonate"],
  ["Bushings", "Brass"],
  ["Shaft", "SS304 stainless steel"],
  ["Bolts", "All stainless steel"],
  ["Mounting bracket", "Stainless steel (SSIN series)"],
];

// Switches and sensors (p.5–6)
export const SWITCHES: { name: string; spec: string; detail: string; models: string }[] = [
  { name: "2 × SPDT mechanical", spec: "Standard (Form C)", detail: "16 A 1/2 HP 125 / 250 V AC; 0.6 A 125 V DC; 0.3 A 250 V DC. UL, CSA approved.", models: "ITS 200, 400, 500" },
  { name: "4 × SPDT mechanical", spec: "Option", detail: "5 A 125 V AC LT130; 0.6 A 125 V DC to 16 A 250 V AC. UL, CSA approved.", models: "ITS 200, 400, 500" },
  { name: "DPDT mechanical", spec: "Option", detail: "10 A 125 or 250 V AC; 2 A 480 V AC; 1/8 HP 125 V AC; 0.25 HP 250 V AC; 0.5 A 125 V DC; 0.25 A 250 V DC. UL, CSA approved.", models: "ITS 200, 400, 500" },
  { name: "Autonics PSN17-5DNU", spec: "Proximity, NPN / PNP", detail: "10 – 30 V DC, 5 mm sensing distance, −25 to +70 °C.", models: "ITS 200, 400, 500" },
  { name: "P+F NJ2-V3-N", spec: "Proximity, intrinsically safe, two wire", detail: "8 V DC, 2 mm sensing distance, −25 to +100 °C.", models: "ITS 200, 400, 500" },
  { name: "P+F NJ4-12GK-SN", spec: "Proximity", detail: "8 V DC, 4 mm sensing distance, −50 to +100 °C.", models: "Proximity sensor option" },
  { name: "Position transmitter", spec: "Option", detail: "Output 0 – 1 kΩ or 4 – 20 mA DC.", models: "ITS 400, 500" },
];

// Mounting brackets to VDI/VDE 3845 (p.7)
export const BRACKETS: { code: string; size: string; supply: string }[] = [
  { code: "SSIN1", size: "30 × 80 × 20 (H)", supply: "Standard, included" },
  { code: "SSIN2", size: "30 × 80 × 30 (H)", supply: "Standard, included" },
  { code: "SSIN3", size: "30 × 130 × 30 (H)", supply: "Optional, extra cost" },
  { code: "SSIN4", size: "30 × 80 × 20 (H), 30 × 80 × 30 (H), 30 × 130 × 20 (H), 30 × 130 × 30 (H)", supply: "Optional, extra cost" },
];
