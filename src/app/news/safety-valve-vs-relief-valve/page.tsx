"use client";

import * as React from "react";
import {
  ArticleLayout,
  Lead,
  H2,
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

const SLUG = "/news/safety-valve-vs-relief-valve";
const URL = `https://www.valvenok.com${SLUG}`;
const COVER = "https://pblol2.blob.core.windows.net/panam-images/products/reflief-valves/relief-no-bg.png";
const HEADLINE = "Safety Valve vs Relief Valve: How They Work and How to Choose";
const DESCRIPTION =
  "Safety valve vs relief valve explained: how each works, key terms like set pressure and blowdown, sizing basics, UK rules under PSSR, and how to choose.";
const HUB = "/valves/safety-relief-valves";

const TAKEAWAYS = [
  "A safety valve pops fully open at its set pressure. It is used on gas, steam and air.",
  "A relief valve opens gradually, in proportion to the overpressure. It is used on liquids.",
  "A safety relief valve can work either way, depending on the service.",
  "The set pressure must not exceed the MAWP of the equipment it protects.",
  "In the UK, safety valves are part of the written scheme of examination under PSSR 2000.",
];

const AT_A_GLANCE = {
  head: ["", "Safety valve", "Relief valve", "Safety relief valve"],
  rows: [
    ["Opening action", "Pops open to full lift", "Opens gradually, in proportion to overpressure", "Either, depending on the service"],
    ["Typical fluid", "Steam, gas, air", "Liquids", "Gases or liquids"],
    ["Typical use", "Boilers, air receivers, compressors, gas vessels", "Pumps, hydraulic systems, liquid-filled lines", "Process vessels with mixed duties"],
    ["Main concern", "Releasing large gas volumes fast", "Avoiding sudden pressure surges in liquids", "Covering both duties with one valve"],
  ],
};

const HOW_IT_WORKS = [
  { title: "Below set pressure", body: "The spring force is greater than the force of the process pressure on the disc, so the valve stays closed." },
  { title: "At set pressure", body: "The forces balance and the valve starts to open." },
  { title: "In a safety valve, the disc pops to full lift", body: "A shaped chamber around the disc (the huddling chamber) catches the escaping gas. The lifting force jumps, and the disc snaps to full lift." },
  { title: "The valve discharges", body: "Flow continues until the pressure in the system falls." },
  { title: "It recloses below the set pressure", body: "The valve reseats at a pressure lower than the set pressure. The difference is the blowdown." },
];

const TERMS = {
  head: ["Term", "Meaning"],
  rows: [
    ["Set pressure", "The pressure at which the valve starts to open"],
    ["Overpressure", "Pressure rise above set pressure, as a %. Commonly 10% for pressure vessels, but check the code that applies"],
    ["Accumulation", "Pressure rise above the equipment’s maximum allowable working pressure (MAWP) during relief"],
    ["Blowdown", "Difference between set pressure and reseating pressure, as a % of set pressure"],
    ["Back pressure", "Pressure at the valve outlet. Built-up back pressure comes from the discharge flow itself"],
    ["Relieving capacity", "The flow the valve can pass at the stated overpressure"],
    ["Orifice", "The flow area. Flanged process valves use standard letter sizes (D to T) under API 526"],
    ["Cold differential test pressure", "The bench set pressure, adjusted for temperature and back pressure"],
  ],
};

const SIZING = [
  { title: "List the overpressure scenarios", body: "Blocked outlet, failed regulator or control valve, external fire, thermal expansion, cooling failure." },
  { title: "Find the worst case", body: "The scenario that needs the largest relieving flow." },
  { title: "Calculate the required orifice area", body: "For that flow at the allowed overpressure, normally to API 520 or ISO 4126." },
  { title: "Choose the next orifice size up", body: "Then check the inlet and outlet piping against the valve’s limits." },
];

const STANDARDS = {
  head: ["Standard", "What it covers"],
  rows: [
    ["ASME BPVC Section I", "Safety valves on boilers"],
    ["ASME BPVC Section VIII", "Pressure relief devices on pressure vessels"],
    ["API 520 Part I / Part II", "Sizing and selection / installation"],
    ["API 526", "Flanged steel pressure relief valves: dimensions and orifice sizes"],
    ["API 527", "Seat tightness testing"],
    ["ISO 4126-1", "Safety valves for protection against excessive pressure"],
  ],
};

const CHECKLIST = [
  "Fluid and its state at relief (gas, steam, liquid, two-phase)",
  "Set pressure and the MAWP of the protected equipment",
  "Required relieving capacity and the scenario it comes from",
  "Relieving temperature and normal operating temperature",
  "Back pressure: discharge to atmosphere or to a header",
  "Inlet and outlet connections and size",
  "Body, trim and seal materials",
  "Code and certificates required (ASME, PED/UKCA, ISO 4126)",
];

const FAQS = [
  { q: "What is the main difference between a safety valve and a relief valve?", a: "A safety valve pops fully open at its set pressure and is used for gases and steam. A relief valve opens gradually in proportion to the overpressure and is used for liquids." },
  { q: "What is a safety relief valve?", a: "A safety relief valve can act as a safety valve or a relief valve depending on the service, popping open on gas and opening proportionally on liquid." },
  { q: "What is blowdown on a safety valve?", a: "Blowdown is the difference between the set pressure and the pressure at which the valve recloses, usually given as a percentage of set pressure." },
  { q: "How often should safety valves be tested?", a: "In the UK, the interval is set by the system’s written scheme of examination under the Pressure Systems Safety Regulations 2000, drawn up by a competent person. It depends on the service, the valve and its history." },
  { q: "Can I use a relief valve on steam?", a: "Steam and other gases normally need a safety valve or safety relief valve certified for that service, because they must be released quickly. A proportional relief valve is not normally suitable for boiler protection." },
  { q: "Why does my safety valve chatter?", a: "Common causes are an oversized valve, high inlet pressure loss from a long or narrow inlet pipe, or excessive back pressure." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${URL}#article`,
      headline: HEADLINE,
      description: DESCRIPTION,
      mainEntityOfPage: URL,
      image: COVER,
      datePublished: "2026-11-27",
      dateModified: "2026-11-27",
      author: { "@type": "Organization", name: "Valvenok" },
      publisher: {
        "@type": "Organization",
        name: "Valvenok Ltd",
        url: "https://www.valvenok.com/",
        logo: { "@type": "ImageObject", url: "https://pblol2.blob.core.windows.net/valvenok-images/valvenok-new-logo.jpeg" },
      },
      inLanguage: "en-GB",
      about: ["safety valve", "relief valve", "pressure relief valve", "safety relief valve", "blowdown", "set pressure"],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function SafetyValveVsReliefValvePage() {
  return (
    <ArticleLayout
      schema={schema}
      meta={{
        slug: SLUG,
        category: "Technical Guide",
        title: HEADLINE,
        dek: "How each type works, the terms on a datasheet, sizing and installation basics, and the UK rules that apply.",
        date: "November 2026",
        readMinutes: 9,
        cover: COVER,
        coverFit: "contain",
        coverAlt: "Spring-loaded instrumentation relief valve",
      }}
    >
      <Lead>
        A <strong>safety valve</strong> opens fully and almost instantly when pressure reaches its set point, so it can
        release gas, steam or air fast. A <strong>relief valve</strong> opens gradually, in proportion to how far pressure
        rises above the set point, which suits liquids. Both are <strong>pressure relief valves</strong>: automatic
        devices that stop pressure rising to a level that could damage equipment or hurt people. This guide explains how
        each type works, the terms you will see on a datasheet, the basics of sizing and installation, and the UK rules
        that apply.
      </Lead>

      <KeyTakeaways items={TAKEAWAYS} />

      <Finder
        kicker="Quick answer"
        title="What are you protecting?"
        hint="Pick the duty to see which type to start with."
        options={[
          { label: "A boiler, air receiver or gas vessel", result: <><strong>Safety valve</strong>, certified to the code that applies (for example ASME Section I or VIII, or PED/UKCA). Gas must be released fast.</>, href: HUB, linkLabel: "See our safety and relief valve range" },
          { label: "A pump, hydraulic circuit or liquid line", result: <><strong>Relief valve.</strong> It opens in proportion to the overpressure and avoids pressure surges in the liquid.</>, href: HUB, linkLabel: "See our safety and relief valve range" },
          { label: "Liquid trapped between two closed valves", result: <><strong>Thermal relief valve.</strong> A small relief valve that vents the extra volume as the liquid warms up.</> },
          { label: "An instrument, sampling or test line", result: <><strong>Instrumentation relief valve.</strong> Compact, spring-adjustable and threaded to suit tube and pipe fittings.</>, href: "/valves/instrumentation-valves/relief-valves", linkLabel: "View instrumentation relief valves" },
        ]}
      />

      <H2>Safety valve vs relief valve at a glance</H2>
      <DataTable {...AT_A_GLANCE} />
      <P>
        A <strong>rupture disc</strong> is a different device: a thin membrane that bursts at a set pressure and does not
        reclose. It is often fitted upstream of a relief valve to protect the valve from the process fluid.
      </P>

      <H2>How a safety valve works</H2>
      <P>
        Most safety and relief valves are spring-loaded. A spring holds a disc against the seat, and process pressure
        pushes up on the disc.
      </P>
      <Stepper kicker="Step by step" title="From closed to reseated" steps={HOW_IT_WORKS} />
      <P>
        A relief valve has no huddling chamber effect, so the disc lifts steadily as pressure rises. That gentler action
        avoids pressure surges in liquids, which cannot expand like gases.
      </P>

      <H2>Key terms on a safety valve datasheet</H2>
      <DataTable {...TERMS} />

      <H2>Types of pressure relief device</H2>
      <UL
        items={[
          <><strong>Conventional spring-loaded safety valves:</strong> the standard choice where back pressure is low.</>,
          <><strong>Balanced bellows valves:</strong> a bellows shields the disc from back pressure, so they work with higher or variable back pressure.</>,
          <><strong>Pilot-operated valves:</strong> a small pilot valve controls a larger main valve. They hold tight closer to set pressure and suit large flows and high back pressure.</>,
          <><strong>Proportional relief valves:</strong> open gradually; common on hydraulic and instrument lines.</>,
          <><strong>Thermal relief valves:</strong> small relief valves that protect liquid trapped between closed valves from thermal expansion.</>,
          <><strong>Rupture discs:</strong> non-reclosing; used alone or with a relief valve.</>,
          <><strong>Thermally activated relief devices:</strong> fusible or glass-bulb devices that vent a gas cylinder in a fire, as on many hydrogen cylinder valves.</>,
        ]}
      />
      <P>
        See our <A href={HUB}>safety and relief valve range</A> for instrumentation relief valves, high-pressure relief
        valves, rupture discs and thermal relief devices from our partner brands.
      </P>

      <H2>Sizing basics</H2>
      <P>Sizing is a job for a competent engineer, normally to API 520 or ISO 4126. The steps are:</P>
      <Stepper kicker="Sizing" title="Four steps to the right orifice" steps={SIZING} />
      <Callout type="warning" title="Do not oversize “to be safe”">
        An oversized valve can open, dump a burst of flow, close, and repeat rapidly. This is called chatter, and it
        damages the seat and disc.
      </Callout>

      <H2>Installation rules that prevent failures</H2>
      <UL
        items={[
          <><strong>Keep the inlet short.</strong> A common guideline (API 520 Part II) is to keep inlet pressure loss below 3% of set pressure. Higher losses cause chatter.</>,
          <><strong>Do not isolate it in service.</strong> If a block valve sits under a safety valve, it must be locked or car-sealed open, under a managed procedure.</>,
          <><strong>Mount it upright</strong> on top of the vessel or line, unless the manufacturer allows otherwise.</>,
          <><strong>Pipe the discharge to a safe place</strong>, supported so it does not load the valve body, with drainage for condensate.</>,
          <><strong>Check the back pressure</strong> against the valve’s limits, especially when several valves share a header.</>,
        ]}
      />

      <H2>Testing and maintenance in the UK</H2>
      <P>
        Under the <strong>Pressure Systems Safety Regulations 2000 (PSSR)</strong>, most pressure systems need a written
        scheme of examination drawn up or certified by a competent person. Protective devices, including safety valves,
        are part of that scheme. In practice this means:
      </P>
      <UL
        items={[
          "Periodic examination and set pressure testing at intervals in the written scheme",
          "Records of each test, adjustment and replacement",
          "Only competent people adjusting, repairing or resetting valves",
        ]}
      />
      <P>
        New safety valves placed on the UK market fall under the <strong>Pressure Equipment (Safety) Regulations 2016</strong>{" "}
        (UKCA). In the EU, safety accessories fall under the <strong>Pressure Equipment Directive 2014/68/EU</strong> (CE)
        and are generally classed as category IV. For the full duties, see the HSE’s{" "}
        <A href="https://www.hse.gov.uk/pubns/books/l122.htm">guidance on the Pressure Systems Safety Regulations (L122)</A>.
      </P>

      <H2>Common mistakes</H2>
      <Callout type="warning" title="Avoid these">
        <UL
          items={[
            <><strong>Setting above MAWP.</strong> The set pressure must not exceed the maximum allowable working pressure of the equipment it protects.</>,
            <><strong>Using an instrument relief valve where a certified safety valve is required.</strong> Instrument relief valves protect lines, not pressure vessels.</>,
            <><strong>Oversizing</strong>, which leads to chatter.</>,
            <><strong>Long or narrow inlet pipes</strong>, which also cause chatter.</>,
            <><strong>Ignoring back pressure</strong> when connecting to a shared vent header.</>,
            <><strong>Painting over or seizing the lifting lever</strong>, so the valve cannot be test-lifted.</>,
            <><strong>Skipping the written scheme</strong>, or letting test intervals lapse.</>,
          ]}
        />
      </Callout>

      <H2>Standards you will see</H2>
      <DataTable {...STANDARDS} />

      <H2>Enquiry checklist</H2>
      <Checklist
        kicker="Copy into your RFQ"
        title="Safety or relief valve enquiry checklist"
        items={CHECKLIST}
        emailSubject="Safety / relief valve enquiry"
      />

      <FAQ items={FAQS} />

      <CTA
        title="Find the right safety or relief valve"
        body="We supply pressure relief valves, high-pressure safety valves, rupture discs and thermal relief devices from specialist partner brands, from 50 psi instrument lines to 60,000 psi test systems. Send us the fluid, set pressure, capacity and connections."
        primary={{ label: "Request a quote", href: "/contact" }}
        secondary={{ label: "View safety and relief valves", href: HUB }}
      />

      <RelatedLinks
        links={[
          { label: "Safety and relief valves", href: HUB },
          { label: "Instrumentation relief valves", href: "/valves/instrumentation-valves/relief-valves" },
          { label: "L-port vs T-port 3-way ball valves", href: "/news/l-port-vs-t-port-3-way-ball-valve" },
          { label: "Ball valve vs gate valve", href: "/news/ball-valve-vs-gate-valve" },
        ]}
      />
    </ArticleLayout>
  );
}
