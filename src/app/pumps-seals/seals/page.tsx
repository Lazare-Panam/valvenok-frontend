// src/app/mechanical-seals/page.tsx
'use client'
import { useState } from 'react'
import { SealsLandingView } from './components/SealsLandingView'
import { SealsDetailView } from './components/SealsDetailView'
import { SealModelEntry } from './components/sealCatalog'
export default function MechanicalSealsPage() {
  const [selectedModel, setSelectedModel] = useState<SealModelEntry | null>(null)

  if (!selectedModel) {
    return <SealsLandingView onSelectPriced={setSelectedModel} />
  }

  return (
    <SealsDetailView
      model={selectedModel}
      onBack={() => setSelectedModel(null)}
    />
  )
}