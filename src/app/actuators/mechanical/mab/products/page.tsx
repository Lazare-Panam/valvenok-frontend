'use client'

// MAB model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { MAB_CATALOG, MAB_SIZES, STAGE_LABEL } from '../mabData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'MAB bevel gear actuator models',
  intro: `${ITEMS.length} Susin MAB bevel gear actuators for gate, globe and other multi-turn valves, 250 to 18,000 Nm and 75 to 2,500 kN thrust, as standard or with a single or double stage reduction. Open any model for its full figures and dimensions, then request a quote.`,
  back: { href: '/actuators/mechanical/mab', label: 'MAB series overview' },
  catalog: { href: MAB_CATALOG, label: 'MAB catalogue (PDF)' },
  columns: ['Max torque', 'Thrust', 'Ratio', 'Mech. advantage', 'ISO 5210', 'Weight'],
  facets: [
    { key: 'stage', title: 'Gearing', options: Object.values(STAGE_LABEL) },
    { key: 'size', title: 'Size', options: MAB_SIZES },
  ],
  sorts: [
    { key: 'model', label: 'Model' },
    { key: 'torque', label: 'Torque', desc: true },
    { key: 'ma', label: 'Mechanical advantage', desc: true },
    { key: 'weight', label: 'Weight' },
  ],
  placeholder: 'Search model or flange, e.g. MAB-300 or F25',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => {
    const out: Record<string, string[]> = {}
    const size = sp.get('size'); if (size) out.size = [size]
    const stage = sp.get('stage') as keyof typeof STAGE_LABEL | null; if (stage && STAGE_LABEL[stage]) out.stage = [STAGE_LABEL[stage]]
    return out
  },
}

export default function MABModelsPage() {
  return <ModelList def={DEF} />
}
