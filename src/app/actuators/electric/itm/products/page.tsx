'use client'

// ITM model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { ITM_CATALOG } from '../itmData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'ITM multi-turn actuator models',
  intro: `${ITEMS.length} Susin I-Tork ITM multi-turn electric actuators for gate, globe and sluice valves, 177 to 2,942 Nm and up to 686 kN thrust. Open any model for its full figures and speed torque table, then request a quote.`,
  back: { href: '/actuators/electric/itm', label: 'ITM series overview' },
  catalog: { href: ITM_CATALOG, label: 'ITM catalogue (PDF)' },
  columns: ['Max torque', 'Thrust', 'Max stem', 'ISO 5210', 'Weight'],
  facets: [
    { key: 'model', title: 'Model', options: ITEMS.map((i) => i.model) },
    { key: 'body', title: 'Body', options: ['Top handle', 'Side handle'] },
  ],
  sorts: [{ key: 'model', label: 'Model' }, { key: 'torque', label: 'Torque', desc: true }, { key: 'thrust', label: 'Thrust', desc: true }],
  placeholder: 'Search model or torque, e.g. 0450 or F25',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => { const m = sp.get('model'); return m ? { model: [m] } : {} },
}

export default function ITMModelsPage() {
  return <ModelList def={DEF} />
}
