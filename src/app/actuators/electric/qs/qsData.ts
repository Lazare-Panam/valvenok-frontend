// QS Series fail-safe (spring return) electric actuators.
// Every value below comes from the Susin / i-Tork QS catalogue (Electric - QS.pdf).
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";

export const QS_IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/qs.jpg";

export const QS_CATALOG = SUSIN_CATALOG.QS;

export interface QSModel {
  model: string;
  torqueNm: number;
  springTorqueNm: number;
  speed: string;
  springSpeed: string;
  power: string;
  cableEntry: string;
  mounting: string;
  dimensions: string;
  weightKg: number;
}

const POWER = "AC 110 / 220 / 380 / 440 V, DC 24 V";
const SPRING_SPEED = "1.8 s (option 2, 3 or 4 s)";

const SMALL = {
  speed: "21 s (50 Hz) / 18 s (60 Hz)",
  cableEntry: "6 × PF1/2 (option M20×1.5, NPT1/2)",
  mounting: "ISO 5211 F07",
  dimensions: "420 × 259 × 275 mm",
  weightKg: 22,
};

const LARGE = {
  speed: "34 s (50 Hz) / 30 s (60 Hz)",
  cableEntry: "6 × PF3/4 (option M25×1.5, NPT3/4)",
  mounting: "ISO 5211 F10 / F12",
  dimensions: "528 × 310 × 296 mm",
  weightKg: 40,
};

export const QS_MODELS: QSModel[] = [
  { model: "QS05", torqueNm: 50, springTorqueNm: 50, power: POWER, springSpeed: SPRING_SPEED, ...SMALL },
  { model: "QS10", torqueNm: 100, springTorqueNm: 100, power: POWER, springSpeed: SPRING_SPEED, ...SMALL },
  { model: "QS20", torqueNm: 200, springTorqueNm: 200, power: POWER, springSpeed: SPRING_SPEED, ...LARGE },
  { model: "QS30", torqueNm: 300, springTorqueNm: 300, power: POWER, springSpeed: SPRING_SPEED, ...LARGE },
];

// Shared by every model
export const QS_COMMON = [
  { label: "Duty Cycle (On/Off)", value: "S2 – 30 min" },
  { label: "Duty Cycle (Modulating)", value: "S4 – 50%" },
  { label: "Control Signal", value: "4–20 mA (option 0–10, 0–5, 1–5, 2–10 VDC)" },
  { label: "Limit Switches", value: "2 × Open / Close (SPDT 250 VAC / 10 A)" },
  { label: "Torque Switches", value: "2 × Open / Close (SPDT 250 VAC / 10 A)" },
  { label: "Aux. Force Switches", value: "2 × Open / Close (option)" },
  { label: "Space Heater", value: "2 W" },
  { label: "Ambient Temperature", value: "-20°C to +70°C" },
  { label: "Ambient Humidity", value: "90% RH max (non-condensing)" },
  { label: "Enclosure", value: "IP67 (option IP68)" },
  { label: "Explosion Proof", value: "Not available" },
];
