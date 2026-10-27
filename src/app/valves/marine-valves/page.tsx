'use client';

import { Container, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'; // Using Grid2 for the 'size' prop
import RequestForQuoteCard, { ProductForRFQ } from  '../../Common/RFQCard/RequestForQuoteCard';

// Updated Payload using the RFQ Interface (No pricing)
const DUMMY_RFQ_PRODUCTS: ProductForRFQ[] = [
{
    id: "CAST_STEEL_GATE_VALVE_OSY",
    name: "Cast Steel Gate Valve (Rising Stem)",
    brand: "Atam Valves",
    category: "Valves",
    categoryId: "valves",
    subCategory: "Gate Valve Series",
    thumbnail: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/apollo-valves-88a10a01.webp",
    description: "Industrial grade OS&Y (Outside Screw and Yoke) gate valve featuring a rising stem with precision ACME double threads. Designed with a leak-proof body-to-bonnet joint and stellited seat rings for maximum resistance to wear and erosion.",
    keySpecs: [
      { label: "Design Type", value: "OS&Y Rising Stem / Fixed Handwheel" },
      { label: "Material", value: "A 216 GR WCB / ASTM A351 CF8M" },
      { label: "Pressure Grades", value: "Grade 150 / 300 / 600" },
      { label: "Compliance", value: "IBR Approved" }
    ],
    variantInfo: {
      count: 19,
      sizeRange: "Full Range (As per Part Details Table)"
    }
  },
  // {
  //   id: "CAST_STEEL_GLOBE_VALVE_RISING",
  //   name: "Cast Steel Globe Valve (Rising Handwheel)",
  //   brand: "Atam Valves",
  //   category: "Valves",
  //   categoryId: "valves",
  //   subCategory: "Globe Valve Series",
  //   thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776170860/5803e383-9082-4fee-9a79-2c16cd3ca260.png",
  //   description: "High-performance globe valve featuring an 'Impactor' handwheel mechanism for superior sealing force. Includes a revolving rising stem with ACME threads and a conical loose disc design to ensure true alignment and bubble-tight shut-off.",
  //   keySpecs: [
  //     { label: "Design Type", value: "Rising Handwheel & Stem / Conical Disc" },
  //     { label: "Material", value: "ASTM A 216 WCB / ASTM A351 CF8M" },
  //     { label: "Pressure Grades", value: "Grade 150 / 300 / 600" },
  //     { label: "Special Features", value: "Impactor Handwheel / IBR Approved" }
  //   ],
  //   variantInfo: {
  //     count: 18,
  //     sizeRange: "Metric & Imperial (Ref: Part Details Table)"
  //   }
  // },
  // {
  //   id: "BOLTED_COVER_SWING_CHECK",
  //   name: "Bolted Cover Swing Check Valve",
  //   brand: "Atam Valves",
  //   category: "Valves",
  //   categoryId: "valves",
  //   subCategory: "Non-Return Series",
  //   thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776170949/e62ce23a-db12-49e1-ab70-ce6bbb464b4a.png",
  //   description: "Robust swing check valve designed to prevent backflow in industrial pipelines. Features a bolted cover for easy maintenance, a disc-to-hanger connection that ensures proper alignment, and seal-welded seat rings for a bubble-tight joint.",
  //   keySpecs: [
  //     { label: "Design Type", value: "Bolted Cover / Swing Disc" },
  //     { label: "Material", value: "ASTM A 216 WCB / ASTM A351 CF8M" },
  //     { label: "Pressure Grades", value: "Grade 150 / 300 / 600" },
  //     { label: "Compliance", value: "IBR Approved / BS 1868" }
  //   ],
  //   variantInfo: {
  //     count: 14,
  //     sizeRange: "Full Industrial Range (Ref: Part Details Table)"
  //   }
  // },
  // {
  //   id: "BOLTED_BONNET_FORGED_GATE_VALVE",
  //   name: "Bolted Bonnet Forged Gate Valve",
  //   brand: "Atam Valves",
  //   category: "Valves",
  //   categoryId: "valves",
  //   subCategory: "Forged Steel Series",
  //   thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1774523763/steel-ball-valve_mqpk70.jpg",
  //   description: "High-pressure forged steel gate valve designed for rigorous industrial service. Built with a bolted bonnet for reliable sealing and ease of maintenance, featuring a compact forged body suitable for high-stress applications.",
  //   keySpecs: [
  //     { label: "Design Standard", value: "BS 5352 / API 598" },
  //     { label: "Pressure Class", value: "Class 800" },
  //     { label: "End Connections", value: "Socket Weld / Screwed / Butt Weld" },
  //     { label: "Material", value: "ASTM A 105 / ASTM A 182 GR F 316" }
  //   ],
  //   variantInfo: {
  //     count: 16,
  //     sizeRange: "1/2\" to 2\" (DN15 to DN50)"
  //   }
  // },
  // {
  //   id: "BOLTED_BONNET_FORGED_GLOBE_VALVE",
  //   name: "Bolted Bonnet Forged Globe Valve",
  //   brand: "Atam Valves",
  //   category: "Valves",
  //   categoryId: "valves",
  //   subCategory: "Forged Steel Series",
  //   thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776171042/image-removebg-preview_13_wl1mgl.png",
  //   description: "Forged steel globe valve engineered for precise throttling and flow regulation in high-pressure systems. The bolted bonnet design ensures durability and high shell test performance, compliant with IBR and international standards.",
  //   keySpecs: [
  //     { label: "Design Standard", value: "BS 5352 / BS EN 12266" },
  //     { label: "Pressure Class", value: "Class 800" },
  //     { label: "Sealing Type", value: "Graphite Asbestos / PTFE Packing" },
  //     { label: "Material", value: "ASTM A 105 / ASTM A 182 GR F 304" }
  //   ],
  //   variantInfo: {
  //     count: 16,
  //     sizeRange: "1/2\" to 2\" (DN15 to DN50)"
  //   }
  // },
  // {
  //   id: "ATAM_BUTTERFLY_VALVE_SERIES",
  //   name: "Centric Disc Butterfly Valve",
  //   brand: "Atam Valves",
  //   category: "Valves",
  //   categoryId: "valves",
  //   subCategory: "Butterfly Valve Series",
  //   thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776171129/ba0bbe51-bf51-4705-9f8f-6147f6762652.png",
  //   description: "Versatile centric disc design available in Wafer, Lug, and Flanged types. Features a single-piece rubber lined or PTFE body with integrally molded or replaceable seats, providing tight shut-off for a wide range of industrial media.",
  //   keySpecs: [
  //     { label: "Design Standard", value: "API 609 / API 598" },
  //     { label: "Pressure Rating", value: "PN6 / PN10 / PN16 / PN25 / 150#" },
  //     { label: "Operation", value: "Hand Lever / Worm Gear Box / Actuator Optional" },
  //     { label: "Temp Range", value: "-25°C to 200°C (MOC Dependent)" }
  //   ],
  //   variantInfo: {
  //     count: 28,
  //     sizeRange: "40 NB to 600 NB (DN 1 1/2\" to 24\")"
  //   }
  // },
  // {
  //   id: "ATAM_DUAL_PLATE_CHECK_VALVE",
  //   name: "Dual Plate Check Valve",
  //   brand: "Atam Valves",
  //   category: "Valves",
  //   categoryId: "valves",
  //   subCategory: "Non-Return Series",
  //   thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776171226/4b2f9f6a-06f6-4ff0-aeaa-92680f7dc3ae.png",
  //   description: "A compact, lightweight wafer-style non-return valve designed with two spring-loaded plates. It provides efficient backflow prevention with low pressure drop and water hammer resistance, suitable for a wide variety of industrial materials including NAB, GM, and Stainless Steel.",
  //   keySpecs: [
  //     { label: "Design Standard", value: "API-594 & API-6D" },
  //     { label: "Pressure Class", value: "ASME Class 150#" },
  //     { label: "Spring Material", value: "Inconel X-750 (High Strength)" },
  //     { label: "Seat Type", value: "Metal-to-Metal / PTFE / EPDM" }
  //   ],
  //   variantInfo: {
  //     count: 13,
  //     sizeRange: "2\" to 24\" (DN50 to DN600)"
  //   }
  // },
  // {
  //   id: "ATAM_NON_SLAM_CHECK_VALVE",
  //   name: "Non Slam Check Valve",
  //   brand: "Atam Valves",
  //   category: "Valves",
  //   categoryId: "valves",
  //   subCategory: "Non-Return Series",
  //   thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776171339/image-removebg-preview_15_vdbo0p.png",
  //   description: "An ultra-compact wafer-style check valve engineered to eliminate water hammer and 'slam' during flow reversal. Featuring a streamlined disc and R.F. serrated faces on both sides, it is ideal for high-velocity systems where space and noise reduction are critical.",
  //   keySpecs: [
  //     { label: "Design Standard", value: "API-594 & API-6D" },
  //     { label: "Pressure Class", value: "ASME Class 150#" },
  //     { label: "Face Detail", value: "R.F. Serrated Both Sides" },
  //     { label: "Seat Material", value: "EPDM / PTFE / VITON" }
  //   ],
  //   variantInfo: {
  //     count: 16,
  //     sizeRange: "25 NB to 600 NB (DN 1\" to 24\")"
  //   }
  // },
  // {
  //   id: "ATAM_DOUBLE_FLANGED_BUTTERFLY",
  //   name: "Double Flanged Butterfly Valve",
  //   brand: "Atam Valves",
  //   category: "Valves",
  //   categoryId: "valves",
  //   subCategory: "Butterfly Valve Series",
  //   thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776171475/image-removebg-preview_18_tzaunn.png",
  //   description: "A heavy-duty double flanged butterfly valve designed for rigorous industrial flow control. Features an asbestos-free construction with reinforced PTFE soft seats and is compatible with a variety of specialized materials including NAB, Gun Metal, and Stainless Steel for harsh environments.",
  //   keySpecs: [
  //     { label: "Design Standard", value: "NES 375 / BS 5155" },
  //     { label: "Pressure Grades", value: "PN6 / PN10 / PN16" },
  //     { label: "Test Standard", value: "BS 6755 Part 1 Rate 'A'" },
  //     { label: "Seat Type", value: "Reinforced PTFE (Soft Seat)" }
  //   ],
  //   variantInfo: {
  //     count: 8,
  //     sizeRange: "80 MM to 350 MM (3\" to 14\")"
  //   }
  // },
  // {
  //   id: "ATAM_BUTTERFLY_LUG_TYPE",
  //   name: "Butterfly Lug Type Valve",
  //   brand: "Atam Valves",
  //   category: "Valves",
  //   categoryId: "valves",
  //   subCategory: "Butterfly Valve Series",
  //   thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776171548/image-removebg-preview_19_suop3a.png",
  //   description: "High-performance lug-style butterfly valve designed for end-of-line service and frequent maintenance accessibility. Features a robust body construction compliant with NES 375/BS 5155, offering reinforced PTFE soft seats and a variety of material options including NAB and Gun Metal for specialized industrial environments.",
  //   keySpecs: [
  //     { label: "Design Standard", value: "NES 375 / BS 5155" },
  //     { label: "Pressure Grades", value: "PN6 / PN10 / PN16" },
  //     { label: "Seat Type", value: "Reinforced PTFE (Asbestos Free)" },
  //     { label: "Special Features", value: "Extended Bonnet / Gear Box / Actuator Compatible" }
  //   ],
  //   variantInfo: {
  //     count: 10,
  //     sizeRange: "50 MM to 350 MM (2\" to 14\")"
  //   }
  // },
  // {
  //   id: "ATAM_FIRE_HYDRANT_ANGLE_VALVE",
  //   name: "Fire Hydrant Angle Valve",
  //   brand: "Atam Valves",
  //   category: "Valves",
  //   categoryId: "valves",
  //   subCategory: "Fire Safety Series",
  //   thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776171634/image-removebg-preview_20_axwr9o.png",
  //   description: "Industrial-grade fire hydrant angle valve designed for emergency water supply. Manufactured to IS 5290 standards, this valve features a female coupling with blank cap and chain, and an open/close indication for rapid deployment in fire safety systems.",
  //   keySpecs: [
  //     { label: "Design Standard", value: "IS 5290 / BS 4504 Part 3.3" },
  //     { label: "Pressure Grades", value: "PN6 / PN10 / PN16" },
  //     { label: "Material", value: "NAB / Gun Metal / Stainless Steel" },
  //     { label: "Valve Facing", value: "Rubber IS 937" }
  //   ],
  //   variantInfo: {
  //     count: 2,
  //     sizeRange: "50 MM (2\") and 65 MM (2 1/2\")"
  //   }
  // },
  // {
  //   id: "ATAM_FIRE_HYDRANT_STRAIGHT_VALVE",
  //   name: "Fire Hydrant Straight Valve",
  //   brand: "Atam Valves",
  //   category: "Valves",
  //   categoryId: "valves",
  //   subCategory: "Fire Safety Series",
  //   thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776171679/image-removebg-preview_21_gwyln8.png",
  //   description: "Robust straight-pattern fire hydrant valve designed for efficient water distribution in fire protection systems. Compliant with IS 5290 standards, it features a stop valve mechanism, female coupling with blank cap and chain, and provides clear open/close indication for rapid response.",
  //   keySpecs: [
  //     { label: "Design Standard", value: "IS 5290 / BS 4504 Part 3.3" },
  //     { label: "Pressure Grades", value: "PN6 / PN10 / PN16" },
  //     { label: "Material Options", value: "NAB / Gun Metal / SS / Carbon Steel" },
  //     { label: "Seat Facing", value: "Rubber IS 937" }
  //   ],
  //   variantInfo: {
  //     count: 2,
  //     sizeRange: "50 MM (2\") and 65 MM (2 1/2\")"
  //   }
  // },
  // {
  //   id: "ATAM_NON_RISING_GATE_VALVE",
  //   name: "Non Rising Gate Valve",
  //   brand: "Atam Valves",
  //   category: "Valves",
  //   categoryId: "valves",
  //   subCategory: "Gate Valve Series",
  //   thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776171783/6d33d68e-f49c-468d-a161-27f6f2e1ae86.png",
  //   description: "Bi-directional non-rising stem gate valve designed for space-restricted installations. Engineered to NES 375/BS 5155 standards, it features an asbestos-free construction with multiple material options including NAB and Gun Metal, making it suitable for marine and heavy industrial applications.",
  //   keySpecs: [
  //     { label: "Design Standard", value: "NES 375 / BS 5351" },
  //     { label: "Pressure Grades", value: "PN6 / PN10 / PN16" },
  //     { label: "Flow Direction", value: "Bi-Directional" },
  //     { label: "Stem Design", value: "Non-Rising Stem" }
  //   ],
  //   variantInfo: {
  //     count: 10,
  //     sizeRange: "50 MM to 350 MM (2\" to 14\")"
  //   }
  // },
  // {
  //   id: "ATAM_SWING_CHECK_VALVE_NAB_GM",
  //   name: "Swing Check Valve (NAB / Gun Metal)",
  //   brand: "Atam Valves",
  //   category: "Valves",
  //   categoryId: "valves",
  //   subCategory: "Non-Return Series",
  //   thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776171921/5e1e1c04-d9be-4375-8afb-1361e9a03fe6.png",
  //   description: "High-integrity swing check valve available in specialized marine-grade materials including Nickel Aluminum Bronze (NAB) and Gun Metal. Designed with an asbestos-free cover seal and reinforced PTFE soft seats, this valve ensures uni-directional flow with open/close indication and is compliant with BS 1868/BS 5352 standards.",
  //   keySpecs: [
  //     { label: "Design Standard", value: "BS 1868 / BS 5352" },
  //     { label: "Pressure Grades", value: "PN6 / PN10 / PN16" },
  //     { label: "Material Options", value: "NAB / Gun Metal / SS / Carbon Steel" },
  //     { label: "End Connection", value: "RF PN6 / PN10 / PN16 (BS 4504)" }
  //   ],
  //   variantInfo: {
  //     count: 11,
  //     sizeRange: "50 MM to 350 MM (2\" to 14\")"
  //   }
  // }
];

export default function CategoryListingPage() {
  const products = DUMMY_RFQ_PRODUCTS;

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>
      
      {/* Header - Industrial Dark Style */}
      <Box sx={{ bgcolor: 'text.primary', color: 'white', py: 8, mb: 6, borderBottom: '4px solid', borderColor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="overline" 
            sx={{ 
                fontFamily: '"Barlow Condensed"', 
                color: 'primary.main', 
                fontWeight: 800, 
                letterSpacing: 2 
            }}
          >
            Commercial Inquiry Portfolio
          </Typography>
          <Typography 
            variant="h2" component="h1" 
            sx={{ 
              fontFamily: '"Barlow Condensed"', 
              fontWeight: 900, 
              textTransform: 'uppercase',
              lineHeight: 1
            }}
          >
            Marine Valves
          </Typography>
        </Container>
      </Box>

      {/* Product Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {products.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              {/* Swapped to the Specialized RFQ Card */}
              <RequestForQuoteCard product={item} />
            </Grid>
          ))}
        </Grid>

        {/* Empty State Logic */}
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