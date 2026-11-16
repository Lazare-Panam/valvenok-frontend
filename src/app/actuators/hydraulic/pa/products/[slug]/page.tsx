// PA model product page, one per model (linked from the PA model list).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { PA_CATALOG } from "../../paData";
import { ITEMS, PA_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "PA",
  kind: "Electro-Hydraulic Actuator",
  overview: "/actuators/hydraulic/pa",
  products: PA_PRODUCTS,
  catalog: { href: PA_CATALOG, label: "PANDA / PA brochure (PDF)" },
  facts: 6,
});

export const dynamicParams = true; // rendered on first visit, then cached (see detailPage)
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
