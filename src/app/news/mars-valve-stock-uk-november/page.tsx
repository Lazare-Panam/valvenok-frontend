"use client";

import { ArticleLayout, Lead, H2, P, A, KeyTakeaways, Cards, FAQ, CTA, Checklist, Finder } from "../components/Article";

// Same article as marsvalvenok.com/news/mars-valve-stock-uk-november, styled like
// the other Valvenok news posts. Every product/RFQ link goes to the MARS site.
const MARS = "https://www.marsvalvenok.com";
const MARS_LINKS = {
  home: `${MARS}/`,
  rfq: `${MARS}/contact`,
  products: `${MARS}/products`,
  v77: `${MARS}/series/8`,
  v88: `${MARS}/series/13`,
  v22: `${MARS}/series/3`,
};
const BANNER_IMAGE = "https://pblol2.blob.core.windows.net/mars-valves/mars-stock-coming.jpeg";

const KEY_POINTS = [
  "MARS valve stock lands in the UK this November.",
  "We're taking RFQs now — early requests get priority on the first allocation.",
  "The Series 77 (V77) is our most-requested MARS line this year.",
  "MARS ball valves, V88 (Series 88) and V22 (Series 22) are also on the way.",
];

const RFQ_CHECKLIST = [
  "Model (e.g. V77)",
  "Size and connection",
  "Body and seat material",
  "Quantity, and when you need it",
];

// "Which MARS line are you after?" — answers use only this article's wording.
const SERIES_FINDER = [
  {
    label: "Series 77 (V77)",
    result: (
      <>
        <strong>Our most-requested MARS line this year.</strong> Tell us your size, connection, body and seat material
        and we&apos;ll quote it from the incoming November stock.
      </>
    ),
    href: MARS_LINKS.v77,
    linkLabel: "See the Series 77",
  },
  {
    label: "MARS ball valves",
    result: (
      <>
        <strong>Also coming into UK stock.</strong> Send your RFQ now — early requests get priority on the first
        allocation.
      </>
    ),
    href: MARS_LINKS.products,
    linkLabel: "See MARS products",
  },
  {
    label: "V88 (Series 88)",
    result: (
      <>
        <strong>On the way.</strong> We&apos;re seeing steady interest in the V88 (Series 88). Early requests get priority
        on the first allocation.
      </>
    ),
    href: MARS_LINKS.v88,
    linkLabel: "See the Series 88",
  },
  {
    label: "V22 (Series 22)",
    result: (
      <>
        <strong>On the way.</strong> We&apos;re seeing steady interest in the V22 (Series 22). Early requests get priority
        on the first allocation.
      </>
    ),
    href: MARS_LINKS.v22,
    linkLabel: "See the Series 22",
  },
  {
    label: "Not sure what I need",
    result: <>Send the application or an old part number and we&apos;ll match it.</>,
    href: MARS_LINKS.rfq,
    linkLabel: "Send your RFQ",
  },
];

const FAQS = [
  {
    q: "When does the MARS stock arrive in the UK?",
    a: "The next MARS allocation lands in the UK in November. Send your RFQ now and we'll confirm the arrival window for your models.",
  },
  {
    q: "What is the Series 77 (V77)?",
    a: "The Series 77 has been our most-requested MARS line this year. Tell us your size, connection, body and seat material and we'll quote it from the incoming November stock.",
  },
  {
    q: "How do I reserve stock from the November shipment?",
    a: "Send an RFQ with the model, size and connection, body and seat material, and quantity. Early requests get priority on the first allocation.",
  },
];

