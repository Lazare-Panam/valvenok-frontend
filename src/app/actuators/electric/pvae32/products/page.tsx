'use client'

// Danfoss PVE model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { PVE_TI } from '../pveData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'Danfoss PVE actuator models',
  intro: `${ITEMS.length} Danfoss PVE electrohydraulic actuators for PVG proportional valves: on/off, proportional, CAN bus and explosion proof. Open any model for its full figures, then request a quote.`,
  back: { href: '/actuators/electric/pvae32', label: 'Danfoss PVE overview' },
  catalog: { href: PVE_TI, label: 'PVE Series 7 technical information (PDF)' },
  columns: ['Type', 'Supply', 'Reaction (ms)', 'Connectors'],
  facets: [
    { key: 'kind', title: 'Type', options: ['On/off', 'Proportional', 'CAN bus', 'Explosion proof'] },
    { key: 'model', title: 'Model', options: ITEMS.map((i) => i.model) },
  ],
  sorts: [{ key: 'model', label: 'Model' }, { key: 't1', label: 'Fastest reaction' }],
  placeholder: 'Search model or function, e.g. PVEH or float',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => { const m = sp.get('model'); const k = sp.get('type'); return m ? { model: [m] } : k ? { kind: [k] } : {} },
}

export default function PVEModelsPage() {
  return <ModelList def={DEF} />
}
