// HLDA models, shared by the model list and the per-model product pages.
// Every figure is from the hydraulic data sheet; see ../hldaData.
import type { Item } from '@/src/app/pneumatic/actuators/_series/modelTypes'
import { HLDA_MODELS, HLDA_COMMON, HLDA_MATERIALS, HLDA_IMAGE, PRESSURES, PSI } from '../hldaData'

const n = (v: number) => v.toLocaleString('en-GB')
const COMMON = HLDA_COMMON.filter((c) => !['Type', 'Versions', 'Hydraulic Cylinder', 'Piston Rod', 'Seals / O-rings', 'Yoke Bushing', 'Tie Rod'].includes(c.label))
  .map((c) => [c.label.charAt(0) + c.label.slice(1).toLowerCase(), c.value] as [string, string])
const materials = HLDA_MATERIALS.map(([k, v]) => [`Material: ${k.toLowerCase()}`, v] as [string, string])

const RAW: Item[] = HLDA_MODELS.map((m, i) => {
  const [t100, t130, t160] = m.kN
  return {
    id: m.model,
    model: m.model,
    sub: `${m.boreMm} mm bore · also E${m.model}`,
    image: HLDA_IMAGE,
    cells: [
      `${m.boreMm} mm`,
      { text: `Up to ${n(t160[0])} kN`, pill: 'green' },
      `${n(t100[0])} / ${n(t100[1])} kN`,
      `${n(t160[0])} / ${n(t160[1])} kN`,
    ],
    facets: {},
    sort: { model: i, thrust: t160[0], bore: m.boreMm },
    search: `${m.model} E${m.model} ${m.boreMm} mm bore linear piston hydraulic double acting ${t100[0]} ${t160[0]} kN`,
    brief: [
      ['Close / open at 100 bar', `${n(t100[0])} / ${n(t100[1])} kN`],
      ['Close / open at 130 bar', `${n(t130[0])} / ${n(t130[1])} kN`],
      ['Close / open at 160 bar', `${n(t160[0])} / ${n(t160[1])} kN`],
    ],
    specs: [
      ['Type', 'Linear piston, double acting: oil closes and opens'],
      ['Thrust at 160 bar, close / open', `${n(t160[0])} / ${n(t160[1])} kN`],
      ['Thrust at 130 bar, close / open', `${n(t130[0])} / ${n(t130[1])} kN`],
      ['Thrust at 100 bar, close / open', `${n(t100[0])} / ${n(t100[1])} kN`],
      ['Cylinder bore', `${m.boreMm} mm`],
      ['Electro-hydraulic version', `E${m.model}`],
      ...COMMON,
      ...materials,
    ],
    table: {
      title: 'Thrust output',
      head: ['Pressure', 'Close, kN', 'Open, kN', 'Close, lbf', 'Open, lbf'],
      rows: PRESSURES.map((p, k) => [`${p} bar (${PSI[p]})`, n(m.kN[k][0]), n(m.kN[k][1]), n(m.lbf[k][0]), n(m.lbf[k][1])]),
    },
    note: 'Thrust from Susin I-Tork’s linear piston table. Closing uses the full piston area, opening the rod side, so the closing thrust is higher. Send us the valve thrust, stroke and supply pressure and we’ll confirm the size.',
    rfq: {
      id: `hlda-${m.model.toLowerCase()}`,
      name: `${m.model} linear piston hydraulic actuator`,
      brand: 'Susin',
      category: 'Hydraulic Actuators',
      categoryId: 'hydraulic-actuators',
      subCategory: 'Linear Piston',
      thumbnail: HLDA_IMAGE,
      description: `${m.model} (E${m.model}) double acting linear piston hydraulic actuator, ${m.boreMm} mm bore, up to ${n(t160[0])} kN closing thrust at 160 bar.`,
      keySpecs: [
        { label: 'Bore', value: `${m.boreMm} mm` },
        { label: 'At 100 bar', value: `${n(t100[0])} / ${n(t100[1])} kN` },
        { label: 'At 160 bar', value: `${n(t160[0])} / ${n(t160[1])} kN` },
        { label: 'Pressure', value: 'Up to 200 bar' },
      ],
      variantInfo: { count: 1, sizeRange: m.model },
    },
  }
})

export const HLDA_PRODUCTS = '/actuators/hydraulic/hlda/products'
export const ITEMS: Item[] = RAW.map((i) => ({ ...i, tag: 'Hydraulic linear piston', slug: i.model, href: `${HLDA_PRODUCTS}/${i.model}` }))
