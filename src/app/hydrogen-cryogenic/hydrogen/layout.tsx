import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/hydrogen" },
  title: "Hydrogen Cylinder Valves",
  description:
    "Youngdo high-pressure hydrogen cylinder valves — HE, HK, HS, EP series up to 70 MPa, YHT series up to 45 MPa, DRV-350 quick-connect and YEX-1100 explosion-proof. KGS, EC79, R134, IECEx certified.",
  openGraph: {
    title: "Hydrogen Cylinder Valves | Valvenok",
    description:
      "Youngdo high-pressure hydrogen cylinder valves rated up to 70 MPa, KGS, EC79, R134, IECEx certified.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydrogen Cylinder Valves | Valvenok",
    description:
      "Youngdo high-pressure hydrogen cylinder valves rated up to 70 MPa, KGS, EC79, R134, IECEx certified.",
    images: ["https://pblol2.blob.core.windows.net/valvenok-images/logo-2.png"],
  },
};

export default function HydrogenValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
