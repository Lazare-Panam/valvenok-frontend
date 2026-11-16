// MAB model product page, one per model (linked from the MAB model list).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { MAB_CATALOG } from "../../mabData";
import { ITEMS, MAB_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "MAB",
  kind: "Bevel Gear Actuator",
  overview: "/actuators/mechanical/mab",
  products: MAB_PRODUCTS,
  catalog: { href: MAB_CATALOG, label: "MAB catalogue (PDF)" },
  facts: 6,
});

export const dynamicParams = true; // rendered on first visit, then cached (see detailPage)
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
