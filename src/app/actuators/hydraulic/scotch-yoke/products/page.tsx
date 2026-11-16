'use client'

// HRS model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { HRS_CATALOG, HRS_DA, HRS_SR } from '../hrsData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'HRS hydraulic scotch yoke models',
  intro: `${ITEMS.length} hydraulic scotch yoke actuators: ${HRS_DA.length} HRSDA double acting (open / close torque) and ${HRS_SR.length} HRSSA spring return, one per spring (spring start torque, and oil start / run / end torque). Each is also built electro-hydraulic. Open any model for its full torque table, then request a quote.`,
  back: { href: '/actuators/hydraulic/scotch-yoke', label: 'HRS series overview' },
  catalog: { href: HRS_CATALOG, label: 'Hydraulic data sheet (PDF)' },
  columns: ['Type', 'Body size', 'Torque', 'At 100 bar', 'At 160 bar'],
  facets: [
    { key: 'kind', title: 'Type', options: ['Double acting', 'Spring return'] },
    { key: 'body', title: 'Body size', options: ['A1', '01', '02', '03', '04', '05', '06'] },
  ],
  sorts: [{ key: 'model', label: 'Model' }, { key: 'torque', label: 'Torque', desc: true }],
  placeholder: 'Search model or torque, e.g. 02-080 or 5000',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => {
    const f: Record<string, string[]> = {}
    const k = sp.get('type'), b = sp.get('body')
    if (k) f.kind = [k]
    if (b) f.body = [b]
    return f
  },
}

export default function HrsModelsPage() {
  return <ModelList def={DEF} />
}
