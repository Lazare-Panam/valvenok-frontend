'use client'

// ITQ model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { ITQ_CATALOG } from '../itqData'
import { ITEMS, ITQ_BODIES, bodyOf } from './items'

const DEF: ListDef = {
  title: 'ITQ electric actuator models',
  intro: `${ITEMS.length} Susin I-Tork ITQ quarter-turn electric actuators, 100 to 9,000 Nm. Filter by body, flange or 24 VDC, open any model for its full figures, then request a quote.`,
  back: { href: '/actuators/electric/itq', label: 'ITQ series overview' },
  catalog: { href: ITQ_CATALOG, label: 'ITQ catalogue (PDF)' },
  columns: ['Torque', 'Time 50 / 60 Hz', 'ISO 5211', 'Weight'],
  facets: [
    { key: 'body', title: 'Body', options: ITQ_BODIES.map((b) => bodyOf(b[0])) },
    { key: 'mount', title: 'ISO 5211', options: Array.from(new Set(ITEMS.map((i) => i.facets.mount))) },
    { key: 'dc', title: 'Supply', options: ['24 VDC available', 'AC only'] },
  ],
  sorts: [{ key: 'model', label: 'Model' }, { key: 'torque', label: 'Torque', desc: true }, { key: 'time', label: 'Operating time' }],
  placeholder: 'Search model or torque, e.g. 0500 or F14',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => { const b = sp.get('body'); return b ? { body: [b] } : {} },
}

export default function ITQModelsPage() {
  return <ModelList def={DEF} />
}
