import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Product Categories",
  description:
    "Browse Valvenok's six core product categories: instrumentation fittings, pneumatics, filters, actuators, valves, and pumps & seals for flow-control systems.",
  path: "/categories",
});

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
