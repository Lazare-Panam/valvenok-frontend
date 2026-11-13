// IQL models, shared by the model list and the per-model product pages.
// Every figure is from the Susin I-Tork IQL catalogue; see ../iqlData.
import type { Item } from '@/src/app/pneumatic/actuators/_series/modelTypes'
import { IQL_MODELS, IQL_COMMON, IQL_IMAGE } from '../iqlData'

const pair = (a: [number, number]) => [`${a[0]} A`, `${a[1]} A`]

const RAW_ITEMS: Item[] = IQL_MODELS.map((m, i) => ({
  id: m.model,
  model: m.model,
  sub: `${m.thrustKn} kN · ${m.strokeMm} mm stroke`,
  image: IQL_IMAGE,
  cells: [
    { text: `${m.thrustKn} kN`, pill: 'green' },
    `${m.strokeMm} mm`,
    `${m.speed} mm/s`,
    `${m.weightKg} kg`,
  ],
  facets: { model: m.model, stroke: `${m.strokeMm} mm`, force: m.force === 'Not fitted' ? 'No force switch' : 'Force switches' },
  sort: { model: i, thrust: m.thrustKn },
  search: `${m.model} ${m.model.replace(' ', '')} ${m.thrustKn} kN linear globe control valve electric`,
  brief: [
    ['Modulating duty', `S4, ${m.s4}`],
    ['Force switches', m.force],
    ['Valve stem thread', m.stemThread],
  ],
  specs: [
    ['Thrust force', `${m.thrustKn} kN`],
    ['Stroke', `${m.strokeMm} mm`],
    ['Positioning speed, 50 / 60 Hz', `${m.speed} mm/s`],
    ['Weight', `${m.weightKg} kg`],
    ['Modulating duty', `S4, ${m.s4}`],
    ['Limit switches', `${m.limit} (SPDT 10 A 250 VAC)`],
    ['Force switches', m.force === 'Not fitted' ? 'Not fitted' : `${m.force} (SPDT 10 A 250 VAC)`],
    ['Valve stem thread', m.stemThread],
    ['PCD on flange', `${m.pcd} mm`],
    ['Pillar thread', m.pillar],
    ...IQL_COMMON,
  ],
  table: {
    title: 'Rated current by power supply',
    head: ['Power supply', 'Rated current, 50 Hz (or DC)', 'Rated current, 60 Hz'],
    rows: [
      ['1 phase, 110 VAC', ...pair(m.a110)],
      ['1 phase, 220 VAC', ...pair(m.a220)],
      ['3 phase, 380 VAC', ...pair(m.a380)],
      ['3 phase, 440 VAC', ...pair(m.a440)],
      ['24 VDC', `${m.aDc} A`, 'Not applicable (DC)'],
    ],
  },
  note: 'Disc springs set the closing force for tight shut-off. Tell us the valve, stroke, force, power supply and control signal and we’ll confirm the model and options.',
  rfq: {
    id: `iql-${m.model.replace(' ', '').toLowerCase()}`,
    name: `${m.model} electric linear actuator`,
    brand: 'Susin',
    category: 'Electric Actuators',
    categoryId: 'electric-actuators',
    subCategory: 'IQL Series',
    thumbnail: IQL_IMAGE,
    description: `${m.model} electric linear actuator, ${m.thrustKn} kN thrust, ${m.strokeMm} mm stroke, ${m.speed} mm/s, IP67.`,
    keySpecs: [
      { label: 'Thrust', value: `${m.thrustKn} kN` },
      { label: 'Stroke', value: `${m.strokeMm} mm` },
      { label: 'Speed', value: `${m.speed} mm/s` },
      { label: 'Weight', value: `${m.weightKg} kg` },
    ],
    variantInfo: { count: 1, sizeRange: m.model },
  },
}))

// One product page per model: /actuators/electric/iql/products/<slug>
export const IQL_PRODUCTS = '/actuators/electric/iql/products'
export const ITEMS: Item[] = RAW_ITEMS.map((i) => {
  const slug = i.model.replace(/\s+/g, '')
  return { ...i, tag: 'Linear electric', slug, href: `${IQL_PRODUCTS}/${slug}` }
})
