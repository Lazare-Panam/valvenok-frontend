// LP-HD / LP-HS model product page, one per model (rendered on first visit, then cached).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { LP_CATALOG } from "../../lpData";
import { ITEMS, LP_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "LP-HD / LP-HS",
  kind: "Low-Pressure Electro-Hydraulic Actuator",
  overview: "/actuators/hydraulic/lp-scotch-yoke",
  products: LP_PRODUCTS,
  catalog: { href: LP_CATALOG, label: "Hydraulic low pressure catalogue (PDF)" },
  facts: 6,
});

export const dynamicParams = true; // rendered on first visit, then cached (see detailPage)
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
