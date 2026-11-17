// Model row shape shared by the model list (client) and per-model product pages (server).
import type { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";

export type Cell = string | { text: string; pill?: "green" | "grey" };
/** Order-code builder shown on the product page: prefix + one option code per step (e.g. ITS 2 + 01 + B = ITS 201B) */
export type Configurator = {
  title: string;
  prefix: string;
  steps: { label: string; options: { code: string; text: string; group?: string }[] }[];
  note?: string;
};
export type Item = {
  id: string;
  model: string;
  sub: string; // small line under the model code
  image: string;
  cells: Cell[]; // one per column after "Model"
  facets: Record<string, string>; // facet key → value
  sort: Record<string, number | string>;
  search: string;
  specs: [string, string][];
  brief?: [string, string][]; // the few figures shown when a list row is opened (full specs live on the product page)
  table?: { title?: string; head: string[]; rows: string[][] }; // e.g. torque by angle and pressure
  note?: string;
  configurator?: Configurator; // shown instead of `table` on the product page
  rfq: ProductForRFQ;
  tag?: string; // type chip on the product page (defaults to the grey pill)
  slug?: string; // product page slug
  href?: string; // product page URL
};
