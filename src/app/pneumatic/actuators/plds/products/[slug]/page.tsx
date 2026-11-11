// PLDS model product page, one per model (linked from the PLDS model list).
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import { detailPage } from "../../../_series/detailPage";
import { ITEMS, PLDS_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "PLDS",
  kind: "Linear Piston Pneumatic Actuator",
  overview: "/pneumatic/actuators/plds",
  products: PLDS_PRODUCTS,
  catalog: { href: SUSIN_CATALOG.PLDS, label: "PLDS catalogue (PDF)" },
  facts: 6,
});

export const dynamicParams = false;
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
