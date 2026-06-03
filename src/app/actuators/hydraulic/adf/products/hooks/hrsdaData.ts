export interface HRSDAActuatorDTO {
  id: string
  model: string
  series: 'HRSDA' | 'HRSSA'
  // HRSDA — double acting
  torque100OpenNm?: number
  torque100CloseNm?: number
  torque100OpenLbIn?: number
  torque100CloseLbIn?: number
  torque130OpenNm?: number
  torque130CloseNm?: number
  torque130OpenLbIn?: number
  torque130CloseLbIn?: number
  torque160OpenNm?: number
  torque160CloseNm?: number
  torque160OpenLbIn?: number
  torque160CloseLbIn?: number
  // HRSSA — spring return
  springCode?: string
  springStart?: number
  springRun?: number
  springEnd?: number
  oil100Start?: number
  oil100Run?: number
  oil100End?: number
  oil130Start?: number
  oil130Run?: number
  oil130End?: number
  oil160Start?: number
  oil160Run?: number
  oil160End?: number
  imageUrl: string
  description: string
}

export interface HRSDAFilters {
  series: string[]
  pressures: string[]
}

export const EMPTY_HRSDA_FILTERS: HRSDAFilters = {
  series: [],
  pressures: [],
}

export interface AvailableCountsHRSDA {
  series: Record<string, number>
  pressures: Record<string, number>
}

export function applyHRSDAFilters(
  data: HRSDAActuatorDTO[],
  filters: HRSDAFilters,
  exclude: keyof HRSDAFilters | ''
): HRSDAActuatorDTO[] {
  return data.filter(c => {
    if (exclude !== 'series' && filters.series.length && !filters.series.includes(c.series)) return false
    return true
  })
}

export function countByHRSDA<T>(items: T[], keyFn: (item: T) => string): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const k = keyFn(item)
    counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}

const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/hydraulic/adf.webp'

const makeDA = (
  model: string,
  torque100OpenNm: number, torque100CloseNm: number, torque100OpenLbIn: number, torque100CloseLbIn: number,
  torque130OpenNm: number, torque130CloseNm: number, torque130OpenLbIn: number, torque130CloseLbIn: number,
  torque160OpenNm: number, torque160CloseNm: number, torque160OpenLbIn: number, torque160CloseLbIn: number,
): HRSDAActuatorDTO => ({
  id: model,
  model,
  series: 'HRSDA',
  torque100OpenNm, torque100CloseNm, torque100OpenLbIn, torque100CloseLbIn,
  torque130OpenNm, torque130CloseNm, torque130OpenLbIn, torque130CloseLbIn,
  torque160OpenNm, torque160CloseNm, torque160OpenLbIn, torque160CloseLbIn,
  imageUrl: IMAGE,
  description: `Panam ${model} Hydraulic Double Acting Actuator. Torque at 100 bar: ${torque100OpenNm}–${torque100CloseNm} Nm (open/close).`,
})

const makeSR = (
  model: string,
  springCode: string,
  springStart: number, springRun: number, springEnd: number,
  oil100Start: number | null, oil100Run: number | null, oil100End: number | null,
  oil130Start: number | null, oil130Run: number | null, oil130End: number | null,
  oil160Start: number | null, oil160Run: number | null, oil160End: number | null,
): HRSDAActuatorDTO => ({
  id: `${model}-${springCode}`,
  model,
  series: 'HRSSA',
  springCode,
  springStart,
  springRun,
  springEnd,
  oil100Start: oil100Start ?? undefined,
  oil100Run: oil100Run ?? undefined,
  oil100End: oil100End ?? undefined,
  oil130Start: oil130Start ?? undefined,
  oil130Run: oil130Run ?? undefined,
  oil130End: oil130End ?? undefined,
  oil160Start: oil160Start ?? undefined,
  oil160Run: oil160Run ?? undefined,
  oil160End: oil160End ?? undefined,
  imageUrl: IMAGE,
  description: `Panam ${model} Hydraulic Spring Return Actuator. Spring code ${springCode}, spring torque start ${springStart} Nm.`,
})

