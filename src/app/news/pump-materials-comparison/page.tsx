"use client";

import React from "react";
import { Box, Container, Typography, Stack, Paper, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

// Copy from the "Pump Materials Comparison" page. The score bars and PREN chart
// are HTML; designed charts and images can replace them later.

const DISPLAY_FONT = '"Barlow Condensed"';
const ARTICLE_URL = "https://www.valvenok.com/news/pump-materials-comparison";
const HEADLINE = "Pump Materials Compared: Cast Iron, Bronze, Stainless Steel and Engineered Plastic";
const DESCRIPTION =
  "Compare cast iron, bronze, 304, 316 and 904L stainless and PPS plastic for pump casings and impellers: corrosion, abrasion, cost, and which WALRUS pumps use each.";

const QUICK = [
  ["Clean, cold fresh water", "Cast iron or engineered plastic with stainless 304 internals. Lowest cost, adequate life."],
  ["Salt, brackish or chlorinated water", "Stainless 316 as a minimum, 904L or bronze for seawater. Never cast iron in permanent service."],
  ["Sand, grit or shock loads", "Cast iron. Wall mass absorbs abrasion and hydraulic shock that wears thin stainless or plastic."],
  ["Coolant, light oil, hot water", "Stainless wetted parts with a seal elastomer matched to the fluid (NBR, HNBR, Viton or EPDM)."],
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
const SCORES: { title: string; values: number[] }[] = [
  { title: "Saltwater / chloride resistance", values: [1, 4, 2, 3, 5, 5] },
  { title: "Abrasion & shock tolerance", values: [5, 3, 3, 3, 3, 1] },
  { title: "Low capital cost", values: [5, 3, 3, 2, 1, 5] },
];
const PREN = [
  ["AISI 304", 19],
  ["AISI 316", 26],
  ["AISI 904L", 35],
] as const;

const SERIES = [
  {
    kicker: "Plastic casing + 304 internals",
    name: "TP8 Automatic Booster",
    specs: [["Casing", "PPS"], ["Impeller", "SUS304"], ["Shaft", "SUS410"], ["Seal", "Ceramic + carbon + NBR"], ["Liquid temp.", "+4 to +40 °C"]],
    note: "Rust-proof and low cost for clean-water boosting; not the pump for grit or high pressure.",
    href: "/pumps-seals/pumps/automatic-booster-pump",
    link: "View TP8 series",
  },
  {
    kicker: "Corrosion-resistant wetted parts",
    name: "HS / TS Multistage Centrifugal",
    specs: [["Wetted parts", "Corrosion-resistant materials"], ["Fluid", "TS: plain and salt water"], ["System pressure", "Max. 8.5 kg/cm²"], ["Liquid temp.", "+4 to +40 °C"]],
    note: "Choose TS over HS when the supply carries salt.",
    href: "/pumps-seals/pumps/multistage-centrifugal-pump",
    link: "View HS / TS series",
  },
  {
    kicker: "Stainless steel construction",
    name: "TPRK_E / TPHK / TPK Immersible",
    specs: [["Main parts", "Stainless steel"], ["Fluid", "Water, coolant, light oil"], ["Seal options", "SiC, carbon; HNBR / Viton / EPDM"], ["Liquid temp.", "0 to +90 °C"]],
    note: "Machine-tool coolant and wash systems, up to 267 m head.",
    href: "/pumps-seals/pumps/immersible-pump",
    link: "View immersible series",
  },
  {
    kicker: "Seawater variant",
    name: "PW Submersible",
    specs: [["Construction", "Corrosion-resistant, IP68"], ["Saltwater", "R-coded models"], ["Flow", "Up to 440 L/min"], ["Liquid temp.", "+4 to +35 °C"]],
    note: "Specify the R code for sea-fish breeding or saltwater drainage.",
    href: "/pumps-seals/pumps/submersible-pump",
    link: "View PW series",
  },
];

const QUESTIONS = [
  ["What is in the fluid?", "Get chloride, pH and solids figures. Chloride rules out cast iron and pushes stainless up the PREN scale."],
  ["How hot does it run?", "Many compact boosters are rated to 40 °C; hot-water and immersible series go to 90 °C."],
  ["Is there grit or shock?", "Sand and water hammer favour cast iron's wall mass over thin stainless or plastic."],
  ["What does a failure cost?", "Where retrieval or downtime is expensive, pay for the higher grade up front."],
];

const FAQS = [
  { q: "Is a stainless steel pump better than cast iron?", a: "Only when the fluid is corrosive. In clean fresh water cast iron lasts well, costs less and handles grit better." },
  { q: "What is the best pump material for seawater?", a: "904L stainless or marine bronze for continuous duty; 316 for intermittent or lower-chloride service. Avoid cast iron and 304." },
  { q: "Are plastic pump casings reliable?", a: "Yes for clean water inside their pressure and temperature rating. They will not rust, but they are not built for abrasive solids or impact." },
  { q: "Does the seal material matter as much as the casing?", a: "Often more. Match the elastomer to the fluid and temperature: NBR for water and oils, EPDM for hot water, Viton for chemicals and higher temperatures." },
];

const RELATED = [
  { label: "Stainless steel vs cast iron submersible pumps", href: "/news/stainless-steel-vs-cast-iron" },
  { label: "Guide to Sealflex mechanical seals", href: "/news/mechanical-seals-guide" },
  { label: "WALRUS pump range", href: "/pumps-seals/pumps" },
  { label: "Mechanical seals", href: "/pumps-seals/seals" },
];

// Article + FAQPage. BreadcrumbList comes from the site layout.
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${ARTICLE_URL}#article`,
      headline: HEADLINE,
      description: DESCRIPTION,
      mainEntityOfPage: ARTICLE_URL,
      image: "https://pblol2.blob.core.windows.net/valvenok-images/blogs/pump-materials-comparison.jpg",
      datePublished: "2026-11-02",
      dateModified: "2026-11-02",
      author: { "@type": "Organization", name: "Valvenok" },
      publisher: {
        "@type": "Organization",
        name: "Valvenok Ltd",
        logo: { "@type": "ImageObject", url: "https://pblol2.blob.core.windows.net/valvenok-images/logo.png" },
      },
      about: ["pump materials", "cast iron pump", "stainless steel pump", "bronze pump", "PREN"],
    },
    {
      "@type": "FAQPage",
      "@id": `${ARTICLE_URL}#faq`,
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="h1" component="h2" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, mt: 6, textTransform: "uppercase", color: "primary.main" }}>
      {children}
    </Typography>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <Typography component="h3" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, fontSize: "1.05rem !important", textTransform: "uppercase", letterSpacing: "0.05em", mb: "8px !important" }}>
      {children}
    </Typography>
  );
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <Box sx={{ overflowX: "auto", my: 4, border: "1px solid", borderColor: "divider" }}>
      <Box
        component="table"
        sx={{
          minWidth: 980,
          width: "100%",
          borderCollapse: "collapse",
          "& th": { bgcolor: "primary.main", color: "#fff", fontFamily: DISPLAY_FONT, fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "left", px: 1.5, py: 1.25 },
          "& td": { px: 1.5, py: 1.25, fontSize: "0.85rem", lineHeight: 1.5, verticalAlign: "top", borderTop: "1px solid", borderColor: "divider" },
          "& tbody tr:nth-of-type(even) td": { bgcolor: "rgba(97,214,73,0.05)" },
          "& td:first-of-type": { fontFamily: DISPLAY_FONT, fontWeight: 800, textTransform: "uppercase", color: "primary.dark" },
        }}
      >
        <thead>
          <tr>{head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>
          ))}
        </tbody>
      </Box>
    </Box>
  );
}

