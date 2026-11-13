import type { Metadata } from "next";
import { HD_IMAGE } from "../hdData";

const TITLE = "HD Scotch Yoke Actuator Models: ISD, ICD, ISR, ICR | Valvenok";
const DESCRIPTION =
  "All 64 Susin HD heavy-duty scotch yoke actuators: ISD and ICD double acting, ISR and ICR spring return, symmetric or canted yoke. Torque at 2.8 to 7 bar and dimensions for every model.";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/hd/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [HD_IMAGE] },
};

export default function HDProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
