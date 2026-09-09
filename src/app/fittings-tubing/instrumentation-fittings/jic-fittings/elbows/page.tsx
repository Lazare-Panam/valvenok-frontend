import JICProductPage from "../all/page"

import type { Metadata } from "next";
export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/jic-fittings/elbows" },
};

export default function Elbows() {
  return <JICProductPage defaultFittingTypes={['ME', 'AME', 'LME', 'FE', 'UE']} />
}