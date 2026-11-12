'use client'

// IQL model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { IQL_CATALOG } from '../iqlData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'IQL electric linear actuator models',
  intro: `${ITEMS.length} Susin IQL linear actuators for globe and control valves, 4 to 25 kN of thrust and 40 to 100 mm of stroke. Open any model for its full figures and rated currents, then request a quote.`,
  back: { href: '/actuators/electric/iql', label: 'IQL series overview' },
  catalog: { href: IQL_CATALOG, label: 'IQL catalogue (PDF)' },
  columns: ['Thrust', 'Stroke', 'Speed 50 / 60 Hz', 'Weight'],
  facets: [
    { key: 'model', title: 'Model', options: ITEMS.map((i) => i.model) },
    { key: 'stroke', title: 'Stroke', options: ['40 mm', '50 mm', '100 mm'] },
    { key: 'force', title: 'Switches', options: ['Force switches', 'No force switch'] },
  ],
  sorts: [{ key: 'model', label: 'Model' }, { key: 'thrust', label: 'Thrust', desc: true }],
  placeholder: 'Search model or thrust, e.g. IQL 10 or 20 kN',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => { const m = sp.get('model'); return m ? { model: [m] } : {} },
}

export default function IQLModelsPage() {
  return <ModelList def={DEF} />
}
