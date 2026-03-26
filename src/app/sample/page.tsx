"use client";

import { useState } from "react";
import { Box, Container, Typography, Paper, Stack, Divider, Button } from "@mui/material";
// Use the new Grid2 component
import Grid from "@mui/material/Grid";

// Data Import
import { PRODUCT_DATA } from "./productData";

// Custom Logic/Components
import { useProductFilter } from "./hooks/useproductFilter";
import { ImageGallery } from "./ImageGallery";
import { FilterSection } from "./FilterSelection";
import FAQSection from "./FAQSection";
import TechnicalSpecs from "./TechnicalSpecs";
export default function ProductSelector() {
  const filterKeys = ["tubeOD", "jic", "npt"];
  
  const { selected, match, availableOptions, toggleFilter } = useProductFilter(
    PRODUCT_DATA.products, 
    filterKeys
  );
  
  const [activeImg, setActiveImg] = useState(0);

  return (
    <Box component="main" sx={{ bgcolor: "#fcfcfc", minHeight: "100vh", pb: 10 }}>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        {/* Grid2 uses 'container' prop and 'spacing' just like the old one */}
        <Grid container spacing={6}>
          
          {/* Visuals - sizes are defined directly on the Grid component */}
          <Grid size={{ xs: 12, md: 5 }}>
            <ImageGallery 
              images={PRODUCT_DATA.metadata.images} 
              activeIdx={activeImg} 
              onSelect={setActiveImg} 
            />
          </Grid>

          {/* Configuration & Details */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h1" sx={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontSize: '3.5rem', mb: 1 }}>
              {match ? match.partNumber : "PMC SERIES"}
            </Typography>
            
            <Typography sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '1.2rem', mb: 5 }}>
              {PRODUCT_DATA.metadata.subCategory}
            </Typography>

            <Paper variant="outlined" sx={{ p: 4, borderRadius: 0, borderTop: '5px solid', borderTopColor: 'primary.main' }}>
              {filterKeys.map(key => (
                <FilterSection 
                  key={key}
                  label={key === 'tubeOD' ? 'Tube OD (Fractional)' : key}
                  options={Array.from(new Set(PRODUCT_DATA.products.map(p => (p as any)[key])))}
                  selectedValue={selected[key]}
                  available={availableOptions[key]}
                  onSelect={(val: any) => toggleFilter(key, val)}
                />
              ))}

              <Divider sx={{ my: 4 }} />

              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography sx={{ fontFamily: 'Barlow Condensed', fontSize: '2.5rem', fontWeight: 900, lineHeight: 1 }}>
                    {match ? `£${match.price.toFixed(2)}` : "—"}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 700 }}>EX. VAT & SHIPPING</Typography>
                </Box>
                
                <Button variant="contained" disabled={!match} size="large" sx={{ borderRadius: 0, px: 5, py: 2, fontWeight: 900 }}>
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