// MAB models, shared by the model list and the per-model product pages.
// Every figure is from the Susin I-Tork MAB catalogue; see ../mabData.
import type { Item } from '@/src/app/pneumatic/actuators/_series/modelTypes'
import { MAB_MODELS, MAB_COMMON, MAB_IMAGE, MAB_REDUCTION, STAGE_LABEL, rimEffort } from '../mabData'

const nm = (n: number) => n.toLocaleString('en-GB')
const opt = (s: string) => s.replace(/,\s*/g, ', ')

const RAW_ITEMS: Item[] = MAB_MODELS.map((m, i) => {
  const d = m.dims
  const rim = Math.round(rimEffort(m, m.torqueNm))
  return {
    id: m.model,
    model: m.model,
    sub: `${STAGE_LABEL[m.stage].replace(/ \(.+\)/, '')} · ${m.ratio}`,
    image: m.stage === 'Standard' ? MAB_IMAGE : MAB_REDUCTION,
    cells: [
      { text: `${nm(m.torqueNm)} Nm`, pill: 'green' },
      `${nm(m.thrustKn)} kN`,
      m.ratio,
      String(m.ma),
      m.flange,
      `${m.weightKg} kg`,
    ],
    facets: { stage: STAGE_LABEL[m.stage], size: m.size, mount: m.flange },
    sort: { model: i, torque: m.torqueNm, ma: m.ma, weight: m.weightKg },
    search: `${m.model} ${m.model.replace(/-/g, ' ')} ${m.size} ${m.torqueNm} Nm ${m.thrustKn} kN ${m.flange} ISO 5210 bevel gear multi-turn gate globe ${m.stage}`,
    brief: [
      ['Max stem, TW / Ø (key)', m.stem],
      ['Handwheel', `Ø ${m.handwheel} mm`],
      ['ISO 5210 option', opt(m.flangeOpt)],
    ],
    specs: [
      ['Max torque', `${nm(m.torqueNm)} Nm (${nm(m.torqueLbft)} lbf·ft)`],
      ['Max thrust', `${nm(m.thrustKn)} kN (${nm(m.thrustLbf)} lbf)`],
      ['Gear ratio', m.ratio],
      ['Mechanical advantage', `${m.ma} (±10%)`],
      ['Gearing', STAGE_LABEL[m.stage]],
      ['Max stem, TW / Ø (key)', m.stem],
      ['ISO 5210 flange', `${m.flange} standard, ${opt(m.flangeOpt)} option`],
      ['Recommended handwheel', `Ø ${m.handwheel} mm`],
      ['Rim effort at max torque', `About ${nm(rim)} N on the recommended handwheel`],
      ['Weight', `${m.weightKg} kg (approx.)`],
      ...MAB_COMMON,
    ],
    table: {
      title: 'Dimensions, mm',
      head: ['Part', 'Dimension', 'Value'],
      rows: [
        ['Base', 'Flange type', `${d.type} (${d.flange})`],
        ['Base', 'ØD1', String(d.d1)],
        ['Base', 'PCD ØD2', String(d.d2)],
        ['Base', 'Bolts N-H-DP', d.nhdp],
        ['Base', 'ØD3', String(d.d3)],
        ['External', 'H', String(d.h)],
        ['External', 'H1', String(d.h1)],
        ['External', 'H2', String(d.h2)],
        ['External', 'H3', String(d.h3)],
        ['External', 'L1', String(d.l1)],
        ['Input shaft', 'L2', String(d.l2)],
        ['Input shaft', 'ØPD', String(d.pd)],
        ['Input shaft', 'Key', d.key],
        ['Handwheel', 'ØM', String(d.m)],
        ['Stem cover', 'Thread', d.stemCover],
      ],
    },
    note: `Dimensions from Susin I-Tork’s ${m.stage === 'Standard' ? 'general' : m.stage === '1S' ? 'single stage reduction' : 'double stage reduction'} drawing; letters as on the catalogue drawing. Rim effort is the maximum torque divided by the mechanical advantage and the handwheel radius; Susin I-Tork’s standard limit is 360 N. Send us the valve torque, thrust and stem and we’ll confirm the model.`,
    rfq: {
      id: `mab-${m.model.toLowerCase()}`,
      name: `${m.model} bevel gear actuator`,
      brand: 'Susin',
      category: 'Mechanical Actuators',
      categoryId: 'mechanical-actuators',
      subCategory: 'MAB Series',
      thumbnail: m.stage === 'Standard' ? MAB_IMAGE : MAB_REDUCTION,
      description: `${m.model} bevel gear actuator, ${nm(m.torqueNm)} Nm and ${nm(m.thrustKn)} kN, ratio ${m.ratio}, ISO 5210 ${m.flange}.`,
      keySpecs: [
        { label: 'Torque', value: `${nm(m.torqueNm)} Nm` },
        { label: 'Thrust', value: `${nm(m.thrustKn)} kN` },
        { label: 'Ratio', value: m.ratio },
        { label: 'Flange', value: `ISO 5210 ${m.flange}` },
      ],
      variantInfo: { count: 1, sizeRange: m.model },
    },
  }
})

// One product page per model: /actuators/mechanical/mab/products/<slug>
export const MAB_PRODUCTS = '/actuators/mechanical/mab/products'
export const ITEMS: Item[] = RAW_ITEMS.map((i) => ({ ...i, tag: 'Bevel gear', slug: i.model, href: `${MAB_PRODUCTS}/${i.model}` }))
