'use client'

// MPLDS model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '../../_series/ModelList'
import { ITEMS, MPLDS_SOURCE } from './items'

const DEF: ListDef = {
  title: 'MPLDS micro linear actuator models',
  intro: `${ITEMS.length} Susin I-Tork MPLDS models: MPLD double acting and MPLS spring return, in four bores from 100 to 200 mm. Filter by type or bore, open any model for its full figures, then request a quote.`,
  back: { href: '/pneumatic/actuators/mplds', label: 'MPLDS series overview' },
  catalog: { href: MPLDS_SOURCE, label: 'MPLDS on susingroup.com' },
  columns: ['Type', 'Thrust, 2.8 – 7 bar', 'Stroke', 'Bore', 'Piston rod'],
  autoFacets: false, // 8 models: type and bore filters are enough
  facets: [
    { key: 'type', title: 'Type', options: ['MPLD double acting', 'MPLS spring return'] },
    { key: 'bore', title: 'Bore', options: ['100 mm', '125 mm', '160 mm', '200 mm'] },
  ],
  sorts: [{ key: 'model', label: 'Size' }, { key: 'bore', label: 'Bore', desc: true }],
  placeholder: 'Search model, e.g. MPLS-160',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => {
    const out: Record<string, string[]> = {}
    const t = sp.get('type'); if (t) out.type = [t === 'MPLS' ? 'MPLS spring return' : 'MPLD double acting']
    const b = sp.get('bore'); if (b) out.bore = [`${b} mm`]
    return out
  },
}

export default function MPLDSModelsPage() {
  return <ModelList def={DEF} />
}
