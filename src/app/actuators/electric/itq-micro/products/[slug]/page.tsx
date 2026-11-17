// ITQ Micro model product page, one per model (linked from the model list).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { ITQM_CATALOG } from "../../itqMicroData";
import { ITEMS, ITQM_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "ITQ Micro",
  kind: "Compact Electric Actuator",
  overview: "/actuators/electric/itq-micro",
  products: ITQM_PRODUCTS,
  catalog: { href: ITQM_CATALOG, label: "ITQ Micro catalogue (PDF)" },
  facts: 6,
  picker: false, // one page per model: no switching to other models from here
});

export const dynamicParams = true; // rendered on first visit, then cached (see detailPage)
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
