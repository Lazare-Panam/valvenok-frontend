"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import { T, textReset } from "@/src/app/Landing/modern/tokens";

// Copy from the "Hydrogen & Cryogenic hub page" brief (2 Nov 2026).
// Tables are real HTML tables so search engines can read them; the FAQ text
// is shared with the FAQPage schema so the two always match word for word.

type Cell = string | { label: string; href: string };

const SUPPLY: { head: string[]; rows: Cell[][] } = {
  head: ["Range", "What it covers", "Max pressure", "Approvals"],
  rows: [
    [{ label: "Hydrogen cylinder valves (Youngdo)", href: "/hydrogen-cryogenic/hydrogen" }, "Cylinder valves for 35 MPa and 70 MPa hydrogen storage, with thermal relief on selected models", "70 MPa", "KGS, EC79, R134 on selected models"],
    [{ label: "Gas & cylinder valves (Youngdo)", href: "/hydrogen-cryogenic/gas-valves" }, "Hydrogen, LPG, overfilling prevention (OPD), piping and industrial gas cylinder valves, 108 models", "70 MPa (H₂)", "KGS, KS, EC79, R134, CGA V-1 by model"],
    [{ label: "High-pressure valves (Hiflux)", href: "/hydrogen-cryogenic/valves" }, "Needle, ball, check, safety and air-operated valves, including an H₂ refuelling needle valve, 54 models", "150,000 psi", "KC, KGS on selected models"],
    [{ label: "High-pressure fittings (Hiflux)", href: "/hydrogen-cryogenic/fittings" }, "Standard and reducing fittings, manifold blocks, anti-vibration parts, tube caps, 27 products", "150,000 psi", "KC, KGS by product"],
    [{ label: "High-pressure tubing & tooling (Hiflux)", href: "/hydrogen-cryogenic/tube" }, "Tubes, nipples, tooling sets and 1-, 2- and 3-line tube supports, 18 products", "100,000 psi (tubes)", "Not stated"],
    [{ label: "Cryogenic valves", href: "/cryogenic-valves" }, "Valves for liquefied gas service", "See range", "See range"],
  ],
};

const CERTS: { head: string[]; rows: Cell[][] } = {
  head: ["Approval", "What it means", "Where you’ll see it"],
  rows: [
    ["KGS", "Korea Gas Safety Corporation approval. Our DRV and YHT hydrogen cylinder valves are built to KS B 6214 / KGS AA311.", "Youngdo hydrogen and gas valves; selected Hiflux valves and fittings"],
    ["KC", "Korean product certification mark.", "Selected Hiflux valves and fittings"],
    ["EC79", "EU type-approval for hydrogen vehicle components under Regulation (EC) No 79/2009.", "Selected Youngdo hydrogen cylinder valves"],
    ["UN ECE R134", "UN regulation covering the safety of hydrogen and fuel cell vehicles and their storage components.", "Selected Youngdo hydrogen cylinder valves"],
    ["CGA V-1", "Compressed Gas Association standard for cylinder valve outlet and inlet connections.", "Youngdo gas cylinder valves"],
    ["KHK", "Japanese High Pressure Gas Safety Institute approval.", "Selected Youngdo hydrogen models"],
    ["IECEx", "International certification for equipment used in explosive atmospheres (IEC 60079).", "Youngdo YEX-1100"],
  ],
};

const WHICH: { head: string[]; rows: Cell[][] } = {
  head: ["Your application", "Start with"],
  rows: [
    ["Hydrogen storage cylinders, vehicles or tube trailers", { label: "Youngdo hydrogen cylinder valves, 35 or 70 MPa", href: "/hydrogen-cryogenic/hydrogen" }],
    ["Hydrogen refuelling station pipework", { label: "Hiflux high-pressure valves, including the H₂ refuelling needle valve", href: "/hydrogen-cryogenic/valves" }],
    ["Test rigs, labs and high-pressure manifolds", { label: "Hiflux fittings, tubing and needle valves", href: "/hydrogen-cryogenic/fittings" }],
    ["LPG or industrial gas cylinders", { label: "Youngdo gas and cylinder valves", href: "/hydrogen-cryogenic/gas-valves" }],
    ["Hazardous-area hydrogen service", { label: "IECEx-certified Youngdo YEX-1100", href: "/hydrogen-cryogenic/hydrogen" }],
    ["LNG, liquid nitrogen or other liquefied gases", { label: "Cryogenic valves", href: "/cryogenic-valves" }],
  ],
};

