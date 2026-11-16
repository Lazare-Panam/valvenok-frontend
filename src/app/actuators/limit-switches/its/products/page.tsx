'use client'

// ITS model list ("View all models"). Rows come from ./items.
import ModelList, { type ListDef } from '@/src/app/pneumatic/actuators/_series/ModelList'
import { ITS_CATALOG } from '../itsData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'ITS limit switch box models',
  intro: 'Three Susin I-Tork ITS position monitoring switch boxes: the weatherproof ITS 200, the explosion proof ITS 400 and the ITS 500 in 316L or Duplex stainless. Open a model for its full specification and every switch and cable entry option.',
  back: { href: '/actuators/limit-switches/its', label: 'ITS series overview' },
  catalog: { href: ITS_CATALOG, label: 'ITS catalogue (PDF)' },
  columns: ['Type', 'Enclosure', 'Housing', 'Switches', 'Cable entries'],
  facets: [],
  sorts: [{ key: 'model', label: 'Model' }],
  placeholder: 'Search model or feature, e.g. 400 or stainless',
  items: ITEMS,
}

export default function ItsModelsPage() {
  return <ModelList def={DEF} />
}
