import type { Metadata } from "next";

const TITLE = "ITM Series Electric Multi-Turn Actuators — Models | Valvenok";
const DESCRIPTION =
  "Browse ITM series electric multi-turn valve actuators across body types and models. Filter to find the configuration you need and request a quote.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/itm/products" },
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

export default function ITMActuatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
