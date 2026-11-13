// HD models in Susin's four series (ISD, ICD, ISR, ICR), shared by the model
// list and the per-model product pages. Figures from ../hdData.
import type { Item } from '../../_series/modelTypes'
import { HD_MODELS, HD_COMMON, HD_IMAGE, PRESSURES, seriesOf, maxTorque, springEnd, type HdModel } from '../hdData'

const nm = (n: number) => n.toLocaleString('en-GB')
const trio = (t: [number, number, number]) => t.map(nm).join(' / ')
const DIM = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

const table = (m: HdModel): Item['table'] =>
  m.da
    ? {
        title: 'Torque by air pressure, Nm (start / run / end)',
        head: ['Air supply', 'Start', 'Run', 'End'],
        rows: m.da.map((t, k) => [`${PRESSURES[k]} bar`, nm(t[0]), nm(t[1]), nm(t[2])]),
      }
    : {
        title: 'Spring and air torque, Nm (start / run / end)',
        head: ['Spring set', 'Torque', 'Start', 'Run', 'End'],
        rows: m.sr!.flatMap((s) => [
          [`${s.set} bar spring`, 'Spring', nm(s.spring[0]), nm(s.spring[1]), nm(s.spring[2])],
          ...s.air.map((a) => [`${s.set} bar spring`, `Air at ${a.bar} bar`, nm(a.t[0]), nm(a.t[1]), nm(a.t[2])]),
        ]),
      }

const RAW: Item[] = HD_MODELS.map((m, i) => {
  const S = seriesOf(m.series)
  const max = maxTorque(m)
  const head = m.da ? `${nm(m.da[2][0])} Nm` : `${nm(m.sr![1].air[1].t[0])} Nm`
  return {
    id: m.model,
    model: m.model,
    sub: `${S.yoke} · ${S.action.toLowerCase()}`,
    image: HD_IMAGE,
    cells: [
      { text: m.series, pill: 'grey' },
      { text: head, pill: 'green' },
      m.da ? `${nm(m.da[0][1])} – ${nm(max)} Nm` : `Up to ${nm(max)} Nm`,
      m.sr ? `${nm(springEnd(m))} – ${nm(Math.max(...m.sr.map((s) => s.spring[0])))} Nm` : 'No spring, air closes',
      `Body ${m.body}`,
    ],
    facets: { series: m.series, body: m.body, yoke: S.yoke, action: S.action },
    sort: { model: i, torque: max, body: `${m.body}-${m.cylinder}` },
    search: `${m.model} ${m.model.replace(' ', '')} ${m.series} ${S.yoke} ${S.action} body ${m.body} cylinder ${m.cylinder} HD scotch yoke`,
    brief: m.da
      ? [['Start torque at 5.5 bar', `${nm(m.da[2][0])} Nm`], ['End torque at 5.5 bar', `${nm(m.da[2][2])} Nm`]]
      : [['Spring end torque, 4.2 / 5.5 bar sets', `${nm(m.sr![0].spring[2])} / ${nm(m.sr![1].spring[2])} Nm`], ['Air start, 5.5 bar on 5.5 bar spring', `${nm(m.sr![1].air[1].t[0])} Nm`]],
    specs: [
      ['Series', `${m.series}: ${S.yoke.toLowerCase()} yoke, ${S.action.toLowerCase()}`],
      ['Body size', m.body],
      ['Cylinder', m.cylinder],
      ...(m.da
        ? (PRESSURES.map((p, k) => [`Torque at ${p} bar, start / run / end`, `${trio(m.da![k])} Nm`]) as [string, string][])
        : (m.sr!.map((s) => [`Spring torque, ${s.set} bar set, start / run / end`, `${trio(s.spring)} Nm`]) as [string, string][])),
      ...(m.sr ? ([['Fail action', 'Fail closed or fail open']] as [string, string][]) : []),
      ['Dimensions A – G', `${m.dims.map((v, k) => `${DIM[k]} ${v}`).join(', ')} mm`],
      ...HD_COMMON,
    ],
    table: table(m),
    note: m.sr
      ? 'Each spring return model comes with a 4.2 or a 5.5 bar spring set. The 4.2 bar set is listed with air at 2.8, 4.2 and 5.5 bar, the 5.5 bar set with air at 4.2, 5.5 and 7 bar, as in Susin’s catalogue. Dimensions as on the catalogue drawing.'
      : 'Torque at the start, run and end of the 90° stroke, from Susin’s technical data. Dimensions as on the catalogue drawing. Tell us the valve torque and air supply and we’ll confirm the model.',
    rfq: {
      id: `hd-${m.model.replace(' ', '-').toLowerCase()}`,
      name: `${m.model} heavy-duty scotch yoke actuator`,
      brand: 'Susin',
      category: 'Pneumatic Actuators',
      categoryId: 'pneumatic-actuators',
      subCategory: `HD ${m.series} Series`,
      thumbnail: HD_IMAGE,
      description: `${m.model} heavy-duty scotch yoke actuator, ${S.yoke.toLowerCase()} yoke, ${S.action.toLowerCase()}, up to ${nm(max)} Nm.`,
      keySpecs: [
        { label: 'Series', value: m.series },
        { label: 'Action', value: S.action },
        { label: 'Max torque', value: `${nm(max)} Nm` },
        { label: 'Body size', value: m.body },
      ],
      variantInfo: { count: 1, sizeRange: m.model },
    },
  }
})

export const HD_PRODUCTS = '/pneumatic/actuators/hd/products'
export const ITEMS: Item[] = RAW.map((i) => {
  const slug = i.model.replace(/\s+/g, '-')
  return { ...i, tag: 'Heavy-duty scotch yoke', slug, href: `${HD_PRODUCTS}/${slug}` }
})
