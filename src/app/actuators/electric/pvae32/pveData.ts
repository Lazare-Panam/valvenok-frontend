// Danfoss PVE electrohydraulic actuators for PVG proportional valves.
// Every value is from Danfoss documents saved in Downloads/danfoss-catalogues:
// PVE Series 7 Technical Information (BC218286485446en-000501, 2026): variants
// p.7–8, reaction times p.57, hysteresis p.58; Analog PVE Series 7 Data Sheet
// (AI00000331, 2017): features and operating conditions; PVED-CC Data Sheet
// (AI00000076, 2016); PVE-EX Data Sheet (AI00000316, 2017).

export const PVE_IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/products/danfoss/dfe-ac.png";
export const PVE_DOCS = "https://www.danfoss.com/en/products/dps/hydraulic-valves/directional-control-valves/compensated-proportional-valves/pve-electrohydraulic-actuators/";
export const PVE_TI = "https://assets.danfoss.com/documents/latest/572625/BC218286485446en-000501.pdf";

export type PveKind = "On/off" | "Proportional" | "CAN bus" | "Explosion proof";

export interface PveModel {
  model: string;
  kind: PveKind;
  role: string; // one line, from Danfoss
  supply: string;
  connectors: string;
  pilot: string;
  monitoring: string;
  functions: string; // suffix options
  t1?: number; // ms, neutral to max. spool stroke, constant supply (PVG 32/100)
  t2?: number; // ms, max. stroke to neutral
  hysteresis?: string;
  extra: [string, string][];
}

export const PVE_MODELS: PveModel[] = [
  { model: "PVEO", kind: "On/off", role: "On/off voltage control for non-proportional functions.", supply: "12 VDC or 24 VDC", connectors: "DEUTSCH, AMP or DIN/Hirschmann", pilot: "13.5 bar", monitoring: "LED shows power on / off", functions: "Ramp (-R) or direction indication (-DI)", t1: 110, t2: 110, extra: [["PVEO-R reaction", "325 ms / 340 ms"]] },
  { model: "PVEO-HP", kind: "On/off", role: "On/off control for PVH / PVHC valves with 25 bar pilot pressure.", supply: "12 VDC or 24 VDC", connectors: "DEUTSCH, AMP or DIN/Hirschmann", pilot: "25 bar (min. 21 bar)", monitoring: "LED shows power on / off", functions: "—", t1: 90, t2: 70, extra: [] },
  { model: "PVEM", kind: "Proportional", role: "Proportional spool control for medium performance demands.", supply: "9–32 VDC multi-voltage", connectors: "DIN or Hirschmann", pilot: "13.5 bar", monitoring: "Passive fault monitoring, error LED", functions: "Float (-F), ramp (-R) or quick reaction (-Q)", t1: 210, t2: 90, hysteresis: "15%", extra: [["PVEM-Q reaction", "110 ms / 90 ms"]] },
  { model: "PVEA", kind: "Proportional", role: "Proportional spool control for high performance demands.", supply: "9–32 VDC multi-voltage", connectors: "DEUTSCH or AMP", pilot: "13.5 bar", monitoring: "Active or passive fault monitoring, error LED", functions: "Direction indication (-DI) or neutral power-off (-NP)", t1: 305, t2: 210, hysteresis: "2%", extra: [] },
  { model: "PVEH", kind: "Proportional", role: "Proportional spool control for high performance demands.", supply: "9–32 VDC multi-voltage", connectors: "DEUTSCH, AMP or DIN/Hirschmann", pilot: "13.5 bar", monitoring: "Active or passive fault monitoring, error LED", functions: "Float (-F), direction (-DI), neutral power-off (-NP), spool position (-SP) or 0–10 VDC (-U)", t1: 115, t2: 90, hysteresis: "4% (1.5% on PVEH 256)", extra: [] },
  { model: "PVES", kind: "Proportional", role: "Proportional spool control for high performance and reaction demands.", supply: "9–32 VDC multi-voltage", connectors: "DEUTSCH, AMP or DIN/Hirschmann", pilot: "13.5 bar", monitoring: "Active or passive fault monitoring, error LED", functions: "Spool position (-SP) or 0–10 VDC (-U)", t1: 115, t2: 90, hysteresis: "0%", extra: [["Control signal", "25–75% of supply voltage"]] },
  { model: "PVED-CC", kind: "CAN bus", role: "ISOBUS CAN actuator with flow control and position control, for PVG 32 and PVG 100.", supply: "Per Danfoss technical information", connectors: "CAN bus (ISOBUS)", pilot: "13.5 bar", monitoring: "Advanced built-in diagnostics, high-level valve feedback", functions: "Configurable ramp, scaling and progressivity; optional power save", extra: [["Setting", "ISOBUS process data, or the PLUS+1 Service Tool"], ["Control", "Same analogue position control as PVES, plus digital flow control over CAN"]] },
  { model: "PVE-EX", kind: "Explosion proof", role: "Flameproof actuators for mining and offshore, built on the analog PVE Series 4.", supply: "PVEO-EX in 12 V or 24 V", connectors: "Inside the flameproof enclosure", pilot: "13.5 bar", monitoring: "As the matching standard PVE", functions: "PVEO-EX, PVEH-EX, PVES-EX and -DI / -U versions, also for PVG 120", extra: [["Protection", "Ex db, group I (mining) and group II"], ["Standards", "EN 60079-0, EN/IEC 60079-1 (flameproof “d”), EN ISO 4413"]] },
];

// Shared by the Series 7 analog actuators
export const PVE_COMMON: [string, string][] = [
  ["Fits", "Danfoss PVG 32, 100, 120, 128 and 256 valves; EHPS, EH, EHi and OSPE steering valves"],
  ["Operating temperature", "−40 to +90 °C"],
  ["Storage temperature", "−50 to +90 °C"],
  ["Oil viscosity", "12–75 cSt operating (4–469 cSt limits)"],
  ["Oil cleanliness", "18/16/13 max. (ISO 4406)"],
  ["Signal", "Ratiometric, fixed 0–10 VDC (-U) or PWM"],
  ["Compliance", "EMC 2004/108/EC, Machinery Directive 2006/42/EC, E-mark (UNECE R10)"],
];
