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
  Figure,
  FAQ,
  CTA,
  RelatedLinks,
} from "../components/Article";

const SLUG = "/news/butterfly-valve-vs-ball-valve-vs-gate-valve";
const URL = `https://www.valvenok.com${SLUG}`;
const COVER =
  "https://pblol2.blob.core.windows.net/valvenok-images/blogs/butterfly-valve-vs-ball-valve-vs-gate-valve.jpg";
const VF7_IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/CENTRIC__25C11iulkk.jpg";
const HEADLINE = "Butterfly Valve vs Ball Valve vs Gate Valve: When a Butterfly Valve Wins";
const DESCRIPTION =
  "Butterfly valve vs ball valve vs gate valve: compare weight, length, cost and shut-off, learn when to use a butterfly valve, and the 5 questions to ask first.";

/* Pastels used on the rest of the site */
const P_MINT = { soft: "#EAF8E4", line: "#9BE08C", ink: "#2E8B1E" };
const P_SKY = { soft: "#E3F3FF", line: "#8FC9F2", ink: "#1F6FB2" };
const P_SUN = { soft: "#FFF5D6", line: "#FFD978", ink: "#8A6100" };
const INK = "#1E2830";

/* ───────────── diagram 1: the three valves on the same line ───────────── */
function SameLineDiagram() {
  const cols = [
    { name: "Butterfly", a: "Slim and light", b: "Quarter turn", c: P_MINT },
    { name: "Ball", a: "Long and heavy at large sizes", b: "Quarter turn", c: P_SKY },
    { name: "Gate", a: "Tall, full bore", b: "Multi-turn", c: P_SUN },
  ];
  return (
    <Box component="figure" sx={{ m: 0, my: 4.5 }}>
      <Box sx={{ borderRadius: T.radius, border: `1px solid ${T.border}`, background: `linear-gradient(160deg, ${P_MINT.soft} 0%, #FFFFFF 55%, ${P_SKY.soft} 100%)`, p: { xs: 1.5, md: 3 } }}>
        <svg viewBox="0 0 900 360" width="100%" role="img" aria-label="Butterfly vs ball vs gate valve: a slim butterfly valve, a long ball valve and a tall gate valve on the same line">
          <line x1="20" y1="200" x2="880" y2="200" stroke={INK} strokeOpacity="0.25" strokeWidth="2" strokeDasharray="8 8" />
          {/* butterfly */}
          <rect x="125" y="140" width="50" height="120" rx="12" fill="#fff" stroke={INK} strokeWidth="3" />
          <ellipse cx="150" cy="200" rx="9" ry="52" fill={P_MINT.line} />
          <line x1="150" y1="140" x2="150" y2="100" stroke={INK} strokeWidth="3" />
          <rect x="122" y="80" width="56" height="22" rx="6" fill={P_MINT.line} stroke={INK} strokeWidth="3" />
          {/* ball */}
          <rect x="355" y="145" width="190" height="110" rx="22" fill="#fff" stroke={INK} strokeWidth="3" />
          <circle cx="450" cy="200" r="44" fill={P_SKY.soft} stroke={P_SKY.line} strokeWidth="5" />
          <rect x="415" y="188" width="70" height="24" rx="4" fill={P_SKY.line} />
          <line x1="450" y1="145" x2="450" y2="112" stroke={INK} strokeWidth="3" />
          <line x1="450" y1="112" x2="560" y2="112" stroke={INK} strokeWidth="7" strokeLinecap="round" />
          {/* gate */}
          <rect x="690" y="145" width="120" height="110" rx="16" fill="#fff" stroke={INK} strokeWidth="3" />
          <rect x="740" y="160" width="20" height="80" rx="4" fill={P_SUN.line} />
          <rect x="730" y="55" width="40" height="90" rx="6" fill="#fff" stroke={INK} strokeWidth="3" />
          <line x1="750" y1="55" x2="750" y2="28" stroke={INK} strokeWidth="3" />
          <ellipse cx="750" cy="24" rx="48" ry="9" fill={P_SUN.soft} stroke={INK} strokeWidth="3" />
          {cols.map((c, i) => {
            const x = [150, 450, 750][i];
            return (
              <g key={c.name} textAnchor="middle" fontFamily="inherit">
                <text x={x} y="298" fontSize="24" fontWeight="800" fill={INK}>{c.name}</text>
                <text x={x} y="324" fontSize="15" fill="#55616C">{c.a}</text>
                <text x={x} y="346" fontSize="15" fontWeight="700" fill={c.c.ink}>{c.b}</text>
              </g>
            );
          })}
        </svg>
      </Box>
      <Box component="figcaption" sx={{ mt: 1.25, fontSize: "0.85rem", color: T.muted, textAlign: "center" }}>
        Same line size, very different valves. Simplified diagrams, not to scale.
      </Box>
    </Box>
  );
}

