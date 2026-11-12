'use client'

// MAW model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { STAGE_LABEL, type GearStage } from '@/src/app/pneumatic/actuators/_series/gearTypes'
import { MAW_CATALOG, MAW_SIZES } from '../mawData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'MAW worm gear actuator models',
  intro: `${ITEMS.length} Susin MAW quarter-turn worm gear actuators for ball, butterfly and plug valves and dampers, 125 to 32,000 Nm, as standard or with a single or double stage reduction. Open any model for its full figures and dimensions, then request a quote.`,
  back: { href: '/actuators/mechanical/maw', label: 'MAW series overview' },
  catalog: { href: MAW_CATALOG, label: 'MAW catalogue (PDF)' },
  columns: ['Max torque', 'Ratio', 'Turns (90°)', 'Rim pull', 'ISO 5211', 'Weight'],
  facets: [
    { key: 'stage', title: 'Gearing', options: Object.values(STAGE_LABEL) },
    { key: 'size', title: 'Size', options: MAW_SIZES },
  ],
  sorts: [
    { key: 'model', label: 'Model' },
    { key: 'torque', label: 'Torque', desc: true },
    { key: 'rim', label: 'Rim pull' },
    { key: 'weight', label: 'Weight' },
  ],
  placeholder: 'Search model or flange, e.g. MAW-300 or F25',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => {
    const out: Record<string, string[]> = {}
    const size = sp.get('size'); if (size) out.size = [size]
    const stage = sp.get('stage') as GearStage | null; if (stage && STAGE_LABEL[stage]) out.stage = [STAGE_LABEL[stage]]
    return out
  },
}

export default function MAWModelsPage() {
  return <ModelList def={DEF} />
}
