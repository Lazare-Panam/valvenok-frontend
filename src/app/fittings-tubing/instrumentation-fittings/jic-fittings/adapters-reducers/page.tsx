import JICProductPage from "../all/page";

import type { Metadata } from "next";
export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/jic-fittings/adapters-reducers" },
};

export default function AdaptersReducers() {
  return <JICProductPage defaultFittingTypes={["RA", "S"]} />;
}
