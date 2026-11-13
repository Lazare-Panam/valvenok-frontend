'use client'

// PA model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { PA_CATALOG } from '../paData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'PA electro-hydraulic actuator models',
  intro: `${ITEMS.length} Susin I-Tork PA high pressure electro-hydraulic part-turn actuators: 5 double acting (250 to 4,000 Nm) and 4 spring return (up to 2,100 Nm to open). Higher torques up to 10,000 Nm on request. Open any model for its full figures, then request a quote.`,
  back: { href: '/actuators/hydraulic/pa', label: 'PA series overview' },
  catalog: { href: PA_CATALOG, label: 'PANDA / PA brochure (PDF)' },
  columns: ['Torque (open)', 'Spring close, start / end', 'ISO 5211', 'A × B × C, mm', 'Oil'],
  facets: [{ key: 'kind', title: 'Type', options: ['Double acting', 'Spring return'] }],
  sorts: [{ key: 'model', label: 'Model' }, { key: 'torque', label: 'Torque', desc: true }],
  placeholder: 'Search model or torque, e.g. D20 or E50',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => { const k = sp.get('type'); return k ? { kind: [k] } : {} },
}

export default function PaModelsPage() {
  return <ModelList def={DEF} />
}
