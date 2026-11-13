// PLDS models, shared by the model list and the per-model product pages.
// PLDS model list ("View all models"). Figures from the Susin I-Tork PLDS catalogue; see hooks/pldsActuatorData.
import type { Item } from '../../_series/modelTypes'
import { PLDS_ACTUATOR_DATA } from './hooks/pldsActuatorData'
import { jack, mtg, mab, hmor } from '../pldsOverrideData'

// Manual overrides that fit each size (Susin I-Tork PLDS catalogue, Types 1–4)
const overrides = (model: string): string[][] => {
  const k = (v: number) => `${v.toLocaleString('en-GB')} N`
  const out: string[][] = []
  const j = jack.find(r => r.size === model); if (j) out.push(['Jack screw', 'Not listed', k(j.thrustN), '0.3 / 8.4', '360 N'])
  const g = mtg.find(r => r.size === model); if (g) out.push(['MTG worm gear', g.model!, k(g.thrustN), '0.3 / 8.4', '360 N'])
  const b = mab.find(r => r.size === model); if (b) out.push(['MAB bevel gear', b.model!, k(b.thrustN), '0.3 / 8.4', '360 N'])
  const h = hmor.find(r => `PLDS-${r[0]}` === model); if (h) out.push(['Hydraulic (HMOR)', `Pump ${h[1]} mm`, k(h[3]), 'Not listed', 'Not listed'])
  return out
}

const n = (v: number) => v.toLocaleString('en-GB', { maximumFractionDigits: 1 })

const RAW_ITEMS: Item[] = PLDS_ACTUATOR_DATA.map((m, i) => ({
  id: m.model, model: m.model, sub: `${n(m.boreMm)} mm bore`, image: m.imageUrl,
  cells: [{ text: `${n(m.thrustKnMin)} – ${n(m.thrustKnMax)} kN`, pill: 'green' }, `${n(m.pistonAreaMm2)} mm²`, `${m.stemSizeMm} mm`, { text: `${n(m.maxTravelPldMm)} / ${n(m.maxTravelPlsMm)} mm`, pill: 'grey' }],
  facets: { stem: `${m.stemSizeMm} mm` },
  sort: { model: i, thrust: m.thrustKnMax, travel: m.maxTravelPldMm },
  search: `${m.model} PLD PLS ${m.boreMm} ${m.stemSizeMm}`,
  specs: [
    ['Model', m.model], ['Bore', `${n(m.boreMm)} mm`], ['Piston area', `${n(m.pistonAreaMm2)} mm²`], ['Stem', `${m.stemSizeMm} mm`],
    ['Thrust, double acting', `${n(m.thrustKnMin)} – ${n(m.thrustKnMax)} kN`], ['Max travel, PLD', `${n(m.maxTravelPldMm)} mm`], ['Max travel, PLS', `${n(m.maxTravelPlsMm)} mm`], ['Max operating pressure', '10.3 bar'],
  ],
  table: { head: ['Manual override', 'Model', 'Max thrust', 'Turns per mm / inch', 'Rim pull'], rows: overrides(m.model) },
  note: 'Double acting (PLD) thrust from 2.8 bar (open) to 7 bar (close). Spring return (PLS) thrust depends on the spring chosen. For longer strokes, ask us.',
  rfq: { id: m.model, name: `PLDS Series ${m.model} linear actuator`, brand: 'Susin', category: 'Pneumatic Actuators', categoryId: 'pneumatic-actuators', subCategory: 'PLDS Series', thumbnail: m.imageUrl, description: m.description, keySpecs: [{ label: 'Model', value: m.model }, { label: 'Bore', value: `${n(m.boreMm)} mm` }, { label: 'Thrust (DA)', value: `${n(m.thrustKnMin)} – ${n(m.thrustKnMax)} kN` }, { label: 'Max travel (PLD)', value: `${n(m.maxTravelPldMm)} mm` }], variantInfo: { count: 1, sizeRange: `${n(m.boreMm)} mm bore` } },
}))


// One product page per model: /pneumatic/actuators/plds/products/<slug>
export const PLDS_PRODUCTS = '/pneumatic/actuators/plds/products'
export const ITEMS: Item[] = RAW_ITEMS.map(i => {
  const slug = i.model.replace(/\s+/g, '-')
  return { ...i, tag: `Linear · ${i.facets.stem} stem`, slug, href: `${PLDS_PRODUCTS}/${slug}` }
})
