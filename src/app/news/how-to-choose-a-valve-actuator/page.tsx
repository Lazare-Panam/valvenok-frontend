"use client";

import {
  ArticleLayout,
  Lead,
  H2,
  H3,
  P,
  UL,
  KeyTakeaways,
  Quote,
  DataTable,
  FAQ,
  CTA,
  RelatedLinks,
  Finder,
  Stepper,
  Checklist,
} from "../components/Article";
import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { T } from "@/src/app/Landing/modern/tokens";

const IMG = "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators";
const PROSE_MAX = 860; // same width as the article text

/** Photo of a range we supply, linked to its page */
function Supplied({ img, name, line, href, alt }: { img: string; name: string; line: string; href: string; alt: string }) {
  return (
    <Box
      component={Link}
      href={href}
      data-plain
      sx={{
        my: 3, maxWidth: PROSE_MAX, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "220px 1fr" }, alignItems: "center", gap: { xs: 1.5, sm: 2.5 },
        p: 1.5, pr: { sm: 2.5 }, borderRadius: "18px", bgcolor: "#fff", border: `1px solid ${T.border}`, textDecoration: "none",
        transition: "border-color .2s, box-shadow .2s, transform .2s",
        "&:hover": { borderColor: "#BFE5B3", boxShadow: "0 12px 28px -14px rgba(14,27,18,0.25)", transform: "translateY(-2px)" },
        "&:hover .go": { color: T.greenDark, gap: 1 },
      }}
    >
      <Box sx={{ aspectRatio: "16 / 10", borderRadius: "12px", bgcolor: "#fff", display: "grid", placeItems: "center", overflow: "hidden" }}>
        <Box component="img" src={img} alt={alt} loading="lazy" sx={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </Box>
      <Box sx={{ px: { xs: 0.5, sm: 0 }, pb: { xs: 0.5, sm: 0 } }}>
        <Box sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.greenDark }}>We supply</Box>
        <Box sx={{ mt: 0.5, fontSize: "1.08rem", fontWeight: 800, color: T.ink, lineHeight: 1.3 }}>{name}</Box>
        <Box sx={{ mt: 0.5, fontSize: "0.9rem", color: T.body, lineHeight: 1.5 }}>{line}</Box>
        <Box className="go" sx={{ mt: 1.25, display: "inline-flex", alignItems: "center", gap: 0.5, fontSize: "0.88rem", fontWeight: 800, color: T.ink, transition: "all .2s" }}>
          See the range <ArrowForwardRoundedIcon sx={{ fontSize: 17 }} />
        </Box>
      </Box>
    </Box>
  );
}

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
    [
      "Torque available",
      "4.7–120,867 Nm",
      "8–9,000 Nm rotary",
      "46–10,000 Nm",
      "60–32,000 Nm",
    ],
    [
      "Power source",
      "Compressed air, 3–8 bar (4–6 recommended)",
      "110/220VAC, 380/440VAC, 24VDC",
      "Hydraulic, 8 or 180 bar",
      "None",
    ],
    [
      "Speed",
      "Fast — typically seconds",
      "Slower",
      "Fast, high force",
      "Operator dependent",
    ],
    [
      "Modulating control",
      "Possible with positioner",
      "Native, precise",
      "Possible",
      "No",
    ],
    [
      "Fail-safe on power loss",
      "Spring return, inherent",
      "Needs battery or capacitor pack",
      "Spring return with accumulator",
      "Stays put",
    ],
    [
      "Hazardous area",
      "Simple — no electrics to certify",
      "Needs Ex rating",
      "Ex rated available",
      "No issue",
    ],
    ["Torque density", "Moderate", "Lower", "Highest", "High but manual"],
    ["Relative cost", "Low", "Moderate", "High", "Lowest"],
    [
      "Best for",
      "On/off quarter-turn, plant with air",
      "No air available, modulating duty",
      "Extreme torque, tight space",
      "Infrequent operation",
    ],
  ],
};

const FAILSAFE = [
  [
    "Fail closed",
    "Spring return actuator, spring drives to closed",
    "Fuel and feed lines, anything where isolation is the safe state",
  ],
  [
    "Fail open",
    "Spring return actuator, spring drives to open",
    "Cooling water, vent and relief paths",
  ],
  [
    "Fail in place",
    "Double acting, or self-locking electric gearing",
    "Where either extreme causes a problem, or the valve is throttling",
  ],
  [
    "Fail to last position, then act",
    "Electric with battery backup, or accumulator-backed hydraulic",
    "Where a controlled shutdown is needed rather than an instant one",
  ],
];

