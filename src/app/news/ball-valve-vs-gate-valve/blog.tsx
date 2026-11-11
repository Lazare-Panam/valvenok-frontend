"use client";

import { Box } from "@mui/material";
import {
  ArticleLayout,
  Lead,
  H2,
  H3,
  P,
  UL,
  KeyTakeaways,
  Callout,
  DataTable,
  Figure,
  Cards,
  CTA,
  RelatedLinks,
  Finder,
  Toggle,
} from "../components/Article";
import { T } from "@/src/app/Landing/modern/tokens";

const TAGS = ["Ball Valves", "Gate Valves", "Flow Control", "Industrial Applications"];

function Tags({ items }: { items: string[] }) {
  return (
    <Box component="ul" sx={{ listStyle: "none", m: 0, mb: 3, p: 0, display: "flex", flexWrap: "wrap", gap: 1 }}>
      {items.map((t) => (
        <Box
          component="li"
          key={t}
          sx={{ px: 1.5, py: 0.5, borderRadius: 999, bgcolor: T.surface, border: `1px solid ${T.border}`, fontSize: "0.8rem", fontWeight: 600, color: T.body }}
        >
          {t}
        </Box>
      ))}
    </Box>
  );
}

const KEY_TAKEAWAYS = [
  "Ball valves use a quarter-turn mechanism for instant, bubble-tight shut-off — gate valves require 10–15 full turns.",
  "Soft (PTFE) seats let ball valves meet ANSI/FCI 70-2 Class VI, the tightest standard seat leakage class — which is why they are widely used for gas and hazardous fluid isolation.",
  "Gate valves retain a role in large-diameter (DN300+) low-cycle water applications where upfront cost is the primary driver.",
  "Ball valves are actuator-ready by design — quarter-turn output matches pneumatic actuator output directly.",
  "Never throttle a standard ball valve — partial opening causes irreversible seat erosion.",
];

const COVER = "https://pblol2.blob.core.windows.net/valvenok-images/blogs/ball-valve-vs-gate-valve.jpg";

const APPLICATION_CARDS = [
  {
    title: "Gas Distribution Networks",
    body: "Ball valves are the standard isolation valve in natural gas distribution. Their bubble-tight PTFE seats meet the leakage requirements of standards like BS EN 331 (gas appliance valves) and ASME B16.34. The quarter-turn operation allows rapid manual isolation during emergency scenarios, and the lever handle position provides instant visual confirmation of valve state — a critical safety advantage over multi-turn valves where position is ambiguous.",
  },
  {
    title: "Chemical Processing Plants",
    body: "In chemical plants handling corrosive media — acids, solvents, caustic fluids — ball valves fitted with PTFE-lined bodies and seats are widely specified. The self-wiping action of the rotating ball means the seat stays clean on every cycle, reducing buildup that would compromise sealing over time. Gate valves, by contrast, have a static wedge-seat interface that is highly susceptible to corrosion and scale in these environments.",
  },
  {
    title: "HVAC and Building Services",
    body: "In commercial HVAC systems, ball valves are used for zone isolation, commissioning, and balancing. Their compact form factor fits easily into crowded plant rooms, and the quarter-turn operation means commissioning engineers can cycle valves rapidly without the fatigue associated with multi-turn gate valves. According to Flowflex, ball valves are now the default choice for building services applications precisely because of these handling advantages.",
  },
];

const COMPARISON = [
  { f: "Operation", b: "Quarter-turn (90°)", g: "Multi-turn (multiple rotations)" },
  { f: "Shut-off speed", b: "Instant", g: "Slow — 10–15 full turns typical" },
  { f: "Sealing quality", b: "Excellent — bubble-tight shut-off", g: "Degrades over time with wear" },
  { f: "Flow restriction", b: "Near zero (full-bore option)", g: "Minimal when fully open" },
  { f: "Throttling", b: "Not suitable — causes seat erosion", g: "Poor — not designed for it either" },
  {
    f: "Pressure range",
    b: "Very high pressure possible in trunnion designs — varies by model",
    g: "Wide — also used in high-pressure service (e.g. API 6A wellhead valves)",
  },
  { f: "Temperature range", b: "Depends on seat material — check the model datasheet", g: "Wider range with metal seats" },
  { f: "Maintenance", b: "Low — self-cleaning ball action", g: "Higher — wedge & seat wear" },
  { f: "Actuator-ready", b: "Yes — quarter-turn actuators standard", g: "Possible but less common" },
  { f: "Best for", b: "On/off isolation, gas, chemical, HVAC", g: "Long-term isolation, water mains" },
  { f: "Typical cost", b: "Lower to moderate", g: "Lower for large diameter" },
];

