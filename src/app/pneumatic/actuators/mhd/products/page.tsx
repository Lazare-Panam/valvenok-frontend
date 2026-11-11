'use client'

// MHD model list ("View all models"). Rows come from ./items.
import { SUSIN_CATALOG } from '@/src/app/Common/susinCatalogs'
import ModelList, { type ListDef } from '../../_series/ModelList'
import { ITEMS } from './items'
import { MHD_TORQUE_RANGE } from './hooks/mhdActuatorData'

// ?yoke=IS|IC and ?action=DA|SR open the table already filtered (links from the series page)
const YOKE: Record<string, string> = { IS: 'Symmetric (IS)', IC: 'Canted (IC)' }
const ACTION: Record<string, string> = { DA: 'Double acting', SR: 'Spring return' }

const DEF: ListDef = {
  title: 'MHD micro actuator models',
  intro: `${ITEMS.length} Susin scotch yoke models, ${MHD_TORQUE_RANGE}. Filter by yoke, action and size, open a row for the full torque figures, then request a quote.`,
  back: { href: '/pneumatic/actuators/mhd', label: 'MHD series overview' },
  catalog: { href: SUSIN_CATALOG.MHD, label: 'catalogue (PDF)' },
  columns: ['Type', 'Output torque', 'Spring torque', 'ISO 5211'],
  facets: [
    { key: 'yoke', title: 'Yoke', options: ['Symmetric (IS)', 'Canted (IC)'] },
    { key: 'action', title: 'Action', options: ['Double acting', 'Spring return'] },
    { key: 'size', title: 'Size', options: ['01-12', '01-15', '01-17'] },
  ],
  sorts: [{ key: 'model', label: 'Model' }, { key: 'torque', label: 'Max torque', desc: true }, { key: 'size', label: 'Size' }],
  placeholder: 'Search model, e.g. ISR-01-15',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => {
    const f: Record<string, string[]> = {}
    const y = YOKE[sp.get('yoke') ?? ''], a = ACTION[sp.get('action') ?? '']
    if (y) f.yoke = [y]
    if (a) f.action = [a]
    return f
  },
}

export default function MHDModelsPage() {
  return <ModelList def={DEF} />
}
