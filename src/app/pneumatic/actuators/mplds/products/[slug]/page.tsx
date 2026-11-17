// MPLDS model product page, one per model (linked from the MPLDS model list).
import { detailPage } from "../../../_series/detailPage";
import { ITEMS, MPLDS_PRODUCTS, MPLDS_SOURCE } from "../items";

const p = detailPage(ITEMS, {
  name: "MPLDS",
  kind: "Micro Linear Pneumatic Actuator",
  overview: "/pneumatic/actuators/mplds",
  products: MPLDS_PRODUCTS,
  catalog: { href: MPLDS_SOURCE, label: "MPLDS on susingroup.com" },
  facts: 6,
  picker: false, // one page per model: no switching to other models from here
});

export const dynamicParams = true; // rendered on first visit, then cached (see detailPage)
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
