// MHD model product page, one per model (linked from the MHD model list).
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import { detailPage } from "../../../_series/detailPage";
import { ITEMS, MHD_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "MHD",
  kind: "Micro Scotch Yoke Actuator",
  overview: "/pneumatic/actuators/mhd",
  products: MHD_PRODUCTS,
  catalog: { href: SUSIN_CATALOG.MHD, label: "MHD catalogue (PDF)" },
  facts: 6,
});

export const dynamicParams = true; // rendered on first visit, then cached (see detailPage)
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
