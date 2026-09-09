import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pumps-seals/pumps/automatic-flow-controlled-pump/variants" },
  title: "Automatic Flow-Controlled Pumps",
  description:
    "HQC and TQC series pumps across 50Hz and 60Hz operation, for downward pressurization installations below a water tower.",
  openGraph: {
    title: "Automatic Flow-Controlled Pumps | Valvenok",
    description:
      "HQC and TQC series pumps across 50Hz and 60Hz operation, for downward pressurization installations below a water tower.",
    type: "website",
  },
};

export default function FlowControlledPumpProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
