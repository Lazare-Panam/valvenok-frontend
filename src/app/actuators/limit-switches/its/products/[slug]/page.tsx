// ITS model product page, one per housing (linked from the ITS model list).
import { detailPage } from "@/src/app/pneumatic/actuators/_series/detailPage";
import { ITS_CATALOG } from "../../itsData";
import { ITEMS, ITS_PRODUCTS } from "../items";

const p = detailPage(ITEMS, {
  name: "ITS",
  kind: "Limit Switch Box",
  overview: "/actuators/limit-switches/its",
  products: ITS_PRODUCTS,
  catalog: { href: ITS_CATALOG, label: "ITS catalogue (PDF)" },
  facts: 6,
});

export const dynamicParams = true; // rendered on first visit, then cached (see detailPage)
export const generateStaticParams = p.generateStaticParams;
export const generateMetadata = p.generateMetadata;
export default p.Page;
