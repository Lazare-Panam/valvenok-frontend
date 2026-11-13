'use client'

// ITL model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { ITL_CATALOG } from '../itlData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'ITL electric linear actuator models',
  intro: `${ITEMS.length} Susin I-Tork ITL linear actuators for globe and control valves, 1 to 6 kN of thrust and 15 to 50 mm of stroke. Open any model for its full figures, then request a quote.`,
  back: { href: '/actuators/electric/itl', label: 'ITL series overview' },
  catalog: { href: ITL_CATALOG, label: 'ITL catalogue (PDF)' },
  columns: ['Thrust', 'Stroke', 'Stroke time', 'Weight'],
  facets: [
    { key: 'model', title: 'Model', options: ITEMS.map((i) => i.model) },
    { key: 'body', title: 'Body', options: ['ITL01 / ITL02', 'ITL04 / ITL06'] },
  ],
  sorts: [{ key: 'model', label: 'Model' }, { key: 'thrust', label: 'Thrust', desc: true }],
  placeholder: 'Search model or thrust, e.g. ITL04 or 6 kN',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => { const m = sp.get('model'); return m ? { model: [m] } : {} },
}

export default function ITLModelsPage() {
  return <ModelList def={DEF} />
}
