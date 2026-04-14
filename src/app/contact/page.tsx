import { Suspense } from 'react';
import { Metadata } from 'next';
import EnquiryForm from './Enquiry';

interface Props {
  searchParams: { product_id?: string };
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const productId = searchParams.product_id;

  return {
    title: productId
      ? `Request a Quote for ${productId} | Valvenok`
      : 'Contact Our Engineering Team | Valvenok',
    description: productId
      ? `Request a formal quotation for ${productId}. Our technical team will respond with pricing and availability within 24 hours.`
      : 'Get expert technical support and bulk procurement quotes. Our engineering team responds to all industrial enquiries within 24 hours.',
    openGraph: {
      title: productId
        ? `Quote Request: ${productId} | Valvenok`
        : 'Contact Valvenok | Industrial Distribution Support',
      description: productId
        ? `Enquiry for part ${productId} — SS316 fittings, valves and instrumentation components.`
        : 'Connect with Valvenok for technical specs, mechanical seal selection, and valve distribution across the UK.',
      url: productId
        ? `https://www.valvenok.com/contact?product_id=${productId}`
        : 'https://www.valvenok.com/contact',
      siteName: 'Valvenok',
      locale: 'en_GB',
      type: 'website',
    },
  };
}

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <EnquiryForm />
    </Suspense>
  );
}