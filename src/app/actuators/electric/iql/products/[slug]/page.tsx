// IQL model product page, one per model (linked from the IQL model list).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { IQL_CATALOG } from "../../iqlData";
import { ITEMS, IQL_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "IQL",
  kind: "Electric Linear Actuator",
  overview: "/actuators/electric/iql",
  products: IQL_PRODUCTS,
  catalog: { href: IQL_CATALOG, label: "IQL catalogue (PDF)" },
  facts: 6,
});

export const dynamicParams = true; // rendered on first visit, then cached (see detailPage)
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
