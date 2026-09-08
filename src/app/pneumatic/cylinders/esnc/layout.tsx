import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESNC Series Cylinders",
  description:
    "Double-acting ISO-15552 tie rod profile pneumatic cylinders. Non-magnetic construction across bore sizes 32mm to 200mm with strokes from 25mm to 1000mm, built for heavy-duty industrial automation.",
  openGraph: {
    title: "ESNC Series Cylinders | Valvenok",
    description:
      "Double-acting ISO-15552 tie rod profile pneumatic cylinders. Non-magnetic construction across bore sizes 32mm to 200mm with strokes from 25mm to 1000mm.",
    type: "website",
  },
};

export default function ESNCCylinderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
