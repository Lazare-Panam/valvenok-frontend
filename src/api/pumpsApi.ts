import axiosClient from "./axiosClient";

export interface SubmersibleModelDTO {
  id: number;
  modelCode: string;
  version: string;
  material: string;
  diameterMm: number;
  diameterInches: string;
  flowM3Hr: number;
  maxHeadM: number;
  powerKw: number;
  powerHp: number;
  outletSize: string;
  speed: number;
  impellerTrim: string | null;
  motorDiameter: string | null;
  imageUrl: string;
}

export interface SubmersibleFilterParams {
  version?: string[];
  diameterMm?: number[];
  flowM3Hr?: number[];
  minHeadM?: number;
  maxHeadM?: number;
  minPowerKw?: number;
  maxPowerKw?: number;
  outletSize?: string[];
  impellerTrim?: string[];
  motorDiameter?: string[];
}

export interface SubmersibleFilterOptions {
  versions: string[];
  diametersMm: number[];
  diametersInches: string[];
  flows: number[];
  outletSizes: string[];
  impellerTrims: string[];
  motorDiameters: string[];
}

export const getSubmersibleModels = async (
  filters: SubmersibleFilterParams,
) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, String(v)));
    } else if (value !== undefined) {
      params.append(key, String(value));
    }
  });
  const response = await axiosClient.get("/api/pumps/submersible", { params });
  return response.data as SubmersibleModelDTO[];
};

export const getSubmersibleFilters = async () => {
  const response = await axiosClient.get("/api/pumps/submersible/filters");
  return response.data as SubmersibleFilterOptions;
};
export interface TSLModelDTO {
  id: number;
  modelCode: string;
  pumpType: string;
  impellerType: string;
  powerKw: number;
  voltage: number;
  phase: string;
  outletSizeMm: string;
  rpm: number;
  deliverySizeMm: number;
  maxSolidSizeMm: number;
  weightKg: number;
  inbuiltCapacitor: boolean;
  autoFloatSwitch: boolean;
  imageUrl: string;
}

export interface TSLFilterParams {
  pumpType?: string[];
  impellerType?: string[];
  voltage?: number[];
  phase?: string[];
  outletSizeMm?: string[];
  minPowerKw?: number;
  maxPowerKw?: number;
  inbuiltCapacitor?: boolean;
  autoFloatSwitch?: boolean;
}

export interface TSLFilterOptions {
  pumpTypes: string[];
  impellerTypes: string[];
  voltages: number[];
  phases: string[];
  outletSizes: string[];
}

export const getTSLModels = async (filters: TSLFilterParams) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, String(v)));
    } else if (value !== undefined) {
      params.append(key, String(value));
    }
  });
  const response = await axiosClient.get("/api/pumps/tsl", { params });
  return response.data as TSLModelDTO[];
};

export const getTSLFilters = async () => {
  const response = await axiosClient.get("/api/pumps/tsl/filters");
  return response.data as TSLFilterOptions;
};

export interface TDLModelDTO {
  id: number;
  modelCode: string;
  pumpType: string;
  impellerType: string;
  powerKw: number;
  voltage: number;
  capacitorValueUF: number | null;
  currentAmp: number;
  phase: string;
  outletSizeInches: string;
  rpm: number;
  maxSolidSizeMm: number;
  weightKg: number;
  inbuiltCapacitor: boolean;
  imageUrl: string;
}

export interface TDLFilterParams {
  voltage?: number[];
  phase?: string[];
  outletSizeInches?: string[];
  minPowerKw?: number;
  maxPowerKw?: number;
  inbuiltCapacitor?: boolean;
}

export interface TDLFilterOptions {
  voltages: number[];
  phases: string[];
  outletSizes: string[];
}

export const getTDLModels = async (filters: TDLFilterParams) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, String(v)));
    } else if (value !== undefined) {
      params.append(key, String(value));
    }
  });
  const response = await axiosClient.get("/api/pumps/tdl", { params });
  return response.data as TDLModelDTO[];
};

export const getTDLFilters = async () => {
  const response = await axiosClient.get("/api/pumps/tdl/filters");
  return response.data as TDLFilterOptions;
};

export interface TGAModelDTO {
  id: number;
  modelCode: string;
  p1Kw: number;
  p2Kw: number;
  voltage: number;
  amp: number;
  rpm: number;
  deliverySizeMm: number;
  maxSolidSizeMm: number;
  weightKg: number;
  outletFlange: string;
  inbuiltTop: boolean;
  imageUrl: string;
}

export interface TGAFilterParams {
  deliverySizeMm?: number[];
  maxSolidSizeMm?: number[];
  outletFlange?: string[];
  minP2Kw?: number;
  maxP2Kw?: number;
  inbuiltTop?: boolean;
}

export interface TGAFilterOptions {
  deliverySizes: number[];
  maxSolidSizes: number[];
  outletFlanges: string[];
}

export const getTGAModels = async (filters: TGAFilterParams) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, String(v)));
    } else if (value !== undefined) {
      params.append(key, String(value));
    }
  });
  const response = await axiosClient.get("/api/pumps/tga", { params });
  return response.data as TGAModelDTO[];
};

