'use client';

import { useParams } from 'next/navigation';
import { Container, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'; // Using Grid2 for the 'size' prop
import RequestForQuoteCard, { ProductForRFQ } from '../Common/RFQCard/RequestForQuoteCard';
// Updated Payload using the RFQ Interface (No pricing)
const DUMMY_RFQ_PRODUCTS: ProductForRFQ[] = [
  {
    id: "INDUSTRIAL_VALVES",
    name: "Atam High-Pressure Valves",
    brand: "Atam Valves",
    category: "Valves",
    categoryId: "valves",
    subCategory: "HB Series High Pressure",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1774523763/steel-ball-valve_mqpk70.jpg",
    description: "High-performance industrial valves engineered for precision flow control. Designed to withstand high pressure and temperature environments.",
    keySpecs: [
      { label: "Material", value: "316 Stainless Steel" },
      { label: "Pressure Rating", value: "6000 - 10000 PSI" },
      { label: "Connections", value: "FF / MF / NPT" },
      { label: "Configuration", value: "Heavy Duty Hex Body" }
    ],
    variantInfo: {
      count: 28,
      sizeRange: "1/8\" to 1\""
    }
  },
  {
    id: "API6D_TRUNNION_BALL_VALVE",
    name: "API 6D Split Body Trunnion Ball Valve",
    brand: "Batu Valve",
    category: "Valves",
    categoryId: "valves",
    subCategory: "High Pressure Series",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776165254/8b9addb3-97f8-4acb-9bb7-a683f3a8ceb5.png",
    description: "Supported by top and bottom trunnions to reduce seat stress. Ideal for high-pressure pipelines and large-diameter systems requiring low operating torque and DBB capability.",
    keySpecs: [
      { label: "Features", value: "Double Block & Bleed (DBB)" },
      { label: "Operation", value: "Manual / Actuator Ready" },
      { label: "Temp Range", value: "-29°C to +180°C" },
      { label: "Ends", value: "Flanged (RF/RTJ) / Butt Weld" }
    ],
    variantInfo: {
      count: 45,
      sizeRange: "Up to 56\""
    }
  },
  {
    id: "API6D_DBB_BALL_VALVE",
    name: "API 6D Double Block and Bleed (DBB) Ball Valve",
    brand: "Batu Valve",
    category: "Valves",
    categoryId: "valves",
    subCategory: "Isolation & Safety Series",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776165375/d2be16c7-3c19-4c89-a5be-cbcd54e6e4e0.png",
    description: "Engineered for maximum safety, providing two independent sealing surfaces with an integrated bleed mechanism. Ideal for high-pressure systems requiring zero-leakage isolation and pressure venting.",
    keySpecs: [
      { label: "Functionality", value: "Double Block & Bleed (DBB)" },
      { label: "Certification", value: "API 6D Certified" },
      { label: "Material", value: "Stainless Steel / Duplex / Carbon Steel" },
      { label: "Safety", value: "Fire-Safe & Anti-Blowout Design" }
    ],
    variantInfo: {
      count: 18,
      sizeRange: "Customized Industrial Sizes"
    }
  },
  {
    id: "EU_BALL_VALVE_SERIES",
    name: "EU Standard Industrial Ball Valve",
    brand: "Batu Valve",
    category: "Valves",
    categoryId: "valves",
    subCategory: "European Standard Series",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776165462/efab3992-22a7-446c-b795-39a84e6996ae.png",
    description: "High-efficiency quarter-turn valve designed to meet stringent EU safety and environmental regulations. Features a leak-proof design and corrosion-resistant materials for precise flow control in diverse industrial systems.",
    keySpecs: [
      { label: "Operation", value: "Quarter-Turn Quick Shut-Off" },
      { label: "Compliance", value: "CE Marking / ISO 9001" },
      { label: "Material", value: "Stainless Steel / Carbon Steel / Brass" },
      { label: "Standards", value: "European Union Safety Certified" }
    ],
    variantInfo: {
      count: 24,
      sizeRange: "Standard Metric & Imperial Sizes"
    }
  },
  {
    id: "STEEL_BALL_VALVE_SERIES",
    name: "Industrial Steel Ball Valve",
    brand: "Batu Valve",
    category: "Valves",
    categoryId: "valves",
    subCategory: "Robust Steel Series",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776165525/3761b579-6d50-47b5-ba8f-7d59a4ab9335.png",
    description: "A heavy-duty quarter-turn solution designed for high-pressure and high-temperature environments. Built with high-quality steel for maximum durability, corrosion resistance, and leak-proof performance across critical industrial pipelines.",
    keySpecs: [
      { label: "Material", value: "High-Grade Carbon / Stainless Steel" },
      { label: "Operation", value: "Quarter-Turn Quick Shut-Off" },
      { label: "Durability", value: "Corrosion & Wear Resistant" },
      { label: "Application", value: "Oil, Gas, Water & Chemical Processing" }
    ],
    variantInfo: {
      count: 35,
      sizeRange: "Standard & Large Bore Options"
    }
  },
  {
    id: "API6D_PIG_BALL_VALVE",
    name: "API 6D Pig Ball Valve (Launcher/Receiver)",
    brand: "Batu Valve",
    category: "Valves",
    categoryId: "valves",
    subCategory: "Pipeline Maintenance Series",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776437357/download_gpukuc.jpg",
    description: "A specialized system for launching and receiving pipeline pigs used in cleaning, inspection, and fluid separation. Provides a compact, safe alternative to traditional pigging systems with full API 6D compliance.",
    keySpecs: [
      { label: "Standard", value: "API 6D Certified" },
      { label: "Application", value: "Pipeline Pigging & Cleaning" },
      { label: "Safety", value: "Integrated Pressure Release" },
      { label: "Pig Types", value: "Molded / Spherical Compatible" }
    ],
    variantInfo: {
      count: 6,
      sizeRange: "Custom Pipeline Dimensions"
    }
  },
  {
    id: "API6D_FULLY_WELDED_BALL_VALVE",
    name: "API 6D Fully Welded Ball Valve",
    brand: "Batu Valve",
    category: "Valves",
    categoryId: "valves",
    subCategory: "Gas Transmission Series",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776165779/59a7754f-44c6-4ad0-b29d-fa1178e94a7a.png",
    description: "A single-piece welded body design specifically engineered for underground gas transmission and distribution. Eliminates leakage risks while offering double trunnion support and automatic cavity pressure relief.",
    keySpecs: [
      { label: "Body Design", value: "Fully Welded (Leak-Proof)" },
      { label: "Seat Type", value: "Spring Loaded / Metal-to-Metal Optional" },
      { label: "Standard", value: "API 6D Certified" },
      { label: "Features", value: "Automatic Body Cavity Relief" }
    ],
    variantInfo: {
      count: 14,
      sizeRange: "Optimized for Underground Installation"
    }
  },
  {
    id: "HP_WAFER_TYPE_BALL_VALVE",
    name: "High Pressure Wafer Type Ball Valve",
    brand: "Batu Valve",
    category: "Valves",
    categoryId: "valves",
    subCategory: "Compact Performance Series",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776165836/f6a6ce7d-0407-4886-a670-ca305496966a.png",
    description: "A compact, lightweight alternative to flanged valves, designed specifically for space-constrained environments like offshore rigs. Engineered for extreme high-pressure service with a slim monoblock footprint.",
    keySpecs: [
      { label: "Pressure Rating", value: "Up to Class 2500 / PN 420" },
      { label: "Design", value: "Slim Wafer / Monoblock" },
      { label: "Compliance", value: "API / ISO / CE Certified" },
      { label: "Actuation", value: "Manual / Gearbox / Actuator Ready" }
    ],
    variantInfo: {
      count: 12,
      sizeRange: "Up to 16\""
    }
  },
  {
    id: "BURAK_TYPE_WAFER_MONOBLOCK",
    name: "Burak Type Wafer Mono-block Ball Valve",
    brand: "Batu Valve",
    category: "Valves",
    categoryId: "valves",
    subCategory: "Monoblock Series",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776165902/427f90ee-6499-4d01-830b-b6db70496914.png",
    description: "A specialized single-piece body construction designed to be sandwiched between flanges. Known for its 'Burak Type' high-performance design, it offers a space-saving, cost-effective solution for critical fluid management without sacrificing durability.",
    keySpecs: [
      { label: "Design", value: "Mono-block Wafer Style" },
      { label: "Material", value: "Stainless / Carbon / Alloy Steel" },
      { label: "Features", value: "Space-Saving & Lightweight" },
      { label: "Connection", value: "Flange-to-Flange Sandwich" }
    ],
    variantInfo: {
      count: 15,
      sizeRange: "Compact Industrial Sizes"
    }
  },
  {
    id: "NATURAL_GAS_BALL_VALVE",
    name: "Natural Gas Ball Valve",
    brand: "Batu Valve",
    category: "Valves",
    categoryId: "valves",
    subCategory: "Gas Distribution Series",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776165968/1bddb422-d1fc-422d-9a59-3d09ea22aa62.png",
    description: "A precision quarter-turn valve specifically engineered for gas transmission and distribution networks. Features specialized leak-proof sealing (PTFE/Viton) to ensure maximum safety and compliance in emergency shutdown (ESD) systems.",
    keySpecs: [
      { label: "Application", value: "Natural Gas Distribution & Pipelines" },
      { label: "Sealing", value: "Leak-Proof PTFE / Viton Seals" },
      { label: "Operation", value: "90° Quarter-Turn (Manual/ESD)" },
      { label: "Material", value: "Corrosion-Resistant Stainless/Carbon Steel" }
    ],
    variantInfo: {
      count: 22,
      sizeRange: "Residential to Industrial Bore Sizes"
    }
  },
  {
    id: "JACKET_BALL_VALVE_SERIES",
    name: "Jacket Ball Valve (Thermal Control)",
    brand: "Batu Valve",
    category: "Valves",
    categoryId: "valves",
    subCategory: "Temperature Regulation Series",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776166090/1ef13623-19a8-4dd3-9410-5170562764fc.png",
    description: "Features an integrated outer jacket for the circulation of heating or cooling media. Essential for preventing solidification, freezing, or overheating of temperature-sensitive fluids like sulfur, bitumen, or resins.",
    keySpecs: [
      { label: "Design", value: "Full Jacket / Partial Jacket Body" },
      { label: "Media", value: "Steam / Hot Oil / Cooling Water" },
      { label: "Application", value: "Chemical, Bitumen, Food & Beverage" },
      { label: "Material", value: "Stainless Steel / Carbon Steel" }
    ],
    variantInfo: {
      count: 14,
      sizeRange: "Standard & High-Flow Configurations"
    }
  },
  {
    id: "INDUSTRIAL_CHECK_VALVE_SERIES",
    name: "Industrial Check Valve (Backflow Preventer)",
    brand: "Batu Valve",
    category: "Valves",
    categoryId: "valves",
    subCategory: "Non-Return Series",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776166144/88b46b7b-6590-46c2-857b-84cbb7e43abf.png",
    description: "An automatic one-way flow solution essential for protecting pumps and compressors from backflow damage. Available in various designs including ball, spring, and piston mechanisms to ensure system integrity across diverse industrial applications.",
    keySpecs: [
      { label: "Operation", value: "Automatic (Fluid-Driven)" },
      { label: "Function", value: "Backflow Prevention" },
      { label: "Designs", value: "Ball / Spring / Piston / Tilting Disc" },
      { label: "Application", value: "Water, Oil, Gas & Chemical Pipelines" }
    ],
    variantInfo: {
      count: 32,
      sizeRange: "Compact to Large Diameter Bore"
    }
  },
  {
    id: "PRECISION_NEEDLE_VALVE_SERIES",
    name: "Precision Needle Valve (Fine Regulation)",
    brand: "Batu Valve",
    category: "Valves",
    categoryId: "valves",
    subCategory: "Instrumentation Series",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776166264/e79f59e7-bd46-41a6-801d-b0e422626247.png",
    description: "Designed for ultra-fine flow regulation with a tapered needle-like stem. Features a fine-threaded stem for small, incremental adjustments, making it indispensable for laboratories, chemical dosing, and high-pressure gas systems.",
    keySpecs: [
      { label: "Regulation", value: "Incremental Fine Flow Control" },
      { label: "Stem Design", value: "Fine Threaded Tapered Needle" },
      { label: "Material", value: "Stainless Steel / Brass / Carbon Steel" },
      { label: "Application", value: "Laboratories, Dosing & HVAC" }
    ],
    variantInfo: {
      count: 40,
      sizeRange: "Precision Instrumentation Sizes"
    }
  },
  {
    id: "CAST_IRON_WATER_BALL_VALVE",
    name: "Cast Iron Water Ball Valve",
    brand: "Batu Valve",
    category: "Valves",
    categoryId: "valves",
    subCategory: "Water Works Series",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776166332/d9e1697e-e48c-41b2-99d3-d8714602201d.png",
    description: "A robust and cost-effective solution specifically designed for municipal and industrial water systems. Features a high-strength cast iron body with corrosion-resistant coatings (Epoxy/Zinc) to ensure a long service life in irrigation and treatment plants.",
    keySpecs: [
      { label: "Material", value: "Cast Iron (GG25 / GGG40)" },
      { label: "Coating", value: "Epoxy / Zinc Protective Layer" },
      { label: "Application", value: "Municipal Water, Irrigation & Fire Systems" },
      { label: "Feature", value: "Cost-Effective & Leak-Proof" }
    ],
    variantInfo: {
      count: 18,
      sizeRange: "Standard Municipal Pipe Sizes"
    }
  },
  {
    id: "HIGH_PRESSURE_EN_BALL_VALVE",
    name: "High Pressure European Norm (EN) Ball Valve",
    brand: "Batu Valve",
    category: "Valves",
    categoryId: "valves",
    subCategory: "European Standard Series",
    thumbnail: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1776166419/74d2f781-c142-4b6c-8924-ab8728450509.png",
    description: "Specially engineered to meet rigorous European Norm (EN) standards for high-pressure environments. Designed for systems reaching up to 1000 bar, offering leak-proof performance and compliance with EN 331, EN 558, and EN 14141.",
    keySpecs: [
      { label: "Pressure Rating", value: "Up to 1000 Bar" },
      { label: "Compliance", value: "EN 331 / EN 558 / EN 14141" },
      { label: "Operation", value: "90° Quarter-Turn Action" },
      { label: "Temperature", value: "Cryogenic to High-Temp Service" }
    ],
    variantInfo: {
      count: 26,
      sizeRange: "Metric EN Standard Sizes"
    }
  }
];

export default function CategoryListingPage() {
  const { categoryId } = useParams();
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
            variant="h2" 
            sx={{ 
              fontFamily: '"Barlow Condensed"', 
              fontWeight: 900, 
              textTransform: 'uppercase',
              lineHeight: 1
            }}
          >
            {categoryId?.toString().replace(/-/g, ' ') || "Collection"}
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