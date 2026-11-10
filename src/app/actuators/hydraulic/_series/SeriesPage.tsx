"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import DownloadIcon from "@mui/icons-material/Download";
import TrustStrip from "@/src/app/Common/Products_Page/TrustStrip";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";
import { type SeriesDef, modelCount } from "./types";

const tableSx = {
  width: "100%", borderCollapse: "collapse", minWidth: 560,
  "& th, & td": { px: 2, py: 1.5, textAlign: "left", borderBottom: "1px solid rgba(0,0,0,0.08)", fontSize: "0.9rem" },
  "& th": { bgcolor: "#f0f4ef", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 1 },
} as const;

export default function SeriesPage({ def }: { def: SeriesDef }) {
  const [modalOpen, setModalOpen] = useState(false);
  const count = modelCount(def);
  const productsHref = def.productsHref ?? `${def.path}/products`;
  const product: ProductForRFQ = {
    id: `${def.code.toLowerCase()}-series`,
    name: def.rfqName,
    brand: "Susin",
    category: "Hydraulic Actuators",
    categoryId: "hydraulic-actuators",
    subCategory: def.subCategory,
    thumbnail: def.image,
    description: def.rfqDescription,
    keySpecs: def.rfqKeySpecs,
    variantInfo: { count, sizeRange: def.heroStats.find((s) => s.label === "Models")?.value ?? def.code },
  };

  return (
    <>
      {/* ── Product Hero ── */}
      <Box sx={{ bgcolor: "background.default", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderRadius: 3, overflow: "hidden", bgcolor: "#f0f4ef", display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "4/3" }}>
                <Box component="img" src={def.image} alt={def.imageAlt} sx={{ width: "100%", height: "100%", objectFit: "contain", p: 3 }} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}>
                {def.overline}
              </Typography>
              <Typography variant="h1" sx={{ fontWeight: 800, mt: 1, mb: 1, lineHeight: 1.2 }}>
                {def.h1}
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", fontWeight: 400, mb: 3 }}>
                {def.subtitle}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8, textTransform: "none" }}>
                {def.intro}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                {def.chips.map((c) => (
                  <Chip key={c} label={c} size="small" sx={{ bgcolor: "primary.light", color: "primary.dark", fontWeight: 600, fontSize: "0.7rem" }} />
                ))}
              </Box>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 4 }}>
                {def.heroStats.map(({ label, value }) => (
                  <Box key={label}>
                    <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1 }}>{label}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700, textTransform: "none" }}>{value}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
                <Button variant="outlined" size="large" fullWidth href={productsHref}
                  sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, fontSize: "1rem", borderColor: "#1c2e1a", color: "#1c2e1a", "&:hover": { borderColor: "primary.main", color: "primary.main" } }}>
                  View All {count} Models
                </Button>
                <Button variant="contained" size="large" fullWidth startIcon={<ContactSupportIcon />} onClick={() => setModalOpen(true)}
                  sx={{ borderRadius: 0, fontWeight: 800, py: 1.75, fontSize: "1rem", boxShadow: "none", bgcolor: "#1c2e1a", "&:hover": { bgcolor: "primary.main", boxShadow: "none" } }}>
                  Request a Quote / Lead Time
                </Button>
              </Box>
              <Button href={def.catalog} target="_blank" rel="noopener" startIcon={<DownloadIcon />}
                sx={{ mt: 2, fontWeight: 700, textTransform: "none", color: "#1c2e1a" }}>
                {def.catalogLabel}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* ── Technical Specifications ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 6 }}>Technical Specifications</Typography>
          <Grid container spacing={2}>
            {def.techSpecs.map(({ label, value }) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={label}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                  <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 1.5 }}>{label}</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, mt: 0.5, textTransform: "none" }}>{value}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* ── Models ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 2, mb: 4 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>Models</Typography>
            <Button href={productsHref} size="small" sx={{ textTransform: "none", fontWeight: 700 }}>Full specifications →</Button>
          </Box>
          {def.groups.map((g) => {
            const cols = g.summary.map((k) => g.cols.find((c) => c.key === k)!);
            return (
              <Box key={g.key} sx={{ mb: 5 }}>
                <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 700, mb: 0.5 }}>{g.title}</Typography>
                {g.note && <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5, textTransform: "none" }}>{g.note}</Typography>}
                <Box sx={{ textTransform: "none", overflowX: "auto", border: "1px solid rgba(0,0,0,0.12)", borderRadius: 2, bgcolor: "#fff" }}>
                  <Box component="table" sx={tableSx}>
                    <thead>
                      <tr>{cols.map((c) => <th key={c.key}>{c.label}</th>)}</tr>
                    </thead>
                    <tbody>
                      {g.rows.map((r) => (
                        <tr key={r.model}>
                          {cols.map((c, i) => <td key={c.key} style={i === 0 ? { fontWeight: 700 } : undefined}>{r[c.key]}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Container>
      </Box>

      <Divider />

      {/* ── Features ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 6 }}>Key Features</Typography>
          <Grid container spacing={3}>
            {def.features.map(({ title, body }, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={title}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, height: "100%", display: "flex", gap: 2 }}>
                  <Box sx={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", bgcolor: "primary.main", color: "#fff", fontWeight: 700, fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {String.fromCharCode(65 + i)}
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>{title}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6, textTransform: "none" }}>{body}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <TrustStrip points={def.trust} />
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={product} />
    </>
  );
}
