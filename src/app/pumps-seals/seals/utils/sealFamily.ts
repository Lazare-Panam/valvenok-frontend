// src/app/mechanical-seals/utils/sealFamily.ts
import { MechanicalSealDTO } from '@/src/api/sealApi'

export interface SealFamily {
  code: string              // "AS91", "CS52CX", etc.
  variantCount: number
  minPrice: number
  maxPrice: number
  sizeRange: string         // "25mm – 150mm" or "0.5\" – 4.0\""
  sampleImage: string
  variants: MechanicalSealDTO[]
}

/** "AS104 (40mm)" -> "AS104" */
export function getFamilyCode(partNumber: string): string {
  return partNumber.split(/\s|\(/)[0].trim()
}

const parseNum = (v?: string | null): number | null => {
  if (!v) return null
  const n = parseFloat(v.replace(/[^\d.]/g, ''))
  return Number.isFinite(n) ? n : null
}

export function groupIntoFamilies(seals: MechanicalSealDTO[]): SealFamily[] {
  const buckets = new Map<string, MechanicalSealDTO[]>()
  for (const s of seals) {
    const code = getFamilyCode(s.partNumber)
    const arr = buckets.get(code) ?? []
    arr.push(s)
    buckets.set(code, arr)
  }

  const families: SealFamily[] = []
  for (const [code, variants] of buckets) {
    const prices = variants.map(v => v.price)
    const mmSizes = variants.map(v => parseNum(v.sealSizeMm)).filter((n): n is number => n !== null)
    const inchSizes = variants.map(v => parseNum(v.sealSizeInch)).filter((n): n is number => n !== null)

    let sizeRange = ''
    if (mmSizes.length) {
      sizeRange = `${Math.min(...mmSizes)}mm – ${Math.max(...mmSizes)}mm`
    } else if (inchSizes.length) {
      sizeRange = `${Math.min(...inchSizes)}" – ${Math.max(...inchSizes)}"`
    }

    families.push({
      code,
      variantCount: variants.length,
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices),
      sizeRange,
      sampleImage: variants[0].imageUrl,
      variants,
    })
  }

  return families.sort((a, b) => a.code.localeCompare(b.code, undefined, { numeric: true }))
}