"use client";

import * as React from "react";
import { Box } from "@mui/material";
import { T } from "@/src/app/Landing/modern/tokens";
import {
  ArticleLayout,
  Lead,
  H2,
  H3,
  P,
  A,
  UL,
  KeyTakeaways,
  DataTable,
  Callout,
  Finder,
  Stepper,
  Checklist,
  FAQ,
  CTA,
  RelatedLinks,
} from "../components/Article";

const SLUG = "/news/l-port-vs-t-port-3-way-ball-valve";
const URL = `https://www.valvenok.com${SLUG}`;
const COVER =
  "https://pblol2.blob.core.windows.net/valvenok-images/blogs/l-port-vs-t-port-3-way-ball-valve.jpg";
const HEADLINE =
  "L-Port vs T-Port 3-Way Ball Valves: Flow Paths, Applications and How to Specify";
const DESCRIPTION =
  "L-port or T-port? Flow path diagrams for every position, when to use each for diverting, mixing and bypass, and a spec checklist. Request a quote from Valvenok.";

/* ───────────── interactive flow-path diagram ─────────────
   Top-down view. Side ports A (left) and B (right), common port C (bottom).
   Angles in SVG degrees: 0 = right, 90 = down, 180 = left, 270 = up. */

type Pos = { label: string; rot: number; caption: string };
const PORT_ANGLE: Record<"A" | "B" | "C", number> = { A: 180, B: 0, C: 90 };
const BORE = { L: [180, 90], T: [180, 0, 90] } as const;

const L_POS: Pos[] = [
  {
    label: "Position 1",
    rot: 0,
    caption: "C connected to A. B is sealed off.",
  },
  {
    label: "Position 2",
    rot: -90,
    caption:
      "C connected to B. A is sealed off. (A quarter turn from position 1.)",
  },
  {
    label: "Off",
    rot: -180,
    caption:
      "No ports connected: the valve isolates. Only on valves with 180° travel or adjustable stops.",
  },
];
const T_POS: Pos[] = [
  {
    label: "Position 1",
    rot: 0,
    caption: "All three ports connected: A, B and C.",
  },
  {
    label: "Position 2",
    rot: 180,
    caption: "Straight through, A to B. C is closed.",
  },
  { label: "Position 3", rot: 90, caption: "C connected to A. B is closed." },
  { label: "Position 4", rot: -90, caption: "C connected to B. A is closed." },
];

const norm = (a: number) => ((a % 360) + 360) % 360;

