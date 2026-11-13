'use client'

// QS model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { QS_CATALOG } from '../qsData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'QS fail-safe electric actuator models',
  intro: `${ITEMS.length} Susin I-Tork QS spring return electric actuators, 50 to 300 Nm, that return the valve to its safe position in 1.8 s if power is lost. Open any model for its full figures, then request a quote.`,
  back: { href: '/actuators/electric/qs', label: 'QS series overview' },
  catalog: { href: QS_CATALOG, label: 'QS catalogue (PDF)' },
  columns: ['Torque', 'Time 50 / 60 Hz', 'Spring return', 'ISO 5211', 'Weight'],
  facets: [
    { key: 'model', title: 'Model', options: ITEMS.map((i) => i.model) },
    { key: 'body', title: 'Body', options: ['QS05 / QS10', 'QS20 / QS30'] },
  ],
  sorts: [{ key: 'model', label: 'Model' }, { key: 'torque', label: 'Torque', desc: true }],
  placeholder: 'Search model or torque, e.g. QS20 or 300 Nm',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => { const m = sp.get('model'); return m ? { model: [m] } : {} },
}

export default function QSModelsPage() {
  return <ModelList def={DEF} />
}
