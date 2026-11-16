// HRS hydraulic scotch yoke actuators: HRSDA double acting and HRSSA spring
// return, each also built electro-hydraulic (EHRSDA / EHRSSA). Every value is
// from Susin I-Tork's "Hydraulic & Electro Hydraulic Actuator Data Sheet"
// (Hydraulic - HLP.pdf): introduction p.3, double acting p.4, spring return
// p.5–6, product design p.7, modular construction p.8, materials p.9.
//
// Checked against the data sheet on 16 Nov 2026. The old table
// (adf/products/hooks/hrsdaData.ts) had these wrong: HRSSA-A1-050 first spring
// (S-1B, 410 Nm, not S-A10 416), 02-060 S-1 oil 130 bar start (1,280, not 2,130),
// 02-080 S-1 spring start (2,405, not 2,450), 02-100 S-5 run (2,404),
// 05-140 S-12 run (10,115), and the S-15 spring, which belongs to 05-160.
//
// Data sheet oddities kept as printed: 01-040 S-1B and 01-050 springs have an
// end torque below the run torque, and the 05-160 S-15 row has oil torques
// above its spring torque. Ask Susin I-Tork before quoting those.
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";

export const HRS_IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/ktc-hrsda.jpg";
export const HRS_CATALOG = SUSIN_CATALOG.HLP;

export const PRESSURES = [100, 130, 160] as const;
export const PSI: Record<(typeof PRESSURES)[number], string> = { 100: "1,450 psi", 130: "1,886 psi", 160: "2,320 psi" };

/** Start / run / end torque in Nm; null where the data sheet shows "-" */
export type SRE = [number, number, number] | null;

export interface HrsDA {
  kind: "Double acting";
  model: string; // HRSDA-A1-032
  electro: string; // EHRSDA-A1-032
  body: string; // A1, 01 … 06
  cyl: string; // 032 … 200
  /** [open Nm, close Nm, open lb·in, close lb·in] at 100, 130, 160 bar */
  torque: Record<100 | 130 | 160, [number, number, number, number]>;
}

export interface HrsSR {
  kind: "Spring return";
  model: string; // HRSSA-A1-030
  electro: string;
  body: string;
  cyl: string;
  spring: string; // S-A1
  springT: [number, number, number]; // start, run, end
  oil: Record<100 | 130 | 160, SRE>;
}

type DARow = [string, ...number[]];
const da = (rows: DARow[]): HrsDA[] =>
  rows.map(([code, ...t]) => {
    const [body, cyl] = code.split("-");
    return {
      kind: "Double acting", model: `HRSDA-${code}`, electro: `EHRSDA-${code}`, body, cyl,
      torque: { 100: [t[0], t[1], t[2], t[3]], 130: [t[4], t[5], t[6], t[7]], 160: [t[8], t[9], t[10], t[11]] },
    };
  });

