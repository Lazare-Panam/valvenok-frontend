import View from "../all/View";
import Prefetched from "@/src/app/Common/ssr/Prefetched";
import { jicQueries } from "@/src/app/Common/ssr/listingQueries";

// Server-loads the model table so it is in the HTML search engines read
export const revalidate = 3600;

export default function Page() {
  return (
    <Prefetched queries={jicQueries(['N', 'TC', 'TCA', 'TP'])}>
      <View defaultFittingTypes={['N', 'TC', 'TCA', 'TP']} />
    </Prefetched>
  );
}
