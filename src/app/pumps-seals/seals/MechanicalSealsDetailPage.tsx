import {
  Box, Stack, Typography, Button, Divider, Breadcrumbs,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MechanicalSealDTO } from "@/src/api/sealApi";
import { useCartStore } from "../../cart/hooks/useCartStore";
import { useNotificationStore } from "@/src/store/useNotificationStore";

interface Props {
  seal: MechanicalSealDTO
  onBack: () => void
}

function SpecCard({ label, value }: { label: string; value: string }) {
  const theme = useTheme()
  return (
    <Box sx={{
      p: 2,
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: "8px",
      bgcolor: alpha(theme.palette.primary.main, 0.02),
      minWidth: 130,
    }}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}
        sx={{ display: "block", textTransform: "uppercase", mb: 0.5, letterSpacing: 0.5 }}>
        {label}
      </Typography>
      <Typography variant="body1" fontWeight={700}>{value}</Typography>
    </Box>
  )
}

export default function MechanicalSealDetailPage({ seal, onBack }: Props) {
  const theme = useTheme()
  const addItem = useCartStore((s) => s.addItem)
  const showNotification = useNotificationStore((s) => s.showNotification)

  const handleAddToCart = () => {
    addItem({
      id: String(seal.id),
      name: seal.partNumber,
      description: `Mechanical Seal — ${seal.sealSizeMm ?? seal.shaftSizeMm ?? ""}`,
      partNumber: seal.partNumber,
      price: seal.price,
      quantity: 1,
      cloudinaryId: seal.imageUrl,
    })
    showNotification({ message: "Added to cart", severity: "success", partNumber: seal.partNumber })
  }

  const specs = [
    seal.shaftSizeMm && { label: "Shaft Size", value: seal.shaftSizeMm },
    seal.sealSizeMm && { label: "Seal Size (MM)", value: seal.sealSizeMm },
    seal.sealSizeInch && { label: "Seal Size (Inch)", value: seal.sealSizeInch },
    { label: "Price", value: `£${seal.price.toFixed(2)}` },
  ].filter(Boolean) as { label: string; value: string }[]

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      <Box sx={{ p: { xs: 2, md: 4 }, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: "background.paper" }}>
        <Breadcrumbs sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary"
            sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
            onClick={onBack}>
            Mechanical Seals
          </Typography>
          <Typography variant="body2" color="text.primary">{seal.partNumber}</Typography>
        </Breadcrumbs>
        <Button startIcon={<ArrowBackIcon />} onClick={onBack} size="small"
          sx={{ textTransform: "none", fontWeight: 700 }}>
          Back to results
        </Button>
      </Box>

      <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1000, mx: "auto" }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={5} alignItems="flex-start">

          {/* LEFT — Image */}
          <Box sx={{
            flexShrink: 0,
            width: { xs: "100%", md: 380 },
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: "12px",
            bgcolor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 4,
            aspectRatio: "1 / 1",
          }}>
            <Box component="img" src={seal.imageUrl} alt={seal.partNumber}
              sx={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </Box>

          {/* RIGHT — Details */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="caption" fontWeight={900} color="primary"
              sx={{ letterSpacing: 1, display: "block", mb: 1 }}>
              MECHANICAL SEAL
            </Typography>
            <Typography variant="h4" fontWeight={800} fontFamily="monospace" mb={1}>
              {seal.partNumber}
            </Typography>
            <Typography variant="h5" fontWeight={700} color="primary.main" mb={3}>
              £{seal.price.toFixed(2)}
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Typography variant="caption" fontWeight={900} color="text.secondary"
              sx={{ letterSpacing: 1, display: "block", mb: 2 }}>
              SPECIFICATIONS
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={2} mb={4}>
              {specs.map((s) => <SpecCard key={s.label} label={s.label} value={s.value} />)}
            </Stack>

            <Button variant="contained" size="large" startIcon={<ShoppingCartIcon />}
              onClick={handleAddToCart}
              sx={{ textTransform: "none", fontWeight: 700, borderRadius: "8px", px: 4, py: 1.5 }}>
              Add to Cart
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}