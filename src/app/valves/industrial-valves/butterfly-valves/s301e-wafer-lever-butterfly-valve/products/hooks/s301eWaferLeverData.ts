// hooks/s301eWaferLeverData.ts
export interface S301EWaferLeverDTO {
  id: string;
  articleNo: string;
  size: string;
  sizeDN: string;
  liner: string;
  faceToFace: string;
  weightKg: string;
  imageUrl: string;
  description: string;
}

export const S301E_WAFER_LEVER_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/pp-90.webp';

export const S301E_WAFER_LEVER_DESCRIPTION = {
  title: 'S301E Series — Wafer Pattern Butterfly Valve, Lever Operated',
  description: 'Resilient seated wafer butterfly valve with 316 stainless steel disc. 1½"–8", PN6/PN10/PN16/ANSI 150. EPDM or Nitrile liner, 10-position leverlock handle, ISO 5211 mounting, Rate A no-leakage shutoff.',
  specs: ['1½"–8" (DN40–DN200)', 'PN6 · PN10 · PN16 · ANSI 150', '316SS Disc', 'EPDM / Nitrile Liner', 'Lever Operated', 'ISO 5211 Mounting'],
};

const FEATURES_COMMON = [
  '10-position leverlock handle — quick manual operation with intermediate throttling positions.',
  'Machined position mark for accurate disc alignment during installation.',
  'Vulcanized resilient seat bonded to metallic support ring — replaceable without special tools.',
  'One-piece ductile iron body, square-end stem fits directly into disc — disc floats and self-centres.',
];

export const S301E_WAFER_LEVER_DATA: S301EWaferLeverDTO[] = [
  { id: '700400', articleNo: '700400', size: '1½"', sizeDN: 'DN40', liner: 'EPDM',    faceToFace: '190 mm', weightKg: '2.2', imageUrl: S301E_WAFER_LEVER_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700401', articleNo: '700401', size: '2"',  sizeDN: 'DN50', liner: 'EPDM',    faceToFace: '207 mm', weightKg: '2.3', imageUrl: S301E_WAFER_LEVER_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700402', articleNo: '700402', size: '2½"', sizeDN: 'DN65', liner: 'EPDM',    faceToFace: '232 mm', weightKg: '3.9', imageUrl: S301E_WAFER_LEVER_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700403', articleNo: '700403', size: '3"',  sizeDN: 'DN80', liner: 'EPDM',    faceToFace: '252 mm', weightKg: '5.5', imageUrl: S301E_WAFER_LEVER_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700404', articleNo: '700404', size: '4"',  sizeDN: 'DN100', liner: 'EPDM',   faceToFace: '282 mm', weightKg: '5.6', imageUrl: S301E_WAFER_LEVER_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700405', articleNo: '700405', size: '5"',  sizeDN: 'DN125', liner: 'EPDM',   faceToFace: '315 mm', weightKg: '7.3', imageUrl: S301E_WAFER_LEVER_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700406', articleNo: '700406', size: '6"',  sizeDN: 'DN150', liner: 'EPDM',   faceToFace: '345 mm', weightKg: '5.7', imageUrl: S301E_WAFER_LEVER_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700407', articleNo: '700407', size: '8"',  sizeDN: 'DN200', liner: 'EPDM',   faceToFace: '410 mm', weightKg: '9.6', imageUrl: S301E_WAFER_LEVER_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700420', articleNo: '700420', size: '1½"', sizeDN: 'DN40', liner: 'Nitrile', faceToFace: '190 mm', weightKg: '2.2', imageUrl: S301E_WAFER_LEVER_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700421', articleNo: '700421', size: '2"',  sizeDN: 'DN50', liner: 'Nitrile', faceToFace: '207 mm', weightKg: '2.3', imageUrl: S301E_WAFER_LEVER_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700422', articleNo: '700422', size: '2½"', sizeDN: 'DN65', liner: 'Nitrile', faceToFace: '232 mm', weightKg: '3.9', imageUrl: S301E_WAFER_LEVER_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700423', articleNo: '700423', size: '3"',  sizeDN: 'DN80', liner: 'Nitrile', faceToFace: '252 mm', weightKg: '5.5', imageUrl: S301E_WAFER_LEVER_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700424', articleNo: '700424', size: '4"',  sizeDN: 'DN100', liner: 'Nitrile', faceToFace: '282 mm', weightKg: '5.6', imageUrl: S301E_WAFER_LEVER_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700425', articleNo: '700425', size: '5"',  sizeDN: 'DN125', liner: 'Nitrile', faceToFace: '315 mm', weightKg: '7.3', imageUrl: S301E_WAFER_LEVER_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700426', articleNo: '700426', size: '6"',  sizeDN: 'DN150', liner: 'Nitrile', faceToFace: '345 mm', weightKg: '5.7', imageUrl: S301E_WAFER_LEVER_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700427', articleNo: '700427', size: '8"',  sizeDN: 'DN200', liner: 'Nitrile', faceToFace: '410 mm', weightKg: '9.6', imageUrl: S301E_WAFER_LEVER_IMAGE, description: FEATURES_COMMON.join(' ') },
];

export interface S301EWaferLeverFilters {
  sizes: string[];
  liners: string[];
}

export const EMPTY_S301E_WAFER_LEVER_FILTERS: S301EWaferLeverFilters = { sizes: [], liners: [] };

export interface AvailableCountsS301EWaferLever {
  sizes: Record<string, number>;
  liners: Record<string, number>;
}

export function applyS301EWaferLeverFilters(
  data: S301EWaferLeverDTO[],
  filters: S301EWaferLeverFilters,
  skip: keyof S301EWaferLeverFilters | ''
): S301EWaferLeverDTO[] {
  return data.filter((row) => {
    if (skip !== 'sizes' && filters.sizes.length && !filters.sizes.includes(row.size)) return false;
    if (skip !== 'liners' && filters.liners.length && !filters.liners.includes(row.liner)) return false;
    return true;
  });
}

export function countByS301EWaferLever(data: S301EWaferLeverDTO[], getKey: (row: S301EWaferLeverDTO) => string): Record<string, number> {
  const counts: Record<string, number> = {};
  data.forEach((row) => {
    const key = getKey(row);
    counts[key] = (counts[key] ?? 0) + 1;
  });
  return counts;
}