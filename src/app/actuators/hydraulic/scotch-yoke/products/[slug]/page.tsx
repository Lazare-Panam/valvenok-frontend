// HRS model product page, one per HRSDA / HRSSA size (linked from the HRS model list).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { HRS_CATALOG } from "../../hrsData";
import { ITEMS, HRS_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "HRS",
  kind: "Hydraulic Scotch Yoke Actuator",
  overview: "/actuators/hydraulic/scotch-yoke",
  products: HRS_PRODUCTS,
  catalog: { href: HRS_CATALOG, label: "Hydraulic data sheet (PDF)" },
  facts: 6,
  picker: false, // one page per model: no switching to other models from here
});

export const dynamicParams = true; // rendered on first visit, then cached (see detailPage)
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
