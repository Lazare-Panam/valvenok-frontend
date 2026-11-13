// Danfoss PVE models, shared by the model list and the per-model product pages.
// Every figure is from the Danfoss documents listed in ../pveData.
import type { Item } from '@/src/app/pneumatic/actuators/_series/modelTypes'
import { PVE_MODELS, PVE_COMMON, PVE_IMAGE } from '../pveData'

const reaction = (m: (typeof PVE_MODELS)[number]) => (m.t1 ? `${m.t1} ms / ${m.t2} ms` : 'Not listed')

const RAW_ITEMS: Item[] = PVE_MODELS.map((m, i) => ({
  id: m.model,
  model: m.model,
  sub: m.kind,
  image: PVE_IMAGE,
  cells: [
    { text: m.kind, pill: m.kind === 'Proportional' ? 'green' : 'grey' },
    m.supply,
    reaction(m),
    m.connectors,
  ],
  facets: { kind: m.kind, model: m.model },
  sort: { model: i, t1: m.t1 ?? 9999 },
  search: `${m.model} Danfoss PVE PVG electrohydraulic actuator ${m.kind} ${m.functions}`,
  brief: [
    ['Fault monitoring', m.monitoring],
    ['Hysteresis', m.hysteresis ?? 'Not listed'],
    ['Pilot pressure', m.pilot],
  ],
  specs: [
    ['Type', m.kind],
    ['Power supply', m.supply],
    ['Connectors', m.connectors],
    ['Pilot pressure', m.pilot],
    ['Fault monitoring', m.monitoring],
    ['Functions', m.functions],
    ...(m.t1 ? [['Reaction, neutral → full stroke / back (PVG 32/100)', reaction(m)] as [string, string]] : []),
    ...(m.hysteresis ? [['Hysteresis', m.hysteresis] as [string, string]] : []),
    ...m.extra,
    ...(m.kind === 'CAN bus' || m.kind === 'Explosion proof' ? [] : PVE_COMMON),
  ],
  note: `${m.role} Tell us the PVG valve, supply voltage and control signal and we’ll confirm the actuator and part number.`,
  rfq: {
    id: `danfoss-${m.model.toLowerCase()}`,
    name: `Danfoss ${m.model} electrohydraulic actuator`,
    brand: 'Danfoss',
    category: 'Electric Actuators',
    categoryId: 'electric-actuators',
    subCategory: 'Danfoss PVE',
    thumbnail: PVE_IMAGE,
    description: `Danfoss ${m.model} electrohydraulic actuator for PVG proportional valves. ${m.role}`,
    keySpecs: [
      { label: 'Type', value: m.kind },
      { label: 'Supply', value: m.supply },
      { label: 'Connectors', value: m.connectors },
      { label: 'Fault monitoring', value: m.monitoring },
    ],
    variantInfo: { count: 1, sizeRange: m.model },
  },
}))

// One product page per model: /actuators/electric/pvae32/products/<slug>
export const PVE_PRODUCTS = '/actuators/electric/pvae32/products'
export const ITEMS: Item[] = RAW_ITEMS.map((i) => ({ ...i, tag: `${i.facets.kind} electrohydraulic`, slug: i.model, href: `${PVE_PRODUCTS}/${i.model}` }))
