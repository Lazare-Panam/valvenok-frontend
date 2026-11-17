// MPLDS models (MPLD double acting, MPLS spring return), shared by the model list
// and the per-model product pages. Figures from Susin I-Tork's MPLD and MPLS pages
// on susingroup.com; see ../mpldsData.
import type { Item } from '../../_series/modelTypes'
import { MPLDS_SIZES, MPLDS_BARS, MPLDS_IMAGE } from '../mpldsData'

const kn = (v: number) => v.toLocaleString('en-GB', { minimumFractionDigits: 1 })
const SOURCE = 'https://www.susingroup.com/products/mplds-linear'
const COMMON: [string, string][] = [
  ['Air port', '¼" NPT'],
  ['Protection', 'IP66'],
  ['Body', 'Hard anodised aluminium (25–30 µm), epoxy-coated end caps'],
  ['Temperature', '−20 to +80 °C standard; high −10 to +140 °C, low −45 °C and extreme low −55 °C builds'],
  ['Corrosion options', 'Fully PU-coated (C5), marine grade with AISI 316 fasteners, PTFE-coated, electroless nickel plated, or fully stainless steel AISI 316'],
  ['Controls', 'Positioner and solenoid ready'],
]

const mpld: Item[] = MPLDS_SIZES.map((s, i) => {
  const model = `MPLD-${s.bore}`
  const lo = Math.min(...s.thrust[0]), hi = s.thrust[5][0]
  return {
    id: model, model, sub: `${s.bore} mm bore · double acting`, image: MPLDS_IMAGE,
    cells: [{ text: 'Double acting', pill: 'grey' }, { text: `${kn(lo)} – ${kn(hi)} kN`, pill: 'green' }, 'Ask us', `${s.bore} mm`, `${s.rod} mm`],
    facets: { type: 'MPLD double acting', bore: `${s.bore} mm` },
    sort: { model: i * 2, thrust: hi, bore: s.bore },
    search: `${model} MPLD MPLDS ${s.bore} double acting linear micro`,
    brief: [['Thrust, close at 2.8 – 7 bar', `${kn(s.thrust[0][0])} – ${kn(hi)} kN`], ['Bore / rod', `${s.bore} / ${s.rod} mm`]],
    specs: [
      ['Model', model], ['Action', 'Double acting: air drives the stem both ways'], ['Bore', `${s.bore} mm`], ['Piston rod', `${s.rod} mm`],
      ['Thrust, close', `${kn(s.thrust[0][0])} – ${kn(s.thrust[5][0])} kN (2.8 – 7 bar)`], ['Thrust, open', `${kn(s.thrust[0][1])} – ${kn(s.thrust[5][1])} kN (2.8 – 7 bar)`],
      ...COMMON,
    ],
    table: { title: 'Thrust by air pressure (kN)', head: ['Direction', ...MPLDS_BARS.map((b) => `${b} bar`)], rows: [['Close', ...s.thrust.map(([c]) => kn(c))], ['Open', ...s.thrust.map(([, o]) => kn(o))]] },
    note: 'Thrust from Susin I-Tork’s MPLD data sheet. Include appropriate safety factors when sizing; tell us the valve thrust, stroke and air supply and we’ll confirm the size.',
    rfq: { id: model, name: `MPLDS Series ${model} double acting linear actuator`, brand: 'Susin', category: 'Pneumatic Actuators', categoryId: 'pneumatic-actuators', subCategory: 'MPLDS Series', thumbnail: MPLDS_IMAGE, description: `Susin I-Tork ${model} micro double acting linear actuator, ${s.bore} mm bore, ${kn(lo)}–${kn(hi)} kN at 2.8–7 bar.`, keySpecs: [{ label: 'Model', value: model }, { label: 'Bore / rod', value: `${s.bore} / ${s.rod} mm` }, { label: 'Thrust', value: `${kn(lo)} – ${kn(hi)} kN` }], variantInfo: { count: 1, sizeRange: `${s.bore} mm bore` } },
  }
})

const mpls: Item[] = MPLDS_SIZES.map((s, i) => {
  const model = `MPLS-${s.bore}`
  const st = `${s.mplsStroke[0]} – ${s.mplsStroke[1]} mm`
  const d = s.mplsDims
  return {
    id: model, model, sub: `${s.bore} mm bore · spring return`, image: MPLDS_IMAGE,
    cells: [{ text: 'Spring return', pill: 'grey' }, 'By spring set', { text: st, pill: 'green' }, `${s.bore} mm`, `${s.rod} mm`],
    facets: { type: 'MPLS spring return', bore: `${s.bore} mm` },
    sort: { model: i * 2 + 1, thrust: 0, bore: s.bore },
    search: `${model} MPLS MPLDS ${s.bore} spring return single acting fail safe linear micro`,
    brief: [['Stroke', st], ['Dimensions A / B / D / E', `${d.A} / ${d.B} / ${d.D} / ${d.E} mm`]],
    specs: [
      ['Model', model], ['Action', 'Spring return (single acting): air one way, springs the other'], ['Bore', `${s.bore} mm`], ['Stroke', st],
      ['Dimensions A × B', `${d.A} × ${d.B} mm`], ['Dimensions C / D / E', `${d.C} / ${d.D} / ${d.E} mm`],
      ...COMMON,
    ],
    table: { title: 'Dimensions (mm)', head: ['Stroke', 'A', 'B', 'C', 'D', 'E', 'Port'], rows: [[st, String(d.A), String(d.B), String(d.C), String(d.D), String(d.E), '¼" NPT']] },
    note: 'Stroke and dimensions from Susin I-Tork’s MPLS table (letters as on Susin I-Tork’s drawing). Spring thrust depends on the spring set chosen: tell us the valve thrust, stroke, air supply and fail position and we’ll confirm the build.',
    rfq: { id: model, name: `MPLDS Series ${model} spring return linear actuator`, brand: 'Susin', category: 'Pneumatic Actuators', categoryId: 'pneumatic-actuators', subCategory: 'MPLDS Series', thumbnail: MPLDS_IMAGE, description: `Susin I-Tork ${model} micro spring return linear actuator, ${s.bore} mm bore, ${st} stroke.`, keySpecs: [{ label: 'Model', value: model }, { label: 'Bore', value: `${s.bore} mm` }, { label: 'Stroke', value: st }], variantInfo: { count: 1, sizeRange: `${s.bore} mm bore` } },
  }
})

export const MPLDS_SOURCE = SOURCE
export const MPLDS_PRODUCTS = '/pneumatic/actuators/mplds/products'
export const ITEMS: Item[] = [...mpld, ...mpls].sort((a, b) => (a.sort.model as number) - (b.sort.model as number)).map((i) => ({ ...i, tag: i.facets.type.startsWith('MPLD') ? 'Linear · double acting' : 'Linear · spring return', slug: i.model, href: `${MPLDS_PRODUCTS}/${i.model}` }))
