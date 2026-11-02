import View from "../all/View";
import Prefetched from "@/src/app/Common/ssr/Prefetched";
import { weldQueries } from "@/src/app/Common/ssr/listingQueries";

// Server-loads the model table so it is in the HTML search engines read
export const revalidate = 3600;

export default function Page() {
  return (
    <Prefetched queries={weldQueries(['PMRT', 'PMBT'])}>
      <View
      defaultFittingTypes={['PMRT', 'PMBT']}
      heading="Weld Tees"
      intro="SS316 male run tees and male branch tees with tube socket weld (TSW) and NPT male threaded ends, for permanent three-way connections in instrumentation tubing."
    />
    </Prefetched>
  );
}
