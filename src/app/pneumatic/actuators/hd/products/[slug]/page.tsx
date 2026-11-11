// HD model product page, one per model (linked from the HD model list).
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import { detailPage } from "../../../_series/detailPage";
import { ITEMS, HD_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "HD",
  kind: "Heavy-Duty Scotch Yoke Actuator",
  overview: "/pneumatic/actuators/hd",
  products: HD_PRODUCTS,
  catalog: { href: SUSIN_CATALOG.HD, label: "IS & IC catalogue (PDF)" },
  facts: 6,
});

export const dynamicParams = false;
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
