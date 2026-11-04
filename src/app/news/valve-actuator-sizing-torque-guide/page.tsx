"use client";

import {
  ArticleLayout,
  Lead,
  H2,
  P,
  UL,
  KeyTakeaways,
  DataTable,
  Figure,
  FAQ,
  RelatedLinks,
  Finder,
} from "../components/Article";
import { useId, useState, type ChangeEvent } from "react";
import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";

const SLUG = "/news/valve-actuator-sizing-torque-guide";
const IMG = "https://pblol2.blob.core.windows.net/valvenok-images";
const ARTICLE_URL = "https://www.valvenok.com/news/valve-actuator-sizing-torque-guide";
const HEADLINE = "Valve Actuator Sizing Explained: Torque, Safety Factors and Why Actuators Fail to Seat";
const DESCRIPTION =
  "How to size a pneumatic valve actuator: breakaway, running and seating torque, safety factors, minimum air supply, spring-return checks and common mistakes.";

const KEY_TAKEAWAYS = [
  "A valve demands three torques: breakaway (to start moving), running (through mid-stroke) and seating (to close). The actuator must exceed each at the matching point in the stroke.",
  "Pneumatic actuator torque scales with supply pressure and piston area, so size at the lowest pressure the valve will actually see, not the compressor setting.",
  "Torque varies through the stroke. A rack-and-pinion actuator gives roughly constant torque, while a scotch yoke gives high torque at the ends and low torque in the middle.",
  "Spring-return actuators have two torque checks: the air stroke and the spring stroke. The weakest spring torque is at the end of the spring stroke.",
  "There is no universal safety factor. Published guides range from about 10% to 50%, so use your manufacturers’ recommendation.",
  "Oversizing is not safe either. The actuator’s maximum output must stay below the valve’s maximum allowable stem torque.",
];

const VALVE_TORQUES = {
  head: ["Torque", "What it is", "Where it occurs"],
  rows: [
    [
      "Breakaway (opening)",
      "The torque to start moving a closed valve. It must overcome seat friction and the effect of differential pressure",
      "At the closed position, and usually the highest value",
    ],
    ["Running", "The torque to keep the valve moving through the stroke", "Mid-stroke"],
    ["Seating (closing)", "The torque to close the valve fully against the seat", "At the end of the closing stroke"],
  ],
};

const TORQUE_RISES = [
  "Differential pressure across the valve at the moment it operates.",
  "Seat and packing friction, including a switch to a higher-friction packing.",
  "Media, temperature and viscosity, which change friction and sealing force.",
  "Time at rest. A valve that stays still for long periods can have a higher breakaway torque.",
  "Seat wear. Over the years, seating torque can rise.",
];

const PATTERNS = {
  head: ["", "Rack and pinion", "Scotch yoke"],
  rows: [
    ["How it converts motion", "Two pistons with toothed racks turn a central pinion", "A piston drives a yoke through a pin, turning the shaft"],
    ["Torque through 90°", "Roughly constant", "Highest at the start and end of the stroke, lowest in the middle"],
    ["Sizing values", "One output figure per pressure", "A breakaway value (highest) and a running value (lowest)"],
    ["Suits", "Valves whose torque is fairly even through the stroke", "Valves with high breakaway and seating torque"],
    [
      "Watch for",
      "Surplus torque mid-stroke, and any peak that exceeds MAST",
      "The mid-stroke minimum must still exceed the valve’s running torque. Side loading on moving parts",
    ],
  ],
};

