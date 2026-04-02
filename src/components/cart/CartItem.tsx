"use client"
import { useState } from "react"
import { Box, Typography, Stack, IconButton, TextField, Button, Fade, Chip, Input } from "@mui/material"
import Grid from "@mui/material/Grid"
import CloseIcon from "@mui/icons-material/Close"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import VerifiedIcon from "@mui/icons-material/Verified"

const BRAND_BLUE = "#01B0F0"

interface CartItemProps {
  item: any
  onUpdateQuantity: (id: string, hasCertificates: boolean | undefined, delta: number) => void
  onRemove: (id: string, hasCertificates: boolean | undefined) => void
  onUpdateNotes: (id: string, hasCertificates: boolean | undefined, notes: string) => void
}

const CartItem = ({ item, onUpdateQuantity, onRemove, onUpdateNotes }: CartItemProps) => {
  const [localNotes, setLocalNotes] = useState(item.notes || "")
  const [isSaved, setIsSaved] = useState(false)

  const fullDescription = Object.values(item.specs || {}).filter(v => v).join(", ")

  const handleSaveNotes = () => {
    onUpdateNotes(item.cartItemId, item.hasCertificates, localNotes)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  return (
    <Box sx={{ borderBottom: "1px solid #e0e0e0", py: 4 }}>
      <Grid container alignItems="flex-start" spacing={2}>
        
        {/* 1. Item Details */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#1E293B", mb: 0.5, lineHeight: 1.2 }}>
              {fullDescription || item.name}
            </Typography>
            
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2" sx={{ color: "#64748B", fontWeight: 600, fontFamily: "monospace" }}>
                PART: {item.partNumber}
              </Typography>
              
              {item.hasCertificates && (
                <Chip 
                  icon={<VerifiedIcon sx={{ "&&": { color: "white", fontSize: "14px" } }} />} 
                  label="3.1 CERT" 
                  size="small"
                  sx={{ 
                    bgcolor: BRAND_BLUE, 
                    color: "white", 
                    fontWeight: 900, 
                    borderRadius: 0, 
                    height: 20,
                    fontSize: "10px"
                  }} 
                />
              )}
            </Stack>
          </Box>
        </Grid>

        {/* 2. Notes Section */}
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth 
            multiline 
            rows={2}
            value={localNotes}
            onChange={(e) => { setLocalNotes(e.target.value); setIsSaved(false); }}
            placeholder="Add specific instructions for this item..."
            sx={{ 
              "& .MuiOutlinedInput-root": { borderRadius: 0, fontSize: "0.85rem" },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "#E2E8F0" }
            }}
          />
          <Box sx={{ mt: 1, height: "24px", display: "flex", alignItems: "center" }}>
            {isSaved ? (
              <Fade in={isSaved}>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <CheckCircleIcon sx={{ color: "#10B981", fontSize: "1rem" }} />
                  <Typography variant="caption" sx={{ color: "#10B981", fontWeight: 800, textTransform: "uppercase" }}>
                    Notes Updated
                  </Typography>
                </Stack>
              </Fade>
            ) : (
              <Button 
                onClick={handleSaveNotes} 
                disabled={localNotes === (item.notes || "")}
                sx={{ 
                  p: 0, 
                  color: BRAND_BLUE, 
                  fontWeight: 700, 
                  fontSize: "0.75rem", 
                  textTransform: "uppercase",
                  minWidth: 0,
                  "&:hover": { bgcolor: "transparent", textDecoration: "underline" }
                }}
              >
                Save Instructions
              </Button>
            )}
          </Box>
        </Grid>

        {/* 3. Quantity & Removal */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Stack direction="row" spacing={2} alignItems="center" justifyContent={{ xs: "flex-start", md: "center" }}>
            <Stack direction="row" alignItems="center" sx={{ border: "1px solid #E2E8F0", bgcolor: "#F8FAFC" }}>
              <IconButton 
                size="small" 
                onClick={() => onUpdateQuantity(item.cartItemId, item.hasCertificates, -1)}
                sx={{ borderRadius: 0 }}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>

              <Input
                value={item.quantity}
                disableUnderline
                inputProps={{
                  style: { textAlign: "center", fontWeight: 800, width: 40, fontSize: "0.9rem" },
                  readOnly: true
                }}
              />

              <IconButton 
                size="small" 
                onClick={() => onUpdateQuantity(item.cartItemId, item.hasCertificates, 1)}
                sx={{ borderRadius: 0 }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Stack>

            <IconButton 
              onClick={() => onRemove(item.cartItemId, item.hasCertificates)} 
              sx={{ color: "#CBD5E1", "&:hover": { color: "#ef4444" } }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CartItem