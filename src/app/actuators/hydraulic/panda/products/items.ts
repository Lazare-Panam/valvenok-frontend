// PANDA models, shared by the model list and the per-model product pages.
// Every figure is from Susin I-Tork's PANDA / PA brochure; see ../pandaData.
import type { Item } from '@/src/app/pneumatic/actuators/_series/modelTypes'
import { PANDA_MODELS, PANDA_COMMON, PANDA_IMAGE } from '../pandaData'

const nm = (n: number) => n.toLocaleString('en-GB')
const pair = (p?: [number, number]) => (p ? `${nm(p[0])} / ${nm(p[1])} Nm` : 'On request')

const RAW_ITEMS: Item[] = PANDA_MODELS.map((m, i) => {
  const d = m.dims
  const da = m.kind === 'Double acting'
  const head = da ? `${nm(m.torqueNm!)} Nm` : m.open ? `${nm(m.open[0])} Nm` : 'On request'
  const dimSpecs: [string, string][] = d
    ? [
        ['Dimensions A × B × C', `${d.a} × ${d.b} × ${d.c} mm`],
        ['ISO 5211 flange', d.flange],
        ['Valve connection (SW × depth)', d.conn],
        ['Oil volume', `${d.oilL} L`],
      ]
    : [['Dimensions', 'On request (Susin I-Tork lists dimensions for the smaller sizes only)']]
  return {
    id: m.model,
    model: m.model,
    sub: m.kind,
    image: PANDA_IMAGE,
    cells: [
      { text: head, pill: 'green' },
      da ? 'No spring, oil closes' : pair(m.close),
      d ? d.flange : 'On request',
      d ? `${d.a} × ${d.b} × ${d.c}` : 'On request',
      d ? `${d.oilL} L` : 'On request',
    ],
    facets: { kind: m.kind },
    sort: { model: i, torque: m.torqueNm ?? 0 },
    search: `${m.model} ${m.code} ${m.kind} ${m.torqueNm ?? ''} Nm electro-hydraulic part-turn low pressure ${d?.flange ?? ''}`,
    brief: da
      ? [['Torque, open / close', `${nm(m.torqueNm!)} Nm`], ['Flange', d?.flange ?? 'On request']]
      : [['Open (oil), start / end', pair(m.open)], ['Close (spring), start / end', pair(m.close)]],
    specs: [
      ['Type', m.kind === 'Double acting' ? 'Double acting: hydraulic open and close' : 'Single acting, spring return: oil opens, spring closes'],
      ...(da
        ? ([['Torque, open / close 0° / 90°', `${nm(m.torqueNm!)} Nm`]] as [string, string][])
        : ([
            ['Open, hydraulic 0° → 90° (start / end)', pair(m.open)],
            ['Close, spring 90° → 0° (start / end)', pair(m.close)],
          ] as [string, string][])),
      ...dimSpecs,
      ...PANDA_COMMON,
    ],
    note:
      m.code === 'E40'
        ? 'Figures as printed in the KTC catalogue (the same as the E20); we confirm torque with every quote.'
        : 'Torque from Susin I-Tork’s product selection table; modulating actuators may differ from the listed dimensions. Send us the valve torque, flange and connection and we’ll confirm the model and order code.',
    rfq: {
      id: `panda-${m.code.toLowerCase()}`,
      name: `${m.model} electro-hydraulic actuator`,
      brand: 'Susin',
      category: 'Hydraulic Actuators',
      categoryId: 'hydraulic-actuators',
      subCategory: 'PANDA Series',
      thumbnail: PANDA_IMAGE,
      description: `${m.model} low pressure electro-hydraulic part-turn actuator, ${m.kind.toLowerCase()}, ${head}, max 8 bar on board.`,
      keySpecs: [
        { label: 'Type', value: m.kind },
        { label: da ? 'Torque' : 'Open torque', value: head },
        ...(da ? [] : [{ label: 'Spring close', value: pair(m.close) }]),
        { label: 'Pressure', value: 'Max 8 bar on board' },
      ],
      variantInfo: { count: 1, sizeRange: m.model },
    },
  }
})

// One product page per model: /actuators/hydraulic/panda/products/<slug>
export const PANDA_PRODUCTS = '/actuators/hydraulic/panda/products'
export const ITEMS: Item[] = RAW_ITEMS.map((i) => {
  const slug = i.model.replace(/\s+/g, '-')
  return { ...i, tag: 'Electro-hydraulic', slug, href: `${PANDA_PRODUCTS}/${slug}` }
})
