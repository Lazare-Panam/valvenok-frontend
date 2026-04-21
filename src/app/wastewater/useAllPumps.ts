import { useQuery } from '@tanstack/react-query'
import {
  getSubmersibleModels, getTSLModels, getTDLModels,
  getTGAModels, getTGTModels, getTMCModels
} from '@/src/api/pumpsApi'

export interface NormalizedPump {
  _series: string
  _rowId: string
  id: number
  modelCode: string
  pumpType: string
  p2Kw: number
  voltage: number | null
  rpm: number | null
  deliverySizeMm: number | null
  maxSolidSizeMm: number | null
  weightKg: number | null
  outletSize: string | null
  inbuiltTop: boolean | null
  imageUrl: string
  _raw: any
}

const normalize = (
  series: string,
  models: any[],
  mapFn: (m: any) => Omit<NormalizedPump, '_series' | '_rowId' | '_raw'>
): NormalizedPump[] =>
  models.map((m, i) => ({
    _series: series,
    _rowId: `${series}-${m.modelCode}-${i}`,
    ...mapFn(m),
    _raw: m
  }))

export const PUMP_SERIES = [
  'Submersible', 'TSL', 'TDL', 'TGA', 'TGT', 'TMC',
] as const

export type PumpSeries = typeof PUMP_SERIES[number]

export const useAllPumps = () => {
  return useQuery({
    queryKey: ['all-pumps'],
    queryFn: async () => {
      const [submersible, tsl, tdl, tga, tgt, tmc] = await Promise.all([
        getSubmersibleModels({}),
        getTSLModels({}),
        getTDLModels({}),
        getTGAModels({}),
        getTGTModels({}),
        getTMCModels({}),
      ])

      return [
        ...normalize('Submersible', submersible, m => ({
          id: m.id, modelCode: m.modelCode, pumpType: 'Submersible',
          p2Kw: m.powerKw, voltage: m.voltage ?? null, rpm: m.speed ?? null,
          deliverySizeMm: m.diameterMm ?? null, maxSolidSizeMm: null,
          weightKg: null, outletSize: m.outletSize ?? null,
          inbuiltTop: null, imageUrl: m.imageUrl,
        })),
        ...normalize('TSL', tsl, m => ({
          id: m.id, modelCode: m.modelCode, pumpType: 'Wastewater',
          p2Kw: m.powerKw, voltage: m.voltage, rpm: m.rpm,
          deliverySizeMm: m.deliverySizeMm, maxSolidSizeMm: m.maxSolidSizeMm,
          weightKg: m.weightKg, outletSize: m.outletSizeMm,
          inbuiltTop: null, imageUrl: m.imageUrl,
        })),
        ...normalize('TDL', tdl, m => ({
          id: m.id, modelCode: m.modelCode, pumpType: 'Wastewater',
          p2Kw: m.powerKw, voltage: m.voltage, rpm: m.rpm,
          deliverySizeMm: null, maxSolidSizeMm: m.maxSolidSizeMm,
          weightKg: m.weightKg, outletSize: m.outletSizeInches,
          inbuiltTop: null, imageUrl: m.imageUrl,
        })),
        ...normalize('TGA', tga, m => ({
          id: m.id, modelCode: m.modelCode, pumpType: 'Wastewater',
          p2Kw: m.p2Kw, voltage: m.voltage, rpm: m.rpm,
          deliverySizeMm: m.deliverySizeMm, maxSolidSizeMm: m.maxSolidSizeMm,
          weightKg: m.weightKg, outletSize: m.outletFlange,
          inbuiltTop: m.inbuiltTop, imageUrl: m.imageUrl,
        })),
        ...normalize('TGT', tgt, m => ({
          id: m.id, modelCode: m.modelCode, pumpType: 'Wastewater',
          p2Kw: m.p2Kw, voltage: m.voltage, rpm: m.rpm,
          deliverySizeMm: m.deliverySizeMm, maxSolidSizeMm: m.maxSolidSizeMm,
          weightKg: m.weightKg, outletSize: m.outletFlangeType,
          inbuiltTop: m.inbuiltTop, imageUrl: m.imageUrl,
        })),
        ...normalize('TMC', tmc, m => ({
          id: m.id, modelCode: m.modelCode, pumpType: 'Wastewater',
          p2Kw: m.p2Kw, voltage: m.voltage, rpm: m.rpm,
          deliverySizeMm: m.deliverySizeMm, maxSolidSizeMm: m.maxSolidSizeMm,
          weightKg: m.weightKg, outletSize: m.outletFlangeType,
          inbuiltTop: m.inbuiltTop, imageUrl: m.imageUrl,
        })),
      ] as NormalizedPump[]
    },
    staleTime: 1000 * 60 * 5,
  })
}