function Bar({ label, value, max, text }: { label: string; value: number; max: number; text: string }) {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "120px 1fr 40px", alignItems: "center", gap: 1.5, mb: 1 }}>
      <Typography sx={{ fontSize: "0.9rem !important", mb: "0 !important", fontWeight: 600 }}>{label}</Typography>
      <Box sx={{ height: 12, bgcolor: "rgba(97,214,73,0.12)" }} role="presentation">
        <Box sx={{ height: "100%", width: `${(value / max) * 100}%`, bgcolor: "primary.main" }} />
      </Box>
      <Typography sx={{ fontSize: "0.9rem !important", mb: "0 !important", fontWeight: 800, textAlign: "right" }}>{text}</Typography>
    </Box>
  );
}

const linkSx = { color: "primary.dark", fontWeight: 700 } as const;

export default function PumpMaterialsPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 10, "& p, & h5, & td, & th, & h3": { textTransform: "none !important" } }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <Box sx={{ bgcolor: "primary.main", color: "white", pt: 15, pb: 10 }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, letterSpacing: "0.4em", opacity: 0.8 }}>
            Pump Selection Guide
          </Typography>
          <Typography variant="h1" sx={{ fontFamily: DISPLAY_FONT, fontSize: { xs: "2.4rem", md: "4rem" }, fontWeight: 900, textTransform: "uppercase", lineHeight: 1, mt: 1 }}>
            Pump Materials Compared: Cast Iron, Bronze, Stainless Steel and Engineered Plastic
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, opacity: 0.85, fontStyle: "italic" }}>
            The fluid decides the material, not the price list.
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mt: 4, opacity: 0.8 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PersonOutlineIcon fontSize="small" />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: "uppercase" }}>Valvenok Team</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <AccessTimeIcon fontSize="small" />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: "uppercase" }}>6 min read</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: -5 }}>
        {/* ── QUICK ANSWER ── */}
        <Paper elevation={10} sx={{ p: 4, borderRadius: 0, borderLeft: "8px solid", borderColor: "primary.main", mb: 8 }}>
          <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 900, mb: 3, textTransform: "uppercase" }}>
            Quick answer
          </Typography>
          <Grid container spacing={2.5}>
            {QUICK.map(([k, v]) => (
              <Grid key={k} size={{ xs: 12, sm: 6 }}>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <CheckCircleOutlineIcon sx={{ color: "primary.main", fontSize: 20, mt: 0.3 }} />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 800 }}>{k}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>{v}</Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Paper>

        <Box sx={{ "& p": { mb: 3, lineHeight: 1.8, color: "#000000", fontSize: "1.1rem" } }}>
          <Typography>
            This guide compares the six materials you will meet on pump casings and impellers: what each survives,
            where each fails, and which{" "}
            <Box component="a" href="/pumps-seals/pumps" sx={linkSx}>WALRUS pump series</Box> in the Valvenok range
            uses it.
          </Typography>

          <H2>Pump materials comparison table</H2>
          <Typography>
            Compare the wetted-part materials side by side. PREN (Pitting Resistance Equivalent Number = %Cr + 3.3×%Mo
            + 16×%N) applies to stainless grades only; higher means harder to pit in chloride water.
          </Typography>
          <Table {...COMPARE} />

          <H2>How the materials score</H2>
          <Typography>Indicative ratings out of 5, for comparison only. Your fluid analysis overrides any chart.</Typography>
          <Grid container spacing={4} sx={{ mb: 2 }}>
            {SCORES.map((s) => (
              <Grid key={s.title} size={{ xs: 12, md: 4 }}>
                <H3>{s.title}</H3>
                {s.values.map((v, i) => (
                  <Bar key={MATERIALS[i]} label={MATERIALS[i]} value={v} max={5} text={`${v}/5`} />
                ))}
              </Grid>
            ))}
          </Grid>

          <H2>Stainless grades by PREN: the chloride number that matters</H2>
          <Box sx={{ maxWidth: 560, my: 3 }}>
            {PREN.map(([g, v]) => (
              <Bar key={g} label={g} value={v} max={40} text={`≈ ${v}`} />
            ))}
          </Box>
          <Typography sx={{ fontSize: "0.95rem !important", fontStyle: "italic" }}>
            Scale 0–40. Cast iron, bronze and plastics have no PREN: they do not rely on a passive chromium film.
          </Typography>

          <H2>What the WALRUS range uses, and why</H2>
          <Typography>
            Four series from the Valvenok pump range show the trade-offs above in real products. Figures are from each
            series&apos; product page.
          </Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {SERIES.map((s) => (
              <Grid key={s.name} size={{ xs: 12, sm: 6 }}>
                <Box sx={{ border: "1px solid", borderColor: "divider", p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: "0.75rem !important", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase !important", color: "primary.main", mb: "6px !important" }}>
                    {s.kicker}
                  </Typography>
                  <H3>{s.name}</H3>
                  <Box component="dl" sx={{ m: 0, mb: 2, display: "grid", gridTemplateColumns: "auto 1fr", columnGap: 2, rowGap: 0.75, fontSize: "0.9rem", "& dt": { color: "text.secondary" }, "& dd": { m: 0, fontWeight: 600 } }}>
                    {s.specs.map(([k, v]) => (
                      <React.Fragment key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </React.Fragment>
                    ))}
                  </Box>
                  <Typography sx={{ fontSize: "0.95rem !important", flexGrow: 1 }}>{s.note}</Typography>
                  <Box component="a" href={s.href} sx={linkSx}>{s.link} →</Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <H2>Choose in four questions</H2>
          <Grid container spacing={3} sx={{ mb: 2 }}>
            {QUESTIONS.map(([q, a], i) => (
              <Grid key={q} size={{ xs: 12, sm: 6 }}>
                <H3>{`${i + 1}. ${q}`}</H3>
                <Typography sx={{ fontSize: "1rem !important" }}>{a}</Typography>
              </Grid>
            ))}
          </Grid>

          <Paper elevation={0} sx={{ p: 3, bgcolor: "rgba(97,214,73,0.08)", borderLeft: "4px solid", borderColor: "primary.main", borderRadius: 0, my: 4 }}>
            <H3>Going deeper on borehole pumps?</H3>
            <Typography sx={{ mb: "0 !important" }}>
              For submersible borehole duty (water analysis limits, 904L vs 316L and dry-run protection), read our
              engineering guide:{" "}
              <Box component="a" href="/news/stainless-steel-vs-cast-iron" sx={linkSx}>Stainless Steel vs Cast Iron Submersible Pumps</Box>.
            </Typography>
          </Paper>

          <Divider sx={{ my: 6 }} />

          <H2>Frequently Asked Questions</H2>
          <Stack spacing={4} sx={{ mb: 6, mt: 2 }}>
            {FAQS.map((item) => (
              <Box key={item.q}>
                <H3>{item.q}</H3>
                <Typography sx={{ color: "text.secondary !important", lineHeight: 1.8 }}>{item.a}</Typography>
              </Box>
            ))}
          </Stack>

          {/* ── CTA ── */}
          <Box sx={{ bgcolor: "primary.main", color: "#fff", p: { xs: 3, md: 5 }, my: 6 }}>
            <Typography component="h2" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 900, fontSize: "2rem !important", textTransform: "uppercase", color: "#fff !important", mb: "8px !important" }}>
              Match the pump to your fluid
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.9) !important" }}>
              Eight WALRUS pump families, 50/60 Hz, up to 267 m head and 650 L/min. Send us your fluid, temperature and
              duty point.
            </Typography>
            <Stack direction="row" gap={1.5} flexWrap="wrap">
              <Box component="a" href="/pumps-seals/pumps" sx={{ bgcolor: "#fff", color: "primary.dark", px: 3, py: 1.25, fontWeight: 800, textDecoration: "none" }}>
                View the WALRUS pump range
              </Box>
              <Box component="a" href="/contact" sx={{ border: "1.5px solid #fff", color: "#fff", px: 3, py: 1.25, fontWeight: 700, textDecoration: "none" }}>
                Discuss your application
              </Box>
            </Stack>
          </Box>

          {/* ── RELATED ── */}
          <Typography component="h2" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, fontSize: "1rem !important", textTransform: "uppercase", letterSpacing: "0.08em", color: "text.secondary !important", mb: "16px !important" }}>
            Related Guides
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1.5}>
            {RELATED.map((r) => (
              <Box key={r.href} component="a" href={r.href} sx={{ fontFamily: DISPLAY_FONT, fontWeight: 700, fontSize: "13px", letterSpacing: "0.03em", textDecoration: "none", color: "primary.dark", border: "1.5px solid", borderColor: "primary.light", px: 2, py: 1, "&:hover": { borderColor: "primary.main" } }}>
                {r.label} →
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
