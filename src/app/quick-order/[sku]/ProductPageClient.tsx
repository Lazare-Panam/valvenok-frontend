"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ProductInfoTabs from "./ProductInfoTabs";
import { alpha } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { ProductQuickOrder } from "../product";
import { ProductContent } from "../product-content";
import RelatedProducts from "@/src/components/RelatedProducts";
import AddToCartSection from "./AddToCartSection";
import PromoBar from "./PromoBar";

interface Props {
  product: ProductQuickOrder;
  content: ProductContent;
}

export default function ProductPageClient({ product, content }: Props) {
  const router = useRouter();

  // ── JSON-LD STRUCTURED DATA ──
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": `PANAM ${product.name}`,
    "image": product.cloudinaryId,
    "description": content.metaDescription,
    "sku": product.sku,
    "mpn": product.sku,
    "brand": {
      "@type": "Brand",
      "name": "Panam"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.valvenok.com/quick-order/${product.sku}`,
      "priceCurrency": "GBP",
      "price": product.price,
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hidden SEO Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Promo bar */}
      <PromoBar />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Box
          sx={{
            display: "flex",
            gap: { xs: 4, md: 6 },
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
          }}
        >
          {/* LEFT — Image */}
          <Box
            sx={{
              width: { xs: "100%", md: 360 },
              flexShrink: 0,
              border: "1px solid",
              borderColor: "divider",
              aspectRatio: "1 / 1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: (t) => alpha(t.palette.text.primary, 0.02),
              p: 4,
            }}
          >
            {product.cloudinaryId ? (
              <img
                src={product.cloudinaryId}
                alt={`${content.metaTitle.replace(' | Valvenok', '')} - Part ${product.sku}`}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            ) : (
              <Typography
                sx={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "12px",
                  color: "text.secondary",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                No Image
              </Typography>
            )}
          </Box>

          {/* RIGHT — Details */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box>
              <Typography
                component="h1"
                sx={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "26px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "text.primary",
                  mb: 0.5,
                }}
              >
                PANAM {product.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "primary.main",
                  mb: 0.5,
                }}
              >
                Part Number : {product.sku}
              </Typography>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Specs Table */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "text.secondary",
                    mb: 1.5,
                  }}
                >
                  Specifications
                </Typography>
                <Box
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    overflow: "hidden",
                  }}
                >
                  {Object.entries(product.specs).map(([key, value], i, arr) => (
                    <Box
                      key={key}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "160px 1fr",
                        borderBottom: i < arr.length - 1 ? "1px solid" : "none",
                        borderColor: "divider",
                        bgcolor:
                          i % 2 === 0
                            ? "background.default"
                            : (t) => alpha(t.palette.text.primary, 0.02),
                      }}
                    >
                      <Box
                        sx={{
                          px: 2,
                          py: 1.25,
                          borderRight: "1px solid",
                          borderColor: "divider",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"Barlow Condensed", sans-serif',
                            fontSize: "11px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: "text.secondary",
                          }}
                        >
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </Typography>
                      </Box>
                      <Box sx={{ px: 2, py: 1.25 }}>
                        <Typography
                          sx={{
                            fontFamily: '"Barlow Condensed", sans-serif',
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "text.primary",
                          }}
                        >
                          {value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            <Divider sx={{ mb: 3 }} />
            <AddToCartSection product={product} />
            <Divider sx={{ mt: 3, mb: 3 }} />

            <Button
              variant="outlined"
              href="/quick-order"
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                px: 3,
                py: 1.25,
                boxShadow: "none",
                borderRadius: "3px",
                borderColor: "divider",
                color: "text.secondary",
                "&:hover": {
                  boxShadow: "none",
                  borderColor: "primary.main",
                  color: "primary.main",
                },
              }}
            >
              ← Back to Quick Order
            </Button>
          </Box>
        </Box>

        {/* ─── NEW: PRODUCT DESCRIPTION ────────────────────────────── */}
              <ProductInfoTabs content={content} />
        {/* ─── END NEW SECTIONS ────────────────────────────────────── */}

        <RelatedProducts
          currentSku={product.sku}
          category={product.category}
          count={6}
        />
      </Container>
    </Box>
  );
}