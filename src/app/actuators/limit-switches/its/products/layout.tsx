import type { Metadata } from "next";
import { ITS_IMAGE } from "../itsData";

const TITLE = "ITS Limit Switch Box Models: ITS 200, 400, 500 | Valvenok";
const DESCRIPTION =
  "Susin I-Tork ITS position monitoring switch boxes: ITS 200 weatherproof IP67, ITS 400 explosion proof Ex d IIC T6, ITS 500 316L or Duplex stainless. Full specifications and options.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/limit-switches/its/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [ITS_IMAGE] },
};

export default function ItsProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
