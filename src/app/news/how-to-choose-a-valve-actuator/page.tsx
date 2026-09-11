"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const DISPLAY_FONT = '"Barlow Condensed"';

const KEY_TAKEAWAYS = [
  "Pneumatic is the default for on/off quarter-turn duty: fast, cheap, inherently fail-safe with a spring, and safe in hazardous areas without electrical certification.",
  "Electric wins where there is no compressed air, where modulating control is needed, or where positioning accuracy matters more than speed.",
  "Hydraulic and electro-hydraulic deliver the highest torque density — the smallest actuator for a given torque — for tight space or extreme torque.",
  "Manual gearboxes are the option buyers forget. Operated twice a year, a worm gearbox does the job for a fraction of the cost and needs no power.",
  "Size on break-out torque, not running torque, and apply a safety factor. Undersizing is the most common specification error.",
  "Decide fail position before anything else — fail closed, fail open or fail in place changes which technologies are even candidates.",
  "In a zoned area, certification narrows the field before performance does.",
];

const COMPARISON = {
  cols: ["Pneumatic", "Electric", "Hydraulic", "Manual gear"],
  rows: [
    ["Torque available", "4.7–120,867 Nm", "8–9,000 Nm rotary", "46–10,000 Nm", "60–32,000 Nm"],
    ["Power source", "Compressed air, 3–8 bar (4–6 recommended)", "110/220VAC, 380/440VAC, 24VDC", "Hydraulic, 8 or 180 bar", "None"],
    ["Speed", "Fast — typically seconds", "Slower", "Fast, high force", "Operator dependent"],
    ["Modulating control", "Possible with positioner", "Native, precise", "Possible", "No"],
    ["Fail-safe on power loss", "Spring return, inherent", "Needs battery or capacitor pack", "Spring return with accumulator", "Stays put"],
    ["Hazardous area", "Simple — no electrics to certify", "Needs Ex rating", "Ex rated available", "No issue"],
    ["Torque density", "Moderate", "Lower", "Highest", "High but manual"],
    ["Relative cost", "Low", "Moderate", "High", "Lowest"],
    ["Best for", "On/off quarter-turn, plant with air", "No air available, modulating duty", "Extreme torque, tight space", "Infrequent operation"],
  ],
};

const FAILSAFE = [
  ["Fail closed", "Spring return actuator, spring drives to closed", "Fuel and feed lines, anything where isolation is the safe state"],
  ["Fail open", "Spring return actuator, spring drives to open", "Cooling water, vent and relief paths"],
  ["Fail in place", "Double acting, or self-locking electric gearing", "Where either extreme causes a problem, or the valve is throttling"],
  ["Fail to last position, then act", "Electric with battery backup, or accumulator-backed hydraulic", "Where a controlled shutdown is needed rather than an instant one"],
];

const DECISION = [
  "How often does the valve operate? Rarely — specify a manual gearbox and stop here. Regularly or automatically — continue.",
  "What must happen on power loss? Fail closed or fail open points to spring return pneumatic, or electro-hydraulic with accumulator. Fail in place allows double acting or self-locking electric.",
  "Is the valve in a hazardous area? If so, certification comes before performance. Pneumatic has the simplest path; electric needs an Ex rating; electro-hydraulic is available Zone 1 and 2 certified.",
  "What is the break-out torque, plus safety factor, at worst-case supply? That number sets the size and may itself eliminate a technology.",
  "Is there compressed air available? If yes and the duty is on/off quarter-turn, pneumatic is usually the answer. If no, electric — unless torque or space pushes you to electro-hydraulic.",
  "On/off or modulating? Modulating favours electric, or pneumatic with a positioner.",
  "Does stroke time matter? Pneumatic and hydraulic are fast; electric is slower.",
  "Any SIL requirement? Check the actuator carries the rating the loop needs — SIL 3 on the HD pneumatic range, SIL 2/3 on electro-hydraulic.",
  "Finally, confirm mounting. ISO 5211 for quarter-turn, ISO 5210 for multi-turn, NAMUR for accessories — and check the flange code, not just the standard.",
];