const TYPES = [
  {
    t: "Full Bore / Full Port",
    f: "Bore matches pipe diameter",
    a: "Oil & gas pipelines, high-flow industrial systems where pressure drop must be minimised",
  },
  {
    t: "Reduced Bore",
    f: "Bore ~75% of pipe diameter",
    a: "General industrial use where some pressure drop is acceptable — compact and cost-effective",
  },
  {
    t: "Floating Ball",
    f: "Ball held in place by seat pressure",
    a: "Standard pressure applications: water, compressed air, HVAC, chemical dosing systems",
  },
  {
    t: "Trunnion Mounted",
    f: "Ball anchored top and bottom",
    a: "High-pressure/high-torque: subsea pipelines, LNG terminals, large-bore gas transmission lines",
  },
  {
    t: "V-Port / Characterized",
    f: "V-shaped ball bore for flow shaping",
    a: "Where precise throttling is needed: process control, mixing, slurry handling",
  },
  {
    t: "3-Way Ball Valve",
    f: "L or T-shaped bore for flow diversion",
    a: "Mixing or diverting flows: tank switching, heating circuits, multi-port systems",
  },
];

const ADVANTAGES = [
  {
    bold: "Bubble-tight sealing",
    text: " — PTFE seats can meet ANSI/FCI 70-2 Class VI, the tightest standard seat leakage class (a small, specified allowable leakage rather than zero), making them suitable for gas and hazardous fluid isolation",
  },
  {
    bold: "Fast operation",
    text: " — quarter-turn manual or automated operation; compatible with Pneumatic, Hydraulic, and electric actuators without modification",
  },
  {
    bold: "Self-cleaning",
    text: " — the rotation of the ball wipes the seat surface on every cycle, reducing particle build-up and maintaining sealing performance over time",
  },
  {
    bold: "Low torque requirement",
    text: " — especially in full-bore designs, operating torque is low, reducing actuator sizing and cost",
  },
  {
    bold: "Compact and lightweight",
    text: " — compared to gate valves of equivalent rating, ball valves are significantly shorter face-to-face and lighter — important in offshore and elevated piping",
  },
  {
    bold: "Versatile orientation",
    text: " — can be installed in any pipeline orientation including vertical — gate valves are often restricted to horizontal installation",
  },
  {
    bold: "Actuator compatibility",
    text: " — quarter-turn output directly matches pneumatic actuator output, making automation straightforward and cost-effective",
  },
];

const CHOOSE_BALL = [
  "You need fast, reliable on/off isolation",
  "The fluid is gas, LPG, chemical, or anything where leakage is unacceptable",
  "The valve will be automated or remotely operated",
  "Installation space is limited",
  "The valve will be cycled frequently",
  "You need fire-safe design or compliance with ASME, API, or BS EN standards",
];

const CHOOSE_GATE = [
  "The pipe diameter is large (DN300+) and cost is a primary driver",
  "The valve will rarely be operated (once or twice per year)",
  "You need the absolute lowest pressure drop when fully open",
  "The application is water mains or irrigation where valve cavity is not a risk",
  "The system requires a rising stem as a visual open/close indicator (e.g. sprinkler OS&Y)",
];

