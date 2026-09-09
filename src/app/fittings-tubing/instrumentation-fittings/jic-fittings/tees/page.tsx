import JICProductPage from "../all/page"

import type { Metadata } from "next";
export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/jic-fittings/tees" },
};

export default function Tees() {
  return <JICProductPage defaultFittingTypes={['MBT', 'AMBT', 'MRT', 'FBT', 'FRT', 'UT', 'SRT', 'SBT', 'UC']} />
}
