"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Using MUI System Grid for better performance
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { alpha } from "@mui/material/styles";
import { CATEGORY_METADATA } from "./data";
export default function CategoriesPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 10 }}>
      {/* --- HERO SECTION --- */}
      <Box
        sx={{
          bgcolor: "primary.main",
          py: { xs: 8, md: 12 },
          mb: 8,
          color: "#fff",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 800,
              letterSpacing: "0.3em",
              opacity: 0.8,
            }}
            
          >
            Engineering Solutions
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: { xs: "3rem", md: "5rem" },
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 0.9,
              mt: 1,
            }}
          >
            Product Categories
          </Typography>
          <Typography
            sx={{ mt: 3, maxWidth: 600, fontSize: "1.1rem", opacity: 0.9 }}
          >
            Browse our comprehensive range of high-performance instrumentation,
            valves, and fluid control components.
          </Typography>
        </Container>
      </Box>

      {/* --- CARDS GRID --- */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {CATEGORY_METADATA.map((cat) => (
            <Grid key={cat.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 0, // Keeps the industrial "square" look
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                  },
                }}
              >
                <Box sx={{ p: 3, bgcolor: "#fff", textAlign: "center" }}>
                  <CardMedia
                    component="img"
                    image={cat.image}
                    alt={cat.title}
                    sx={{
                      height: 220,
                      objectFit: "contain",
                      filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.1))",
                    }}
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1, px: 3, pt: 0 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      mb: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Barlow Condensed", sans-serif',
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        color: "text.primary",
                      }}
                    >
                      {cat.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "primary.main",
                        bgcolor: alpha("#61D649", 0.1),
                        px: 1,
                        py: 0.2,
                      }}
                    >
                      {cat.count} ITEMS
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 2, minHeight: "3em" }}
                  >
                    {cat.description}
                  </Typography>

                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}
                  >
                    {cat.tags.map((tag) => (
                      <Typography
                        key={tag}
                        sx={{
                          fontSize: "10px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: "text.secondary",
                          border: "1px solid",
                          borderColor: "divider",
                          px: 1,
                          py: 0.3,
                        }}
                      >
                        {tag}
                      </Typography>
                    ))}
                  </Box>

                  <Button
                    fullWidth
                    variant="outlined"
                    href={cat.href}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      borderRadius: 0,
                      borderWidth: "2px",
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontWeight: 800,
                      textTransform: "uppercase",
                      "&:hover": {
                        borderWidth: "2px",
                        bgcolor: "primary.main",
                        color: "#fff",
                      },
                    }}
                  >
                    Explore Collection
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