// [code, 100 bar open, close, open lb-in, close lb-in, 130 bar …, 160 bar …] (p.4)
export const HRS_DA: HrsDA[] = da([
  ["A1-032", 208, 341, 1841, 3018, 270, 443, 2390, 3921, 332, 546, 2938, 4832],
  ["A1-040", 372, 533, 3292, 4717, 483, 693, 4275, 6133, 595, 853, 5266, 7549],
  ["A1-050", 624, 833, 5522, 7372, 812, 1082, 7186, 9576, 999, 1332, 8841, 11788],
  ["01-040", 694, 925, 6142, 8186, 902, 1202, 7983, 10638, 1110, 1480, 9824, 13098],
  ["01-050", 1084, 1445, 9593, 12788, 1409, 1879, 12470, 16629, 1734, 2312, 15346, 20461],
  ["02-050", 1416, 1888, 12532, 16709, 1841, 2455, 16293, 21727, 2266, 3021, 20054, 26736],
  ["02-060", 2072, 2998, 18337, 26532, 2694, 3897, 23842, 34488, 3316, 4796, 29347, 42445],
  ["02-080", 3625, 4834, 32081, 42781, 4713, 6824, 41710, 60392, 5800, 7734, 51330, 68446],
  ["02-100", 5268, 7552, 46622, 66835, 6848, 9818, 60605, 86889, 8428, 12084, 74588, 106943],
  ["03-060", 2438, 3526, 21576, 31205, 3169, 4584, 28046, 40568, 3901, 5642, 34524, 49932],
  ["03-080", 4265, 5686, 37745, 50321, 5544, 7392, 49064, 65419, 6823, 9098, 60384, 80517],
  ["03-100", 6197, 8884, 54843, 78623, 8056, 11550, 71296, 102218, 9915, 14215, 87748, 125803],
  ["04-100", 8055, 11548, 71287, 102200, 10472, 15013, 92677, 132865, 12888, 18478, 114059, 163530],
  ["04-125", 13165, 18045, 116510, 159698, 18053, 23458, 159769, 207603, 22219, 28871, 196638, 255508],
  ["04-140", 16976, 22635, 150238, 200320, 22069, 29426, 195311, 260420, 27162, 36216, 240384, 320512],
  ["05-140", 20902, 27869, 184983, 246641, 27172, 36230, 240472, 320636, 33443, 44590, 295971, 394622],
  ["05-160", 27300, 36400, 241605, 322140, 35490, 47320, 314087, 418782, 43680, 58240, 386568, 515424],
  ["05-180", 34552, 46069, 305785, 407711, 44917, 59890, 397515, 530027, 55283, 73711, 489255, 652342],
  ["06-180", 42751, 57001, 378346, 504459, 55576, 74101, 491848, 655794, 68401, 91202, 605349, 807138],
  ["06-200", 52779, 70372, 467094, 622792, 68612, 91483, 607216, 809625, 84446, 112595, 747347, 996466],
]);

// [code, spring code, spring S, R, E, then oil S, R, E at 100, 130, 160 bar; null = "-"] (p.5–6)
type SRRow = [string, string, number, number, number, ...(number | null)[]];
const sre = (a: (number | null)[]): SRE => (a[0] == null ? null : [a[0], a[1]!, a[2]!]);
const srs = (rows: SRRow[]): HrsSR[] =>
  rows.map(([code, spring, s, r, e, ...o]) => {
    const [body, cyl] = code.split("-");
    return {
      kind: "Spring return", model: `HRSSA-${code}`, electro: `EHRSSA-${code}`, body, cyl, spring,
      springT: [s, r, e], oil: { 100: sre(o.slice(0, 3)), 130: sre(o.slice(3, 6)), 160: sre(o.slice(6, 9)) },
    };
  });
const _ = null;

