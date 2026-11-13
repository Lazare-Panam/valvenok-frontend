// PANDA model product page, one per model (linked from the PANDA model list).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { PANDA_CATALOG } from "../../pandaData";
import { ITEMS, PANDA_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "PANDA",
  kind: "Electro-Hydraulic Actuator",
  overview: "/actuators/hydraulic/panda",
  products: PANDA_PRODUCTS,
  catalog: { href: PANDA_CATALOG, label: "PANDA / PA brochure (PDF)" },
  facts: 6,
});

export const dynamicParams = false;
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
