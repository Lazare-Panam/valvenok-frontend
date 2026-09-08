import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High Pressure Unions",
  description:
    "Browse high pressure union fittings — filter by fitting type, pressure rating, thread type, and size to find the exact configuration you need.",
  openGraph: {
    title: "High Pressure Unions | Valvenok",
    description:
      "Browse high pressure union fittings — filter by fitting type, pressure rating, thread type, and size.",
    type: "website",
  },
};

export default function HPUnionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