export const HRS_SR: HrsSR[] = srs([
  ["A1-030", "S-A1", 147, 78, 96, 112, 71, 60, 175, 116, 123, 237, 160, 185],
  ["A1-030", "S-A2", 177, 92, 110, 97, 57, 30, 160, 101, 93, 222, 146, 155],
  ["A1-030", "S-A7", 220, 115, 140, _, _, _, 130, 78, 50, 193, 123, 112],
  ["A1-040", "S-A7", 256, 139, 177, 217, 150, 157, 337, 236, 277, 457, 322, 397],
  ["A1-040", "S-A4", 337, 182, 229, 171, 105, 62, 291, 191, 182, 411, 277, 302],
  ["A1-040", "S-A5", 401, 214, 266, _, _, _, 253, 158, 118, 373, 244, 238],
  ["A1-050", "S-1B", 410, 236, 326, 339, 236, 251, 526, 371, 438, 714, 505, 625],
  ["A1-050", "S-1B", 445, 257, 356, 268, 191, 180, 455, 325, 367, 643, 459, 554],
  ["A1-050", "S-1B", 503, 294, 414, 210, 153, 121, 397, 288, 309, 585, 422, 496],
  ["01-040", "S-A7", 495, 256, 317, 377, 234, 199, 585, 381, 407, 793, 528, 615],
  ["01-040", "S-A7", 583, 310, 398, 296, 180, 111, 504, 327, 319, 712, 474, 527],
  ["01-040", "S-1B", 726, 376, 267, _, _, _, 635, 261, 176, 843, 409, 384],
  ["01-050", "S-1B", 758, 396, 285, 799, 370, 326, 1124, 599, 651, 1449, 829, 976],
  ["01-050", "S-1B", 881, 474, 356, 728, 292, 203, 1053, 522, 528, 1378, 751, 853],
  ["01-050", "S-1B", 982, 538, 414, 669, 228, 102, 995, 458, 427, 1320, 687, 752],
  ["02-050", "S-1B", 1096, 551, 647, 769, 450, 32, 1194, 750, 745, 1619, 1051, 1170],
  ["02-050", "S-1B", 1257, 653, 808, 608, 348, 159, 1033, 649, 584, 1458, 949, 1009],
  ["02-050", "S-1A", 1643, 818, 943, _, _, _, 898, 484, 198, 1323, 784, 623],
  ["02-060", "S-1A", 1622, 805, 922, 1097, 623, 623, 1702, 1051, 1002, 2308, 1479, 1608],
  ["02-060", "S-1A", 2154, 1108, 1349, 866, 477, 166, 1472, 905, 772, 2077, 1333, 1377],
  ["02-060", "S-1", 2149, 1105, 1344, _, _, _, 1280, 751, 475, 1886, 1179, 1081],
  ["02-080", "S-1", 2405, 1267, 1600, 1901, 1209, 1097, 2952, 1952, 2147, 4002, 2695, 3197],
  ["02-080", "S-3", 3058, 1599, 1995, 1506, 877, 443, 2557, 1620, 1493, 3607, 2363, 2544],
  ["02-080", "S-4", 3874, 1965, 2335, _, _, _, 2216, 1254, 677, 3267, 1997, 1728],
  ["02-100", "S-4", 3947, 2010, 2408, 2860, 1715, 1321, 4440, 2832, 2901, 6021, 3950, 4482],
  ["02-100", "S-5", 4604, 2404, 2997, 2271, 1321, 664, 3851, 2438, 2244, 5432, 3556, 3825],
  ["02-100", "S-5", 5105, 2721, 3498, 1770, 1004, 163, 3350, 2121, 1743, 4931, 3239, 3324],
  ["03-060", "S-1A", 2054, 993, 1085, 1290, 687, 321, 2002, 1190, 1034, 2715, 1694, 1764],
  ["03-060", "S-1", 2467, 1209, 1353, _, _, _, 1734, 975, 620, 2447, 1479, 1333],
  ["03-060", "S-1", 2695, 1353, 1581, _, _, _, 1506, 830, 392, 2218, 1334, 1105],
  ["03-080", "S-1", 2996, 1543, 1882, 2237, 1370, 1123, 3472, 2243, 2359, 4708, 3117, 3594],
  ["03-080", "S-3", 3818, 1951, 2347, 1772, 962, 300, 3008, 1836, 1536, 4243, 2710, 2772],
  ["03-080", "S-4", 4877, 2412, 2747, _, _, _, 2607, 1374, 477, 3843, 2248, 1713],
  ["03-100", "S-4", 4962, 2466, 2833, 3364, 1916, 1235, 5223, 3231, 3094, 7082, 4546, 4953],
  ["03-100", "S-5", 5749, 2934, 3525, 2672, 1448, 448, 4531, 2763, 2307, 6390, 4078, 4166],
  ["03-100", "S-5", 6339, 3307, 4115, _, _, _, 3941, 2390, 1717, 5800, 3705, 3576],
  ["04-100", "S-6", 6135, 3105, 3677, 4378, 2593, 1921, 6795, 4302, 4337, 9211, 6011, 6754],
  ["04-100", "S-5", 8341, 4089, 4582, _, _, _, 5889, 3317, 2131, 8306, 5027, 4548],
  ["04-100", "S-8", 10390, 4983, 5359, _, _, _, 5112, 2423, 82, 7529, 4132, 2498],
  ["04-125", "S-8", 11028, 5387, 5998, 7167, 3924, 2137, 11117, 6718, 6087, 15067, 9511, 10036],
  ["04-125", "S-11", 12084, 6196, 7497, 5668, 3116, 1082, 9618, 5909, 5031, 13567, 8703, 8981],
  ["04-125", "S-11", 13336, 6988, 8750, _, _, _, 8365, 5117, 3779, 12315, 7910, 7728],
  ["04-140", "S-11", 12331, 6352, 7744, 9232, 5655, 4646, 14325, 9257, 9738, 19418, 12859, 14831],
  ["04-140", "S-12", 15048, 7827, 9688, 7288, 4180, 1929, 12381, 7782, 7022, 17474, 11385, 12115],
  ["04-140", "S-13", 18157, 9313, 11275, _, _, _, 10794, 6296, 3912, 15887, 9899, 9005],
  ["05-140", "S-11", 16485, 8230, 9535, 11367, 6548, 4417, 17637, 10981, 10687, 23908, 15415, 16958],
  ["05-140", "S-12", 20050, 10115, 11928, 8973, 4663, 852, 15244, 9097, 7123, 21514, 13530, 13393],
  ["05-140", "S-13", 24311, 12081, 13882, _, _, _, 13290, 7131, 2862, 19560, 11564, 9132],
  ["05-160", "S-15", 20051, 4585, 12444, 14857, 14717, 25249, 23047, 20508, 33439, 31237, 26298, 41629],
  ["05-160", "S-16", 25856, 13102, 15565, 11735, 6200, 1444, 19925, 11991, 9634, 28115, 17781, 17824],
  ["05-160", "S-17", 30068, 15245, 18131, _, _, _, 17360, 9847, 5422, 25550, 15638, 13612],
  ["05-180", "S-16", 26050, 13224, 15758, 18793, 11205, 8502, 29159, 18534, 18868, 39524, 25863, 29233],
]);

