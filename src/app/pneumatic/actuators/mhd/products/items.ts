// MHD models, shared by the model list and the per-model product pages.
// Figures from the Susin I-Tork "Pneumatic Actuator Micro Series SS & CS" catalogue (see hooks/mhdActuatorData).
import type { Item } from '../../_series/modelTypes'
import { MHD_ACTUATOR_DATA } from './hooks/mhdActuatorData'

const nm = (n?: number) => (n === undefined ? '—' : n.toLocaleString('en-GB'))
export const MHD_PRODUCTS = '/pneumatic/actuators/mhd/products'

export const ITEMS: Item[] = MHD_ACTUATOR_DATA.map((m, i) => {
  const size = m.model.slice(4) // "01-12"
  const sr = m.action === 'Spring return'
  const slug = m.model
  return {
    id: m.model, model: m.model, sub: `Size ${size} · ${m.yoke.includes('IS') ? 'symmetric' : 'canted'}, ${sr ? 'spring return' : 'double acting'}`, image: m.imageUrl,
    cells: [{ text: `${m.yoke.includes('IS') ? 'Symmetric' : 'Canted'} · ${sr ? 'SR' : 'DA'}`, pill: 'grey' }, { text: `${nm(m.torqueNmMin)} – ${nm(m.torqueNmMax)} Nm`, pill: 'green' }, sr ? `${nm(m.springEndTorqueNmMin)} – ${nm(m.springEndTorqueNmMax)} Nm` : 'No spring, air closes', m.iso5211],
    facets: { yoke: m.yoke, action: m.action, size },
    sort: { model: i, torque: m.torqueNmMax, size: `${size}-${i}` },
    search: `${m.model} ${m.yoke} ${m.action} ${m.iso5211} MHD micro`,
    specs: [
      ['Model', m.model], ['Yoke', m.yoke], ['Action', m.action], ['Size', size],
      ['Output torque (Nm)', `${nm(m.torqueNmMin)} – ${nm(m.torqueNmMax)}`], ['Output torque (lb-in)', `${nm(m.torqueLbInMin)} – ${nm(m.torqueLbInMax)}`],
      ...(sr ? ([['Spring torque (Nm)', `${nm(m.springEndTorqueNmMin)} – ${nm(m.springEndTorqueNmMax)}`], ['Spring torque (lb-in)', `${nm(m.springEndTorqueLbInMin)} – ${nm(m.springEndTorqueLbInMax)}`]] as [string, string][]) : []),
      ['ISO 5211', m.iso5211], ['Air supply', '3.7 – 10 bar'], ['Protection', 'IP66'], ['Temperature', '−20 to +80 °C'],
    ],
    note: sr ? 'Air torque at 4.2–7 bar on both spring sets; spring torque from the catalogue tables.' : 'Torque at 2.8–7 bar air, start to end of stroke.',
    rfq: {
      id: m.model, name: `MHD (Micro) actuator ${m.model}`, brand: 'Susin', category: 'Pneumatic Actuators', categoryId: 'pneumatic-actuators', subCategory: 'MHD (Micro) Series',
      thumbnail: m.imageUrl, description: m.description,
      keySpecs: [{ label: 'Model', value: m.model }, { label: 'Yoke', value: m.yoke }, { label: 'Action', value: m.action }, { label: 'ISO 5211', value: m.iso5211 }, { label: 'Output torque (Nm)', value: `${nm(m.torqueNmMin)} – ${nm(m.torqueNmMax)}` }],
      variantInfo: { count: 1, sizeRange: size },
    },
    slug, href: `${MHD_PRODUCTS}/${slug}`,
  }
})
