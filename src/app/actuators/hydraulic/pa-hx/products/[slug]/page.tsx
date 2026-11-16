// PA-HX model product page, one per model (linked from the PA-HX model list).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { PAHX_CATALOG } from "../../paHxData";
import { ITEMS, PAHX_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "PA-HX",
  kind: "Hydraulic Rack & Pinion Actuator",
  overview: "/actuators/hydraulic/pa-hx",
  products: PAHX_PRODUCTS,
  catalog: { href: PAHX_CATALOG, label: "Hydraulic data sheet (PDF)" },
  facts: 6,
});

export const dynamicParams = true; // rendered on first visit, then cached (see detailPage)
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
