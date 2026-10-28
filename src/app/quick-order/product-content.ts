import { PRODUCTS, ProductQuickOrder } from "./product";

export interface ProductContent {
  metaTitle: string;
  metaDescription: string;
  longDescription: string;
  keyFeatures: string[];
  applications: string;
  /** Plain-English overview paragraphs shown in the description tab. */
  overview: string[];
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


// What each fitting type is for, in plain terms. Shown on every SKU page so
// buyers (and search engines) get more than a one-line description.
const CATEGORY_OVERVIEW: Record<string, string> = {
  "Adapter": "An adapter joins two different connection types or sizes, for example a tube fitting end to a threaded port, so a line can move between standards without extra joints.",
  "Back Ferrule": "The back ferrule is the rear ring of a twin-ferrule compression fitting. When the nut is tightened it drives the front ferrule forward and grips the tube, giving the joint its holding power and resistance to vibration.",
  "Ball Valve": "A ball valve uses a rotating ball with a bore through it to open or close the line with a quarter turn of the handle, giving quick on-off isolation in instrument and process tubing.",
  "Bulkhead Union": "A bulkhead union passes a line through a panel or enclosure wall and is held in place by a lock nut, so tubing can be connected on both sides of the panel.",
  "Check Valve": "A check valve lets flow pass in one direction only and closes automatically against reverse flow, protecting pumps, instruments and upstream equipment from backflow.",
  "Close Nipple": "A close nipple is a very short length of male-threaded pipe used to join two female-threaded components as closely together as possible.",
  "Female Connector": "A female connector joins a tube to a male-threaded component, with a tube fitting on one end and a female thread on the other.",
  "Female Tee": "A female tee splits or combines flow at a 90-degree branch, with female threads on all three ports for connecting male-threaded pipe or fittings.",
  "Front Ferrule": "The front ferrule is the leading ring of a twin-ferrule compression fitting. It is pushed into the fitting body as the nut is tightened and forms the primary seal against the tube and the body.",
  "Hex Coupling": "A hex coupling joins two male-threaded pipes or fittings in a straight line, with female threads at both ends and hex flats for tightening with a spanner.",
  "Hex Nipple": "A hex nipple joins two female-threaded components in a straight line, with male threads at both ends and a central hex for tightening.",
  "Hex Plug": "A hex plug closes off an unused female-threaded port, for example on a manifold, valve or tee, and is tightened with a spanner on its hex head.",
  "Hex Reducing Nipple": "A hex reducing nipple joins two female-threaded components of different sizes or thread types, with a different male thread at each end and a hex for tightening.",
  "Male Branch Tee": "A male branch tee splits or combines flow, with tube fitting ends on the run and a male thread on the branch for connecting to a threaded port.",
  "Male Connector": "A male connector joins a tube to a female-threaded port, such as an instrument, valve or manifold, with a tube fitting on one end and a male thread on the other.",
  "Male Elbow": "A male elbow turns a tube line through 90 degrees into a female-threaded port, with a tube fitting on one end and a male thread on the other.",
  "Needle Valve": "A needle valve uses a fine tapered stem to give precise control of flow and positive shut-off, which makes it well suited to instrument isolation, sampling and flow regulation.",
  "Nut": "The nut is the threaded part of a compression fitting that drives the ferrules onto the tube when tightened. Spare nuts are useful for remaking joints and for maintenance stock.",
  "Reducing Bushing": "A reducing bushing fits inside a larger female port to give a smaller female thread, so a smaller pipe or fitting can be connected without a separate adapter.",
  "Street Elbow": "A street elbow turns a threaded line through 90 degrees, with a male thread on one end and a female thread on the other, so it can screw directly into a fitting.",
  "Swivel Connector": "A swivel connector joins a tube or pipe to a port while letting one end rotate, which makes alignment easier during installation and avoids twisting the line.",
  "Tube Cap": "A tube cap seals the end of a tube by fitting over it like a compression fitting, closing off a line that is not in use or being pressure tested.",
  "Tube Plug": "A tube plug closes off the tube end of a fitting body, sealing an unused port on a tee, cross or union without removing the fitting.",
  "Union Elbow": "A union elbow joins two tubes at 90 degrees, with tube fitting ends on both sides, to change direction in a tube run without bending the tubing.",
  "Union Tee": "A union tee joins three tubes at a 90-degree branch, with tube fitting ends on all three ports, to split or combine flow in a tube run.",
  "Union": "A union joins two tubes of the same size in a straight line, with a tube fitting at both ends, and is used to extend or repair a tube run.",
};

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
  const availableForDescriptive = Math.max(MAX_TITLE - skuPart.length - 1, 0);
  // Include the thread type when it fits; otherwise fall back to the shorter
  // form rather than cutting the thread name off half-way.
  const withConnection = ["PANAM", category, size, material, connection]
    .filter(Boolean)
    .join(" ");
  const descriptivePart =
    withConnection.length <= availableForDescriptive
      ? withConnection
      : ["PANAM", category, size, material].filter(Boolean).join(" ");
  const baseTitle =
    `${truncate(descriptivePart, availableForDescriptive)} ${skuPart}`.trim();
  // Very short titles (e.g. ferrules with no thread type) read as thin in
  // search results, so pad them with the call to action when it fits.
  const buySuffix = [" – Buy Online", " – Buy Now"].find(
    (sfx) => baseTitle.length + sfx.length <= MAX_TITLE,
  );
  const metaTitle =
    baseTitle.length < 46 && buySuffix ? `${baseTitle}${buySuffix}` : baseTitle;

  const specBits = [size && `${size} size`, connection]
    .filter(Boolean)
    .join(", ");
  const descLead = `PANAM ${category} (${product.sku})${
    specBits ? `, ${specBits}` : ""
  }, ${material}. Leak-tight, high-pressure rated.`;
  const descLong = `${descLead} Order online from Valvenok, UK supplier of PANAM fittings.`;
  const metaDescription =
    descLong.length <= MAX_DESC
      ? descLong
      : truncate(`${descLead} Available from Valvenok.`, MAX_DESC);

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

  const specLine = [
    size && `${size} size`,
    connection && `${connection} connection`,
    specs.maxPressure && `rated to ${specs.maxPressure}`,
    `${material} construction`,
  ]
    .filter(Boolean)
    .join(", ");
  const overview = [
    CATEGORY_OVERVIEW[category] ??
      `The PANAM ${category.toLowerCase()} is a stainless steel instrumentation fitting for leak-tight connections in fluid and gas lines.`,
    `This part, ${product.sku}, is a PANAM ${category.toLowerCase()} with ${specLine}. Check the size and thread type against the mating component before ordering; thread standards such as NPT, BSPP and BSPT are not interchangeable.`,
    `You can add it to your basket and order online, or contact Valvenok's UK team for help matching it to tubing, ports or other PANAM fittings, or to quote larger quantities.`,
  ];

  return {
    metaTitle,
    metaDescription,
    longDescription,
    keyFeatures,
    applications,
    overview,
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
      overview: [],
    };
  }

  const generated = buildProductContent(product);
  const override = OVERRIDES[sku];
  return override ? { ...generated, ...override } : generated;
}
