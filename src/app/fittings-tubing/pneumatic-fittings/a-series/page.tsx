import View from "./View";
import Prefetched from "@/src/app/Common/ssr/Prefetched";
import { apFittingQueries } from "@/src/app/Common/ssr/listingQueries";

// Server-loads the model table so it is in the HTML search engines read
export const revalidate = 3600;

export default function Page() {
  return (
    <Prefetched queries={apFittingQueries}>
      <View />
    </Prefetched>
  );
}
