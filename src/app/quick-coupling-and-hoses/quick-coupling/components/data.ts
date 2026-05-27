import { type QuickCouplingDTO } from './types'

const SERIES_DATA = [
  {
    id: 'iso-a',
    title: 'ISOA',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/quick-coupling/iso-a',
    bodyMaterials: [{ code: 'YAA', label: 'Carbon Steel' }],
    connectionTypes: [
      { code: '02G', label: '1/4" BSPP' }, { code: '03G', label: '3/8" BSPP' },
      { code: '04G', label: '1/2" BSPP' }, { code: '06G', label: '3/4" BSPP' },
      { code: '08G', label: '1" BSPP' },   { code: '02N', label: '1/4" NPT' },
      { code: '03N', label: '3/8" NPT' },  { code: '04N', label: '1/2" NPT' },
      { code: '06N', label: '3/4" NPT' },  { code: '08N', label: '1" NPT' },
    ],
    types: [{ code: 'SF', label: 'Socket' }, { code: 'PF', label: 'Plug' }],
  },
  {
    id: 'iso-16028',
    title: 'ISO 16028',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/quick-coupling/iso-16028',
    bodyMaterials: [{ code: 'YDA', label: 'Carbon Steel' }],
    connectionTypes: [
      { code: '02G', label: '1/4" BSPP' }, { code: '03G', label: '3/8" BSPP' },
      { code: '04G', label: '1/2" BSPP' }, { code: '06G', label: '3/4" BSPP' },
      { code: '08G', label: '1" BSPP' },   { code: '02N', label: '1/4" NPT' },
      { code: '03N', label: '3/8" NPT' },  { code: '04N', label: '1/2" NPT' },
      { code: '06N', label: '3/4" NPT' },  { code: '08N', label: '1" NPT' },
    ],
    types: [{ code: 'SF', label: 'Socket' }, { code: 'PF', label: 'Plug' }],
  },
  {
    id: 'iso-7241a',
    title: 'ISO 7241A',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/quick-coupling/iso-7214A',
    bodyMaterials: [{ code: 'YAA', label: 'Carbon Steel' }],
    connectionTypes: [
      { code: '02G', label: '1/4" BSPP' }, { code: '03G', label: '3/8" BSPP' },
      { code: '04G', label: '1/2" BSPP' }, { code: '06G', label: '3/4" BSPP' },
      { code: '08G', label: '1" BSPP' },   { code: '02N', label: '1/4" NPT' },
      { code: '03N', label: '3/8" NPT' },  { code: '04N', label: '1/2" NPT' },
      { code: '06N', label: '3/4" NPT' },  { code: '08N', label: '1" NPT' },
    ],
    types: [{ code: 'SPF', label: 'Set' }],
  },
  {
    id: 'iso-7241b',
    title: 'ISO 7241B',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/quick-coupling/iso-7241-b',
    bodyMaterials: [{ code: 'YBA', label: 'Carbon Steel' }],
    connectionTypes: [
      { code: '02G', label: '1/4" BSPP' }, { code: '03G', label: '3/8" BSPP' },
      { code: '04G', label: '1/2" BSPP' }, { code: '06G', label: '3/4" BSPP' },
      { code: '08G', label: '1" BSPP' },   { code: '02N', label: '1/4" NPT' },
      { code: '03N', label: '3/8" NPT' },  { code: '04N', label: '1/2" NPT' },
      { code: '06N', label: '3/4" NPT' },  { code: '08N', label: '1" NPT' },
    ],
    types: [{ code: 'SPF', label: 'Set' }],
  },
  {
    id: 'iso-5675',
    title: 'ISO 5675',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/quick-coupling/iso-5675',
    bodyMaterials: [{ code: 'YCA', label: 'Carbon Steel' }],
    connectionTypes: [
      { code: '02G', label: '1/4" BSPP' }, { code: '03G', label: '3/8" BSPP' },
      { code: '04G', label: '1/2" BSPP' }, { code: '06G', label: '3/4" BSPP' },
      { code: '08G', label: '1" BSPP' },   { code: '02N', label: '1/4" NPT' },
      { code: '03N', label: '3/8" NPT' },  { code: '04N', label: '1/2" NPT' },
      { code: '06N', label: '3/4" NPT' },  { code: '08N', label: '1" NPT' },
    ],
    types: [{ code: 'SPF', label: 'Set' }],
  },
  {
    id: 'screw-type',
    title: 'Screw Type',
    image: 'https://pblol2.blob.core.windows.net/panam-images/products/quick-coupling/screw_type',
    bodyMaterials: [{ code: 'YEA', label: 'Carbon Steel' }],
    connectionTypes: [
      { code: '02G', label: '1/4" BSPP' }, { code: '03G', label: '3/8" BSPP' },
      { code: '04G', label: '1/2" BSPP' }, { code: '06G', label: '3/4" BSPP' },
      { code: '08G', label: '1" BSPP' },   { code: '02N', label: '1/4" NPT' },
      { code: '03N', label: '3/8" NPT' },  { code: '04N', label: '1/2" NPT' },
      { code: '06N', label: '3/4" NPT' },  { code: '08N', label: '1" NPT' },
    ],
    types: [{ code: 'SF', label: 'Socket' }, { code: 'PF', label: 'Plug' }],
  },
]

export const QUICK_COUPLING_DATA: QuickCouplingDTO[] = SERIES_DATA.flatMap(series =>
  series.bodyMaterials.flatMap(body =>
    series.connectionTypes.flatMap(conn =>
      series.types.map(type => {
        const seriesCode = series.id.toUpperCase().replace(/-/g, '')
        const partNumber = `${seriesCode}-${body.code}-${conn.code}-${type.code}`
        return {
          id: partNumber,
          partNumber,
          series: series.title,
          bodyMaterial: body.label,
          connectionType: conn.label,
          type: type.label,
          description: `${series.title} Quick Coupling, ${body.label}, ${conn.label}, ${type.label}.`,
          imageUrl: series.image,
        }
      })
    )
  )
)