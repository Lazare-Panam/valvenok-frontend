// Shared shape for the hydraulic series pages (PANDA, PA, PA-HX, scotch yoke).
// Each series supplies its catalogue data in this form; SeriesPage and ModelsPage render it.

export type Spec = { label: string; value: string };

export type ModelRow = { model: string } & Record<string, string>;

export interface ModelGroup {
  key: string;
  title: string; // e.g. "Double acting"
  note?: string; // line under the group title
  cols: { key: string; label: string }[]; // every column (model list, expanded row)
  summary: string[]; // column keys shown in the table rows
  rows: ModelRow[];
}

export interface SeriesDef {
  code: string; // "PANDA"
  path: string; // "/actuators/hydraulic/panda"
  h1: string; // "PANDA Series"
  subtitle: string;
  overline: string;
  intro: string;
  image: string;
  imageAlt: string;
  catalog: string;
  catalogLabel: string;
  chips: string[];
  heroStats: Spec[];
  techSpecs: Spec[];
  features: { title: string; body: string }[];
  trust: { value: string; label: string }[];
  common: Spec[]; // shown in every expanded model row
  groups: ModelGroup[];
  listTitle: string;
  listIntro: string;
  listChips: string[];
  rfqName: string;
  rfqDescription: string;
  rfqKeySpecs: Spec[];
  subCategory: string;
  // When the full model list lives elsewhere (e.g. an existing page), link there instead
  productsHref?: string;
  totalModels?: number; // when the tables here are a summary of a longer list
}

export const modelCount = (d: SeriesDef) => d.totalModels ?? d.groups.reduce((n, g) => n + g.rows.length, 0);
