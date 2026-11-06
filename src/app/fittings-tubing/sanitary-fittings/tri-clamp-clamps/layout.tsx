import type { Metadata } from "next";

const TITLE = "Tri-Clamp Clamps: Single Pin & Double-Bolted | Valvenok";
const DESCRIPTION =
  "Adaptix stainless-steel tri-clamp clamps, single pin and double-bolted, DN 6 to DN 300. ISO 2852 / DIN 32676 / BS 4825, up to 50 bar, 3.1 certificate with every delivery.";
const IMAGE = "/sanitary-temp/tri-clamps-range.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/sanitary-fittings/tri-clamp-clamps" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [IMAGE] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [IMAGE] },
};

export default function TriClampLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
