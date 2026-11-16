"use client";

// ITS limit switch box series page, on the shared series template. Every figure
// is from Susin I-Tork's ITS catalogue (see itsData).

import { Box } from "@mui/material";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import SettingsInputComponentOutlinedIcon from "@mui/icons-material/SettingsInputComponentOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined";
import { T } from "@/src/app/Landing/modern/tokens";
import { wrap, Kicker, H2, Lead } from "@/src/app/hydrogen-cryogenic/components/HydrogenHub";
import SeriesView, { type SeriesDef, type Rung } from "@/src/app/pneumatic/actuators/_series/SeriesView";
import LimitSwitchBox from "@/src/app/pneumatic/actuators/_series/LimitSwitchBox";
import { ITS_MODELS, ITS_IMAGE, ITS_CATALOG, SWITCH_OPTIONS, CABLE_ENTRIES, SWITCHES, BRACKETS } from "./itsData";

const BADGE: Record<string, string> = { "ITS 200": "IP67", "ITS 400": "Ex d IIC T6", "ITS 500": "Ex d IIC T6" };
const optsFor = (digit: string) => SWITCH_OPTIONS.filter((o) => digit === "2" ? o.all : true).length;
const cableFor = (digit: string) => CABLE_ENTRIES.filter((c) => digit === "2" ? c.all : true).length;
const MAX_OPTS = SWITCH_OPTIONS.length;

const RUNGS: Rung[] = ITS_MODELS.map((m, i) => ({
  code: m.digit + "00", tab: "", name: `${m.model}: ${m.kind.toLowerCase()}`,
  note: m.summary,
  lo: optsFor(m.digit), hi: optsFor(m.digit), range: `${optsFor(m.digit)} switch and sensor options`, side: `${cableFor(m.digit)} cable entries`,
  chips: [BADGE[m.model], m.housing.split(",")[0]],
  href: `/actuators/limit-switches/its/products/${m.slug}`,
  tone: i % 2 ? "amber" : "blue",
}));

const card = { p: 2.5, borderRadius: "20px", bgcolor: "#fff", border: `1px solid ${T.border}` } as const;
const chip = (on: boolean) => ({ display: "inline-block", px: 1, py: 0.2, borderRadius: 999, fontSize: "0.7rem", fontWeight: 700, whiteSpace: "nowrap", bgcolor: on ? T.greenSoft : T.surface, color: on ? T.greenDark : T.body, border: `1px solid ${on ? "#BFE3B4" : T.border}` }) as const;