const STEPS = {
  head: ["Step", "What to do", "Why it matters"],
  rows: [
    [
      "1. Get the valve torques",
      "From the valve manufacturer: breakaway, running and seating torque at your pressure, temperature and media, and the position and direction where each peaks",
      "Different valve types, and different services, have different torque signatures",
    ],
    [
      "2. Apply the safety factor",
      "Multiply the valve’s torques by the factor your manufacturers recommend",
      "Covers friction, wear and variation in the real service",
    ],
    [
      "3. Find the real minimum air pressure",
      "Use the lowest pressure available at the valve, not the compressor setting",
      "Line losses mean the valve often sees less than the compressor delivers",
    ],
    [
      "4. Read the actuator’s torque",
      "From the manufacturer’s table at that pressure, at the matching points in the stroke",
      "Torque varies through the stroke",
    ],
    [
      "5. Check both strokes on a spring-return actuator",
      "Check the air stroke and the spring stroke separately",
      "Spring torque falls as the springs extend, and air torque falls as they compress",
    ],
    [
      "6. Check the upper limit",
      "The actuator’s maximum output at the maximum supply pressure must be below the valve’s MAST",
      "An oversized actuator can break the stem",
    ],
    [
      "7. Check the interface",
      "Mounting flange, drive coupling and stem size, for example to ISO 5211",
      "The actuator has to fit the valve",
    ],
    [
      "8. Check duty and fail action",
      "Cycle rate, speed, positioner need and fail-open or fail-closed requirement",
      "Torque alone doesn’t make a suitable actuator",
    ],
  ],
};

const WORKED = {
  head: ["Item", "Illustrative value", "Result"],
  rows: [
    ["Valve breakaway torque (from the valve maker)", "100 Nm", ""],
    ["Safety factor recommended for the pairing", "1.25", "Required torque: 100 × 1.25 = 125 Nm"],
    ["Minimum air pressure at the valve", "5.5 bar", "Read the actuator’s torque at 5.5 bar"],
    ["Maximum air pressure at the valve", "6.5 bar", "Read the actuator’s torque at 6.5 bar"],
    ["Valve MAST (from the valve maker)", "300 Nm", "Actuator maximum at 6.5 bar must be below 300 Nm"],
  ],
};

const SPRING_TERMS = {
  head: ["Term", "Meaning"],
  rows: [
    ["Air stroke", "The movement driven by air, which compresses the springs. The more the springs compress, the less torque is left for the valve"],
    ["Spring stroke", "The movement driven by the stored energy in the springs when air is removed"],
    [
      "Start and end of air",
      "The air torque at the beginning and at the end of the air stroke. The minimum air torque may be at the end or mid-stroke, depending on the actuator type",
    ],
    ["Start and end of spring", "The spring torque at the beginning and at the end of the spring stroke"],
  ],
};

const FAIL_ACTION = {
  head: ["Actuator", "On loss of air or power", "Notes"],
  rows: [
    ["Double-acting pneumatic", "Stays in place", "Needs air to move in both directions"],
    ["Spring-return pneumatic", "Moves to fail-open or fail-closed", "Spring torque sets the fail-safe performance"],
    [
      "Standard electric",
      "Stays in place, because the motor and gearbox hold position",
      "True fail-open or fail-closed needs an added battery, capacitor or spring-return unit",
    ],
  ],
};

const RECHECK = [
  "Differential pressure across the valve increases.",
  "The valve trim or seat material changes.",
  "The instrument air pressure is reduced.",
  "The valve is repacked with a higher-friction packing.",
  "The valve operates at a much higher cycle rate than planned. High-cycle duty can need derated output, since cycle life is separate from static torque.",
];

const FAULTS = {
  head: ["Symptom", "Likely cause", "What to check"],
  rows: [
    [
      "Opens the valve but won’t close it fully",
      "Not enough closing or seating torque at the end of the stroke",
      "Check the torque at the end of the stroke, including spring-end torque, against the valve’s seating torque",
    ],
    [
      "Valve sticks mid-stroke",
      "Running torque higher than the actuator’s minimum torque, which may be mid-stroke",
      "Compare the actuator’s lowest torque, and where it occurs, with the valve’s running torque",
    ],
    [
      "Slow stroke times",
      "Low air pressure at the valve, restricted supply, or rising valve friction",
      "Measure the pressure at the actuator while it moves",
    ],
    ["Air leaks", "Worn seals or a damaged diaphragm", "Check the actuator seals and pneumatic connections"],
    ["Positioner drifts or hunts", "Calibration drift, or friction that varies", "Recalibrate, then check valve friction"],
    ["Torque demand rising over time", "Seat wear or deposits", "Trend torque over time, and plan seat service"],
    ["Stem damage", "Actuator output above the valve’s MAST", "Check the maximum output at the maximum supply pressure"],
  ],
};