const FAQS = [
  {
    q: "What is the difference between an electric and a pneumatic actuator?",
    a: "A pneumatic actuator uses compressed air, typically at 3.5 to 10 bar; an electric actuator uses a motor and gear train. Pneumatic is faster, cheaper, and inherently fail-safe when specified with a spring return, and it avoids electrical certification in hazardous areas. Electric needs no air infrastructure, positions more precisely, and suits modulating duty — but on power loss it stops where it is unless battery backup is fitted. For on/off quarter-turn duty in a plant with instrument air, pneumatic is usually the answer; without air, or for modulating control, electric is.",
  },
  {
    q: "How do I size a valve actuator?",
    a: "Size on the valve's break-out torque rather than its running torque, because break-out is the highest demand and it increases the longer a valve has sat closed. Apply a safety factor over that figure — commonly 25% to 50%, higher for dirty, corrosive or infrequently operated service. Size against the lowest supply pressure or voltage the actuator will actually see, not the nominal figure, and on a spring return actuator check the spring stroke as well as the air stroke, since the spring stroke is the weaker of the two and the one that must work in a failure.",
  },
  {
    q: "Which actuator type gives the highest torque?",
    a: "Hydraulic and electro-hydraulic give the highest torque density — the most torque for a given physical size — which is why they suit extreme duty in confined space. Our electro-hydraulic range covers 46 to 10,000 Nm. For absolute torque, large scotch yoke pneumatic actuators reach further: the Susin HD range extends to 120,867 Nm. Manual worm gearboxes reach 32,000 Nm, though operated by hand rather than automatically.",
  },
  {
    q: "What air quality does a pneumatic actuator need?",
    a: "Cleaner and drier than most people assume. The Kosaplus range specifies particulates no larger than 40 microns, equivalent to ISO 8573-1 Class 5, with dehumidified air recommended. Operating pressure is 3 to 8 bar with 4 to 6 bar recommended and a 10 bar design pressure. Air quality rather than air pressure is the usual cause of premature failure — moisture and particulates destroy seals — so filtration and drying deserve as much attention as the actuator specification itself.",
  },
  {
    q: "What does fail-safe mean on an actuator?",
    a: "It describes what the valve does when its power or air supply is lost. Fail closed and fail open are achieved with a spring return actuator, where the spring drives the valve to its safe position with no supply present. Fail in place is achieved with a double acting actuator or self-locking electric gearing. Electro-hydraulic units achieve fail-safe using a spring with a hydraulic accumulator. The fail position is a process safety decision and should be settled before the actuator technology is chosen.",
  },
  {
    q: "Do I need an ATEX certified actuator?",
    a: "Only if the valve is installed in a potentially explosive atmosphere, in which case the equipment must be certified for the zone. Pneumatic actuators have the simplest path because there are no electrical components to certify. Where certification is needed, our Susin HD pneumatic range carries ATEX, the PANDA and PA electro-hydraulic series are approved for Zone 1 and 2 with SIL 2 and SIL 3, and the ITM electric multi-turn series is available with an Ex d IIC T4 rating.",
  },
  {
    q: "What is ISO 5211 and why does it matter?",
    a: "ISO 5211 is the standard defining the mounting flange and drive interface between a quarter-turn valve and its actuator. When both the valve and the actuator quote the same ISO 5211 flange code, they bolt together directly without a bespoke bracket. ISO 5210 does the same for multi-turn valves such as gate and globe. Check the flange code and drive size rather than just the standard — two actuators can both be ISO 5211 and still not fit the same valve.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ── small render helpers, matching the existing /news article grammar ──
function H2({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="h1"
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

function H3({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      component="h3"
      sx={{
        fontFamily: DISPLAY_FONT,
        fontWeight: 800,
        fontSize: "1.15rem",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        color: "text.primary",
        mt: 4,
        mb: 1.5,
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

export default function ActuatorGuidePage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 10 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
            How to Choose a Valve Actuator
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, opacity: 0.85, fontStyle: "italic" }}>
            Electric, pneumatic, hydraulic or manual — sizing against torque
            properly, what happens on power failure, and a decision framework you
            can work down in order.
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
                September 2026
              </Typography>
            </Stack>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: "uppercase" }}>
              12 min read
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
          <Typography
            variant="h4"
            sx={{ fontFamily: DISPLAY_FONT, fontWeight: 900, mb: 3, textTransform: "uppercase" }}
          >
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
          {/* INTRO */}
          <Typography>
            Most actuator specifications go wrong in one of two ways. Either the
            actuator is undersized, because the torque figure used was the
            valve&apos;s running torque rather than its break-out torque, and it
            stalls the first time the valve has sat closed for a month. Or the
            power source is chosen by habit rather than by duty — pneumatic
            because there is an air line nearby, electric because there is a
            socket — and the result is an actuator that works but costs more to
            run than it should, or fails in the wrong position when the supply
            drops.
          </Typography>
          <Typography>
            This guide covers the four options, how to size against torque
            properly, what happens on power failure, and what hazardous area
            classification does to the shortlist. It ends with a decision
            framework you can work down in order.
          </Typography>

          {/* HERO IMAGE */}
          <Box sx={{ my: 6, textAlign: "center" }}>
            <Box
              component="img"
              src="https://pblol2.blob.core.windows.net/panam-images/products/actuators/ac-hero.jpg"
              alt="Valve actuators — electric, pneumatic and hydraulic"
              sx={{ width: "100%", maxWidth: 700, border: "1px solid", borderColor: "divider" }}
            />
          </Box>

          {/* ── COMPARISON TABLE ── */}
          <H2>The Short Version</H2>
          <Typography>
            Electric, pneumatic, hydraulic and manual, side by side. The rest of
            the guide explains the reasoning behind each row.
          </Typography>
          <Box sx={{ overflowX: "auto", my: 4, border: "1px solid", borderColor: "divider" }}>
            <Box sx={{ minWidth: 720 }}>
              {/* header */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr repeat(4, 1fr)",
                  bgcolor: "primary.main",
                }}
              >
                {["", ...COMPARISON.cols].map((c, i) => (
                  <Typography
                    key={i}
                    sx={{
                      fontFamily: DISPLAY_FONT,
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "white",
                      px: 2,
                      py: 1.5,
                    }}
                  >
                    {c}
                  </Typography>
                ))}
              </Box>
              {/* rows */}
              {COMPARISON.rows.map((row, ri) => (
                <Box
                  key={row[0]}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr repeat(4, 1fr)",
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
                        fontSize: "0.85rem",
                        lineHeight: 1.5,
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

          {/* ── PNEUMATIC ── */}
          <H2>Pneumatic Actuators</H2>
          <Typography>
            A pneumatic actuator converts air pressure into movement, either by
            rack and pinion or by scotch yoke. Rack and pinion gives constant
            torque through the stroke and suits smaller quarter-turn valves.
            Scotch yoke gives its highest torque at the start and end of travel —
            exactly where a valve needs it, because break-out and seating are the
            hardest parts of the cycle — which is why heavy-duty valves are almost
            always scotch yoke.
          </Typography>
          <Typography>
            The Kosaplus range covers both. The R series is rack and pinion, from
            the compact R32 delivering 4.7 Nm at 6 bar up to the R210 at 1,263 Nm,
            across thirteen sizes. The A series is scotch yoke, from the A50 at 53
            Nm up to the A300 delivering 11,422 Nm at 6 bar. Both are hard
            anodised aluminium with powder coated end caps, built to DIN 3337,
            NAMUR and ISO 5211, and both are available double acting or spring
            return.
          </Typography>

          <H3>What we supply</H3>
          <Typography>
            The Susin HD range in symmetric (IS) and canted (IC) configurations
            spans 132 to 120,867 Nm on 3.5–10 bar air, rated ISO 5211 with ATEX
            and SIL 3, working from −20°C to +85°C. The PDS rotary scotch yoke
            range runs on 3.5–8 bar in double acting (PD) and single acting spring
            return (PS) versions, mounting to ISO 5211, NAMUR and VDI-VDE 3845.
            Panam&apos;s Kosaplus scotch yoke actuators cover high-torque
            quarter-turn duty in both double acting and spring return. For linear
            duty, the PLDS double-acting cylinders run on 3–7 bar to ISO 3322,
            4393 and 5597 with multiple corrosion grades, and the compact MPLDS
            range works at 2.1–6.2 bar (30–90 psig) with IP66 protection where
            space is tight.
          </Typography>

          <H3>Getting the air supply right</H3>
          <Typography>
            Pneumatic actuators are specified on air pressure, but they fail on
            air quality. The Kosaplus range operates on 3 to 8 bar with 4 to 6 bar
            recommended and a 10 bar design pressure — but the more important
            figure is the air itself: particulates should not exceed 40 microns,
            equivalent to ISO 8573-1 Class 5, and the supply should be
            dehumidified. Moisture carried into the cylinder is what destroys
            seals, and it is the single most common cause of premature pneumatic
            actuator failure. Where the line is long or the ambient is cold, a
            dehumidifier close to the actuator is worth fitting: condensate
            forming in the supply line will reach the actuator whatever the
            compressor room does.
          </Typography>

          <H3>When pneumatic is right</H3>
          <Bullets
            items={[
              "The plant already has instrument air. Running a new air line for one valve rarely pays; using an existing one almost always does.",
              "The duty is on/off quarter-turn. This is what pneumatic actuators are built for.",
              "Fast stroke matters. Pneumatic is the quickest of the powered options.",
              "The valve is in a zoned area and you would rather avoid certifying electrics at all.",
              "You need genuine fail-safe. A spring return needs nothing but the loss of air to drive the valve to its safe position.",
            ]}
          />
          <H3>Where it struggles</H3>
          <Typography>
            Air quality is the usual culprit behind pneumatic failures — moisture
            and particulates wreck seals, so filtration and drying matter more
            than the actuator specification. Compressed air is also an expensive
            utility once you account for generation losses, so a large actuator
            cycling constantly is not cheap to run. And precise modulating control
            needs a positioner, which adds cost and a component to maintain.
          </Typography>

          {/* PULL QUOTE */}
          <Box
            sx={{
              borderLeft: "4px solid",
              borderColor: "primary.main",
              bgcolor: "primary.50",
              px: 3,
              py: 2.5,
              my: 5,
            }}
          >
            <Typography sx={{ color: "text.primary", lineHeight: 1.8, fontSize: "1.1rem", fontStyle: "italic", fontWeight: 500 }}>
              &quot;Size on break-out torque. An actuator sized on running torque
              will operate perfectly on the test bench and stall on a valve that
              has been shut for six months.&quot;
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontFamily: DISPLAY_FONT, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "text.secondary", mt: 1, display: "block" }}
            >
              — Valvenok Team
            </Typography>
          </Box>

          {/* ── ELECTRIC ── */}
          <H2>Electric Actuators</H2>
          <Typography>
            An electric actuator uses a motor and gear train to drive the valve.
            Compared with pneumatic it is slower and generally more expensive up
            front, but it needs no air infrastructure, it holds position
            precisely, and it is straightforward to integrate with a control
            system for modulating duty.
          </Typography>
          <H3>What we supply</H3>
          <Typography>
            The Susin ITQ rotary series covers 100 to 9,000 Nm with a
            hard-anodised aluminium housing, IP67 and NEMA 4X/6 protection and a
            double worm self-locking gear, available on 110/220VAC, 380/440VAC or
            24VDC and mounting to ISO 5211. The self-locking gear matters: it
            holds position without drawing power, and the valve cannot be
            back-driven by line pressure. For linear duty the IQL series delivers
            4–25 kN with IP67 and optional IP68, and the ITL series 1–10 kN on a
            universal power supply at IP66/67 with a 100% duty cycle rating — the
            specification to look for if the valve modulates continuously rather
            than stroking occasionally. The ITM multi-turn series carries IP68
            with an optional Ex d IIC T4 rating for hazardous areas. The Danfoss
            PVE series provides electrohydraulic control on 12V or 24V.
          </Typography>
          <Typography>
            Kosaplus covers the smaller end of electric quarter-turn duty across
            four families: the KE series from 8 to 2,000 Nm in spur gear and
            scotch yoke versions, the KP series explosion proof from 25 to 500 Nm,
            the KS series for quick operation where a one-second stroke at 10 Nm or
            three seconds at 25 Nm is needed, and the KR safe-return series from 20
            to 60 Nm where an electric actuator has to reach a defined position on
            power loss. That last family is worth knowing about, because it answers
            the usual objection to electric actuators without bolting a battery
            pack onto a standard unit.
          </Typography>
          <H3>When electric is right</H3>
          <Bullets
            items={[
              "There is no compressed air, and installing it for one valve is not justified.",
              "The duty is modulating. Electric positions natively and accurately without a separate positioner.",
              "The valve is multi-turn — a gate or globe valve — where the ITM series is designed for the job.",
              "The actuator runs continuously — check the duty cycle rating. The ITL series is rated 100%; an actuator rated 30% will overheat on continuous modulating service.",
              "You want position feedback and diagnostics back to the control system.",
            ]}
          />
          <H3>Where it struggles</H3>
          <Typography>
            Fail-safe is the weak point. On loss of power an electric actuator
            stops where it is unless a battery or capacitor backup is fitted, which
            adds cost and a component that ages. If the process demands the valve
            reach a safe position on power loss, spring-return pneumatic or
            accumulator-backed hydraulic is the more honest answer. Electric is
            also slower, and in a hazardous area the Ex rating adds cost that a
            pneumatic actuator simply avoids.
          </Typography>

          {/* ── HYDRAULIC ── */}
          <H2>Hydraulic and Electro-Hydraulic Actuators</H2>
          <Typography>
            Hydraulic actuators use fluid under pressure rather than air. Because
            hydraulic fluid is effectively incompressible and runs at far higher
            pressures, they deliver much more torque from a given physical size —
            torque density is the reason to choose them. Electro-hydraulic units
            package a pump, reservoir and controls with the actuator, so they need
            only an electrical supply. You get hydraulic force without plant-wide
            hydraulic infrastructure, which is what makes them practical on
            isolated valves.
          </Typography>
          <H3>What we supply</H3>
          <Typography>
            The Susin PANDA and PA electro-hydraulic rotary series covers 46 to
            10,000 Nm. PANDA operates at low pressure (8 bar), PA at high pressure
            (180 bar). Both mount to ISO 5211 and NAMUR, carry ATEX Zone 1 and 2
            approval, SIL 2 and SIL 3 rating, and IP67/IP68 ingress protection.
            Fail-safe options include spring return and hydraulic accumulator, so
            the safe position can be reached even when the electrical supply is
            lost — confirm which arrangement applies to the specific series and
            configuration at enquiry.
          </Typography>
          <H3>When hydraulic is right</H3>
          <Bullets
            items={[
              "The torque required is beyond what a reasonably sized pneumatic or electric actuator will deliver.",
              "Space is constrained. This is the highest torque density of the four.",
              "The application is safety-critical and needs SIL 2 or SIL 3 with a genuine fail-safe action.",
              "The valve is in a Zone 1 or Zone 2 area needing high torque and full certification.",
              "Subsea or extreme-duty service, where hydraulic is often the only practical option.",
            ]}
          />
          <H3>Where it struggles</H3>
          <Typography>
            Cost, first and foremost — this is the most expensive of the four.
            Hydraulic systems also need maintaining: fluid condition, seal
            integrity and leak management are ongoing tasks, and a leak is both a
            housekeeping and an environmental problem in a way an air leak is not.
            For straightforward on/off duty within pneumatic&apos;s torque range,
            hydraulic is usually over-specified.
          </Typography>

          {/* ── MANUAL ── */}
          <H2>Manual Gearboxes: The Option Worth Checking First</H2>
          <Typography>
            Before specifying anything powered, it is worth asking how often the
            valve actually moves. A large valve operated twice a year does not need
            an actuator, a power supply, a control signal and a maintenance regime.
            It needs a gearbox and a handwheel. A gear operator multiplies operator
            effort so a large valve can be turned by hand, and self-locking worm
            gearing holds the valve wherever it is left. Cost is a fraction of a
            powered actuator, there is nothing to fail on power loss, and there is
            no certification question in a hazardous area.
          </Typography>
          <H3>What we supply</H3>
          <Typography>
            The Susin MAW quarter-turn worm gear series covers 100 to 32,000 Nm —
            self-locking, ISO 5211 direct mount, with ±5° fine stroke adjustment
            and IP54 through IP67M, working from −20°C to +85°C. It is designed for
            ball, butterfly and plug valves and is MOV compatible, so it can be
            motorised later if the duty changes. The MAB multi-turn bevel gear
            series covers 250 to 18,000 Nm with thrust to 2,500 kN, in a ductile
            iron housing to ISO 5210 with IP55 through IP68 and marine coating
            options, for gate and globe valves. The ITG quarter-turn industrial
            gear series spans 60 to 28,000 Nm to ISO 5211/5210 with a declutchable
            manual override.
          </Typography>

          {/* ── SIZING ── */}
          <H2>Sizing an Actuator: Torque and Safety Factor</H2>
          <Typography>
            This is where most specifications go wrong, and it is worth getting
            right before comparing technologies at all.
          </Typography>
          <H3>Break-out torque, not running torque</H3>
          <Typography>
            A valve does not need the same torque throughout its travel. On a
            quarter-turn valve the demand typically peaks in four places: break-out
            (unseating from closed), running (mid-travel), ending (approaching the
            seat) and seating (final closure). Break-out is usually the highest,
            and it rises the longer a valve has been left closed, as the seat takes
            a set against the ball or disc. Size on break-out torque. An actuator
            sized on running torque will operate perfectly on the test bench and
            stall on a valve that has been shut for six months.
          </Typography>
          <H3>Apply a safety factor</H3>
          <Typography>
            Valve torque figures come from the valve manufacturer under ideal
            conditions. Real service brings process deposits, corrosion,
            temperature effects and ageing seats. A safety factor over the
            calculated break-out torque covers that — a common range is 25% to 50%,
            with the higher end for dirty, corrosive or infrequently operated
            service. Kosaplus&apos;s own selection tool offers 30% (a multiplier of
            1.3) as a standard option, which sits squarely in that band. Your valve
            manufacturer&apos;s guidance takes precedence where it differs.
          </Typography>
          <H3>Size on the worst-case supply</H3>
          <Typography>
            A pneumatic actuator&apos;s output torque is proportional to the air
            pressure applied. Sizing on 7 bar and running the plant at 5.5 bar
            leaves you short by more than a fifth. Size on the lowest supply
            pressure the actuator will actually see, not the nominal figure. The
            same applies to voltage on an electric actuator.
          </Typography>
          <H3>For spring return, check both directions</H3>
          <Typography>
            A spring return actuator has two torque profiles: air stroke, where air
            compresses the spring, and spring stroke, where the spring alone drives
            the valve. The spring stroke is the weaker of the two and it is the one
            that has to work when everything else has failed. Check it against
            break-out torque, not just the air stroke figure. The gap is larger
            than people expect, and it varies with the spring specified and the
            position in the stroke. Manufacturer torque tables give the spring
            stroke separately from the air stroke for exactly this reason — take
            the figure from the spring column, at the weakest point in the travel,
            and size against that.
          </Typography>
          <H3>What to send us</H3>
          <Typography>
            If you would rather we sized it, we need: valve type and size, break-out
            torque from the valve manufacturer, available supply pressure or
            voltage, required fail position, stroke time if it matters, ambient
            temperature, and the hazardous area classification if there is one.
          </Typography>

          {/* ── FAIL-SAFE ── */}
          <H2>Fail-Safe: Decide This First</H2>
          <Typography>
            What the valve should do when power, air or signal is lost is a process
            safety decision, not an actuator one — and it should be settled before
            the technology is chosen, because it rules options in and out.
          </Typography>
          <Box sx={{ overflowX: "auto", my: 4, border: "1px solid", borderColor: "divider" }}>
            <Box sx={{ minWidth: 640 }}>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1.4fr 1.4fr", bgcolor: "primary.main" }}>
                {["Requirement", "How it is achieved", "Suits"].map((h) => (
                  <Typography
                    key={h}
                    sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "white", px: 2, py: 1.5 }}
                  >
                    {h}
                  </Typography>
                ))}
              </Box>
              {FAILSAFE.map((row, ri) => (
                <Box
                  key={row[0]}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1.4fr 1.4fr",
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
                        fontSize: "0.85rem",
                        lineHeight: 1.5,
                        fontWeight: ci === 0 ? 800 : 500,
                        fontFamily: ci === 0 ? DISPLAY_FONT : undefined,
                        textTransform: ci === 0 ? "uppercase" : "none",
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
          <Typography>
            Pneumatic spring return is the simplest and most reliable route to a
            genuine fail-safe action: nothing has to work for it to function, only
            the air has to go away. Electro-hydraulic achieves the same with a
            spring and accumulator. Electric actuators need added components and
            those components need testing, so if fail-safe is a real requirement
            rather than a preference, that is a point in favour of the other two.
          </Typography>

          {/* ── HAZARDOUS AREAS ── */}
          <H2>Hazardous Areas, SIL and Ingress Protection</H2>
          <Typography>
            In a zoned area, certification narrows the shortlist before performance
            does — so check it early.
          </Typography>
          <H3>ATEX and IECEx</H3>
          <Typography>
            Equipment for potentially explosive atmospheres must be certified for
            the zone it sits in. ATEX is the European regime; IECEx is the
            international equivalent, often preferred on export projects. Our Susin
            HD pneumatic range carries ATEX, and the PANDA and PA electro-hydraulic
            series are approved for Zone 1 and Zone 2. Where an electric actuator
            is required in a zoned area, the ITM multi-turn series is available with
            an Ex d IIC T4 rating. A pneumatic actuator with no electrical
            components has a simpler path here, which is a practical reason it
            remains the default in oil and gas.
          </Typography>
          <H3>SIL</H3>
          <Typography>
            Where a safety instrumented function is assessed at SIL 2 or SIL 3
            under IEC 61508, every element in the loop must be justified against the
            target — the actuator included. Our Susin HD pneumatic range carries
            SIL 3, and the PANDA and PA electro-hydraulic series carry SIL 2 and
            SIL 3.
          </Typography>
          <H3>Ingress protection</H3>
          <Typography>
            IP ratings across the range run from IP54 on indoor gear operators to
            IP68 on submersible-rated units. Outdoor installations should be IP66 or
            better; anything that may be submerged or washed down at pressure needs
            IP67 or IP68. The ITQ electric series is IP67 with NEMA 4X and 6; the
            ITM is IP68; the electro-hydraulic range is IP67/IP68.
          </Typography>
          <H3>Mounting: ISO 5211, ISO 5210 and NAMUR</H3>
          <Typography>
            Mounting is the detail that turns a correct actuator into one that will
            not fit.
          </Typography>
          <Bullets
            items={[
              "ISO 5211 defines the flange and drive interface between a quarter-turn valve and its actuator. Both sides quoting the same ISO 5211 flange code means they bolt together without a bespoke bracket. Most of our quarter-turn range is ISO 5211.",
              "ISO 5210 does the same job for multi-turn valves — gate and globe. The MAB bevel gear series and the ITG series mount to ISO 5210.",
              "NAMUR defines the interface for mounting accessories — solenoid valves, positioners, limit switch boxes — onto the actuator. The Susin PDS and the electro-hydraulic range are NAMUR compliant, and the Kosaplus range is built to NAMUR and DIN 3337.",
              "Position feedback mounts on top. The Kosaplus KLS range gives visual indication plus switched output — KLS10 and KLS20 bodies, weatherproof to IP67/IP68 or explosion proof to Ex d IIC T6, with either two SPDT microswitches or PNP/NPN proximity sensors on 12–24V DC.",
            ]}
          />
          <Typography>
            Check the flange code and the drive size, not just the standard. Two
            actuators can both be ISO 5211 and still not fit the same valve. Across
            the Kosaplus range the codes run from F03 on the smallest R32 and A50
            bodies through F05, F07, F10, F12 and F14 to F16 and F25 on the A300 —
            with several sizes offering more than one flange as standard or option,
            and stem squares from 9×9 mm up to 55×55 mm. The flange and the stem
            square both have to match.
          </Typography>

          {/* ── DECISION FRAMEWORK ── */}
          <H2>How to Choose: A Decision Framework</H2>
          <Typography sx={{ mb: 4 }}>
            Work down in order. Each step removes options, and by step five there
            is usually one sensible answer.
          </Typography>
          {DECISION.map((step, i) => (
            <Box key={i} sx={{ display: "flex", gap: 3, mb: 3 }}>
              <Typography
                sx={{ fontFamily: DISPLAY_FONT, fontWeight: 900, fontSize: "2rem", color: "primary.main", minWidth: 48, lineHeight: 1 }}
              >
                {String(i + 1).padStart(2, "0")}
              </Typography>
              <Typography sx={{ color: "text.primary", lineHeight: 1.75, fontSize: "1.05rem", alignSelf: "center" }}>
                {step}
              </Typography>
            </Box>
          ))}

          <Divider sx={{ my: 6 }} />

          {/* ── FAQ ── */}
          <H2>Frequently Asked Questions</H2>
          <Stack spacing={4} sx={{ mb: 6, mt: 2 }}>
            {FAQS.map((item) => (
              <Box key={item.q}>
                <Typography
                  component="h3"
                  sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.05em", mb: 0.75 }}
                >
                  {item.q}
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>{item.a}</Typography>
              </Box>
            ))}
          </Stack>

          <Divider sx={{ my: 6 }} />

          {/* ── CTA ── */}
          <Box sx={{ bgcolor: "primary.main", color: "white", p: 5, mt: 8, textAlign: "center" }}>
            <Typography variant="h4" sx={{ fontFamily: DISPLAY_FONT, fontWeight: 800, mb: 2, color: "white" }}>
              NEED HELP SPECIFYING AN ACTUATOR?
            </Typography>
            <Typography sx={{ color: "white !important", mb: 3, opacity: 0.9 }}>
              Send us the valve type and size, break-out torque, available supply,
              required fail position and any hazardous area classification, and we
              will come back with a sized actuator, mounting details and lead time.
            </Typography>
            <Box
              component="a"
              href="/contact"
              sx={{
                display: "inline-block",
                fontFamily: DISPLAY_FONT,
                fontWeight: 900,
                borderBottom: "2px solid white",
                pb: 1,
                cursor: "pointer",
                color: "white",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Talk to Our Team
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
