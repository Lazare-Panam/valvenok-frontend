"use client";

import { useParams, useRouter } from "next/navigation";
import { Container, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import RequestForQuoteCard, {
  ProductForRFQ,
} from "../../Common/RFQCard/RequestForQuoteCard";

export interface FeaturedValve {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  brand: string;
  brandLogo: string;
  thumbnail: string;
  catalogUrl?: string;
  specs: { label: string; value: string }[];
}

export const VALVES: FeaturedValve[] = [
  {
    id: "ball-valves",
    name: "Ball Valves",
    category: "Ball Valves",
    categoryId: "ball-valves",
    brand: "Mars Valves",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/mars.png",
    thumbnail:
      "https://pblol2.blob.core.windows.net/mars-valves/ball-valves/series90D.jpg",
    specs: [
      { label: "Series", value: "11 Ball Valve Series" },
      { label: "Material", value: "Stainless Steel 316 (CF8M)" },
      { label: "Size Range", value: '1/8" – 12"' },
      { label: "Pressure Rating", value: "Up to 2000 PSI" },
      { label: "Certification", value: "API 607 Fire Safe" },
      { label: "Connections", value: "ANSI · PN · JIS Flanged" },
    ],
  },
 {
  id: "globe-valve",
  name: "Globe Valves",
  category: "Globe Valves",
  categoryId: "globe-valves",
  brand: "UTAM Syncercon",
  brandLogo:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/utam-logo.png",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/globe-bonnet-valve.png",
  specs: [
    { label: "Size Range", value: '½"–24" (DN15–DN600)' },
    { label: "Pressure Class", value: "ASME Class 150 / 300" },
    { label: "Bonnet Types", value: "Bolted & Union Bonnet" },
  ],
},
{
  id: "gate-valves",
  name: "Gate Valves",
  category: "Gate Valves",
  categoryId: "gate-valves",
  brand: "UTAM Syncercon",
  brandLogo:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/utam-logo.png",
  thumbnail:
    "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/bolted-gate-valve.png",
  specs: [
    { label: "Size Range", value: '½"–24" (DN15–DN600)' },
    { label: "Pressure Class", value: "ASME Class 150 / 300" },
    { label: "Bonnet Types", value: "Bolted & Union Bonnet" },
  ],
},
  {
    id: "control-valves",
    name: "Control Valves",
    category: "Control Valves",
    categoryId: "control-valves",
    brand: "VSI – Valve Systems International",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/vsi.png",
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/Atlas-15.png",
    specs: [
      { label: "NPS", value: '2"' },
      { label: "Flow Capacity (Cv)", value: "Up to 70" },
      { label: "Rangeability (ISA 75.11)", value: "Up to 80:1" },
      {
        label: "Operating Pressure",
        value: "0–5,000 psi DP (up to 10,000 psi with reduced trim)",
      },
      { label: "Control Range", value: "Up to 700:1 at +/-3% accuracy" },
      { label: "Noise Level", value: "< 60 dB in choked flow" },
      {
        label: "Maintenance Cycle",
        value: "2+ years (vs. 3–6 months standard)",
      },
      {
        label: "Ideal For",
        value:
          'Highest capacity, high pressure, precision control in a 2" valve',
      },
    ],
  },
  {
    id: "check-valves",
    name: "Check Valves",
    category: "Check Valves",
    categoryId: "check-valves",
    brand: "Velan",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/velan-logo.png",
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/featured/API-594-cast-steel-swing-check.png",
    specs: [
      { label: "Size Range", value: "NPS 2–48 | DN 50–1200" },
      { label: "Pressure Class", value: "ASME 150–1500" },
      { label: "Pressure Rating", value: "High-pressure up to Class 1500" },
    ],
  },

  {
    id: "butterfly-valves",
    name: "Butterfly Valves",
    category: "Butterfly Valves",
    categoryId: "butterfly-valves",
    brand: "Velan",
    brandLogo:
      "https://pblol2.blob.core.windows.net/valvenok-images/brands/mars.png",
    thumbnail:
      "https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/butterfly-valve.webp",
    specs: [
      { label: "Size Range", value: "NPS 2–48 | DN 50–1200" },
      { label: "Pressure Class", value: "ASME 150–1500" },
      { label: "Pressure Rating", value: "High-pressure up to Class 1500" },
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
    sizeRange:
      valve.specs.find((s) => s.label === "Size Range" || s.label === "NPS")
        ?.value ?? "Contact for details",
  },
}));

export default function CategoryListingPage() {
  const { categoryId } = useParams();
  const router = useRouter();
  const products = DUMMY_RFQ_PRODUCTS;

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 10 }}>
      <Box
        sx={{
          bgcolor: "text.primary",
          color: "white",
          py: 8,
          mb: 6,
          borderBottom: "4px solid",
          borderColor: "primary.main",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              fontFamily: '"Barlow Condensed"',
              color: "primary.main",
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            Commercial Inquiry Portfolio
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            {categoryId?.toString().replace(/-/g, " ") || "Industrial Valves"}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {products.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                onClick={() =>
                  router.push(`/valves/industrial-valves/${item.id}`)
                }
                sx={{ cursor: "pointer", height: "100%" }}
              >
                <RequestForQuoteCard product={item} />
              </Box>
            </Grid>
          ))}
        </Grid>

        {products.length === 0 && (
          <Box sx={{ textAlign: "center", py: 10 }}>
            <Typography
              variant="h6"
              sx={{
                opacity: 0.5,
                fontFamily: '"Barlow Condensed"',
                fontWeight: 800,
              }}
            >
              NO COMMERCIAL SPECIFICATIONS FOUND IN THIS CATEGORY.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
