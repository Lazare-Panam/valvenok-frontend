"use client";

import {
  ArticleLayout,
  Lead,
  H2,
  P,
  UL,
  KeyTakeaways,
  Quote,
  Cards,
  FAQ,
  CTA,
  RelatedLinks,
  Stepper,
  Checklist,
} from "../components/Article";
import { T } from "@/src/app/Landing/modern/tokens";

const SLUG = "/news/uk-valve-stockist";
const ARTICLE_URL = "https://www.valvenok.com/news/uk-valve-stockist";
const COVER =
  "https://pblol2.blob.core.windows.net/valvenok-images/blogs/uk-valve-stockist.jpg";
const HEADLINE = "Why Buy Valves From a UK Stockist";
const DESCRIPTION =
  "No minimum order on standard catalogue items, and a company you can verify — a UK supplier based in Bicester, Oxfordshire since 2018.";

// Contextual internal links — descriptive anchors to real category pages
const RELATED = [
  { label: "Industrial & instrumentation valves", href: "/valves" },
  { label: "Hydrogen & cryogenic components", href: "/hydrogen-cryogenic" },
  { label: "Quality & compliance", href: "/quality" },
  { label: "JOSCAR registered supplier", href: "/joscar-registered" },
];

const TAKEAWAYS = [
  "A UK supplier handles import and customs for you, and confirms lead times up front on every quotation.",
  "Valvenok has been based in Bicester, Oxfordshire since 2018.",
  "No minimum order — single items and scheduled frame-contract supply are treated the same.",
  "JOSCAR registered since 2020, supplying defence, aerospace, oil & gas, energy and process industries.",
  "A registered UK company with a named address and an engineer on the phone — verifiable before a first purchase order.",
];

const UK_BASE_BENEFITS = [
  {
    label: "Shorter Supply Chain",
    desc: "Buying from a UK supplier avoids handling import paperwork yourself. Availability and lead time vary by item and are confirmed on every quotation.",
  },
  {
    label: "A Company You Can Verify",
    desc: "Valvenok Ltd is a registered UK company with a named address in Bicester, Oxfordshire and a phone number answered by people who know the product. Exactly what a procurement team checks before raising a first purchase order.",
  },
  {
    label: "Technical Answers In Your Timezone",
    desc: "Specification questions — line size, pressure class, material, media — are answered by people who know the product, in UK working hours — not through a distant call centre.",
  },
  {
    label: "Sterling Pricing, No FX Exposure",
    desc: "Priced and invoiced in GBP, so there is no exchange-rate movement between quotation and invoice to reconcile.",
  },
  {
    label: "UK & EU Documentation",
    desc: "Material certificates, declarations of conformity, and test reports supplied to the standards UK and EU inspection teams expect.",
  },
  {
    label: "No Minimum Order",
    desc: "Single items are as welcome as scheduled supply against a frame contract. Source the quantity you actually need, not the quantity a distributor wants to sell.",
  },
];

const STOCK_CATEGORIES = [
  "Industrial valves — ball, gate, globe, butterfly, check and control",
  "Instrumentation valves, manifolds and double block and bleed",
  "Actuators — pneumatic, electric and hydraulic",
  "Instrumentation fittings and tubing, including SS316",
  "High-pressure valves, fittings and manifolds",
  "Hydrogen and cryogenic components",
  "Pumps, mechanical seals and pneumatics",
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Send the Part or the Specification",
    body: "Share a part number, a datasheet, or a full bill of materials. For the fastest answer, include line size, pressure rating, material, media, and any project requirement such as NACE MR0175 or hydrogen service.",
  },
  {
    num: "02",
    title: "Availability Check and Engineering Review",
    body: "Valvenok confirms availability and maps anything not readily available to an appropriate product. Where a spec is open, the engineering team recommends a fit rather than sending a catalogue link.",
  },
  {
    num: "03",
    title: "Quotation With Availability and Documentation",
    body: "You receive price, availability, and the documentation package — material certificates and declarations of conformity — for each line item, so vendor approval and inspection are not held up later.",
  },
  {
    num: "04",
    title: "Order and Delivery",
    body: "Orders are shipped from the UK once confirmed. For urgent requirements, call before ordering and the team will tell you honestly what lead time is achievable.",
  },
];

const INDUSTRIES = [
  "Defence & Aerospace",
  "Oil & Gas",
  "Energy",
  "Marine",
  "Chemical Processing",
  "Water",
  "Power",
  "Food & Beverage",
];

