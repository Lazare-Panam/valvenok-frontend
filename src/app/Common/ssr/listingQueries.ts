// Server copies of the listing pages' initial react-query queries. Each key
// mirrors its client hook with the page's default (empty) filters, after the
// hook's clean() step drops empty arrays and nulls.
import type { PrefetchQuery } from "./Prefetched";
import { getJICProducts, getJICProductFilterOptions } from "@/src/api/jicProductApi";
import { getPipeFittings, getPipeFittingFilterOptions } from "@/src/api/fittingsApi";
import { getWeldFittings, getWeldFittingFilterOptions } from "@/src/api/weldFittingApi";
import { getAdapters, getAdapterFilterOptions } from "@/src/api/adapterApi";
import { getConnectorElbows, getConnectorElbowFilterOptions } from "@/src/api/connectorElbowApi";
import { getReducers, getReducerFilterOptions } from "@/src/api/reducerApi";
import { getUnions, getUnionFilterOptions } from "@/src/api/unionApi";
import { getBallValves, getBallValveFilterOptions } from "@/src/api/ballValveApi";
import { getPCVs, getPCVFilterOptions } from "@/src/api/checkValveApi";
import { getReliefValves, getReliefValveFilterOptions } from "@/src/api/reliefValveApi";
import {
  getAirGuns,
  getESCCylinders, getESCCylinderFilterOptions,
  getAPFittings, getAPFittingFilterOptions,
  getTubing, getTubingFilterOptions,
} from "@/src/api/pneumaticApi";

// Refresh the server-rendered tables hourly so catalogue changes show up
export const LISTING_REVALIDATE = 3600;

const types = (t?: string[]) => (t && t.length ? { fittingTypes: t } : {});

export const jicQueries = (t?: string[]): PrefetchQuery[] => [
  { queryKey: ["jic-product-filters"], queryFn: getJICProductFilterOptions },
  { queryKey: ["jic-products", types(t)], queryFn: () => getJICProducts(types(t)) },
];
export const pipeQueries = (t?: string[]): PrefetchQuery[] => [
  { queryKey: ["pipe-fitting-filters"], queryFn: getPipeFittingFilterOptions },
  { queryKey: ["pipe-fittings", types(t)], queryFn: () => getPipeFittings(types(t)) },
];
// The weld page always sends the unit system (inch by default)
export const weldQueries = (t?: string[]): PrefetchQuery[] => {
  const f = { ...types(t), p1Units: ["inch"] };
  return [
    { queryKey: ["weld-fitting-filters"], queryFn: getWeldFittingFilterOptions },
    { queryKey: ["weld-fittings", f], queryFn: () => getWeldFittings(f) },
  ];
};
export const adapterQueries: PrefetchQuery[] = [
  { queryKey: ["adapter-filters"], queryFn: getAdapterFilterOptions },
  { queryKey: ["adapters", {}], queryFn: () => getAdapters({}) },
];
export const connectorQueries: PrefetchQuery[] = [
  { queryKey: ["connector-elbow-filters"], queryFn: getConnectorElbowFilterOptions },
  { queryKey: ["connector-elbows", {}], queryFn: () => getConnectorElbows({}) },
];
export const reducerQueries: PrefetchQuery[] = [
  { queryKey: ["reducer-filters"], queryFn: getReducerFilterOptions },
  { queryKey: ["reducers", {}], queryFn: () => getReducers({}) },
];
export const unionQueries: PrefetchQuery[] = [
  { queryKey: ["union-filters"], queryFn: getUnionFilterOptions },
  { queryKey: ["unions", {}], queryFn: () => getUnions({}) },
];
export const ballValveQueries: PrefetchQuery[] = [
  { queryKey: ["ball-valve-filters"], queryFn: getBallValveFilterOptions },
  { queryKey: ["ball-valves", {}], queryFn: () => getBallValves({}) },
];
export const checkValveQueries: PrefetchQuery[] = [
  { queryKey: ["pcv-filters"], queryFn: getPCVFilterOptions },
  { queryKey: ["pcvs", {}], queryFn: () => getPCVs({}) },
];
export const reliefValveQueries: PrefetchQuery[] = [
  { queryKey: ["relief-valve-filters"], queryFn: getReliefValveFilterOptions },
  { queryKey: ["relief-valves", {}], queryFn: () => getReliefValves({}) },
];
export const airGunQueries: PrefetchQuery[] = [{ queryKey: ["air-guns"], queryFn: getAirGuns }];
export const escQueries: PrefetchQuery[] = [
  { queryKey: ["esc-filters"], queryFn: getESCCylinderFilterOptions },
  { queryKey: ["esc-cylinders", {}], queryFn: () => getESCCylinders({}) },
];
export const apFittingQueries: PrefetchQuery[] = [
  { queryKey: ["ap-fitting-filters"], queryFn: getAPFittingFilterOptions },
  { queryKey: ["ap-fittings", {}], queryFn: () => getAPFittings({}) },
];
export const tubingQueries: PrefetchQuery[] = [
  { queryKey: ["tubing-filters"], queryFn: getTubingFilterOptions },
  { queryKey: ["tubing", {}], queryFn: () => getTubing({}) },
];
