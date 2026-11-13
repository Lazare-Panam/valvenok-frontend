'use client'

// PANDA model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { PANDA_CATALOG } from '../pandaData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'PANDA electro-hydraulic actuator models',
  intro: `${ITEMS.length} Susin PANDA low pressure electro-hydraulic part-turn actuators: 14 double acting (46 to 7,207 Nm) and 13 spring return (up to 9,274 Nm to open). Open any model for its full figures, then request a quote.`,
  back: { href: '/actuators/hydraulic/panda', label: 'PANDA series overview' },
  catalog: { href: PANDA_CATALOG, label: 'PANDA / PA brochure (PDF)' },
  columns: ['Torque (open)', 'Spring close, start / end', 'ISO 5211', 'A × B × C, mm', 'Oil'],
  facets: [{ key: 'kind', title: 'Type', options: ['Double acting', 'Spring return'] }],
  sorts: [{ key: 'model', label: 'Model' }, { key: 'torque', label: 'Torque', desc: true }],
  placeholder: 'Search model or torque, e.g. D60 or E20',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => { const k = sp.get('type'); return k ? { kind: [k] } : {} },
}

export default function PandaModelsPage() {
  return <ModelList def={DEF} />
}
