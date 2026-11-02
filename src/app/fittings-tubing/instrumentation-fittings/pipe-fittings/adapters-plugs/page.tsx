import View from "../all/View";
import Prefetched from "@/src/app/Common/ssr/Prefetched";
import { pipeQueries } from "@/src/app/Common/ssr/listingQueries";

// Server-loads the model table so it is in the HTML search engines read
export const revalidate = 3600;

export default function Page() {
  return (
    <Prefetched queries={pipeQueries(['A', 'RA', 'RB', 'HP', 'HHP', 'PC'])}>
      <View defaultFittingTypes={['A', 'RA', 'RB', 'HP', 'HHP', 'PC']} />
    </Prefetched>
  );
}
