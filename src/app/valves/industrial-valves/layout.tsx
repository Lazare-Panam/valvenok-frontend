import type { Metadata } from "next";
// app/industrial-valves/layout.tsx

import { Suspense } from 'react';
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Industrial Valves",
  description:
    "Browse Valvenok's full range of industrial valves — API 6D ball valves, DBB, trunnion, needle, check, and gas valves from Batu Valve and Atam. High-pressure rated up to 1000 bar.",
  path: "/valves/industrial-valves",
});

export default function IndustrialValvesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}