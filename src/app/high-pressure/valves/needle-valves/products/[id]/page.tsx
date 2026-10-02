'use client'
import { useParams } from 'next/navigation'
import { useValveProducts } from '@/src/app/Common/catalog/useCatalogData'
import CatalogDetail from '@/src/app/Common/catalog/CatalogDetail'
import { makeValveGrid } from '@/src/app/Common/catalog/valveGrid'

const SLUG = 'needle-valves'
const config = makeValveGrid({ slug: SLUG, categoryLabel: 'High Pressure Needle Valves', valveLabel: 'Needle Valve' })

export default function NeedleValveDetailPage() {
  const { id } = useParams()
  const { data, isLoading } = useValveProducts(SLUG)
  return <CatalogDetail all={isLoading ? null : (data ?? [])} id={String(id)} config={config} />
}
