// PA-HX models, shared by the model list and the per-model product pages.
// Every figure is from the hydraulic data sheet; see ../paHxData.
import type { Item } from '@/src/app/pneumatic/actuators/_series/modelTypes'
import { PAHX_MODELS, PAHX_COMMON, PAHX_IMAGE, TORQUE_LABEL } from '../paHxData'

const nm = (n: number) => n.toLocaleString('en-GB')

const RAW: Item[] = PAHX_MODELS.map((m, i) => {
  const tl = TORQUE_LABEL[m.kind]
  return {
    id: m.model,
    model: m.model,
    sub: m.kind,
    image: PAHX_IMAGE,
    cells: [
      { text: m.kind, pill: 'grey' },
      { text: `${nm(m.torqueNm)} Nm`, pill: 'green' },
      m.flange,
      `${m.weightKg} kg`,
      `${m.oilL} L`,
    ],
    facets: { kind: m.kind },
    sort: { model: i, torque: m.torqueNm, weight: m.weightKg },
    search: `${m.model} ${m.code} ${m.kind} ${m.torqueNm} Nm hydraulic rack pinion ${m.flange}`,
    brief: [[tl, `${nm(m.torqueNm)} Nm`], ['ISO 5211', m.flange], ['Dimensions A × B × C', `${m.a} × ${m.b} × ${m.c} mm`]],
    specs: [
      ['Type', m.kind === 'Double acting' ? 'Double acting: hydraulic open and close' : m.kind === 'Spring to close' ? 'Single acting, spring to close (fail closed)' : 'Single acting, spring to open (fail open)'],
      [tl, `${nm(m.torqueNm)} Nm`],
      ['ISO 5211 flange', m.flange],
      ['Dimensions A × B × C', `${m.a} × ${m.b} × ${m.c} mm`],
      ['Max shaft D: 4KtP / 4KtD / 2Fl / Ws-Wd', `${m.shaft.join(' / ')} mm`],
      ...(m.box ? ([['Switch box interface a/b/c/d', m.box]] as [string, string][]) : []),
      ['Weight', `${m.weightKg} kg`],
      ['Oil volume', `${m.oilL} L`],
      ...PAHX_COMMON,
    ],
    note: `${tl} from the data sheet${m.kind === 'Double acting' ? '; working pressure 80 to 160 bar' : ''}. Send us the valve torque, flange and the fail position you need and we’ll confirm the model.`,
    rfq: {
      id: `pa-hx-${m.code.toLowerCase()}`,
      name: `${m.model} hydraulic rack and pinion actuator`,
      brand: 'Susin',
      category: 'Hydraulic Actuators',
      categoryId: 'hydraulic-actuators',
      subCategory: 'PA-HX Series',
      thumbnail: PAHX_IMAGE,
      description: `${m.model} hydraulic rack and pinion part-turn actuator, ${m.kind.toLowerCase()}, ${nm(m.torqueNm)} Nm, ISO 5211 ${m.flange}.`,
      keySpecs: [
        { label: 'Type', value: m.kind },
        { label: tl, value: `${nm(m.torqueNm)} Nm` },
        { label: 'Flange', value: m.flange },
        { label: 'Pressure', value: '80 – 160 bar' },
      ],
      variantInfo: { count: 1, sizeRange: m.model },
    },
  }
})

export const PAHX_PRODUCTS = '/actuators/hydraulic/pa-hx/products'
export const ITEMS: Item[] = RAW.map((i) => {
  const slug = i.model.replace(/\s+/g, '-')
  return { ...i, tag: 'Hydraulic rack & pinion', slug, href: `${PAHX_PRODUCTS}/${slug}` }
})
