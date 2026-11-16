'use client'

// HLDA model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { HLDA_CATALOG } from '../hldaData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'HLDA linear piston hydraulic models',
  intro: `${ITEMS.length} double acting linear piston actuators, 32 to 200 mm bore, with close / open thrust at 100 and 160 bar. Each is also built electro-hydraulic (EHLDA). Open any model for its full thrust table, then request a quote.`,
  back: { href: '/actuators/hydraulic/hlda', label: 'HLDA series overview' },
  catalog: { href: HLDA_CATALOG, label: 'Hydraulic data sheet (PDF)' },
  columns: ['Bore', 'Thrust', 'At 100 bar', 'At 160 bar'],
  facets: [],
  sorts: [{ key: 'model', label: 'Model' }, { key: 'thrust', label: 'Thrust', desc: true }],
  placeholder: 'Search model, bore or thrust, e.g. 125 or 100 kN',
  items: ITEMS,
}

export default function HldaModelsPage() {
  return <ModelList def={DEF} />
}
