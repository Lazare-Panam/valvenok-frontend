"use client";

import React from "react";
import { Box, Container, Typography, Stack, Paper, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const DISPLAY_FONT = '"Barlow Condensed"';
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

// ── small render helpers, matching the existing /news article grammar ──
function H2({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="h1"
      component="h2"
      sx={{
        fontFamily: DISPLAY_FONT,
        fontWeight: 800,
        mb: 2,
        mt: 6,
        textTransform: "uppercase",
        color: "primary.main",
      }}
    >
      {children}
    </Typography>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <Box sx={{ pl: 3, mb: 4, mt: 2 }}>
      {items.map((item) => (
        <Typography key={item} sx={{ mb: 1, color: "#000", fontSize: "1.1rem" }}>
          • {item}
        </Typography>
      ))}
    </Box>
  );
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  const cols = head.length === 2 ? "1fr 2.4fr" : `1.1fr repeat(${head.length - 1}, 1.4fr)`;
  return (
    <Box sx={{ overflowX: "auto", my: 4, border: "1px solid", borderColor: "divider" }}>
      <Box sx={{ minWidth: head.length === 2 ? 520 : 680 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: cols, bgcolor: "primary.main" }}>
          {head.map((h, i) => (
            <Typography
              key={i}
              sx={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 800,
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "white !important",
                mb: "0 !important",
                px: 2,
                py: 1.5,
              }}
            >
              {h}
            </Typography>
          ))}
        </Box>
        {rows.map((row, ri) => (
          <Box
            key={row[0]}
            sx={{
              display: "grid",
              gridTemplateColumns: cols,
              bgcolor: ri % 2 === 0 ? "background.default" : "rgba(97,214,73,0.05)",
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            {row.map((cell, ci) => (
              <Typography
                key={ci}
                sx={{
                  px: 2,
                  py: 1.5,
                  fontSize: "0.85rem !important",
                  lineHeight: 1.5,
                  mb: "0 !important",
                  fontWeight: ci === 0 ? 800 : 500,
                  fontFamily: ci === 0 ? DISPLAY_FONT : undefined,
                  textTransform: ci === 0 ? "uppercase" : "none",
                  letterSpacing: ci === 0 ? "0.03em" : undefined,
                  color: ci === 0 ? "primary.dark" : "text.primary",
                }}
              >
                {cell}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function Figure({ file, alt, caption }: { file: string; alt: string; caption?: string }) {
  return (
    <Box component="figure" sx={{ my: 5, mx: 0, textAlign: "center" }}>
      <Box
        component="img"
        src={`${IMG}/${file}`}
        alt={alt}
        loading="lazy"
        sx={{ width: "100%", maxWidth: 760, height: "auto", border: "1px solid", borderColor: "divider" }}
      />
      {caption && (
        <Typography
          component="figcaption"
          sx={{ mt: 1.5, fontSize: "0.9rem !important", fontStyle: "italic", color: "text.secondary !important" }}
        >
          {caption}
        </Typography>
      )}
    </Box>
  );
}

export default function ActuatorSizingPage() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        pb: 10,
        // The theme capitalises every word in Typography; this is long-form prose
        "& p, & h5, & figcaption": { textTransform: "none !important" },
      }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <Box sx={{ bgcolor: "primary.main", color: "white", pt: 15, pb: 10 }}>
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, letterSpacing: "0.4em", opacity: 0.8 }}
          >
            Technical Guide
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: DISPLAY_FONT,
              fontSize: { xs: "2.5rem", md: "4.5rem" },
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1,
              mt: 1,
            }}
          >
            Valve Actuator Sizing Explained
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, opacity: 0.85, fontStyle: "italic" }}>
            Torque, safety factors and why actuators fail to seat.
          </Typography>
          <Stack direction="row" spacing={3} sx={{ mt: 4, opacity: 0.8 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PersonOutlineIcon fontSize="small" />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: "uppercase" }}>
                Valvenok Team
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <AccessTimeIcon fontSize="small" />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: "uppercase" }}>
                October 2026
              </Typography>
            </Stack>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: "uppercase" }}>
              11 min read
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: -5 }}>
        {/* ── KEY TAKEAWAYS ── */}
        <Paper
          elevation={10}
          sx={{ p: 4, borderRadius: 0, borderLeft: "8px solid", borderColor: "primary.main", mb: 8 }}
        >
          <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 900, mb: 3, textTransform: "uppercase" }}>
            Key Takeaways
          </Typography>
          <Grid container spacing={2}>
            {KEY_TAKEAWAYS.map((text) => (
              <Grid key={text} size={{ xs: 12, sm: 6 }}>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <CheckCircleOutlineIcon sx={{ color: "primary.main", fontSize: 20, mt: 0.3 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {text}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* ── ARTICLE BODY ── */}
        <Box sx={{ "& p": { mb: 3, lineHeight: 1.8, color: "#000000", fontSize: "1.1rem" } }}>
          <Typography>
            Most actuator problems are sizing problems. An actuator that has enough torque to open a valve but not to
            close it, or that has plenty of torque on paper but not at the air pressure the valve really sees, will
            stick, leak or fail to seat. Getting the sizing right means knowing what torque the valve demands, what
            torque the actuator really delivers at each point in the stroke, and how much margin sits between them.
          </Typography>
          <Typography>
            This guide explains the three torques a valve demands, how actuator torque is produced and how it varies
            through the stroke, a step-by-step sizing procedure with a worked illustration, how spring-return actuators
            differ, and why published safety factors vary so much. It ends with fault-finding for an actuator that
            won&apos;t seat a valve. It focuses on pneumatic quarter-turn actuators, with notes on electric.
          </Typography>

          <H2>What is valve actuator sizing?</H2>
          <Typography>{FAQS[0].a}</Typography>
          <Typography>
            Sizing means matching the actuator&apos;s output to the valve&apos;s demand at every point in the stroke,
            with margin to spare. The mismatch can go either way. An undersized actuator sticks, leaks or fails to
            seat. An oversized one wastes air and money, and the extra torque can damage the stem or the valve&apos;s
            internals.
          </Typography>

          <H2>What torque does a valve need?</H2>
          <Table {...VALVE_TORQUES} />
          <Typography>
            Different valve types have different torque signatures, so the numbers must come from the valve
            manufacturer, for your conditions. Torque rises with:
          </Typography>
          <Bullets items={TORQUE_RISES} />
          <Typography>
            Manufacturers often publish torque for a given pressure in clean water service. Treat that as a starting
            point, and ask for your service conditions.
          </Typography>

          <H2>How is actuator torque produced?</H2>
          <Typography>
            A pneumatic actuator turns air pressure into rotation. The piston force is pressure multiplied by piston
            area, and torque is that force multiplied by the distance over which it acts about the shaft. In simple
            terms, torque scales with supply pressure and piston area, and the geometry decides how the distance
            changes through the stroke.
          </Typography>
          <Typography>That geometry gives two common torque patterns:</Typography>
          <Table {...PATTERNS} />
          <Figure
            file="valve-actuator-torque-curves.png"
            alt="Torque curves: rack and pinion is flat across the 90° stroke; scotch yoke is high at both ends and lowest mid-stroke, above the valve’s torque demand."
          />

          <H2>How do you size a pneumatic actuator?</H2>
          <Typography>
            Work through the steps below. Always use the manufacturers&apos; own torque tables and recommendations,
            because torque curves, safety factors and limits differ between products.
          </Typography>
          <Table {...STEPS} />
          <Figure
            file="compressor-vs-valve-air-pressure.png"
            alt="Air pressure falls from 7.0 bar at the compressor to 5.5 bar at the actuator after the filter, pipe run and fittings."
            caption="Step 3: pressure at the compressor compared with pressure at the valve. Illustrative values."
          />

          <H2>A worked illustration</H2>
          <Typography>
            The numbers below are invented to show the method. Never size from them. Use your manufacturers&apos;
            data.
          </Typography>
          <Table {...WORKED} />
          <Figure
            file="actuator-sizing-worked-example.png"
            alt="Worked sizing example: 100 Nm breakaway torque × 1.25 safety factor gives 125 Nm required at 5.5 bar; maximum output at 6.5 bar must stay below the 300 Nm MAST."
            caption="Illustrative numbers. Never size from them."
          />
          <Typography>
            The chosen actuator must deliver at least 125 Nm at 5.5 bar at the stroke position where the valve needs
            it, and no more than the MAST at 6.5 bar. The same check is then made for the running and seating
            torques, each at its own position in the stroke.
          </Typography>

          <H2>How does sizing a spring-return actuator differ?</H2>
          <Typography>
            A spring-return, or single-acting, actuator uses air to move the valve one way and springs to move it
            back, so it can drive the valve to a fail-open or fail-closed position when air is lost. That adds a
            second torque check, because the springs oppose the air on one stroke and provide the force on the other.
          </Typography>
          <Figure
            file="spring-return-actuator-torque.png"
            alt="Spring-return actuator torque: air stroke torque falls as the springs compress; spring stroke torque is weakest at the end of the spring stroke."
          />
          <Table {...SPRING_TERMS} />
          <Typography>
            For a valve that must close by spring on loss of air, the check that matters is the spring torque with
            the springs fully extended, because that is what is available to seat the valve with no air. The
            valve&apos;s torque must be lower than each corresponding actuator torque, and the actuator&apos;s highest
            torque must stay below the MAST.
          </Typography>

          <H2>Why do safety factors vary so much?</H2>
          <Typography>
            Published sizing guidance doesn&apos;t agree on one safety factor. One manufacturer&apos;s guide suggests
            at least 15% for double-acting and 10% for spring-return actuators. Another uses 20%. A worked example
            from a third uses 1.2 for double-acting and 1.5 for spring-return. Another recommends at least 30%.
            Differences like these come from the actuator type, how well the valve&apos;s torque is known, and the
            service.
          </Typography>
          <Typography>
            The practical rule is simple. Use the factor that the valve and actuator manufacturers recommend for your
            pairing and service, apply it to the valve&apos;s published torque, and record which factor you used.
          </Typography>

          <H2>What about electric actuators and fail action?</H2>
          <Table {...FAIL_ACTION} />
          <Typography>
            Fail action is a process safety decision, so settle it with the process requirements first, then size
            for it. On modulating duty, add a positioner. On safety valves, partial-stroke testing can confirm an
            actuator isn&apos;t stuck without taking the valve out of service.
          </Typography>

          <H2>When should you re-check the sizing?</H2>
          <Bullets items={RECHECK} />

          <H2>Why won&apos;t my actuator seat the valve?</H2>
          <Typography>
            Actuator failures rarely come without warning. Slow stroke times, air leakage, positioner drift and
            rising breakaway torque as seats wear are the usual early signs.
          </Typography>
          <Figure
            file="actuator-wont-seat-fault-finding.png"
            alt="Fault-finding flow chart for an actuator that won’t seat a valve: check air pressure, leaks, positioner, end-of-stroke torque, then seat wear."
          />
          <Table {...FAULTS} />

          <H2>What mistakes should you avoid when sizing?</H2>
          <Table {...MISTAKES} />

          <Divider sx={{ my: 6 }} />

          {/* ── FAQ ── */}
          <H2>Frequently Asked Questions</H2>
          <Stack spacing={4} sx={{ mb: 6, mt: 2 }}>
            {FAQS.map((item) => (
              <Box key={item.q}>
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: DISPLAY_FONT,
                    fontWeight: 800,
                    fontSize: "1rem !important",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    mb: "6px !important",
                  }}
                >
                  {item.q}
                </Typography>
                <Typography sx={{ color: "text.secondary !important", lineHeight: 1.8 }}>{item.a}</Typography>
              </Box>
            ))}
          </Stack>

          {/* ── RELATED GUIDES ── */}
          <Box sx={{ mt: 8 }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 800,
                fontSize: "1rem !important",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "text.secondary !important",
                mb: "16px !important",
              }}
            >
              Related Guides
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1.5}>
              {RELATED.map((r) => (
                <Box
                  key={r.href}
                  component="a"
                  href={r.href}
                  sx={{
                    fontFamily: DISPLAY_FONT,
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.03em",
                    textDecoration: "none",
                    color: "primary.dark",
                    border: "1.5px solid",
                    borderColor: "primary.light",
                    px: 2,
                    py: 1,
                    transition: "0.2s",
                    "&:hover": { borderColor: "primary.main", bgcolor: "primary.50" },
                  }}
                >
                  {r.label} →
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
