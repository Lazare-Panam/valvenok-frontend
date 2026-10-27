// Unified Youngdo gas/cylinder valve catalogue — Hydrogen + LPG + Industrial Gas in one grid.

export interface GasValve {
  id: string
  model: string
  brand: string
  gasType: 'Hydrogen' | 'LPG' | 'Industrial Gas'
  category: string
  series: string
  inletThreads: string
  outletThreads: string
  workingPressure: string
  certification: string
  standard: string
  image: string
}

export interface GasFilters {
  gasTypes: string[]
  categories: string[]
  series: string[]
  certifications: string[]
}

export const EMPTY_GAS_FILTERS: GasFilters = { gasTypes: [], categories: [], series: [], certifications: [] }

export interface GasCounts {
  gasTypes: Record<string, number>
  categories: Record<string, number>
  series: Record<string, number>
  certifications: Record<string, number>
}

// certification is a comma-joined multi-value; split into tokens for filtering/faceting
export const certTokens = (v: string) =>
  v.split(',').map(s => s.trim()).filter(s => s && s !== 'N/A')

export function applyFilters(data: GasValve[], f: GasFilters, exclude: keyof GasFilters | ''): GasValve[] {
  return data.filter(v => {
    if (exclude !== 'gasTypes'       && f.gasTypes.length       && !f.gasTypes.includes(v.gasType))        return false
    if (exclude !== 'categories'     && f.categories.length     && !f.categories.includes(v.category))     return false
    if (exclude !== 'series'         && f.series.length         && !f.series.includes(v.series))           return false
    if (exclude !== 'certifications' && f.certifications.length && !certTokens(v.certification).some(c => f.certifications.includes(c))) return false
    return true
  })
}

export function countBy<T>(items: T[], keyFn: (i: T) => string[]): Record<string, number> {
  const out: Record<string, number> = {}
  for (const it of items) for (const k of keyFn(it)) if (k) out[k] = (out[k] ?? 0) + 1
  return out
}

const IMG = (f: string) => `https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/${f}`

/* ---------------- Hydrogen (13) ---------------- */
type H2Src = [id: string, model: string, series: string, inlet: string, outlet: string, wp: string, cert: string, std: string, img: string]
const H2: H2Src[] = [
  ['hc-700','HC-700','HC','1 1/2"-12UNF','M12x1.5P','70.0 MPa / 35.0 MPa','KGS, R134, CSEL, KHK','국토교통부 고시 / ECE R134','HE-700.png'],
  ['he-700','HE-700','HE','1 1/2"-12UNF','9/16"-18UNF / M12x1.5P','70.0 MPa / 35.0 MPa','KGS, EC79, R134, CSEL','국토교통부 고시 / ECE R134','HE-700.png'],
  ['hk-700','HK-700','HK','1 1/2"-12UNF','9/16"-18UNF / M12x1.5P','70.0 MPa / 35.0 MPa','KGS, EC79','국토교통부 고시 / ECE R134','HK-700.png'],
  ['hs-700','HS-700','HS','1 1/2"-12UNF','9/16"-18UNF','70.0 MPa / 35.0 MPa','EC79, CSEL','국토교통부 고시 / ECE R134','HS-700.png'],
  ['hsl-700','HSL-700','HSL','1 1/2"-12UNF','9/16"-18UNF','70.0 MPa / 35.0 MPa','EC79, CSEL','국토교통부 고시 / ECE R134','HS-700.png'],
  ['ep-70pa','EP-70PA','EP','1 1/2"-12UNF','9/16"-18UNF','70.0 MPa / 35.0 MPa','KGS, EC79, R134','국토교통부 고시 / ECE R134','HE-700.png'],
  ['ep-70pq','EP-70PQ','EP','1 1/2"-12UNF','9/16"-18UNF','70.0 MPa / 35.0 MPa','KGS, EC79, R134','국토교통부 고시 / ECE R134','EP-70PQ.png'],
  ['ep-700pb','EP-700PB','EP','9/16"-18UNF','3/4"-20UNEF','70.0 MPa / 35.0 MPa','KGS, EC79, R134','국토교통부 고시 / ECE R134','EP-700PB.png'],
  ['drv-350','DRV-350','DRV','M18x1.5P','Quick-On-Type','35 MPa','KGS','KS B 6214 / KGS AA311','DRV-350.png'],
  ['yht-1514l','YHT-1514L','YHT','1 1/2"-12 UNF','7/16"-20 UNF','45 MPa','KGS','KS B 6214 / KGS AA311','YHT-3516L.png'],
  ['yht-3516l','YHT-3516L','YHT','M35x2.0P','9/16"-20 UN','45 MPa','KGS','KS B 6214 / KGS AA311','YHT-3516L.png'],
  ['yht-3516al','YHT-3516AL','YHT','M35x2.0P','9/16"-20 UN','45 MPa','KGS','KS B 6214 / KGS AA311','YHT-3516L.png'],
  ['yex-1100','YEX-1100','YEX','PT1/4','PT1/4','3.0 MPa','IECEx','IEC60079-0, 1, 18','YEX-1100.png'],
]

