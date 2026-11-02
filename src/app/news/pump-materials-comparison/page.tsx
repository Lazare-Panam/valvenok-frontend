"use client";

import {
  ArticleLayout,
  Lead,
  H2,
  P,
  A,
  DataTable,
  Bars,
  BarTabs,
  Cards,
  OL,
  Callout,
  FAQ,
  CTA,
  RelatedLinks,
  Finder,
} from "../components/Article";

const SLUG = "/news/pump-materials-comparison";
const URL = `https://www.valvenok.com${SLUG}`;
const COVER = "https://pblol2.blob.core.windows.net/valvenok-images/blogs/pump-materials-comparison.jpg";
const HEADLINE = "Pump Materials Compared: Cast Iron, Bronze, Stainless Steel and Engineered Plastic";
const DESCRIPTION =
  "Compare cast iron, bronze, 304, 316 and 904L stainless and PPS plastic for pump casings and impellers: corrosion, abrasion, cost, and which WALRUS pumps use each.";

const QUICK = [
  <><strong>Clean, cold fresh water:</strong> cast iron or engineered plastic with stainless 304 internals. Lowest cost, adequate life.</>,
  <><strong>Salt, brackish or chlorinated water:</strong> stainless 316 as a minimum, 904L or bronze for seawater. Never cast iron in permanent service.</>,
  <><strong>Sand, grit or shock loads:</strong> cast iron. Wall mass absorbs abrasion and hydraulic shock that wears thin stainless or plastic.</>,
  <><strong>Coolant, light oil, hot water:</strong> stainless wetted parts with a seal elastomer matched to the fluid (NBR, HNBR, Viton or EPDM).</>,
];

const COMPARE = {
  head: ["Material", "Typical use in a pump", "Corrosion behaviour", "PREN", "Abrasion / shock", "Relative cost", "Best for", "Avoid in"],
  rows: [
    ["Cast iron", "Casings, diffusers, valve housings", "No passive film; rusts and graphitises in soft, acidic or saline water", "—", "Excellent", "£ (lowest)", "Dewatering, irrigation, municipal fresh water, closed heating circuits", "Seawater, brackish water, potable lines needing clean water"],
    ["Bronze", "Impellers, wear rings, marine casings", "Good in seawater; low-zinc grades resist dezincification", "—", "Good", "££", "Marine cooling, seawater transfer, fire-fighting", "Ammonia-bearing fluids, high-velocity sand slurry"],
    ["Stainless 304", "Impellers, shafts, casings on light-duty pumps", "Passive chromium-oxide film; pits in chloride water", "≈ 19", "Good", "££", "Clean fresh water, potable supply, boosting", "Coastal, brackish or chlorinated pool water"],
    ["Stainless 316", "All wetted parts", "Molybdenum lifts pitting resistance for moderate chloride", "≈ 26", "Good", "£££", "Food, pharma, treated water, moderate chlorides", "Continuous seawater, high-chloride warm water"],
    ["904L super-austenitic", "All wetted parts, aggressive duty", "High Ni and Mo; resists chloride pitting and reducing acids", "≈ 35", "Good", "££££", "Seawater intake, brackish dewatering, mine water", "Duties where 316 already lasts — it rarely pays back"],
    ["Engineered plastic (PPS)", "Casings, covers on compact pumps", "Does not rust or pit; chemically inert to most water", "—", "Low", "£", "Domestic and light-commercial clean water boosting", "Abrasive solids, high pressure, impact-prone sites"],
  ],
};

const MATERIALS = ["Cast iron", "Bronze", "Stainless 304", "Stainless 316", "904L", "Plastic (PPS)"];
const SCORES = [
  { title: "Saltwater / chloride resistance", values: [1, 4, 2, 3, 5, 5] },
  { title: "Abrasion & shock tolerance", values: [5, 3, 3, 3, 3, 1] },
  { title: "Low capital cost", values: [5, 3, 3, 2, 1, 5] },
];