/* ───────────── diagram 2: centric, double eccentric, triple offset ───────────── */
function OffsetDiagram() {
  const types = [
    { name: "Centric", rot: 0, stem: [0, 0], lines: ["Stem through the disc centre", "Disc rubs the soft seat"], use: "Water, air, general service", c: P_MINT },
    { name: "Double eccentric", rot: -8, stem: [10, 12], lines: ["Stem offset behind the disc", "Disc lifts off the seat"], use: "Higher pressure, less wear", c: P_SKY },
    { name: "Triple offset", rot: -16, stem: [16, 14], lines: ["Offset stem + angled cone seat", "No rubbing, metal seat"], use: "Hot, high pressure, fire safe", c: P_SUN },
  ];
  return (
    <Box component="figure" sx={{ m: 0, my: 4.5 }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 1.5 }}>
        {types.map((t) => (
          <Box key={t.name} sx={{ borderRadius: T.radius, border: `1px solid ${T.border}`, background: `linear-gradient(160deg, ${t.c.soft} 0%, #FFFFFF 80%)`, p: 2.5, textAlign: "center" }}>
            <svg viewBox="0 0 200 200" width="150" height="150" role="img" aria-label={`${t.name} butterfly valve: ${t.lines.join(", ")}`}>
              <circle cx="100" cy="100" r="88" fill="#fff" stroke={INK} strokeWidth="3" />
              <circle cx="100" cy="100" r="74" fill="none" stroke={t.c.line} strokeWidth="6" />
              <ellipse cx="100" cy="100" rx="72" ry="13" fill={t.c.soft} stroke={INK} strokeWidth="2.5" transform={`rotate(${t.rot} 100 100)`} />
              <circle cx={100 + t.stem[0]} cy={100 + t.stem[1]} r="7" fill={INK} />
            </svg>
            <Box sx={{ mt: 1, fontWeight: 800, fontSize: "1.1rem", color: T.ink }}>{t.name}</Box>
            {t.lines.map((l) => (
              <Box key={l} sx={{ fontSize: "0.9rem", color: T.body, lineHeight: 1.5 }}>{l}</Box>
            ))}
            <Box sx={{ mt: 1, display: "inline-block", px: 1.5, py: 0.5, borderRadius: 999, bgcolor: t.c.soft, color: t.c.ink, fontWeight: 700, fontSize: "0.8rem" }}>{t.use}</Box>
          </Box>
        ))}
      </Box>
      <Box component="figcaption" sx={{ mt: 1.25, fontSize: "0.85rem", color: T.muted, textAlign: "center" }}>
        Dark dot = stem position. Simplified, not to scale.
      </Box>
    </Box>
  );
}

const TAKEAWAYS = [
  "On large lines, a butterfly valve is usually the lightest, shortest and cheapest of the three.",
  "Ball valves still win at 2\" and below, at high pressure in compact sizes, and where the line must be pigged.",
  "Gate valves give a full bore but are heavy, tall and slow to operate; some sites still specify them.",
  "Centric suits water, air and general service; double eccentric and triple offset handle higher pressure, heat and fire-safe duty.",
  "Settle media, temperature, size, pressure and shut-off before you ask for a quote.",
];