// Switches and sensors (p.5–6), the model number legend (p.8) and brackets (p.7)
function Options() {
  const legendCol = (title: string, rows: { code: string; text: string; all: boolean }[]) => (
    <Box sx={card}>
      <Box sx={{ fontSize: "0.8rem", fontWeight: 800, color: T.muted, textTransform: "uppercase", letterSpacing: "0.06em", mb: 1.25 }}>{title}</Box>
      <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gap: 0.75 }}>
        {rows.map((r) => (
          <Box component="li" key={r.code + r.text} sx={{ display: "flex", alignItems: "baseline", gap: 1, fontSize: "0.86rem", color: T.ink }}>
            <Box component="span" sx={{ flexShrink: 0, minWidth: 26, fontWeight: 800, color: T.greenDark, fontFamily: "ui-monospace, Menlo, monospace" }}>{r.code}</Box>
            <Box component="span" sx={{ flex: 1 }}>{r.text}</Box>
            {!r.all && <Box component="span" sx={chip(false)}>400 / 500</Box>}
          </Box>
        ))}
      </Box>
    </Box>
  );
  return (
    <>
      <Box component="section" aria-labelledby="h2-switches" sx={{ pb: { xs: 7, md: 10 } }}>
        <Box sx={wrap}>
          <Box sx={{ mb: 4 }}>
            <Kicker>Inside the box</Kicker>
            <H2 id="h2-switches">Switches and Sensors</H2>
            <Lead>Every ITS comes with two SPDT mechanical switches as standard. Swap them for more switches, DPDT, proximity sensors or a position transmitter. Ratings are from Susin I-Tork’s catalogue.</Lead>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" }, gap: 1.5 }}>
            {SWITCHES.map((s) => (
              <Box key={s.name} sx={{ ...card, display: "flex", flexDirection: "column", gap: 0.75 }}>
                <Box sx={{ fontSize: "1rem", fontWeight: 800, color: T.ink }}>{s.name}</Box>
                <Box><Box component="span" sx={chip(s.spec.startsWith("Standard"))}>{s.spec}</Box></Box>
                <Box sx={{ fontSize: "0.86rem", color: T.body, lineHeight: 1.55 }}>{s.detail}</Box>
                <Box sx={{ mt: "auto", pt: 0.5, fontSize: "0.78rem", color: T.muted, fontWeight: 600 }}>{s.models}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box component="section" aria-labelledby="h2-code" sx={{ pb: { xs: 7, md: 10 } }}>
        <Box sx={wrap}>
          <Box sx={{ mb: 4 }}>
            <Kicker>Model number</Kicker>
            <H2 id="h2-code">Reading an ITS Model Number</H2>
            <Lead>
              ITS, then the housing, the switch type, the switch option and a cable entry letter. For example, ITS 200A is a weatherproof box with two SPDT switches and a 1/2" NPT entry. Options marked 400 / 500 are not available on the ITS 200.
            </Lead>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1.4fr 1fr" }, gap: 1.5 }}>
            {legendCol("Housing (1st digit)", ITS_MODELS.map((m) => ({ code: m.digit, text: `${m.kind}${m.digit === "5" ? " (316L, Duplex)" : ""}`, all: true })))}
            {legendCol("Switch type and option (2nd and 3rd)", SWITCH_OPTIONS)}
            {legendCol("Cable entry (letter)", CABLE_ENTRIES)}
          </Box>
        </Box>
      </Box>

      <Box component="section" aria-labelledby="h2-brackets" sx={{ pb: { xs: 7, md: 10 } }}>
        <Box sx={wrap}>
          <Box sx={{ mb: 4 }}>
            <Kicker>Mounting</Kicker>
            <H2 id="h2-brackets">Mounting Brackets</H2>
            <Lead>Stainless steel brackets to VDI/VDE 3845 fit the box to the actuator. SSIN1 or SSIN2 comes with the switch box; SSIN3 and SSIN4 cost extra. Sizes are width × length × height in mm.</Lead>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 1.5 }}>
            {BRACKETS.map((b) => (
              <Box key={b.code} sx={{ ...card, display: "flex", flexDirection: "column", gap: 0.75 }}>
                <Box sx={{ fontSize: "1rem", fontWeight: 800, color: T.ink }}>{b.code}</Box>
                <Box><Box component="span" sx={chip(b.supply.startsWith("Standard"))}>{b.supply}</Box></Box>
                <Box sx={{ fontSize: "0.86rem", color: T.body, lineHeight: 1.55 }}>{b.size}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

const DEF: SeriesDef = {
  kicker: "Actuator accessories",
  h1: ["ITS series", "limit switch boxes"],
  lead: (
    <>
      Susin I-Tork position monitoring switch boxes for rotary valves and NAMUR pneumatic actuators: a dome indicator you can read from up to 50 m, and switches or sensors that report open and closed to your control system. Weatherproof, explosion proof or stainless.
    </>
  ),
  specs: [
    ["Models", "3 (ITS 200, 400, 500)"],
    ["Enclosure", "IP67 or Ex d IIC T6"],
    ["Housing", "Aluminium, 316L or Duplex"],
    ["Switches", "2 × SPDT standard"],
    ["Indicator", "Dome, 0 – 90°"],
    ["Temperature", "−20 to +80 °C"],
  ],
  total: ITS_MODELS.length,
  productsHref: "/actuators/limit-switches/its/products",
  catalog: ITS_CATALOG,
  image: ITS_IMAGE,
  imageAlt: "Susin I-Tork ITS limit switch box with dome position indicator",
  howTitle: "How a limit switch box works",
  how: <LimitSwitchBox />,
  ladder: {
    kicker: "Models",
    title: "Weatherproof, explosion proof or stainless",
    lead: "Three housings with the same dome indicator and cams. The bar shows how many switch and sensor options each takes from Susin I-Tork’s model number legend.",
    rungs: RUNGS,
    max: MAX_OPTS,
  },
  build: {
    title: "How it’s built",
    points: [
      ["Dome indicator", "High impact, chemical resistant poly-carbonate, driven directly by the shaft for continuous position: red for close, yellow for open, readable from up to 50 m. L-port and T-port versions."],
      ["Easy set cams", "Set precisely without a tool: the red cam for close, the green cam for open."],
      ["Terminal block", "Eight socket-type terminals with screws, six for the switches and two for solenoid valve power; up to 2.5 mm², 26 A at 30 °C, UL and CSA approved."],
      ["Sealed", "NBR O-rings at every interface: dome, lower and upper housing, and shaft."],
      ["Stainless hardware", "SS304 stainless shaft, brass bushings and stainless bolts throughout."],
      ["Housing", "Aluminium die-cast with epoxy-polyester coating, or 316L / Duplex stainless with no paint on the ITS 500."],
    ],
  },
  extra: <Options />,
  faqTitle: "ITS limit switch box questions",
  faq: [
    { q: "Which model do I need?", a: "The ITS 200 for safe areas and small actuators, the ITS 400 for hazardous areas (Ex d IIC T6, Zone 1 and 2), and the ITS 500 where the box needs a 316L or Duplex stainless housing for corrosive or offshore sites.", icon: SquareFootOutlinedIcon },
    { q: "Can it go in a hazardous area?", a: "The ITS 400 and ITS 500 are explosion proof to Ex d IIC T6, built to EN 50014 and EN 50018, for Zone 1 and 2. The P+F NJ2-V3-N proximity sensor is intrinsically safe.", icon: LocalFireDepartmentOutlinedIcon },
    { q: "Can it send a 4 – 20 mA signal?", a: "Yes, on the ITS 400 and 500: add a position transmitter with a 4 – 20 mA or 0 – 1 kΩ output alongside the switches.", icon: SettingsInputComponentOutlinedIcon },
    { q: "Will it fit my actuator?", a: "It mounts on NAMUR rotary pneumatic actuators with a stainless VDI/VDE 3845 bracket. SSIN1 or SSIN2 comes with the box; SSIN3 and SSIN4 are extra.", icon: BuildOutlinedIcon },
    { q: "How do I set the switches?", a: "Turn the cams on the shaft by hand, no tool needed: the red cam sets the close switch, the green cam the open switch.", icon: TuneOutlinedIcon },
    { q: "Which cable entries are there?", a: "1/2\" NPT is standard on the ITS 200 and 2 × 3/4\" PF on the ITS 400 and 500, with M20, 1/2\" PT, 1/2\" PF and PG 13.5 on all, and 3/4\" NPT and M25 on the ITS 400 and 500.", icon: WavesOutlinedIcon },
  ],
  parent: { href: "/actuators/accessories", label: "All actuator accessories" },
  cta: {
    title: "Need position feedback on a valve?",
    body: "Compare the three ITS models, or send us the actuator, the switches or signal you need and the area classification and we’ll pick the model.",
  },
};

export default function ItsView() {
  return <SeriesView def={DEF} />;
}
