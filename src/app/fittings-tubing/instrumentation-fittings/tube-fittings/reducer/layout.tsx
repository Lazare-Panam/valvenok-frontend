import type { Metadata } from 'next'
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/tube-fittings/reducer" },
  title: { absolute: "Tube Fitting Reducers & Bulkhead Reducers — SS316 | Valvenok" },
  description: "Stainless steel tube reducers, bulkhead reducers and reducer elbows in imperial, metric and mixed metric-imperial sizes. Filter by size and get a quote.",
  openGraph: {
    title: "Tube Fitting Reducers & Bulkhead Reducers — SS316 | Valvenok",
    description: "Stainless steel tube reducers, bulkhead reducers and reducer elbows in imperial, metric and mixed metric-imperial sizes. Filter by size and get a quote.",
    type: 'website',
  },
}

export default function ReducerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<RangeCopy path="/fittings-tubing/instrumentation-fittings/tube-fittings/reducer" /></>
}