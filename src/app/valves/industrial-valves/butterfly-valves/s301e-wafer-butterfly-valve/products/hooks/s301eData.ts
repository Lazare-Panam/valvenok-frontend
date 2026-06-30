// hooks/s301eData.ts
export interface S301EDTO {
  id: string;
  articleNo: string;
  size: string;
  sizeDN: string;
  liner: string;
  gearRatio: string;
  faceToFace: string;
  weightKg: string;
  imageUrl: string;
  description: string;
}

export const S301E_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/pp-92.webp';

export const S301E_DESCRIPTION = {
  title: 'S301E Series — Wafer Pattern Butterfly Valve, Gearbox Operated',
  description: 'Resilient seated wafer butterfly valve with 316 stainless steel disc. 1½"–12", PN6/PN10/PN16/ANSI 150. EPDM or Nitrile liner, gearbox operated, ISO 5211 mounting, Rate A no-leakage shutoff.',
  specs: ['1½"–12" (DN40–DN300)', 'PN6 · PN10 · PN16 · ANSI 150', '316SS Disc', 'EPDM / Nitrile Liner', 'Gearbox Operated', 'ISO 5211 Mounting'],
};

const FEATURES_COMMON = [
  'Gearbox operated — low operating torque, ISO 5211 mounting.',
  'Machined position mark for accurate disc alignment during installation.',
  'Vulcanized resilient seat bonded to metallic support ring — replaceable without special tools.',
  'One-piece ductile iron body, square-end stem fits directly into disc — disc floats and self-centres.',
];

export const S301E_DATA: S301EDTO[] = [
  { id: '700440', articleNo: '700440', size: '1½"', sizeDN: 'DN40', liner: 'EPDM',    gearRatio: '24:1', faceToFace: '190 mm', weightKg: '6.9',  imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700441', articleNo: '700441', size: '2"',  sizeDN: 'DN50', liner: 'EPDM',    gearRatio: '24:1', faceToFace: '207 mm', weightKg: '7.9',  imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700442', articleNo: '700442', size: '2½"', sizeDN: 'DN65', liner: 'EPDM',    gearRatio: '24:1', faceToFace: '232 mm', weightKg: '8.5',  imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700443', articleNo: '700443', size: '3"',  sizeDN: 'DN80', liner: 'EPDM',    gearRatio: '24:1', faceToFace: '252 mm', weightKg: '8.7',  imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700444', articleNo: '700444', size: '4"',  sizeDN: 'DN100', liner: 'EPDM',   gearRatio: '24:1', faceToFace: '282 mm', weightKg: '10.2', imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700445', articleNo: '700445', size: '5"',  sizeDN: 'DN125', liner: 'EPDM',   gearRatio: '24:1', faceToFace: '315 mm', weightKg: '12.2', imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700446', articleNo: '700446', size: '6"',  sizeDN: 'DN150', liner: 'EPDM',   gearRatio: '24:1', faceToFace: '345 mm', weightKg: '13.4', imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700447', articleNo: '700447', size: '8"',  sizeDN: 'DN200', liner: 'EPDM',   gearRatio: '30:1', faceToFace: '410 mm', weightKg: '22.2', imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700448', articleNo: '700448', size: '10"', sizeDN: 'DN250', liner: 'EPDM',   gearRatio: '30:1', faceToFace: '481 mm', weightKg: '32.0', imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700449', articleNo: '700449', size: '12"', sizeDN: 'DN300', liner: 'EPDM',   gearRatio: '30:1', faceToFace: '553 mm', weightKg: '40.5', imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700460', articleNo: '700460', size: '1½"', sizeDN: 'DN40', liner: 'Nitrile', gearRatio: '24:1', faceToFace: '190 mm', weightKg: '6.9',  imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700461', articleNo: '700461', size: '2"',  sizeDN: 'DN50', liner: 'Nitrile', gearRatio: '24:1', faceToFace: '207 mm', weightKg: '7.9',  imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700462', articleNo: '700462', size: '2½"', sizeDN: 'DN65', liner: 'Nitrile', gearRatio: '24:1', faceToFace: '232 mm', weightKg: '8.5',  imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700463', articleNo: '700463', size: '3"',  sizeDN: 'DN80', liner: 'Nitrile', gearRatio: '24:1', faceToFace: '252 mm', weightKg: '8.7',  imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700464', articleNo: '700464', size: '4"',  sizeDN: 'DN100', liner: 'Nitrile', gearRatio: '24:1', faceToFace: '282 mm', weightKg: '10.2', imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700465', articleNo: '700465', size: '5"',  sizeDN: 'DN125', liner: 'Nitrile', gearRatio: '24:1', faceToFace: '315 mm', weightKg: '12.2', imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700466', articleNo: '700466', size: '6"',  sizeDN: 'DN150', liner: 'Nitrile', gearRatio: '24:1', faceToFace: '345 mm', weightKg: '13.4', imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700467', articleNo: '700467', size: '8"',  sizeDN: 'DN200', liner: 'Nitrile', gearRatio: '30:1', faceToFace: '410 mm', weightKg: '22.2', imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700468', articleNo: '700468', size: '10"', sizeDN: 'DN250', liner: 'Nitrile', gearRatio: '30:1', faceToFace: '481 mm', weightKg: '32.0', imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700469', articleNo: '700469', size: '12"', sizeDN: 'DN300', liner: 'Nitrile', gearRatio: '30:1', faceToFace: '553 mm', weightKg: '40.5', imageUrl: S301E_IMAGE, description: FEATURES_COMMON.join(' ') },
];

export interface S301EFilters {
  sizes: string[];
  liners: string[];
}

export const EMPTY_S301E_FILTERS: S301EFilters = { sizes: [], liners: [] };

export interface AvailableCountsS301E {
  sizes: Record<string, number>;
  liners: Record<string, number>;
}

export function applyS301EFilters(
  data: S301EDTO[],
  filters: S301EFilters,
  skip: keyof S301EFilters | ''
): S301EDTO[] {
  return data.filter((row) => {
    if (skip !== 'sizes' && filters.sizes.length && !filters.sizes.includes(row.size)) return false;
    if (skip !== 'liners' && filters.liners.length && !filters.liners.includes(row.liner)) return false;
    return true;
  });
}

export function countByS301E(data: S301EDTO[], getKey: (row: S301EDTO) => string): Record<string, number> {
  const counts: Record<string, number> = {};
  data.forEach((row) => {
    const key = getKey(row);
    counts[key] = (counts[key] ?? 0) + 1;
  });
  return counts;
}