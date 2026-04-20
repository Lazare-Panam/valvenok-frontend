"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchRfqProductsByCategory } from "@/src/api/productApi";
import {
  Grid,
  Container,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import RfqProductCard from "../RfqProductCard";

export default function RfqCategoryListingPage() {
  const { rfqId  } = useParams();

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["rfq-products", rfqId],
    queryFn: () => fetchRfqProductsByCategory(rfqId as string),
    enabled: !!rfqId,
  });

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 20 }}>
        <CircularProgress sx={{ color: "#61D649" }} />
      </Box>
    );
  }

  if (isError) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h5"
          color="error"
          sx={{ fontFamily: '"Barlow Condensed"' }}
        >
          ERROR LOADING RFQ COLLECTION
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 10 }}>
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 6, mb: 6 }}>
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 900,
              textTransform: "uppercase",
            }}
          >
            {rfqId?.toString().replace(/-/g, " ")}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {products?.map((item) => (
            <Grid key={item.productId} size={{ xs: 12, sm: 6, md: 4 }}>
              <RfqProductCard product={item} />
            </Grid>
          ))}
        </Grid>

        {products?.length === 0 && (
          <Typography
            variant="h6"
            sx={{ textAlign: "center", mt: 10, opacity: 0.5 }}
          >
            NO PRODUCTS FOUND IN THIS CATEGORY.
          </Typography>
        )}
      </Container>
    </Box>
  );
}
