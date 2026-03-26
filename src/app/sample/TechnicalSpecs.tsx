import { Box, Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Grid"; // Switch to Grid2
import ConstructionIcon from "@mui/icons-material/Construction";

interface Feature {
  label: string;
  value: string;
}

export default function TechnicalSpecs({ features, description }: { features: Feature[], description: string }) {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" sx={{ fontFamily: 'Barlow Condensed', fontWeight: 900, mb: 2 }}>
        PRODUCT OVERVIEW
      </Typography>
      <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
        {description}
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {features.map((f, i) => (
          <Grid size={{ xs: 6 }} key={i}>
            <Stack direction="row" spacing={1.5}>
              <ConstructionIcon sx={{ color: 'primary.main', fontSize: 18 }} />
              <Box>
                <Typography sx={{ fontSize: '10px', fontWeight: 800, color: 'text.disabled', textTransform: 'uppercase' }}>
                  {f.label}
                </Typography>
                <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>
                  {f.value}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}