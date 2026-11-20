import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/hydrogen" },
  title: {
    absolute: "Youngdo Hydrogen Cylinder Valves, 45 & 70 MPa | Valvenok",
  },
  description:
    "Youngdo hydrogen cylinder valves: HC, HE, HK, HS, HSL and EP series to 70 MPa, YHT series at 45 MPa, plus quick-connect and explosion-proof models.",
  openGraph: {
    title: "Youngdo Hydrogen Cylinder Valves, 45 & 70 MPa | Valvenok",
    description:
      "Youngdo hydrogen cylinder valves: HC, HE, HK, HS, HSL and EP series to 70 MPa, YHT series at 45 MPa, plus quick-connect and explosion-proof models.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://pblol2.blob.core.windows.net/valvenok-images/valvenok-new-logo.jpeg",
    ],
  },
};

export default function HydrogenValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
