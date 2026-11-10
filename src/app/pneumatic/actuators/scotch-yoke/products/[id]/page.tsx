'use client'

import { useParams, useRouter } from 'next/navigation'
import { Box, Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { ACTUATOR_DATA, type ActuatorItem } from '../../pneumaticActuatorData'
import { useCartStore, type CartItem } from '@/src/app/cart/hooks/useCartStore'
import ProductDetailLayout, { type DetailSpec } from '@/src/app/Common/ProductDetail/ProductDetailLayout'

const BASE = '/pneumatic/actuators/scotch-yoke/products'
const CART_GREEN = '#2e7d32'

const gbp = (n: number) =>
  `£${n.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

function specsOf(row: ActuatorItem): DetailSpec[] {
  return [
    { label: 'Model', value: row.model },
    { label: 'Series', value: row.series },
    { label: 'Actuator Type', value: row.actuatorType },
    { label: 'Action', value: row.action },
    { label: 'Size', value: `${row.size} mm` },
    { label: 'Price (GBP)', value: gbp(row.priceGBP) },
    { label: 'Certifications', value: 'CE · ATEX · SIL' },
  ]
}

function toCartItem(row: ActuatorItem): CartItem {
  return {
    id: row.model,
    name: `${row.model} — ${row.actuatorType} Pneumatic Actuator`,
    description: `Type: ${row.actuatorType}, Action: ${row.action}, Size: ${row.size}mm`,
    partNumber: row.model,
    price: row.priceGBP,
    quantity: 1,
    cloudinaryId: row.imageUrl,
  }
}

export default function ScotchYokeDetailPage() {
  const params = useParams()
  const router = useRouter()
  const addItem = useCartStore((state) => state.addItem)

  const slug = decodeURIComponent(Array.isArray(params.id) ? params.id[0] : params.id ?? '')
  const row = ACTUATOR_DATA.find((d) => d.model === slug)

  if (!row) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>PRODUCT NOT FOUND</Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.push(BASE)} sx={{ fontWeight: 700, color: CART_GREEN }}>
          Browse Pneumatic Actuators
        </Button>
      </Box>
    )
  }

  const description = `Panam ${row.model} ${row.actuatorType} pneumatic actuator, ${row.action.toLowerCase()}, ${row.size} mm. For industrial valve automation with CE, ATEX and SIL certification.`

  const similar = ACTUATOR_DATA.filter((d) => d.series === row.series && d.model !== row.model).slice(0, 3).map((d) => ({
    id: d.model,
    title: d.model,
    subtitle: `${d.size} mm · ${gbp(d.priceGBP)}`,
    thumbnail: d.imageUrl,
    href: `${BASE}/${encodeURIComponent(d.model)}`,
  }))

  return (
    <ProductDetailLayout
      heading={row.model}
      eyebrow={`${row.actuatorType} · ${row.action}`}
      thumbnail={row.imageUrl}
      description={description}
      specs={specsOf(row)}
      benefits={[
        `${row.actuatorType} mechanism for industrial valve automation`,
        'CE, ATEX and SIL certification (varies by model)',
        `${row.action} operation`,
        'In stock — priced and ready to order',
      ]}
      primaryLabel="Add to Cart"
      onPrimary={() => addItem(toCartItem(row))}
      secondaryLabel="Browse All Actuators"
      onSecondary={() => router.push(BASE)}
      backHref={BASE}
      backLabel="Back to Pneumatic Actuators"
      similar={similar}
      similarHeading={`More ${row.series} Series`}
      accent={CART_GREEN}
      accentHover="#1b5e20"
    />
  )
}
