import axiosClient from "./axiosClient";

export interface JicFittingDTO {
  id: number;
  partNumber: string;
  price: number;
  tubeOD: string;
  tubeODMm: string;
  jic: string;
  threadType: string;
  threadSize: string;
  imageUrl: string;
}

export interface JicFittingFilterOptions {
  threadTypes: string[];
  tubeODs: string[];
  tubeODsMm: string[];
  jicSizes: string[];
  threadSizes: string[];
}

export interface JicFittingFilterParams {
  threadTypes?: string[];
  tubeODs?: string[];
  tubeODsMm?: string[];
  jicSizes?: string[];
  threadSizes?: string[];
}

export const getJicFittings = async (filters: JicFittingFilterParams) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) value.forEach((v) => params.append(key, v));
    else if (value !== undefined) params.append(key, String(value));
  });
  const response = await axiosClient.get("/api/fittings/jic", { params });
  return response.data as JicFittingDTO[];
};

export const getJicFittingFilters = async () => {
  const response = await axiosClient.get("/api/fittings/jic/filters");
  return response.data as JicFittingFilterOptions;
};
export interface PipeFittingDTO {
  id: number;
  partNo: string;
  fittingType: string;
  material: string;
  p1Size: string;
  p1Type: string;
  p2Size: string | null;
  p2Type: string | null;
  lengthVariant: string | null;
  imageUrl: string;
}

export interface PipeFittingFilterOptions {
  fittingTypes: string[];
  materials: string[];
  p1Sizes: string[];
  p1Types: string[];
  p2Sizes: string[] | null;
  p2Types: string[] | null;
  lengthVariants: string[] | null;
}

export interface PipeFittingFilterParams {
  fittingTypes?: string[];
  materials?: string[];
  p1Sizes?: string[];
  p1Types?: string[];
  p2Sizes?: string[];
  p2Types?: string[];
  lengthVariants?: string[];
}

export const getPipeFittings = async (filters: PipeFittingFilterParams) => {
  const response = await axiosClient.post("/api/fittings/pipe-fittings/filter", filters);
  return response.data as PipeFittingDTO[];
};

export const getPipeFittingFilterOptions = async () => {
  const response = await axiosClient.get("/api/fittings/pipe-fittings/filter-options");
  return response.data as PipeFittingFilterOptions;
};
