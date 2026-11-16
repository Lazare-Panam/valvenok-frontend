// ITM model product page, one per model (linked from the ITM model list).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { ITM_CATALOG } from "../../itmData";
import { ITEMS, ITM_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "ITM",
  kind: "Multi-Turn Electric Actuator",
  overview: "/actuators/electric/itm",
  products: ITM_PRODUCTS,
  catalog: { href: ITM_CATALOG, label: "ITM catalogue (PDF)" },
  facts: 6,
});

export const dynamicParams = true; // rendered on first visit, then cached (see detailPage)
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
