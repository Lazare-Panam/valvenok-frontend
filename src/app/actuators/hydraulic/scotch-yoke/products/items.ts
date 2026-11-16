// HRS models, shared by the model list and the per-model product pages: one row
// per HRSDA size and one per HRSSA size (its spring options are on its page).
// Every figure is from the hydraulic data sheet; see ../hrsData.
import type { Item } from '@/src/app/pneumatic/actuators/_series/modelTypes'
import { HRS_DA, HRS_SR, HRS_COMMON, HRS_MATERIALS, HRS_IMAGE, PRESSURES, PSI, type SRE } from '../hrsData'

const nm = (n: number) => n.toLocaleString('en-GB')
const sre = (t: SRE) => (t ? t.map(nm).join(' / ') : 'Not listed')
const DA_SERIES = 'HRSDA double acting'
const SR_SERIES = 'HRSSA spring return'
const COMMON = HRS_COMMON.filter(([k]) => k !== 'Electro-hydraulic')
const materials = HRS_MATERIALS.map(([k, v]) => [`Material: ${k.toLowerCase()}`, v] as [string, string])

const rfqBase = { brand: 'Susin', category: 'Hydraulic Actuators', categoryId: 'hydraulic-actuators', subCategory: 'Scotch Yoke', thumbnail: HRS_IMAGE }

const DA: Item[] = HRS_DA.map((m, i) => {
  const t = m.torque
  const max = t[160][1]
  return {
    id: m.model,
    model: m.model,
    sub: `Double acting · also ${m.electro}`,
    image: HRS_IMAGE,
    cells: [
      { text: 'Double acting', pill: 'grey' },
      m.body,
      { text: `Up to ${nm(max)} Nm`, pill: 'green' },
      `${nm(t[100][0])} / ${nm(t[100][1])} Nm`,
      `${nm(t[160][0])} / ${nm(t[160][1])} Nm`,
    ],
    facets: { kind: 'Double acting', body: m.body, series: DA_SERIES },
    sort: { model: i, torque: max },
    search: `${m.model} ${m.electro} ${m.body} ${m.cyl} double acting hydraulic scotch yoke ${t[100][0]} ${t[160][1]} Nm`,
    brief: [
      ['Open / close at 100 bar', `${nm(t[100][0])} / ${nm(t[100][1])} Nm`],
      ['Open / close at 130 bar', `${nm(t[130][0])} / ${nm(t[130][1])} Nm`],
      ['Open / close at 160 bar', `${nm(t[160][0])} / ${nm(t[160][1])} Nm`],
    ],
    specs: [
      ['Type', 'Double acting: oil opens and closes'],
      ['Torque at 160 bar, open / close', `${nm(t[160][0])} / ${nm(t[160][1])} Nm`],
      ['Torque at 130 bar, open / close', `${nm(t[130][0])} / ${nm(t[130][1])} Nm`],
      ['Torque at 100 bar, open / close', `${nm(t[100][0])} / ${nm(t[100][1])} Nm`],
      ['Body size', m.body],
      ['Electro-hydraulic version', m.electro],
      ...COMMON,
      ...materials,
    ],
    table: {
      title: 'Torque output',
      head: ['Pressure', 'Open, Nm', 'Close, Nm', 'Open, lb·in', 'Close, lb·in'],
      rows: PRESSURES.map((p) => [`${p} bar (${PSI[p]})`, nm(t[p][0]), nm(t[p][1]), nm(t[p][2]), nm(t[p][3])]),
    },
    note: 'Torque from Susin I-Tork’s double acting table. Send us the valve torque, the supply pressure and the ISO 5211 flange and we’ll confirm the size.',
    rfq: {
      ...rfqBase,
      id: `hrs-${m.model.toLowerCase()}`,
      name: `${m.model} hydraulic scotch yoke actuator`,
      description: `${m.model} (${m.electro}) double acting hydraulic scotch yoke actuator, up to ${nm(max)} Nm at 160 bar.`,
      keySpecs: [
        { label: 'Type', value: 'Double acting' },
        { label: 'At 100 bar', value: `${nm(t[100][0])} / ${nm(t[100][1])} Nm` },
        { label: 'At 160 bar', value: `${nm(t[160][0])} / ${nm(t[160][1])} Nm` },
        { label: 'Pressure', value: 'Up to 200 bar' },
      ],
      variantInfo: { count: 1, sizeRange: m.model },
    },
  }
})

