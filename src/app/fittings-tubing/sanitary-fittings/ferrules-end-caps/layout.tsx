import type { Metadata } from "next";

const TITLE = "Tri-Clamp Ferrules & End Caps | Valvenok";
const DESCRIPTION =
  "Adaptix stainless-steel tri-clamp ferrules, blind covers and sight glass end caps, DN 6 to DN 300. 98 part codes, Ra < 0.4 µm inside, 3.1 certificate with every delivery.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/brands/Adaptix/ferrules.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/sanitary-fittings/ferrules-end-caps" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [IMAGE] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [IMAGE] },
};

export default function FerrulesEndCapsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