/* ---------------- LPG (20) ---------------- */
type LpgSrc = [id: string, model: string, series: string, category: string, inlet: string, outlet: string, wp: string, cert: string, std: string, img: string]
const LPG: LpgSrc[] = [
  ['ylc-2820-50','YLC-2820-50','YLC','Cylinder','W28-14th / KS B 6212, V2','W22.5-14th-LH','1.82 MPa','KGS, KS','KS B 6212, KGS AA312','YLC-2820-50.png'],
  ['ylc-2820','YLC-2820(C)','YLC','Cylinder','W28-14th / KS B 6212, V2','W22.5-14th-LH','1.82 MPa','KGS','KS B 6212, KGS AA312','YLC-2820-50.png'],
  ['ylc-2831','YLC-2831','YLC','Cylinder','W28-14th / KS B 6212, V2','W22.5-14th-LH','1.82 MPa','KGS, KS','KS B 6212, KGS AA312','YLC-2831.png'],
  ['ylc-2832','YLC-2832','YLC','Cylinder','W28-14th / KS B 6212, V2','W22.5-14th-LH','1.82 MPa','KGS, KS','KS B 6212, KGS AA312','YLC-2831.png'],
  ['ylc-2863-1','YLC-2863-1','YLC','Cylinder','W28-14th / KS B 6212, V2','W22.5-14th-LH','1.82 MPa','KGS','KS B 6212, KGS AA312','YLC-2863-1.png'],
  ['ylc-2021','YLC-2021','YLC','Cylinder','W20-14th / KS B 6214, V1','W22.5-14th-LH','1.83 MPa','KGS','KS B 6212, KGS AA312','YLC-2021.png'],
  ['lp-2010','LP-2010','LP','Cylinder','W20-14th / KS B 6214, V1','W22.5-14th-LH','1.82 MPa','KGS','KGS AA312','YLC-2021.png'],
  ['ylc-2821','YLC-2821','YLC','Cylinder','3/4-14 NGT','0.885-14NGO-LH-INT (CGA 510)','250 psi','CGA V-1','N/A','YLC-2821.png'],
  ['ylc-2821-1','YLC-2821-1','YLC','Cylinder','3/4-14 NGT','0.885-14NGO-LH-INT (CGA 510)','250 psi','CGA V-1','N/A','YLC-2821-1.png'],
  ['mt-2000','MT-2000','MT','Cylinder','3/4-14 NGT','0.885-14NGO-LH-INT (CGA 510)','250 psi','CGA V-1','N/A','MT-2000.png'],
  ['mt-4200','MT-4200','MT','Cylinder','1"-11 1/2 NGT','0.885-14NGO-LH-INT (CGA 510)','250 psi','CGA V-1','N/A','MT-4200.png'],
  ['ybc-2600','YBC-2600','YBC','Cylinder','3/4-14 NGT','Quick-ON Type','0.7 MPa','KGS','KGS AA312','YBC-2600.png'],
  ['ybc-4021','YBC-4021','YBC','Cylinder','3/4-14 NGT','Quick-ON Type','7 – 255 psi','N/A','N/A','YBC-4021.png'],
  ['opd-3000','OPD-3000','OPD','OPD','3/4-14 NGT','1312-S ACME-RH-EXT (CGA 791)','250 psi','UL','UL 2227 / CGA V-1','OPD-3000.png'],
  ['y2700','Y2700','OPD','OPD','PT1/8-25th','PT1/8-28th','N/A','UL','UL 2227','Y2700.png'],
  ['y1800','Y1800','OPD','OPD','PT1/8-25th','PT1/8-28th','N/A','N/A','UL 2227','Y2700.png'],
  ['ylg-1220','YLG-1220','YLG','Piping','PT1/2-14th','PT1/2-14th','2.35 MPa','KGS','KGS AA335','YLG-1220.png'],
  ['ylg-1420','YLG-1420','YLG','Piping','PT1/4-19th','PT1/4-19th','2.35 MPa','KGS','KGS AA335','YLG-1420.png'],
  ['ypc-0409','YPC-0409','YPC','Piping','N/A','N/A','N/A','N/A','N/A','YPC-0409.png'],
  ['ypc-2820','YPC-2820','YPC','Piping','N/A','N/A','N/A','N/A','N/A','YPC-2820.png'],
]