const SERIES = [
  {
    kicker: "Plastic casing + 304 internals",
    title: "TP8 Automatic Booster",
    specs: [["Casing", "PPS"], ["Impeller", "SUS304"], ["Shaft", "SUS410"], ["Seal", "Ceramic + carbon + NBR"], ["Liquid temp.", "+4 to +40 °C"]] as [string, string][],
    body: "Rust-proof and low cost for clean-water boosting; not the pump for grit or high pressure.",
    href: "/pumps-seals/pumps/automatic-booster-pump",
    linkLabel: "View TP8 series",
  },
  {
    kicker: "Corrosion-resistant wetted parts",
    title: "HS / TS Multistage Centrifugal",
    specs: [["Wetted parts", "Corrosion-resistant materials"], ["Fluid", "TS: plain and salt water"], ["System pressure", "Max. 8.5 kg/cm²"], ["Liquid temp.", "+4 to +40 °C"]] as [string, string][],
    body: "Choose TS over HS when the supply carries salt.",
    href: "/pumps-seals/pumps/multistage-centrifugal-pump",
    linkLabel: "View HS / TS series",
  },
  {
    kicker: "Stainless steel construction",
    title: "TPRK_E / TPHK / TPK Immersible",
    specs: [["Main parts", "Stainless steel"], ["Fluid", "Water, coolant, light oil"], ["Seal options", "SiC, carbon; HNBR / Viton / EPDM"], ["Liquid temp.", "0 to +90 °C"]] as [string, string][],
    body: "Machine-tool coolant and wash systems, up to 267 m head.",
    href: "/pumps-seals/pumps/immersible-pump",
    linkLabel: "View immersible series",
  },
  {
    kicker: "Seawater variant",
    title: "PW Submersible",
    specs: [["Construction", "Corrosion-resistant, IP68"], ["Saltwater", "R-coded models"], ["Flow", "Up to 440 L/min"], ["Liquid temp.", "+4 to +35 °C"]] as [string, string][],
    body: "Specify the R code for sea-fish breeding or saltwater drainage.",
    href: "/pumps-seals/pumps/submersible-pump",
    linkLabel: "View PW series",
  },
];

const QUESTIONS = [
  <><strong>What is in the fluid?</strong> Get chloride, pH and solids figures. Chloride rules out cast iron and pushes stainless up the PREN scale.</>,
  <><strong>How hot does it run?</strong> Many compact boosters are rated to 40 °C; hot-water and immersible series go to 90 °C.</>,
  <><strong>Is there grit or shock?</strong> Sand and water hammer favour cast iron&apos;s wall mass over thin stainless or plastic.</>,
  <><strong>What does a failure cost?</strong> Where retrieval or downtime is expensive, pay for the higher grade up front.</>,
];

