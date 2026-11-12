// QS models, shared by the model list and the per-model product pages.
// Every figure is from the Susin / i-Tork QS fail-safe catalogue; see ../qsData.
import type { Item } from '@/src/app/pneumatic/actuators/_series/modelTypes'
import { QS_MODELS, QS_COMMON, QS_IMAGE } from '../qsData'

const flanges = (m: (typeof QS_MODELS)[number]) => m.mounting.replace('ISO 5211 ', '')
const time = (s: string) => s.replace(' (50 Hz)', '').replace(' (60 Hz)', '')

const RAW_ITEMS: Item[] = QS_MODELS.map((m, i) => ({
  id: m.model,
  model: m.model,
  sub: `${m.torqueNm} Nm · spring return`,
  image: QS_IMAGE,
  cells: [
    { text: `${m.torqueNm} Nm`, pill: 'green' },
    time(m.speed),
    '1.8 s',
    flanges(m),
    `${m.weightKg} kg`,
  ],
  facets: { model: m.model, body: m.weightKg === 22 ? 'QS05 / QS10' : 'QS20 / QS30', mount: flanges(m) },
  sort: { model: i, torque: m.torqueNm },
  search: `${m.model} ${m.torqueNm} Nm ${m.mounting} fail safe spring return electric`,
  brief: [
    ['Cable entries', m.cableEntry],
    ['Spring time options', '2, 3 or 4 s'],
    ['Dimensions', m.dimensions],
  ],
  specs: [
    ['Motor torque', `${m.torqueNm} Nm`],
    ['Spring torque', `${m.springTorqueNm} Nm`],
    ['Operating time, 50 / 60 Hz', time(m.speed)],
    ['Spring return time', m.springSpeed],
    ['ISO 5211 mounting', flanges(m)],
    ['Weight', `${m.weightKg} kg`],
    ['Power supply', m.power],
    ['Cable entries', m.cableEntry],
    ['Dimensions', m.dimensions],
    ...QS_COMMON.map((c): [string, string] => [c.label.charAt(0) + c.label.slice(1).toLowerCase(), c.value]),
  ],
  note: 'An independent spiral spring returns the valve to its safe position if power is lost; in normal running the motor drives only the reducer.',
  rfq: {
    id: `qs-${m.model.toLowerCase()}`,
    name: `${m.model} fail-safe spring return electric actuator`,
    brand: 'Susin',
    category: 'Electric Actuators',
    categoryId: 'electric-actuators',
    subCategory: 'QS Series',
    thumbnail: QS_IMAGE,
    description: `${m.model} fail-safe spring return electric actuator, ${m.torqueNm} Nm, spring return in 1.8 s, ISO 5211 ${flanges(m)}, IP67.`,
    keySpecs: [
      { label: 'Torque', value: `${m.torqueNm} Nm` },
      { label: 'Operating time', value: `${time(m.speed)} (50 / 60 Hz)` },
      { label: 'Spring return', value: '1.8 s' },
      { label: 'Mounting', value: `ISO 5211 ${flanges(m)}` },
    ],
    variantInfo: { count: 1, sizeRange: m.model },
  },
}))

// One product page per model: /actuators/electric/qs/products/<slug>
export const QS_PRODUCTS = '/actuators/electric/qs/products'
export const ITEMS: Item[] = RAW_ITEMS.map((i) => ({ ...i, tag: 'Fail-safe spring return', slug: i.model, href: `${QS_PRODUCTS}/${i.model}` }))
