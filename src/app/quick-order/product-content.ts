import { PRODUCTS, ProductQuickOrder } from "./product";

export interface ProductContent {
  metaTitle: string;
  metaDescription: string;
  longDescription: string;
  keyFeatures: string[];
  applications: string;
}

// Google truncates around here — keep title's own text (before " | Valvenok"
// is appended by the layout) under this, and description under this.
const MAX_TITLE = 54; // 65 (Google's stated ceiling) minus 11 chars for " | Valvenok"
const MAX_DESC = 155;

// Optional hand-tuned overrides for specific SKUs that deserve bespoke copy
// (e.g. a flagship product). Leave empty by default — everything else is
// generated automatically from PRODUCTS below. Only add entries here when
// you actually want to override the generic result for that one SKU.
const OVERRIDES: Partial<Record<string, Partial<ProductContent>>> = {};

function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  const cut = str.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  const safe = lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut;
  return safe.trim().replace(/[,.;:]+$/, "");
}

function getSize(specs: Record<string, string>): string {
  return specs.tubeOD || specs.pipeSize || specs.sizeA || "";
}

function getConnection(specs: Record<string, string>): string {
  return specs.threadType || specs.endConnection || specs.connection || "";
}

function buildProductContent(product: ProductQuickOrder): ProductContent {
  const specs = product.specs ?? {};
  const category = product.category;
  const size = getSize(specs);
  const connection = getConnection(specs);
  const material = specs.material ?? "SS316";

  // The SKU is reserved space up front so truncation can never cut it off —
  // only the descriptive part (PANAM/category/size/material) gets shortened.
  const skuPart = `(${product.sku})`;
  const descriptivePart = ["PANAM", category, size, material]
    .filter(Boolean)
    .join(" ");
  const availableForDescriptive = Math.max(MAX_TITLE - skuPart.length - 1, 0);
  const metaTitle =
    `${truncate(descriptivePart, availableForDescriptive)} ${skuPart}`.trim();

  const specBits = [size && `${size} size`, connection]
    .filter(Boolean)
    .join(", ");
  const descRaw = `PANAM ${category} (${product.sku})${
    specBits ? `, ${specBits}` : ""
  }, ${material}. Leak-tight, high-pressure rated. In stock at Valvenok.`;
  const metaDescription = truncate(descRaw, MAX_DESC);

  const longDescription = `The Valvenok ${product.sku} ${product.name} is a high-performance ${category.toLowerCase()} engineered for secure, leak-tight connections in pneumatic and industrial fluid systems.`;

  const keyFeatures = [
    size
      ? `${size}${connection ? ` ${connection}` : ""} compatibility for precise applications`
      : `${product.name} compatibility for precise applications`,
    "Twin-ferrule or thread-sealed design for fast, leak-tight installation",
    `${material} construction for corrosion resistance and durability`,
    "Rated for demanding high-pressure industrial and instrumentation service",
  ];

  const applications =
    "Ideal for pneumatic systems, automation equipment, compressed air systems, and industrial fluid transfer applications.";

  return {
    metaTitle,
    metaDescription,
    longDescription,
    keyFeatures,
    applications,
  };
}

export function getProductContent(sku: string): ProductContent {
  const product = PRODUCTS.find((p) => p.sku === sku);

  if (!product) {
    return {
      metaTitle: `PANAM ${sku}`,
      metaDescription:
        "High-performance PANAM stainless steel fitting from Valvenok.",
      longDescription: `PANAM ${sku} stainless steel fitting.`,
      keyFeatures: [
        "Stainless steel construction for corrosion resistance and durability",
      ],
      applications: "Ideal for industrial fluid transfer applications.",
    };
  }

  const generated = buildProductContent(product);
  const override = OVERRIDES[sku];
  return override ? { ...generated, ...override } : generated;
}
