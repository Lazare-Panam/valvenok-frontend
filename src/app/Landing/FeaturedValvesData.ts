export interface FeaturedValve {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  brand: string;
  brandLogo: string;
  thumbnail: string;
  specs: { label: string; value: string }[];
}

export const VALVES: FeaturedValve[] = [
  {
    id: 'cameron-wkm-370d',
    name: 'WKM 370D Series',
    category: 'Ball Valves',
    categoryId: 'ball-valves',
    brand: 'Cameron',
    brandLogo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/cameron-logo.png',
    thumbnail: 'https://pblol2.blob.core.windows.net/valvenok-images/products/featured/wkm-370d.jpg',
    specs: [
      { label: 'Size Range', value: '2"–16" [50–400 mm]' },
      { label: 'Pressure Class', value: 'ASME 150–2,500' },
      { label: 'End Type', value: 'Standard Flanged Ends' },
    ],
  },
  {
    id: 'bettis-rpx',
    name: 'RPX Actuated SS ANSI 150 Flanged Ball Valves',
    category: 'Ball Valves',
    categoryId: 'ball-valves',
    brand: 'Bettis',
    brandLogo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/bettis-logo.png',
    thumbnail: 'https://pblol2.blob.core.windows.net/valvenok-images/products/featured/rps-actuated-ss.webp',
    specs: [
      { label: 'Size Range', value: 'NPS 1/2 to 8 | DN 15–200' },
      { label: 'Pressure Rating', value: 'ANSI 150' },
      { label: 'End Type', value: 'Flanged End Connections' },
    ],
  },
  {
    id: 'velan-swing-check',
    name: 'Cast Steel Swing Check Valves',
    category: 'Check Valves',
    categoryId: 'check-valves',
    brand: 'Velan',
    brandLogo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/velan-logo.png',
    thumbnail: 'https://pblol2.blob.core.windows.net/valvenok-images/products/featured/API-594-cast-steel-swing-check.png',
    specs: [
      { label: 'Size Range', value: 'NPS 2–48 | DN 50–1200' },
      { label: 'Pressure Class', value: 'ASME 150–1500' },
      { label: 'Pressure Rating', value: 'High-pressure up to Class 1500' },
    ],
  },
  {
    id: 'ag-fasani',
    name: 'Fasani Bolted Bonnet Check Valves',
    category: 'Check Valves',
    categoryId: 'check-valves',
    brand: 'Anderson Greenwood',
    brandLogo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/anderson-greewood-logo.jpg',
    thumbnail: 'https://pblol2.blob.core.windows.net/valvenok-images/products/featured/bolted-bonnet-check-valves.png',
    specs: [
      { label: 'Size Range', value: 'NPS 2 to 6+ | DN 50–150+' },
      { label: 'Pressure Class', value: 'ASME CL150–CL2500' },
      { label: 'Temperature', value: 'Up to 400°F+ (204°C+)' },
    ],
  },
  {
    id: 'fisher-rss',
    name: 'Fisher™ RSS Lined Globe Valve',
    category: 'Globe Valves',
    categoryId: 'globe-valves',
    brand: 'Fisher',
    brandLogo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/fisher-logo.jpg',
    thumbnail: 'https://pblol2.blob.core.windows.net/valvenok-images/products/featured/fisher-rss.png',
    specs: [
      { label: 'Size Range', value: 'NPS 1, 1-1/2, 2, 3, 4' },
      { label: 'Pressure Class', value: 'CL 150, CL 300' },
      { label: 'Temperature', value: 'Standard Operating Temperature' },
    ],
  },
  {
    id: 'bonney-globe',
    name: 'Globe Valves – Welded Bonnet',
    category: 'Globe Valves',
    categoryId: 'globe-valves',
    brand: 'Bonney Forge',
    brandLogo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/fisher-logo.jpg',
    thumbnail: 'https://pblol2.blob.core.windows.net/valvenok-images/products/featured/globe-valve.png',
    specs: [
      { label: 'Size Range', value: 'NPS 1/4"–2" | DN 6–50' },
      { label: 'Pressure Class', value: '4500 LTD' },
      { label: 'Max Pressure', value: '11,250 psig (776 bar)' },
    ],
  },
];