"use client";

// LP-HD / LP-HS series page, on the shared series template. Every figure is from
// the Hydraulic Low Pressure Catalogue (see lpData).

import { Box } from "@mui/material";
import Link from "next/link";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { T } from "@/src/app/Landing/modern/tokens";
import { wrap, Kicker, H2, Lead } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import SeriesView, { type SeriesDef, type Rung } from "@/src/app/pneumatic/actuators/_series/SeriesView";
import HydraulicScotchYoke from "@/src/app/pneumatic/actuators/_series/HydraulicScotchYoke";
import { LP_MODELS, LP_IMAGE, LP_IMAGE_NC, LP_CATALOG, maxTorque, type LpKind } from "./lpData";

const nm = (n: number) => n.toLocaleString("en-GB", { maximumFractionDigits: 1 });
const TOTAL = LP_MODELS.length;
const of = (k: LpKind) => LP_MODELS.filter((m) => m.kind === k);
const MAX = Math.max(...LP_MODELS.map(maxTorque));

const ROWS: { kind: LpKind; code: string; note: string; chips: string[] }[] = [
  { kind: "Double acting", code: "HD", note: "The pump drives the valve open and closed. Torque at 0°, 45° and 90°.", chips: ["Double acting", "LP-HD"] },
  { kind: "Spring return, normally closed", code: "NC", note: "The pump opens the valve and the spring closes it: fails closed when power is lost.", chips: ["Fail close", "LP-HS NC"] },
  { kind: "Spring return, normally open", code: "NO", note: "The pump closes the valve and the spring opens it: fails open when power is lost.", chips: ["Fail open", "LP-HS NO"] },
];

const RUNGS: Rung[] = ROWS.map((r, i) => {
  const ms = of(r.kind);
  const lo = Math.min(...ms.map(maxTorque)), hi = Math.max(...ms.map(maxTorque));
  return {
    code: r.code, tab: "", name: r.kind, count: ms.length,
    note: `${r.note} Sizes 45 to 200.`,
    lo, hi, range: `${nm(lo)} – ${nm(hi)} Nm`, side: "max torque", chips: r.chips,
    href: `/actuators/hydraulic/lp-scotch-yoke/products?type=${encodeURIComponent(r.kind)}`,
    tone: i % 2 ? "amber" : "blue",
  };
});

