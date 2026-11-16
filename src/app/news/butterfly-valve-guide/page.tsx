"use client";

import {
  ArticleLayout,
  Lead,
  H2,
  P,
  UL,
  KeyTakeaways,
  Quote,
  FAQ,
  CTA,
  Tabs,
  Stepper,
} from "../components/Article";
import { T } from "@/src/app/Landing/modern/tokens";

const SLUG = "/news/butterfly-valve-guide";

const INTEGRATION = [
  {
    label: "Instrumentation Valves",
    desc: "Needle, ball, check, relief, gauge root, purge and toggle valves for high-pressure and standard-pressure circuits around butterfly valve installations.",
  },
  {
    label: "2-, 3- and 5-Valve Manifolds",
    desc: "For transmitter isolation and equalisation in differential pressure, level, and flow measurement loops.",
  },
  {
    label: "High-Pressure Fittings",
    desc: "Pipe fittings and cone & thread fittings from 10,000 to 60,000 psi for secure, traceable connections.",
  },
  {
    label: "Air Headers and Filters",
    desc: "Up to 20 outlets for distributing instrument air to multiple actuated butterfly valves, with inline filtration for air preparation.",
  },
  {
    label: "Relief and Check Valves",
    desc: "Overpressure protection and backflow prevention for pneumatic, hydraulic, and process circuits.",
  },
  {
    label: "Stainless Steel Tube and Pipe Fittings",
    desc: "Unions, reducers, gauge connectors, dielectric fittings, and adaptors for complete skid or system builds.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Specification or BOM Submission",
    body: "Share a datasheet, valve list, or complete bill of materials covering butterfly valves, associated instrumentation, and connection requirements.",
  },
  {
    num: "02",
    title: "Engineering Review and Product Mapping",
    body: "Valvenok's engineering team maps your requirements to appropriate instrumentation valves, manifolds, pipe fittings, air headers, and filters — taking into account pressure class, line size, media compatibility, required standards, NACE MR0175, and environmental conditions.",
  },
  {
    num: "03",
    title: "Technical and Documentation Package",
    body: "For each proposed product, Valvenok provides technical datasheets and supports full heat-code traceability across valves and fittings — designed to streamline end-client documentation, vendor approval, and inspection.",
  },
  {
    num: "04",
    title: "Availability and Delivery Planning",
    body: "Lead times and shipment options are confirmed for every line item on the quotation, so you can plan around project schedules and retrofit windows.",
  },
];

const FAQS = [
  {
    q: "Does Valvenok supply butterfly valves directly?",
    a: "Valvenok is focused on precision instrumentation valves, high-pressure valves, fittings, manifolds, and related components. The team can source and supply almost any instrumentation valve, fitting, manifold, or related component against a specification or bill of materials, and can support projects where butterfly valves are part of the overall valve and instrumentation package.",
  },
  {
    q: "How does Valvenok support triple offset butterfly valve installations?",
    a: "For triple offset butterfly valve applications, Valvenok provides the surrounding high-integrity instrumentation — needle valves, control valve solutions, manifolds, filters, and high-pressure fittings. This ensures that measurement, venting, equalisation, and overpressure protection around the triple offset valve meet the same performance and documentation standards as the primary isolation.",
  },
  {
    q: "Can Valvenok help with a pneumatic actuator butterfly valve system in the UK?",
    a: "Yes. Valvenok can support pneumatic actuator butterfly valve systems with air headers, isolation valves, filters, relief valves, and the necessary stainless steel tubing and fittings. Lead times for these items are confirmed on quotation.",
  },
  {
    q: "What information should I provide for a butterfly valve and instrumentation enquiry?",
    a: "For the fastest response, include line size, pressure rating, media, temperature, end connection standards, and any project-specific requirements such as NACE MR0175, hydrogen service, or offshore use. A full valve list or bill of materials enables the engineering team to map each butterfly valve to its associated instrumentation and connection hardware.",
  },
  {
    q: "Do you offer documentation and traceability for valves installed around a butterfly valve?",
    a: "Yes. Valvenok provides technical datasheets on every order and offers full heat-code material traceability across instrumentation valves, manifolds, and fittings — simplifying end-user documentation, inspection, and long-term asset management.",
  },
  {
    q: "Can Valvenok support hydrogen projects that use butterfly valves?",
    a: "Yes. Valvenok provides dedicated hydrogen product engineering and project support for large-scale electrolyser and refuelling infrastructure. Where butterfly valves are used for isolation or flow control, Valvenok can supply hydrogen-compatible instrumentation valves, manifolds, filters, and fittings, backed by appropriate material selection and documentation.",
  },
  {
    q: "What other valve types can Valvenok supply alongside butterfly valves?",
    a: "The range includes needle valves, floating stainless steel ball valve solutions, check valves, relief valves, manifolds, and high-pressure control valve technologies, as well as gate valves, globe valves, and bellows valve options — enabling a cohesive valve strategy around any butterfly valve population.",
  },
  {
    q: "How quickly can Valvenok respond to a butterfly valve enquiry?",
    a: "Valvenok aims to respond within 24 hours to specification or bill-of-material enquiries, including those that involve butterfly valve circuits. Lead times are confirmed on the quotation so proposals can be aligned with project schedules and required-on-site dates.",
  },
];


