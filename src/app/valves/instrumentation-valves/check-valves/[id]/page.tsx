"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  Card,
  CardContent,
  CircularProgress,
  useTheme,
  alpha,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { PCVDto } from "@/src/api/checkValveApi";
import { usePCVBySlug, usePCVs } from "../hooks/usePCV";
import { INLET_OUTLET_LABELS, MATERIAL_LABELS } from "../components/PCVSidebar";
import RFQModal from "../../../../Common/RFQCard/RFQModal";
import { ProductForRFQ } from "../../../../Common/RFQCard/RequestForQuoteCard";

const BASE = "/valves/instrumentation-valves/check-valves";

// — map a raw PCV record to the display spec rows —
function specsOf(p: PCVDto): { label: string; value: string }[] {
  return [
    { label: "Part Number", value: p.partNumber },
    { label: "Material", value: MATERIAL_LABELS[p.material] ?? p.material },
    { label: "Inlet Type", value: INLET_OUTLET_LABELS[p.inlet] ?? p.inlet },
    { label: "Inlet Size", value: p.inletTubeOD },
    ...(p.outlet
      ? [{ label: "Outlet Type", value: INLET_OUTLET_LABELS[p.outlet] ?? p.outlet }]
      : []),
    ...(p.outletTubeOD ? [{ label: "Outlet Size", value: p.outletTubeOD }] : []),
  ];
}

// — map a raw PCV record to the shape the RFQ modal/cards expect —
function toRFQ(p: PCVDto): ProductForRFQ {
  return {
    id: String(p.id),
    name: `${p.partNumber} PCV Check Valve`,
    brand: "Valvenok",
    category: "Check Valves",
    categoryId: "check-valves",
    subCategory: "Instrumentation Check Valves",
    thumbnail: p.imageUrl ?? "",
    description: `${p.partNumber} — PCV series stainless steel inline check valve engineered for reliable non-return service in instrumentation and process lines.`,
    keySpecs: specsOf(p),
    variantInfo: { count: 1, sizeRange: p.inletTubeOD ?? "Contact for details" },
  };
}

function ProductImage({ p, height }: { p: PCVDto; height: number }) {
  const theme = useTheme();
  if (p.imageUrl) {
    return (
      <img
        src={p.imageUrl}
        alt={p.partNumber}
        style={{ maxHeight: height, maxWidth: "100%", objectFit: "contain" }}
      />
    );
  }
  return (
    <Typography
      variant="h5"
      sx={{
        fontFamily: '"Barlow Condensed"',
        fontWeight: 800,
        letterSpacing: 1,
        color: alpha(theme.palette.text.primary, 0.25),
        textAlign: "center",
      }}
    >
      {p.partNumber}
    </Typography>
  );
}

