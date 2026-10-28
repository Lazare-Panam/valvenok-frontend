import type { Metadata } from 'next'
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/tube-fittings/adapters" },
  title: { absolute: "Tube Fitting Adapters — Male & Female, SS316 | Valvenok" },
  description: "Stainless steel male and female tube adapter fittings in imperial and metric tube OD, with NPT, BSPT, BSPP, RP, RG and SAE/MS thread types.",
  openGraph: {
    title: "Tube Fitting Adapters — Male & Female, SS316 | Valvenok",
    description: "Stainless steel male and female tube adapter fittings in imperial and metric tube OD, with NPT, BSPT, BSPP, RP, RG and SAE/MS thread types.",
    type: 'website',
  },
}

export default function AdapterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<RangeCopy path="/fittings-tubing/instrumentation-fittings/tube-fittings/adapters" /></>
}