const MISTAKES = {
  head: ["Mistake", "What happens", "How to avoid it"],
  rows: [
    ["Sizing at the compressor pressure", "Torque falls short when the supply sags at the valve", "Size at the lowest pressure available at the valve"],
    ["Using a rule-of-thumb safety factor", "Too little margin, or wasteful oversizing", "Use the manufacturers’ recommended factor"],
    ["Checking only breakaway torque", "The valve sticks mid-stroke or doesn’t seat", "Check breakaway, running and seating torque"],
    ["Ignoring the spring stroke", "A fail-safe valve doesn’t close with no air", "Check spring-end torque against seating torque"],
    ["Ignoring MAST", "An oversized actuator breaks the stem", "Check maximum output at maximum supply pressure"],
    [
      "Not re-checking after changes",
      "Differential pressure, trim or packing changes push torque above the actuator’s output",
      "Re-check whenever service conditions change",
    ],
    [
      "Assuming fail-safe action",
      "A double-acting or standard electric actuator stays where it is",
      "Choose spring-return, or add a battery or capacitor",
    ],
  ],
};

const FAQS = [
  {
    q: "What is valve actuator sizing?",
    a: "Valve actuator sizing is matching an actuator’s torque output to the torque the valve needs, at every point in the stroke and under the worst realistic conditions. An undersized actuator can stick or fail to seat the valve. An oversized one wastes air and can overtorque the valve.",
  },
  {
    q: "What is breakaway torque?",
    a: "Breakaway torque is the torque needed to start moving a valve from rest. It is usually the highest torque the valve demands, because it must overcome seat friction and the effect of differential pressure. It is typically highest at the closed position, so it is the first value to check when sizing.",
  },
  {
    q: "What is the difference between breakaway, running and seating torque?",
    a: "Breakaway torque starts the valve moving, running torque keeps it moving through mid-stroke, and seating torque is needed at the end of the stroke to close the valve against the seat. The actuator must exceed each of them at the matching point in the stroke, after allowing for a safety factor.",
  },
  {
    q: "What safety factor should you use when sizing an actuator?",
    a: "There is no universal figure. Published sizing guides use factors from roughly 10% to 50%, depending on actuator type and service. Apply the factor your valve and actuator manufacturers recommend for your application to the valve’s published torque, rather than a rule of thumb.",
  },
  {
    q: "Why size an actuator at the minimum air supply pressure?",
    a: "Actuator torque scales with supply pressure, and the pressure at the valve can be lower than the compressor setting. Sizing at the lowest pressure the valve will actually see means the actuator still delivers enough torque when the supply sags.",
  },
  {
    q: "What is the difference between double-acting and spring-return actuators?",
    a: "A double-acting actuator uses air to move the valve in both directions and stays in place if air is lost. A spring-return, or single-acting, actuator uses air in one direction and springs in the other, so it drives the valve to a fail-open or fail-closed position when air is lost.",
  },
  {
    q: "What is maximum allowable stem torque (MAST)?",
    a: "Maximum allowable stem torque is the torque that would permanently deform or break the valve stem. The actuator’s maximum output at the maximum supply pressure must stay below it, otherwise an oversized actuator can damage the valve it is meant to operate.",
  },
  {
    q: "Why does a scotch yoke actuator’s torque change through the stroke?",
    a: "A scotch yoke’s mechanical advantage changes with the yoke angle, so its torque is highest at the start and end of the stroke and lowest in the middle. A rack-and-pinion actuator gives roughly constant torque through 90°. The valve’s torque pattern should be matched to the actuator’s.",
  },
  {
    q: "Can an electric actuator be fail-safe?",
    a: "A standard electric actuator fails in place on loss of power, because the motor and gearbox hold position. True fail-open or fail-closed action needs an added battery, capacitor or spring-return unit, which adds cost compared with a pneumatic spring-return actuator.",
  },
  {
    q: "When should you re-check actuator sizing?",
    a: "Re-check it whenever differential pressure increases, the valve trim or seat material changes, the air supply pressure is reduced, or the valve is repacked with higher-friction packing. Seat wear over the years can also raise seating torque, so periodic torque checks suit critical valves.",
  },
  {
    q: "Do I need a positioner on a valve actuator?",
    a: "On modulating duty, yes. A positioner holds accurate valve position across the stroke, which the flow relationship depends on. On simple on/off duty, a positioner is often unnecessary.",
  },
  {
    q: "What is ISO 5211?",
    a: "ISO 5211 specifies the flange and driving-component dimensions used to attach part-turn actuators to industrial valves. It helps the actuator mount and couple to the valve, but torque, stem size and maximum allowable stem torque still need checking separately.",
  },
];