/* ---------------- Industrial Gas (75) ---------------- */
type IgSrc = [id: string, model: string, category: string, inlet: string, outlet: string, wp: string, cert: string, std: string, img: string]
const IG: IgSrc[] = [
  ['yoc-2820','YOC-2820','Tapered Inlet Threads','W28-14th, KS B 6214, V2','W23-14th','14.7 MPa','KGS, KS','KGS AA311, KS B 6214','YOC-2820.png'],
  ['yrc-2820','YRC-2820','Tapered Inlet Threads','W28-14th, KS B 6214, V2','W22-14th','14.7 MPa','KGS, KS','KGS AA311, KS B 6214','YOC-2820.png'],
  ['yhc-2820','YHC-2820','Tapered Inlet Threads','W28-14th, KS B 6214, V2','W22-14th-LH','14.7 MPa','KGS, KS','KGS AA311, KS B 6214','YOC-2820.png'],
  ['ycc-2820-1','YCC-2820-1','Tapered Inlet Threads','W28-14th, KS B 6214, V2','W22-14th','11.8 MPa','KGS, KS','KGS AA311, KS B 6214','YOC-2820.png'],
  ['ycc-2820-2','YCC-2820-2','Tapered Inlet Threads','W28-14th, KS B 6214, V2','W22-14th','11.8 MPa','KGS, KS','KGS AA311, KS B 6214','YOC-2820.png'],
  ['yoc-2620','YOC-2620','Tapered Inlet Threads','3/4-14 NGT-CL1','W23-14th','14.7 MPa','KGS','KGS AA311, KS B 6214','YOC-2620.png'],
  ['yrc-2620','YRC-2620','Tapered Inlet Threads','3/4-14 NGT-CL1','W22-14th','14.7 MPa','KGS','KGS AA311, KS B 6214','YOC-2620.png'],
  ['yhc-2620','YHC-2620','Tapered Inlet Threads','3/4-14 NGT-CL1','W22-14th-LH','14.7 MPa','KGS','KGS AA311, KS B 6214','YOC-2620.png'],
  ['ycc-2620-1','YCC-2620-1','Tapered Inlet Threads','3/4-14 NGT-CL1','W22-14th','11.8 MPa','KGS','KGS AA311, KS B 6214','YOC-2620.png'],
  ['ycc-2620-2','YCC-2620-2','Tapered Inlet Threads','3/4-14 NGT-CL1','W22-14th','11.8 MPa','KGS','KGS AA311, KS B 6214','YOC-2620.png'],
  ['yoc-3420','YOC-3420','Tapered Inlet Threads','1"-11 1/2 NGT','W23-14th','14.7 MPa','KGS','KGS AA311, KS B 6214','YOC-3420.png'],
  ['yoc-3420-1','YOC-3420-1','Tapered Inlet Threads','1"-11 1/2 NGT','W22-14th','11.8 MPa','KGS','KGS AA311, KS B 6214','YOC-3420.png'],
  ['ycc-3420-2','YCC-3420-2','Tapered Inlet Threads','1"-11 1/2 NGT','W22-14th','11.8 MPa','KGS','KGS AA311, KS B 6214','YOC-3420.png'],
  ['yoh-2820k21','YOH-2820K21','Tapered Inlet Threads','W28-14th, KS B 6214, V2','W23-14th','14.7 MPa','KGS, KS','KGS AA311, KS B 6214','YOH-2820K21.png'],
  ['yrh-2820k21','YRH-2820K21','Tapered Inlet Threads','W28-14th, KS B 6214, V2','W22-14th','14.7 MPa','KGS, KS','KGS AA311, KS B 6214','YOH-2820K21.png'],
  ['yhh-2820k21','YHH-2820K21','Tapered Inlet Threads','W28-14th, KS B 6214, V2','W22-14th-LH','14.7 MPa','KGS, KS','KGS AA311, KS B 6214','YOH-2820K21.png'],
  ['yoc-2820k26','YOC-2820K26','Tapered Inlet Threads','W28-14th, KS B 6214, V2','W23-14th','14.7 MPa','KGS','KGS AA311, KS B 6214','YOH-2820K21.png'],
  ['yrc-2820k26','YRC-2820K26','Tapered Inlet Threads','W28-14th, KS B 6214, V2','W22-14th','14.7 MPa','KGS','KGS AA311, KS B 6214','YOH-2820K21.png'],
  ['yhc-2820k26','YHC-2820K26','Tapered Inlet Threads','W28-14th, KS B 6214, V2','W22-14th-LH','14.7 MPa','KGS','KGS AA311, KS B 6214','YOH-2820K21.png'],
  ['yrc-2820k27','YRC-2820K27','Tapered Inlet Threads','W28-14th, KS B 6214, V2','W22-14th','14.7 MPa','KGS','KGS AA311, KS B 6214','YOH-2820K21.png'],
  ['yrh-286a','YRH-286A','Tapered Inlet Threads','W28-14th, KS B 6214, V2','W22-14th-RH','19.6 MPa','KGS','KGS AA311, KS B 6214','YOH-286A.png'],
  ['yoh-286a','YOH-286A','Tapered Inlet Threads','W28-14th, KS B 6214, V2','W23-14th','19.6 MPa','KGS','KGS AA311, KS B 6214','YOH-286A.png'],
  ['nh-3203','NH-3203','Unified Inlet Threads','3/4-14 NGT','0.825-14NGO-RH-EXT (CGA 320)','1800 – 2400 psi','N/A','CGA V-9, CGA V-1, CGA S11, ISO 10297','NH-5403.png'],
  ['nh-3503','NH-3503','Unified Inlet Threads','3/4-14 NGT','0.825-14NGO-LH-EXT (CGA 350)','1800 – 2400 psi','N/A','CGA V-9, CGA V-1, CGA S11, ISO 10297','NH-5403.png'],
  ['nh-5403','NH-5403','Unified Inlet Threads','3/4-14 NGT','0.903-14NGO-RH-EXT (CGA 540)','1800 – 2400 psi','N/A','CGA V-9, CGA V-1, CGA S11, ISO 10297','NH-5403.png'],
  ['nh-5803','NH-5803','Unified Inlet Threads','3/4-14 NGT','0.965-14NGO-RH-INT (CGA 580)','1800 – 2400 psi','N/A','CGA V-9, CGA V-1, CGA S11, ISO 10297','NH-5403.png'],
  ['nh-02bbn','NH-02BBN(III)','Unified Inlet Threads','BS 341-1"','G5/8-14th-LH (BS 341 NO.2)','25 MPa','N/A','BS 341','NH-03BBN.png'],
  ['nh-03bbn','NH-03BBN','Unified Inlet Threads','BS 341-1"','G5/8-14th (BS 341 NO.3)','20 MPa','N/A','BS 341','NH-03BBN.png'],
  ['nh-04bbn','NH-04BBN','Unified Inlet Threads','BS 341-1"','G5/8-14th-LH (BS 341 NO.4)','20 MPa','N/A','BS 341','NH-03BBN.png'],
  ['nh-08bbg6','NH-08BBG6','Unified Inlet Threads','BS 341-1"','0.860-14T.P.J-RH-EXT (BS 341 NO.8)','16.8 MPa','N/A','BS 341','NH-03BBN.png'],
  ['nh-09d25n','NH-09D25N','Unified Inlet Threads','W28.8-14th (25E)','G3/4-14th (DIN477 NO.9)','20 MPa','N/A','DIN477, EN 629-1, KS B ISO','NH-03BBN.png'],
  ['nh-02u25g9','NH-02U25G9','Unified Inlet Threads','W28.8-14th (25E)','W21.7x1/14" (UNI 11144 NO.2)','15 MPa','N/A','UNI 11144, EN 629-1, KS B ISO','NH-03BBN.png'],
  ['nh6-3205pc','NH6-3205PC','Unified Inlet Threads','1.125-12 UNF','0.825-14NGO-RH-EXT (CGA 320)','1800 – 2400 psi','N/A','CGA V-9, CGA V-1, CGA S11, ISO 10297','NH6-3205PC.png'],
  ['nh6-3207pc','NH6-3207PC','Unified Inlet Threads','0.750-16 UNF','0.825-14NGO-RH-EXT (CGA 320)','1800 – 2400 psi','N/A','CGA V-9, CGA V-1, CGA S11, ISO 10297','NH6-3205PC.png'],
  ['nh6-3265pcd','NH6-3265PCD','Unified Inlet Threads','1.125-12 UNF','0.825-14NGO-RH-EXT (CGA 326)','12.4 MPa (1800 psi)','KGS','CGA V-1, KGS, AA311','NH6-3205PC.png'],
  ['nh6-5405pc','NH6-5405PC','Unified Inlet Threads','1.125-12 UNF','0.903-14NGO-RH-EXT (CGA 540)','1800 – 2400 psi','N/A','CGA V-9, CGA V-1, CGA S11, ISO 10297','NH6-5405PC.png'],
  ['nh6-5805pc','NH6-5805PC','Unified Inlet Threads','1.125-12 UNF','0.965-14NGO-RH-INT (CGA 580)','1800 – 2400 psi','N/A','CGA V-9, CGA V-1, CGA S11, ISO 10297','NH6-5405PC.png'],
  ['nh6-02u5d1','NH6-02U5D1','Unified Inlet Threads','1.125-12 UNF','W21.7x1/14" (UNI 11144 NO.2)','12.3 MPa','N/A','UNI 11144, CGA, CGA S-1','NH6-3205PC.png'],
  ['nh6-06d51','NH6-06D51','Unified Inlet Threads','1.125-12 UNF','N/A','1800 psi','N/A','DIN47, CGA, CGA S-1, CGA V-1','NH6-3205PC.png'],
  ['nh6-09d5n','NH6-09D5N','Unified Inlet Threads','1.125-12 UNF','G3/4-14th (DIN NO.9)','20 MPa','N/A','DIN477, CGA, CGA S-1, CGA V-1','NH6-3205PC.png'],
  ['ykc-2820','YKC-2820','Unified Inlet Threads','1 1/8-12 UNF','W22-14th','11.8 MPa','KS, KGS','KGS AA311, KS B 6214','YKC-2820.png'],
  ['rp1-0325bn','RP1-0325BN','Non Return Valves','W28.8-14th (DIN477, BS341, 25E)','G5/8-14th (BS 341 NO.3)','20 MPa','N/A','ISO 15996, ISO 10297, BS 341','RP1-5803G11-A.png'],
  ['rp1-3203g6','RP1-3203G6','Non Return Valves','3/4-14 NGT','0.825-14NGO-RH-EXT (CGA 320)','2175 psi','N/A','ISO 15996, ISO 10297, CGA V-1','RP1-5803G11-A.png'],
  ['rp1-5803g11-a','RP1-5803G11-A','Non Return Valves','3/4-14 NGT','0.965-14NGO-RH-INT (CGA 580)','15 MPa','N/A','ISO 15996, ISO 10297, CGA V-1','RP1-5803G11-A.png'],
  ['hr-010102','HR 010102','Non Return Valves','W28-14th (KS B 6214, V2)','W22-14th','11.76 MPa','KGS','ISO 15996, KGS AA311','RP1-5803G11-A.png'],
  ['hr-020102','HR 020102','Non Return Valves','W28-14th (KS B 6214, V2)','W22-14th','14.7 MPa','KGS','ISO 15996, KS B 6214, KGS AA311','RP1-5803G11-A.png'],
  ['hr-020202','HR 020202','Non Return Valves','W28-14th (KS B 6214, V2)','W22-14th-LH','14.7 MPa','KGS','ISO 15996, KS B 6214, KGS AA311','RP1-5803G11-A.png'],
  ['hr-020302','HR 020302','Non Return Valves','W28-14th (KS B 6214, V2)','W23-14th','14.7 MPa','KGS','ISO 15996, KS B 6214, KGS AA311','RP1-5803G11-A.png'],
  ['yac-5238gn','YAC-5238GN','Acetylene','3/8-18 NGT','0.895-18NGO-RH-EXT (CGA 520)','500 psi','N/A','CGA V-9, CGA V-1, CGA S11, ISO 10297','YAC-5238GN.png'],
  ['yac-5238ghn','YAC-5238GHN','Acetylene','3/8-18 NGT','0.895-18NGO-RH-EXT (CGA 520)','500 psi','N/A','CGA V-9, CGA V-1, CGA S11, ISO 10297','YAC-5238GN.png'],
  ['yac-2038gn','YAC-2038GN','Acetylene','3/8-18 NGT','0.625-20NGO-RH-EXT (CGA 200)','500 psi','N/A','CGA V-9, CGA V-1, CGA S11, ISO 10297','YAC-2038GN.png'],
  ['yac-2038ghn','YAC-2038GHN','Acetylene','3/8-18 NGT','0.625-20NGO-RH-EXT (CGA 200)','500 psi','N/A','CGA V-9, CGA V-1, CGA S11, ISO 10297','YAC-2038GN.png'],
  ['yac-2620','YAC-2620','Acetylene','3/4-14 NGT','0.885-14NGO-LH-INT (CGA 510)','420 psi','N/A','CGA V-9, CGA V-1, CGA S11, ISO 10297','YAC-2620.png'],
  ['yac-3420','YAC-3420','Acetylene','1"-11 1/2 NGT','0.885-14NGO-LH-INT (CGA 510)','2.9 MPa','N/A','CGA V-9, CGA V-1, CGA S11, ISO 10297','YAC-3420.png'],
  ['yac-3920','YAC-3920','Acetylene','W39-12m','W22.5-14-LH','2.9 MPa','N/A','KS B 6215, KS B 6214','YAC-3920.png'],
  ['ycl-2630','YCL-2630','Chlorine / Ammonia','W28-14th, KS B 6214, V3','W26-14th','1.53 MPa','KGS','KGS AA311, KS B 6214','YCL-2630(B).png'],
  ['ycl-2630b','YCL-2630(B)','Chlorine / Ammonia','W28-14th, KS B 6214, V3','W26-14th','1.3 MPa','KGS','KGS AA311, KS B 6214','YCL-2630(B).png'],
  ['ycl-2631a','YCL-2631(A)','Chlorine / Ammonia','3/4-14 NGT(CL1)','1030-14NGO-RH-EXT (CGA 820)','500 psi','N/A','CGA V-9, CGA V-1, Pamphlet#17','YCL-2631(A).png'],
  ['ycl-2631b','YCL-2631(B)','Chlorine / Ammonia','3/4-14 NGT(CL1)','1030-14NGO-RH-EXT (CGA 820)','500 psi','N/A','CGA V-9, CGA V-1, Pamphlet#17','YCL-2631(B).png'],
  ['ymc-2820','YMC-2820','Chlorine / Ammonia','W28-14th, KS B 6214, V3','W22-14th','1.76 MPa','KGS','KGS AA311, KS B 6214','YMC-2820.png'],
  ['yhc-2210','YHC-2210','Tube Trailers','W39-12th','W22-14"-LH','19.7 MPa','KGS','KGS AA311, KS B 6214','YHC-2210.png'],
  ['yht-3950nk','YHT-3950NK','Tube Trailers','W39-12th','W22-14"-LH','19.7 MPa','KGS','KGS AA311, KS B 6214','YHT-3950.png'],
  ['yht-3950nk1','YHT-3950NK1','Tube Trailers','W39-12th','W22-14"-LH','25 MPa','KGS','KGS AA311, KS B 6214','YHT-3950.png'],
  ['yht-3950nk2','YHT-3950NK2','Tube Trailers','W39-12th','W22-14"-LH','18 MPa','KGS','KGS AA311, KS B 6214','YHT-3950.png'],
  ['yht-3950nk3','YHT-3950NK3','Tube Trailers','W39-12th','W22-14"-LH','20 MPa','KGS','KGS AA311, KS B 6214','YHT-3950.png'],
  ['yht-3950nk4','YHT-3950NK4','Tube Trailers','W39-12th','W22-14"-LH','20 MPa','KGS','KGS AA311, KS B 6214','YHT-3950.png'],
  ['yht-3952','YHT-3952','Tube Trailers','W39-12th','W22-14"-LH','18 MPa','KGS','KGS AA311, KS B 6214','YHT-3950.png'],
  ['yht-3953','YHT-3953','Tube Trailers','W39-12th','W22-14"-LH','17.2 MPa','KGS','KGS AA311, KS B 6214','YHT-3950.png'],
  ['yhet-3950nk','YHET-3950NK','Tube Trailers','W39-12th','W22-14th','19.7 MPa','KGS','KGS AA311, KS B 6214','YHT-3950.png'],
  ['yhet-3951','YHET-3951','Tube Trailers','W39-12th','W22-14th','19.7 MPa','KGS','KGS AA311, KS B 6214','YHT-3950.png'],
  ['yhet-3951k6','YHET-3951K6','Tube Trailers','W39-12th','W22-14th','18 MPa','KGS','KGS AA311, KS B 6214','YHT-3950.png'],
  ['yhv-28j','YHV-28J','Tube Trailers','3/4-14 NGT','3/4-14 NGT','3625 psi','N/A','N/A','YHT-3950.png'],
  ['yxg-2220','YXG-2220','Piping Connection','W22-14th','W22-34th','14.7 MPa','N/A','KS B 6214','YXG-2220.png'],
  ['yxg-2221','YXG-2221','Piping Connection','W22-14th','W22-34th','14.7 MPa','N/A','KS B 6214','YXG-2220.png'],
  ['yxg-2620','YXG-2620','Piping Connection','PF 3/4-14th','PF 3/4-14th','19.6 MPa','N/A','N/A','YXG-2620.png'],
]