// "What does your valve need to do?" — each result follows the decision framework and
// supporting text in this article.
const BALL = <strong>Choose a ball valve.</strong>;
const GATE = <strong>A gate valve may still be appropriate.</strong>;
const VALVE_FINDER = [
  {
    label: "Fast, reliable on/off isolation",
    result: (
      <>
        {BALL} You need fast, reliable on/off isolation. A ball valve can be manually closed in under a second, or
        actuated pneumatically in under 0.5 seconds with a spring-return actuator.
      </>
    ),
  },
  {
    label: "Gas, LPG or chemicals — no leakage allowed",
    result: (
      <>
        {BALL} The fluid is gas, LPG, chemical, or anything where leakage is unacceptable. PTFE seats can meet ANSI/FCI
        70-2 Class VI, the tightest standard seat leakage class. For LPG and other liquids that vaporise or thermally
        expand, double-block-and-bleed (DBB) ball valves or cavity relief valves are specified to manage cavity
        trapping.
      </>
    ),
  },
  {
    label: "Automated or remotely operated",
    result: (
      <>
        {BALL} The valve will be automated or remotely operated. Quarter-turn output directly matches pneumatic actuator
        output, making automation straightforward and cost-effective.
      </>
    ),
  },
  {
    label: "Cycled frequently",
    result: (
      <>
        {BALL} The valve will be cycled frequently. The rotation of the ball wipes the seat surface on every cycle,
        reducing particle build-up and maintaining sealing performance over time.
      </>
    ),
  },
  {
    label: "Limited installation space",
    result: (
      <>
        {BALL} Installation space is limited. Compared to gate valves of equivalent rating, ball valves are
        significantly shorter face-to-face and lighter, and can be installed in any pipeline orientation including
        vertical.
      </>
    ),
  },
  {
    label: "Fire-safe or ASME / API / BS EN compliance",
    result: (
      <>
        {BALL} You need fire-safe design or compliance with ASME, API, or BS EN standards. The fire-safe design
        requirement (API 607 or API 6FA) is a standard specification in power and refining applications, and ball
        valves can be designed to this standard.
      </>
    ),
  },
  {
    label: "Large pipe (DN300+), cost is the main driver",
    result: (
      <>
        {GATE} The pipe diameter is large (DN300+) and cost is a primary driver. For large-diameter mains, gate valves
        (or butterfly valves) are typically more cost-effective.
      </>
    ),
  },
  {
    label: "Rarely operated (once or twice a year)",
    result: (
      <>
        {GATE} The valve will rarely be operated (once or twice per year). Gate valves retain a role in large-diameter,
        low-cycle applications where upfront cost and unrestricted flow are the primary drivers.
      </>
    ),
  },
  {
    label: "Lowest pressure drop when fully open",
    result: (
      <>
        {GATE} You need the absolute lowest pressure drop when fully open. When fully open, the gate retracts entirely
        into the bonnet, leaving the full bore unobstructed. (A full-bore ball valve also keeps pressure drop
        negligible.)
      </>
    ),
  },
  {
    label: "Water mains or irrigation",
    result: (
      <>
        {GATE} The application is water mains or irrigation where valve cavity is not a risk. For smaller-diameter
        isolations — service connections, meter isolation, pump protection — ball valves are standard.
      </>
    ),
  },
  {
    label: "Visible rising stem (sprinkler OS&Y)",
    result: (
      <>
        {GATE} The system requires a rising stem as a visual open/close indicator (e.g. sprinkler OS&amp;Y). UL/FM-listed
        ball valves are increasingly used in the same role, particularly in retrofit projects.
      </>
    ),
  },
  {
    label: "Throttling or flow control",
    result: (
      <>
        <strong>Neither a standard ball valve nor a gate valve.</strong> Never throttle a standard ball valve — partial
        opening causes irreversible seat erosion — and gate valves should never be used for throttling either. V-port
        and characterized ball valves are the exception: their shaped bore makes them suitable for control valve duty.
      </>
    ),
  },
];