// Each step: the question (shown as the step title) and the guidance that follows it
const DECISION: [string, string][] = [
  [
    "How often does the valve operate?",
    "Rarely — specify a manual gearbox and stop here. Regularly or automatically — continue.",
  ],
  [
    "What must happen on power loss?",
    "Fail closed or fail open points to spring return pneumatic, or electro-hydraulic with accumulator. Fail in place allows double acting or self-locking electric.",
  ],
  [
    "Is the valve in a hazardous area?",
    "If so, certification comes before performance. Pneumatic has the simplest path; electric needs an Ex rating; electro-hydraulic is available Zone 1 and 2 certified.",
  ],
  [
    "What is the break-out torque, plus safety factor, at worst-case supply?",
    "That number sets the size and may itself eliminate a technology.",
  ],
  [
    "Is there compressed air available?",
    "If yes and the duty is on/off quarter-turn, pneumatic is usually the answer. If no, electric — unless torque or space pushes you to electro-hydraulic.",
  ],
  [
    "On/off or modulating?",
    "Modulating favours electric, or pneumatic with a positioner.",
  ],
  [
    "Does stroke time matter?",
    "Pneumatic and hydraulic are fast; electric is slower.",
  ],
  [
    "Any SIL requirement?",
    "Check the actuator carries the rating the loop needs — SIL 3 on the HD pneumatic range, SIL 2/3 on electro-hydraulic.",
  ],
  [
    "Finally, confirm mounting.",
    "ISO 5211 for quarter-turn, ISO 5210 for multi-turn, NAMUR for accessories — and check the flange code, not just the standard.",
  ],
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

const ARTICLE_URL =
  "https://www.valvenok.com/news/how-to-choose-a-valve-actuator";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "How to Choose a Valve Actuator: Electric, Pneumatic, Hydraulic",
      description:
        "Electric, pneumatic or hydraulic? Compare torque, speed, fail-safe behaviour and hazardous area rating, with a sizing walkthrough and decision framework.",
      image:
        "https://pblol2.blob.core.windows.net/valvenok-images/blogs/how-to-choose-a-valve-actuator.jpg",
      author: { "@type": "Organization", name: "Valvenok" },
      publisher: {
        "@type": "Organization",
        name: "Valvenok",
        logo: {
          "@type": "ImageObject",
          url: "https://pblol2.blob.core.windows.net/valvenok-images/logo.png",
        },
      },
      datePublished: "2026-09-11",
      dateModified: "2026-09-11",
      mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

// Contextual internal links — descriptive anchors to real actuator/valve pages
const RELATED = [
  { label: "All valve actuators", href: "/actuators" },
  { label: "Pneumatic actuators", href: "/pneumatic/actuators" },
  { label: "Electric actuators", href: "/actuators/electric" },
  { label: "Hydraulic actuators", href: "/actuators/hydraulic" },
  { label: "Manual gear operators", href: "/actuators/mechanical" },
  { label: "Industrial valves", href: "/valves" },
];

export default function ActuatorGuidePage() {
  return (
    <ArticleLayout
      schema={schema}
      meta={{
        slug: "/news/how-to-choose-a-valve-actuator",
        category: "Technical Guide",
        title: "How to Choose a Valve Actuator",
        dek: "Electric, pneumatic, hydraulic or manual — sizing against torque properly, what happens on power failure, and a decision framework you can work down in order.",
        author: "Valvenok Team",
        date: "September 2026",
        readMinutes: 12,
        cover: "https://pblol2.blob.core.windows.net/valvenok-images/blogs/how-to-choose-a-valve-actuator.jpg",
        coverAlt: "How to choose a valve actuator: pneumatic, electric, hydraulic and manual actuators",
      }}
    >
      <KeyTakeaways title="Key Takeaways" items={KEY_TAKEAWAYS} />

      <Lead>
        Most actuator specifications go wrong in one of two ways. Either the
        actuator is undersized, because the torque figure used was the
        valve&apos;s running torque rather than its break-out torque, and it
        stalls the first time the valve has sat closed for a month. Or the
        power source is chosen by habit rather than by duty — pneumatic
        because there is an air line nearby, electric because there is a
        socket — and the result is an actuator that works but costs more to
        run than it should, or fails in the wrong position when the supply
        drops.
      </Lead>
      <P>
        This guide covers the four options, how to size against torque
        properly, what happens on power failure, and what hazardous area
        classification does to the shortlist. It ends with a decision
        framework you can work down in order.
      </P>

      {/* ── COMPARISON TABLE ── */}
      <H2>The Short Version</H2>
      <P>
        Electric, pneumatic, hydraulic and manual, side by side. The rest of
        the guide explains the reasoning behind each row.
      </P>
      <DataTable head={["", ...COMPARISON.cols]} rows={COMPARISON.rows} minWidth={720} />

      <Finder
        kicker="Quick answer"
        title="What power do you have on site, and what do you need?"
        hint="Pick the situation closest to yours to see where to start."
        options={[
          {
            label: "Compressed air on site, on/off quarter-turn duty",
            result: (
              <>
                <strong>Pneumatic.</strong> If there is compressed air available and the duty is on/off quarter-turn,
                pneumatic is usually the answer: fast, cheap, inherently fail-safe with a spring, and safe in hazardous
                areas without electrical certification.
              </>
            ),
            href: "/pneumatic/actuators",
            linkLabel: "See pneumatic actuators",
          },
          {
            label: "No compressed air, or modulating control",
            result: (
              <>
                <strong>Electric.</strong> Electric wins where there is no compressed air, where modulating control is
                needed, or where positioning accuracy matters more than speed. On loss of power it stops where it is
                unless a battery or capacitor backup is fitted.
              </>
            ),
            href: "/actuators/electric",
            linkLabel: "See electric actuators",
          },
          {
            label: "Extreme torque or tight space",
            result: (
              <>
                <strong>Hydraulic or electro-hydraulic.</strong> They deliver the highest torque density — the smallest
                actuator for a given torque — for tight space or extreme torque. Electro-hydraulic units need only an
                electrical supply.
              </>
            ),
            href: "/actuators/hydraulic",
            linkLabel: "See hydraulic actuators",
          },
          {
            label: "Valve operated rarely",
            result: (
              <>
                <strong>Manual gearbox.</strong> Operated twice a year, a worm gearbox does the job for a fraction of
                the cost and needs no power — nothing to fail on power loss, and no certification question in a
                hazardous area.
              </>
            ),
            href: "/actuators/mechanical",
            linkLabel: "See manual gear operators",
          },
        ]}
      />

      {/* ── PNEUMATIC ── */}
      <H2>Pneumatic Actuators</H2>
      <P>
        A pneumatic actuator converts air pressure into movement, either by
        rack and pinion or by scotch yoke. Rack and pinion gives constant
        torque through the stroke and suits smaller quarter-turn valves.
        Scotch yoke gives its highest torque at the start and end of travel
        — exactly where a valve needs it, because break-out and seating are
        the hardest parts of the cycle — which is why heavy-duty valves are
        almost always scotch yoke.
      </P>
      <P>
        The Kosaplus range covers both. The R series is rack and pinion,
        from the compact R32 delivering 4.7 Nm at 6 bar up to the R210 at
        1,263 Nm, across thirteen sizes. The A series is scotch yoke, from
        the A50 at 53 Nm up to the A300 delivering 11,422 Nm at 6 bar. Both
        are hard anodised aluminium with powder coated end caps, built to
        DIN 3337, NAMUR and ISO 5211, and both are available double acting
        or spring return.
      </P>

      <H3>What we supply</H3>
      <P>
        The Susin HD range in symmetric (IS) and canted (IC) configurations
        spans 132 to 120,867 Nm on 3.5–10 bar air, rated ISO 5211 with ATEX
        and SIL 3, working from −20°C to +85°C. The PDS rotary scotch yoke
        range runs on 3.5–8 bar in double acting (PD) and single acting
        spring return (PS) versions, mounting to ISO 5211, NAMUR and VDI-VDE
        3845. Panam&apos;s Kosaplus scotch yoke actuators cover high-torque
        quarter-turn duty in both double acting and spring return. For
        linear duty, the PLDS double-acting cylinders run on 3–7 bar to ISO
        3322, 4393 and 5597 with multiple corrosion grades, and the compact
        MPLDS range works at 2.1–6.2 bar (30–90 psig) with IP66 protection
        where space is tight.
      </P>
      <Supplied img={`${IMG}/pneumatic/hd.webp`} alt="Susin HD heavy-duty scotch yoke pneumatic actuator with filter regulator and solenoid valve" name="Susin HD heavy-duty pneumatic actuators" line="Scotch yoke, 132 to 120,867 Nm on 3.5–10 bar air, ATEX and SIL 3." href="/pneumatic/actuators/hd" />

      <H3>Getting the air supply right</H3>
      <P>
        Pneumatic actuators are specified on air pressure, but they fail on
        air quality. The Kosaplus range operates on 3 to 8 bar with 4 to 6
        bar recommended and a 10 bar design pressure — but the more
        important figure is the air itself: particulates should not exceed
        40 microns, equivalent to ISO 8573-1 Class 5, and the supply should
        be dehumidified. Moisture carried into the cylinder is what destroys
        seals, and it is the single most common cause of premature pneumatic
        actuator failure. Where the line is long or the ambient is cold, a
        dehumidifier close to the actuator is worth fitting: condensate
        forming in the supply line will reach the actuator whatever the
        compressor room does.
      </P>

      <H3>When pneumatic is right</H3>
      <UL
        items={[
          "The plant already has instrument air. Running a new air line for one valve rarely pays; using an existing one almost always does.",
          "The duty is on/off quarter-turn. This is what pneumatic actuators are built for.",
          "Fast stroke matters. Pneumatic is the quickest of the powered options.",
          "The valve is in a zoned area and you would rather avoid certifying electrics at all.",
          "You need genuine fail-safe. A spring return needs nothing but the loss of air to drive the valve to its safe position.",
        ]}
      />
      <H3>Where it struggles</H3>
      <P>
        Air quality is the usual culprit behind pneumatic failures —
        moisture and particulates wreck seals, so filtration and drying
        matter more than the actuator specification. Compressed air is also
        an expensive utility once you account for generation losses, so a
        large actuator cycling constantly is not cheap to run. And precise
        modulating control needs a positioner, which adds cost and a
        component to maintain.
      </P>

      <Quote cite="Valvenok Team">
        &quot;Size on break-out torque. An actuator sized on running
        torque will operate perfectly on the test bench and stall on a
        valve that has been shut for six months.&quot;
      </Quote>

      {/* ── ELECTRIC ── */}
      <H2>Electric Actuators</H2>
      <P>
        An electric actuator uses a motor and gear train to drive the valve.
        Compared with pneumatic it is slower and generally more expensive up
        front, but it needs no air infrastructure, it holds position
        precisely, and it is straightforward to integrate with a control
        system for modulating duty.
      </P>
      <H3>What we supply</H3>
      <P>
        The Susin ITQ rotary series covers 100 to 9,000 Nm with a
        hard-anodised aluminium housing, IP67 and NEMA 4X/6 protection and a
        double worm self-locking gear, available on 110/220VAC, 380/440VAC
        or 24VDC and mounting to ISO 5211. The self-locking gear matters: it
        holds position without drawing power, and the valve cannot be
        back-driven by line pressure. For linear duty the IQL series
        delivers 4–25 kN with IP67 and optional IP68, and the ITL series
        1–10 kN on a universal power supply at IP66/67 with a 100% duty
        cycle rating — the specification to look for if the valve modulates
        continuously rather than stroking occasionally. The ITM multi-turn
        series carries IP68 with an optional Ex d IIC T4 rating for
        hazardous areas. The Danfoss PVE series provides electrohydraulic
        control on 12V or 24V.
      </P>
      <Supplied img={`${IMG}/electric/itm.webp`} alt="Two Susin ITM multi-turn electric valve actuators" name="Susin ITM multi-turn electric actuators" line="Heavy-duty multi-turn electric actuators for gate, globe and sluice valves. IP68, Ex d IIC T4 optional." href="/actuators/electric/itm" />
      <P>
        Kosaplus covers the smaller end of electric quarter-turn duty across
        four families: the KE series from 8 to 2,000 Nm in spur gear and
        scotch yoke versions, the KP series explosion proof from 25 to 500
        Nm, the KS series for quick operation where a one-second stroke at
        10 Nm or three seconds at 25 Nm is needed, and the KR safe-return
        series from 20 to 60 Nm where an electric actuator has to reach a
        defined position on power loss. That last family is worth knowing
        about, because it answers the usual objection to electric actuators
        without bolting a battery pack onto a standard unit.
      </P>
      <H3>When electric is right</H3>
      <UL
        items={[
          "There is no compressed air, and installing it for one valve is not justified.",
          "The duty is modulating. Electric positions natively and accurately without a separate positioner.",
          "The valve is multi-turn — a gate or globe valve — where the ITM series is designed for the job.",
          "The actuator runs continuously — check the duty cycle rating. The ITL series is rated 100%; an actuator rated 30% will overheat on continuous modulating service.",
          "You want position feedback and diagnostics back to the control system.",
        ]}
      />
      <H3>Where it struggles</H3>
      <P>
        Fail-safe is the weak point. On loss of power an electric actuator
        stops where it is unless a battery or capacitor backup is fitted,
        which adds cost and a component that ages. If the process demands
        the valve reach a safe position on power loss, spring-return
        pneumatic or accumulator-backed hydraulic is the more honest answer.
        Electric is also slower, and in a hazardous area the Ex rating adds
        cost that a pneumatic actuator simply avoids.
      </P>

      {/* ── HYDRAULIC ── */}
      <H2>Hydraulic and Electro-Hydraulic Actuators</H2>
      <P>
        Hydraulic actuators use fluid under pressure rather than air.
        Because hydraulic fluid is effectively incompressible and runs at
        far higher pressures, they deliver much more torque from a given
        physical size — torque density is the reason to choose them.
        Electro-hydraulic units package a pump, reservoir and controls with
        the actuator, so they need only an electrical supply. You get
        hydraulic force without plant-wide hydraulic infrastructure, which
        is what makes them practical on isolated valves.
      </P>
      <H3>What we supply</H3>
      <P>
        The Susin PANDA and PA electro-hydraulic rotary series covers 46 to
        10,000 Nm. PANDA operates at low pressure (8 bar), PA at high
        pressure (180 bar). Both mount to ISO 5211 and NAMUR, carry ATEX
        Zone 1 and 2 approval, SIL 2 and SIL 3 rating, and IP67/IP68 ingress
        protection. Fail-safe options include spring return and hydraulic
        accumulator, so the safe position can be reached even when the
        electrical supply is lost — confirm which arrangement applies to the
        specific series and configuration at enquiry.
      </P>
      <Supplied img={`${IMG}/hydraulic/adf.webp`} alt="ADF electro-hydraulic rotary valve actuator" name="ADF electro-hydraulic actuators" line="46 to 10,000 Nm with only an electrical supply. ATEX Zone 1 and 2, SIL 2 and SIL 3." href="/actuators/hydraulic/adf" />
      <H3>When hydraulic is right</H3>
      <UL
        items={[
          "The torque required is beyond what a reasonably sized pneumatic or electric actuator will deliver.",
          "Space is constrained. This is the highest torque density of the four.",
          "The application is safety-critical and needs SIL 2 or SIL 3 with a genuine fail-safe action.",
          "The valve is in a Zone 1 or Zone 2 area needing high torque and full certification.",
          "Subsea or extreme-duty service, where hydraulic is often the only practical option.",
        ]}
      />
      <H3>Where it struggles</H3>
      <P>
        Cost, first and foremost — this is the most expensive of the four.
        Hydraulic systems also need maintaining: fluid condition, seal
        integrity and leak management are ongoing tasks, and a leak is both
        a housekeeping and an environmental problem in a way an air leak is
        not. For straightforward on/off duty within pneumatic&apos;s torque
        range, hydraulic is usually over-specified.
      </P>

      {/* ── MANUAL ── */}
      <H2>Manual Gearboxes: The Option Worth Checking First</H2>
      <P>
        Before specifying anything powered, it is worth asking how often the
        valve actually moves. A large valve operated twice a year does not
        need an actuator, a power supply, a control signal and a maintenance
        regime. It needs a gearbox and a handwheel. A gear operator
        multiplies operator effort so a large valve can be turned by hand,
        and self-locking worm gearing holds the valve wherever it is left.
        Cost is a fraction of a powered actuator, there is nothing to fail
        on power loss, and there is no certification question in a hazardous
        area.
      </P>
      <H3>What we supply</H3>
      <P>
        The Susin MAW quarter-turn worm gear series covers 100 to 32,000 Nm
        — self-locking, ISO 5211 direct mount, with ±5° fine stroke
        adjustment and IP54 through IP67M, working from −20°C to +85°C. It
        is designed for ball, butterfly and plug valves and is MOV
        compatible, so it can be motorised later if the duty changes. The
        MAB multi-turn bevel gear series covers 250 to 18,000 Nm with thrust
        to 2,500 kN, in a ductile iron housing to ISO 5210 with IP55 through
        IP68 and marine coating options, for gate and globe valves. The ITG
        quarter-turn industrial gear series spans 60 to 28,000 Nm to ISO
        5211/5210 with a declutchable manual override.
      </P>
      <Supplied img={`${IMG}/mechanical/itg.webp`} alt="Susin ITG gear actuator with a handwheel" name="Susin ITG gear actuators" line="Handwheel gear operators for ball, butterfly and plug valves, ISO 5211 mounting." href="/actuators/mechanical/itg" />

      {/* ── SIZING ── */}
      <H2>Sizing an Actuator: Torque and Safety Factor</H2>
      <P>
        This is where most specifications go wrong, and it is worth getting
        right before comparing technologies at all.
      </P>
      <H3>Break-out torque, not running torque</H3>
      <P>
        A valve does not need the same torque throughout its travel. On a
        quarter-turn valve the demand typically peaks in four places:
        break-out (unseating from closed), running (mid-travel), ending
        (approaching the seat) and seating (final closure). Break-out is
        usually the highest, and it rises the longer a valve has been left
        closed, as the seat takes a set against the ball or disc. Size on
        break-out torque. An actuator sized on running torque will operate
        perfectly on the test bench and stall on a valve that has been shut
        for six months.
      </P>
      <H3>Apply a safety factor</H3>
      <P>
        Valve torque figures come from the valve manufacturer under ideal
        conditions. Real service brings process deposits, corrosion,
        temperature effects and ageing seats. A safety factor over the
        calculated break-out torque covers that — a common range is 25% to
        50%, with the higher end for dirty, corrosive or infrequently
        operated service. Kosaplus&apos;s own selection tool offers 30% (a
        multiplier of 1.3) as a standard option, which sits squarely in that
        band. Your valve manufacturer&apos;s guidance takes precedence where
        it differs.
      </P>
      <H3>Size on the worst-case supply</H3>
      <P>
        A pneumatic actuator&apos;s output torque is proportional to the air
        pressure applied. Sizing on 7 bar and running the plant at 5.5 bar
        leaves you short by more than a fifth. Size on the lowest supply
        pressure the actuator will actually see, not the nominal figure. The
        same applies to voltage on an electric actuator.
      </P>
      <H3>For spring return, check both directions</H3>
      <P>
        A spring return actuator has two torque profiles: air stroke, where
        air compresses the spring, and spring stroke, where the spring alone
        drives the valve. The spring stroke is the weaker of the two and it
        is the one that has to work when everything else has failed. Check
        it against break-out torque, not just the air stroke figure. The gap
        is larger than people expect, and it varies with the spring
        specified and the position in the stroke. Manufacturer torque tables
        give the spring stroke separately from the air stroke for exactly
        this reason — take the figure from the spring column, at the weakest
        point in the travel, and size against that.
      </P>
      <H3>What to send us</H3>
      <P>
        If you would rather we sized it, we need: valve type and size,
        break-out torque from the valve manufacturer, available supply
        pressure or voltage, required fail position, stroke time if it
        matters, ambient temperature, and the hazardous area classification
        if there is one.
      </P>
      <Checklist
        kicker="What to send us"
        title="Before you ask us to size it"
        emailSubject="Actuator enquiry"
        items={[
          "Valve type and size",
          "Break-out torque from the valve manufacturer",
          "Available supply pressure or voltage",
          "Required fail position",
          "Stroke time, if it matters",
          "Ambient temperature",
          "Hazardous area classification, if there is one",
        ]}
      />

      {/* ── FAIL-SAFE ── */}
      <H2>Fail-Safe: Decide This First</H2>
      <P>
        What the valve should do when power, air or signal is lost is a
        process safety decision, not an actuator one — and it should be
        settled before the technology is chosen, because it rules options in
        and out.
      </P>
      <DataTable head={["Requirement", "How it is achieved", "Suits"]} rows={FAILSAFE} minWidth={640} />
      <P>
        Pneumatic spring return is the simplest and most reliable route to a
        genuine fail-safe action: nothing has to work for it to function,
        only the air has to go away. Electro-hydraulic achieves the same
        with a spring and accumulator. Electric actuators need added
        components and those components need testing, so if fail-safe is a
        real requirement rather than a preference, that is a point in favour
        of the other two.
      </P>

      {/* ── HAZARDOUS AREAS ── */}
      <H2>Hazardous Areas, SIL and Ingress Protection</H2>
      <P>
        In a zoned area, certification narrows the shortlist before
        performance does — so check it early.
      </P>
      <H3>ATEX and IECEx</H3>
      <P>
        Equipment for potentially explosive atmospheres must be certified
        for the zone it sits in. ATEX is the European regime; IECEx is the
        international equivalent, often preferred on export projects. Our
        Susin HD pneumatic range carries ATEX, and the PANDA and PA
        electro-hydraulic series are approved for Zone 1 and Zone 2. Where
        an electric actuator is required in a zoned area, the ITM multi-turn
        series is available with an Ex d IIC T4 rating. A pneumatic actuator
        with no electrical components has a simpler path here, which is a
        practical reason it remains the default in oil and gas.
      </P>
      <H3>SIL</H3>
      <P>
        Where a safety instrumented function is assessed at SIL 2 or SIL 3
        under IEC 61508, every element in the loop must be justified against
        the target — the actuator included. Our Susin HD pneumatic range
        carries SIL 3, and the PANDA and PA electro-hydraulic series carry
        SIL 2 and SIL 3.
      </P>
      <H3>Ingress protection</H3>
      <P>
        IP ratings across the range run from IP54 on indoor gear operators
        to IP68 on submersible-rated units. Outdoor installations should be
        IP66 or better; anything that may be submerged or washed down at
        pressure needs IP67 or IP68. The ITQ electric series is IP67 with
        NEMA 4X and 6; the ITM is IP68; the electro-hydraulic range is
        IP67/IP68.
      </P>
      <H3>Mounting: ISO 5211, ISO 5210 and NAMUR</H3>
      <P>
        Mounting is the detail that turns a correct actuator into one that
        will not fit.
      </P>
      <UL
        items={[
          "ISO 5211 defines the flange and drive interface between a quarter-turn valve and its actuator. Both sides quoting the same ISO 5211 flange code means they bolt together without a bespoke bracket. Most of our quarter-turn range is ISO 5211.",
          "ISO 5210 does the same job for multi-turn valves — gate and globe. The MAB bevel gear series and the ITG series mount to ISO 5210.",
          "NAMUR defines the interface for mounting accessories — solenoid valves, positioners, limit switch boxes — onto the actuator. The Susin PDS and the electro-hydraulic range are NAMUR compliant, and the Kosaplus range is built to NAMUR and DIN 3337.",
          "Position feedback mounts on top. The Kosaplus KLS range gives visual indication plus switched output — KLS10 and KLS20 bodies, weatherproof to IP67/IP68 or explosion proof to Ex d IIC T6, with either two SPDT microswitches or PNP/NPN proximity sensors on 12–24V DC.",
        ]}
      />
      <P>
        Check the flange code and the drive size, not just the standard. Two
        actuators can both be ISO 5211 and still not fit the same valve.
        Across the Kosaplus range the codes run from F03 on the smallest R32
        and A50 bodies through F05, F07, F10, F12 and F14 to F16 and F25 on
        the A300 — with several sizes offering more than one flange as
        standard or option, and stem squares from 9×9 mm up to 55×55 mm. The
        flange and the stem square both have to match.
      </P>

      {/* ── DECISION FRAMEWORK ── */}
      <H2>How to Choose: A Decision Framework</H2>
      <P>
        Work down in order. Each step removes options, and by step five
        there is usually one sensible answer.
      </P>
      <Stepper
        kicker="Decision framework"
        title="Work down in order"
        steps={DECISION.map(([title, body]) => ({ title, body }))}
      />

      <FAQ title="Frequently Asked Questions" items={FAQS} />

      <CTA
        title="NEED HELP SPECIFYING AN ACTUATOR?"
        body="Send us the valve type and size, break-out torque, available supply, required fail position and any hazardous area classification, and we will come back with a sized actuator, mounting details and lead time."
        primary={{ label: "Talk to Our Team", href: "/contact" }}
      />

      <RelatedLinks title="Browse Our Actuator Range" links={RELATED} />
    </ArticleLayout>
  );
}
