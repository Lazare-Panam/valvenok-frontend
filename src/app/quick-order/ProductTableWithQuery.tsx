"use client";

import { useSearchParams } from "next/navigation";
import ProductTable from "./ProductTable";

/** ProductTable with its search pre-filled from ?q= (homepage hero search). */
export default function ProductTableWithQuery() {
  const q = useSearchParams().get("q")?.slice(0, 80) ?? "";
  // key: a new search term starts a fresh table state
  return <ProductTable key={q} initialSearch={q} />;
}