// One model per spring option. Where a size lists the same spring code twice,
// the spring start torque tells them apart (as in the data sheet).
const SR: Item[] = HRS_SR.map((o, i) => {
  const dup = HRS_SR.filter((x) => x.model === o.model && x.spring === o.spring).length > 1
  const model = `${o.model} ${o.spring}${dup ? ` (${nm(o.springT[0])} Nm)` : ''}`
  const slug = `${o.model}-${o.spring}${dup ? `-${o.springT[0]}` : ''}`
  const oil = (p: 100 | 130 | 160) => (o.oil[p] ? `${sre(o.oil[p])} Nm` : 'Not listed')
  return {
    id: slug,
    model,
    slug,
    sub: `Spring return · spring ${o.spring} · also ${o.electro} ${o.spring}`,
    image: HRS_IMAGE,
    cells: [
      { text: 'Spring return', pill: 'grey' },
      o.body,
      { text: `${nm(o.springT[0])} Nm`, pill: 'green' },
      oil(100),
      oil(160),
    ],
    facets: { kind: 'Spring return', body: o.body, series: SR_SERIES },
    sort: { model: 100 + i, torque: o.springT[0] },
    search: `${model} ${o.model} ${o.electro} ${o.spring} ${o.body} ${o.cyl} spring return fail close fail open hydraulic scotch yoke ${o.springT[0]} Nm`,
    brief: [
      ['Spring torque, start / run / end', `${sre(o.springT)} Nm`],
      ['Oil torque at 100 bar', oil(100)],
      ['Oil torque at 160 bar', oil(160)],
    ],
    specs: [
      ['Type', 'Spring return: oil strokes it, the spring returns it (fail close or fail open)'],
      ['Spring torque, start / run / end', `${sre(o.springT)} Nm`],
      ['Oil torque at 160 bar', oil(160)],
      ['Oil torque at 130 bar', oil(130)],
      ['Oil torque at 100 bar', oil(100)],
      ['Spring code', o.spring],
      ['Actuator size', o.model],
      ['Body size', o.body],
      ['Electro-hydraulic version', o.electro],
      ...COMMON,
      ...materials,
    ],
    table: {
      title: 'Torque output, Nm',
      head: ['Torque', 'Start', 'Run', 'End'],
      rows: [
        ['Spring', ...o.springT.map(nm)],
        ...PRESSURES.map((p) => [`Oil at ${p} bar (${PSI[p]})`, ...(o.oil[p] ? o.oil[p]!.map(nm) : ['Not listed', 'Not listed', 'Not listed'])]),
      ],
    },
    note: 'Torque from Susin I-Tork’s spring return table; “Not listed” means the data sheet gives no oil torque for this spring at that pressure. Fail close: the spring torque is the closing torque and the oil torque the opening torque. Fail open: the other way round. Send us the valve torques and supply pressure and we’ll confirm the spring.',
    rfq: {
      ...rfqBase,
      id: `hrs-${slug.toLowerCase()}`,
      name: `${model} spring return hydraulic scotch yoke actuator`,
      description: `${model} (${o.electro}) spring return hydraulic scotch yoke actuator, spring torque ${sre(o.springT)} Nm (start / run / end).`,
      keySpecs: [
        { label: 'Type', value: 'Spring return' },
        { label: 'Spring start', value: `${nm(o.springT[0])} Nm` },
        { label: 'Spring', value: o.spring },
        { label: 'Pressure', value: 'Up to 200 bar' },
      ],
      variantInfo: { count: 1, sizeRange: model },
    },
  }
})

export const HRS_PRODUCTS = '/actuators/hydraulic/scotch-yoke/products'
export const ITEMS: Item[] = [...DA, ...SR].map((i) => {
  const slug = i.slug ?? i.model
  return { ...i, tag: 'Hydraulic scotch yoke', slug, href: `${HRS_PRODUCTS}/${slug}` }
})
