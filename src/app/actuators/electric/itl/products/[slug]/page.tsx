// ITL model product page, one per model (linked from the ITL model list).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { ITL_CATALOG } from "../../itlData";
import { ITEMS, ITL_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "ITL",
  kind: "Electric Linear Actuator",
  overview: "/actuators/electric/itl",
  products: ITL_PRODUCTS,
  catalog: { href: ITL_CATALOG, label: "ITL catalogue (PDF)" },
  facts: 6,
});

export const dynamicParams = true; // rendered on first visit, then cached (see detailPage)
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
