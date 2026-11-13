// ITQ Micro models, shared by the model list and the per-model product pages.
// Every figure is from the Susin I-Tork ITQ Micro (economic style) catalogue;
// see ../itqMicroData.
import type { Item } from '@/src/app/pneumatic/actuators/_series/modelTypes'
import { ITQM_MODELS, type ITQMicroModel } from '../itqMicroData'

const flanges = (m: ITQMicroModel) => m.mounting.replace('ISO 5211 ', '')
const spec = (m: ITQMicroModel, ...labels: string[]) => m.specs.find((s) => labels.includes(s.label))?.value
// "16 s (50 Hz) / 13 s (60 Hz) / 7 s (24 VDC)" → "16 s / 13 s"; ITQ 0020 runs 11 s on every supply
const acTime = (m: ITQMicroModel) => {
  const t = m.speed.match(/(\d+) s \(50 Hz\) \/ (\d+) s \(60 Hz\)/)
  return t ? `${t[1]} s / ${t[2]} s` : m.speed.replace(/ \(.*\)$/, '')
}
const weight = (m: ITQMicroModel) => (m.weightKg ? `${m.weightKg} kg` : 'Not listed')

const RAW_ITEMS: Item[] = ITQM_MODELS.map((m, i) => ({
  id: m.model,
  model: m.model,
  sub: `${m.torqueNm} Nm · ${m.enclosure}`,
  image: m.image,
  cells: [
    { text: `${m.torqueNm} Nm`, pill: 'green' },
    acTime(m),
    flanges(m),
    m.power,
  ],
  facets: { model: m.model, mount: flanges(m).includes('F03') ? 'Fits F03' : 'F05 / F07', enclosure: m.enclosure },
  sort: { model: i, torque: m.torqueNm },
  search: `${m.model} ${m.model.replace(' ', '')} ${m.torqueNm} Nm ${m.mounting} ${m.power} micro compact electric`,
  brief: [
    ['Stem adaption', spec(m, 'Stem Adaption') ?? 'Not listed'],
    ['Manual operation', spec(m, 'Manual Operation') ? (m.model === 'ITQ 0080' ? 'M6 wrench, 7 turns' : 'Lever and hex wrench, 6 turns') : 'Not fitted'],
    ['Duty cycle, on-off', spec(m, 'Duty Cycle (On/Off)', 'Duty Cycle') ?? 'Not listed'],
    ['Weight', weight(m)],
  ],
  specs: [
    ['Rated torque', `${m.torqueNm} Nm`],
    ['Operating time', m.speed],
    ['ISO 5211 mounting', flanges(m)],
    ['Power supply', m.power],
    ['Enclosure', m.enclosure],
    ['Weight', weight(m)],
    ...m.specs.map((s): [string, string] => [s.label.charAt(0) + s.label.slice(1).toLowerCase(), s.value]),
  ],
  note: m.summary,
  rfq: {
    id: `itqm-${m.model.replace(' ', '').toLowerCase()}`,
    name: `${m.model} compact electric actuator`,
    brand: 'Susin',
    category: 'Electric Actuators',
    categoryId: 'electric-actuators',
    subCategory: 'ITQ Micro Series',
    thumbnail: m.image,
    description: `${m.model} compact quarter-turn electric actuator, ${m.torqueNm} Nm, ISO 5211 ${flanges(m)}, ${m.enclosure}.`,
    keySpecs: [
      { label: 'Torque', value: `${m.torqueNm} Nm` },
      { label: 'Operating time', value: acTime(m) },
      { label: 'Mounting', value: `ISO 5211 ${flanges(m)}` },
      { label: 'Supply', value: m.power },
    ],
    variantInfo: { count: 1, sizeRange: m.model },
  },
}))

// One product page per model: /actuators/electric/itq-micro/products/<slug>
export const ITQM_PRODUCTS = '/actuators/electric/itq-micro/products'
export const ITEMS: Item[] = RAW_ITEMS.map((i) => {
  const slug = i.model.replace(/\s+/g, '')
  return { ...i, tag: 'Compact quarter-turn electric', slug, href: `${ITQM_PRODUCTS}/${slug}` }
})
