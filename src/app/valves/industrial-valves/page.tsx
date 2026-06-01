'use client';

import { useParams, useRouter } from 'next/navigation';
import { Container, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import RequestForQuoteCard, { ProductForRFQ } from '../../Common/RFQCard/RequestForQuoteCard';

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
    id: 'vsi-atlas-15',
    name: 'Atlas 15 Severe Service Control Valve',
    category: 'Control Valves',
    categoryId: 'control-valves',
    brand: 'VSI – Valve Systems International',
    brandLogo: 'https://vsillc.com/wp-content/uploads/2026/02/Logo-2026-300x168.png',
    thumbnail: 'https://vsillc.com/wp-content/uploads/2015/05/vsi-logo.png',
    specs: [
      { label: 'NPS', value: '2"' },
      { label: 'Flow Capacity (Cv)', value: 'Up to 70' },
      { label: 'Rangeability (ISA 75.11)', value: 'Up to 80:1' },
      { label: 'Operating Pressure', value: '0–5,000 psi DP (up to 10,000 psi with reduced trim)' },
      { label: 'Control Range', value: 'Up to 700:1 at +/-3% accuracy' },
      { label: 'Noise Level', value: '< 60 dB in choked flow' },
      { label: 'Maintenance Cycle', value: '2+ years (vs. 3–6 months standard)' },
      { label: 'Ideal For', value: 'Highest capacity, high pressure, precision control in a 2" valve' },
    ],
  },
  {
    id: 'vsi-atlas-21',
    name: 'Atlas 21 Severe Service Control Valve',
    category: 'Control Valves',
    categoryId: 'control-valves',
    brand: 'VSI – Valve Systems International',
    brandLogo: 'https://vsillc.com/wp-content/uploads/2026/02/Logo-2026-300x168.png',
    thumbnail: 'https://vsillc.com/wp-content/uploads/2015/05/vsi-logo.png',
    specs: [
      { label: 'NPS', value: '3"' },
      { label: 'Flow Capacity (Cv)', value: 'Up to 130' },
      { label: 'Rangeability (ISA 75.11)', value: 'Up to 58:1' },
      { label: 'Operating Pressure', value: '0–5,000 psi DP (up to 10,000 psi with reduced trim)' },
      { label: 'Control Range', value: 'Up to 700:1 at +/-3% accuracy' },
      { label: 'Noise Level', value: '< 60 dB in choked flow' },
      { label: 'Maintenance Cycle', value: '2+ years (vs. 3–6 months standard)' },
      { label: 'Ideal For', value: 'Pump testing, storage blowdown, severe service control' },
    ],
  },
  {
    id: 'vsi-atlas-32',
    name: 'Atlas 32 Severe Service Control Valve',
    category: 'Control Valves',
    categoryId: 'control-valves',
    brand: 'VSI – Valve Systems International',
    brandLogo: 'https://vsillc.com/wp-content/uploads/2026/02/Logo-2026-300x168.png',
    thumbnail: 'https://vsillc.com/wp-content/uploads/2015/05/vsi-logo.png',
    specs: [
      { label: 'NPS', value: '4"' },
      { label: 'Flow Capacity (Cv)', value: 'Up to 300' },
      { label: 'Rangeability (ISA 75.11)', value: 'Up to 58:1' },
      { label: 'Operating Pressure', value: '0–5,000 psi DP (up to 10,000 psi with reduced trim)' },
      { label: 'Control Range', value: 'Up to 700:1 at +/-3% accuracy' },
      { label: 'Noise Level', value: '< 60 dB in choked flow' },
      { label: 'Maintenance Cycle', value: '2+ years (vs. 3–6 months standard)' },
      { label: 'Ideal For', value: 'Maximum capacity high-flow applications' },
    ],
  },
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

export const DUMMY_RFQ_PRODUCTS: ProductForRFQ[] = VALVES.map((valve) => ({
  id: valve.id,
  name: valve.name,
  brand: valve.brand,
  category: valve.category,
  categoryId: valve.categoryId,
  subCategory: valve.category,
  thumbnail: valve.thumbnail,
  description: `${valve.name} by ${valve.brand} — engineered for industrial flow control applications.`,
  keySpecs: valve.specs,
  variantInfo: {
    count: 1,
    sizeRange: valve.specs.find(s => s.label === 'Size Range' || s.label === 'NPS')?.value ?? 'Contact for details',
  },
}));

export default function CategoryListingPage() {
  const { categoryId } = useParams();
  const router = useRouter();
  const products = DUMMY_RFQ_PRODUCTS;

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>

      <Box sx={{ bgcolor: 'text.primary', color: 'white', py: 8, mb: 6, borderBottom: '4px solid', borderColor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{ fontFamily: '"Barlow Condensed"', color: 'primary.main', fontWeight: 800, letterSpacing: 2 }}
          >
            Commercial Inquiry Portfolio
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1 }}
          >
            {categoryId?.toString().replace(/-/g, ' ') || 'Industrial Valves'}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {products.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                onClick={() => router.push(`/valves/industrial-valves/${item.id}`)}
                sx={{ cursor: 'pointer', height: '100%' }}
              >
                <RequestForQuoteCard product={item} />
              </Box>
            </Grid>
          ))}
        </Grid>

        {products.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h6" sx={{ opacity: 0.5, fontFamily: '"Barlow Condensed"', fontWeight: 800 }}>
              NO COMMERCIAL SPECIFICATIONS FOUND IN THIS CATEGORY.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}