export const getTGAFilters = async () => {
  const response = await axiosClient.get("/api/pumps/tga/filters");
  return response.data as TGAFilterOptions;
};

export interface TGTModelDTO {
  id: number;
  modelCode: string;
  p1Kw: number;
  p2Kw: number;
  voltage: number;
  capacitorUF: number | null;
  amp: number;
  rpm: number;
  deliverySizeMm: number;
  maxSolidSizeMm: number;
  weightKg: number;
  autoCouplingCode: string;
  outletFlangeType: string;
  inbuiltTop: boolean;
  imageUrl: string;
}

export interface TGTFilterParams {
  voltage?: number[];
  deliverySizeMm?: number[];
  maxSolidSizeMm?: number[];
  autoCouplingCode?: string[];
  outletFlangeType?: string[];
  minP2Kw?: number;
  maxP2Kw?: number;
  inbuiltTop?: boolean;
}

export interface TGTFilterOptions {
  voltages: number[];
  deliverySizes: number[];
  maxSolidSizes: number[];
  autoCouplingCodes: string[];
  outletFlangeTypes: string[];
}

export const getTGTModels = async (filters: TGTFilterParams) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, String(v)));
    } else if (value !== undefined) {
      params.append(key, String(value));
    }
  });
  const response = await axiosClient.get("/api/pumps/tgt", { params });
  return response.data as TGTModelDTO[];
};

export const getTGTFilters = async () => {
  const response = await axiosClient.get("/api/pumps/tgt/filters");
  return response.data as TGTFilterOptions;
};

export interface TMCModelDTO {
  id: number;
  modelCode: string;
  p1Kw: number;
  p2Kw: number;
  voltage: number;
  amp: number;
  rpm: number;
  deliverySizeMm: number;
  maxSolidSizeMm: number;
  weightKg: number | null;
  autoCouplingCode: string;
  outletFlangeType: string;
  inbuiltTop: boolean;
  moistureSensor: boolean;
  imageUrl: string;
}

export interface TMCFilterParams {
  voltage?: number[];
  deliverySizeMm?: number[];
  maxSolidSizeMm?: number[];
  autoCouplingCode?: string[];
  outletFlangeType?: string[];
  rpm?: number[];
  minP2Kw?: number;
  maxP2Kw?: number;
  inbuiltTop?: boolean;
  moistureSensor?: boolean;
}

export interface TMCFilterOptions {
  voltages: number[];
  deliverySizes: number[];
  maxSolidSizes: number[];
  autoCouplingCodes: string[];
  outletFlangeTypes: string[];
  rpms: number[];
}

export const getTMCModels = async (filters: TMCFilterParams) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, String(v)));
    } else if (value !== undefined) {
      params.append(key, String(value));
    }
  });
  const response = await axiosClient.get("/api/pumps/tmc", { params });
  return response.data as TMCModelDTO[];
};

export const getTMCFilters = async () => {
  const response = await axiosClient.get("/api/pumps/tmc/filters");
  return response.data as TMCFilterOptions;
};
// Add to pumpsApi.ts

export interface PumpsItemDTO {
  id: number;
  modelCode: string;
  productFamily: string;
  productFamilyId: number;
  p2Kw: number;
  voltage: number | null;
  rpm: number | null;
  deliverySizeMm: number | null;
  maxSolidSizeMm: number | null;
  weightKg: number | null;
  outletType: string | null;
  phase: string | null;
  autoCouplingCode: string | null;
  version: string | null;
  diameterMm: number | null;
  pumpType: string | null;
  impellerType: string | null;
  inbuiltTop: boolean | null;
  moistureSensor: boolean | null;
  hasCapacitor: boolean | null;
  imageUrl: string;
}

export interface PumpsFilterOptions {
  p2Kws: number[];
  voltages: number[];
  rpms: number[];
  deliverySizes: number[];
  maxSolidSizes: number[];
  phases: string[];
  autoCouplingCodes: string[];
  versions: string[];
  diametersMm: number[];
  diametersInches: string[];
  pumpTypes: string[];
  impellerTypes: string[];
  productFamilies: {
    id: number;
    name: string;
    slug: string;
    parentId: number | null;
  }[];
}

export interface PumpsGridFilterParams {
  productFamilyIds?: number[];
  p2Kws?: number[];
  voltages?: number[];
  rpms?: number[];
  deliverySizes?: number[];
  maxSolidSizes?: number[];
  outletTypes?: string[];
  phases?: string[];
  autoCouplingCodes?: string[];
  versions?: string[];
  diametersMm?: number[];
  pumpTypes?: string[];
  impellerTypes?: string[];
  inbuiltTop?: boolean;
  moistureSensor?: boolean;
  hasCapacitor?: boolean;
}

export const getPumpsGridItems = async (filters: PumpsGridFilterParams) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, String(v)));
    } else if (value !== undefined) {
      params.append(key, String(value));
    }
  });
  const response = await axiosClient.get("/api/pumps/grid", { params });
  return response.data as PumpsItemDTO[];
};

export const getPumpsGridFilters = async () => {
  const response = await axiosClient.get("/api/pumps/grid/filters");
  return response.data as PumpsFilterOptions;
};
