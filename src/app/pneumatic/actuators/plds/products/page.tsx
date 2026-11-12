'use client'

// PLDS model list ("View all models"). Rows come from ./items.
import { SUSIN_CATALOG } from '@/src/app/Common/susinCatalogs'
import ModelList, { type ListDef } from '../../_series/ModelList'
import { ITEMS } from './items'
import { PLDS_ACTUATOR_DATA } from './hooks/pldsActuatorData'
const DEF: ListDef = {
  title: 'PLDS linear actuator models',
  intro: `${ITEMS.length} Susin PLDS sizes from 100 to 975 mm bore, 1.8 to 444 kN double acting. Filter by stem size, open any model for its full figures, then request a quote.`,
  back: { href: '/pneumatic/actuators/plds', label: 'PLDS series overview' },
  catalog: { href: SUSIN_CATALOG.PLDS, label: 'catalogue (PDF)' },
  columns: ['Thrust, double acting', 'Piston area', 'Stem', 'Travel PLD / PLS'],
  facets: [{ key: 'stem', title: 'Stem size', options: Array.from(new Set(PLDS_ACTUATOR_DATA.map(m => `${m.stemSizeMm} mm`))) }],
  sorts: [{ key: 'model', label: 'Size' }, { key: 'thrust', label: 'Max thrust', desc: true }, { key: 'travel', label: 'Max travel', desc: true }],
  placeholder: 'Search model, e.g. PLDS-300',
  items: ITEMS,
  brief: ['Manual override', 'Max operating pressure'],
  fromParams: (sp): Record<string, string[]> => { const s = sp.get('stem'); return s ? { stem: [`${s} mm`] } : {} },
}

export default function PLDSModelsPage() {
  return <ModelList def={DEF} />
}
