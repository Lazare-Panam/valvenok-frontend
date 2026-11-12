// ITG models, shared by the model list and the per-model product pages.
// Every figure is from the Susin ITG catalogue; see ../itgData.
import type { Item } from '@/src/app/pneumatic/actuators/_series/modelTypes'
import { STAGE_LABEL } from '@/src/app/pneumatic/actuators/_series/gearTypes'
import { ITG_MODELS, ITG_COMMON, ITG_IMAGE } from '../itgData'

const nm = (n: number) => n.toLocaleString('en-GB')
const kgN = (kg: number) => `${kg} kg (≈ ${nm(Math.round(kg * 9.81))} N)`
const v = (x: number | null) => (x === null ? 'Not listed' : String(x))

const RAW_ITEMS: Item[] = ITG_MODELS.map((m, i) => {
  const d = m.dims
  const act = m.actFlangeOpt ? `${m.actFlange} standard, ${m.actFlangeOpt} option` : m.actFlange
  return {
    id: m.model,
    model: m.model,
    sub: `${STAGE_LABEL[m.stage].replace(/ \(.+\)/, '')} · ${m.ratio}`,
    image: ITG_IMAGE,
    cells: [
      { text: `${nm(m.torqueNm)} Nm`, pill: 'green' },
      m.ratio,
      String(m.turns),
      `${m.rimKg} kg`,
      m.flange,
      `${m.weightKg} kg`,
    ],
    facets: { stage: STAGE_LABEL[m.stage], size: m.size, mount: m.flange },
    sort: { model: i, torque: m.torqueNm, rim: m.rimKg, weight: m.weightKg },
    search: `${m.model} ${m.model.replace(/-/g, ' ')} ${m.size} ${m.torqueNm} Nm ${m.flange} ISO 5211 declutchable worm gear manual override pneumatic actuator ${m.stage}`,
    brief: [
      ['Actuator flange', act],
      ['Handwheel', `Ø ${m.handwheel} mm`],
      ['Mechanical advantage', `${m.ma} (±10%)`],
    ],
    specs: [
      ['Max output torque', `${nm(m.torqueNm)} Nm (${nm(m.torqueLbft)} ft·lb)`],
      ['Gear ratio', m.ratio],
      ['Mechanical advantage', `${m.ma} (±10%)`],
      ['Handwheel turns for 90°', String(m.turns)],
      ['Gearing', STAGE_LABEL[m.stage]],
      ['Valve flange, ISO 5211', `${m.flange} standard, ${m.flangeOpt} option`],
      ['Actuator flange, ISO 5211', act],
      ['Recommended handwheel', `Ø ${m.handwheel} mm (can be customised)`],
      ['Rim pull at max torque', kgN(m.rimKg)],
      ['Weight', `${m.weightKg} kg (approx.)`],
      ...ITG_COMMON,
    ],
    table: {
      title: 'Dimensions, mm',
      head: ['Part', 'Dimension', 'Value'],
      rows: [
        ['Flanges', 'Bolt pattern', `Type ${d.type}`],
        ['Flanges', 'PCD, valve and actuator', String(d.pcd)],
        ['Body', 'L', String(d.l)],
        ['Body', 'L1*', String(d.l1)],
        ['Body', 'L2', String(d.l2)],
        ['Body', 'L3*', String(d.l3)],
        ['Body', 'L4*', String(d.l4)],
        ['Body', 'L5', String(d.l5)],
        ['Body', 'H1', String(d.h1)],
        ['Body', 'H2', String(d.h2)],
        ['Body', 'H3', String(d.h3)],
        ['Body', 'H4', String(d.h4)],
        ['Body', 'H5', v(d.h5)],
        ['Drive', 'S* (bore)', d.s],
        ['Drive', 'D1', v(d.d1)],
        ['Drive', 'D2', v(d.d2)],
        ['Handwheel', 'D3', String(d.d3)],
        ['Handwheel', 'D4*', String(d.d4)],
      ],
    },
    note: `Dimensions from Susin’s ${m.stage === 'Standard' ? 'general' : m.stage === '1S' ? 'single stage helical reduction' : 'double stage helical reduction'} drawing; letters as on the drawing. * L1, L3, L4, S and D4 are customised to the order, the rest are standard. Rim pull is Susin’s figure at full output torque on the recommended handwheel. Send us the valve and actuator flanges and the torque and we’ll confirm the model.`,
    rfq: {
      id: `itg-${m.model.toLowerCase()}`,
      name: `${m.model} declutchable worm gear`,
      brand: 'Susin',
      category: 'Mechanical Actuators',
      categoryId: 'mechanical-actuators',
      subCategory: 'ITG Series',
      thumbnail: ITG_IMAGE,
      description: `${m.model} declutchable worm gear manual override, ${nm(m.torqueNm)} Nm, ratio ${m.ratio}, ${m.turns} turns for 90°, ISO 5211 ${m.flange}.`,
      keySpecs: [
        { label: 'Torque', value: `${nm(m.torqueNm)} Nm` },
        { label: 'Ratio', value: m.ratio },
        { label: 'Valve flange', value: `ISO 5211 ${m.flange}` },
        { label: 'Actuator flange', value: `ISO 5211 ${m.actFlange}` },
      ],
      variantInfo: { count: 1, sizeRange: m.model },
    },
  }
})

// One product page per model: /actuators/mechanical/itg/products/<slug>
export const ITG_PRODUCTS = '/actuators/mechanical/itg/products'
export const ITEMS: Item[] = RAW_ITEMS.map((i) => ({ ...i, tag: 'Declutchable gear', slug: i.model, href: `${ITG_PRODUCTS}/${i.model}` }))
