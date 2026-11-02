import View from "../all/View";
import Prefetched from "@/src/app/Common/ssr/Prefetched";
import { weldQueries } from "@/src/app/Common/ssr/listingQueries";

// Server-loads the model table so it is in the HTML search engines read
export const revalidate = 3600;

export default function Page() {
  return (
    <Prefetched queries={weldQueries(['ME', 'FE'])}>
      <View
      defaultFittingTypes={['ME', 'FE']}
      heading="Weld Elbows"
      intro="SS316 male and female elbows with a tube socket weld (TSW) end and an NPT threaded end, for permanent changes of direction in instrumentation tubing."
    />
    </Prefetched>
  );
}
