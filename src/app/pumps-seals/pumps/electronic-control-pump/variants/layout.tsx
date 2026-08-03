import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronic Control Pumps | Valvenok",
  description:
    "TQ_B and HQ_B series, each available with or without anti-microbial construction, across 50Hz and 60Hz operation.",
  openGraph: {
    title: "Electronic Control Pumps | Valvenok",
    description:
      "TQ_B and HQ_B series, each available with or without anti-microbial construction, across 50Hz and 60Hz operation.",
    type: "website",
  },
};

export default function ElectronicControlPumpProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
