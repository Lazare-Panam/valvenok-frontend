'use client'

// ITQ Micro model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { ITQM_CATALOG } from '../itqMicroData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'ITQ Micro electric actuator models',
  intro: `${ITEMS.length} Susin I-Tork ITQ Micro compact quarter-turn electric actuators, 25 to 80 Nm, for small ball and plug valves and dampers. Compare them side by side, open any model for its full figures, then request a quote.`,
  back: { href: '/actuators/electric/itq-micro', label: 'ITQ Micro series overview' },
  catalog: { href: ITQM_CATALOG, label: 'ITQ Micro catalogue (PDF)' },
  columns: ['Torque', 'Time 50 / 60 Hz', 'ISO 5211', 'Power supply'],
  facets: [
    { key: 'model', title: 'Model', options: ITEMS.map((i) => i.model) },
    { key: 'mount', title: 'ISO 5211', options: ['Fits F03', 'F05 / F07'] },
    { key: 'enclosure', title: 'Enclosure', options: ['IP66', 'IP67'] },
  ],
  sorts: [{ key: 'model', label: 'Model' }, { key: 'torque', label: 'Torque', desc: true }],
  placeholder: 'Search model or torque, e.g. 0040 or 80 Nm',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => { const m = sp.get('model'); return m ? { model: [m] } : {} },
}

export default function ITQMicroModelsPage() {
  return <ModelList def={DEF} />
}
