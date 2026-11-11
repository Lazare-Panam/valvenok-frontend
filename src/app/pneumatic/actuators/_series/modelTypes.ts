// Model row shape shared by the model list (client) and per-model product pages (server).
import type { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";

export type Cell = string | { text: string; pill?: "green" | "grey" };
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
  table?: { head: string[]; rows: string[][] }; // e.g. torque by angle and pressure
  note?: string;
  rfq: ProductForRFQ;
  tag?: string; // type chip on the product page (defaults to the grey pill)
  slug?: string; // product page slug
  href?: string; // product page URL
};