const FAQS = [
  {
    q: "Where is Valvenok based?",
    a: "Valvenok Ltd is based at St. Edburgs Hall, Priory Road, Bicester, Oxfordshire, OX26 6BL. The company has operated from Bicester since 2018.",
  },
  {
    q: "Do you supply valves across Oxfordshire and the rest of the UK?",
    a: "Yes. Bicester sits between Oxford, Milton Keynes and Banbury with quick access to the M40 and A34, so courier coverage across Oxfordshire and the surrounding counties is straightforward. Valvenok supplies customers nationwide.",
  },
  {
    q: "Is there a minimum order?",
    a: "No. Valvenok was founded specifically to solve the problem of sourcing quality components without minimum order quantities, so a single item is as welcome as scheduled supply against a frame contract.",
  },
  {
    q: "What product ranges do you supply?",
    a: "Fittings, valves, adapters, actuators, instrumentation and related components. Availability varies by item, so the team confirms it on every quotation.",
  },
  {
    q: "Can I speak to someone technical rather than a call centre?",
    a: "Yes. Specification questions go to people who know the products. Call +44 7775 132326 or email sales@valvenok.com with the line size, pressure class, material and media, and you will get a straight answer rather than a catalogue link.",
  },
  {
    q: "Why does buying from a UK supplier matter for lead time?",
    a: "A UK supplier handles import and customs on your behalf and can tell you up front what lead time to expect. Lead times vary by item and are confirmed on quotation.",
  },
  {
    q: "Is Valvenok a verified supplier for defence and aerospace work?",
    a: "Valvenok achieved JOSCAR registration in 2020, which opened the door to defence and aerospace supply chains. The company also works across oil and gas, energy, marine, chemical processing, water, power, and food and beverage applications.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: HEADLINE,
      description: DESCRIPTION,
      image: COVER,
      author: { "@type": "Organization", name: "Valvenok" },
      publisher: {
        "@type": "Organization",
        name: "Valvenok",
        logo: {
          "@type": "ImageObject",
          url: "https://pblol2.blob.core.windows.net/valvenok-images/valvenok-new-logo.jpeg",
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

// Plain (non-link) industry labels.
function IndustryTags({ items }: { items: string[] }) {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "32px 0" }}
    >
      {items.map((ind) => (
        <span
          key={ind}
          style={{
            padding: "6px 14px",
            borderRadius: 999,
            border: `1px solid ${T.border}`,
            background: T.surface,
            color: T.ink,
            fontSize: "0.88rem",
            fontWeight: 600,
          }}
        >
          {ind}
        </span>
      ))}
    </div>
  );
}

export default function UkValveStockistPage() {
  return (
    <ArticleLayout
      schema={schema}
      meta={{
        slug: SLUG,
        category: "Buyer's Guide",
        title: HEADLINE,
        dek: DESCRIPTION,
        author: "Valvenok Team",
        date: "September 2026",
        readMinutes: 6,
        cover: COVER,
        coverAlt:
          "Valves on a stockroom shelf: ball, globe, butterfly, check, manifold and needle valves",
      }}
    >
      <Lead>
        Industrial buyers rarely search for a valve by proximity — they search
        by product and specification. But when a common part is holding up a
        live project, where that part ships from suddenly matters a great deal.
        A valve on an overseas order carries a manufacturing lead time and
        customs clearance that you have to manage yourself. A UK-based supplier
        takes that on and tells you up front what to expect.
      </Lead>

      <KeyTakeaways title="Key Takeaways" items={TAKEAWAYS} />

      <P>
        Valvenok has been based in Bicester, Oxfordshire since 2018, supplying
        valves, actuators, instrumentation fittings, pumps and seals to
        engineers and procurement teams across the country. This guide sets out
        what a UK base actually buys you — on lead time, on documentation, and
        on the simple question of whether you are dealing with a company you can
        verify.
      </P>

      <H2>Why Buying From a UK-Based Stockist Matters</H2>
      <P>
        The advantage of a UK stockist is not one thing — it is a stack of small
        certainties that each remove a delay or a risk from the purchase. Taken
        together, they are why procurement teams keep a UK source on the
        approved vendor list even when an overseas price looks lower on paper.
      </P>
      <Cards
        items={UK_BASE_BENEFITS.map((b) => ({ title: b.label, body: b.desc }))}
      />

      <H2>What We Supply</H2>
      <P>
        Valvenok supplies fittings, valves, adapters and components —
        availability varies by item and is confirmed on quotation. The range
        spans:
      </P>
      <UL items={STOCK_CATEGORIES} />
      <P>
        There is no minimum order. That was the reason the business was started
        — sourcing quality components in the quantity actually needed, rather
        than the quantity a distributor wanted to sell.
      </P>

      <Quote cite="Valvenok Team">
        &quot;Ask for the lead time up front — a good supplier will confirm it
        on the quotation, not after the order.&quot;
      </Quote>

      <H2>Who We Supply</H2>
      <P>
        Valvenok supplies engineers, procurement teams, maintenance departments,
        OEMs and system integrators — from single-item urgent spares to
        scheduled supply against a frame contract. JOSCAR registration, achieved
        in 2020, opened the door to defence and aerospace supply chains, and the
        company works across oil and gas, energy, marine, chemical processing,
        water, power, and food and beverage applications.
      </P>

      <H2>Delivery Across Oxfordshire and the UK</H2>
      <P>
        Bicester sits between Oxford, Milton Keynes and Banbury, within easy
        reach of the M40 and A34 — so courier coverage across Oxfordshire,
        Buckinghamshire, Northamptonshire and Warwickshire is straightforward,
        and Valvenok supplies customers nationwide. For urgent requirements, a
        quick call before ordering is usually the fastest way to confirm what
        can be with you and when.
      </P>

      <H2>What to Expect When You Send an Enquiry</H2>
      <P>
        Valvenok operates as a technical extension of your procurement and
        design teams. An enquiry follows four clear steps.
      </P>
      <Stepper
        kicker="Four steps"
        title="From enquiry to delivery"
        steps={PROCESS_STEPS.map((s) => ({ title: s.title, body: s.body }))}
      />
      <Checklist
        kicker="Before you send it"
        title="For the fastest answer, include"
        emailSubject="Quotation request"
        items={[
          "Part number, datasheet, or full bill of materials",
          "Line size",
          "Pressure rating",
          "Material",
          "Media",
          "Any project requirement, such as NACE MR0175 or hydrogen service",
        ]}
      />

      <IndustryTags items={INDUSTRIES} />

      <FAQ title="Frequently Asked Questions" items={FAQS} />

      <CTA
        title="NEED A PART OR A QUOTATION?"
        body="Send Valvenok the part or the specification and the team will confirm availability, price and lead time. If it is urgent, call +44 7775 132326 — that is usually faster than a form."
        primary={{ label: "Request a Quotation", href: "/contact" }}
      />

      <RelatedLinks title="Explore More From Valvenok" links={RELATED} />
    </ArticleLayout>
  );
}
