export interface PipeFittingNippleDTO {
  id: string
  partNumber: string
  fittingType: string
  p1Size: string
  p1Thread: string
  p2Size: string
  p2Thread: string
  pressureRating: string
  pressurePsi: number
  material: string
  imageUrl: string
  description: string
}

export interface PipeFittingNippleFilters {
  fittingTypes: string[]
  pressureRatings: string[]
  p1Threads: string[]
  p1Sizes: string[]
  p2Threads: string[]
  p2Sizes: string[]
}

export const EMPTY_NIPPLE_PIPE_FILTERS: PipeFittingNippleFilters = {
  fittingTypes: [],
  pressureRatings: [],
  p1Threads: [],
  p1Sizes: [],
  p2Threads: [],
  p2Sizes: [],
}

export interface AvailableCountsNipplePipe {
  fittingTypes: Record<string, number>
  pressureRatings: Record<string, number>
  p1Threads: Record<string, number>
  p1Sizes: Record<string, number>
  p2Threads: Record<string, number>
  p2Sizes: Record<string, number>
}

export function applyFilters(data: PipeFittingNippleDTO[], filters: PipeFittingNippleFilters, exclude: keyof PipeFittingNippleFilters | ""): PipeFittingNippleDTO[] {
  return data.filter(c => {
    if (exclude !== "fittingTypes"    && filters.fittingTypes.length    && !filters.fittingTypes.includes(c.fittingType))      return false
    if (exclude !== "pressureRatings" && filters.pressureRatings.length && !filters.pressureRatings.includes(c.pressureRating)) return false
    if (exclude !== "p1Threads"       && filters.p1Threads.length       && !filters.p1Threads.includes(c.p1Thread))            return false
    if (exclude !== "p1Sizes"         && filters.p1Sizes.length         && !filters.p1Sizes.includes(c.p1Size))                return false
    if (exclude !== "p2Threads"       && filters.p2Threads.length       && !filters.p2Threads.includes(c.p2Thread))            return false
    if (exclude !== "p2Sizes"         && filters.p2Sizes.length         && !filters.p2Sizes.includes(c.p2Size))                return false
    return true
  })
}

export function countBy<T>(items: T[], keyFn: (item: T) => string): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const k = keyFn(item)
    counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}

const IMG_HN    = "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/hex-nipples.jpg"
const IMG_RHN   = "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/reducing-hex-nipples.jpg"
const IMG_OTHER = "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/hex-nipples.jpg"

const make = (pn: string, fittingType: string, p1Size: string, p1Thread: string, p2Size: string, p2Thread: string, pressureRating: string, pressurePsi: number, imageUrl: string): PipeFittingNippleDTO => ({
  id: `${pn}-${p1Size}-${p2Size}`,
  partNumber: pn,
  fittingType,
  p1Size,
  p1Thread,
  p2Size,
  p2Thread,
  pressureRating,
  pressurePsi,
  material: "SS 316",
  imageUrl,
  description: `Panam ${fittingType} ${pn}, P1: ${p1Size} ${p1Thread}, P2: ${p2Size} ${p2Thread}, SS 316, ${pressureRating}.`,
})

