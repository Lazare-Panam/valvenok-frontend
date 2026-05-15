import { PRODUCTS, ProductQuickOrder } from "./product";

export interface ProductContent {
  metaTitle: string;
  metaDescription: string;
  longDescription: string;
  keyFeatures: string[];
  applications: string;
}

// SEO copy from your SEO consultant, verbatim from his Word doc.
// Keyed by SKU.
export const PRODUCT_CONTENT: Record<string, ProductContent> = {
  // ─── UNION TEE ───────────────────────────────────────────────
  "PUT-M10-SS": {
    metaTitle: "PANAM Union TEE Stainless Steel Tube Fitting | Valvenok",
    metaDescription:
      "PANAM Union Tee Socket Weld (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 6,600 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PUT-M10-SS 10mm Outside Diameter x 10mm Outside Diameter, Hydraulic Twin Ferrule Metric Compression Fitting, Tee, Equal Tube x Tube, 316 Stainless Steel, PANAM",
    keyFeatures: [
      "Push-to-connect design for quick and easy installation",
      "Compatible with 10mm outer diameter tubing",
      "Straight fitting configuration for inline connections",
      "Stainless steel construction for superior corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PUT-M08-SS": {
    metaTitle: "PANAM Union TEE Straight Tube Fitting | Valvenok",
    metaDescription:
      "PANAM Union Tee Socket Weld (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 9,790 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PUT-M08-S 8mm Outside Diameter x 8mm Outside Diameter, Hydraulic Twin Ferrule Metric Compression Fitting, Tee, Equal Tube x Tube, 316 Stainless Steel, PANAM",
    keyFeatures: [
      "Push-to-connect design for quick installation",
      "Compatible with 8mm outer diameter tubing",
      "Straight fitting configuration for inline connections",
      "Durable construction with corrosion-resistant materials",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PUT-4G-SWL-SS": {
    metaTitle: "PANAM Union TEE Tube Socket Weld (Metric Tube) | Valvenok",
    metaDescription:
      "PANAM Union Tee Socket Weld (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 8,100 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PUT-4G-SWL-SS 1/4" Outside Diameter x 1/4" Outside Diameter, Hydraulic 316 Stainless Steel Twin Ferrule Imperial Compression Fitting, Equal Tube x Tube, Tee, PANAM',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "¼” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PUT-08-SS": {
    metaTitle: "PANAM Union TEE Tube Socket Weld (Metric Tube) | Valvenok",
    metaDescription:
      "PANAM Union Tee Socket Weld (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 7,300 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PUT-08-SS 1/2" Outside Diameter x 1/2" Outside Diameter, Hydraulic 316 Stainless Steel Twin Ferrule Imperial Compression Fitting, Equal Tube x Tube, Tee, PANAM',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "1/2” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PUT-06-SS": {
    metaTitle: "PANAM Union TEE Tube Socket Weld (Metric Tube) | Valvenok",
    metaDescription:
      "PANAM Union Tee Socket Weld (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 8,100 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PUT-06-SS 3/8" Outside Diameter x 3/8" Outside Diameter, Hydraulic 316 Stainless Steel Twin Ferrule Imperial Compression Fitting, Equal Tube x Tube, Tee, PANAM',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "3/8” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PUT-04-SS": {
    metaTitle: "PANAM Union TEE Tube Socket Weld (Metric Tube) | Valvenok",
    metaDescription:
      "PANAM Union Elbow Socket Weld (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 9,600 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PUT-04-SS 1/4" Outside Diameter x 1/4" Outside Diameter, Hydraulic 316 Stainless Steel Twin Ferrule Imperial Compression Fitting, Equal Tube x Tube, Tee, PANAM',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      '1/4" tube compatibility for precise applications',
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },

  // ─── UNION ELBOW ──────────────────────────────────────────────
  "PUE-M15-SS": {
    metaTitle: "PANAM Union ELBOW Swivel Elbow SS Fitting | Valvenok",
    metaDescription:
      "PANAM Union Elbow Socket Weld (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 6,820 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PUE-M15-SS 15mm Outside Diameter x 15mm Outside Diameter, Hydraulic Twin Ferrule Metric Compression Fitting, 90° Elbow, Equal Tube x Tube, 316 Stainless Steel, PANAM",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "15mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PUE-M12-SS": {
    metaTitle:
      "PANAM Union ELBOW PUE-M12-SS Swivel Elbow SS Fitting | Valvenok",
    metaDescription:
      "PANAM Union Elbow Socket Weld (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 6,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PUE-M12-SS 12mm Outside Diameter x 12mm Outside Diameter, Hydraulic Twin Ferrule Metric Compression Fitting, 90° Elbow, Equal Tube x Tube, 316 Stainless Steel, PANAM",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "12mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PUE-M10-SS": {
    metaTitle: "PANAM Union ELBOW Swivel Elbow SS Fitting | Valvenok",
    metaDescription:
      "PANAM Tube Fittings are available in Single & Double Ferrule Design. Tube Fittings are available in SS 316, Duplex, Monel, Hastelloy & Brass Materials. Leak-tight, high-pressure rated to 6,600 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PUE-M10-SS 10mm Outside Diameter x 10mm Outside Diameter, Hydraulic Twin Ferrule Metric Compression Fitting, 90° Elbow, Equal Tube x Tube, 316 Stainless Steel, PANAM",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "10mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PUE-M08-SS": {
    metaTitle:
      "PANAM Union ELBOW PUE-M08-SS Swivel Elbow SS Fitting | Valvenok",
    metaDescription:
      "PANAM Tube Fittings are available in Single & Double Ferrule Design. Tube Fittings are available in SS 316, Duplex, Monel, Hastelloy & Brass Materials. Leak-tight, high-pressure rated to 8,100 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PUE-M08-SS 8mm Outside Diameter x 8mm Outside Diameter, Hydraulic Twin Ferrule Metric Compression Fitting, 90° Elbow, Equal Tube x Tube, 316 Stainless Steel, PANAM",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "8mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PUE-12-SS": {
    metaTitle: "PANAM Union ELBOW PUE-12-SS Swivel Elbow SS Fitting | Valvenok",
    metaDescription:
      "PANAM Tube Fittings are available in Single & Double Ferrule Design. Tube Fittings are available in SS 316, Duplex, Monel, Hastelloy & Brass Materials. Leak-tight, high-pressure rated to 6,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PUE-12-SS 3/4" Outside Diameter x 3/4" Outside Diameter, Hydraulic 316 Stainless Steel Twin Ferrule Imperial Compression Fitting, Equal Tube x Tube, 90° Elbow, PANAM',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      '3/4" tube compatibility for precise applications',
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PUE-06-SS": {
    metaTitle: "PANAM Union ELBOW PUE-06-SS Swivel Elbow SS Fitting | Valvenok",
    metaDescription:
      "PANAM Tube Fittings are available in Single & Double Ferrule Design. Tube Fittings are available in SS 316, Duplex, Monel, Hastelloy & Brass Materials. Leak-tight, high-pressure rated to 8,100 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PUE-06-SS 3/8" Outside Diameter x 3/8" Outside Diameter, Hydraulic 316 Stainless Steel Twin Ferrule Imperial Compression Fitting, Equal Tube x Tube, 90° Elbow, PANAM',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "3/8” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PUE-04-SS": {
    metaTitle: "PANAM Union ELBOW PUE-04-SS Swivel Elbow SS Fitting | Valvenok",
    metaDescription:
      "PANAM Union Elbow Socket Weld (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 9,600 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PUE-04-SS 1/4" Outside Diameter x 1/4" Outside Diameter, Hydraulic 316 Stainless Steel Twin Ferrule Imperial Compression Fitting, Equal Tube x Tube, 90° Elbow, PANAM',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      '1/4" tube compatibility for precise applications',
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },

  // ─── UNION ────────────────────────────────────────────────────
  "PU-M15-SS": {
    metaTitle:
      "PANAM Union TEE PU-M15-SS Tube Socket Weld (Metric Tube) | Valvenok",
    metaDescription:
      "PANAM Union Elbow Socket Weld (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 6,190 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PU-M15-SS 15mm Outside Diameter x 15mm Outside Diameter, Hydraulic Twin Ferrule Metric Compression Fitting, Tee, Equal Tube x Tube, 316 Stainless Steel, PANAM",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "15mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PU-M10-SS": {
    metaTitle:
      "PANAM Union TEE PU-M10-SS Tube Socket Weld (Metric Tube) | Valvenok",
    metaDescription:
      "PANAM Union Elbow Socket Weld (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 6,820 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PU-M10-SS 10mm Outside Diameter x 10mm Outside Diameter, Hydraulic Twin Ferrule Metric Compression Fitting, Tee, Equal Tube x Tube, 316 Stainless Steel, PANAM",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "10mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PU-M08-SS": {
    metaTitle:
      "PANAM Union TEE PU-M08-SS Tube Socket Weld (Metric Tube) | Valvenok",
    metaDescription:
      "PANAM Union Elbow Socket Weld (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 8,100 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PU-M08-SS 8mm Outside Diameter x 8mm Outside Diameter, Hydraulic Twin Ferrule Metric Compression Fitting, Tee, Equal Tube x Tube, 316 Stainless Steel, PANAM",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "8mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PU-M06-SS": {
    metaTitle:
      "PANAM Union TEE PU-M06-SS Tube Socket Weld (Metric Tube) | Valvenok",
    metaDescription:
      "PANAM Union Socket Weld (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 8,100 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PU-M06-SS 6mm Outside Diameter x 6mm Outside Diameter, Hydraulic Twin Ferrule Metric Compression Fitting, Tee, Equal Tube x Tube, 316 Stainless Steel, PANAM",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "6mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PU-08-SS": {
    metaTitle: "PANAM Union PU-08-SS Tube Socket Weld (Metric Tube) | Valvenok",
    metaDescription:
      "PANAM Union Socket Weld (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 7,300 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PU-08-SS 1/2" Outside Diameter x 1/2" Outside Diameter, Hydraulic 316 Stainless Steel Twin Ferrule Imperial Compression Fitting, Metric Tube x Imperial Tube, Straight, PANAM',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "1/2” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PU-06-SS": {
    metaTitle: "PANAM Union PU-06-SS Tube Socket Weld (Metric Tube) | Valvenok",
    metaDescription:
      "PANAM Union Socket Weld (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 8,100 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PU-06-SS 3/8" Outside Diameter, Hydraulic Twin Ferrule Imperial Compression Fitting, Equal Tube x Tube, Straight, Stainless Steel, PANAM',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "3/8” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PU-04-SS": {
    metaTitle: "PANAM Union PU-04-SS Tube Socket Weld (Metric Tube) | Valvenok",
    metaDescription:
      "PANAM Union Socket Weld (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 9,600 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PU-06-SS 1/4" Outside Diameter, Hydraulic 316 Stainless Steel Twin Ferrule Imperial Compression Fitting, Equal Tube x Tube, Straight, PANAM',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "1/4” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },

  // ─── TUBE PLUG / TUBE CAP ─────────────────────────────────────
  "PTP-M08-SS": {
    metaTitle:
      "PANAM Tube Plug PTP-M08-SS Stainless Steel 8mm OD Fitting | Valvenok",
    metaDescription:
      "The PANAM Tube Plug (PTP) is engineered for securely plugging unused 8 mm metric tube fitting ports in instrumentation, pneumatic, and industrial systems. Manufactured in SS316, Monel, and Hastelloy, it delivers excellent corrosion resistance and durability across demanding environments. Rated for high-pressure service up to 10,000 psig, the plug provides a reliable, leak-tight seal suitable for both permanent isolation and temporary system maintenance.",
    longDescription:
      "8mm Outside Diameter, Hydraulic Twin Ferrule Metric Compression Fitting, Plug, Tube x Tube, 316 Stainless Steel, PANAM",
    keyFeatures: [
      "Tube Plug Design: Specifically designed to plug the port of a PANAM 8mm metric fitting.",
      "Double-Ferrule System Compatibility: Works seamlessly with standard double-ferrule compression bodies.",
      "High Pressure Rated: Capable of handling working pressures up to 10,000 psi (689 bar).",
      "Stainless Steel Construction: Manufactured from SS316 for superior durability and corrosion resistance.",
    ],
    applications:
      "Sealing manifold ports, valves, and unused fitting connections in pneumatic and fluid systems.",
  },
  "PTC-M08-SS": {
    metaTitle:
      "PANAM Tube Cap PTC-M08-SS Stainless Steel 8mm OD Fitting | Valvenok",
    metaDescription:
      "PANAM Tube Cap (PTC) for 8mm metric tubing. Provides a leak-tight seal for tube ends in high-pressure environments (up to 10,000 psig). Available in SS316, Duplex, and Monel for maximum corrosion resistance.",
    longDescription:
      "The PANAM PTC-M08-SS is a precision-engineered Tube Cap used to terminate an 8mm metric tube run. It utilizes the PANAM double-ferrule design to ensure a 100% factory-tested, leak-proof seal on the end of a tube.",
    keyFeatures: [
      "Tube Termination: Designed to cap the end of an 8mm metric tube.",
      "8mm Metric Compatibility: Specifically sized for metric tube OD requirements.",
      "High Performance: Offers a leak-tight seal even in high-vibration and high-pressure industrial environments",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PTC-M06-SS": {
    metaTitle:
      "PANAM Tube Cap PTC-M06-SS Stainless Steel 6mm OD Fitting | Valvenok",
    metaDescription:
      "PANAM Tube Cap (PTC) for 6mm metric tubing. High-pressure rated to 10,000 psig. Made from 316 Stainless Steel for superior durability in industrial fluid transfer and pneumatic systems.",
    longDescription:
      "The PANAM PTC-M06-SS is a Tube Cap designed for 6mm metric tubing. It provides a secure, permanent, or temporary closure for tube ends in demanding automation and process control systems.",
    keyFeatures: [
      "6mm Tube Compatibility: Precise fit for 6mm outer diameter tubing.",
      "Double-Ferrule Technology: Ensures a safe, high-pressure seal that exceeds industry standards.",
      "Corrosion Resistant: Built with high-grade stainless steel for longevity in harsh environments.",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PTC-06-SS": {
    metaTitle:
      "PANAM Tube Cap PTC-06-SS Stainless Steel 3/8” OD Fitting | Valvenok",
    metaDescription:
      'PANAM 3/8" Tube Cap (PTC) for imperial tubing. Rated for high-pressure service up to 10,000 psig. Precision-machined from SS316 for a leak-free, durable seal in industrial applications.',
    longDescription:
      'The PANAM PTC-06-SS is a high-performance Tube Cap designed for 3/8” imperial tubing (indicated by the "06" size code). It is used to provide a reliable, high-pressure termination for tube lines.',
    keyFeatures: [
      "3/8” Imperial Size: Specifically for 3/8-inch O.D. tubing.",
      "Double-Ferrule Design: Provides a high-reliability, leak-tight seal.",
      "Traceability: Features full heat code traceability for safety and compliance.",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PTC-03-SS": {
    metaTitle: "PANAM Tube Cap Stainless Steel 3/16” OD Fitting | Valvenok",
    metaDescription:
      'PANAM 3/16" Tube Cap (PTC) for imperial tubing. Leak-tight and pressure-rated to 10,000 psig. Ideal for instrumentation and pneumatic systems requiring secure tube end termination.',
    longDescription:
      'The PANAM PTC-03-SS is a specialized Tube Cap for 3/16” imperial tubing (indicated by the "03" size code). It is designed to cap off smaller diameter tube lines while maintaining full pressure integrity.',
    keyFeatures: [
      "3/16” Imperial Compatibility: Engineered for 3/16”-inch O.D. tubing connections.",
      "Extreme Pressure Reliability: Rated for working pressures up to 10,000 psi.",
      "Material Integrity: Constructed from SS316; also available in Monel and Duplex alloys.",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },

  // ─── STREET ELBOW ─────────────────────────────────────────────
  "PSE-6N-SS": {
    metaTitle:
      "PANAM Street Elbow Stainless Steel 3/8” NPT Pipe Fitting | Valvenok",
    metaDescription:
      'PANAM Street Elbow (PSE) high-pressure pipe fittings in SS316. Featuring 3/8" Male to Female NPT connections, rated up to 10,000 psig. Designed for extreme durability and leak-tight performance in oil, gas, and industrial pneumatic systems.',
    longDescription:
      "The PANAM PSE-6N-SS is a heavy-duty Street Elbow designed to provide a 90-degree change in direction between a male and female pipe connection. Engineered for high-pressure service, this fitting is manufactured from premium stainless steel bar stock or forgings to ensure maximum reliability in critical fluid systems.",
    keyFeatures: [
      'Street Elbow Configuration: Features one 3/8" Male NPT end and one 3/8" Female NPT end for compact 90-degree plumbing.',
      "High Pressure Rating: Rated for a maximum working pressure of 10,000 psig (689 bar).",
      "Precision Threads: All NPT threads are manufactured to meet ASME/ANSI B1.20.1 standards and are silver-plated or hardened to prevent galling.",
      "Superior Construction: Built from 316 Stainless Steel for exceptional corrosion resistance; also available in Monel, Hastelloy, and Duplex alloys upon request.",
      "Radius Junction Design: Features a radius junction in the elbow flow path to ensure smooth fluid flow and minimize pressure drop.",
    ],
    applications:
      "Ideal for high-pressure pipe connections in oil, gas, and industrial pneumatic systems.",
  },
  "PSE-4N-SS": {
    metaTitle:
      'PANAM Street Elbow Stainless Steel 1/4" M X 1/4" F NPT, Pipe Fitting | Valvenok',
    metaDescription:
      'PANAM Street Elbow (PSE) high-pressure pipe fittings in SS316. Featuring 1/4" Male to 1/4" Female NPT connections, rated up to 10,000 psig. Designed for extreme durability and leak-tight performance in oil, gas, and industrial pneumatic systems.',
    longDescription:
      "The PANAM PSE-4N-SS is a heavy-duty Street Elbow designed to provide a 90-degree change in direction between a male and female pipe connection. Engineered for high-pressure service, this fitting is manufactured from premium stainless steel bar stock or forgings to ensure maximum reliability in critical fluid systems.",
    keyFeatures: [
      'Street Elbow Configuration: Features one 1/4" Male NPT end and one 1/4" Female NPT end for compact 90-degree plumbing.',
      "High Pressure Rating: Rated for a maximum working pressure of 10,000 psig (689 bar).",
      "Precision Threads: All NPT threads are manufactured to meet ASME/ANSI B1.20.1 standards and are silver-plated or hardened to prevent galling.",
      "Superior Construction: Built from 316 Stainless Steel for exceptional corrosion resistance; also available in Monel, Hastelloy, and Duplex alloys upon request.",
      "Radius Junction Design: Features a radius junction in the elbow flow path to ensure smooth fluid flow and minimize pressure drop.",
    ],
    applications:
      "Ideal for high-pressure pipe connections in oil, gas, and industrial pneumatic systems.",
  },

  // ─── SWIVEL CONNECTOR ─────────────────────────────────────────
  "PSC-6G-6G-SWL-SS": {
    metaTitle:
      "PANAM Swivel Connector PSC-6G-6G-SWL-SS Swivel SS Fitting | Valvenok",
    metaDescription:
      "PANAM Swivel Connector (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PSC-6G-6G-SS 3/8" BSP Parallel Male x 3/8" BSP Parallel Female, Hydraulic Adaptor, Swivel Female, Straight, Stainless Steel, PANAM',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "3/8” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PSC-4G-6G-SWL-SS": {
    metaTitle:
      'PANAM Swivel Connector 1/4" X 3/8" BSP MALE X BSP FEMALE SWIVEL, SS316 PSC-4G-6G-SWL-SS | Valvenok',
    metaDescription:
      "PANAM Street Connector (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PSC-4G-6G-SS 1/4" BSP Parallel Male x 3/8" BSP Parallel Female, Hydraulic Adaptor, Swivel Female, Straight, Stainless Steel, PANAM',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "¼” pipe compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },

  // ─── REDUCING BUSHING ─────────────────────────────────────────
  "PRB-8N-4N-SS": {
    metaTitle: 'PANAM Reducing Bushing 1/2" M X 1/4" F NPT | Valvenok',
    metaDescription:
      "PANAM Reducing Bushing (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PRB-8N-4N-SS 1/2" NPT Male x 1/4" NPT Female, Instrumentation Pipe Fitting, Bush, Stainless Steel, PANAM',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "1/2” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PRB-8G-6G-SS": {
    metaTitle: 'PANAM Reducing Bushing 1/2" M X 3/8" F | Valvenok',
    metaDescription:
      "PANAM Reducing Bushing (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PRB-8G-6G-SS 1/2" NPT Male x 3/8" NPT Female, Instrumentation Pipe Fitting, Bush, Stainless Steel, PANAM',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "½” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PRB-4N-2N-SS": {
    metaTitle: 'PANAM Reducing Bushing 1/4" M X 1/8" F NPT | Valvenok',
    metaDescription:
      "PANAM Reducing Bushing (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PRB-4N-2N-SS 1/4" M X 1/8" F NPT Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "1/4” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },

  // ─── NEEDLE VALVE ─────────────────────────────────────────────
  "PNV-IB-S-08G-FF": {
    metaTitle: "PANAM Needle Valve ½” BSPP FEMALE | Valvenok",
    metaDescription:
      "PANAM Needle Valve HP Series Needle Valves: High-performance SS316 & Duplex valves rated to 60,000 PSI. Sizes 1/2”-1” with leak-tight cone & thread or NPT connections. Engineered for critical instrumentation, process control, and flow control systems in the global oil, gas, and power sectors, these valves ensure long-lasting durability and safety in rugged, corrosive, and hazardous environments.",
    longDescription:
      'The Valvenok PNV-IB-S-O8G-FF 1/2" BSPP Parallel Female, Needle Valve, 316 Stainless Steel, PTFE Seal, Maximum Working Temperature +200°C',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "1/2 mm pipe compatibility for precise applications",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PNV-IB-S-06G-FF": {
    metaTitle: "PANAM Needle Valve IB 3/8” BSPP FEMALE | Valvenok",
    metaDescription:
      "PANAM Needle Valve IB (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PNV-IB-S-O6G-FF 3/8" BSP Parallel Female, Needle Valve, 316 Stainless Steel, PTFE Seal, Maximum Working Temperature +200°C, Maximum Working Pressure 413 bar, PANAM',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "3/8” pipe compatibility for precise applications",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PNV-IB-S-04G-FF": {
    metaTitle: "PANAM Needle Valve IB ¼” BSPP | Valvenok",
    metaDescription:
      "PANAM Needle Valve (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      'The Valvenok PNV-IB-S-04G-FF 1/4" BSP Parallel Female, Needle Valve, 316 Stainless Steel, PTFE Seal, Maximum Working Temperature +200°C, Maximum Working Pressure 413 bar, PANAM',
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      '1/4" tube compatibility for precise applications',
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },

  // ─── NUT ──────────────────────────────────────────────────────
  "PN-M12-SS": {
    metaTitle: "PANAM NUT 12MM OD | Valvenok",
    metaDescription:
      "PANAM NUT (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PN-M12-SS 12mm OD Stainless Steel NUT Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "12mm tube compatibility for precise applications",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PN-M08-SS": {
    metaTitle: "PANAM NUT 8MM OD | Valvenok",
    metaDescription:
      "PANAM NUT (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PN-M08-SS 8mm Stainless Steel NUT Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "8mm tube compatibility for precise applications",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PN-04-SS": {
    metaTitle: "PANAM NUT ¼” OD | Valvenok",
    metaDescription:
      "PANAM NUT (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PN-04-SS ¼” Stainless Steel NUT Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "¼” tube compatibility for precise applications",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },

  // ─── BACK FERRULE ─────────────────────────────────────────────
  "PBF-M10-SS": {
    metaTitle: "PANAM BACK FERRULE 10MM | Valvenok",
    metaDescription:
      "PANAM BACK FERRULE (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PBF-M10-SS 10mm Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "10mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PBF-M08-SS": {
    metaTitle: "PANAM BACK FERRULE 8MM OD | Valvenok",
    metaDescription:
      "PANAM BACK FERRULE (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PBF-M08-SS 8mm Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "8mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PBF-M06-SS": {
    metaTitle: "PANAM BACK FERRULE 6MM OD | Valvenok",
    metaDescription:
      "PANAM BACK FERRULE (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PBF-M06-SS 6mm Stainless Steel Swivel Elbow Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "6mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PBF-08-SS": {
    metaTitle: "PANAM BACK FERRULE ½” OD | Valvenok",
    metaDescription:
      "PANAM BACK FERRULE (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PBF-08-SS ½” OD Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "½” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PBF-06-SS": {
    metaTitle: "PANAM BACK FERRULE 3/8” OD | Valvenok",
    metaDescription:
      "PANAM BACK FERRULE (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PBF-06-SS 3/8” OD Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "3/8” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PBF-04-SS": {
    metaTitle: "PANAM BACK FERRULE ¼” | Valvenok",
    metaDescription:
      "PANAM BACK FERRULE (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PBF-04-SS ¼” OD Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "¼” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },

  // ─── FRONT FERRULE ────────────────────────────────────────────
  "PFF-M12-SS": {
    metaTitle: "PANAM FRONT FERRULE 12MM | Valvenok",
    metaDescription:
      "PANAM FRONT FERRULE (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PFF-M12-SS 12MM OD Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "12mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PFF-M10-SS": {
    metaTitle: "PANAM FRONT FERRULE 10MM OD | Valvenok",
    metaDescription:
      "PANAM FRONT FERRULE (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PFF-M10-SS 10mm Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "10mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PFF-M08-SS": {
    metaTitle: "PANAM FRONT FERRULE 8MM OD | Valvenok",
    metaDescription:
      "PANAM FRONT FERRULE (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PFF-M08-SS 8mm Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "8mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PFF-M06-SS": {
    metaTitle: "PANAM FRONT FERRULE 6MM OD | Valvenok",
    metaDescription:
      "PANAM FRONT FERRULE (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PFF-M06-SS 6mm Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "6mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PFF-08-SS": {
    metaTitle: "PANAM FRONT FERRULE ½” OD | Valvenok",
    metaDescription:
      "PANAM FRONT FERRULE (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PFF-08-SS ½” OD Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "½” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PFF-06-SS": {
    metaTitle: "PANAM FRONT FERRULE 3/8” OD | Valvenok",
    metaDescription:
      "PANAM FRONT FERRULE (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PFF-06-SS 3/8” OD Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "3/8” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PFF-04-SS": {
    metaTitle: "PANAM FRONT FERRULE ¼” OD | Valvenok",
    metaDescription:
      "PANAM FRONT FERRULE (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PFF-04-SS ¼” OD Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "¼” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },

  // ─── FEMALE TEE ───────────────────────────────────────────────
  "PFT-4N-SS": {
    metaTitle: "PANAM Female Tee ¼” NPT | Valvenok",
    metaDescription:
      "PANAM CROSS FITTING (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PFT-4N-SS ¼” OD Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "1/4” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },

  // ─── FEMALE CONNECTOR ─────────────────────────────────────────
  "PFC-04-4N-SS": {
    metaTitle: "PANAM FEMALE CONNECTOR ¼” NPT | Valvenok",
    metaDescription:
      "PANAM FEMALE CONNECTOR (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PFC-04-4N-SS ¼” OD Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "¼” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PFC-08-8G-SS": {
    metaTitle: "PANAM FEMALE CONNECTOR ½” OD BSPP | Valvenok",
    metaDescription:
      "PANAM FEMALE CONNECTOR (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PFC-08-8G-SS ½” OD Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "½” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PFC-M06-4G-SS": {
    metaTitle: "PANAM FEMALE CONNECTOR 6MM X ¼” | Valvenok",
    metaDescription:
      "PANAM FEMALE CONNECTOR (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PFC-M06-4G-SS 6mm OD Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "6mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },

  // ─── BULKHEAD UNION ───────────────────────────────────────────
  "PBU-M08-SS": {
    metaTitle: "PANAM BULKHEAD UNION 8MM OD | Valvenok",
    metaDescription:
      "PANAM BULKHEAD UNION (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PBU-M08-SS 8mm Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "8mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PBU-8G-SS": {
    metaTitle: "PANAM BULKHEAD UNION ½” (M) BSPP | Valvenok",
    metaDescription:
      "PANAM BULKHEAD UNION (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PBU-8G-SS ¼” OD Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "¼” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PBU-6G-SS": {
    metaTitle: "PANAM BULKHEAD UNION 3/8” (M) BSPP | Valvenok",
    metaDescription:
      "PANAM BULKHEAD (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PBU-6G-SS 3/8” OD Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "3/8” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PBU-4G-SS": {
    metaTitle: "PANAM BULKHEAD UNION ¼” (M) BSPP | Valvenok",
    metaDescription:
      "PANAM BULKHEAD UNION (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PBU-4G-SS ¼” OD Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "¼” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PBU-12G-SS": {
    metaTitle: "PANAM BULKHEAD UNION ¾” (M) BSPP | Valvenok",
    metaDescription:
      "PANAM BULKHEAD (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PBU-12G-SS ¾” OD Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "¾” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },

  // ─── ADAPTER ──────────────────────────────────────────────────
  "PA-4G-SS-FSWL": {
    metaTitle: "PANAM ADAPTER ¼” (6MM) BSPP | Valvenok",
    metaDescription:
      "PANAM ADAPTER (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PA-4G-SS-FSWL 6mm Stainless Steel Swivel Elbow Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "6mm tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
  "PA-4G-4N-SS": {
    metaTitle: "PANAM BACK FERRULE ¼” (F) NPT | Valvenok",
    metaDescription:
      "PANAM BACK FERRULE (Metric Tube) fittings in SS316, Monel, Hastelloy & Duplex. Leak-tight, high-pressure rated to 10,000 psig. Sizes 1/16”–2”. Designed for secure and efficient tube connections in pneumatic and industrial systems, this high-performance fitting offers superior corrosion resistance, leak-free sealing, and long-lasting durability in demanding environments.",
    longDescription:
      "The Valvenok PA-4G-4N-SS ¼” OD Stainless Steel Tube Fitting is a high-performance push-to-connect fitting designed for secure and flexible connections in pneumatic and industrial systems.",
    keyFeatures: [
      "Push-to-connect design for fast and easy installation",
      "¼” tube compatibility for precise applications",
      "Swivel elbow configuration for flexible positioning",
      "Stainless steel construction for corrosion resistance and durability",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  },
};

// ─── FALLBACK GENERATOR ───────────────────────────────────────────
// For SKUs not in PRODUCT_CONTENT above (mostly MALE CONNECTOR, MALE ELBOW,
// HEX PLUG, HEX NIPPLE variants), generates content using SEO consultant's
// exact template pattern with your real product data.

const CATEGORY_LABELS: Record<string, string> = {
  Adapter: "ADAPTER",
  "Back Ferrule": "BACK FERRULE",
  "Ball Valve": "BALL VALVE",
  "Bulkhead Union": "BULKHEAD UNION",
  "Check Valve": "CHECK VALVE",
  "Close Nipple": "CLOSE NIPPLE",
  "Female Connector": "FEMALE CONNECTOR",
  "Female Tee": "FEMALE TEE",
  "Front Ferrule": "FRONT FERRULE",
  "Hex Coupling": "HEX COUPLING",
  "Hex Nipple": "HEX NIPPLE",
  "Hex Plug": "HEX PLUG",
  "Hex Reducing Nipple": "HEX REDUCING NIPPLE",
  "Male Connector": "MALE CONNECTOR",
  "Male Elbow": "MALE ELBOW",
  "Needle Valve": "NEEDLE VALVE",
  Nut: "NUT",
  "Reducing Bushing": "REDUCING BUSHING",
  "Street Elbow": "STREET ELBOW",
  "Swivel Connector": "SWIVEL CONNECTOR",
  "Tube Cap": "TUBE CAP",
  "Tube Plug": "TUBE PLUG",
  Union: "UNION",
  "Union Elbow": "UNION ELBOW",
  "Union Tee": "UNION TEE",
};

function getSizeLabel(product: ProductQuickOrder): string {
  const specs = product.specs ?? {};
  return specs.tubeOD || specs.pipeSize || specs.sizeA || "";
}

function generateFallbackContent(product: ProductQuickOrder): ProductContent {
  const categoryUpper =
    CATEGORY_LABELS[product.category] ?? product.category.toUpperCase();
  const specs = product.specs ?? {};
  const size = getSizeLabel(product);

  // Build title: PANAM [Size] [Category], SS316 ([SKU]) | Valvenok
  const titleParts = ["PANAM"];
  if (size) titleParts.push(size);
  titleParts.push(categoryUpper);

  // Add thread/connection detail if available
  const thread = specs.threadType || specs.endConnection || specs.connection;
  if (thread) titleParts.push(thread);

  titleParts.push("SS316");
  titleParts.push(`(${product.sku})`);

  const metaTitle = `${titleParts.join(" ")} | Valvenok`;

  // Build unique description with SKU + specs
  const specDetail = Object.entries(specs)
    .slice(0, 3)
    .map(([k, v]) => `${k.replace(/([A-Z])/g, " $1").trim()}: ${v}`)
    .join(", ");

  const metaDescription = `Buy the PANAM ${product.sku} ${size} ${categoryUpper.toLowerCase()} in SS316. ${specDetail}. Rated to 10,000 psig, leak-tight twin-ferrule design for instrumentation, pneumatic and industrial fluid systems. In stock at Valvenok.`;

  return {
    metaTitle,
    metaDescription,
    longDescription: `The Valvenok ${product.sku} ${size} Stainless Steel ${categoryUpper} is a high-performance fitting designed for secure, leak-tight connections in pneumatic and industrial systems.`,
    keyFeatures: [
      `${size || product.name} compatibility for precise applications`,
      "Twin-ferrule design for fast, leak-tight installation",
      "SS316 construction for corrosion resistance and durability",
      "Rated to 10,000 psig working pressure",
    ],
    applications:
      "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.",
  };
}

// ─── PUBLIC API ──────────────────────────────────────────────────
export function getProductContent(sku: string): ProductContent {
  const explicit = PRODUCT_CONTENT[sku];
  if (explicit) return explicit;

  const product = PRODUCTS.find((p) => p.sku === sku);
  if (!product) {
    return {
      metaTitle: `PANAM ${sku} | Valvenok`,
      metaDescription:
        "High-performance PANAM stainless steel fitting from Valvenok.",
      longDescription: `PANAM ${sku} stainless steel fitting.`,
      keyFeatures: [
        "Stainless steel construction for corrosion resistance and durability",
      ],
      applications: "Ideal for industrial fluid transfer applications.",
    };
  }

  return generateFallbackContent(product);
}