const CHECKS = [
  ["Pressure class.", "Most hydrogen storage and refuelling runs at 35 MPa (350 bar) or 70 MPa (700 bar). Choose a valve or fitting rated above your maximum working pressure, not just equal to it."],
  ["Material.", "Hydrogen embrittlement can crack susceptible steels under pressure and cycling. Austenitic stainless steels such as 316 are widely used for hydrogen service; confirm the material grade for each part on its datasheet."],
  ["Connection type.", "At very high pressure, cone-and-thread connections are common because the metal-to-metal seal does not rely on a soft gasket. Match the connection standard across valves, fittings and tubing."],
  ["Thermal relief.", "Cylinder valves often include a thermally activated relief device so the cylinder vents safely in a fire. Selected Youngdo models use a fuse metal or glass bulb that activates at around 105–110 °C."],
  ["Approvals.", "Vehicle, refuelling and industrial gas uses each need different approvals. See the table below and ask for the certificate with the order."],
];

export const HUB_FAQ = [
  { q: "What pressure are hydrogen cylinder valves rated to?", a: "Our Youngdo hydrogen cylinder valves cover 3 MPa to 70 MPa. The 70 MPa (700 bar) and 35 MPa (350 bar) classes are the most common for vehicle and storage use." },
  { q: "Which approval do I need for a hydrogen vehicle cylinder valve?", a: "It depends on where the vehicle is approved. UN ECE R134 and EC79 cover hydrogen vehicle components, and KGS covers Korean gas safety. Tell us the market and we'll confirm which models qualify." },
  { q: "What is KGS AA311?", a: "It is the Korean gas safety standard, together with KS B 6214, that our DRV and YHT hydrogen cylinder valves are built to." },
  { q: "Can I use standard stainless fittings for hydrogen?", a: "Not automatically. Check the pressure rating, material grade and connection type for hydrogen service. Our Hiflux high-pressure fittings are rated up to 150,000 psi." },
  { q: "Do you supply certificates with the order?", a: "Yes. Ask for the relevant approval certificate or material certificate when you request a quote." },
];

// The site-wide breadcrumb already outputs BreadcrumbList schema
const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HUB_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const linkSx = {
  color: T.greenDark,
  fontWeight: 600,
  textDecoration: "underline",
  textDecorationColor: "rgba(46,139,30,0.35)",
  textUnderlineOffset: "3px",
  "&:hover": { textDecorationColor: T.greenDark },
} as const;

function CellView({ cell }: { cell: Cell }) {
  if (typeof cell === "string") return <>{cell}</>;
  return (
    <Box component={Link} href={cell.href} sx={linkSx}>
      {cell.label}
    </Box>
  );
}