const MORE_ARTICLES = [
  {
    category: "Selection Guide",
    title: "1-Piece vs 2-Piece vs 3-Piece Ball Valves: How to Choose",
    href: `${MARS}/news/one-piece-vs-two-piece-vs-three-piece-ball-valves`,
  },
  {
    category: "Material Guide",
    title: "Tri-Clamp Sanitary Ball Valves: CF3M vs CF8M and When You Need Each",
    href: `${MARS}/news/tri-clamp-sanitary-ball-valves-cf3m-vs-cf8m`,
  },
  {
    category: "Distribution",
    title: "Mars Valves Is Looking for New Distribution Partners",
    href: `${MARS}/news/mars-valves-new-distribution-partners`,
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: "Mars Valve Stock Lands in the UK in November",
      datePublished: "2026-10-20",
      author: { "@type": "Organization", name: "Valvenok Team" },
      publisher: { "@type": "Organization", name: "Valvenok" },
      mainEntityOfPage: "https://www.valvenok.com/news/mars-valve-stock-uk-november",
      image: BANNER_IMAGE,
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

const plainWhite = { color: "#fff", fontWeight: 700 } as const;

export default function MarsStockNovemberPage() {
  return (
    <ArticleLayout
      schema={schema}
      meta={{
        slug: "/news/mars-valve-stock-uk-november",
        category: "Stock Update",
        title: "Mars Valve Stock Lands in the UK in November",
        author: "Valvenok Team",
        date: "October 2026",
        cover: BANNER_IMAGE,
        coverAlt: "MARS valve stock arriving in the UK, November 2026 — RFQs now open",
      }}
    >
      <Lead>
        MARS valve stock lands in the UK this November, and we&apos;re taking RFQs now. Early requests get priority on
        the first allocation of the shipment, so if a MARS line is on your list, now is the time to tell us.
      </Lead>

      <KeyTakeaways items={KEY_POINTS} />

      <H2>What&apos;s Coming</H2>
      <P>
        The <A href={MARS_LINKS.v77}>Series 77 (V77)</A>{" "}has been our most-requested MARS line this year, so if it&apos;s
        on your list, now is the time to tell us. <A href={MARS_LINKS.products}>MARS ball valves</A>{" "}are also coming into
        UK stock, and we&apos;re seeing steady interest in the <A href={MARS_LINKS.v88}>V88 (Series 88)</A>{" "}and{" "}
        <A href={MARS_LINKS.v22}>V22 (Series 22)</A>{" "}as well.
      </P>

      <Finder kicker="Quick finder" title="Which MARS line are you after?" hint="Pick one to see what's coming and where to look." options={SERIES_FINDER} />

      <H2>How to Get Priority Allocation</H2>
      <P>Send your RFQ with:</P>
      <Checklist kicker="RFQ checklist" title="What to include in your RFQ" items={RFQ_CHECKLIST} emailSubject="MARS stock RFQ"
        emailTo="sales@marsvalvenok.com" />
      <P>Not sure what you need? Send the application or an old part number and we&apos;ll match it.</P>

      <H2>Send Your RFQ</H2>
      <P>
        Early requests get priority on the November shipment. <A href={MARS_LINKS.rfq}>Send your RFQ</A>{" "}and we&apos;ll
        come straight back to you with availability and a price.
      </P>

      <FAQ items={FAQS} />

      <H2>More from MARS Valvenok</H2>
      <Cards
        columns={3}
        items={MORE_ARTICLES.map((article) => ({
          kicker: article.category,
          title: (
            <a href={article.href} target="_blank" rel="noopener">
              {article.title}
            </a>
          ),
        }))}
      />

      <CTA
        title="Reserve Your November Allocation"
        body={
          <>
            Send your size, pressure, connection and quantity and we&apos;ll put your RFQ at the front of the November
            shipment.
            <br />
            <br />
            Browse the full MARS range, see online prices for standard items and send your RFQ on our dedicated MARS site,
            marsvalvenok.com.
            <br />
            <br />
            <a href="mailto:sales@marsvalvenok.com" data-plain style={plainWhite}>
              sales@marsvalvenok.com
            </a>
            <br />
            <a href="tel:+447368137917" data-plain style={plainWhite}>
              +44 7368 137917
            </a>
          </>
        }
        primary={{ label: "Send your RFQ →", href: MARS_LINKS.rfq }}
        secondary={{ label: "Visit the MARS Valvenok Website", href: MARS_LINKS.home }}
      />
    </ArticleLayout>
  );
}