// Same scotch yoke, two ways to drive it (catalogue p.4: "Why you need compressor
// and tubing ...?"). PDS figures for the comparison are left out: different pressures.
function NoAir() {
  const card = { p: 2.5, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}`, display: "flex", flexDirection: "column", gap: 1 } as const;
  const rows: [string, string, string][] = [
    ["Power source", "Compressed air from the plant", "Electric power only: own motor and pump"],
    ["Pipework", "Air lines and tubing to every actuator", "None: a self-contained unit on the valve"],
    ["Fail-safe", "Spring return, needs air to stroke", "Spring return LP-HS, normally closed or open"],
    ["Speed", "Set by air supply and restrictors", "Adjustable by throttle; set by the HPU chosen"],
    ["Good for", "Plants with an air supply and many valves", "Remote or few valves, no compressor on site"],
  ];
  return (
    <Box component="section" aria-labelledby="h2-noair" sx={{ pb: { xs: 7, md: 10 } }}>
      <Box sx={wrap}>
        <Box sx={{ mb: 4 }}>
          <Kicker>Why this range</Kicker>
          <H2 id="h2-noair">No Compressor, No Tubing</H2>
          <Lead>The LP range puts a scotch yoke actuator, a small electric pump and a valve block in one unit. It does what a pneumatic scotch yoke does, without an air supply: a good fit where a compressor and air lines would serve only a few valves.</Lead>
        </Box>
        <Box sx={{ borderRadius: "20px", border: `1px solid ${T.border}`, overflow: "hidden", bgcolor: "#fff" }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1.2fr 1.2fr" }, bgcolor: T.surface, borderBottom: `1px solid ${T.border}`, "& > div": { px: 2, py: 1.5, fontSize: "0.8rem", fontWeight: 800, color: T.muted, textTransform: "uppercase", letterSpacing: "0.06em" } }}>
            <Box sx={{ display: { xs: "none", sm: "block" } }} />
            <Box>Pneumatic scotch yoke (PDS)</Box>
            <Box sx={{ color: `${T.greenDark} !important` }}>LP-HD / LP-HS</Box>
          </Box>
          {rows.map(([k, a, b], i) => (
            <Box key={k} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1.2fr 1.2fr" }, borderTop: i ? `1px solid ${T.border}` : 0, "& > div": { px: 2, py: 1.5, fontSize: "0.9rem", lineHeight: 1.5 } }}>
              <Box sx={{ gridColumn: { xs: "1 / -1", sm: "auto" }, fontWeight: 800, color: T.ink, pb: { xs: "0 !important", sm: 1.5 } }}>{k}</Box>
              <Box sx={{ color: T.body }}>{a}</Box>
              <Box sx={{ color: T.ink, fontWeight: 600, bgcolor: "#F4FBF1" }}>{b}</Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ mt: 2.5, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 1.5 }}>
          <Box sx={card}>
            <Box sx={{ fontWeight: 800, color: T.ink }}>Same yoke as the PDS range</Box>
            <Box sx={{ fontSize: "0.9rem", color: T.body, lineHeight: 1.55 }}>Sizes 45 to 200 match Susin I-Tork’s PDS pneumatic scotch yoke, with its hardened yoke, centre stopper bolts and NAMUR mounting.</Box>
            <Box component={Link} href="/pneumatic/actuators/pds" sx={{ mt: "auto", display: "inline-flex", alignItems: "center", gap: 0.5, fontSize: "0.88rem", fontWeight: 700, color: T.greenDark, textDecoration: "none" }}>See the PDS range <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} /></Box>
          </Box>
          <Box sx={card}>
            <Box sx={{ fontWeight: 800, color: T.ink }}>Hydraulic power unit (HPU) sizing</Box>
            <Box sx={{ fontSize: "0.9rem", color: T.body, lineHeight: 1.55 }}>The catalogue lists stroking times for each size by HPU, from 3.6 s on the smallest to about 68 s on the largest. Every model page shows the times for its size.</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const DEF: SeriesDef = {
  kicker: "Hydraulic actuators",
  h1: ["LP-HD / LP-HS series", "low-pressure scotch yoke"],
  lead: (
    <>
      Self-contained electro-hydraulic actuators for quarter-turn valves and dampers: a scotch yoke actuator with its own motor, pump and valve block at 8 bar, so it needs only electric power. Double acting up to {nm(MAX)} Nm, or spring return to fail close or fail open. {TOTAL} models.
    </>
  ),
  specs: [
    ["Models", `${TOTAL} (sizes 45 – 200)`],
    ["Torque", `Up to ${nm(MAX)} Nm`],
    ["On-board pressure", "Max. 8 bar"],
    ["Power", "180 – 250 W, 400 V / 230 V"],
    ["Fail-safe", "Spring return, NC or NO"],
    ["Hazardous areas", "Zone 1 and 2"],
  ],
  total: TOTAL,
  productsHref: "/actuators/hydraulic/lp-scotch-yoke/products",
  catalog: LP_CATALOG,
  catalogLabel: "Download hydraulic low pressure catalogue (PDF)",
  image: LP_IMAGE,
  imageAlt: "LP-HD low-pressure electro-hydraulic scotch yoke actuator with motor, pump and limit switch box",
  howTitle: "How a low-pressure scotch yoke works",
  how: <HydraulicScotchYoke pressure="8 bar, own pump" />,
  ladder: {
    kicker: "Types",
    title: "Double acting or spring return",
    lead: "Ten sizes in each type, from 45 to 200. Bars show the highest torque in each size’s table; the curve across the stroke is on every model page.",
    rungs: RUNGS,
    max: MAX,
    logFrom: 10,
  },
  build: {
    title: "How it’s built",
    image: LP_IMAGE_NC,
    imageAlt: "LP-HS spring return low-pressure electro-hydraulic actuator with red scotch yoke body",
    points: [
      ["Scotch yoke", "A hardened scotch yoke gives more torque at the open and close positions, closely matching what a valve needs."],
      ["Own hydraulic power", "Electric motor (180 – 250 W) and pump at up to 8 bar, with a solenoid valve at 24 V DC or 230 V; speed adjustable by throttle."],
      ["Spring pack", "Pre-compressed for safety on the spring return LP-HS, to close or open the valve when power is lost."],
      ["Cylinder", "Extruded, anodised aluminium with a polished finish and specially treated O-rings for low friction and long life."],
      ["Stops and indicator", "Centre stopper bolts adjust the open and close positions; flat or dome position indicator."],
      ["Mounting", "ISO 5211, DIN 3337 and NAMUR drive; accessories mount to VDI/VDE 3845 NAMUR."],
    ],
  },
  extra: <NoAir />,
  faqTitle: "LP-HD / LP-HS questions",
  faq: [
    { q: "What does it need to run?", a: "Electric power only: 400 V 50/60 Hz or 230 V 50 Hz for the motor, and 24 V DC or 230 V for the solenoid valve. The pump makes its own hydraulic pressure, up to 8 bar, so no compressed air or hydraulic supply is needed.", icon: AirOutlinedIcon },
    { q: "Double acting or spring return?", a: "LP-HD is double acting: the pump drives the valve both ways. LP-HS is spring return: normally closed models fail closed and normally open models fail open when the power goes.", icon: ShieldOutlinedIcon },
    { q: "How do I choose the size?", a: "Compare the valve’s torque with the actuator torque at the start, middle and end of the stroke on the model page, with a safety margin, then check the ISO 5211 flange.", icon: SquareFootOutlinedIcon },
    { q: "How fast does it stroke?", a: "It depends on the hydraulic power unit. The catalogue gives stroking times for each size and HPU, from 3.6 s on the smallest; speed is also adjustable by throttle.", icon: SpeedOutlinedIcon },
    { q: "Can it go in a hazardous area?", a: "The catalogue lists it for Zone 1 and 2. Tell us the zone and gas group and we’ll confirm the build.", icon: LocalFireDepartmentOutlinedIcon },
    { q: "LP-HD or PANDA?", a: "Both are low-pressure electro-hydraulic units at 8 bar. LP-HD / LP-HS uses a scotch yoke actuator with torque shown across the stroke; PANDA is a different compact design with its own sizes. Send us the valve and we’ll suggest one.", icon: CompareArrowsOutlinedIcon },
  ],
  parent: { href: "/actuators/hydraulic", label: "All hydraulic actuators" },
  cta: {
    title: "No air supply on site?",
    body: `Compare all ${TOTAL} LP models, or send us the valve torque, flange, supply voltage and the fail position you need and we’ll pick the size.`,
  },
};

export default function LpView() {
  return <SeriesView def={DEF} />;
}