function Table({ data, caption }: { data: { head: string[]; rows: Cell[][] }; caption: string }) {
  return (
    // Scrolls sideways on phones instead of squashing the columns
    <Box sx={{ overflowX: "auto", border: `1px solid ${T.border}`, borderRadius: T.radiusSm, bgcolor: "#fff" }}>
      <Box
        component="table"
        sx={{
          width: "100%",
          minWidth: 640,
          borderCollapse: "collapse",
          fontSize: "0.92rem",
          "& caption": { position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap" },
          "& th": {
            textAlign: "left",
            fontWeight: 700,
            fontSize: "0.75rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: T.muted,
            bgcolor: T.surface,
            px: 2,
            py: 1.5,
            borderBottom: `1px solid ${T.border}`,
          },
          "& td": { px: 2, py: 1.75, color: T.body, verticalAlign: "top", lineHeight: 1.55, borderBottom: `1px solid ${T.border}` },
          "& tr:last-of-type td": { borderBottom: 0 },
          "& td:first-of-type": { color: T.ink, fontWeight: 600 },
          "& tbody tr:hover td": { bgcolor: "#FAFCFA" },
        }}
      >
        <caption>{caption}</caption>
        <thead>
          <tr>
            {data.head.map((h) => (
              <th key={h} scope="col">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i}>
              {row.map((c, j) => (
                <td key={j}>
                  <CellView cell={c} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Box>
    </Box>
  );
}

function Section({ id, kicker, title, intro, children, tint }: { id: string; kicker: string; title: string; intro?: React.ReactNode; children: React.ReactNode; tint?: boolean }) {
  return (
    <Box component="section" aria-labelledby={id} sx={{ bgcolor: tint ? T.surface : "#fff", py: { xs: 6, md: 9 } }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 5 } }}>
        <Box component="p" sx={{ m: 0, mb: 1, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase !important", color: T.greenDark }}>
          {kicker}
        </Box>
        <Box component="h2" id={id} sx={{ m: 0, mb: 2, fontSize: { xs: "1.6rem", md: "2.1rem" }, fontWeight: 800, letterSpacing: "-0.02em", color: T.ink, lineHeight: 1.2 }}>
          {title}
        </Box>
        {intro && (
          <Box component="p" sx={{ m: 0, mb: 4, maxWidth: 760, fontSize: "1.02rem", lineHeight: 1.7, color: T.body }}>
            {intro}
          </Box>
        )}
        {children}
      </Box>
    </Box>
  );
}

/** Intro paragraph + "What we supply" table: sits above the range cards. */
export function HubIntro() {
  return (
    <Box sx={textReset}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Section
        id="what-we-supply"
        kicker="Our ranges"
        title="What we supply"
        intro="Use this page to find the right range for your application, understand the approvals you need, and get to the right product table quickly. If you are not sure, send us your pressure, media, connection and approval requirements and we will match the part."
      >
        <Table data={SUPPLY} caption="Hydrogen and cryogenic ranges supplied by Valvenok" />
      </Section>
    </Box>
  );
}

/** Guidance, certifications, selector, FAQ and call to action: below the cards. */
export function HubGuide() {
  return (
    <Box sx={textReset}>
      <Section
        id="specifying"
        kicker="Before you order"
        title="Specifying for hydrogen service"
        intro="Hydrogen is a small molecule at high pressure, so it leaks where other gases don’t and it can weaken some metals over time. Check these five points before you order."
        tint
      >
        <Box component="ol" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
          {CHECKS.map(([k, v], i) => (
            <Box component="li" key={k} sx={{ display: "flex", gap: 2, p: 2.5, bgcolor: "#fff", border: `1px solid ${T.border}`, borderRadius: T.radiusSm }}>
              <Box sx={{ flexShrink: 0, width: 32, height: 32, borderRadius: "50%", bgcolor: T.greenSoft, color: T.greenDark, fontWeight: 800, display: "grid", placeItems: "center", fontSize: "0.9rem" }}>
                {i + 1}
              </Box>
              <Box component="p" sx={{ m: 0, color: T.body, lineHeight: 1.65, fontSize: "0.95rem" }}>
                <Box component="strong" sx={{ color: T.ink }}>{k}</Box> {v}
              </Box>
            </Box>
          ))}
          <Box component="li" sx={{ gridColumn: { md: "1 / -1" }, p: 2.5, bgcolor: T.greenDeep, color: "#fff", borderRadius: T.radiusSm }}>
            <Box component="p" sx={{ m: 0, lineHeight: 1.7, fontSize: "0.95rem", color: "rgba(255,255,255,0.85)" }}>
              <Box component="strong" sx={{ color: "#fff" }}>Cryogenic service.</Box> Liquefied gases run far colder than ambient: LNG at about −162 °C, liquid nitrogen at about −196 °C and liquid hydrogen at about −253 °C. Cryogenic valves use materials that stay tough at these temperatures and an extended bonnet that keeps the stem packing warm enough to seal. See our{" "}
              <Box component={Link} href="/cryogenic-valves" sx={{ color: T.green, fontWeight: 600 }}>cryogenic valves</Box>.
            </Box>
          </Box>
        </Box>
      </Section>

      <Section id="certifications" kicker="Approvals" title="Certifications explained" intro="Certification varies by model, so check the product table for each part.">
        <Table data={CERTS} caption="Hydrogen and gas valve approvals explained" />
      </Section>

      <Section id="which-range" kicker="Quick selector" title="Which range do I need?" tint>
        <Table data={WHICH} caption="Which hydrogen or cryogenic range suits each application" />
      </Section>

      <Section id="faq" kicker="FAQ" title="Hydrogen and cryogenic valve questions">
        <Box sx={{ border: `1px solid ${T.border}`, borderRadius: T.radiusSm, overflow: "hidden" }}>
          {HUB_FAQ.map((f, i) => (
            <Box
              component="details"
              key={f.q}
              open={i === 0}
              sx={{
                borderTop: i ? `1px solid ${T.border}` : 0,
                "& summary": { listStyle: "none", cursor: "pointer", px: 2.5, py: 2, fontWeight: 700, color: T.ink, display: "flex", justifyContent: "space-between", gap: 2 },
                "& summary::-webkit-details-marker": { display: "none" },
                "& summary::after": { content: '"+"', color: T.greenDark, fontWeight: 800, fontSize: "1.2rem", lineHeight: 1 },
                "&[open] summary::after": { content: '"–"' },
                "&[open]": { bgcolor: "#FAFCFA" },
              }}
            >
              <Box component="summary"><Box component="h3" sx={{ m: 0, font: "inherit" }}>{f.q}</Box></Box>
              <Box component="p" sx={{ m: 0, px: 2.5, pb: 2.25, color: T.body, lineHeight: 1.7 }}>{f.a}</Box>
            </Box>
          ))}
        </Box>
      </Section>

      <Box component="section" aria-labelledby="hub-cta" sx={{ px: { xs: 2, md: 5 }, pb: { xs: 6, md: 9 } }}>
        <Box sx={{ maxWidth: 1200 - 80, mx: "auto", p: { xs: 3, md: 5 }, borderRadius: T.radius, background: `linear-gradient(135deg, ${T.greenDeep} 0%, #1E5A22 100%)`, color: "#fff", display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: 3 }}>
          <Box>
            <Box component="h2" id="hub-cta" sx={{ m: 0, mb: 1, fontSize: { xs: "1.5rem", md: "1.9rem" }, fontWeight: 800, color: "#fff" }}>Need help choosing?</Box>
            <Box component="p" sx={{ m: 0, maxWidth: 620, lineHeight: 1.7, color: "rgba(255,255,255,0.8)" }}>
              Send us the pressure, media, temperature, connection and approvals you need, and our team will recommend the right part and quote it. Already have the part number? Use Quick Order.
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", flexShrink: 0 }}>
            <Box component={Link} href="/contact" sx={{ px: 3, py: 1.4, borderRadius: 999, bgcolor: T.green, color: T.greenDeep, fontWeight: 700, textDecoration: "none", "&:hover": { bgcolor: "#55C93E" } }}>
              Contact us
            </Box>
            <Box component={Link} href="/quick-order" sx={{ px: 3, py: 1.4, borderRadius: 999, border: "1px solid rgba(255,255,255,0.5)", color: "#fff", fontWeight: 600, textDecoration: "none", "&:hover": { bgcolor: "rgba(255,255,255,0.08)" } }}>
              Quick Order
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