function SimilarProductCard({ p }: { p: PCVDto }) {
  const theme = useTheme();
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const product = toRFQ(p);

  return (
    <>
      <Card
        elevation={0}
        onClick={() => router.push(`${BASE}/${encodeURIComponent(p.partNumber)}`)}
        sx={{
          borderRadius: 0,
          border: "1px solid",
          borderColor: "divider",
          cursor: "pointer",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 4px 16px ${alpha(theme.palette.common.black, 0.08)}`,
          },
        }}
      >
        <Box
          sx={{
            bgcolor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 140,
            p: 2,
          }}
        >
          <ProductImage p={p} height={110} />
        </Box>
        <CardContent sx={{ p: 2 }}>
          <Typography
            variant="caption"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            PCV Series
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 1.2,
              mt: 0.5,
              mb: 1.5,
            }}
          >
            {product.name}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary", display: "block" }}>
            {MATERIAL_LABELS[p.material] ?? p.material} · {p.inletTubeOD}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            fullWidth
            onClick={(e) => {
              e.stopPropagation();
              setModalOpen(true);
            }}
            sx={{
              mt: 1.5,
              borderRadius: 0,
              fontWeight: 700,
              fontSize: "0.7rem",
              borderColor: "primary.main",
              color: "primary.main",
              "&:hover": { bgcolor: "primary.main", color: "#fff" },
            }}
          >
            Request Quote
          </Button>
        </CardContent>
      </Card>
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={product} />
    </>
  );
}

export default function PCVDetailPage() {
  const params = useParams();
  const router = useRouter();
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  const slug = decodeURIComponent(
    Array.isArray(params.id) ? params.id[0] : params.id ?? "",
  );
  const { product: valve, isLoading } = usePCVBySlug(slug);
  const { data: all = [] } = usePCVs({});

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress sx={{ color: theme.palette.primary.main }} />
      </Box>
    );
  }

  if (!valve) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 900 }}>
          PRODUCT NOT FOUND
        </Typography>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push(BASE)}
          sx={{ fontWeight: 700 }}
        >
          Browse Check Valves
        </Button>
      </Box>
    );
  }

  const product = toRFQ(valve);
  const specs = specsOf(valve);
  const similar = all.filter((p) => p.id !== valve.id).slice(0, 3);

  return (
    <>
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 12 }}>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => router.push(BASE)}
            sx={{ fontWeight: 700, mb: 3, color: "text.secondary" }}
          >
            Back to PCV Series
          </Button>

          <Grid container spacing={6}>
            {/* Image */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  border: "1px solid",
                  borderColor: "divider",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 380,
                  p: 4,
                  position: "sticky",
                  top: 24,
                }}
              >
                <ProductImage p={valve} height={320} />
              </Box>
            </Grid>

            {/* Details */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="overline"
                sx={{
                  fontFamily: '"Barlow Condensed"',
                  color: "primary.main",
                  fontWeight: 800,
                  letterSpacing: 2,
                }}
              >
                PCV Series · Instrumentation Check Valve
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontFamily: '"Barlow Condensed"',
                  fontWeight: 100,
                  textTransform: "uppercase",
                  lineHeight: 1,
                  mb: 1,
                }}
              >
                {valve.partNumber}
              </Typography>

              <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.7 }}>
                {product.description}
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Typography
                variant="overline"
                sx={{
                  fontFamily: '"Barlow Condensed"',
                  fontWeight: 800,
                  letterSpacing: 2,
                  color: "text.secondary",
                  display: "block",
                  mb: 1.5,
                }}
              >
                Technical Specifications
              </Typography>
              <Box sx={{ border: "1px solid", borderColor: "divider", mb: 4 }}>
                {specs.map((spec, i) => (
                  <Box
                    key={spec.label}
                    sx={{
                      display: "flex",
                      borderBottom: i < specs.length - 1 ? "1px solid" : "none",
                      borderColor: "divider",
                    }}
                  >
                    <Box
                      sx={{
                        width: "40%",
                        px: 2,
                        py: 1.5,
                        bgcolor: alpha(theme.palette.primary.main, 0.04),
                        borderRight: "1px solid",
                        borderColor: "divider",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}
                      >
                        {spec.label}
                      </Typography>
                    </Box>
                    <Box sx={{ px: 2, py: 1.5, display: "flex", alignItems: "center" }}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {spec.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Typography
                variant="overline"
                sx={{
                  fontFamily: '"Barlow Condensed"',
                  fontWeight: 800,
                  letterSpacing: 2,
                  color: "text.secondary",
                  display: "block",
                  mb: 1.5,
                }}
              >
                Key Benefits
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 4 }}>
                {[
                  "Stainless steel construction for corrosion resistance",
                  "Inline non-return design for instrumentation and process lines",
                  "OD tube, female NPT and male NPT connection options",
                  "Available on request — lead time confirmed on quotation",
                ].map((benefit) => (
                  <Box key={benefit} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CheckCircleOutlineIcon sx={{ color: "primary.main", fontSize: 18 }} />
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {benefit}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ContactSupportIcon />}
                  onClick={() => setModalOpen(true)}
                  sx={{
                    borderRadius: 0,
                    fontWeight: 800,
                    py: 1.75,
                    px: 4,
                    fontSize: "1rem",
                    boxShadow: "none",
                    "&:hover": { bgcolor: "primary.dark", boxShadow: "none" },
                  }}
                >
                  Request for Quote / Lead Time
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => router.push(BASE)}
                  sx={{
                    borderRadius: 0,
                    fontWeight: 700,
                    py: 1.75,
                    px: 3,
                    fontSize: "0.9rem",
                    borderColor: "divider",
                    color: "text.primary",
                    "&:hover": { borderColor: "text.primary" },
                  }}
                >
                  Browse PCV Series
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {similar.length > 0 && (
          <Container maxWidth="lg" sx={{ mt: 10 }}>
            <Divider sx={{ mb: 6 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                mb: 4,
              }}
            >
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    fontFamily: '"Barlow Condensed"',
                    color: "primary.main",
                    fontWeight: 100,
                    letterSpacing: 2,
                  }}
                >
                  Check Valves
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: '"Barlow Condensed"',
                    fontWeight: 100,
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  Similar Products
                </Typography>
              </Box>
              <Button
                variant="text"
                onClick={() => router.push(BASE)}
                sx={{
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  color: "primary.main",
                  "&:hover": { bgcolor: "transparent", textDecoration: "underline" },
                }}
              >
                VIEW ALL →
              </Button>
            </Box>
            <Grid container spacing={3}>
              {similar.map((p) => (
                <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <SimilarProductCard p={p} />
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </Box>

      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={product} />
    </>
  );
}
