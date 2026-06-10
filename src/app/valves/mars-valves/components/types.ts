export interface MarsSeriesDTO {
  id: string
  slug: string
  seriesCode: string
  name: string
  shortName: string
  description: string
  category: '1-Piece' | '2-Piece' | '3-Piece' | 'Multi-Way' | 'Wafer' | 'Flanged Fire Safe' | 'Sanitary' | 'Economical'
  design: string
  portType: string
  sizeRange: string
  pressureRating: string
  body: string
  seats: string
  ends: string
  fireSafe: 'API 607 Fire Safe' | 'Standard'
  standards: string[]
  options: string[]
  imageUrl: string
}

export interface MarsFilters {
  series: string[]
  categories: string[]
  portTypes: string[]
  endConnections: string[]
  fireSafe: string[]
  options: string[]
}

export const EMPTY_MARS_FILTERS: MarsFilters = {
  series: [],
  categories: [],
  portTypes: [],
  endConnections: [],
  fireSafe: [],
  options: [],
}

export const CATEGORY_SORT_ORDER = [
  '1-Piece', '2-Piece', '3-Piece', 'Multi-Way', 'Wafer', 'Flanged Fire Safe', 'Sanitary', 'Economical',
]

export const MARS_DESCRIPTION = {
  title: 'Mars Ball Valves',
  description:
    'Mars Valves industrial ball valve range — 17 series across 1-piece, 2-piece, 3-piece, multi-way diverter, wafer compact, fire-safe flanged, sanitary, and economical designs. Stainless steel 316 (CF8M) construction with PTFE / RTFE seat options. API 607 fire-safe certification on the fire-safe ranges and NACE MR-0175 sour-gas service available.',
  specs: [
    '17 Ball Valve Series',
    'Stainless Steel 316 (CF8M)',
    '1/8" – 12" Size Range',
    'Up to 2000 PSI',
    'API 607 Fire Safe Options',
    'ANSI · PN · JIS Flanged',
    '3-A Certified Sanitary',
  ],
}