export const GAS_VALVE_DATA: GasValve[] = [
  ...H2.map(([id, model, series, inlet, outlet, wp, cert, std, img]): GasValve => ({
    id, model, brand: 'Youngdo', gasType: 'Hydrogen', category: 'Cylinder Valve', series,
    inletThreads: inlet, outletThreads: outlet, workingPressure: wp, certification: cert, standard: std, image: IMG(img),
  })),
  ...LPG.map(([id, model, series, category, inlet, outlet, wp, cert, std, img]): GasValve => ({
    id, model, brand: 'Youngdo', gasType: 'LPG', category, series,
    inletThreads: inlet, outletThreads: outlet, workingPressure: wp, certification: cert, standard: std, image: IMG(img),
  })),
  ...IG.map(([id, model, category, inlet, outlet, wp, cert, std, img]): GasValve => ({
    id, model, brand: 'Youngdo', gasType: 'Industrial Gas', category, series: '',
    inletThreads: inlet, outletThreads: outlet, workingPressure: wp, certification: cert, standard: std, image: IMG(img),
  })),
]

export const GAS_VALVE_DESCRIPTION = {
  title: 'Youngdo Gas & Cylinder Valves',
  description:
    'Youngdo gas and cylinder valves in one place — hydrogen cylinder valves to 70 MPa, LPG cylinder / OPD / piping valves, and industrial gas cylinder valves across tapered, unified, non-return, acetylene, chlorine/ammonia, tube trailer and piping connection categories. Filter by gas type, category, series and certification. Certification varies by model — see the table.',
  specs: ['Youngdo', 'Hydrogen · LPG · Industrial Gas', 'up to 70 MPa', 'KGS · KS · EC79 · R134 · CGA V-1 (by model)', `${GAS_VALVE_DATA.length} Models`],
}
