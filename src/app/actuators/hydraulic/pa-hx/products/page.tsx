'use client'

// PA-HX model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { PAHX_CATALOG } from '../paHxData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'PA-HX hydraulic rack & pinion models',
  intro: `${ITEMS.length} hydraulic rack & pinion part-turn actuators: 9 double acting (90 to 10,000 Nm at 100 bar), 9 spring to close and 8 spring to open. Open any model for its full figures, then request a quote.`,
  back: { href: '/actuators/hydraulic/pa-hx', label: 'PA-HX series overview' },
  catalog: { href: PAHX_CATALOG, label: 'Hydraulic data sheet (PDF)' },
  columns: ['Type', 'Torque', 'ISO 5211', 'Weight', 'Oil'],
  facets: [{ key: 'kind', title: 'Type', options: ['Double acting', 'Spring to close', 'Spring to open'] }],
  sorts: [{ key: 'model', label: 'Model' }, { key: 'torque', label: 'Torque', desc: true }, { key: 'weight', label: 'Weight' }],
  placeholder: 'Search model or torque, e.g. D045 or E50',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => { const k = sp.get('type'); return k ? { kind: [k] } : {} },
}

export default function PaHxModelsPage() {
  return <ModelList def={DEF} />
}
