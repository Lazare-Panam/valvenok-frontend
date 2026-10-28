import { Box, Container, Typography, Stack, Paper, Divider, Link, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
const HEADING_FONT = '"Barlow Condensed"';
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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Mars Valve Stock Lands in the UK in November",
    datePublished: "2026-10-20",
    author: { "@type": "Organization", name: "Valvenok Team" },
    publisher: { "@type": "Organization", name: "Valvenok" },
    mainEntityOfPage: "https://www.valvenok.com/news/mars-valve-stock-uk-november",
    image: BANNER_IMAGE,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];

const h2Sx = {
  fontFamily: HEADING_FONT,
  fontWeight: 900,
  textTransform: "uppercase",
  fontSize: { xs: "2rem", md: "2.5rem" },
  mb: 2,
} as const;

// Opens on the MARS site in a new tab.
function MarsLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} target="_blank" rel="noopener" sx={{ fontWeight: 700 }}>
      {children}
    </Link>
  );
}

export default function MarsStockNovemberPage() {
  return (
    // The theme capitalises all Typography; body copy should read as written.
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 10, "& p, & li, & h3": { textTransform: "none" } }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <Box sx={{ bgcolor: "primary.main", color: "white", pt: 15, pb: 10 }}>
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{ fontFamily: HEADING_FONT, fontWeight: 800, letterSpacing: "0.4em", opacity: 0.8 }}
          >
            Stock Update
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: HEADING_FONT,
              fontSize: { xs: "2.5rem", md: "4.5rem" },
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1,
              mt: 1,
            }}
          >
            Mars Valve Stock Lands in the UK in November
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
                <time dateTime="2026-10-20">October 2026</time>
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: -5 }}>
        {/* KEY TAKEAWAYS */}
        <Paper
          elevation={10}
          sx={{ p: 4, borderRadius: 0, borderLeft: "8px solid", borderColor: "primary.main", mb: 8 }}
        >
          <Typography variant="h4" sx={{ fontFamily: HEADING_FONT, fontWeight: 900, mb: 3, textTransform: "uppercase" }}>
            Key Takeaways
          </Typography>
          <Grid container spacing={2}>
            {KEY_POINTS.map((text) => (
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

        {/* BANNER IMAGE */}
        <Box
          component="a"
          href={MARS_LINKS.home}
          target="_blank"
          rel="noopener"
          sx={{ display: "block", mb: 8 }}
        >
          <Box
            component="img"
            src={BANNER_IMAGE}
            alt="MARS valve stock arriving in the UK, November 2026 — RFQs now open"
            sx={{ width: "100%", display: "block", border: "1px solid", borderColor: "divider" }}
          />
        </Box>

        <Stack spacing={3}>
          <Typography sx={{ fontSize: "1.15rem" }}>
            MARS valve stock lands in the UK this November, and we&apos;re taking RFQs now. Early requests get priority
            on the first allocation of the shipment, so if a MARS line is on your list, now is the time to tell us.
          </Typography>
        </Stack>

        <Divider sx={{ my: 6 }} />

        <Typography variant="h2" sx={h2Sx}>What&apos;s Coming</Typography>
        <Typography>
          The{" "}<MarsLink href={MARS_LINKS.v77}>Series 77 (V77)</MarsLink>{" "}has been our most-requested MARS line
          this year, so if it&apos;s on your list, now is the time to tell us.{" "}
          <MarsLink href={MARS_LINKS.products}>MARS ball valves</MarsLink>{" "}are also coming into UK stock, and
          we&apos;re seeing steady interest in the{" "}<MarsLink href={MARS_LINKS.v88}>V88 (Series 88)</MarsLink>{" "}
          and{" "}<MarsLink href={MARS_LINKS.v22}>V22 (Series 22)</MarsLink>{" "}as well.
        </Typography>

        <Divider sx={{ my: 6 }} />

        <Typography variant="h2" sx={h2Sx}>How to Get Priority Allocation</Typography>
        <Typography sx={{ mb: 2 }}>Send your RFQ with:</Typography>
        <Stack spacing={1.25} sx={{ mb: 3 }}>
          {RFQ_CHECKLIST.map((item) => (
            <Stack key={item} direction="row" spacing={1} alignItems="center">
              <CheckCircleOutlineIcon sx={{ color: "primary.main", fontSize: 20 }} />
              <Typography>{item}</Typography>
            </Stack>
          ))}
        </Stack>
        <Typography>
          Not sure what you need? Send the application or an old part number and we&apos;ll match it.
        </Typography>

        <Divider sx={{ my: 6 }} />

        <Typography variant="h2" sx={h2Sx}>Send Your RFQ</Typography>
        <Typography>
          Early requests get priority on the November shipment.{" "}
          <MarsLink href={MARS_LINKS.rfq}>Send your RFQ</MarsLink>{" "}and we&apos;ll come straight back to you with
          availability and a price.
        </Typography>

        <Divider sx={{ my: 6 }} />

        {/* FAQ: native details/summary so the answers are in the server HTML */}
        <Typography variant="h2" sx={h2Sx}>Frequently Asked Questions</Typography>
        <Stack spacing={1.5}>
          {FAQS.map(({ q, a }) => (
            <Paper
              key={q}
              component="details"
              elevation={0}
              sx={{
                borderRadius: 0,
                border: "1px solid",
                borderColor: "divider",
                borderLeft: "4px solid",
                borderLeftColor: "primary.main",
                "& summary": { listStyle: "none", cursor: "pointer" },
                "& summary::-webkit-details-marker": { display: "none" },
                "&[open] .faq-icon": { transform: "rotate(180deg)" },
              }}
            >
              <Box
                component="summary"
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 3, py: 2 }}
              >
                <Typography component="h3" sx={{ fontWeight: 700 }}>{q}</Typography>
                <ExpandMoreIcon className="faq-icon" sx={{ color: "primary.main", transition: "transform 0.2s" }} />
              </Box>
              <Typography sx={{ px: 3, pb: 2.5, color: "text.secondary" }}>{a}</Typography>
            </Paper>
          ))}
        </Stack>

        <Divider sx={{ my: 6 }} />

        {/* MORE ARTICLES (on the MARS site) */}
        <Typography variant="h2" sx={{ ...h2Sx, fontSize: { xs: "1.6rem", md: "2rem" } }}>
          More from MARS Valvenok
        </Typography>
        <Grid container spacing={2}>
          {MORE_ARTICLES.map((article) => (
            <Grid key={article.href} size={{ xs: 12, sm: 4 }}>
              <Paper
                component="a"
                href={article.href}
                target="_blank"
                rel="noopener"
                elevation={0}
                sx={{
                  display: "block",
                  height: "100%",
                  p: 3,
                  borderRadius: 0,
                  border: "1px solid",
                  borderColor: "divider",
                  textDecoration: "none",
                  color: "text.primary",
                  transition: "border-color 0.2s",
                  "&:hover": { borderColor: "primary.main" },
                }}
              >
                <Typography
                  variant="overline"
                  sx={{ fontFamily: HEADING_FONT, fontWeight: 800, color: "primary.main", letterSpacing: "0.15em" }}
                >
                  {article.category}
                </Typography>
                <Typography sx={{ fontWeight: 700, mt: 0.5 }}>{article.title}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* CTA: send readers to the MARS site */}
        <Paper
          elevation={10}
          sx={{
            mt: 8,
            p: { xs: 3, md: 5 },
            borderRadius: 0,
            bgcolor: "primary.main",
            color: "white",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Box sx={{ maxWidth: 440 }}>
            <Typography
              component="h2"
              sx={{ fontFamily: HEADING_FONT, fontWeight: 900, textTransform: "uppercase", fontSize: { xs: "2rem", md: "2.5rem" }, lineHeight: 1, mb: 1.5 }}
            >
              Reserve Your November Allocation
            </Typography>
            <Typography sx={{ opacity: 0.9, mb: 1.5 }}>
              Send your size, pressure, connection and quantity and we&apos;ll put your RFQ at the front of the November
              shipment.
            </Typography>
            <Typography sx={{ opacity: 0.9 }}>
              Browse the full MARS range, see online prices for standard items and send your RFQ on our dedicated MARS
              site, marsvalvenok.com.
            </Typography>
          </Box>
          <Stack spacing={1.25} sx={{ minWidth: { md: 260 } }}>
            <Button
              href={MARS_LINKS.rfq}
              target="_blank"
              rel="noopener"
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "primary.dark",
                borderRadius: 0,
                fontWeight: 800,
                py: 1.5,
                boxShadow: "none",
                "&:hover": { bgcolor: "grey.100", boxShadow: "none" },
              }}
            >
              Send your RFQ →
            </Button>
            <Button
              href={MARS_LINKS.home}
              target="_blank"
              rel="noopener"
              variant="outlined"
              sx={{ color: "white", borderColor: "white", borderRadius: 0, fontWeight: 800, "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" } }}
            >
              Visit the MARS Valvenok Website
            </Button>
            <Button
              href="mailto:sales@marsvalvenok.com"
              variant="outlined"
              sx={{ color: "white", borderColor: "rgba(255,255,255,0.6)", borderRadius: 0, textTransform: "none", "&:hover": { borderColor: "white" } }}
            >
              sales@marsvalvenok.com
            </Button>
            <Button
              href="tel:+447368137917"
              variant="outlined"
              sx={{ color: "white", borderColor: "rgba(255,255,255,0.6)", borderRadius: 0, fontWeight: 700, "&:hover": { borderColor: "white" } }}
            >
              +44 7368 137917
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
