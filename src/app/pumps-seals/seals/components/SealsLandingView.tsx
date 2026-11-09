'use client'
import { useState } from 'react'
import { Box } from '@mui/material'

import ProductHero from '../../../Common/Products_Page/ProductHero'
import TrustStrip from '../../../Common/Products_Page/TrustStrip'
import ProductCard from '../../../Common/Products_Page/ProductCard'
import RFQModal from '../../../Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '../../../Common/RFQCard/RequestForQuoteCard'
import { ALL_SEAL_MODELS, TRUST_POINTS, SealModelEntry } from './sealCatalog'

interface Props {
  onSelectPriced: (model: SealModelEntry) => void
}

export function SealsLandingView({ onSelectPriced }: Props) {
  const [rfqProduct, setRfqProduct] = useState<ProductForRFQ | null>(null)

  const handleCardClick = (model: SealModelEntry) => {
    if (model.kind === 'rfq' && model.rfqProduct) {
      setRfqProduct(model.rfqProduct)
    } else {
      onSelectPriced(model)
    }
  }

  return (
    <>
      <ProductHero
        title="Mechanical Seals"
        subtitle="Agitator, Cartridge, Dry-Running & Component Seals"
        description="A complete range of mechanical seals for agitators, glass-lined reactors and process pumps. Engineered for reliable sealing across the most demanding chemical, pharmaceutical and industrial applications."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/seals-hero.webp"
        imageAlt="Valvenok Mechanical Seals"
        breadcrumb="Products / Mechanical Seals"
      />

      <Box sx={{
        maxWidth: 1400,
        mx: 'auto',
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 6 },
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        },
        gap: 3,
      }}>
        {ALL_SEAL_MODELS.map(model => (
          <Box
            key={model.code}
            onClick={() => handleCardClick(model)}
            sx={{ cursor: 'pointer' }}
          >
            <ProductCard category={model} />
          </Box>
        ))}
      </Box>

      <TrustStrip points={TRUST_POINTS} />

      {rfqProduct && (
        <RFQModal
          open={!!rfqProduct}
          onClose={() => setRfqProduct(null)}
          product={rfqProduct}
        />
      )}
    </>
  )
}