// MAW model product page, one per model (linked from the MAW model list).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { MAW_CATALOG } from "../../mawData";
import { ITEMS, MAW_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "MAW",
  kind: "Worm Gear Actuator",
  overview: "/actuators/mechanical/maw",
  products: MAW_PRODUCTS,
  catalog: { href: MAW_CATALOG, label: "MAW catalogue (PDF)" },
  facts: 6,
});

export const dynamicParams = false;
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
