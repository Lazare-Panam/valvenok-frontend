// PDS models, shared by the model list and the per-model product pages.
// PDS model list ("View all models"). Figures from the Susin PDS catalogue (see hooks/pdActuatorData).
import type { Item } from '../../_series/modelTypes'
import { PD_ACTUATOR_DATA, type PDActuatorDTO } from './hooks/pdActuatorData'

const nm = (n?: number) => (n === undefined ? '—' : n.toLocaleString('en-GB', { maximumFractionDigits: n < 100 ? 1 : 0 }))
const TIME: Record<string, string> = { '45': '< 0.3', '50': '< 0.3', '55': '< 0.4', '70': '< 0.6', '75': '< 0.9', '85': '< 1.0', '100': '< 2.0', '125': '< 3.0', '160': '< 5.0', '200': '< 6.0' }
const BARS: [keyof PDActuatorDTO, string][] = [['torque_2_8_bar', '2.8'], ['torque_3_5_bar', '3.5'], ['torque_4_2_bar', '4.2'], ['torque_5_5_bar', '5.5'], ['torque_6_bar', '6'], ['torque_7_bar', '7'], ['torque_8_bar', '8']]
const size = (model: string) => model.replace(/^P[DS]/, '')

const pdItems: Item[] = Array.from(new Set(PD_ACTUATOR_DATA.filter(r => r.series === 'PD').map(r => r.model))).map(model => {
  const rows = PD_ACTUATOR_DATA.filter(r => r.model === model)
  const r0 = rows[0], s = size(model)
  const lo = Math.min(...rows.map(r => r.torque_2_8_bar!)), hi = Math.max(...rows.map(r => r.torque_8_bar!))
  const desc = `Susin ${model} double acting scotch yoke actuator. Torque ${nm(lo)}–${nm(hi)} Nm at 2.8–8 bar, ISO 5211 ${r0.iso5211}.`
  return {
    id: model, model, sub: `Size ${s}`, image: r0.imageUrl,
    cells: [{ text: 'Double acting', pill: 'grey' }, { text: `${nm(lo)} – ${nm(hi)} Nm`, pill: 'green' }, 'No spring, air closes', r0.iso5211!, `${r0.airConsumptionOpen} L · ${TIME[s]} s`],
    facets: { action: 'Double acting', size: s, mount: r0.iso5211! },
    sort: { model: Number(s) * 10, torque: hi },
    search: `${model} PDS ${s} double acting DA ${r0.iso5211}`,
    specs: [['Model', model], ['Action', 'Double acting'], ['ISO 5211', r0.iso5211!], ['Torque', `${nm(lo)} – ${nm(hi)} Nm`], ['Air per stroke (5.5 bar)', `${r0.airConsumptionOpen} L open / ${r0.airConsumptionClose} L close`], ['Operating time (5.5 bar)', `${TIME[s]} s`], ['Air ports', '1/4" BSP'], ['Temperature', '−20 to +80 °C']],
    table: { head: ['Position', ...BARS.map(([, b]) => `${b} bar`)], rows: rows.map(r => [r.angle!, ...BARS.map(([k]) => nm(r[k] as number))]) },
    note: 'Torque in Nm at each air pressure, at the 0°, 45° and 90° positions. Include appropriate safety factors when sizing.',
    rfq: { id: model, name: `PDS Series ${model} double acting actuator`, brand: 'Susin', category: 'Pneumatic Actuators', categoryId: 'pneumatic-actuators', subCategory: 'PDS Series', thumbnail: r0.imageUrl, description: desc, keySpecs: [{ label: 'Model', value: model }, { label: 'ISO 5211', value: r0.iso5211! }, { label: 'Torque', value: `${nm(lo)} – ${nm(hi)} Nm` }], variantInfo: { count: 1, sizeRange: `Size ${s}` } },
  }
})

const psItems: Item[] = PD_ACTUATOR_DATA.filter(r => r.series === 'PS').map(r => {
  const s = size(r.model)
  return {
    id: r.model, model: r.model, sub: `Size ${s}`, image: r.imageUrl,
    cells: [{ text: 'Spring return', pill: 'grey' }, { text: `${nm(r.outputTorqueNmMin)} – ${nm(r.outputTorqueNmMax)} Nm`, pill: 'green' }, `${nm(r.springEndTorqueNmMin)} – ${nm(r.springEndTorqueNmMax)} Nm`, r.iso5211!, `${TIME[s]} s`],
    facets: { action: 'Spring return', size: s, mount: r.iso5211! },
    sort: { model: Number(s) * 10 + 1, torque: r.outputTorqueNmMax! },
    search: `${r.model} PDS ${s} spring return SR fail ${r.iso5211}`,
    specs: [['Model', r.model], ['Action', 'Spring return'], ['ISO 5211', r.iso5211!], ['Air torque', `${nm(r.outputTorqueNmMin)} – ${nm(r.outputTorqueNmMax)} Nm`], ['Spring torque', `${nm(r.springEndTorqueNmMin)} – ${nm(r.springEndTorqueNmMax)} Nm`], ['Air torque (lb-in)', `${nm(r.outputTorqueLbInMin)} – ${nm(r.outputTorqueLbInMax)}`], ['Operating time (5.5 bar)', `${TIME[s]} s`], ['Temperature', '−20 to +80 °C']],
    note: 'Air torque at 4.2–7 bar and spring torque from the catalogue spring-close tables. Spring open (fail open) is also available.',
    rfq: { id: r.model, name: `PDS Series ${r.model} spring return actuator`, brand: 'Susin', category: 'Pneumatic Actuators', categoryId: 'pneumatic-actuators', subCategory: 'PDS Series', thumbnail: r.imageUrl, description: r.description, keySpecs: [{ label: 'Model', value: r.model }, { label: 'ISO 5211', value: r.iso5211! }, { label: 'Air torque', value: `${nm(r.outputTorqueNmMin)} – ${nm(r.outputTorqueNmMax)} Nm` }, { label: 'Spring torque', value: `${nm(r.springEndTorqueNmMin)} – ${nm(r.springEndTorqueNmMax)} Nm` }], variantInfo: { count: 1, sizeRange: `Size ${s}` } },
  }
})

const RAW_ITEMS = [...pdItems, ...psItems]
export const SIZES = Array.from(new Set(RAW_ITEMS.map(i => i.facets.size))).sort((a, b) => Number(a) - Number(b))


// One product page per model: /pneumatic/actuators/pds/products/<slug>
export const PDS_PRODUCTS = '/pneumatic/actuators/pds/products'
export const ITEMS: Item[] = RAW_ITEMS.map(i => {
  const slug = i.model.replace(/\s+/g, '-')
  return { ...i, slug, href: `${PDS_PRODUCTS}/${slug}` }
})