const REFERENCES = [
  { label: "Tameson — Gate Valve vs Ball Valve", href: "https://tameson.co.uk/pages/gate-valve-vs-ball-valve" },
  {
    label: "YKY Valve — Gate Valve vs Ball Valve Difference",
    href: "https://www.ykyvalve.com/blog/gate-valve/gate-valve-vs-ball-valve-difference/",
  },
  {
    label: "Onero Valve — 9 Key Differences",
    href: "https://www.onerovalve.com/blog/comparison/gate-valve-vs-ball-valve-9-key-differences/",
  },
  {
    label: "Arranps — Ball vs Gate Valves: Which Should You Choose?",
    href: "https://arranps.co.uk/ball-vs-gate-valves-which-should-you-choose",
  },
  {
    label: "Flowmag — Which One Is Right for Your System?",
    href: "https://flowmag.co.uk/ball-valves-or-gate-valves-which-one-is-right-for-your-system/",
  },
  {
    label: "Flowflex — Gate Valves vs Ball Valves",
    href: "https://flowflex.com/en/knowledge-base/gate-valves-vs-ball-valves",
  },
];

// The two valves side by side: equal cards, same image box, ball first as in the table
const PAIR = [
  {
    name: "Ball valve",
    src: "https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-2-S-04-FF-1.png",
    how: "A drilled ball turns 90° to open or close. Quick, tight shut-off.",
  },
  {
    name: "Gate valve",
    src: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/bolted-gate-valve.png",
    how: "A flat gate rises out of the flow path, wound up and down by a handwheel over 10–15 turns.",
  },
];

