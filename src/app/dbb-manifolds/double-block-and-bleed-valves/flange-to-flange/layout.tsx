import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DBB Flange to Flange Valves",
  description:
    "Browse double block and bleed flange-to-flange valves — filter by construction type, configuration, seal and seat material, bore and inlet size, pressure class, and more.",
  openGraph: {
    title: "DBB Flange to Flange Valves | Valvenok",
    description:
      "Browse double block and bleed flange-to-flange valves — filter by construction type, configuration, seal/seat material, bore and inlet size, and pressure class.",
    type: "website",
  },
};

export default function DBBFlangeToFlangeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
