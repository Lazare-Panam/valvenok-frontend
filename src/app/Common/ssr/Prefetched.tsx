import { QueryClient, dehydrate, HydrationBoundary, type QueryKey } from "@tanstack/react-query";

export type PrefetchQuery = { queryKey: QueryKey; queryFn: () => Promise<unknown> };

// Loads a listing's data on the server and hands it to the client hooks, so the
// model table is in the HTML Google reads instead of a "LOADING..." placeholder.
// The query keys must match the client hooks exactly (see listingQueries.ts).
// If the API is down the page still renders and the hooks fetch in the browser.
export default async function Prefetched({ queries, children }: { queries: PrefetchQuery[]; children: React.ReactNode }) {
  const client = new QueryClient();
  await Promise.all(queries.map((q) => client.prefetchQuery(q)));
  return <HydrationBoundary state={dehydrate(client)}>{children}</HydrationBoundary>;
}
