'use client'

// LP-HD / LP-HS model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { LP_CATALOG } from '../lpData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'LP-HD / LP-HS low-pressure scotch yoke models',
  intro: `${ITEMS.length} low-pressure electro-hydraulic scotch yoke actuators in 10 sizes: double acting LP-HD, and spring return LP-HS normally closed and normally open. Each has its own 8 bar motor and pump. Open a model for its torque table and stroking times, then request a quote.`,
  back: { href: '/actuators/hydraulic/lp-scotch-yoke', label: 'LP-HD / LP-HS series overview' },
  catalog: { href: LP_CATALOG, label: 'Hydraulic low pressure catalogue (PDF)' },
  columns: ['Type', 'Max torque', 'Size', 'ISO 5211', 'Stroking time'],
  facets: [{ key: 'kind', title: 'Type', options: ['Double acting', 'Spring return, normally closed', 'Spring return, normally open'] }],
  sorts: [{ key: 'model', label: 'Model' }, { key: 'torque', label: 'Torque', desc: true }, { key: 'size', label: 'Size' }],
  placeholder: 'Search model or size, e.g. LPHD 100 or 125',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => { const k = sp.get('type'); return k ? { kind: [k] } : {} },
}

export default function LpModelsPage() {
  return <ModelList def={DEF} />
}
