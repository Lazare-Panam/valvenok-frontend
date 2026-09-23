import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/returns-policy" },
  title: { absolute: "Returns Policy and Refunds – Valvenok" },
  description:
    "Learn about our 30-day return window, non-returnable items, faulty or damaged goods process, and how to start a return with Valvenok.",
  openGraph: {
    title: "Returns Policy | Valvenok",
    description:
      "Learn about our 30-day return window, non-returnable items, and how to start a return with Valvenok.",
    type: "website",
  },
};

export default function ReturnsPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