const RELATED = [
  { label: "How to choose a valve actuator: electric, pneumatic, hydraulic", href: "/news/how-to-choose-a-valve-actuator" },
  { label: "Butterfly valve instrumentation and connection packages", href: "/news/butterfly-valve-guide" },
  { label: "Ball valve vs gate valve: key differences and how to choose", href: "/news/ball-valve-vs-gate-valve" },
  { label: "Actuators", href: "/actuators" },
];

// Article and FAQPage from the supplied JSON-LD file. The BreadcrumbList is
// left out because the site layout already emits one for every page.
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${ARTICLE_URL}#article`,
      headline: HEADLINE,
      description: DESCRIPTION,
      image: `${IMG}/valve-actuator-torque-curves.png`,
      mainEntityOfPage: ARTICLE_URL,
      datePublished: "2026-10-29",
      dateModified: "2026-10-29",
      author: { "@type": "Organization", name: "Valvenok" },
      publisher: {
        "@type": "Organization",
        name: "Valvenok Ltd",
        address: {
          "@type": "PostalAddress",
          streetAddress: "St. Edburgs Hall, Priory Road",
          addressLocality: "Bicester",
          postalCode: "OX26 6BL",
          addressCountry: "GB",
        },
        logo: {
          "@type": "ImageObject",
          url: "https://pblol2.blob.core.windows.net/valvenok-images/logo.png",
        },
      },
      about: ["valve actuator sizing", "pneumatic actuator", "actuator torque", "spring return actuator"],
    },
    {
      "@type": "FAQPage",
      "@id": `${ARTICLE_URL}#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

// ───────────── Torque sizing check (the worked-illustration method) ─────────────
const num = (v: string) => {
  const n = parseFloat(v);
  return Number.isFinite(n) && n >= 0 ? n : null;
};
const fmt = (n: number) => String(Math.round(n * 100) / 100);

function TorqueField({ label, unit, value, onChange, hint }: { label: string; unit?: string; value: string; onChange: (v: string) => void; hint?: string }) {
  const id = useId();
  return (
    <Box>
      <Box component="label" htmlFor={id} sx={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: T.ink, mb: 0.75, lineHeight: 1.35 }}>
        {label}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", border: `1px solid ${T.border}`, borderRadius: "12px", bgcolor: "#fff", overflow: "hidden", transition: "border-color .15s", "&:focus-within": { borderColor: T.greenDark, boxShadow: `0 0 0 3px ${T.greenSoft}` } }}>
        <Box
          component="input"
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          step="any"
          value={value}
          placeholder={hint}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          sx={{ flex: 1, minWidth: 0, border: 0, outline: 0, px: 1.75, py: 1.25, fontSize: "1rem", fontFamily: "inherit", color: T.ink, bgcolor: "transparent", fontVariantNumeric: "tabular-nums", "&::placeholder": { color: T.muted, fontSize: "0.85rem" } }}
        />
        {unit && <Box component="span" sx={{ px: 1.5, fontSize: "0.85rem", fontWeight: 700, color: T.muted }}>{unit}</Box>}
      </Box>
    </Box>
  );
}

function TorqueCheck() {
  const [breakaway, setBreakaway] = useState("100");
  const [factor, setFactor] = useState("1.25");
  const [maxOut, setMaxOut] = useState("");
  const [mast, setMast] = useState("300");
  const b = num(breakaway);
  const f = num(factor);
  const m = num(maxOut);
  const limit = num(mast);
  const required = b !== null && f !== null ? b * f : null;
  const pass = m !== null && limit !== null ? m < limit : null;
  return (
    <Box sx={{ my: 4.5, p: { xs: 2.5, md: 3.5 }, borderRadius: T.radius, border: `1px solid ${T.border}`, bgcolor: "#fff", boxShadow: T.shadow }}>
      <Box sx={{ mb: 2.5 }}>
        <Box sx={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase !important", color: T.greenDark, mb: 0.75 }}>Calculator</Box>
        <Box sx={{ fontSize: { xs: "1.15rem", md: "1.3rem" }, fontWeight: 800, color: T.ink, lineHeight: 1.3 }}>Torque sizing check</Box>
        <Box sx={{ mt: 0.5, fontSize: "0.9rem", color: T.muted }}>Illustrative — always use your manufacturers&apos; torque data.</Box>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
        <TorqueField label="Valve breakaway torque (from the valve maker)" unit="Nm" value={breakaway} onChange={setBreakaway} />
        <TorqueField label="Safety factor recommended for the pairing" unit="×" value={factor} onChange={setFactor} />
        <TorqueField label="Actuator maximum output at maximum supply pressure" unit="Nm" value={maxOut} onChange={setMaxOut} hint="From the actuator's torque table" />
        <TorqueField label="Valve MAST (from the valve maker)" unit="Nm" value={mast} onChange={setMast} />
      </Box>
      <Box aria-live="polite" sx={{ mt: 2.5, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 1.5 }}>
        <Box sx={{ p: { xs: 2, md: 2.5 }, borderRadius: T.radiusSm, bgcolor: T.surface, border: `1px solid ${T.border}` }}>
          <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase !important", color: T.muted }}>Required torque</Box>
          <Box sx={{ mt: 0.5, fontSize: { xs: "1.6rem", md: "1.9rem" }, fontWeight: 800, color: T.greenDark, lineHeight: 1.15, fontVariantNumeric: "tabular-nums" }}>
            {required !== null ? `${fmt(required)} Nm` : "—"}
          </Box>
          <Box sx={{ mt: 0.75, fontSize: "0.88rem", lineHeight: 1.55, color: T.body }}>
            {required !== null
              ? `${fmt(b!)} × ${fmt(f!)} = ${fmt(required)} Nm. The chosen actuator must deliver at least this at the minimum air pressure at the valve, at the stroke position where the valve needs it.`
              : "Enter the breakaway torque and safety factor."}
          </Box>
        </Box>
        <Box
          sx={{
            p: { xs: 2, md: 2.5 },
            borderRadius: T.radiusSm,
            bgcolor: pass === null ? T.surface : pass ? T.greenSoft : "#FDECEC",
            border: `1px solid ${pass === null ? T.border : pass ? "#CFEBC6" : "#E9A7A1"}`,
          }}
        >
          <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase !important", color: T.muted }}>Upper limit (MAST)</Box>
          <Box sx={{ mt: 0.5, fontSize: { xs: "1.6rem", md: "1.9rem" }, fontWeight: 800, lineHeight: 1.15, color: pass === null ? T.muted : pass ? T.greenDark : "#B42318" }}>
            {pass === null ? "—" : pass ? "✓ Pass" : "✗ Fail"}
          </Box>
          <Box sx={{ mt: 0.75, fontSize: "0.88rem", lineHeight: 1.55, color: T.body }}>
            {pass === null
              ? "Enter the actuator's maximum output at the maximum supply pressure. It must be below the valve's MAST."
              : pass
                ? `${fmt(m!)} Nm is below the ${fmt(limit!)} Nm MAST.`
                : `${fmt(m!)} Nm is not below the ${fmt(limit!)} Nm MAST. An oversized actuator can break the stem.`}
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 2, fontSize: "0.85rem", lineHeight: 1.6, color: T.muted }}>
        The same check is then made for the running and seating torques, each at its own position in the stroke.
      </Box>
    </Box>
  );
}

export default function ActuatorSizingPage() {
  return (
    <ArticleLayout
      schema={schema}
      meta={{
        slug: SLUG,
        category: "Technical Guide",
        title: "Valve Actuator Sizing Explained",
        dek: "Torque, safety factors and why actuators fail to seat.",
        author: "Valvenok Team",
        date: "October 2026",
        readMinutes: 11,
        cover: "https://pblol2.blob.core.windows.net/valvenok-images/blogs/valve-actuator-sizing-torque-guide.jpg",
        coverAlt: "Pneumatic actuator on a ball valve with a torque dial",
      }}
    >
      <Lead>
        Most actuator problems are sizing problems. An actuator that has enough torque to open a valve but not to
        close it, or that has plenty of torque on paper but not at the air pressure the valve really sees, will
        stick, leak or fail to seat. Getting the sizing right means knowing what torque the valve demands, what
        torque the actuator really delivers at each point in the stroke, and how much margin sits between them.
      </Lead>
      <P>
        This guide explains the three torques a valve demands, how actuator torque is produced and how it varies
        through the stroke, a step-by-step sizing procedure with a worked illustration, how spring-return actuators
        differ, and why published safety factors vary so much. It ends with fault-finding for an actuator that
        won&apos;t seat a valve. It focuses on pneumatic quarter-turn actuators, with notes on electric.
      </P>

      <KeyTakeaways title="Key Takeaways" items={KEY_TAKEAWAYS} />

      <H2>What is valve actuator sizing?</H2>
      <P>{FAQS[0].a}</P>
      <P>
        Sizing means matching the actuator&apos;s output to the valve&apos;s demand at every point in the stroke,
        with margin to spare. The mismatch can go either way. An undersized actuator sticks, leaks or fails to
        seat. An oversized one wastes air and money, and the extra torque can damage the stem or the valve&apos;s
        internals.
      </P>

      <H2>What torque does a valve need?</H2>
      <DataTable {...VALVE_TORQUES} />
      <P>
        Different valve types have different torque signatures, so the numbers must come from the valve
        manufacturer, for your conditions. Torque rises with:
      </P>
      <UL items={TORQUE_RISES} />
      <P>
        Manufacturers often publish torque for a given pressure in clean water service. Treat that as a starting
        point, and ask for your service conditions.
      </P>

      <H2>How is actuator torque produced?</H2>
      <P>
        A pneumatic actuator turns air pressure into rotation. The piston force is pressure multiplied by piston
        area, and torque is that force multiplied by the distance over which it acts about the shaft. In simple
        terms, torque scales with supply pressure and piston area, and the geometry decides how the distance
        changes through the stroke.
      </P>
      <P>That geometry gives two common torque patterns:</P>
      <DataTable {...PATTERNS} minWidth={680} />
      <Figure
        src={`${IMG}/valve-actuator-torque-curves.png`}
        alt="Torque curves: rack and pinion is flat across the 90° stroke; scotch yoke is high at both ends and lowest mid-stroke, above the valve’s torque demand."
      />

      <H2>How do you size a pneumatic actuator?</H2>
      <P>
        Work through the steps below. Always use the manufacturers&apos; own torque tables and recommendations,
        because torque curves, safety factors and limits differ between products.
      </P>
      <DataTable {...STEPS} minWidth={680} />
      <Figure
        src={`${IMG}/compressor-vs-valve-air-pressure.png`}
        alt="Air pressure falls from 7.0 bar at the compressor to 5.5 bar at the actuator after the filter, pipe run and fittings."
        caption="Step 3: pressure at the compressor compared with pressure at the valve. Illustrative values."
      />

      <H2>A worked illustration</H2>
      <P>
        The numbers below are invented to show the method. Never size from them. Use your manufacturers&apos;
        data.
      </P>
      <DataTable {...WORKED} minWidth={680} />
      <Figure
        src={`${IMG}/actuator-sizing-worked-example.png`}
        alt="Worked sizing example: 100 Nm breakaway torque × 1.25 safety factor gives 125 Nm required at 5.5 bar; maximum output at 6.5 bar must stay below the 300 Nm MAST."
        caption="Illustrative numbers. Never size from them."
      />
      <P>
        The chosen actuator must deliver at least 125 Nm at 5.5 bar at the stroke position where the valve needs
        it, and no more than the MAST at 6.5 bar. The same check is then made for the running and seating
        torques, each at its own position in the stroke.
      </P>
      <TorqueCheck />

      <H2>How does sizing a spring-return actuator differ?</H2>
      <P>
        A spring-return, or single-acting, actuator uses air to move the valve one way and springs to move it
        back, so it can drive the valve to a fail-open or fail-closed position when air is lost. That adds a
        second torque check, because the springs oppose the air on one stroke and provide the force on the other.
      </P>
      <Figure
        src={`${IMG}/spring-return-actuator-torque.png`}
        alt="Spring-return actuator torque: air stroke torque falls as the springs compress; spring stroke torque is weakest at the end of the spring stroke."
      />
      <DataTable {...SPRING_TERMS} minWidth={520} />
      <P>
        For a valve that must close by spring on loss of air, the check that matters is the spring torque with
        the springs fully extended, because that is what is available to seat the valve with no air. The
        valve&apos;s torque must be lower than each corresponding actuator torque, and the actuator&apos;s highest
        torque must stay below the MAST.
      </P>

      <H2>Why do safety factors vary so much?</H2>
      <P>
        Published sizing guidance doesn&apos;t agree on one safety factor. One manufacturer&apos;s guide suggests
        at least 15% for double-acting and 10% for spring-return actuators. Another uses 20%. A worked example
        from a third uses 1.2 for double-acting and 1.5 for spring-return. Another recommends at least 30%.
        Differences like these come from the actuator type, how well the valve&apos;s torque is known, and the
        service.
      </P>
      <P>
        The practical rule is simple. Use the factor that the valve and actuator manufacturers recommend for your
        pairing and service, apply it to the valve&apos;s published torque, and record which factor you used.
      </P>

      <H2>What about electric actuators and fail action?</H2>
      <DataTable {...FAIL_ACTION} minWidth={680} />
      <P>
        Fail action is a process safety decision, so settle it with the process requirements first, then size
        for it. On modulating duty, add a positioner. On safety valves, partial-stroke testing can confirm an
        actuator isn&apos;t stuck without taking the valve out of service.
      </P>

      <H2>When should you re-check the sizing?</H2>
      <UL items={RECHECK} />

      <H2>Why won&apos;t my actuator seat the valve?</H2>
      <P>
        Actuator failures rarely come without warning. Slow stroke times, air leakage, positioner drift and
        rising breakaway torque as seats wear are the usual early signs.
      </P>
      <Finder
        kicker="Fault finder"
        title="What symptom do you see?"
        hint="Pick a symptom to see the likely cause and what to check."
        options={FAULTS.rows.map(([symptom, cause, check]) => ({
          label: symptom,
          result: (
            <>
              <strong>Likely cause:</strong> {cause}.
              <br />
              <strong>What to check:</strong> {check}.
            </>
          ),
        }))}
      />
      <Figure
        src={`${IMG}/actuator-wont-seat-fault-finding.png`}
        alt="Fault-finding flow chart for an actuator that won’t seat a valve: check air pressure, leaks, positioner, end-of-stroke torque, then seat wear."
      />
      <DataTable {...FAULTS} minWidth={680} />

      <H2>What mistakes should you avoid when sizing?</H2>
      <DataTable {...MISTAKES} minWidth={680} />


      <FAQ title="Frequently Asked Questions" items={FAQS} />

      <RelatedLinks title="Related Guides" links={RELATED} />
    </ArticleLayout>
  );
}
