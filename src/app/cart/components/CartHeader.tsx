'use client';

import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function CartHeader() {
  return (
    <Box sx={{ bgcolor: "primary.main", p: 2, color: "white", mb: 0, display: { xs: "none", md: "block" } }}>
      <Grid container alignItems="center">
        <Grid size={{ md: 5 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 900, textTransform: "uppercase", letterSpacing: 1, ml: 2, fontFamily: '"Barlow Condensed", sans-serif' }}>
            Technical Component
          </Typography>
        </Grid>
        <Grid size={{ md: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 900, textTransform: "uppercase", letterSpacing: 1, fontFamily: '"Barlow Condensed", sans-serif' }}>
            Unit Price
          </Typography>
        </Grid>
        <Grid size={{ md: 3 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 900, textTransform: "uppercase", letterSpacing: 1, textAlign: "center", fontFamily: '"Barlow Condensed", sans-serif' }}>
            Quantity
          </Typography>
        </Grid>
        <Grid size={{ md: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 900, textTransform: "uppercase", letterSpacing: 1, textAlign: "right", pr: 2, fontFamily: '"Barlow Condensed", sans-serif' }}>
            Subtotal
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}