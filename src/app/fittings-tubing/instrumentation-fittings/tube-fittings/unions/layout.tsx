import type { Metadata } from 'next'
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/tube-fittings/unions" },
  title: { absolute: "Tube Unions, Union Elbows & Union Tees — SS316 | Valvenok" },
  description: "Stainless steel unions, reducing unions, bulkhead unions, union elbows, union tees and union crosses in imperial and metric tube OD. Request a quote.",
  openGraph: {
    title: "Tube Unions, Union Elbows & Union Tees — SS316 | Valvenok",
    description: "Stainless steel unions, reducing unions, bulkhead unions, union elbows, union tees and union crosses in imperial and metric tube OD. Request a quote.",
    type: 'website',
  },
}

export default function UnionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<RangeCopy path="/fittings-tubing/instrumentation-fittings/tube-fittings/unions" /></>
}