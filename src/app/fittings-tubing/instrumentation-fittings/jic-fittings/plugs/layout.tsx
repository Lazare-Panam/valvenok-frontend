import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "JIC Plugs & Caps — 37° Flare Tube Caps, SS316 | Valvenok",
  description:
    "316 stainless steel 37° flared JIC tube caps, cap assemblies and tube plugs for closing off JIC flare lines. Filter by size and request a quote today.",
  path: "/fittings-tubing/instrumentation-fittings/jic-fittings/plugs",
});

export default function PlugsCapsNutsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
