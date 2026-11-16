// ITQ model product page, one per model (linked from the ITQ model list).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { ITQ_CATALOG } from "../../itqData";
import { ITEMS, ITQ_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "ITQ",
  kind: "Quarter-Turn Electric Actuator",
  overview: "/actuators/electric/itq",
  products: ITQ_PRODUCTS,
  catalog: { href: ITQ_CATALOG, label: "ITQ catalogue (PDF)" },
  facts: 6,
});

export const dynamicParams = true; // rendered on first visit, then cached (see detailPage)
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
