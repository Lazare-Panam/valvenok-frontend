import type { Metadata } from "next";
// app/valves/layout.tsx

import { Suspense } from 'react';
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "SS316 Instrumentation Valves — Ball, Needle & Check | Valvenok",
  description:
    "SS316 instrumentation valves for process and high-pressure systems: ball valves, needle valves, check valves and relief valves. Request a quote.",
  path: "/valves/instrumentation-valves",
});

export default function ValvesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}