const FAQS = [
  { q: "Is a stainless steel pump better than cast iron?", a: "Only when the fluid is corrosive. In clean fresh water cast iron lasts well, costs less and handles grit better." },
  { q: "What is the best pump material for seawater?", a: "904L stainless or marine bronze for continuous duty; 316 for intermittent or lower-chloride service. Avoid cast iron and 304." },
  { q: "Are plastic pump casings reliable?", a: "Yes for clean water inside their pressure and temperature rating. They will not rust, but they are not built for abrasive solids or impact." },
  { q: "Does the seal material matter as much as the casing?", a: "Often more. Match the elastomer to the fluid and temperature: NBR for water and oils, EPDM for hot water, Viton for chemicals and higher temperatures." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${URL}#article`,
      headline: HEADLINE,
      description: DESCRIPTION,
      mainEntityOfPage: URL,
      image: COVER,
      datePublished: "2026-11-02",
      dateModified: "2026-11-02",
      author: { "@type": "Organization", name: "Valvenok" },
      publisher: { "@type": "Organization", name: "Valvenok Ltd", logo: { "@type": "ImageObject", url: "https://pblol2.blob.core.windows.net/valvenok-images/logo.png" } },
      about: ["pump materials", "cast iron pump", "stainless steel pump", "bronze pump", "PREN"],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function PumpMaterialsPage() {
  return (
    <ArticleLayout
      schema={schema}
      meta={{
        slug: SLUG,
        category: "Pump selection guide",
        title: HEADLINE,
        dek: "The fluid decides the material, not the price list.",
        date: "November 2026",
        readMinutes: 6,
        cover: COVER,
        coverAlt: "Pump materials compared: WALRUS booster, multistage, immersible and submersible pumps",
      }}
    >
      <Lead>
        This guide compares the six materials you will meet on pump casings and impellers: what each survives, where each
        fails, and which <A href="/pumps-seals/pumps">WALRUS pump series</A> in the Valvenok range uses it.
      </Lead>

      <Finder
        kicker="Quick answer"
        title="What are you pumping?"
        hint="Pick your fluid to see the material to start with."
        options={[
          { label: "Clean, cold fresh water", result: QUICK[0], href: "/pumps-seals/pumps/automatic-booster-pump", linkLabel: "See the TP8 booster series" },
          { label: "Salt, brackish or chlorinated water", result: QUICK[1], href: "/pumps-seals/pumps/submersible-pump", linkLabel: "See the PW submersible (R-coded models)" },
          { label: "Sand, grit or shock loads", result: QUICK[2] },
          { label: "Coolant, light oil, hot water", result: QUICK[3], href: "/pumps-seals/pumps/immersible-pump", linkLabel: "See the immersible series" },
        ]}
      />

      <H2>Pump materials comparison table</H2>
      <P>
        Compare the wetted-part materials side by side. PREN (Pitting Resistance Equivalent Number = %Cr + 3.3×%Mo +
        16×%N) applies to stainless grades only; higher means harder to pit in chloride water.
      </P>
      <DataTable {...COMPARE} />

      <H2>How the materials score</H2>
      <P>Indicative ratings out of 5, for comparison only. Your fluid analysis overrides any chart.</P>
      <BarTabs
        max={5}
        format={(v) => `${v}/5`}
        sets={SCORES.map((sc) => ({ title: sc.title, items: MATERIALS.map((m, i) => ({ label: m, value: sc.values[i] })) }))}
      />

      <H2>Stainless grades by PREN: the chloride number that matters</H2>
      <Bars
        max={40}
        format={(v) => `≈ ${v}`}
        items={[
          { label: "AISI 304", value: 19 },
          { label: "AISI 316", value: 26 },
          { label: "AISI 904L", value: 35 },
        ]}
      />
      <Callout type="note">Scale 0–40. Cast iron, bronze and plastics have no PREN: they do not rely on a passive chromium film.</Callout>

      <H2>What the WALRUS range uses, and why</H2>
      <P>Four series from the Valvenok pump range show the trade-offs above in real products. Figures are from each series&apos; product page.</P>
      <Cards items={SERIES} />

      <H2>Choose in four questions</H2>
      <OL items={QUESTIONS} />

      <Callout type="tip" title="Going deeper on borehole pumps?">
        For submersible borehole duty (water analysis limits, 904L vs 316L and dry-run protection), read our engineering
        guide: <A href="/news/stainless-steel-vs-cast-iron">Stainless Steel vs Cast Iron Submersible Pumps</A>.
      </Callout>

      <FAQ items={FAQS} />


      <CTA
        title="Match the pump to your fluid"
        body="Eight WALRUS pump families, 50/60 Hz, up to 267 m head and 650 L/min. Send us your fluid, temperature and duty point."
        primary={{ label: "View the WALRUS pump range", href: "/pumps-seals/pumps" }}
        secondary={{ label: "Discuss your application", href: "/contact" }}
      />

      <RelatedLinks
        links={[
          { label: "Stainless steel vs cast iron submersible pumps", href: "/news/stainless-steel-vs-cast-iron" },
          { label: "Guide to Sealflex mechanical seals", href: "/news/mechanical-seals-guide" },
          { label: "WALRUS pump range", href: "/pumps-seals/pumps" },
          { label: "Mechanical seals", href: "/pumps-seals/seals" },
        ]}
      />
    </ArticleLayout>
  );
}
