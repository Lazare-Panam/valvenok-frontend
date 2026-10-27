import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/hydrogen" },
  title: "Hydrogen Cylinder Valves",
  description:
    "Youngdo high-pressure hydrogen cylinder valves — HC, HE, HK, HS, HSL and EP series to 70 MPa, YHT series at 45 MPa, DRV-350 quick-connect and YEX-1100 explosion-proof. Certification varies by model.",
  openGraph: {
    title: "Hydrogen Cylinder Valves | Valvenok",
    description:
      "Youngdo high-pressure hydrogen cylinder valves rated 3–70 MPa. Certification (KGS, EC79, R134, IECEx and others) varies by model.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://pblol2.blob.core.windows.net/valvenok-images/logo.png"],
  },
};

export default function HydrogenValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