const TAKEAWAYS = [
  "Butterfly valves are widely used for quarter-turn shut-off and throttling in oil & gas, power, petrochemical, and hydrogen applications.",
  "The reliability of any butterfly valve installation depends on the surrounding instrumentation — manifolds, needle valves, fittings, filters, and air headers.",
  "Valvenok supplies the complete instrumentation layer around butterfly valve installations, from triple offset to pneumatically actuated variants.",
  "Lead times for instrumentation valves, manifolds, fittings and accessories are confirmed on every quotation.",
  "Full heat-code material traceability and NACE MR0175 available — documentation-ready support for critical projects.",
];

const TRIPLE_OFFSET = [
  "High-pressure needle valves, including HP series up to 60,000 psi, for precise isolation and metering",
  "Manifolds for differential pressure, level, and flow measurement across the butterfly valve",
  "Inline and T-type filters to protect downstream instrumentation from particulate contamination",
  "Control valve solutions in associated instrumentation circuits",
];

const PNEUMATIC = [
  "Precision needle valves and manifolds for actuator supply isolation and venting",
  "Air headers with up to 20 outlets for distributing instrument air to multiple actuated butterfly valves",
  "Filters for air preparation ahead of the actuator",
  "Relief valves and check valves to protect pneumatic and hydraulic actuation systems",
  "Pipe fittings, tube fittings, and adaptors to tie in control cabinets, solenoid panels, and field junction boxes",
];

const PORTFOLIO = [
  "Instrumentation needle valves up to 20,000 psig",
  "Floating ball valve solutions (2-way and 3-way) up to 10,000 psig",
  "Relief valves for overpressure protection in liquid and gas services",
  "Check valves and non-return valves for backflow prevention",
  "2-, 3-, and 5-valve manifolds for DP transmitters and gauge isolation",
  "High-pressure pipe and cone & thread fittings from 10,000 to 60,000 psi",
  "Stainless steel tube fittings, unions, reducers, gauge connectors, and dielectric fittings",
  "Gate valves, globe valves, and bellows valve options",
];

const INDUSTRIES = [
  "Oil & Gas",
  "Power Generation",
  "Hydrogen",
  "Petrochemical",
  "Offshore Energy",
  "Water Treatment",
  "Industrial Process",
];

