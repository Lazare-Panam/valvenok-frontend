export interface DielectricItem {
  id: number
  partNumber: string
  fittingType: 'Union' | 'Male Connector'
  tubeOD: string
  tubeODUnit: string
  pipeNPT?: string
  imageUrl: string
}

export interface GasketItem {
  id: number
  partNumber: string
  carbonSteelPN?: string
  gasketType: string
  threadSize: string
  threadUnit: 'Imperial' | 'Metric'
  imageUrl: string
}

const DIELECTRIC_IMG = 'https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/dielectric-fittings.jpg'
const GASKET_IMG = 'https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/gaskets.png'

export const DIELECTRIC_DATA: DielectricItem[] = [
  // ── UNION DIELECTRIC - Imperial ──
  { id: 1,  partNumber: 'PU-04-SS-DIE', fittingType: 'Union', tubeOD: '1/4',  tubeODUnit: 'Imperial', imageUrl: DIELECTRIC_IMG },
  { id: 2,  partNumber: 'PU-06-SS-DIE', fittingType: 'Union', tubeOD: '3/8',  tubeODUnit: 'Imperial', imageUrl: DIELECTRIC_IMG },
  { id: 3,  partNumber: 'PU-08-SS-DIE', fittingType: 'Union', tubeOD: '1/2',  tubeODUnit: 'Imperial', imageUrl: DIELECTRIC_IMG },
  // ── UNION DIELECTRIC - Metric ──
  { id: 4,  partNumber: 'PU-M06-SS-DIE', fittingType: 'Union', tubeOD: '6',  tubeODUnit: 'Metric', imageUrl: DIELECTRIC_IMG },
  { id: 5,  partNumber: 'PU-M08-SS-DIE', fittingType: 'Union', tubeOD: '8',  tubeODUnit: 'Metric', imageUrl: DIELECTRIC_IMG },
  { id: 6,  partNumber: 'PU-M10-SS-DIE', fittingType: 'Union', tubeOD: '10', tubeODUnit: 'Metric', imageUrl: DIELECTRIC_IMG },
  { id: 7,  partNumber: 'PU-M12-SS-DIE', fittingType: 'Union', tubeOD: '12', tubeODUnit: 'Metric', imageUrl: DIELECTRIC_IMG },
  // ── MALE CONNECTOR DIELECTRIC ──
  { id: 8,  partNumber: 'PMC-06-4N-SS-DIE',  fittingType: 'Male Connector', tubeOD: '3/8', tubeODUnit: 'Imperial', pipeNPT: '1/4"', imageUrl: DIELECTRIC_IMG },
  { id: 9,  partNumber: 'PMC-08-4N-SS-DIE',  fittingType: 'Male Connector', tubeOD: '1/2', tubeODUnit: 'Imperial', pipeNPT: '1/4"', imageUrl: DIELECTRIC_IMG },
  { id: 10, partNumber: 'PMC-M12-4N-SS-DIE', fittingType: 'Male Connector', tubeOD: '12',  tubeODUnit: 'Metric',   pipeNPT: '1/4"', imageUrl: DIELECTRIC_IMG },
]

