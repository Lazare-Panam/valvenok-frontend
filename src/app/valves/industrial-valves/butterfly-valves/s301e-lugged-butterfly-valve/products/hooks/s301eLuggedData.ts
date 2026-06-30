// hooks/s301eLuggedData.ts
export interface S301ELuggedDTO {
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

export const S301E_LUGGED_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/pp-93.webp';

export const S301E_LUGGED_DESCRIPTION = {
  title: 'S301E Series — Lugged Butterfly Valve, Gearbox Operated',
  description: 'Resilient seated lugged butterfly valve with 316 stainless steel disc. 1½"–8", PN6/PN10/PN16/ANSI 150. EPDM or Nitrile liner, gearbox operated, ISO 5211 mounting, Rate A no-leakage shutoff.',
  specs: ['1½"–8" (DN40–DN200)', 'PN6 · PN10 · PN16 · ANSI 150', '316SS Disc', 'EPDM / Nitrile Liner', 'Gearbox Operated', 'ISO 5211 Mounting'],
};

const FEATURES_COMMON = [
  'Lugged end connection — bolted at each flange hole, suitable for dead-end (foot valve) service on a single flange.',
  'Gearbox operated — low operating torque, ISO 5211 mounting.',
  'Machined position mark for accurate disc alignment during installation.',
  'Vulcanized resilient seat bonded to metallic support ring — replaceable without special tools.',
  'One-piece ductile iron body, square-end stem fits directly into disc — disc floats and self-centres.',
];

export const S301E_LUGGED_DATA: S301ELuggedDTO[] = [
  { id: '700520', articleNo: '700520', size: '1½"', sizeDN: 'DN40', liner: 'EPDM',    gearRatio: '24:1', faceToFace: '190 mm', weightKg: '7.4',  imageUrl: S301E_LUGGED_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700521', articleNo: '700521', size: '2"',  sizeDN: 'DN50', liner: 'EPDM',    gearRatio: '24:1', faceToFace: '207 mm', weightKg: '8.1',  imageUrl: S301E_LUGGED_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700522', articleNo: '700522', size: '2½"', sizeDN: 'DN65', liner: 'EPDM',    gearRatio: '24:1', faceToFace: '232 mm', weightKg: '9.3',  imageUrl: S301E_LUGGED_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700523', articleNo: '700523', size: '3"',  sizeDN: 'DN80', liner: 'EPDM',    gearRatio: '24:1', faceToFace: '252 mm', weightKg: '9.5',  imageUrl: S301E_LUGGED_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700524', articleNo: '700524', size: '4"',  sizeDN: 'DN100', liner: 'EPDM',   gearRatio: '24:1', faceToFace: '282 mm', weightKg: '11',   imageUrl: S301E_LUGGED_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700525', articleNo: '700525', size: '5"',  sizeDN: 'DN125', liner: 'EPDM',   gearRatio: '24:1', faceToFace: '315 mm', weightKg: '15.4', imageUrl: S301E_LUGGED_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700526', articleNo: '700526', size: '6"',  sizeDN: 'DN150', liner: 'EPDM',   gearRatio: '24:1', faceToFace: '345 mm', weightKg: '18.0', imageUrl: S301E_LUGGED_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700527', articleNo: '700527', size: '8"',  sizeDN: 'DN200', liner: 'EPDM',   gearRatio: '30:1', faceToFace: '410 mm', weightKg: '27.9', imageUrl: S301E_LUGGED_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700540', articleNo: '700540', size: '1½"', sizeDN: 'DN40', liner: 'Nitrile', gearRatio: '24:1', faceToFace: '190 mm', weightKg: '7.4',  imageUrl: S301E_LUGGED_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700541', articleNo: '700541', size: '2"',  sizeDN: 'DN50', liner: 'Nitrile', gearRatio: '24:1', faceToFace: '207 mm', weightKg: '8.1',  imageUrl: S301E_LUGGED_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700542', articleNo: '700542', size: '2½"', sizeDN: 'DN65', liner: 'Nitrile', gearRatio: '24:1', faceToFace: '232 mm', weightKg: '9.3',  imageUrl: S301E_LUGGED_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700543', articleNo: '700543', size: '3"',  sizeDN: 'DN80', liner: 'Nitrile', gearRatio: '24:1', faceToFace: '252 mm', weightKg: '9.5',  imageUrl: S301E_LUGGED_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700544', articleNo: '700544', size: '4"',  sizeDN: 'DN100', liner: 'Nitrile', gearRatio: '24:1', faceToFace: '282 mm', weightKg: '11',   imageUrl: S301E_LUGGED_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700545', articleNo: '700545', size: '5"',  sizeDN: 'DN125', liner: 'Nitrile', gearRatio: '24:1', faceToFace: '315 mm', weightKg: '15.4', imageUrl: S301E_LUGGED_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700546', articleNo: '700546', size: '6"',  sizeDN: 'DN150', liner: 'Nitrile', gearRatio: '24:1', faceToFace: '345 mm', weightKg: '18.0', imageUrl: S301E_LUGGED_IMAGE, description: FEATURES_COMMON.join(' ') },
  { id: '700547', articleNo: '700547', size: '8"',  sizeDN: 'DN200', liner: 'Nitrile', gearRatio: '30:1', faceToFace: '410 mm', weightKg: '27.9', imageUrl: S301E_LUGGED_IMAGE, description: FEATURES_COMMON.join(' ') },
];

export interface S301ELuggedFilters {
  sizes: string[];
  liners: string[];
}

export const EMPTY_S301E_LUGGED_FILTERS: S301ELuggedFilters = { sizes: [], liners: [] };

export interface AvailableCountsS301ELugged {
  sizes: Record<string, number>;
  liners: Record<string, number>;
}

export function applyS301ELuggedFilters(
  data: S301ELuggedDTO[],
  filters: S301ELuggedFilters,
  skip: keyof S301ELuggedFilters | ''
): S301ELuggedDTO[] {
  return data.filter((row) => {
    if (skip !== 'sizes' && filters.sizes.length && !filters.sizes.includes(row.size)) return false;
    if (skip !== 'liners' && filters.liners.length && !filters.liners.includes(row.liner)) return false;
    return true;
  });
}

export function countByS301ELugged(data: S301ELuggedDTO[], getKey: (row: S301ELuggedDTO) => string): Record<string, number> {
  const counts: Record<string, number> = {};
  data.forEach((row) => {
    const key = getKey(row);
    counts[key] = (counts[key] ?? 0) + 1;
  });
  return counts;
}