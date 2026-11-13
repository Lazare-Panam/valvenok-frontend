'use client'

// HD model list ("View all models"): Susin's ISD, ICD, ISR and ICR series.
import ModelList, { type ListDef } from '../../_series/ModelList'
import { HD_CATALOG, HD_BODIES } from '../hdData'
import { ITEMS } from './items'

const DEF: ListDef = {
  title: 'HD heavy-duty actuator models',
  intro: `${ITEMS.length} Susin HD heavy-duty scotch yoke actuators in four series: ISD and ICD double acting, ISR and ICR spring return, with a symmetric (IS) or canted (IC) yoke. Open any model for its full torque table, then request a quote.`,
  back: { href: '/pneumatic/actuators/hd', label: 'HD series overview' },
  catalog: { href: HD_CATALOG, label: 'IS & IC catalogue (PDF)' },
  columns: ['Series', 'Start torque, 5.5 bar', 'Air torque', 'Spring torque', 'Body'],
  facets: [
    { key: 'series', title: 'Series', options: ['ISD', 'ICD', 'ISR', 'ICR'] },
    { key: 'body', title: 'Body size', options: HD_BODIES },
    { key: 'yoke', title: 'Yoke', options: ['Symmetric', 'Canted'] },
    { key: 'action', title: 'Action', options: ['Double acting', 'Spring return'] },
  ],
  sorts: [{ key: 'model', label: 'Series' }, { key: 'body', label: 'Body size' }, { key: 'torque', label: 'Max torque', desc: true }],
  placeholder: 'Search model, e.g. ISD 03-38 or ICR 05',
  items: ITEMS,
  fromParams: (sp): Record<string, string[]> => {
    const out: Record<string, string[]> = {}
    const s = sp.get('series'); if (s) out.series = [s]
    const b = sp.get('body'); if (b) out.body = [b]
    return out
  },
}

export default function HDModelsPage() {
  return <ModelList def={DEF} />
}