/** HRSSA sizes in data sheet order, each with its spring options */
export const SR_SIZES = [...new Set(HRS_SR.map((m) => m.model))].map((model) => ({
  model,
  options: HRS_SR.filter((m) => m.model === model),
}));

export const BODIES = ["A1", "01", "02", "03", "04", "05", "06"] as const;

// Shared by every model (p.3, p.7–9)
export const HRS_COMMON: [string, string][] = [
  ["Operating pressure", "Hydraulic, up to 200 bar (2,900 psi)"],
  ["Electro-hydraulic", "EHRSDA / EHRSSA versions; remote hydraulic power pack option"],
  ["Protection", "IEC IP66M, IP67M (O-ring sealed)"],
  ["Centre body", "Fully enclosed, ductile iron or stainless steel by size"],
  ["Yoke", "Symmetric or canted"],
  ["Cylinder", "Carbon steel, honed and hot chrome plated; chrome plated rods"],
  ["Bearings", "High-grade bronze or ceramic; bronze sliding blocks on the torque arm"],
  ["Travel stop", "Adjustable, −5° to +95°"],
  ["Valve mounting", "ISO 5211, direct mounting without a coupler or bracket"],
  ["Accessory mounting", "NAMUR, with pointer and angle indicator"],
  ["Painting", "C4 to ISO 12944 (option C5-M)"],
];

// Materials, standard (optional) (p.9)
export const HRS_MATERIALS: [string, string][] = [
  ["Centre body", "Ductile iron (carbon steel)"],
  ["Yoke", "Ductile iron (carbon steel)"],
  ["Sliding ring", "PTFE (graphite)"],
  ["Seal", "PTFE (NBR / graphite)"],
  ["Roller bush", "Aluminium bronze (carbon steel)"],
  ["Stopper bolt", "Alloy steel (carbon steel)"],
  ["Slide block", "Carbon steel (alloy steel)"],
  ["Tie rod", "Alloy steel (carbon steel)"],
  ["Roller", "Carbon steel (aluminium bronze)"],
  ["Piston rod", "Carbon steel, chromium plated"],
  ["Piston", "Carbon steel"],
  ["Hydraulic cylinder", "Carbon steel, honed tube"],
  ["Guide bar", "Alloy steel, chromium plated"],
  ["Spring / spring rod", "Alloy steel (rod chromium plated)"],
  ["Spring cartridge", "Carbon steel"],
  ["O-rings", "NBR"],
  ["Pressure relief valve", "Stainless steel"],
];
