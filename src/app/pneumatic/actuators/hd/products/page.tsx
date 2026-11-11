'use client'

// HD model list ("View all models"). Rows come from ./items.
import { SUSIN_CATALOG } from '@/src/app/Common/susinCatalogs'
import ModelList, { type ListDef } from '../../_series/ModelList'
import { ITEMS } from './items'
import { HD_ACTUATOR_DATA } from './hooks/hdActuatorData'

const nm = (n: number) => n.toLocaleString('en-GB')
const DEF: ListDef = {
  title: 'HD heavy-duty actuator models',
  intro: `${ITEMS.length} Susin HD body sizes, ${nm(HD_ACTUATOR_DATA[0].torqueNmMin)} to ${nm(Math.max(...HD_ACTUATOR_DATA.map(m => m.torqueNmMax)))} Nm. Filter by body size and mounting, open a row for the full figures, then request a quote.`,
  back: { href: '/pneumatic/actuators/hd', label: 'HD series overview' },
  catalog: { href: SUSIN_CATALOG.HD, label: 'IS & IC catalogue (PDF)' },
  columns: ['Torque', 'Spring end torque', 'ISO 5211', 'Max stem'],
  facets: [
    { key: 'size', title: 'Body size', options: HD_ACTUATOR_DATA.map(m => m.model) },
    { key: 'mount', title: 'ISO 5211', options: Array.from(new Set(HD_ACTUATOR_DATA.map(m => m.iso5211))) },
  ],
  sorts: [{ key: 'model', label: 'Body size' }, { key: 'torque', label: 'Max torque', desc: true }],
  placeholder: 'Search body size, e.g. 03 or F25',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => { const m = sp.get('model'); return m ? { size: [m] } : {} },
}

export default function HDModelsPage() {
  return <ModelList def={DEF} />
}
