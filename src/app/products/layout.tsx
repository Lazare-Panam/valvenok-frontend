import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/products" },
  title: {
    absolute:
      "Hydraulic, Pneumatic and Instrumentation Components Product Range – Valvenok",
  },
  description:
    "Explore the Valvenok product range — hydraulic, pneumatic and instrumentation components for industrial flow control, automation and process applications.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
