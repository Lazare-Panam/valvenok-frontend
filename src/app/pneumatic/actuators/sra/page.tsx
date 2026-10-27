'use client'
import { useState } from 'react'
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Box, Typography, IconButton, Collapse, Stack, Divider, Paper, Button
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { CartItem, useCartStore } from '@/src/app/cart/hooks/useCartStore'

const IMAGE_URL = 'https://pblol2.blob.core.windows.net/spac-images/products/actuators/SRA-25-02.jpg'

interface ActuatorProduct {
  partNo: string
  description: string
  category: string
  price: number
}

const PRODUCTS: ActuatorProduct[] = [
  { partNo: 'SRA-052', description: 'Double Acting Actuator-052', category: 'Actuator', price: 101.40 },
  { partNo: 'SRA-063', description: 'Double Acting Actuator-063', category: 'Actuator', price: 125.64 },
  { partNo: 'SRA-075', description: 'Double Acting Actuator-075', category: 'Actuator', price: 152.13 },
  { partNo: 'SRA-083', description: 'Double Acting Actuator-083', category: 'Actuator', price: 175.53 },
  { partNo: 'SRA-092', description: 'Double Acting Actuator-092', category: 'Actuator', price: 222.09 },
  { partNo: 'G321TB',  description: '3/2 Turning Actuator Valve BSP 1/8"', category: 'Valve', price: 14.70 },
  { partNo: 'G321LB',  description: '3/2 Lever Actuator Valve BSP 1/8"',   category: 'Valve', price: 15.51 },
]

const cartBtnSx = {
  fontSize: '0.7rem',
  fontWeight: 700,
  py: 0.5,
  px: 1.5,
  borderRadius: '4px',
  textTransform: 'none' as const,
  whiteSpace: 'nowrap' as const,
  boxShadow: 'none',
  backgroundColor: '#2e7d32',
  '&:hover': { boxShadow: 'none', backgroundColor: '#1b5e20' },
}

function fmt(n: number) {
  return `£${n.toFixed(2)}`
}

function toCartItem(p: ActuatorProduct): CartItem {
  return {
    id: p.partNo,
    name: `${p.category} — ${p.partNo}`,
    description: p.description,
    partNumber: p.partNo,
    price: p.price,
    quantity: 1,
    cloudinaryId: IMAGE_URL,
  }
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase' }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Box>
  )
}

function DataRow({ p }: { p: ActuatorProduct }) {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addItem(toCartItem(p))
  }

  return (
    <>
      <TableRow hover onClick={() => setOpen(!open)}
        sx={{
          cursor: 'pointer',
          bgcolor: open ? alpha(theme.palette.primary.main, 0.04) : 'inherit',
          '& td': { borderBottom: open ? 'none' : undefined },
          '&:hover': { bgcolor: `${alpha(theme.palette.primary.main, 0.03)} !important` },
        }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={(e) => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ width: 60, py: 1 }}>
          <Box sx={{
            width: 48, height: 48,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 1, bgcolor: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center', p: 0.5,
          }}>
            <Box component="img" src={IMAGE_URL} alt={p.partNo}
              sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </Box>
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 700, color: theme.palette.primary.main, fontSize: '0.8rem' }}>
            {p.partNo}
          </Typography>
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Typography variant="body2">{p.description}</Typography>
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Typography variant="caption" fontWeight={700} color="text.secondary"
            sx={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.7rem' }}>
            {p.category}
          </Typography>
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Typography variant="body2" fontWeight={800} color="primary.main">
            {fmt(p.price)}
          </Typography>
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained" onClick={handleAddToCart} sx={cartBtnSx}>
            Add to Cart
          </Button>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell colSpan={7} sx={{ p: 0, borderBottom: open ? `1px solid ${theme.palette.divider}` : 'none' }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{
              p: 4,
              bgcolor: alpha(theme.palette.primary.main, 0.02),
              borderLeft: `4px solid ${theme.palette.primary.main}`,
            }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
                <Stack direction="row" spacing={3} alignItems="flex-start" sx={{ flex: 1 }}>
                  <Box sx={{
                    width: 140, height: 140, flexShrink: 0,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 1, bgcolor: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1.5,
                  }}>
                    <Box component="img" src={IMAGE_URL} alt={p.partNo}
                      sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} color="primary"
                      sx={{ display: 'block', mb: 2, letterSpacing: 1 }}>
                      PRODUCT SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" spacing={4} flexWrap="wrap" useFlexGap rowGap={2}>
                      <DetailRow label="Part No" value={p.partNo} />
                      <DetailRow label="Description" value={p.description} />
                      <DetailRow label="Category" value={p.category} />
                    </Stack>
                  </Box>
                </Stack>

                <Divider orientation="vertical" flexItem />

                <Box sx={{ minWidth: 220 }}>
                  <Typography variant="caption" fontWeight={900} color="text.disabled"
                    sx={{ display: 'block', mb: 2, letterSpacing: 1 }}>
                    ORDER SUMMARY
                  </Typography>
                  <Typography variant="h5" fontWeight={800} color="primary.main" sx={{ mb: 0.5 }}>
                    {fmt(p.price)}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block" mb={2}>
                    Excl. VAT
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 3 }}>
                    <Box sx={{ width: 8, height: 8, bgcolor: 'success.main', borderRadius: '50%' }} />
                    <Typography variant="caption" fontWeight={700} color="success.main">Available to Order</Typography>
                  </Stack>
                  <Button
                    variant="contained"
                    onClick={handleAddToCart}
                    sx={{ ...cartBtnSx, fontSize: '0.85rem', py: 1, px: 3 }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default function ActuatorsRangePage() {
  const theme = useTheme()

  const headerStyle = {
    bgcolor: alpha(theme.palette.primary.main, 0.04),
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    fontWeight: 700, fontSize: '0.72rem', py: 1.5,
    color: theme.palette.text.primary,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>
          Actuators & Valves
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          Double acting pneumatic actuators and 3/2 actuator valves for industrial process control. BSP 1/8" connections and fast-response operation.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['Double Acting', 'BSP 1/8"', 'Process Control', '3/2 Valves'].map(s => (
            <Box key={s} sx={{
              px: 1.5, py: 0.5, borderRadius: '20px',
              fontSize: '0.75rem', fontWeight: 600,
              bgcolor: alpha(theme.palette.primary.main, 0.08),
              color: theme.palette.primary.dark,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Box sx={{
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          borderRadius: '8px',
          overflow: 'hidden',
          bgcolor: 'background.paper',
        }}>
          <TableContainer>
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...headerStyle, width: 40 }} />
                  <TableCell sx={{ ...headerStyle, width: 60 }} />
                  {['Part No', 'Description', 'Category', 'Price', 'Cart'].map(h => (
                    <TableCell key={h} sx={headerStyle}>{h}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {PRODUCTS.map(p => <DataRow key={p.partNo} p={p} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  )
}