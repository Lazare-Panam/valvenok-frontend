import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bellows Sealed Valves | Valvenok",
  description:
    "Browse bellows sealed valves — filter by standard and type to find the exact zero-leakage valve you need.",
  openGraph: {
    title: "Bellows Sealed Valves | Valvenok",
    description: "Browse bellows sealed valves, filter by standard and type.",
    type: "website",
  },
};

export default function BellowsValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
