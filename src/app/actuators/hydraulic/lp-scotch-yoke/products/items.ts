// LP-HD / LP-HS models, shared by the model list and the per-model product pages.
// Every figure is from the Hydraulic Low Pressure Catalogue; see ../lpData.
import type { Item } from '@/src/app/pneumatic/actuators/_series/modelTypes'
import { LP_MODELS, LP_COMMON, LP_IMAGE, LP_IMAGE_NC, LP_IMAGE_NO, FLANGE, STROKE, maxTorque } from '../lpData'

const nm = (n: number) => n.toLocaleString('en-GB', { maximumFractionDigits: 2 })
const trio = (a: number[]) => `${a.map(nm).join(' / ')} Nm`
const SHORT: Record<string, string> = { 'Double acting': 'Double acting', 'Spring return, normally closed': 'Spring return NC', 'Spring return, normally open': 'Spring return NO' }

const RAW: Item[] = LP_MODELS.map((m, i) => {
  const img = m.kind === 'Double acting' ? LP_IMAGE : m.kind.endsWith('closed') ? LP_IMAGE_NC : LP_IMAGE_NO
  const f = FLANGE[m.size]
  const times = STROKE[m.size].map(([, s]) => s)
  const typeText = m.kind === 'Double acting'
    ? 'Double acting: the pump drives the valve open and closed'
    : m.kind.endsWith('closed')
      ? 'Spring return, normally closed (fail close)'
      : 'Spring return, normally open (fail open)'
  return {
    id: m.slug,
    model: m.code,
    sub: `${m.kind} · size ${m.size}`,
    image: img,
    cells: [
      { text: SHORT[m.kind], pill: 'grey' },
      { text: `Up to ${nm(maxTorque(m))} Nm`, pill: 'green' },
      String(m.size),
      f.flange,
      `${nm(Math.min(...times))} – ${nm(Math.max(...times))} s`,
    ],
    facets: { kind: m.kind, size: String(m.size), series: m.kind === 'Double acting' ? 'LP-HD double acting' : 'LP-HS spring return' },
    sort: { model: i, torque: maxTorque(m), size: m.size },
    search: `${m.code} ${m.slug} ${m.kind} low pressure electro-hydraulic scotch yoke ${m.size} ${f.flange}`,
    brief: m.da
      ? [['Torque at 0° / 45° / 90°', trio(m.da)], ['ISO 5211', f.flange], ['Stroking time', `${nm(Math.min(...times))} – ${nm(Math.max(...times))} s by HPU`]]
      : [['Stroke 0° → 90° (0° / 55° / 90°)', trio(m.out!)], ['Stroke 90° → 0° (90° / 35° / 0°)', trio(m.back!)], ['ISO 5211', f.flange]],
    specs: [
      ['Type', typeText],
      ...(m.da
        ? ([['Torque at 0° / 45° / 90°', trio(m.da)]] as [string, string][])
        : ([['Stroke 0° → 90°, at 0° / 55° / 90°', trio(m.out!)], ['Stroke 90° → 0°, at 90° / 35° / 0°', trio(m.back!)]] as [string, string][])),
      ['ISO 5211 flange', f.flange],
      ['Flange PCD', `${f.pcd} mm`],
      ['Stroking time', STROKE[m.size].map(([h, s]) => `${nm(s)} s (HPU ${h})`).join(', ')],
      ...LP_COMMON,
    ],
    table: {
      title: 'Torque output, Nm',
      head: m.da ? ['Angle', '0°', '45°', '90°'] : ['Stroke', 'Start', 'Mid', 'End'],
      rows: m.da
        ? [['Torque', ...m.da.map(nm)]]
        : [['0° → 90° (0°, 55°, 90°)', ...m.out!.map(nm)], ['90° → 0° (90°, 35°, 0°)', ...m.back!.map(nm)]],
    },
    note: m.da
      ? 'Torque from the double acting LP-HD table in the Hydraulic Low Pressure Catalogue. Stroking time depends on the hydraulic power unit (HPU) chosen; columns as in the catalogue’s HPU selection table.'
      : 'Torque from the single acting LP-HS table in the Hydraulic Low Pressure Catalogue, for each direction of the stroke. Normally closed: the pump opens the valve and the spring closes it. Normally open: the other way round.',
    rfq: {
      id: `lp-${m.slug.toLowerCase()}`,
      name: `${m.code} low-pressure electro-hydraulic scotch yoke actuator`,
      brand: 'Susin',
      category: 'Hydraulic Actuators',
      categoryId: 'hydraulic-actuators',
      subCategory: 'LP-HD / LP-HS Series',
      thumbnail: img,
      description: `${m.code} ${m.kind.toLowerCase()} low-pressure electro-hydraulic scotch yoke actuator, up to ${nm(maxTorque(m))} Nm, 8 bar on board, ISO 5211 ${f.flange}.`,
      keySpecs: [
        { label: 'Type', value: SHORT[m.kind] },
        { label: 'Max torque', value: `${nm(maxTorque(m))} Nm` },
        { label: 'ISO 5211', value: f.flange },
        { label: 'Pressure', value: '8 bar on board' },
      ],
      variantInfo: { count: 1, sizeRange: m.code },
    },
  }
})

export const LP_PRODUCTS = '/actuators/hydraulic/lp-scotch-yoke/products'
export const ITEMS: Item[] = RAW.map((i) => ({ ...i, tag: 'Low-pressure electro-hydraulic', slug: i.id, href: `${LP_PRODUCTS}/${i.id}` }))