export const GASKET_DATA: GasketItem[] = [
  // ── PRS ISO - Parallel Thread G (RS) - Imperial ──
  { id: 1,  partNumber: 'PRS-S-02', carbonSteelPN: 'PRS-C-02', gasketType: 'PRS — ISO Parallel (G)', threadSize: '1/8',   threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 2,  partNumber: 'PRS-S-04', carbonSteelPN: 'PRS-C-04', gasketType: 'PRS — ISO Parallel (G)', threadSize: '1/4',   threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 3,  partNumber: 'PRS-S-06', carbonSteelPN: 'PRS-C-06', gasketType: 'PRS — ISO Parallel (G)', threadSize: '3/8',   threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 4,  partNumber: 'PRS-S-08', carbonSteelPN: 'PRS-C-08', gasketType: 'PRS — ISO Parallel (G)', threadSize: '1/2',   threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 5,  partNumber: 'PRS-S-12', carbonSteelPN: 'PRS-C-12', gasketType: 'PRS — ISO Parallel (G)', threadSize: '3/4',   threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 6,  partNumber: 'PRS-S-16', carbonSteelPN: 'PRS-C-16', gasketType: 'PRS — ISO Parallel (G)', threadSize: '1',     threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 7,  partNumber: 'PRS-S-20', carbonSteelPN: 'PRS-C-20', gasketType: 'PRS — ISO Parallel (G)', threadSize: '1-1/4', threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 8,  partNumber: 'PRS-S-24', carbonSteelPN: 'PRS-C-24', gasketType: 'PRS — ISO Parallel (G)', threadSize: '1-1/2', threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 9,  partNumber: 'PRS-S-32', carbonSteelPN: 'PRS-C-32', gasketType: 'PRS — ISO Parallel (G)', threadSize: '2',     threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  // ── PRS Metric - External Parallel Metric ──
  { id: 10, partNumber: 'PRS-S-08M',  carbonSteelPN: 'PRS-C-08M',  gasketType: 'PRS — Metric Parallel', threadSize: 'M8 X 1.0',   threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 11, partNumber: 'PRS-S-10M',  carbonSteelPN: 'PRS-C-10M',  gasketType: 'PRS — Metric Parallel', threadSize: 'M10 X 1.0',  threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 12, partNumber: 'PRS-S-12M',  carbonSteelPN: 'PRS-C-12M',  gasketType: 'PRS — Metric Parallel', threadSize: 'M12 X 1.5',  threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 13, partNumber: 'PRS-S-14M',  carbonSteelPN: 'PRS-C-14M',  gasketType: 'PRS — Metric Parallel', threadSize: 'M14 X 1.5',  threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 14, partNumber: 'PRS-S-16M',  carbonSteelPN: 'PRS-C-16M',  gasketType: 'PRS — Metric Parallel', threadSize: 'M16 X 1.5',  threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 15, partNumber: 'PRS-S-18M',  carbonSteelPN: 'PRS-C-18M',  gasketType: 'PRS — Metric Parallel', threadSize: 'M18 X 1.5',  threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 16, partNumber: 'PRS-S-20M',  carbonSteelPN: 'PRS-C-20M',  gasketType: 'PRS — Metric Parallel', threadSize: 'M20 X 1.5',  threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 17, partNumber: 'PRS-S-22M',  carbonSteelPN: 'PRS-C-22M',  gasketType: 'PRS — Metric Parallel', threadSize: 'M22 X 1.5',  threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 18, partNumber: 'PRS-S-26M',  carbonSteelPN: 'PRS-C-26M',  gasketType: 'PRS — Metric Parallel', threadSize: 'M26 X 1.5',  threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 19, partNumber: 'PRS-S-27M',  carbonSteelPN: 'PRS-C-27M',  gasketType: 'PRS — Metric Parallel', threadSize: 'M27 X 2.0',  threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 20, partNumber: 'PRS-S-30M',  carbonSteelPN: 'PRS-C-30M',  gasketType: 'PRS — Metric Parallel', threadSize: 'M30 X 2.0',  threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 21, partNumber: 'PRS-S-33M',  carbonSteelPN: 'PRS-C-33M',  gasketType: 'PRS — Metric Parallel', threadSize: 'M33 X 2.0',  threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 22, partNumber: 'PRS-S-38M',  carbonSteelPN: 'PRS-C-38M',  gasketType: 'PRS — Metric Parallel', threadSize: 'M38 X 2.0',  threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 23, partNumber: 'PRS-S-42M',  carbonSteelPN: 'PRS-C-42M',  gasketType: 'PRS — Metric Parallel', threadSize: 'M42 X 2.0',  threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 24, partNumber: 'PRS-S-48M',  carbonSteelPN: 'PRS-C-48M',  gasketType: 'PRS — Metric Parallel', threadSize: 'M48 X 2.0',  threadUnit: 'Metric', imageUrl: GASKET_IMG },
  // ── PRP ISO - External Parallel Thread RP ──
  { id: 25, partNumber: 'PRP-CU-02', gasketType: 'PRP — ISO Parallel (RP)', threadSize: '1/8',   threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 26, partNumber: 'PRP-CU-04', gasketType: 'PRP — ISO Parallel (RP)', threadSize: '1/4',   threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 27, partNumber: 'PRP-CU-06', gasketType: 'PRP — ISO Parallel (RP)', threadSize: '3/8',   threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 28, partNumber: 'PRP-CU-08', gasketType: 'PRP — ISO Parallel (RP)', threadSize: '1/2',   threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 29, partNumber: 'PRP-CU-12', gasketType: 'PRP — ISO Parallel (RP)', threadSize: '3/4',   threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 30, partNumber: 'PRP-CU-16', gasketType: 'PRP — ISO Parallel (RP)', threadSize: '1',     threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 31, partNumber: 'PRP-CU-20', gasketType: 'PRP — ISO Parallel (RP)', threadSize: '1-1/4', threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 32, partNumber: 'PRP-CU-24', gasketType: 'PRP — ISO Parallel (RP)', threadSize: '1-1/2', threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 33, partNumber: 'PRP-CU-32', gasketType: 'PRP — ISO Parallel (RP)', threadSize: '2',     threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  // ── PRP Metric - External Parallel Metric ──
  { id: 34, partNumber: 'PRP-CU-08M', gasketType: 'PRP — Metric Parallel', threadSize: 'M8 X 1.0',  threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 35, partNumber: 'PRP-CU-10M', gasketType: 'PRP — Metric Parallel', threadSize: 'M10 X 1.0', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 36, partNumber: 'PRP-CU-12M', gasketType: 'PRP — Metric Parallel', threadSize: 'M12 X 1.5', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 37, partNumber: 'PRP-CU-14M', gasketType: 'PRP — Metric Parallel', threadSize: 'M14 X 1.5', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 38, partNumber: 'PRP-CU-16M', gasketType: 'PRP — Metric Parallel', threadSize: 'M16 X 1.5', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 39, partNumber: 'PRP-CU-18M', gasketType: 'PRP — Metric Parallel', threadSize: 'M18 X 1.5', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 40, partNumber: 'PRP-CU-20M', gasketType: 'PRP — Metric Parallel', threadSize: 'M20 X 1.5', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 41, partNumber: 'PRP-CU-22M', gasketType: 'PRP — Metric Parallel', threadSize: 'M22 X 1.5', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 42, partNumber: 'PRP-CU-24M', gasketType: 'PRP — Metric Parallel', threadSize: 'M24 X 1.5', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 43, partNumber: 'PRP-CU-27M', gasketType: 'PRP — Metric Parallel', threadSize: 'M27 X 2.0', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 44, partNumber: 'PRP-CU-30M', gasketType: 'PRP — Metric Parallel', threadSize: 'M30 X 2.0', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 45, partNumber: 'PRP-CU-36M', gasketType: 'PRP — Metric Parallel', threadSize: 'M36 X 2.0', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 46, partNumber: 'PRP-CU-40M', gasketType: 'PRP — Metric Parallel', threadSize: 'M40 X 2.0', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  // ── PRG ISO - Internal Parallel G-Thread ──
  { id: 47, partNumber: 'PRG-CU-04', gasketType: 'PRG — ISO Internal (G)', threadSize: '1/4', threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 48, partNumber: 'PRG-CU-06', gasketType: 'PRG — ISO Internal (G)', threadSize: '3/8', threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 49, partNumber: 'PRG-CU-08', gasketType: 'PRG — ISO Internal (G)', threadSize: '1/2', threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  { id: 50, partNumber: 'PRG-CU-12', gasketType: 'PRG — ISO Internal (G)', threadSize: '3/4', threadUnit: 'Imperial', imageUrl: GASKET_IMG },
  // ── PRG Metric - Internal Metric Threads ──
  { id: 51, partNumber: 'PRG-CU-10M', gasketType: 'PRG — Metric Internal', threadSize: 'M10 X 1.0', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 52, partNumber: 'PRG-CU-12M', gasketType: 'PRG — Metric Internal', threadSize: 'M12 X 1.5', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 53, partNumber: 'PRG-CU-14M', gasketType: 'PRG — Metric Internal', threadSize: 'M14 X 1.5', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 54, partNumber: 'PRG-CU-16M', gasketType: 'PRG — Metric Internal', threadSize: 'M16 X 1.5', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 55, partNumber: 'PRG-CU-18M', gasketType: 'PRG — Metric Internal', threadSize: 'M18 X 1.5', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 56, partNumber: 'PRG-CU-20M', gasketType: 'PRG — Metric Internal', threadSize: 'M20 X 1.5', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 57, partNumber: 'PRG-CU-22M', gasketType: 'PRG — Metric Internal', threadSize: 'M22 X 1.5', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 58, partNumber: 'PRG-CU-24M', gasketType: 'PRG — Metric Internal', threadSize: 'M24 X 1.5', threadUnit: 'Metric', imageUrl: GASKET_IMG },
  { id: 59, partNumber: 'PRG-CU-27M', gasketType: 'PRG — Metric Internal', threadSize: 'M27 X 2.0', threadUnit: 'Metric', imageUrl: GASKET_IMG },
]