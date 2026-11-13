// MAW models, shared by the model list and the per-model product pages.
// Every figure is from the Susin I-Tork MAW catalogue; see ../mawData.
import type { Item } from '@/src/app/pneumatic/actuators/_series/modelTypes'
import { STAGE_LABEL } from '@/src/app/pneumatic/actuators/_series/gearTypes'
import { MAW_MODELS, MAW_COMMON, MAW_IMAGE, MAW_REDUCTION } from '../mawData'

const nm = (n: number) => n.toLocaleString('en-GB')
const kgN = (kg: number) => `${kg} kg (≈ ${nm(Math.round(kg * 9.81))} N)`
const v = (x: number | null) => (x === null ? 'Not listed' : String(x))

const RAW_ITEMS: Item[] = MAW_MODELS.map((m, i) => {
  const d = m.dims
  const img = m.stage === 'Standard' ? MAW_IMAGE : MAW_REDUCTION
  return {
    id: m.model,
    model: m.model,
    sub: `${STAGE_LABEL[m.stage].replace(/ \(.+\)/, '')} · ${m.ratio}`,
    image: img,
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
    search: `${m.model} ${m.model.replace(/-/g, ' ')} ${m.size} ${m.torqueNm} Nm ${m.flange} ISO 5211 worm gear quarter-turn ball butterfly plug ${m.stage}`,
    brief: [
      ['Mechanical advantage', `${m.ma} (±10%)`],
      ['Handwheel', `Ø ${m.handwheel} mm`],
      ['ISO 5211 option', m.flangeOpt],
    ],
    specs: [
      ['Max output torque', `${nm(m.torqueNm)} Nm`],
      ['Gear ratio', m.ratio],
      ['Mechanical advantage', `${m.ma} (±10%)`],
      ['Handwheel turns for 90°', String(m.turns)],
      ['Gearing', STAGE_LABEL[m.stage]],
      ['ISO 5211 flange', `${m.flange} standard, ${m.flangeOpt} option`],
      ['Recommended handwheel', `Ø ${m.handwheel} mm`],
      ['Rim pull at max torque', kgN(m.rimKg)],
      ['Weight', `${m.weightKg} kg (approx.)`],
      ...MAW_COMMON,
    ],
    table: {
      title: 'Dimensions, mm',
      head: ['Part', 'Dimension', 'Value'],
      rows: [
        ['Base', 'ØD1', v(d.d1)],
        ['Base', `PCD, ${m.flange} (standard)`, String(d.pcd)],
        ['Base', `PCD, ${m.flangeOpt} (option)`, String(d.optPcd)],
        ['Base', 'H', v(d.h)],
        ['Body', 'H1', String(d.h1)],
        ['Body', 'H2', String(d.h2)],
        ['Body', 'K (max stem height)', String(d.k)],
        ['Body', 'K1', String(d.k1)],
        ['Body', 'K3', String(d.k3)],
        ['Body', 'L', String(d.l)],
        ['Input shaft', 'L1', String(d.l1)],
        ['Input shaft', 'L2', String(d.l2)],
        ['Input shaft', 'ØPD / □SQ', d.pd],
        ['Handwheel', 'ØM', String(d.m)],
      ],
    },
    note: `Dimensions from Susin I-Tork’s ${m.stage === 'Standard' ? 'general' : m.stage === '1S' ? 'single stage helical reduction' : 'double stage helical reduction'} drawing; letters as on the catalogue drawing. Rim pull is Susin I-Tork’s figure at full output torque on the recommended handwheel. Send us the valve torque and flange and we’ll confirm the model.`,
    rfq: {
      id: `maw-${m.model.toLowerCase()}`,
      name: `${m.model} worm gear actuator`,
      brand: 'Susin',
      category: 'Mechanical Actuators',
      categoryId: 'mechanical-actuators',
      subCategory: 'MAW Series',
      thumbnail: img,
      description: `${m.model} quarter-turn worm gear actuator, ${nm(m.torqueNm)} Nm, ratio ${m.ratio}, ${m.turns} turns for 90°, ISO 5211 ${m.flange}.`,
      keySpecs: [
        { label: 'Torque', value: `${nm(m.torqueNm)} Nm` },
        { label: 'Ratio', value: m.ratio },
        { label: 'Turns', value: String(m.turns) },
        { label: 'Flange', value: `ISO 5211 ${m.flange}` },
      ],
      variantInfo: { count: 1, sizeRange: m.model },
    },
  }
})

// One product page per model: /actuators/mechanical/maw/products/<slug>
export const MAW_PRODUCTS = '/actuators/mechanical/maw/products'
export const ITEMS: Item[] = RAW_ITEMS.map((i) => ({ ...i, tag: 'Worm gear', slug: i.model, href: `${MAW_PRODUCTS}/${i.model}` }))
