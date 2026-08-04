import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITS Series Limit Switch Boxes | Valvenok",
  description:
    "Susin ITS series precision position monitoring switches for rotary actuators. ATEX Ex d IIC T6, IECEx & CE certified, IP67/IP68, aluminium or stainless steel housing.",
  openGraph: {
    title: "ITS Series Limit Switch Boxes | Valvenok",
    description:
      "Susin ITS series precision position monitoring switches for rotary actuators. ATEX Ex d IIC T6, IECEx & CE certified, IP67/IP68 protection.",
    type: "website",
  },
};

export default function ITSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