const FAQS = [
  {
    q: "When should you use a butterfly valve instead of a ball valve?",
    a: "Use a butterfly valve on larger lines, roughly 4\" and above, where weight, installed length and cost matter, and where the media and pressure suit its seat. On small lines needing tight shut-off at high pressure, a ball valve is usually the better choice.",
  },
  {
    q: "Is a butterfly valve better than a gate valve?",
    a: "For most large-bore water and general service lines, yes: a butterfly valve is lighter, shorter, cheaper and quarter turn. A gate valve is still used where a fully clear bore is needed or where a site standard specifies one.",
  },
  {
    q: "Can a butterfly valve be used for throttling?",
    a: "Yes. Butterfly valves are suitable for flow control as well as isolation, which gate valves are not. Check the seat and disc suit the flow conditions.",
  },
  {
    q: "What is a triple offset butterfly valve?",
    a: "A butterfly valve with three offsets (two in the stem position, one in the seat angle), so the disc meets the seat without rubbing. That allows metal seats for hot, high-pressure and fire-safe service.",
  },
  {
    q: "Can butterfly valves be automated?",
    a: "Yes. A butterfly valve with an ISO 5211 mounting flange takes a pneumatic or electric actuator directly, as part of a complete actuated package.",
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
      datePublished: "2026-11-24",
      dateModified: "2026-11-24",
      author: { "@type": "Organization", name: "Valvenok" },
      publisher: {
        "@type": "Organization",
        name: "Valvenok Ltd",
        logo: { "@type": "ImageObject", url: "https://pblol2.blob.core.windows.net/valvenok-images/valvenok-new-logo.jpeg" },
      },
      about: ["butterfly valve", "ball valve", "gate valve", "butterfly valve selection", "triple offset butterfly valve"],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function ButterflyVsBallVsGatePage() {
  return (
    <ArticleLayout
      schema={schema}
      meta={{
        slug: SLUG,
        category: "Technical Guide",
        title: HEADLINE,
        dek: "Weight, length, cost and shut-off compared, when to use a butterfly valve (and when not to), and five questions to settle before you ask for a quote.",
        author: "Valvenok Team",
        date: "November 2026",
        readMinutes: 7,
        cover: COVER,
        coverAlt: "Butterfly valve vs ball valve vs gate valve selection guide",
      }}
    >
      <Lead>
        On a large line, the cheapest valve to buy isn&apos;t always the cheapest valve to run. When you compare a
        butterfly valve vs a ball valve vs a gate valve, the right answer depends on the line, not on habit.
      </Lead>

      <KeyTakeaways items={TAKEAWAYS} />

      <P>
        Say you&apos;re replacing the isolation valve on a DN300 cooling water line. A gate valve is the traditional
        choice, a ball valve feels like the safe one, and a butterfly valve is the lightest and shortest of the three.
        All three will stop the flow. The right choice depends on what the line carries, how hot it runs, the pressure,
        the space you have, and how tightly the valve has to seal.
      </P>
      <P>
        This guide compares the three valve types on a real line, explains when to use a butterfly valve (and when
        not to), and gives you five questions to settle before you ask for a quote.
      </P>

      <H2>Butterfly Valve vs Ball Valve vs Gate Valve: How They Compare</H2>
      <SameLineDiagram />
      <DataTable
        layout="table"
        head={["", "Butterfly valve", "Ball valve", "Gate valve"]}
        rows={[
          ["Weight and length at large sizes", "Lightest and shortest, as the body is a slim disc between flanges", "Heavy and long at large sizes", "Heavy and tall, with a long stem"],
          ["Operation", "Quarter turn, easy to automate", "Quarter turn, easy to automate", "Multi-turn, slower to operate"],
          ["Cost at large bore", "Usually the lowest", "Rises steeply with size", "Moderate, but heavy to install"],
          ["Flow path", "The disc stays in the flow, causing some pressure drop", "Full-bore options with little restriction", "Full bore when open"],
          ["Throttling", "Suitable for flow control", "Some designs only", "Not recommended"],
          ["Pigging and solids", "Not suitable, as the disc is in the way", "Full-bore types can be pigged", "Full bore, but solids can stop the gate seating"],
        ]}
      />
      <P>
        In short: above a few inches in diameter, where space, weight and cost matter, a butterfly valve is usually the
        better choice. Ball and gate valves still win in some situations, covered below. Our guide to{" "}
        <A href="/news/ball-valve-vs-gate-valve">ball and gate valves</A> compares those two in more detail.
      </P>

      <H2>Quick Guide: Which Valve Should You Choose?</H2>
      <Finder
        kicker="Quick answer"
        title="What does your line look like?"
        hint="Pick the closest match to see the best first choice."
        options={[
          { label: "Large line (above about 4\"), water, air or general service, limited space", result: <><strong>Centric butterfly valve.</strong> Light, short and the lowest cost at large bore.</>, href: "/valves/industrial-valves/butterfly-valves/centric-butterfly-valve", linkLabel: "See centric butterfly valves" },
          { label: "Large line, higher pressure class, less seat wear wanted", result: <><strong>Double eccentric butterfly valve.</strong> The disc lifts off the seat as it opens.</>, href: "/valves/industrial-valves/butterfly-valves/double-eccentric-butterfly-valve", linkLabel: "See double eccentric valves" },
          { label: "Hot hydrocarbons, steam, high pressure class or fire-safe duty", result: <><strong>Triple offset butterfly valve.</strong> No rubbing, so it can take a metal seat.</>, href: "/valves/industrial-valves/butterfly-valves/triple-offset-butterfly-valve", linkLabel: "See triple offset valves" },
          { label: "Small line (2\" and below), tight shut-off", result: <><strong>Ball valve.</strong> Simpler at small sizes and costs about the same.</> },
          { label: "Line must be pigged or needs a fully clear bore", result: <><strong>Full-bore ball or gate valve.</strong> A butterfly disc sits in the flow.</> },
          { label: "Infrequent isolation where the site standard specifies it", result: <><strong>Gate valve.</strong> Follow the site standard.</> },
        ]}
      />

      <H2>Butterfly Valve Selection: Five Questions to Settle First</H2>
      <Stepper
        kicker="Before you ask for a quote"
        title="Five questions before you spec a butterfly valve"
        steps={[
          {
            title: "What does the line carry?",
            body: (
              <>
                The media decides the seat and disc materials. Clean water, air and many process fluids suit a
                soft-seated (rubber-lined) butterfly valve. Hydrocarbons, steam, abrasive slurries or aggressive
                chemicals may need a metal seat, a PTFE-lined valve, or a different valve type altogether. For drinking
                water or food-grade lines, check the valve carries the right approval, such as NSF 61.
              </>
            ),
          },
          {
            title: "How hot or cold does it run?",
            body: "Soft seats have temperature limits that depend on the elastomer, so check the seat material, not just the body. Above a soft seat's limit, or for cryogenic service, you'll need a metal-seated or specialist design, such as a triple offset butterfly valve.",
          },
          {
            title: "What size is the line?",
            body: "This is where butterfly valves earn their place. As the line gets bigger, a butterfly valve's savings in weight, length and cost grow too. At small sizes (roughly 2\" and below), a ball valve is often simpler and costs about the same.",
          },
          {
            title: "What is the pressure?",
            body: "Give the maximum operating pressure and the flange rating (for example PN16 or ANSI Class 150). Standard centric butterfly valves suit low to moderate pressures. For higher pressure classes, look at double eccentric or triple offset designs, or a ball valve.",
          },
          {
            title: "How tight does the shut-off need to be?",
            body: "\"Bubble tight\" shut-off is achievable with a soft-seated butterfly valve. If the valve must also be fire-safe, give zero leakage at high temperature, or seal in both directions under high differential pressure, a centric valve isn't enough. That's when to specify a double eccentric or triple offset valve.",
          },
        ]}
      />

      <H2>Centric vs Double Eccentric vs Triple Offset Butterfly Valves</H2>
      <P>
        A centric butterfly valve has the stem through the middle of the disc, which rubs on the seat through part of
        every stroke. That&apos;s fine for water, air and general service. For hot hydrocarbons, steam, high pressure
        classes or fire-safe duty, offset designs lift the disc off the seat as it opens, which reduces wear and allows
        metal seats.
      </P>
      <OffsetDiagram />
      <DataTable
        layout="table"
        head={["Type", "How it works", "Typical use", "Value Valves range"]}
        rows={[
          ["Centric", "Stem through the disc centre; soft seat", "Water, air, HVAC, general service", <>VF-7: DN40 to DN1800, 10 bar standard, 16 bar optional to DN600</>],
          ["Double eccentric", "Stem offset behind and to one side of the disc, so it lifts off the seat", "Higher pressure, process lines", "DN50 to DN1200, ANSI 150 and 300; soft, metal+PTFE or metal seat; API 607 fire safe"],
          ["Triple offset", "Double offset plus an angled cone seat, so the disc never rubs", "Hot, high pressure, hydrocarbons, fire-safe duty", "DN100 to DN1200, ANSI 150, 300 and 600; API 607 fire safe; -100 °C to +760 °C"],
        ]}
      />
      <P>
        Figures are from the Value Valves pages on valvenok.com; the{" "}
        <A href="/valves/industrial-valves/butterfly-valves/triple-offset-butterfly-valve">triple offset</A> page has
        full details.
      </P>

      <H2>Worked Example: When to Use a Butterfly Valve on a DN300 Water Line</H2>
      <Figure src={VF7_IMAGE} alt="Value Valves VF-7 centric butterfly valve, wafer type" caption="Value Valves VF-7 centric butterfly valve" />
      <P>
        Back to the DN300 cooling water line. Here&apos;s how the five questions apply to the Value Valves{" "}
        <A href="/valves/industrial-valves/butterfly-valves/centric-butterfly-valve">VF-7 centric range</A>:
      </P>
      <DataTable
        layout="table"
        head={["Question", "VF-7 centric butterfly valve"]}
        rows={[
          ["Media", "Soft seat options: NBR, EPDM, EPT, white EPT, neoprene, silicone and FKM. NSF 61 and NSF 372 certified for potable water"],
          ["Temperature", "-20 °C to +204 °C across the seat options (each seat material has its own limit)"],
          ["Size", "DN40 to DN1800 (1½\" to 72\"), as wafer (VF-730), lug (VF-733) or flanged (VF-737)"],
          ["Pressure", <>10 bar (150 psi) bi-directional bubble-tight as standard; 16 bar (230 psi) on request for DN40 to DN600. Flange drilling to PN10, PN16, ANSI 125/150, BS Table E or JIS 10K</>],
          ["Shut-off", "Bi-directional bubble-tight shut-off, designed to API 609 and tested to ISO 5208"],
        ]}
      />
      <Callout type="tip" title="Typical starting point">
        For a DN300 water line at up to 10 bar, a lug-type VF-733 with an EPDM seat would be a typical starting point.
        It&apos;s lighter, shorter and quicker to operate than an equivalent gate valve.
      </Callout>

      <H3>Actuated Butterfly Valve Packages</H3>
      <P>
        The VF-7 has an ISO 5211 mounting flange, so a pneumatic or electric <A href="/actuators">actuator</A> bolts
        straight on. We can supply the valve, actuator, mounting kit and limit switch box as one matched package, ready
        to install. For what sits around the valve, see our guide to{" "}
        <A href="/news/butterfly-valve-guide">instrumentation around a butterfly valve</A>.
      </P>

      <H2>Where Ball and Gate Valves Still Win</H2>
      <UL
        items={[
          <><strong>Small lines:</strong> at 2&quot; and below, a ball valve is usually simpler and costs about the same.</>,
          <><strong>Pigging or full-bore flow:</strong> a butterfly disc sits in the flow, so use a full-bore ball or gate valve.</>,
          <><strong>High pressure at small sizes:</strong> ball valves handle high pressure classes in compact sizes.</>,
          <><strong>Infrequent isolation on heavy-duty lines:</strong> a gate valve may still be the specified standard on some sites.</>,
        ]}
      />

      <Checklist
        kicker="Your enquiry"
        title="What to send us for a butterfly valve quote"
        items={[
          "Line size (DN or inches)",
          "Media, and whether it is clean, abrasive or chemical",
          "Minimum and maximum temperature",
          "Maximum operating pressure and flange rating",
          "Shut-off needed: bubble tight, fire safe or both directions",
          "Manual, gearbox or actuated (pneumatic or electric)",
        ]}
        emailSubject="Butterfly valve enquiry"
      />

      <FAQ title="Butterfly Valve FAQs" items={FAQS} />

      <CTA
        title="SEND US YOUR LINE DETAILS"
        body="Send us the line size, media and pressure, and we'll recommend the right butterfly valve, or tell you if a ball or gate valve suits your line better."
        primary={{ label: "Request a quote", href: "/contact" }}
        secondary={{ label: "See butterfly valves", href: "/valves/industrial-valves/butterfly-valves" }}
      />

      <RelatedLinks
        links={[
          { label: "Centric butterfly valves", href: "/valves/industrial-valves/butterfly-valves/centric-butterfly-valve" },
          { label: "Triple offset butterfly valves", href: "/valves/industrial-valves/butterfly-valves/triple-offset-butterfly-valve" },
          { label: "Ball valve vs gate valve", href: "/news/ball-valve-vs-gate-valve" },
          { label: "Butterfly valve instrumentation guide", href: "/news/butterfly-valve-guide" },
        ]}
      />
    </ArticleLayout>
  );
}
