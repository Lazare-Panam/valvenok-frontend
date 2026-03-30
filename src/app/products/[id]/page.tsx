"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Divider,
  Button,
  CircularProgress,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useParams } from "next/navigation";
import { fetchProductDetail } from "@/src/api/productApi";
import { useQuery } from "@tanstack/react-query";

import { useProductFilter } from "../../sample/hooks/useproductFilter";
import { ImageGallery } from "../../sample/ImageGallery";
import { FilterSection } from "../../sample/FilterSelection";
import FAQSection from "../../sample/FAQSection";
import TechnicalSpecs from "../../sample/TechnicalSpecs";

// ── Outer: just fetches, renders nothing until data is ready ──
export default function ProductPage() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetail(id as string),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (isError || !data) {
    return (
      <Container sx={{ mt: 10 }}>
        <Typography variant="h5" color="error">Product not found.</Typography>
      </Container>
    );
  }

  return <ProductSelector data={data} />;
}

// ── Inner: always receives real data, hook initialises correctly ──
function ProductSelector({ data: PRODUCT_DATA }: { data: any }) {
  const filterKeys = Object.keys(PRODUCT_DATA.metadata.attributeTooltips);

  const { selected, match, availableOptions, toggleFilter } = useProductFilter(
    PRODUCT_DATA.products,
    filterKeys
  );

  const [activeImg, setActiveImg] = useState(0);

  return (
    <Box component="main" sx={{ bgcolor: "#fcfcfc", minHeight: "100vh", pb: 10 }}>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <ImageGallery
              images={PRODUCT_DATA.metadata.images}
              activeIdx={activeImg}
              onSelect={setActiveImg}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h1"
              sx={{ fontFamily: "Barlow Condensed", fontWeight: 900, fontSize: "3.5rem", mb: 1 }}
            >
              {match ? match.partNumber : "PMC SERIES"}
            </Typography>

            <Typography sx={{ color: "text.secondary", fontWeight: 500, fontSize: "1.2rem", mb: 5 }}>
              {PRODUCT_DATA.metadata.subCategory}
            </Typography>

            <Paper
              variant="outlined"
              sx={{ p: 4, borderRadius: 0, borderTop: "5px solid", borderTopColor: "primary.main" }}
            >
              {filterKeys.map((key) => (
                <FilterSection
                  key={key}
                  label={(PRODUCT_DATA.metadata.attributeLabels as any)[key] || key}
                  options={Array.from(new Set(PRODUCT_DATA.products.map((p: any) => p[key])))}
                  selectedValue={selected[key]}
                  available={availableOptions[key]}
                  onSelect={(val: any) => toggleFilter(key, val)}
                  tooltipText={(PRODUCT_DATA.metadata.attributeTooltips as any)[key]}
                />
              ))}

              <Divider sx={{ my: 4 }} />

              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography sx={{ fontFamily: "Barlow Condensed", fontSize: "2.5rem", fontWeight: 900, lineHeight: 1 }}>
                    {match ? `£${match.price.toFixed(2)}` : "—"}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.disabled", fontWeight: 700 }}>
                    EX. VAT & SHIPPING
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  disabled={!match}
                  size="large"
                  sx={{ borderRadius: 0, px: 5, py: 2, fontWeight: 900 }}
                >
                  ADD TO QUOTE
                </Button>
              </Stack>
            </Paper>

            <TechnicalSpecs
              features={PRODUCT_DATA.metadata.commonFeatures}
              description={PRODUCT_DATA.metadata.description}
            />

            <FAQSection faqs={PRODUCT_DATA.metadata.faqs} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}