function PortDiagram({ kind, figure }: { kind: "L" | "T"; figure: string }) {
  const positions = kind === "L" ? L_POS : T_POS;
  const [i, setI] = React.useState(0);
  const pos = positions[i];
  const openings = BORE[kind].map((a) => norm(a + pos.rot));
  const open = (Object.keys(PORT_ANGLE) as ("A" | "B" | "C")[]).filter((p) =>
    openings.includes(PORT_ANGLE[p]),
  );
  const flowing = open.length >= 2;
  const live = (p: "A" | "B" | "C") => flowing && open.includes(p);
  const cx = 160,
    cy = 130,
    R = 52;
  const end = { A: [22, cy], B: [298, cy], C: [cx, 262] } as const;
  const boreRect = (a: number) => (
    <rect
      key={a}
      x={0}
      y={-11}
      width={R + 2}
      height={22}
      rx={3}
      fill={flowing ? "#DDF3D6" : "#EEF1EF"}
      transform={`rotate(${a})`}
    />
  );
  return (
    <Box
      component="figure"
      sx={{
        my: 4,
        mx: 0,
        p: { xs: 2, md: 3 },
        borderRadius: "18px",
        border: `1px solid ${T.border}`,
        bgcolor: "#FBFCFB",
      }}
    >
      <Box
        sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
        role="group"
        aria-label={`${kind}-port positions`}
      >
        {positions.map((p, k) => (
          <Box
            key={p.label}
            component="button"
            type="button"
            aria-pressed={k === i}
            onClick={() => setI(k)}
            sx={{
              cursor: "pointer",
              px: 1.75,
              py: 0.75,
              borderRadius: 999,
              fontFamily: "inherit",
              fontSize: "0.85rem",
              fontWeight: 700,
              border: `1px solid ${k === i ? T.greenDark : T.border}`,
              bgcolor: k === i ? T.greenDark : "#fff",
              color: k === i ? "#fff" : T.ink,
              transition: "all .2s",
            }}
          >
            {p.label}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "minmax(0, 320px) 1fr" },
          gap: { xs: 1.5, sm: 3 },
          alignItems: "center",
        }}
      >
        <Box
          component="svg"
          viewBox="0 0 320 280"
          role="img"
          aria-label={`${kind}-port 3-way ball valve, ${pos.label}: ${pos.caption}`}
          sx={{
            width: "100%",
            maxWidth: 320,
            height: "auto",
            "@keyframes flowDash": { to: { strokeDashoffset: -24 } },
          }}
        >
          {/* pipes */}
          {(["A", "B", "C"] as const).map((p) => {
            const [x, y] = end[p];
            const horiz = p !== "C";
            // pipe stubs from the body out to each port end
            const box =
              p === "A"
                ? [22, cy - 18, cx - R - 22, 36]
                : p === "B"
                  ? [cx + R, cy - 18, 298 - cx - R, 36]
                  : [cx - 18, cy + R, 36, 262 - cy - R];
            return (
              <g key={p}>
                <rect
                  x={box[0]}
                  y={box[1]}
                  width={box[2]}
                  height={box[3]}
                  fill={live(p) ? "#E6F6E0" : "#EEF1EF"}
                  stroke={live(p) ? "#7FB870" : "#B9C4BD"}
                  strokeWidth="2"
                  style={{ transition: "fill .3s, stroke .3s" }}
                />
                {live(p) && (
                  <line
                    x1={x}
                    y1={y}
                    x2={cx}
                    y2={cy}
                    stroke={T.green}
                    strokeWidth="5"
                    strokeDasharray="8 4"
                    strokeLinecap="round"
                    style={{ animation: "flowDash .6s linear infinite" }}
                  />
                )}
                <text
                  x={horiz ? x + (p === "A" ? -10 : 10) : x}
                  y={horiz ? y + 5 : y + 16}
                  textAnchor="middle"
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    fill: live(p) ? T.greenDark : "#8A968E",
                    fontFamily: "inherit",
                  }}
                >
                  {p}
                </text>
              </g>
            );
          })}
          {/* body */}
          <circle
            cx={cx}
            cy={cy}
            r={R + 8}
            fill="#E3E9E5"
            stroke="#9AA9A0"
            strokeWidth="2"
          />
          {/* ball with its bore, turns between positions */}
          <g
            style={{
              transform: `rotate(${pos.rot}deg)`,
              transformOrigin: `${cx}px ${cy}px`,
              transformBox: "view-box",
              transition: "transform .6s cubic-bezier(.3,.9,.3,1)",
            }}
          >
            <g transform={`translate(${cx} ${cy})`}>
              <circle r={R} fill="#fff" stroke="#8DA1B5" strokeWidth="2" />
              {BORE[kind].map(boreRect)}
              <circle r={11} fill={flowing ? "#DDF3D6" : "#EEF1EF"} />
            </g>
          </g>
          {flowing && <circle cx={cx} cy={cy} r={6} fill={T.green} />}
        </Box>
        <Box>
          <Box
            sx={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: T.muted,
            }}
          >
            {kind}-port · {pos.label}
          </Box>
          <Box
            sx={{
              mt: 0.75,
              fontSize: "1.05rem",
              fontWeight: 700,
              color: T.ink,
              lineHeight: 1.45,
            }}
          >
            {pos.caption}
          </Box>
          <Box sx={{ mt: 1.25, fontSize: "0.88rem", color: T.body }}>
            {flowing
              ? `Flow path: ${open.join(" ↔ ")}`
              : "No flow path: every port is sealed from the others."}
          </Box>
        </Box>
      </Box>
      <Box
        component="figcaption"
        sx={{ mt: 2, fontSize: "0.85rem", color: T.muted }}
      >
        {figure} Top-down view. Green shows the open flow path; grey ports are
        closed. Pick a position to turn the ball.
      </Box>
    </Box>
  );
}

