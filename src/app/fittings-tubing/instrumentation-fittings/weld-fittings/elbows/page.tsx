import WeldFittingPage from "../all/page"

import type { Metadata } from "next";
export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/weld-fittings/elbows" },
};

export default function WeldFittingElbows() {
  return <WeldFittingPage defaultFittingTypes={['ME', 'FE']} />
}   