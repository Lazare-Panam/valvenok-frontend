// HD model product page: one per ISD / ICD / ISR / ICR model. The old
// body-size pages (HD-A1 … HD-06) still resolve, but are out of the model list
// until the clean-up (vk-z1).
import { SUSIN_CATALOG } from "@/src/app/Common/susinCatalogs";
import { detailPage, type Props } from "../../../_series/detailPage";
import { ITEMS, HD_PRODUCTS } from "../items";
import { LEGACY_ITEMS } from "../legacyItems";

const meta = {
  name: "HD",
  kind: "Heavy-Duty Scotch Yoke Actuator",
  overview: "/pneumatic/actuators/hd",
  products: HD_PRODUCTS,
  catalog: { href: SUSIN_CATALOG.HD, label: "IS & IC catalogue (PDF)" },
  facts: 6,
};
const p = detailPage(ITEMS, meta);
const old = detailPage(LEGACY_ITEMS, meta);
const isOld = async ({ params }: Props) => {
  const { slug } = await params;
  return LEGACY_ITEMS.some((i) => i.slug === slug);
};

export const dynamicParams = false;
export const generateStaticParams = () => [...p.generateStaticParams(), ...old.generateStaticParams()];
export const generateMetadata = async (props: Props) => ((await isOld(props)) ? old.generateMetadata(props) : p.generateMetadata(props));
export default async function HdModelPage(props: Props) {
  return (await isOld(props)) ? old.Page(props) : p.Page(props);
}