/* ───────────── content ───────────── */

const TAKEAWAYS = [
  "An L-port connects the common port to one side port at a time. It can also offer a full off position.",
  "A T-port can connect all three ports, pass flow straight through, or divert. It can never shut off fully.",
  <>
    Diverting with isolation: choose an <strong>L-port</strong>. Mixing, bypass,
    or switching without interrupting flow: choose a <strong>T-port</strong>.
  </>,
  "Always state the flow pattern for each position, the seat design, end connections and actuation in your enquiry.",
  "3-way valves need more operating torque than 2-way valves, so size the actuator from the manufacturer’s figures.",
];

const COMPARE = {
  head: ["Feature", "L-port", "T-port"],
  rows: [
    [
      "Bore shape",
      "Two openings at 90°",
      "Three openings (through bore plus branch)",
    ],
    ["Connects all three ports at once", "No", "Yes (position 1)"],
    ["Straight-through flow A ↔ B", "No", "Yes (position 2)"],
    [
      "Full shut-off position",
      "Yes, if the stops allow the off position",
      "No, there is always a flow path",
    ],
    [
      "Typical travel",
      "90° (two-way divert) or 180° with off",
      "90° or 180°, depending on the pattern",
    ],
    [
      "Best for",
      "Diverting or selecting, where one outlet must be fully isolated",
      "Mixing, bypass, and switching without dead-heading a pump",
    ],
    [
      "Watch out for",
      "Flow is restricted while the ball is mid-travel",
      "Cannot isolate the line; check seat design for leakage between ports",
    ],
  ],
};

const SPEC_STEPS = [
  {
    title: "Port type and flow pattern",
    body: (
      <>
        State L-port or T-port, then sketch or list the connection you need in
        each position, for example “Position 1: C to A, Position 2: C to B, 90°
        travel”. Manufacturers number their patterns differently (one maker’s
        “T2” is not always another’s), so a simple sketch is the safest way to
        avoid mistakes. Say whether the valve should be side-entry or
        bottom-entry, and whether you need an off position.
      </>
    ),
  },
  {
    title: "Seat design and sealing",
    body: (
      <>
        Ask how many seats the valve has. A four-seat design seals every port
        and limits leakage between ports. A two-seat design is cheaper but may
        not seal the common port. Seat material follows the service: PTFE or
        reinforced PTFE for general duty, PEEK or similar for higher
        temperatures, and metal seats for abrasive or high-temperature service.
        If the media is flammable, specify fire-safe certification (API 607 /
        ISO 10497).
      </>
    ),
  },
  {
    title: "Size, bore and pressure class",
    body: "Give the nominal size (DN or NPS), and say whether you need full bore or reduced bore. Give the pressure class (PN rating or ASME Class) and the design pressure and temperature. Remember that the valve rating is limited by the seat material as well as the body.",
  },
  {
    title: "Materials",
    body: "Typical body materials are carbon steel (WCB/A105) for oil, gas and general utilities, and stainless steel (CF8M/316) for water, chemicals and food. Brass is used for low-pressure building services. Include the media, its concentration and any solids so materials can be checked for compatibility. Ask for EN 10204 3.1 material certificates where you need traceability.",
  },
  {
    title: "End connections",
    body: (
      <UL
        items={[
          "Screwed: BSPP, BSPT or NPT. State which, because they do not seal against each other.",
          "Flanged: EN 1092-1 (PN) or ASME B16.5 (Class), with facing type (RF/RTJ).",
          "Socket weld or butt weld: give the schedule and pipe standard.",
          "Tri-clamp or hygienic: for food, beverage and pharmaceutical lines.",
        ]}
      />
    ),
  },
  {
    title: "Actuation",
    body: (
      <>
        Manual valves come with a lever or, on larger sizes, a gearbox. Many
        have a position indicator that shows the flow path. For automation,
        specify pneumatic double-acting or spring-return with a defined fail
        position (state which port the valve should fail to); electric on/off or
        modulating, with supply voltage and enclosure rating (IP / ATEX zone if
        needed); ISO 5211 mounting; and accessories such as a limit switch box,
        NAMUR solenoid valve and manual override. A 3-way valve with 180° travel
        needs an actuator that turns 180°: a standard 90° actuator will not
        reach every position. See{" "}
        <A href="/news/how-to-choose-a-valve-actuator">
          how to choose a valve actuator
        </A>{" "}
        and{" "}
        <A href="/news/valve-actuator-sizing-torque-guide">
          actuator sizing and torque
        </A>
        .
      </>
    ),
  },
  {
    title: "Certification and documentation",
    body: "List what the job needs up front: PED conformity, ATEX for the actuator, fire-safe certification, fugitive emission testing (ISO 15848), pressure test certificates, and material certificates. Adding these after the order is placed is what causes delays.",
  },
];

