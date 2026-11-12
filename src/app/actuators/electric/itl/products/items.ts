// ITL models, shared by the model list and the per-model product pages.
// Every figure is from the Susin / i-Tork ITL catalogue; see ../itlData.
import type { Item } from '@/src/app/pneumatic/actuators/_series/modelTypes'
import { ITL_MODELS, ITL_COMMON, ITL_IMAGE } from '../itlData'

const RAW_ITEMS: Item[] = ITL_MODELS.map((m, i) => ({
  id: m.model,
  model: m.model,
  sub: `${m.thrustKn} kN · ${m.stroke} mm stroke`,
  image: ITL_IMAGE,
  cells: [
    { text: `${m.thrustKn} kN`, pill: 'green' },
    `${m.stroke} mm`,
    `${m.time} s`,
    `${m.weightKg} kg`,
  ],
  facets: { model: m.model, body: m.body },
  sort: { model: i, thrust: m.thrustKn },
  search: `${m.model} ITL ${m.thrustKn} kN linear globe control valve electric`,
  brief: [
    ['Rated current', `${m.current} A`],
    ['Size (without handwheel)', `${m.size} mm`],
    ['Manual operation', m.body === 'ITL01 / ITL02' ? 'Folding handwheel and lever' : 'Manual lever'],
  ],
  specs: [
    ['Thrust force', `${m.thrustKn} kN`],
    ['Stroke', `${m.stroke} mm`],
    ['Operating time over the stroke', `${m.time} s`],
    ['Rated current', `${m.current} A`],
    ['Weight', `${m.weightKg} kg`],
    ['Size (without handwheel)', `${m.size} mm`],
    ...ITL_COMMON,
  ],
  note: 'Disc springs set the closing and opening force, and the force switch stops the motor when it is reached. Tell us the valve, stroke and force needed and we’ll confirm the model and linkage.',
  rfq: {
    id: `itl-${m.model.toLowerCase()}`,
    name: `${m.model} electric linear actuator`,
    brand: 'Susin',
    category: 'Electric Actuators',
    categoryId: 'electric-actuators',
    subCategory: 'ITL Series',
    thumbnail: ITL_IMAGE,
    description: `${m.model} electric linear actuator, ${m.thrustKn} kN thrust, ${m.stroke} mm stroke, AC 100–240 V or 24 V, IP66 & IP67.`,
    keySpecs: [
      { label: 'Thrust', value: `${m.thrustKn} kN` },
      { label: 'Stroke', value: `${m.stroke} mm` },
      { label: 'Speed', value: '1.2 mm/s' },
      { label: 'Supply', value: 'AC 100–240 V / 24 V' },
    ],
    variantInfo: { count: 1, sizeRange: m.model },
  },
}))

// One product page per model: /actuators/electric/itl/products/<slug>
export const ITL_PRODUCTS = '/actuators/electric/itl/products'
export const ITEMS: Item[] = RAW_ITEMS.map((i) => ({ ...i, tag: 'Linear electric', slug: i.model, href: `${ITL_PRODUCTS}/${i.model}` }))