export const HRSDA_DATA: HRSDAActuatorDTO[] = [
  // HRSDA Double Acting
  makeDA('HRSDA-A1-032/EHRSDA-A1-032', 208,341,1841,3018, 270,443,2390,3921, 332,546,2938,4832),
  makeDA('HRSDA-A1-040/EHRSDA-A1-040', 372,533,3292,4717, 483,693,4275,6133, 595,853,5266,7549),
  makeDA('HRSDA-A1-050/EHRSDA-A1-050', 624,833,5522,7372, 812,1082,7186,9576, 999,1332,8841,11788),
  makeDA('HRSDA-01-040/EHRSDA-01-040', 694,925,6142,8186, 902,1202,7983,10638, 1110,1480,9824,13098),
  makeDA('HRSDA-01-050/EHRSDA-01-050', 1084,1445,9593,12788, 1409,1879,12470,16629, 1734,2312,15346,20461),
  makeDA('HRSDA-02-050/EHRSDA-02-050', 1416,1888,12532,16709, 1841,2455,16293,21727, 2266,3021,20054,26736),
  makeDA('HRSDA-02-060/EHRSDA-02-060', 2072,2998,18337,26532, 2694,3897,23842,34488, 3316,4796,29347,42445),
  makeDA('HRSDA-02-080/EHRSDA-02-080', 3625,4834,32081,42781, 4713,6824,41710,60392, 5800,7734,51330,68446),
  makeDA('HRSDA-02-100/EHRSDA-02-100', 5268,7552,46622,66835, 6848,9818,60605,86889, 8428,12084,74588,106943),
  makeDA('HRSDA-03-060/EHRSDA-03-060', 2438,3526,21576,31205, 3169,4584,28046,40568, 3901,5642,34524,49932),
  makeDA('HRSDA-03-080/EHRSDA-03-080', 4265,5686,37745,50321, 5544,7392,49064,65419, 6823,9098,60384,80517),
  makeDA('HRSDA-03-100/EHRSDA-03-100', 6197,8884,54843,78623, 8056,11550,71296,102218, 9915,14215,87748,125803),
  makeDA('HRSDA-04-100/EHRSDA-04-100', 8055,11548,71287,102200, 10472,15013,92677,132865, 12888,18478,114059,163530),
  makeDA('HRSDA-04-125/EHRSDA-04-125', 13165,18045,116510,159698, 18053,23458,159769,207603, 22219,28871,196638,255508),
  makeDA('HRSDA-04-140/EHRSDA-04-140', 16976,22635,150238,200320, 22069,29426,195311,260420, 27162,36216,240384,320512),
  makeDA('HRSDA-05-140/EHRSDA-05-140', 20902,27869,184983,246641, 27172,36230,240472,320636, 33443,44590,295971,394622),
  makeDA('HRSDA-05-160/EHRSDA-05-160', 27300,36400,241605,322140, 35490,47320,314087,418782, 43680,58240,386568,515424),
  makeDA('HRSDA-05-180/EHRSDA-05-180', 34552,46069,305785,407711, 44917,59890,397515,530027, 55283,73711,489255,652342),
  makeDA('HRSDA-06-180/EHRSDA-06-180', 42751,57001,378346,504459, 55576,74101,491848,655794, 68401,91202,605349,807138),
  makeDA('HRSDA-06-200/EHRSDA-06-200', 52779,70372,467094,622792, 68612,91483,607216,809625, 84446,112595,747347,996466),

  // HRSSA Spring Return
  makeSR('HRSSA-A1-030/EHRSSA-A1-030', 'S-A1', 147,78,96, 112,71,60, 175,116,123, 237,160,185),
  makeSR('HRSSA-A1-030/EHRSSA-A1-030', 'S-A2', 177,92,110, 97,57,30, 160,101,93, 222,146,155),
  makeSR('HRSSA-A1-030/EHRSSA-A1-030', 'S-A7', 220,115,140, null,null,null, 130,78,50, 193,123,112),
  makeSR('HRSSA-A1-040/EHRSSA-A1-040', 'S-A7', 256,139,177, 217,150,157, 337,236,277, 457,322,397),
  makeSR('HRSSA-A1-040/EHRSSA-A1-040', 'S-A4', 337,182,229, 171,105,62, 291,191,182, 411,277,302),
  makeSR('HRSSA-A1-040/EHRSSA-A1-040', 'S-A5', 401,214,266, null,null,null, 253,158,118, 373,244,238),
  makeSR('HRSSA-A1-050/EHRSSA-A1-050', 'S-A10', 416,236,326, 339,236,251, 526,371,438, 714,505,625),
  makeSR('HRSSA-A1-050/EHRSSA-A1-050', 'S-1B', 445,257,356, 268,191,180, 455,325,367, 643,459,554),
  makeSR('HRSSA-A1-050/EHRSSA-A1-050', 'S-1B', 503,294,414, 210,153,121, 397,288,309, 585,422,496),
  makeSR('HRSSA-01-040/EHRSSA-01-040', 'S-A7', 495,256,317, 377,234,199, 585,381,407, 793,528,615),
  makeSR('HRSSA-01-040/EHRSSA-01-040', 'S-A7', 583,310,398, 296,180,111, 504,327,319, 712,474,527),
  makeSR('HRSSA-01-040/EHRSSA-01-040', 'S-1B', 726,376,267, null,null,null, 635,261,176, 843,409,384),
  makeSR('HRSSA-01-050/EHRSSA-01-050', 'S-1B', 758,396,285, 799,370,326, 1124,599,651, 1449,829,976),
  makeSR('HRSSA-01-050/EHRSSA-01-050', 'S-1B', 881,474,356, 728,292,203, 1053,522,528, 1378,751,853),
  makeSR('HRSSA-01-050/EHRSSA-01-050', 'S-1B', 982,538,414, 669,228,102, 995,458,427, 1320,687,752),
  makeSR('HRSSA-02-050/EHRSSA-02-050', 'S-1B', 1096,551,647, 769,450,32, 1194,750,745, 1619,1051,1170),
  makeSR('HRSSA-02-050/EHRSSA-02-050', 'S-1B', 1257,653,808, 608,348,159, 1033,649,584, 1458,949,1009),
  makeSR('HRSSA-02-050/EHRSSA-02-050', 'S-1A', 1643,818,943, null,null,null, 898,484,198, 1323,784,623),
  makeSR('HRSSA-02-060/EHRSSA-02-060', 'S-1A', 1622,805,922, 1097,623,623, 1702,1051,1002, 2308,1479,1608),
  makeSR('HRSSA-02-060/EHRSSA-02-060', 'S-1A', 2154,1108,1349, 866,477,166, 1472,905,772, 2077,1333,1377),
  makeSR('HRSSA-02-060/EHRSSA-02-060', 'S-1', 2149,1105,1344, null,null,null, 2130,751,475, 1886,1179,1081),
  makeSR('HRSSA-02-080/EHRSSA-02-080', 'S-1', 2450,1267,1600, 1901,1209,1097, 2952,1952,2147, 4002,2695,3197),
  makeSR('HRSSA-02-080/EHRSSA-02-080', 'S-3', 3058,1599,1995, 1506,877,443, 2557,1620,1493, 3607,2363,2544),
  makeSR('HRSSA-02-080/EHRSSA-02-080', 'S-4', 3874,1965,2335, null,null,null, 2216,1254,677, 3267,1997,1728),
  makeSR('HRSSA-02-100/EHRSSA-02-100', 'S-4', 3947,2010,2408, 2860,1715,1321, 4440,2832,2901, 6021,3950,4482),
  makeSR('HRSSA-02-100/EHRSSA-02-100', 'S-5', 4604,2402,2997, 2271,1321,664, 3851,2438,2244, 5432,3556,3825),
  makeSR('HRSSA-02-100/EHRSSA-02-100', 'S-5', 5105,2721,3498, 1770,1004,163, 3350,2121,1743, 4931,3239,3324),
  makeSR('HRSSA-03-060/EHRSSA-03-060', 'S-1A', 2054,993,1085, 1290,687,321, 2002,1190,1034, 2715,1694,1764),
  makeSR('HRSSA-03-060/EHRSSA-03-060', 'S-1', 2467,1209,1353, null,null,null, 1734,975,620, 2447,1479,1333),
  makeSR('HRSSA-03-060/EHRSSA-03-060', 'S-1', 2695,1353,1581, null,null,null, 1506,830,392, 2218,1334,1105),
  makeSR('HRSSA-03-080/EHRSSA-03-080', 'S-1', 2996,1543,1882, 2237,1370,1123, 3472,2243,2359, 4708,3117,3594),
  makeSR('HRSSA-03-080/EHRSSA-03-080', 'S-3', 3818,1951,2347, 1772,962,300, 3008,1836,1536, 4243,2710,2772),
  makeSR('HRSSA-03-080/EHRSSA-03-080', 'S-4', 4877,2412,2747, null,null,null, 2607,1374,477, 3843,2248,1713),
  makeSR('HRSSA-03-100/EHRSSA-03-100', 'S-4', 4962,2466,2833, 3364,1916,1235, 5223,3231,3094, 7082,4546,4953),
  makeSR('HRSSA-03-100/EHRSSA-03-100', 'S-5', 5749,2934,3525, 2672,1448,448, 4531,2763,2307, 6390,4078,4166),
  makeSR('HRSSA-03-100/EHRSSA-03-100', 'S-5', 6339,3307,4115, null,null,null, 3941,2390,1717, 5800,3705,3576),
  makeSR('HRSSA-04-100/EHRSSA-04-100', 'S-6', 6135,3105,3677, 4378,2593,1921, 6795,4302,4337, 9211,6011,6754),
  makeSR('HRSSA-04-100/EHRSSA-04-100', 'S-5', 8341,4089,4582, null,null,null, 5889,3317,2131, 8306,5027,4548),
  makeSR('HRSSA-04-100/EHRSSA-04-100', 'S-8', 10390,4983,5359, null,null,null, 5112,2423,82, 7529,4132,2498),
  makeSR('HRSSA-04-125/EHRSSA-04-125', 'S-8', 11028,5387,5998, 7167,3924,2137, 11117,6718,6087, 15067,9511,10036),
  makeSR('HRSSA-04-125/EHRSSA-04-125', 'S-11', 12084,6196,7497, 5668,3116,1082, 9618,5909,5031, 13567,8703,8981),
  makeSR('HRSSA-04-125/EHRSSA-04-125', 'S-11', 13336,6988,8750, null,null,null, 8365,5117,3779, 12315,7910,7728),
  makeSR('HRSSA-04-140/EHRSSA-04-140', 'S-11', 12331,6352,7744, 9232,5655,4646, 14325,9257,9738, 19418,12859,14831),
  makeSR('HRSSA-04-140/EHRSSA-04-140', 'S-12', 15048,7827,9688, 7288,4180,1929, 12381,7782,7022, 17474,11385,12115),
  makeSR('HRSSA-04-140/EHRSSA-04-140', 'S-13', 18157,9313,11275, null,null,null, 10794,6296,3912, 15887,9899,9005),
  makeSR('HRSSA-05-140/EHRSSA-05-140', 'S-11', 16485,8230,9535, 11367,6548,4417, 17637,10981,10687, 23908,15415,16958),
  makeSR('HRSSA-05-140/EHRSSA-05-140', 'S-12', 20050,9856,11928, 8973,4663,852, 15244,9097,7123, 21514,13530,13393),
  makeSR('HRSSA-05-140/EHRSSA-05-140', 'S-13', 24311,12081,13882, null,null,null, 13290,7131,2862, 19560,11564,9132),
  makeSR('HRSSA-05-140/EHRSSA-05-140', 'S-15', 20051,4585,12444, 14857,14717,25249, 23047,20508,33439, 31237,26298,41629),
  makeSR('HRSSA-05-160/EHRSSA-05-160', 'S-16', 25856,13102,15565, 11735,6200,1444, 19925,11991,9634, 28115,17781,17824),
  makeSR('HRSSA-05-160/EHRSSA-05-160', 'S-17', 30068,15245,18131, null,null,null, 17360,9847,5422, 25550,15638,13612),
  makeSR('HRSSA-05-180/EHRSSA-05-180', 'S-16', 26050,13224,15758, 18793,11205,8502, 29159,18534,18868, 39524,25863,29233),
]

export const HRSDA_DESCRIPTION = {
  title: 'HRSDA / HRSSA Hydraulic Actuators',
  description:
    'Panam HRSDA (Double Acting) and HRSSA (Spring Return) Hydraulic Actuators. Operating pressures 100, 130, and 160 bar. Torque range from 208 Nm up to 112,595 Nm.',
  specs: [
    'HRSDA · HRSSA',
    'Double Acting · Spring Return',
    '100 · 130 · 160 Bar',
    'Up to 112,595 Nm',
  ],
}