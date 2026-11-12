// QS model product page, one per model (linked from the QS model list).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { QS_CATALOG } from "../../qsData";
import { ITEMS, QS_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "QS",
  kind: "Fail-Safe Electric Actuator",
  overview: "/actuators/electric/qs",
  products: QS_PRODUCTS,
  catalog: { href: QS_CATALOG, label: "QS catalogue (PDF)" },
  facts: 6,
});

export const dynamicParams = false;
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