const CHECKLIST = [
  "Quantity, size (DN/NPS), full or reduced bore",
  "L-port or T-port, the flow path in each position, travel (90°/180°), off position needed?",
  "Side-entry or bottom-entry, two-seat or four-seat",
  "Pressure class, design pressure and temperature",
  "Media (and solids content), body material, seat material",
  "End connections, including thread type or flange standard and facing",
  "Manual (lever or gear) or actuated: pneumatic or electric, fail position, voltage, accessories",
  "Certificates required: 3.1, PED, ATEX, fire-safe, ISO 15848",
  "Required delivery date and delivery address",
];

const FAQS = [
  {
    q: "Can an L-port valve be used for mixing?",
    a: "Not in the sense of blending two streams at once. An L-port only ever connects the common port to one side port, so it can select between two sources but not combine them. For combining flows, use a T-port in its all-ports-open position.",
  },
  {
    q: "Can a T-port 3-way ball valve shut off flow completely?",
    a: "No. A standard T-port bore always leaves at least two ports connected. If the line needs positive isolation, fit a separate 2-way isolation valve or choose an L-port with an off position.",
  },
  {
    q: "Is a 3-way ball valve suitable for temperature or ratio control?",
    a: "Only for on/off or coarse switching. A ball valve does not give a predictable flow characteristic between positions. For modulating temperature blending, use a 3-way control valve, or a characterised (V-port) ball valve with a modulating actuator.",
  },
  {
    q: "Do 3-way ball valves need a bigger actuator?",
    a: "Usually, yes. More seat contact means a higher breakaway torque than a 2-way valve of the same size. Size the actuator from the manufacturer’s torque figures plus a safety factor. Our actuator sizing guide explains how.",
  },
  {
    q: "What is the difference between side-entry and bottom-entry 3-way valves?",
    a: "On a side-entry valve all three ports sit in one plane, with the common port in the middle of the body. On a bottom-entry valve the common port comes in from underneath, and either two or all four side positions can be ported. Flow pattern numbering differs between manufacturers, so always confirm the pattern against a drawing.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "@id": `${URL}#article`,
      headline: HEADLINE,
      description: DESCRIPTION,
      mainEntityOfPage: URL,
      image: COVER,
      datePublished: "2026-11-04",
      dateModified: "2026-11-04",
      author: { "@type": "Organization", name: "Valvenok" },
      publisher: {
        "@type": "Organization",
        name: "Valvenok Ltd",
        logo: {
          "@type": "ImageObject",
          url: "https://pblol2.blob.core.windows.net/valvenok-images/valvenok-new-logo.jpeg",
        },
      },
      about: [
        "3-way ball valve",
        "L-port ball valve",
        "T-port ball valve",
        "flow path",
        "diverting valve",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function LPortVsTPortPage() {
  return (
    <ArticleLayout
      schema={schema}
      meta={{
        slug: SLUG,
        category: "Technical Guide",
        title: HEADLINE,
        dek: "Every flow position for both bore types, which one suits diverting, mixing and bypass, and what to put in your enquiry.",
        date: "November 2026",
        readMinutes: 8,
        cover: COVER,
        coverAlt: "L-port vs T-port 3-way ball valve selection guide",
      }}
    >
      <Lead>
        A 3-way ball valve does the job of two or three 2-way valves in a single
        body. The decision that matters most is the shape of the hole through
        the ball: L-port or T-port. Get it wrong and the valve will not isolate
        when you need it to, or it will dead-head a pump during changeover. This
        guide shows every flow position for both types, explains which one suits
        diverting, mixing and bypass duties, and lists what to include in your
        enquiry so the quote comes back right the first time.
      </Lead>

      <KeyTakeaways items={TAKEAWAYS} />

      <Finder
        kicker="Quick answer"
        title="What does the valve need to do?"
        hint="Pick the duty to see which bore to start with."
        options={[
          {
            label: "Divert to one of two outlets, unused one isolated",
            result: (
              <>
                <strong>L-port.</strong> It connects the common port to one side
                port and fully seals the other.
              </>
            ),
          },
          {
            label: "Select one of two sources",
            result: (
              <>
                <strong>L-port.</strong> It picks one source and keeps the other
                isolated.
              </>
            ),
          },
          {
            label: "Mix two streams",
            result: (
              <>
                <strong>T-port</strong>, in position 1 with all three ports
                open. For accurate blending, use a 3-way control valve instead.
              </>
            ),
          },
          {
            label: "Bypass or pump changeover",
            result: (
              <>
                <strong>T-port.</strong> There is always a flow path, so a pump
                upstream is never dead-headed.
              </>
            ),
          },
        ]}
      />

      <H2>What is a 3-way ball valve?</H2>
      <P>
        A 3-way ball valve has three ports and a ball drilled with a bore that
        links two or three of them, depending on which way the ball is turned.
        In this guide the two side ports are labelled A and B, and the common
        (centre) port is C. Turning the stem a quarter or half turn changes
        which ports are connected. That lets one valve divert, select, mix or
        bypass flow without extra pipework or a second valve.
      </P>
      <P>
        The body and seats look much the same whichever bore you choose. The
        bore shape decides what the valve can do. This is why “3-way ball valve”
        on its own is not enough information to quote from.
      </P>

      <H2>L-port flow paths</H2>
      <P>
        The L-port ball has two openings set at 90° to each other. In every
        working position it connects the common port C to one side port, and the
        other side port is sealed off. A quarter turn swings the flow from A to
        B.
      </P>
      <PortDiagram kind="L" figure="Figure 1. L-port positions." />
      <P>
        Some L-port valves are built with 180° travel or adjustable stops. These
        can be turned to a third position where the bore faces the body wall and
        no ports are connected, so the valve isolates as well as diverts.
        Whether this off position exists depends on the stop configuration, so
        confirm it at enquiry stage.
      </P>

      <H2>T-port flow paths</H2>
      <P>
        The T-port ball has a straight bore with a branch drilled into it, which
        gives three openings. That adds two positions an L-port cannot offer:
        all three ports connected at once, and straight-through flow from A to B
        with C closed.
      </P>
      <PortDiagram kind="T" figure="Figure 2. T-port positions." />
      <P>
        The trade-off is that a T-port always has a flow path. No position
        closes all three ports. That is a good thing on pump discharge, where
        you never want the line dead-headed during changeover. It is a problem
        if operators expect the valve to isolate.
      </P>

      <H2>L-port vs T-port at a glance</H2>
      <DataTable {...COMPARE} />

      <H2>When to use each: diverting, mixing and bypass</H2>
      <H3>Diverting (one inlet, two outlets)</H3>
      <P>
        Flow comes in at C and is sent to either A or B. L-port is the usual
        choice, because the outlet not in use is fully sealed. A T-port works
        too, using positions 3 and 4, and passes flow to both outlets while it
        moves between them.
      </P>
      <UL
        items={[
          "Switching between duty and standby tanks or vessels",
          "Changing over duplex filters or strainers without shutting down",
          "Sending product to a process line or back to the tank (recirculation)",
          "Selecting a sample point or drain",
        ]}
      />
      <H3>Mixing or selecting (two inlets, one outlet)</H3>
      <P>
        To select one of two sources, such as two supply tanks or mains water
        and a backup, an L-port does the job and keeps the source not in use
        isolated. To combine two streams, use a T-port in position 1 with all
        three ports open. A ball valve gives on/off blending, not accurate
        proportioning. For temperature or ratio control, specify a 3-way{" "}
        <A href="/valves/industrial-valves/control-valves">control valve</A> or
        a characterised ball valve with a modulating actuator.
      </P>
      <H3>Bypass</H3>
      <P>
        This is where the T-port comes into its own. In position 2, flow runs
        straight from A to B and bypasses whatever is connected to C. Turn the
        valve and the flow is routed through C instead. Because the line is
        never fully closed, a pump upstream keeps a flow path throughout the
        changeover.
      </P>
      <UL
        items={[
          "Bypassing a heat exchanger, cooler or heater during start-up or maintenance",
          "Flow meter or instrument bypass, so the meter can be removed with the line still running",
          "Filter bypass for cleaning without shutting down",
          "Pump discharge changeover, where dead-heading must be avoided",
        ]}
      />

      <H2>How to specify a 3-way ball valve</H2>
      <P>
        Most quotes for 3-way valves go back and forth because the enquiry
        leaves out details. Work through these seven points and you will get a
        like-for-like price first time.
      </P>
      <Stepper
        title="Seven points for a first-time-right quote"
        steps={SPEC_STEPS}
      />

      <H2>Enquiry checklist</H2>
      <Checklist
        kicker="Copy into your RFQ"
        title="3-way ball valve enquiry checklist"
        items={CHECKLIST}
        emailSubject="3-way ball valve enquiry"
      />

      <H2>Common specification mistakes</H2>
      <Callout type="warning" title="Avoid these">
        <UL
          items={[
            "Expecting a T-port to isolate. It cannot. Fit a separate isolation valve or use an L-port with an off position.",
            "Ordering “3-way, T-port” without the flow pattern. Two T-port valves can have different patterns, so always send the sketch.",
            "Undersizing the actuator. 3-way valves have higher breakaway torque, which increases further after long periods without operation.",
            "Mixing BSP and NPT. The threads look similar but will not seal reliably together.",
            "Using a ball valve for modulating control. Use a control valve or a characterised ball valve instead.",
          ]}
        />
      </Callout>

      <Callout type="tip" title="Looking for 3-way valves?">
        We supply industrial{" "}
        <A href="/valves/industrial-valves/ball-valves">ball valves</A>,
        stainless{" "}
        <A href="/valves/instrumentation-valves/ball-valves">
          instrumentation ball valves
        </A>{" "}
        in 2-way and 3-way designs, and the{" "}
        <A href="/brands/mars-valves">MARS</A> 3-way range.
      </Callout>

      <FAQ items={FAQS} />

      <CTA
        title="Need a 3-way ball valve specified?"
        body="Send us your flow pattern sketch and duty conditions. We will match the valve, seats and actuation and come back with a quote."
        primary={{ label: "Request a quote", href: "/contact" }}
        secondary={{
          label: "View ball valves",
          href: "/valves/industrial-valves/ball-valves",
        }}
      />

      <RelatedLinks
        links={[
          {
            label: "Ball valve vs gate valve",
            href: "/news/ball-valve-vs-gate-valve",
          },
          {
            label: "How to choose a valve actuator",
            href: "/news/how-to-choose-a-valve-actuator",
          },
          {
            label: "Valve actuator sizing and torque",
            href: "/news/valve-actuator-sizing-torque-guide",
          },
          {
            label: "Industrial ball valves",
            href: "/valves/industrial-valves/ball-valves",
          },
        ]}
      />
    </ArticleLayout>
  );
}
