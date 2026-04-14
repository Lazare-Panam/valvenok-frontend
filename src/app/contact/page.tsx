// app/contact/page.tsx  (or wherever this file lives)
import { Suspense } from "react";
import EnquiryForm from "./Enquiry";

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <EnquiryForm />
    </Suspense>
  );
}