function VersusPair() {
  return (
    <Box sx={{ position: "relative", my: 4, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
      {PAIR.map((v) => (
        <Box
          key={v.name}
          component="figure"
          sx={{ m: 0, borderRadius: T.radius, border: `1px solid ${T.border}`, bgcolor: "#fff", overflow: "hidden", display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ position: "relative", height: { xs: 240, md: 300 }, bgcolor: T.surface }}>
            <Box
              component="img"
              src={v.src}
              alt={v.name}
              loading="lazy"
              sx={{ "&&": { position: "absolute", inset: 12, width: "calc(100% - 24px)", height: "calc(100% - 24px)", maxWidth: "none", objectFit: "contain", display: "block", mixBlendMode: "multiply", border: 0, borderRadius: 0, m: 0 } }}
            />
          </Box>
          <Box component="figcaption" sx={{ p: 2.5, borderTop: `1px solid ${T.border}` }}>
            <Box sx={{ fontSize: "1.1rem", fontWeight: 800, color: T.ink, mb: 0.5 }}>{v.name}</Box>
            <Box sx={{ fontSize: "0.92rem", lineHeight: 1.55, color: T.body }}>{v.how}</Box>
          </Box>
        </Box>
      ))}
      <Box
        aria-hidden
        sx={{
          display: { xs: "none", sm: "grid" },
          position: "absolute",
          left: "50%",
          top: { sm: 120, md: 150 },
          transform: "translate(-50%, -50%)",
          width: 44,
          height: 44,
          borderRadius: "50%",
          placeItems: "center",
          bgcolor: T.ink,
          color: "#fff",
          fontSize: "0.8rem",
          fontWeight: 800,
          letterSpacing: "0.04em",
          boxShadow: "0 0 0 6px #fff",
        }}
      >
        VS
      </Box>
    </Box>
  );
}

export default function BallValveVsGateValvePage({ schema }: { schema?: object }) {
  return (
    <ArticleLayout
      schema={schema}
      meta={{
        slug: "/news/ball-valve-vs-gate-valve",
        category: "Technical Guide",
        title: "Ball Valve vs Gate Valve",
        dek: "Key Differences & How to Choose",
        author: "Valvenok Team",
        date: "Updated 27 October 2026",
        readMinutes: 7,
        cover: COVER,
        coverAlt: "Ball valve vs gate valve: a flanged quarter-turn ball valve beside a multi-turn gate valve",
      }}
    >
      <Tags items={TAGS} />

      <Lead>
        Ball valves and gate valves are both isolation valves — but their mechanisms, performance characteristics, and
        ideal use cases differ significantly. Choosing the wrong one doesn&apos;t just cost you money; it can affect system
        safety, longevity, and efficiency. This guide cuts through the basics and gets into what actually matters in
        practice.
      </Lead>

      <KeyTakeaways items={KEY_TAKEAWAYS} />

      <H2>What Is a Ball Valve?</H2>
      <P>
        A <strong>ball valve</strong>{" "}is a quarter-turn rotary valve that uses a drilled, hollow ball — the{" "}
        <strong>closure element</strong>{" "}— to control fluid flow. When the bore through the ball aligns with the pipeline,
        flow passes unobstructed. A 90° rotation perpendicular to the pipe creates a complete seal.
      </P>
      <P>
        Unlike globe or needle valves, ball valves are not designed for <strong>throttling</strong>. Their power lies in{" "}
        <strong>tight, fast, repeatable shut-off</strong>{" "}— which is why they dominate in applications where isolation
        speed and reliability are non-negotiable.
      </P>
      <P>
        The sealing mechanism is what sets them apart. Ball valves use <strong>soft seats</strong>{" "}— typically PTFE or
        Nylon — that press against the ball surface to form a <strong>bubble-tight seal</strong>{" "}(soft-seated valves are
        typically specified to ANSI/FCI 70-2 Class VI, the tightest standard seat leakage class). This makes them
        particularly suitable for gas systems, where even minor leakage is unacceptable.
      </P>

      <Figure
        src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/apollo-valves-88a10a01.webp"
        alt="Quarter-turn operation: 90° rotation moves from full open to full closed"
        caption="Quarter-turn operation: 90° rotation moves from full open to full closed."
      />

      <H3>The Role of Seat Material</H3>
      <P>
        Seat material directly dictates performance limits. <strong>PTFE seats</strong>{" "}are the most common — chemically
        inert, low friction, and suited to moderate temperatures (limits depend on the seat grade and manufacturer). For
        higher temperatures or abrasive media, <strong>metal-seated ball valves</strong>{" "}(typically stainless or tungsten
        carbide-coated) extend operating range considerably, used in steam, high-temperature gas, and power generation
        applications.
      </P>

      <H3>The Significance of Bore Size</H3>
      <P>
        A <strong>full-bore (full-port) ball valve</strong>{" "}has a bore diameter equal to the pipe — meaning flow
        coefficient (Cv) remains essentially unchanged and pressure drop is negligible. A{" "}
        <strong>reduced-bore valve</strong>{" "}creates a minor restriction but is more compact and lower cost. In custody
        transfer metering, pipeline integrity testing, and pigging operations, full-bore is often a contractual
        requirement.
      </P>

      <H3>How Ball Valves Perform in Practice</H3>
      <P>
        The quarter-turn operation isn&apos;t just convenient — it has direct operational implications. In emergency
        isolation scenarios, a ball valve can be manually closed in under a second, or actuated pneumatically in{" "}
        <strong>under 0.5 seconds</strong>{" "}with a spring-return actuator. This speed is critical in gas systems, chemical
        dosing lines, and safety interlock circuits.
      </P>
      <Cards items={APPLICATION_CARDS} columns={3} />

      <H2>What Is a Gate Valve?</H2>
      <P>
        A <strong>gate valve</strong>{" "}uses a flat or wedge-shaped gate (disc) that moves linearly — perpendicular to flow
        — to open or close the valve. Operated by a <strong>rising or non-rising stem</strong>{" "}with a handwheel, full
        operation typically requires <strong>10–15 complete turns</strong>. When fully open, the gate retracts entirely
        into the bonnet, leaving the full bore unobstructed.
      </P>
      <P>
        This is the gate valve&apos;s core advantage: <strong>minimal flow resistance when fully open</strong>. There is no
        ball, disc, or plug in the flow path — fluid passes straight through with near-zero turbulence. In large-diameter
        water transmission mains, irrigation networks, and municipal water systems, this characteristic makes gate valves
        an appropriate and cost-effective choice.
      </P>
      <Callout type="warning">
        <strong>Critical limitation:</strong>{" "}Gate valves should never be used for throttling. Operating a gate valve in a
        partially open position causes the gate and seats to vibrate under flow turbulence, accelerating wear and leading
        to premature failure. They are designed to be either <strong>fully open or fully closed</strong>{" "}— nothing in
        between.
      </Callout>

      <H2>Ball Valve vs Gate Valve: Technical Comparison</H2>
      <VersusPair />
      <DataTable head={["Feature", "Ball Valve", "Gate Valve"]} rows={COMPARISON.map((r) => [r.f, r.b, r.g])} minWidth={600} />
      <Callout type="tip">
        <strong>The key takeaway:</strong>{" "}Ball valves offer superior sealing, faster operation, and lower long-term
        maintenance — making them the preferred choice in the majority of modern industrial, commercial, and utility
        applications. Gate valves retain a role in large-diameter, low-cycle applications where upfront cost and
        unrestricted flow are the primary drivers.
      </Callout>

      <H2>Where Ball Valves Are Used — Industry by Industry</H2>

      <H3>Oil &amp; Gas</H3>
      <P>
        Ball valves are a <strong>widely used isolation valve</strong>{" "}in upstream, midstream, and downstream oil and gas.
        Full-bore trunnion-mounted ball valves are commonly specified on trunk pipelines because their unobstructed bore
        allows <strong>pigging</strong>{" "}(pipeline inspection and cleaning); through-conduit gate valves are also used where
        a piggable bore is needed. In high-pressure and subsea service, <strong>metal-seated trunnion ball valves</strong>{" "}
        are one option alongside gate valves, with ratings up to ASME Class 2500 (approximately 425 bar at ambient
        temperature).
      </P>

      <H3>Water &amp; Wastewater</H3>
      <P>
        For <strong>smaller-diameter isolations</strong>{" "}— service connections, meter isolation, pump protection — ball
        valves are standard. For <strong>large-diameter mains</strong>{" "}(DN300 and above), gate valves (or butterfly valves)
        are typically more cost-effective. Tameson notes that in water treatment,{" "}
        <strong>ball valves are preferred for clean water isolation</strong>{" "}while gate valves are more common in raw water
        and large-bore distribution mains where cost per DN is a primary factor.
      </P>

      <H3>Chemical &amp; Pharmaceutical</H3>
      <P>
        Ball valves dominate in chemical processing due to their <strong>chemical compatibility</strong>{" "}(PTFE seats,
        PFA-lined bodies, Hastelloy or duplex stainless trim) and <strong>clean bore design</strong>{" "}that minimises dead
        legs where contamination can accumulate. In pharmaceutical manufacturing (GMP environments),{" "}
        <strong>top-entry ball valves</strong>{" "}are specified because they can be maintained in-line — the ball and seats
        are accessible without removing the valve body from the pipeline, reducing contamination risk.
      </P>

      <H3>Fire Protection &amp; Safety Systems</H3>
      <P>
        OS&amp;Y (Outside Screw &amp; Yoke) gate valves are still widely used as control valves on wet sprinkler systems,
        as their <strong>open stem position</strong>{" "}provides a visible indication of valve state required by NFPA 13.
        However, <strong>UL/FM-listed ball valves</strong>{" "}are increasingly used in the same role — particularly in
        retrofit projects — as their compact form factor and faster operation offer installation and maintenance
        advantages in confined ceiling voids.
      </P>

      <H3>Power Generation</H3>
      <P>
        High-pressure steam and feedwater systems in power plants often use <strong>metal-seated ball valves</strong>{" "}that
        can handle temperatures above 300°C and pressures above 150 bar. The <strong>fire-safe design</strong>{" "}requirement
        (API 607 or API 6FA) — where the valve maintains isolation even if soft seats are destroyed by fire — is a
        standard specification in power and refining applications, and ball valves can be designed to this standard.
      </P>

      <H2>Types of Ball Valves: Which Do You Need?</H2>
      <P>
        The ball valve family covers a wide range of designs. Selecting the right type isn&apos;t just about matching
        pressure and temperature — it&apos;s about understanding the mechanical demands of the specific application.
      </P>
      <DataTable head={["Type", "Key Feature", "Typical Application"]} rows={TYPES.map((r) => [r.t, r.f, r.a])} minWidth={600} />
      <Callout type="note">
        <strong>Note on V-Port valves:</strong>{" "}V-port and characterized ball valves are the exception to the &quot;no
        throttling&quot; rule. Their shaped bore creates a predictable flow characteristic (equal percentage or linear) as
        the valve opens, making them suitable for control valve duty. Standard ball valves should still never be used for
        throttling.
      </Callout>

      <H2>Advantages of Ball Valves</H2>
      <UL
        items={ADVANTAGES.map((item) => (
          <>
            <strong>{item.bold}</strong>
            {item.text}
          </>
        ))}
      />

      <H2>Limitations &amp; Where Gate Valves Still Win</H2>
      <Callout type="warning">
        <strong>Throttling damage:</strong>{" "}Operating a standard ball valve in a partially open position causes the soft
        seats to be eroded by the high-velocity jet passing through the restricted bore. This typically manifests as
        visible scoring on the ball surface and leakage past the downstream seat. The damage is often irreversible.
      </Callout>

      <H3>Water Hammer</H3>
      <P>
        The same quarter-turn speed that makes ball valves excellent for isolation creates a risk of{" "}
        <strong>water hammer</strong>{" "}in liquid-filled systems. Rapidly stopping flow in a pipe causes a pressure wave that
        can stress pipework, joints, and connected equipment. In high-velocity water systems, a{" "}
        <strong>slow-close actuator</strong>{" "}(3–5 second close time) or a pipeline surge arrestor should be specified
        alongside the ball valve.
      </P>

      <H3>Large Diameter Cost</H3>
      <P>
        For valves above DN200–250, the cost of a full-bore ball valve with trunnion mounting escalates significantly. In
        large-diameter water transmission mains — typically DN300 to DN1200 —{" "}
        <strong>gate valves or butterfly valves</strong>{" "}often provide a more economical solution where the operating
        cycle frequency is low (once or twice per year). According to Arranps and Flowmag, this is the primary reason gate
        valves remain prevalent in municipal water infrastructure despite their technical limitations.
      </P>

      <H3>Cavity Trapping</H3>
      <P>
        The body cavity of a ball valve — the space between the ball and the body — can trap fluid. In services handling{" "}
        <strong>liquids that vaporise</strong>{" "}or <strong>thermally expand</strong>{" "}(LPG, cryogenic fluids, condensate),
        this trapped fluid can create dangerous over-pressurisation.{" "}
        <strong>Double-block-and-bleed (DBB) ball valves</strong>{" "}or cavity relief valves are specified to manage this risk
        in such services.
      </P>

      <H2>How to Choose: A Decision Framework</H2>
      <Finder title="What does your valve need to do?" hint="Pick the requirement that matters most for your duty." options={VALVE_FINDER} />
      <Toggle
        kicker="Decision framework"
        title="Ball valve or gate valve: the full checklist"
        a={{
          label: "Ball valve",
          content: (
            <>
              <P>
                <strong>Choose a Ball Valve when:</strong>
              </P>
              <UL items={CHOOSE_BALL} />
            </>
          ),
        }}
        b={{
          label: "Gate valve",
          content: (
            <>
              <P>
                <strong>Gate Valves may still be appropriate when:</strong>
              </P>
              <UL items={CHOOSE_GATE} />
            </>
          ),
        }}
      />

      <H2>Final Thoughts</H2>
      <P>
        The <strong>ball valve vs gate valve</strong>{" "}question looks simple on the surface — but in practice it sits at the
        intersection of fluid mechanics, materials science, safety standards, and lifecycle economics. Ball valves have,
        over the past two decades, displaced gate valves across most industrial and commercial applications, not because
        they&apos;re universally superior, but because they&apos;re{" "}
        <strong>more reliable, faster to operate, easier to automate, and cheaper to maintain</strong>{" "}in the applications
        that matter most.
      </P>
      <P>
        Gate valves retain a place in large-diameter utility work and low-cycle applications — but that window is
        narrowing as trunnion ball valve costs continue to fall and <strong>tighter leakage requirements</strong>{" "}become
        more common across water, gas, and process industries.
      </P>

      <CTA
        title="Need Help Specifying the Right Valve?"
        body="Talk to our technical team. Whether you're looking at an isolation duty in a gas system, a chemical processing application, or a high-cycle automated line — we'll help you select the right valve type, material, and end connection for your exact conditions."
        primary={{ label: "TALK TO OUR TEAM", href: "/contact" }}
      />

      <RelatedLinks title="References" links={REFERENCES} />
    </ArticleLayout>
  );
}
