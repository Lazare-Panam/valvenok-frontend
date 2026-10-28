import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/limit-switches/its" },
  title: { absolute: "ITS Series Limit Switch Boxes — Position Monitoring | Valvenok" },
  description:
    "Susin ITS series position monitoring switches for rotary actuators. ATEX Ex d IIC T6, IECEx and CE certified, IP67/IP68, aluminium or stainless housing.",
  openGraph: {
    title: "ITS Series Limit Switch Boxes — Position Monitoring | Valvenok",
    description:
      "Susin ITS series position monitoring switches for rotary actuators. ATEX Ex d IIC T6, IECEx and CE certified, IP67/IP68, aluminium or stainless housing.",
    type: "website",
  },
};

export default function ITSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
