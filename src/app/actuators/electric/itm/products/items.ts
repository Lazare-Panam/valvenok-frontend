// ITM models, shared by the model list and the per-model product pages.
// Every figure is from the Susin I-Tork ITM catalogue; see ../itmData.
import type { Item } from '@/src/app/pneumatic/actuators/_series/modelTypes'
import { ITM_MODELS, ITM_COMMON, ITM_IMAGE, ITM_SPEEDS, ITM_STANDARD_SPEEDS } from '../itmData'

const nm = (n: number) => n.toLocaleString('en-GB')
const motors = (m: (typeof ITM_MODELS)[number]) => m.motors.map((x) => `${x.kw} kW`).join(' · ')

const RAW_ITEMS: Item[] = ITM_MODELS.map((m, i) => ({
  id: m.model,
  model: m.model,
  sub: `${m.body} · ${m.flange}`,
  image: ITM_IMAGE,
  cells: [
    { text: `${nm(m.torqueNm)} Nm`, pill: 'green' },
    `${nm(m.thrustKn)} kN`,
    `Ø ${m.stemKey} / ${m.stemThread} mm`,
    m.flange,
    `${m.weightKg} kg`,
  ],
  facets: { model: m.model, body: m.body, mount: m.flange },
  sort: { model: i, torque: m.torqueNm, thrust: m.thrustKn },
  search: `${m.model} ${m.model.replace(' ', '')} ${m.torqueNm} Nm ${m.flange} ISO 5210 multi-turn gate globe`,
  brief: [
    ['Motors', motors(m)],
    ['Stem screw', m.stemScrew],
    ['Terminal', m.terminal],
  ],
  specs: [
    ['Max torque', `${nm(m.torqueNm)} Nm (${m.torqueKgfm} kgf·m)`],
    ['Allowable thrust', `${nm(m.thrustKn)} kN (${m.thrustTon} t)`],
    ['Max stem, key / threaded', `Ø ${m.stemKey} / ${m.stemThread} mm`],
    ['Stem screw', m.stemScrew],
    ['ISO 5210 flange', m.flange],
    ['Weight', `${m.weightKg} kg`],
    ['Handwheel', m.body],
    ['Output speeds, 50 / 60 Hz', `${ITM_SPEEDS.join(', ')} rpm`],
    ['Motors', motors(m)],
    ['Terminal', m.terminal],
    ['Cable entries', m.cableEntries],
    ...ITM_COMMON,
  ],
  table: {
    title: 'Torque by output speed and motor',
    head: ['Speed, rpm 50 / 60 Hz', ...m.motors.map((x) => `${x.kw} kW motor, Nm`)],
    rows: ITM_SPEEDS.map((s, k) => [
      ITM_STANDARD_SPEEDS.includes(s) ? `${s} (standard)` : s,
      ...m.motors.map((x) => `${nm(x.torque[k][0])} / ${nm(x.torque[k][1])}`),
    ]),
  },
  note: 'Max torque at each output speed and motor, at 50 / 60 Hz, from Susin I-Tork’s speed torque table. Tell us the valve torque, thrust, stem and closing time and we’ll pick the speed and motor.',
  rfq: {
    id: `itm-${m.model.replace(' ', '').toLowerCase()}`,
    name: `${m.model} multi-turn electric actuator`,
    brand: 'Susin',
    category: 'Electric Actuators',
    categoryId: 'electric-actuators',
    subCategory: 'ITM Series',
    thumbnail: ITM_IMAGE,
    description: `${m.model} multi-turn electric actuator, up to ${nm(m.torqueNm)} Nm and ${nm(m.thrustKn)} kN thrust, ISO 5210 ${m.flange}, IP68.`,
    keySpecs: [
      { label: 'Torque', value: `${nm(m.torqueNm)} Nm` },
      { label: 'Thrust', value: `${nm(m.thrustKn)} kN` },
      { label: 'Flange', value: `ISO 5210 ${m.flange}` },
      { label: 'Max stem', value: `Ø ${m.stemKey} / ${m.stemThread} mm` },
    ],
    variantInfo: { count: 1, sizeRange: m.model },
  },
}))

// One product page per model: /actuators/electric/itm/products/<slug>
export const ITM_PRODUCTS = '/actuators/electric/itm/products'
export const ITEMS: Item[] = RAW_ITEMS.map((i) => {
  const slug = i.model.replace(/\s+/g, '')
  return { ...i, tag: 'Multi-turn electric', slug, href: `${ITM_PRODUCTS}/${slug}` }
})
