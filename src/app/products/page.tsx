"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import EngineeringIcon from "@mui/icons-material/Engineering";

export default function ProductComingSoon() {
  const router = useRouter();

  return (
    <Box
      component="main"
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Stack spacing={4} alignItems="center">
          {/* Icon with your brand color */}
          <EngineeringIcon sx={{ fontSize: 80, color: "primary.main" }} />

          <Box>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "var(--font-display)", // Barlow Condensed
                fontWeight: 900,
                fontSize: { xs: "3rem", md: "4.5rem" },
                textTransform: "uppercase",
                lineHeight: 1,
                mb: 2,
              }}
            >
              Coming Soon
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                fontWeight: 500,
                maxWidth: "400px",
                mx: "auto",
              }}
            >
              We are currently indexing our high-pressure instrumentation catalog. 
              This engineered solution will be available shortly.
            </Typography>
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              onClick={() => router.back()}
              sx={{
                borderRadius: 0,
                px: 4,
                py: 1.5,
                fontWeight: 900,
                fontSize: "1rem",
                boxShadow: "none",
              }}
            >
              Go Back
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/contact"
              sx={{
                borderRadius: 0,
                px: 4,
                py: 1.5,
                fontWeight: 900,
                fontSize: "1rem",
                borderWidth: 2,
                "&:hover": { borderWidth: 2 },
              }}
            >
              Request Specs
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}