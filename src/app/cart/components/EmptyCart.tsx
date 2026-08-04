"use client";

import { Box, Typography, Button, Container } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

export default function EmptyCartView() {
  const router = useRouter();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          py: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: 120,
            height: 120,
            bgcolor: "background.default",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 4,
            border: "3px solid",
            borderColor: "primary.main",
          }}
        >
          <ShoppingCartOutlinedIcon
            sx={{ fontSize: 60, color: "primary.main" }}
          />
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontWeight: 900,
            mb: 2,
            textTransform: "uppercase",
            fontFamily: '"Barlow Condensed"',
          }}
        >
          Cart is Empty
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 5,
            fontWeight: 500,
            maxWidth: 400,
          }}
        >
          Your procurement list is empty. Access the industrial catalog to
          select components for your project.
        </Typography>

        <Button
          variant="contained"
          fullWidth
          onClick={() => router.push("/products")}
          endIcon={<ArrowForwardIcon />}
          sx={{
            bgcolor: "primary.main",
            borderRadius: 0,
            fontWeight: 900,
            py: 2,
            fontSize: "1.1rem",
            fontFamily: '"Barlow Condensed"',
          }}
        >
          Explore Catalog
        </Button>
      </Box>
    </Container>
  );
}
