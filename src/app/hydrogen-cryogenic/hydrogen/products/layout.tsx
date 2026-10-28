import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

const TITLE = "Youngdo Hydrogen Cylinder Valve Models, 3–70 MPa | Valvenok";
const DESCRIPTION =
  "Compare 13 Youngdo hydrogen cylinder valve models from 3 to 70 MPa. Certification (KGS, EC79, R134, IECEx and others) varies by model. Request a quote.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/top_logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/hydrogen/products" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: [IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

export default function HydrogenProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/hydrogen-cryogenic/hydrogen/products" /></>;
}
