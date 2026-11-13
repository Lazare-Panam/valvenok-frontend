// OLD HD body-size pages (A1-06), kept live but out of the list until the clean-up (vk-z1).
// HD model list ("View all models"). Figures from Susin I-Tork's HD general specification
// table (susingroup.com/products/hd-rotary); see hooks/hdActuatorData.
import type { Item } from '../../_series/modelTypes'
import { HD_ACTUATOR_DATA } from './hooks/hdActuatorData'

const nm = (n: number) => n.toLocaleString('en-GB')
// Max stem diameter / height (mm), from the same Susin I-Tork table
const STEM: Record<string, [string, number]> = { A1: ['SQ-22', 30], '01': ['Ø45', 45], '02': ['Ø65', 120], '03': ['Ø80', 130], '04': ['Ø110', 150], '05': ['Ø125', 185], '06': ['Ø165', 245] }

const RAW_ITEMS: Item[] = HD_ACTUATOR_DATA.map((m, i) => ({
  id: m.model, model: `HD ${m.model}`, sub: 'IS & IC yoke · DA / SR', image: m.imageUrl,
  cells: [{ text: `${nm(m.torqueNmMin)} – ${nm(m.torqueNmMax)} Nm`, pill: 'green' }, { text: `Spring ${nm(m.springEndTorqueNmMin)} – ${nm(m.springEndTorqueNmMax)} Nm`, pill: 'grey' }, m.iso5211, `${STEM[m.model][0]} · ${STEM[m.model][1]} mm`],
  facets: { size: m.model, mount: m.iso5211 },
  sort: { model: i, torque: m.torqueNmMax },
  search: `HD ${m.model} ${m.iso5211} IS IC symmetric canted scotch yoke`,
  specs: [
    ['Body size', m.model], ['ISO 5211', m.iso5211],
    ['Torque (Nm)', `${nm(m.torqueNmMin)} – ${nm(m.torqueNmMax)}`], ['Torque (lb-in)', `${nm(m.torqueLbInMin)} – ${nm(m.torqueLbInMax)}`],
    ['Spring end torque (Nm)', `${nm(m.springEndTorqueNmMin)} – ${nm(m.springEndTorqueNmMax)}`], ['Spring end torque (lb-in)', `${nm(m.springEndTorqueLbInMin)} – ${nm(m.springEndTorqueLbInMax)}`],
    ['Max stem diameter', STEM[m.model][0]], ['Max stem height', `${STEM[m.model][1]} mm`],
    ['Over-travel', '±5°'], ['Air supply', '3.5 – 10 bar'], ['Temperature', '−20 to +85 °C'], ['Protection', 'IP66 / IP67'],
  ],
  note: 'Available as double acting, tandem double acting, spring return fail close or fail open, with a symmetric (IS) or canted (IC) yoke. Tell us the valve torque and we’ll size the cylinder and springs.',
  rfq: { id: `hd-${m.model}`, name: `HD Series body size ${m.model} scotch yoke actuator`, brand: 'Susin', category: 'Pneumatic Actuators', categoryId: 'pneumatic-actuators', subCategory: 'HD Series', thumbnail: m.imageUrl, description: m.description, keySpecs: [{ label: 'Body size', value: m.model }, { label: 'ISO 5211', value: m.iso5211 }, { label: 'Torque', value: `${nm(m.torqueNmMin)} – ${nm(m.torqueNmMax)} Nm` }, { label: 'Spring end torque', value: `${nm(m.springEndTorqueNmMin)} – ${nm(m.springEndTorqueNmMax)} Nm` }], variantInfo: { count: 1, sizeRange: `Body size ${m.model}` } },
}))


// One product page per model: /pneumatic/actuators/hd/products/<slug>
const HD_PRODUCTS = '/pneumatic/actuators/hd/products'
export const LEGACY_ITEMS: Item[] = RAW_ITEMS.map(i => {
  const slug = i.model.replace(/\s+/g, '-')
  return { ...i, tag: 'IS & IC yoke · DA / SR', slug, href: `${HD_PRODUCTS}/${slug}` }
})
