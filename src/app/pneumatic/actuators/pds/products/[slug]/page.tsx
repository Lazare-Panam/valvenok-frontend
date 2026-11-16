// PDS model product page, one per model (linked from the PDS model list).
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import { detailPage } from "../../../_series/detailPage";
import { ITEMS, PDS_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "PDS",
  kind: "Scotch Yoke Pneumatic Actuator",
  overview: "/pneumatic/actuators/pds",
  products: PDS_PRODUCTS,
  catalog: { href: SUSIN_CATALOG.PDS, label: "PDS catalogue (PDF)" },
  facts: 6,
});

export const dynamicParams = true; // rendered on first visit, then cached (see detailPage)
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
