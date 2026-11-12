// Danfoss PVE model product page, one per model (linked from the model list).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { PVE_TI } from "../../pveData";
import { ITEMS, PVE_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "Danfoss PVE",
  kind: "Electrohydraulic Actuator",
  overview: "/actuators/electric/pvae32",
  products: PVE_PRODUCTS,
  catalog: { href: PVE_TI, label: "PVE technical information (PDF)" },
  facts: 6,
});

export const dynamicParams = false;
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
