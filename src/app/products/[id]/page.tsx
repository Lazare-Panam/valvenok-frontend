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
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid"; // Use Grid2
import { useParams } from "next/navigation";
import { fetchProductDetail } from "@/src/api/productApi";
import { useQuery } from "@tanstack/react-query";

import { useProductFilter } from "../../sample/hooks/useproductFilter";
import { ImageGallery } from "../../sample/ImageGallery";
import { FilterSection } from "../../sample/FilterSelection";
import FAQSection from "../../sample/FAQSection";
import TechnicalSpecs from "../../sample/TechnicalSpecs";

import { useCartStore } from "../../cart/hooks/useCartStore";
import { useNotificationStore } from "@/src/store/useNotificationStore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
        <CircularProgress color="primary" thickness={5} />
      </Box>
    );
  }

  if (isError || !data) {
    return (
      <Container sx={{ mt: 10 }}>
        <Typography variant="h5" color="error" sx={{ fontWeight: 900 }}>Product not found.</Typography>
      </Container>
    );
  }

  return <ProductSelector data={data} />;
}

function ProductSelector({ data: PRODUCT_DATA }: { data: any }) {
  const filterKeys = Object.keys(PRODUCT_DATA.metadata.attributeTooltips);
  const { selected, match, availableOptions, toggleFilter } = useProductFilter(
    PRODUCT_DATA.products,
    filterKeys
  );

  const [activeImg, setActiveImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const addItem = useCartStore((state) => state.addItem);
  const showNotification = useNotificationStore((state) => state.showNotification);

 const handleAddToCart = () => {
  if (!match) return;

  // 1. Build the technical description from selected filters
  const techDescription = Object.entries(selected)
    .filter(([_, val]) => val !== null)
    .map(([key, val]) => {
      const label = (PRODUCT_DATA.metadata.attributeLabels as any)[key] || key;
      return `${label}: ${val}`;
    })
    .join(", ");
const cloudinaryId = PRODUCT_DATA.metadata.images[0].url;

  // 3. Add to Zustand Store
  addItem({
    id: match.partNumber, // Unique ID for the cart
    name: PRODUCT_DATA.metadata.category, 
    partNumber: match.partNumber,
    price: match.price,
    quantity: quantity,
    cloudinaryId: cloudinaryId, // This is now guaranteed to be the first or active image ID
    notes: techDescription, 
  });

  // 4. Feedback
  showNotification({ 
    message: `Added ${match.partNumber} to procurement list`, 
    severity: "success" 
  });
};

  return (
    <Box component="main" sx={{ bgcolor: "#fcfcfc", minHeight: "100vh", pb: 10 }}>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={6}>
          {/* Image Gallery Column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <ImageGallery
              images={PRODUCT_DATA.metadata.images}
              activeIdx={activeImg}
              onSelect={setActiveImg}
            />
          </Grid>

          {/* Configuration Column */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h1"
              sx={{ fontFamily: "Barlow Condensed", fontWeight: 900, fontSize: "3.5rem", mb: 1, textTransform: 'uppercase' }}
            >
              {match ? match.partNumber : "Series Configuration"}
            </Typography>

            <Typography sx={{ color: "text.secondary", fontWeight: 700, fontSize: "1.2rem", mb: 5, textTransform: 'uppercase' }}>
              {PRODUCT_DATA.metadata.subCategory}
            </Typography>

            <Paper
              variant="outlined"
              sx={{ p: 4, borderRadius: 0, borderTop: "6px solid", borderTopColor: "primary.main" }}
            >
              {filterKeys.map((key) => (
                <FilterSection
                  key={key}
                  label={(PRODUCT_DATA.metadata.attributeLabels as any)[key] || key}
                  options={Array.from(new Set(PRODUCT_DATA.products.map((p: any) => p.attributes?.[key]))).filter(Boolean)}
                  selectedValue={selected[key]}
                  available={availableOptions[key]}
                  onSelect={(val: any) => toggleFilter(key, val)}
                  tooltipText={(PRODUCT_DATA.metadata.attributeTooltips as any)[key]}
                />
              ))}

              <Divider sx={{ my: 4 }} />

              <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Box>
                  <Typography sx={{ fontFamily: "Barlow Condensed", fontSize: "2.8rem", fontWeight: 900, lineHeight: 1 }}>
                    {match ? `£${(match.price * quantity).toFixed(2)}` : "—"}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.disabled", fontWeight: 900 }}>
                    TOTAL EX. VAT & SHIPPING
                  </Typography>
                </Box>

                <Stack direction="row" spacing={2} alignItems="center">
                  {/* Quantity Selector */}
                  <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid', borderColor: 'divider', height: '48px' }}>
                    <IconButton 
                      size="small" 
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      sx={{ borderRadius: 0 }}
                      disabled={!match}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ width: 40, textAlign: 'center', fontWeight: 900 }}>{quantity}</Typography>
                    <IconButton 
                      size="small" 
                      onClick={() => setQuantity(q => q + 1)}
                      sx={{ borderRadius: 0 }}
                      disabled={!match}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>

                  <Button
                    variant="contained"
                    disabled={!match}
                    size="large"
                    onClick={handleAddToCart}
                    sx={{ borderRadius: 0, px: 4, py: 1.5, fontWeight: 900, height: '48px' }}
                  >
                    ADD TO QUOTE
                  </Button>
                </Stack>
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