'use client'

// PDS model list ("View all models"). Rows come from ./items.
import { SUSIN_CATALOG } from '@/src/app/Common/susinCatalogs'
import ModelList, { type ListDef } from '../../_series/ModelList'
import { ITEMS, SIZES } from './items'
const DEF: ListDef = {
  title: 'PDS scotch yoke actuator models',
  intro: `${ITEMS.length} Susin PDS models in 10 sizes: PD double acting and PS spring return. Filter by action, size and mounting, open any model for its full figures, then request a quote.`,
  back: { href: '/pneumatic/actuators/pds', label: 'PDS series overview' },
  catalog: { href: SUSIN_CATALOG.PDS, label: 'catalogue (PDF)' },
  columns: ['Type', 'Torque', 'Spring torque', 'ISO 5211', 'Air · time'],
  facets: [
    { key: 'action', title: 'Action', options: ['Double acting', 'Spring return'] },
    { key: 'size', title: 'Size', options: SIZES },
    { key: 'mount', title: 'ISO 5211', options: Array.from(new Set(ITEMS.map(i => i.facets.mount))) },
  ],
  sorts: [{ key: 'model', label: 'Size' }, { key: 'torque', label: 'Max torque', desc: true }],
  placeholder: 'Search model, e.g. PD100 or PS75',
  items: ITEMS,
  brief: ['Position', 'Air ports', 'Temperature'],
  fromParams: (sp): Record<string, string[]> => { const s = sp.get('size'); return s ? { size: [s] } : {} },
}

export default function PDSModelsPage() {
  return <ModelList def={DEF} />
}