/** Industry tags: no kit equivalent */
function Tags({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", margin: "32px 0", padding: 0, display: "flex", flexWrap: "wrap", gap: 8 }}>
      {items.map((t) => (
        <li
          key={t}
          style={{
            padding: "6px 14px",
            borderRadius: 999,
            background: T.greenSoft,
            border: "1px solid #CFEBC6",
            color: T.greenDark,
            fontSize: "0.85rem",
            fontWeight: 700,
          }}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function ButterflyValvePage() {
  return (
    <ArticleLayout
      meta={{
        slug: SLUG,
        category: "Technical Guide",
        title: "Butterfly Valve Instrumentation and Connection Packages",
        dek: "Triple offset, pneumatically actuated, and process butterfly valves — fully engineered from the primary isolation to the instrumentation layer",
        author: "Valvenok Team",
        date: "June 2026",
        readMinutes: 7,
        cover: "https://pblol2.blob.core.windows.net/valvenok-images/blogs/butterfly-valve-guide.jpg",
        coverAlt: "Butterfly valve instrumentation and connections: needle valve, manifold, relief valve, check valve and high-pressure fittings around a butterfly valve",
      }}
    >
      <Lead>
        Butterfly valves are widely used as quarter-turn shut-off and throttling devices in oil and gas, power,
        petrochemical, hydrogen, and general process applications. While the butterfly disc provides the primary
        isolation, the overall reliability of the circuit depends on the surrounding instrumentation valves, manifolds,
        pipe fittings, and connection hardware.
      </Lead>
      <P>
        Valvenok focuses on this critical instrumentation layer — supplying high-integrity valves, manifolds, fittings,
        and auxiliaries that integrate seamlessly around any butterfly valve installation, whether for on/off isolation,
        flow control, or emergency shutdown. The UK-based engineering team typically responds within 24 hours.
      </P>

      <KeyTakeaways title="Key Takeaways" items={TAKEAWAYS} />

      <H2>Integrated Solutions Around Butterfly Valves</H2>
      <P>
        Valvenok supplies the instrumentation layer that surrounds and supports butterfly valve installations across a
        wide range of industries and pressure classes. The product range covers everything needed to engineer a fully
        documented assembly around any butterfly valve.
      </P>
      <Tabs
        kicker="Integration layer"
        title="What sits around the butterfly valve"
        tabs={INTEGRATION.map((i) => ({ label: i.label, content: <P>{i.desc}</P> }))}
      />

      <H2>Triple Offset Butterfly Valve Applications</H2>
      <P>
        Triple offset butterfly valves are typically specified where tight shut-off, high-cycle performance, and
        fire-safe characteristics are required — hydrocarbon, hydrogen, and power applications being the most common.
        Valvenok supports these projects by providing the surrounding high-integrity instrumentation layer:
      </P>
      <UL items={TRIPLE_OFFSET} />
      <P>
        By pairing triple offset butterfly valve technology with Valvenok&apos;s instrumentation packages, engineering
        teams can align process isolation hardware with high-integrity measurement, venting, and protection systems —
        all from a single, traceable source.
      </P>

      <Quote cite="Valvenok Engineering Team">
        &ldquo;The reliability of a butterfly valve installation isn&apos;t just about the disc — it&apos;s about
        everything around it.&rdquo;
      </Quote>

      <H2>Pneumatic Actuator Butterfly Valve Interfaces</H2>
      <P>
        Pneumatically actuated butterfly valves are widely used for automated on/off and modulating service. Around a
        pneumatic actuator butterfly valve, Valvenok supplies the high-pressure auxiliaries needed to complete the
        circuit:
      </P>
      <UL items={PNEUMATIC} />

      <H2>What to Expect When You Send a Specification</H2>
      <P>
        Valvenok operates as a technical extension of your procurement and design teams. For projects where a butterfly
        valve forms part of a wider package, the process follows four clear steps.
      </P>
      <Stepper
        kicker="Four steps"
        title="From specification to delivery"
        steps={STEPS.map((s) => ({ title: s.title, body: s.body }))}
      />

      <H2>Instrumentation and Valve Technologies Supported</H2>
      <P>
        Although the primary isolation may be a butterfly valve, most projects also require a wide matrix of specialist
        valves. Valvenok&apos;s portfolio covers:
      </P>
      <UL items={PORTFOLIO} />
      <Tags items={INDUSTRIES} />


      <FAQ title="Frequently Asked Questions" items={FAQS} />

      <CTA
        title="READY TO ENGINEER YOUR BUTTERFLY VALVE PACKAGE?"
        body="Send Valvenok your specification or bill of materials and the engineering team aims to respond within 24 hours with a technically robust, documentation-ready solution built around your butterfly valve requirements."
        primary={{ label: "Get in Touch with Valvenok", href: "/contact" }}
      />
    </ArticleLayout>
  );
}
