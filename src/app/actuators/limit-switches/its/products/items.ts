// ITS models, shared by the model list and the per-model product pages.
// Every figure is from Susin I-Tork's ITS catalogue; see ../itsData.
import type { Item } from '@/src/app/pneumatic/actuators/_series/modelTypes'
import { ITS_MODELS, ITS_COMMON, ITS_MATERIALS, ITS_IMAGE, SWITCH_OPTIONS, CABLE_ENTRIES } from '../itsData'

const BADGE: Record<string, string> = { 'ITS 200': 'IP67', 'ITS 400': 'Ex d IIC T6', 'ITS 500': 'Ex d IIC T6, stainless' }
const materials = ITS_MATERIALS.map(([k, v]) => [`Material: ${k.toLowerCase()}`, v] as [string, string])

const RAW: Item[] = ITS_MODELS.map((m, i) => {
  const all = m.digit === '2'
  const sw = SWITCH_OPTIONS.filter((o) => all ? o.all : true)
  const ce = CABLE_ENTRIES.filter((c) => all ? c.all : true)
  return {
    id: m.slug,
    model: m.model,
    sub: `${m.kind} · ${m.housing.toLowerCase()}`,
    image: ITS_IMAGE,
    cells: [
      { text: m.kind, pill: 'grey' },
      { text: BADGE[m.model], pill: 'green' },
      m.housing,
      `${sw.length} options`,
      `${ce.length} threads`,
    ],
    facets: {},
    sort: { model: i },
    search: `${m.model} ${m.slug} ${m.kind} limit switch box position monitoring ${m.enclosure} ${m.housing} NAMUR`,
    brief: [
      ['Enclosure', m.enclosure],
      ['Housing', m.housing],
      ['Cable entries', m.cable],
    ],
    specs: [
      ['Type', `${m.kind} position monitoring switch box`],
      ['Enclosure', m.enclosureOpt ? `${m.enclosure} (option ${m.enclosureOpt})` : m.enclosure],
      ['Housing', m.housing],
      ['Coating', m.coatingOpt ? `${m.coating} (option ${m.coatingOpt.toLowerCase()})` : m.coating],
      ['Ambient temperature', m.tempOpt ? `${m.temp} (option ${m.tempOpt.charAt(0).toLowerCase() + m.tempOpt.slice(1)})` : m.temp],
      ['Cable entries', m.cable],
      ['Switches', all ? '2 × SPDT mechanical (Form C) standard; 3 or 4 × SPDT, SPST, DPDT or proximity sensors as options' : '2 × SPDT mechanical (Form C) standard; DPDT, proximity sensors, magnetic sensors or a position transmitter (0 – 1 kΩ, 4 – 20 mA) as options'],
      ...(m.dims ? ([['Dimensions (W × H × D)', `${m.dims.width} × ${m.dims.height} × ${m.dims.depth} mm`], ['Mounting holes', `${m.dims.mount} mm`]] as [string, string][]) : []),
      ...ITS_COMMON,
      ...materials,
    ],
    configurator: {
      title: `Build your ${m.model} model number`,
      prefix: `ITS ${m.digit}`,
      steps: [
        { label: 'Switches', options: sw.map((o) => ({ code: o.code, text: o.text, group: o.group })) },
        { label: 'Cable entry', options: ce.map((c) => ({ code: c.code, text: c.text })) },
      ],
      note: `Options from Susin I-Tork’s ITS catalogue (p.8)${all ? '; position outputs and the 3/4" and M25 entries are for the ITS 400 and 500 only' : ''}. Tell us the actuator and the area classification with your quote and we’ll confirm the build.`,
    },
    rfq: {
      id: `its-${m.digit}00`,
      name: `${m.model} limit switch box`,
      brand: 'Susin',
      category: 'Limit Switch Boxes',
      categoryId: 'limit-switches',
      subCategory: 'Limit Switch Boxes',
      thumbnail: ITS_IMAGE,
      description: `${m.model} ${m.kind.toLowerCase()} position monitoring switch box: ${m.enclosure}, ${m.housing.toLowerCase()}, dome indicator 0 – 90°.`,
      keySpecs: [
        { label: 'Enclosure', value: BADGE[m.model] },
        { label: 'Housing', value: m.housing },
        { label: 'Switches', value: '2 × SPDT standard' },
        { label: 'Temperature', value: m.temp.replace('As ITS 400: ', '') },
      ],
      variantInfo: { count: 1, sizeRange: m.model },
    },
  }
})

export const ITS_PRODUCTS = '/actuators/limit-switches/its/products'
export const ITEMS: Item[] = RAW.map((i) => ({ ...i, tag: 'Limit switch box', slug: i.id, href: `${ITS_PRODUCTS}/${i.id}` }))
