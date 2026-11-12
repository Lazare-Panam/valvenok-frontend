// ITG model product page, one per model (linked from the ITG model list).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { ITG_CATALOG } from "../../itgData";
import { ITEMS, ITG_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "ITG",
  kind: "Declutchable Worm Gear",
  overview: "/actuators/mechanical/itg",
  products: ITG_PRODUCTS,
  catalog: { href: ITG_CATALOG, label: "ITG catalogue (PDF)" },
  facts: 6,
});

export const dynamicParams = false;
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
