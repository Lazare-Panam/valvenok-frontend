import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";
import HPFittingsProductsPage from "./PageClient";

// Server wrapper so the range copy is rendered on this page only, not on the
// nested routes under it (which it would be if mounted from the layout).
export default function Page() {
  return (
    <>
      <HPFittingsProductsPage />
      <RangeCopy path="/high-pressure/fittings/products" />
    </>
  );
}
