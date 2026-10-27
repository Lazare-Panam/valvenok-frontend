import type { Metadata } from "next";
// app/valves/layout.tsx

import { Suspense } from 'react';
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "SS316 Instrumentation & Process Valves",
  description:
    "Valvenok supplies a complete range of SS316 valves for instrumentation and process systems. Ball valves, needle valves, check valves and relief valves engineered for high-pressure, leak-tight performance.",
  path: "/valves/instrumentation-valves",
});

export default function ValvesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}