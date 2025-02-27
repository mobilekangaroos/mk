
import BusinessPage from '@/components/BusinessPage';

import { generatePageMetadata } from '@/app/utils/metadata';

export const metadata = generatePageMetadata({
  title: 'Device Repair & IT Solutions for Businesses | Mobilekangaroo',
  description: "Mobile Kangaroo offers expert device repair & IT solutions for businesses. Fast, reliable service to keep your team connected. Apple Authorized Provider!",
  keywords: 'apple authorized provider, reliable device repair services, expert device repair, IT solutions for businesses',
  canonicalUrl: 'https://www.mobilekangaroo.com/business',
});

// Define the server component
export default function AboutPage() {
  return <BusinessPage />;
}
