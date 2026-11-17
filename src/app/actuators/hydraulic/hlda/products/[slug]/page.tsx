// HLDA model product page, one per model (linked from the HLDA model list).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { HLDA_CATALOG } from "../../hldaData";
import { ITEMS, HLDA_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "HLDA",
  kind: "Linear Piston Hydraulic Actuator",
  overview: "/actuators/hydraulic/hlda",
  products: HLDA_PRODUCTS,
  catalog: { href: HLDA_CATALOG, label: "Hydraulic data sheet (PDF)" },
  facts: 6,
  picker: false, // one page per model: no switching to other models from here
});

export const dynamicParams = true; // rendered on first visit, then cached (see detailPage)
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
