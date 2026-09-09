import WeldFittingPage from "../all/page"

import type { Metadata } from "next";
export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/weld-fittings/tees" },
};

export default function WeldFittingTees() {
  return <WeldFittingPage defaultFittingTypes={['PMRT', 'PMBT']} />
}