export const PIPE_NIPPLE_DATA: PipeFittingNippleDTO[] = [
  make("PHN-2N-SS-15K",  "Hex Nipple", '1/8"', "NPT", '1/8"', "NPT", "15,000 psi", 15000, IMG_HN),
  make("PHN-4N-SS-15K",  "Hex Nipple", '1/4"', "NPT", '1/4"', "NPT", "15,000 psi", 15000, IMG_HN),
  make("PHN-6N-SS-15K",  "Hex Nipple", '3/8"', "NPT", '3/8"', "NPT", "15,000 psi", 15000, IMG_HN),
  make("PHN-8N-SS-15K",  "Hex Nipple", '1/2"', "NPT", '1/2"', "NPT", "15,000 psi", 15000, IMG_HN),
  make("PHN-12N-SS-10K", "Hex Nipple", '3/4"', "NPT", '3/4"', "NPT", "10,000 psi", 10000, IMG_HN),
  make("PHN-16N-SS-10K", "Hex Nipple", '1"',   "NPT", '1"',   "NPT", "10,000 psi", 10000, IMG_HN),
  make("PRHN-4N-2N-SS-15K",  "Reducing Hex Nipple", '1/4"', "NPT", '1/8"', "NPT", "15,000 psi", 15000, IMG_RHN),
  make("PRHN-4N-6N-SS-15K",  "Reducing Hex Nipple", '1/4"', "NPT", '3/8"', "NPT", "15,000 psi", 15000, IMG_RHN),
  make("PRHN-6N-2N-SS-15K",  "Reducing Hex Nipple", '3/8"', "NPT", '1/8"', "NPT", "15,000 psi", 15000, IMG_RHN),
  make("PRHN-6N-4N-SS-15K",  "Reducing Hex Nipple", '3/8"', "NPT", '1/4"', "NPT", "15,000 psi", 15000, IMG_RHN),
  make("PRHN-8N-2N-SS-15K",  "Reducing Hex Nipple", '1/2"', "NPT", '1/8"', "NPT", "15,000 psi", 15000, IMG_RHN),
  make("PRHN-8N-4N-SS-15K",  "Reducing Hex Nipple", '1/2"', "NPT", '1/4"', "NPT", "15,000 psi", 15000, IMG_RHN),
  make("PRHN-8N-6N-SS-15K",  "Reducing Hex Nipple", '1/2"', "NPT", '3/8"', "NPT", "15,000 psi", 15000, IMG_RHN),
  make("PRHN-12N-2N-SS-10K", "Reducing Hex Nipple", '3/4"', "NPT", '1/8"', "NPT", "10,000 psi", 10000, IMG_RHN),
  make("PRHN-12N-4N-SS-10K", "Reducing Hex Nipple", '3/4"', "NPT", '1/4"', "NPT", "10,000 psi", 10000, IMG_RHN),
  make("PRHN-12N-6N-SS-10K", "Reducing Hex Nipple", '3/4"', "NPT", '3/8"', "NPT", "10,000 psi", 10000, IMG_RHN),
  make("PRHN-12N-8N-SS-10K", "Reducing Hex Nipple", '3/4"', "NPT", '1/2"', "NPT", "10,000 psi", 10000, IMG_RHN),
  make("PRHN-16N-2N-SS-10K", "Reducing Hex Nipple", '1"',   "NPT", '1/8"', "NPT", "10,000 psi", 10000, IMG_RHN),
  make("PRHN-16N-4N-SS-10K", "Reducing Hex Nipple", '1"',   "NPT", '1/4"', "NPT", "10,000 psi", 10000, IMG_RHN),
  make("PRHN-16N-6N-SS-10K", "Reducing Hex Nipple", '1"',   "NPT", '3/8"', "NPT", "10,000 psi", 10000, IMG_RHN),
  make("PRHN-16N-8N-SS-10K", "Reducing Hex Nipple", '1"',   "NPT", '1/2"', "NPT", "10,000 psi", 10000, IMG_RHN),
  make("PRHN-16N-12N-SS-10K","Reducing Hex Nipple", '1"',   "NPT", '3/4"', "NPT", "10,000 psi", 10000, IMG_RHN),
  make("PHN-2G-SS-15K",  "Hex Nipple", '1/8"',   "ISO Parallel", '1/8"',   "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-4G-SS-15K",  "Hex Nipple", '1/4"',   "ISO Parallel", '1/4"',   "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-6G-SS-15K",  "Hex Nipple", '3/8"',   "ISO Parallel", '3/8"',   "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-8G-SS-15K",  "Hex Nipple", '1/2"',   "ISO Parallel", '1/2"',   "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-10G-SS-10K", "Hex Nipple", '5/8"',   "ISO Parallel", '5/8"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-12G-SS-10K", "Hex Nipple", '3/4"',   "ISO Parallel", '3/4"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-16G-SS-10K", "Hex Nipple", '1"',     "ISO Parallel", '1"',     "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-20G-SS-10K", "Hex Nipple", '1 1/4"', "ISO Parallel", '1 1/4"', "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-24G-SS-10K", "Hex Nipple", '1 1/2"', "ISO Parallel", '1 1/2"', "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-32G-SS-10K", "Hex Nipple", '2"',     "ISO Parallel", '2"',     "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-2N-2G-SS-15K",  "Hex Nipple", '1/8"', "NPT", '1/8"',   "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-2N-4G-SS-15K",  "Hex Nipple", '1/8"', "NPT", '1/4"',   "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-4N-2G-SS-15K",  "Hex Nipple", '1/4"', "NPT", '1/8"',   "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-4N-4G-SS-15K",  "Hex Nipple", '1/4"', "NPT", '1/4"',   "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-4N-6G-SS-15K",  "Hex Nipple", '1/4"', "NPT", '3/8"',   "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-4N-8G-SS-15K",  "Hex Nipple", '1/4"', "NPT", '1/2"',   "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-6N-4G-SS-15K",  "Hex Nipple", '3/8"', "NPT", '1/4"',   "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-6N-6G-SS-15K",  "Hex Nipple", '3/8"', "NPT", '3/8"',   "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-6N-8G-SS-15K",  "Hex Nipple", '3/8"', "NPT", '1/2"',   "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-8N-4G-SS-15K",  "Hex Nipple", '1/2"', "NPT", '1/4"',   "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-8N-6G-SS-15K",  "Hex Nipple", '1/2"', "NPT", '3/8"',   "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-8N-8G-SS-15K",  "Hex Nipple", '1/2"', "NPT", '1/2"',   "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-8N-10G-SS-10K", "Hex Nipple", '1/2"', "NPT", '5/8"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-8N-12G-SS-10K", "Hex Nipple", '1/2"', "NPT", '3/4"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-12N-8G-SS-10K", "Hex Nipple", '3/4"', "NPT", '1/2"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-12N-12G-SS-10K","Hex Nipple", '3/4"', "NPT", '3/4"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-12N-16G-SS-10K","Hex Nipple", '3/4"', "NPT", '1"',     "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-16N-8G-SS-10K", "Hex Nipple", '1"',   "NPT", '1/2"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-16N-12G-SS-10K","Hex Nipple", '1"',   "NPT", '3/4"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-16N-16G-SS-10K","Hex Nipple", '1"',   "NPT", '1"',     "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-16N-20G-SS-10K","Hex Nipple", '1"',   "NPT", '1 1/4"', "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-4J-SS-15K",    "Hex Nipple", '1/4"',  "37° JIC", '1/4"',  "37° JIC", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-5J-SS-15K",    "Hex Nipple", '5/16"', "37° JIC", '5/16"', "37° JIC", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-6J-SS-15K",    "Hex Nipple", '3/8"',  "37° JIC", '3/8"',  "37° JIC", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-8J-SS-15K",    "Hex Nipple", '1/2"',  "37° JIC", '1/2"',  "37° JIC", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-10J-SS-10K",   "Hex Nipple", '5/8"',  "37° JIC", '5/8"',  "37° JIC", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-12J-SS-10K",   "Hex Nipple", '3/4"',  "37° JIC", '3/4"',  "37° JIC", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-16J-SS-10K",   "Hex Nipple", '1"',    "37° JIC", '1"',    "37° JIC", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-6J-4J-SS-10K", "Hex Nipple", '3/8"',  "37° JIC", '1/4"',  "37° JIC", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-8J-4J-SS-15K", "Hex Nipple", '1/2"',  "37° JIC", '1/4"',  "37° JIC", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-12J-10J-SS-10K","Hex Nipple",'3/4"',  "37° JIC", '5/8"',  "37° JIC", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-2J-4N-SS-10K",  "Hex Nipple", '1/8"', "37° JIC", '1/4"', "NPT", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-4J-4N-SS-15K",  "Hex Nipple", '1/4"', "37° JIC", '1/4"', "NPT", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-4J-6N-SS-15K",  "Hex Nipple", '1/4"', "37° JIC", '3/8"', "NPT", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-4J-8N-SS-15K",  "Hex Nipple", '1/4"', "37° JIC", '1/2"', "NPT", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-6J-4N-SS-15K",  "Hex Nipple", '3/8"', "37° JIC", '1/4"', "NPT", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-6J-6N-SS-15K",  "Hex Nipple", '3/8"', "37° JIC", '3/8"', "NPT", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-6J-8N-SS-15K",  "Hex Nipple", '3/8"', "37° JIC", '1/2"', "NPT", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-8J-4N-SS-15K",  "Hex Nipple", '1/2"', "37° JIC", '1/4"', "NPT", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-8J-6N-SS-15K",  "Hex Nipple", '1/2"', "37° JIC", '3/8"', "NPT", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-8J-8N-SS-15K",  "Hex Nipple", '1/2"', "37° JIC", '1/2"', "NPT", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-8J-12N-SS-10K", "Hex Nipple", '1/2"', "37° JIC", '3/4"', "NPT", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-12J-8N-SS-10K", "Hex Nipple", '3/4"', "37° JIC", '1/2"', "NPT", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-12J-12N-SS-10K","Hex Nipple", '3/4"', "37° JIC", '3/4"', "NPT", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-16J-6N-SS-10K", "Hex Nipple", '1"',   "37° JIC", '3/8"', "NPT", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-16J-8N-SS-10K", "Hex Nipple", '1"',   "37° JIC", '1/2"', "NPT", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-16J-12N-SS-10K","Hex Nipple", '1"',   "37° JIC", '3/4"', "NPT", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-16J-16N-SS-10K","Hex Nipple", '1"',   "37° JIC", '1"',   "NPT", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-4J-4G-SS-15K",  "Hex Nipple", '1/4"', "37° JIC", '1/4"', "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-6J-6G-SS-15K",  "Hex Nipple", '3/8"', "37° JIC", '3/8"', "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-4J-8G-SS-15K",  "Hex Nipple", '1/4"', "37° JIC", '1/2"', "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-8J-8G-SS-15K",  "Hex Nipple", '1/2"', "37° JIC", '1/2"', "ISO Parallel", "15,000 psi", 15000, IMG_OTHER),
  make("PHN-8J-12G-SS-10K", "Hex Nipple", '1/2"', "37° JIC", '3/4"', "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-4GSWL-4G-SS-10K",  "Hex Nipple Swivel", '1/4"',   "ISO Parallel Swivel", '1/4"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-4GSWL-6G-SS-10K",  "Hex Nipple Swivel", '1/4"',   "ISO Parallel Swivel", '3/8"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-4GSWL-8G-SS-10K",  "Hex Nipple Swivel", '1/4"',   "ISO Parallel Swivel", '1/2"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-6GSWL-4G-SS-10K",  "Hex Nipple Swivel", '3/8"',   "ISO Parallel Swivel", '1/4"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-6GSWL-6G-SS-10K",  "Hex Nipple Swivel", '3/8"',   "ISO Parallel Swivel", '3/8"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-6GSWL-8G-SS-10K",  "Hex Nipple Swivel", '3/8"',   "ISO Parallel Swivel", '1/2"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-8GSWL-6G-SS-10K",  "Hex Nipple Swivel", '1/2"',   "ISO Parallel Swivel", '3/8"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-8GSWL-8G-SS-10K",  "Hex Nipple Swivel", '1/2"',   "ISO Parallel Swivel", '1/2"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-8GSWL-12G-SS-10K", "Hex Nipple Swivel", '1/2"',   "ISO Parallel Swivel", '3/4"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-12GSWL-8G-SS-10K", "Hex Nipple Swivel", '3/4"',   "ISO Parallel Swivel", '1/2"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-12GSWL-12G-SS-10K","Hex Nipple Swivel", '3/4"',   "ISO Parallel Swivel", '3/4"',   "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-12GSWL-16G-SS-10K","Hex Nipple Swivel", '3/4"',   "ISO Parallel Swivel", '1"',     "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-16GSWL-16G-SS-10K","Hex Nipple Swivel", '1"',     "ISO Parallel Swivel", '1"',     "ISO Parallel", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-4JSWL-4J-SS-10K",  "Hex Nipple Swivel", '1/4"',   "37° JIC Swivel", '1/4"',  "37° JIC", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-4JSWL-6J-SS-10K",  "Hex Nipple Swivel", '1/4"',   "37° JIC Swivel", '3/8"',  "37° JIC", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-4JSWL-8J-SS-10K",  "Hex Nipple Swivel", '1/4"',   "37° JIC Swivel", '1/2"',  "37° JIC", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-5JSWL-4J-SS-10K",  "Hex Nipple Swivel", '5/16"',  "37° JIC Swivel", '1/4"',  "37° JIC", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-6JSWL-4J-SS-10K",  "Hex Nipple Swivel", '3/8"',   "37° JIC Swivel", '1/4"',  "37° JIC", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-6JSWL-6J-SS-10K",  "Hex Nipple Swivel", '3/8"',   "37° JIC Swivel", '3/8"',  "37° JIC", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-6JSWL-8J-SS-10K",  "Hex Nipple Swivel", '3/8"',   "37° JIC Swivel", '1/2"',  "37° JIC", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-8JSWL-4J-SS-10K",  "Hex Nipple Swivel", '1/2"',   "37° JIC Swivel", '1/4"',  "37° JIC", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-8JSWL-6J-SS-10K",  "Hex Nipple Swivel", '1/2"',   "37° JIC Swivel", '3/8"',  "37° JIC", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-8JSWL-8J-SS-10K",  "Hex Nipple Swivel", '1/2"',   "37° JIC Swivel", '1/2"',  "37° JIC", "10,000 psi", 10000, IMG_OTHER),
  make("PHN-8JSWL-12J-SS-10K", "Hex Nipple Swivel", '1/2"',   "37° JIC Swivel", '3/4"',  "37° JIC", "10,000 psi", 10000, IMG_OTHER),
]

export const PIPE_NIPPLE_DESCRIPTION = {
  title: "HP Pipe Fittings — Hex Nipples & Reducing Hex Nipples",
  description: 'Panam High Pressure Hex Nipples and Reducing Hex Nipples in SS 316. NPT, ISO Parallel, and 37° JIC thread combinations. Standard and Swivel variants. 10,000 to 15,000 psi. Sizes from 1/8" to 2".',
  specs: ["Hex Nipple · Reducing Hex Nipple · Swivel", "SS 316", "10,000 & 15,000 psi", "NPT · ISO Parallel · 37° JIC", '1/8" – 2"'],
}