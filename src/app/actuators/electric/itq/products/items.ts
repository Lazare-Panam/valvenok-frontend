// ITQ models, shared by the model list and the per-model product pages.
// Every figure is from the Susin I-Tork ITQ catalogue (technical information
// and standard specification, p.6); see ../itqData.
import type { Item } from '@/src/app/pneumatic/actuators/_series/modelTypes'
import { ITQ_MODELS, ITQ_IMAGE, type ITQModel } from '../itqData'

const nm = (n: number) => n.toLocaleString('en-GB')
const amps = (a: [number, number]) => `${a[0]} / ${a[1]} A`

// Models that share a body (same operating time, bore, flange and weight)
export const ITQ_BODIES: string[][] = [
  ['ITQ 0100'], ['ITQ 0160', 'ITQ 0240'], ['ITQ 0350', 'ITQ 0500'],
  ['ITQ 0800', 'ITQ 1100'], ['ITQ 2000', 'ITQ 3000'], ['ITQ 6000', 'ITQ 9000'],
]
export const bodyOf = (model: string) => {
  const b = ITQ_BODIES.find((x) => x.includes(model))!
  return b.map((x) => x.replace('ITQ ', '')).join(' / ')
}
const flanges = (m: ITQModel) => m.mounting.replace('ISO 5211 ', '')

const RAW_ITEMS: Item[] = ITQ_MODELS.map((m, i) => ({
  id: m.model,
  model: m.model,
  sub: `${nm(m.torqueNm)} Nm · ${flanges(m)}`,
  image: ITQ_IMAGE,
  cells: [
    { text: `${nm(m.torqueNm)} Nm`, pill: 'green' },
    `${m.time50} s / ${m.time60} s`,
    flanges(m),
    `${m.weightKg} kg`,
  ],
  facets: { body: bodyOf(m.model), mount: flanges(m), dc: m.a24v ? '24 VDC available' : 'AC only' },
  sort: { model: i, torque: m.torqueNm, time: m.time50 },
  search: `${m.model} ${m.model.replace(' ', '')} ${m.torqueNm} Nm ${m.mounting} quarter-turn electric`,
  brief: [
    ['Max bore, key / square', `${m.boreKey} / ${m.boreSquare} mm`],
    ['Duty cycle, modulating', `S4, ${m.dutyS4}%`],
    ['Handwheel turns', `${m.handwheelTurns}`],
    ['24 VDC', m.a24v ? 'Available' : 'Not available'],
  ],
  specs: [
    ['Rated torque', `${nm(m.torqueNm)} Nm`],
    ['Operating time, 50 / 60 Hz', `${m.time50} s / ${m.time60} s`],
    ['ISO 5211 flange', flanges(m)],
    ['Weight', `${m.weightKg} kg`],
    ['Duty cycle (modulating)', `S4, ${m.dutyS4}%`],
    ['Duty cycle (on-off)', 'S2, 10–30 min'],
    ['Operating time, 24 VDC (no load)', m.time24dc ? `${m.time24dc} s` : 'Not available'],
    ['Max bore, keyed', `${m.boreKey} mm`],
    ['Max bore, square', `${m.boreSquare} mm`],
    ['Handwheel turns (0–90°)', `${m.handwheelTurns}`],
    ['Enclosure', 'IP67, NEMA 4, 4X & 6 (IP68 option)'],
    ['Ambient temperature', '−20 to +70 °C (−10 to +60 °C with control options)'],
    ['Travel angle', '90° ± 5°'],
    ['Motor', 'Squirrel cage induction, class F insulation, thermal protection'],
  ],
  table: {
    title: 'Rated current by power supply',
    head: ['Power supply', 'Rated current, 50 Hz', 'Rated current, 60 Hz'],
    rows: [
      ['1 phase, 110 V', `${m.a1ph110[0]} A`, `${m.a1ph110[1]} A`],
      ['1 phase, 220 V', `${m.a1ph220[0]} A`, `${m.a1ph220[1]} A`],
      ['3 phase, 380 V', `${m.a3ph380[0]} A`, `${m.a3ph380[1]} A`],
      ['3 phase, 440 V', `${m.a3ph440[0]} A`, `${m.a3ph440[1]} A`],
      ...(m.a24v ? [['24 V AC / DC', `${m.a24v} A`, `${m.a24v} A`]] : []),
    ],
  },
  note: m.model === 'ITQ 0100'
    ? 'Two limit switches for each end of travel. Torque switches are not fitted on ITQ 0100. Tell us the valve torque, supply and control signal and we’ll confirm the model and options.'
    : 'Two limit switches and one torque switch for each end of travel, self-locking double worm gearing and a declutchable handwheel. Tell us the valve torque, supply and control signal and we’ll confirm the model and options.',
  rfq: {
    id: `itq-${m.model.replace(' ', '').toLowerCase()}`,
    name: `${m.model} quarter-turn electric actuator`,
    brand: 'Susin',
    category: 'Electric Actuators',
    categoryId: 'electric-actuators',
    subCategory: 'ITQ Series',
    thumbnail: ITQ_IMAGE,
    description: `${m.model} quarter-turn electric actuator, ${nm(m.torqueNm)} Nm, ${m.time50} s at 50 Hz, ISO 5211 ${flanges(m)}, IP67.`,
    keySpecs: [
      { label: 'Torque', value: `${nm(m.torqueNm)} Nm` },
      { label: 'Operating time', value: `${m.time50} s (50 Hz)` },
      { label: 'Mounting', value: `ISO 5211 ${flanges(m)}` },
      { label: 'Current, 3 ph 380 V', value: amps(m.a3ph380) },
    ],
    variantInfo: { count: 1, sizeRange: m.model },
  },
}))

// One product page per model: /actuators/electric/itq/products/<slug>
export const ITQ_PRODUCTS = '/actuators/electric/itq/products'
export const ITEMS: Item[] = RAW_ITEMS.map((i) => {
  const slug = i.model.replace(/\s+/g, '')
  return { ...i, tag: 'Quarter-turn electric', slug, href: `${ITQ_PRODUCTS}/${slug}` }
})
