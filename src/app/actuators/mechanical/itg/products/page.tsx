'use client'

// ITG model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { STAGE_LABEL, type GearStage } from '@/src/app/pneumatic/actuators/_series/gearTypes'
import { ITG_CATALOG, ITG_SIZES } from '../itgData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'ITG declutchable gear models',
  intro: `${ITEMS.length} Susin I-Tork ITG declutchable worm gears that fit between a pneumatic actuator and a quarter-turn valve for manual override, 60 to 28,000 Nm, as standard or with a single or double stage reduction. Open any model for its full figures and dimensions, then request a quote.`,
  back: { href: '/actuators/mechanical/itg', label: 'ITG series overview' },
  catalog: { href: ITG_CATALOG, label: 'ITG catalogue (PDF)' },
  columns: ['Max torque', 'Ratio', 'Turns (90°)', 'Rim pull', 'ISO 5211', 'Weight'],
  facets: [
    { key: 'stage', title: 'Gearing', options: Object.values(STAGE_LABEL) },
    { key: 'size', title: 'Size', options: ITG_SIZES },
  ],
  sorts: [
    { key: 'model', label: 'Model' },
    { key: 'torque', label: 'Torque', desc: true },
    { key: 'rim', label: 'Rim pull' },
    { key: 'weight', label: 'Weight' },
  ],
  placeholder: 'Search model or flange, e.g. ITG-300 or F25',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => {
    const out: Record<string, string[]> = {}
    const size = sp.get('size'); if (size) out.size = [size]
    const stage = sp.get('stage') as GearStage | null; if (stage && STAGE_LABEL[stage]) out.stage = [STAGE_LABEL[stage]]
    return out
  },
}

export default function ITGModelsPage() {
  return <ModelList def={DEF} />
}
