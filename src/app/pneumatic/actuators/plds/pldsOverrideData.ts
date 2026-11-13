// PLDS manual override options, from Susin I-Tork's PLDS catalogue (Pneumatic - PLDS.pdf,
// "Linear piston actuator with manual overrides", Types 1–4). Jack screw, MTG and MAB
// all give 0.3 turns per mm (8.4 per inch) and need 360 N (81 lbs) rim pull.

export type OverrideRow = { size: string; thrustN: number; thrustLbs: number; model?: string };

export const jack: OverrideRow[] = [
  ["PLDS-100", 30897, 6946], ["PLDS-125", 30897, 6946], ["PLDS-160", 30897, 6946], ["PLDS-180", 30897, 6946],
  ["PLDS-200", 79085, 17780], ["PLDS-230", 79085, 17780], ["PLDS-250", 79085, 17780], ["PLDS-280", 79085, 17780],
  ["PLDS-300", 140997, 31699], ["PLDS-350", 140997, 31699], ["PLDS-380", 140997, 31699],
].map(([size, n, l]) => ({ size: size as string, thrustN: n as number, thrustLbs: l as number }));

export const mtg: OverrideRow[] = [
  ["100", 160000, 35971, "MTG-100"], ["125", 160000, 35971, "MTG-100"], ["160", 160000, 35971, "MTG-100"], ["180", 160000, 35971, "MTG-100"], ["200", 160000, 35971, "MTG-100"],
  ["230", 240000, 53957, "MTG-200"], ["250", 240000, 53957, "MTG-200"], ["280", 240000, 53957, "MTG-200"], ["300", 240000, 53957, "MTG-200"], ["350", 240000, 53957, "MTG-200"],
  ["380", 240000, 53957, "MTG-200"], ["430", 240000, 53957, "MTG-200"], ["480", 240000, 53957, "MTG-200"], ["530", 300000, 67446, "MTG-300"], ["580", 380000, 85432, "MTG-400"],
  ["630", 380000, 85432, "MTG-400"], ["680", 600000, 134892, "MTG-650"], ["730", 600000, 134892, "MTG-650"], ["780", 600000, 134892, "MTG-650"], ["830", 870000, 195594, "MTG-900"],
  ["880", 870000, 195594, "MTG-900"], ["930", 870000, 195594, "MTG-900"], ["980", 1800000, 404676, "MTG-1800"],
].map(([s, n, l, m]) => ({ size: `PLDS-${s}`, thrustN: n as number, thrustLbs: l as number, model: m as string }));

export const mab: OverrideRow[] = [
  ["100", 75000, 16862, "MAB-075"], ["125", 75000, 16862, "MAB-075"], ["160", 75000, 16862, "MAB-075"], ["180", 75000, 16862, "MAB-075"], ["200", 75000, 16862, "MAB-075"],
  ["230", 75000, 16862, "MAB-075"], ["250", 75000, 16862, "MAB-075"], ["280", 75000, 16862, "MAB-075"], ["300", 75000, 16862, "MAB-075"], ["350", 100000, 22482, "MAB-100"],
  ["380", 100000, 22482, "MAB-100"], ["430", 150000, 33723, "MAB-150"], ["480", 200000, 44964, "MAB-200"], ["530", 300000, 67446, "MAB-300"], ["580", 350000, 78687, "MAB-350"],
  ["630", 400000, 89928, "MAB-400"], ["680", 500000, 112410, "MAB-500"], ["730", 500000, 112410, "MAB-500"], ["780", 800000, 179856, "MAB-800"], ["830", 800000, 179856, "MAB-800"],
  ["880", 800000, 179856, "MAB-800"], ["930", 800000, 179856, "MAB-800"], ["980", 1200000, 269784, "MAB-1200"],
].map(([s, n, l, m]) => ({ size: `PLDS-${s}`, thrustN: n as number, thrustLbs: l as number, model: m as string }));

// Hydraulic manual override: [size, pump model N, inch, output thrust N, lbs]
export const hmor = [
  ["530", 200, 8, 134303, 30194], ["580", 250, 10, 225629, 50726], ["630", 250, 10, 225629, 50726], ["680", 250, 10, 225629, 50726],
  ["730", 280, 11, 281029, 63181], ["780", 280, 11, 281029, 63181], ["830", 320, 13, 343816, 77297], ["880", 320, 13, 343816, 77297],
  ["930", 320, 13, 343816, 77297], ["980", 320, 13, 343816, 77297],
] as const;

export const OVERRIDE_TYPES = [
  { key: "jack", name: "Jack screw", title: "Type 1: Jack screw", text: "Direct manual control without a gear mechanism: compact, simple and independent of the air supply. For PLDS-100 to PLDS-380." },
  { key: "mtg", name: "MTG worm gear", title: "Type 2: Multi-turn worm gear (MTG)", text: "Side-mounted worm gear override, self-locking, with large ratios for low-speed, high-thrust operation. MTG-100 to MTG-1800, matched to each PLDS size." },
  { key: "mab", name: "MAB bevel gear", title: "Type 3: Multi-turn bevel gear (MAB)", text: "Right-angle bevel gear override for high thrust with low backlash and even load distribution. MAB-075 to MAB-1200, matched to each PLDS size." },
  { key: "hmor", name: "Hydraulic (HMOR)", title: "Type 4: Hydraulic manual override (HMOR)", text: "Hand pump override with a built-in relief valve, pressure regulator and dial gauge, for backup control if the air system fails. For PLDS-530 to PLDS-980." },
];

