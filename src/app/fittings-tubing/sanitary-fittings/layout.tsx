import type { Metadata } from "next";

const TITLE = "Sanitary Fittings: Tri-Clamp Clamps & Ferrules | Valvenok";
const DESCRIPTION =
  "Adaptix stainless-steel tri-clamp clamps, ferrules, blind covers and sight glass caps for dairy, food and pharma lines. DN 6 to DN 300, ISO 2852 / DIN 32676, 3.1 certificates.";
const IMAGE = "/sanitary-temp/tri-clamps-range.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/sanitary-fittings" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [IMAGE] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [IMAGE] },
};

export default function SanitaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
